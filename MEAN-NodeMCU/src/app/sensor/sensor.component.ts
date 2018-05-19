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
    'Volts': 0,
    'index': 0
  }];
  session = false;
  sessionID = {
    current: 0,
    next: 0
  };
  private chart: AmChart;

  constructor(private _sensorService: SensorService, private AmCharts: AmChartsService) {
  }

  setSession(status) {
    if (status) {
      ++this.sessionID.current;
      this.sessionID.next = this.sessionID.current + 1;
    }
    this._sensorService.emit('setSession', {
      msg: {'sessionStatus': this.session = status, 'sessionIndex': this.sessionID.current}
    });
  }

  ngOnInit() {
    // Test messages
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

    // Data handling
    this._sensorService.emit('Init data', {
      msg: 'Init data'
    });
    this._sensorService.on('Sensors data', (data: any) => {
      // console.log(data.msg);
      this.data.light = data.msg.light;
      this.data.temp = data.msg.temp;
      this.data.bv = data.msg.bv;
      this.data.bc = data.msg.bc;
    });
    this._sensorService.on('Remove data for chart', (data: any) => {
      this.AmCharts.updateChart(this.chart, () => {
        this.chartData = [];
        // this.chart.dataProvider = [];
      });
    });
    this._sensorService.on('Update session', (data: any) => {
      console.log(data.msg);
      if (this.chartData.length > data.msg.length) {
        const diff = this.chartData.length - data.msg.length;
        for (let i = 0; i < diff; i++) {
          this.chartData.pop();
        }
      }
      for (let i = 0; i < data.msg.length; i++) {
        if (this.chartData[i]) {
          this.chartData[i].Volts = data.msg[i].Volts;
          this.chartData[i].Time = data.msg[i].Time;
        } else if (!this.chartData[i]) {
          this.chartData.push({'Time': data.msg[i].Time, 'Volts': data.msg[i].Volts, 'index': data.msg.index});
        }
        this.AmCharts.updateChart(this.chart, () => {
          this.chart.dataProvider = this.chartData;
        });
      }
      console.log(this.chartData);
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
