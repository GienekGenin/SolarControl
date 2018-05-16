import {Component, OnInit, AfterViewInit, OnDestroy} from '@angular/core';
import {SensorService} from '../sensor.service';
import {AmChartsService, AmChart} from '@amcharts/amcharts3-angular';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.scss']
})
export class SensorComponent implements OnInit {
  data = {
    'light': [],
    'temp': [],
    'bv': 0,
    'bc': 0
  };
  chartData = [{
    'Time': '0',
    'Volts': 0
  }];
  session = false;
  sessionIndex = {
    current: 0,
    next: 0
  };
  private chart: AmChart;

  constructor(private _sensorService: SensorService, private AmCharts: AmChartsService) {
  }

  setSession(status) {
    if (status) {
      ++this.sessionIndex.current;
      this.sessionIndex.next = this.sessionIndex.current + 1;
    }
    this._sensorService.emit('setSession', {
      msg: {'sessionStatus': this.session = status, 'sessionIndex': this.sessionIndex.current}
    });
  }

  ngOnInit() {
    this._sensorService.emit('Client_asking', {
      msg: 'Client to server, can u hear me server?'
    });
    this._sensorService.on('Server_asking', (data: any) => {
      console.log(data.msg);
      this._sensorService.emit('Client_response', {
        msg: 'Yes, its working for me!'
      });
      this._sensorService.on('Server_response', (_data: any) => {
        console.log(_data.msg);
      });
    });
    this._sensorService.emit('Init data', {
      msg: 'Init data'
    });
    this._sensorService.on('First_data_transfer', (data: any) => {
      for (let i = 1; i < data.msg.length; i++) {
        this.chartData[0].Time = data.msg[0].Time;
        this.chartData[0].Volts = data.msg[0].Volts;
        this.chartData.push({'Time': data.msg[i].Time, 'Volts': data.msg[i].Volts});
      }
      this.AmCharts.updateChart(this.chart, () => {
        this.chart.dataProvider = this.chartData;
      });
    });
    this._sensorService.on('Battery voltage', (data: any) => {
      let index = 0;
      for (let i = 0; i < data.msg.length; i++) {
        if (this.chartData[this.chartData.length - 1].Time === data.msg[i].Time) {
          index = i;
        }
      }
      for (let i = index + 1; i < data.msg.length; i++) {
        console.log('In push');
        this.chartData.push({'Time': data.msg[i].Time, 'Volts': data.msg[i].Volts});
        this.AmCharts.updateChart(this.chart, () => {
          this.chart.dataProvider = this.chartData;
        });
      }
    });
    this._sensorService.on('Sensors data', (data: any) => {
      console.log(data.msg);
      this.data.light = data.msg.light;
      this.data.temp = data.msg.temp;
      this.data.bv = data.msg.bv;
      this.data.bc = data.msg.bc;
    });
  }

  ngAfterViewInit() {
    this.chart = this.AmCharts.makeChart('chartdiv', {
      'type': 'serial',
      'theme': 'light',
      'dataProvider': this.chartData,
      'color': '#111111',
      'categoryField': 'Time',
      'graphs': [{
        'valueField': 'Volts',
        'type': 'line',
        'fillAlphas': 0.5,
        'bullet': 'round',
        'lineColor': '#8d1cc6',
      }]
    });
  }

  ngOnDestroy() {
    if (this.chart) {
      this.AmCharts.destroyChart(this.chart);
    }
  }
}
