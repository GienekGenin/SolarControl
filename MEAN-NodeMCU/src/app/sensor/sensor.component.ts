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

  // set session index and signals server to start or stop measuring session
  setSession(status) {
    if (status) {
      ++this.sessionID.current;
      this.sessionID.next = this.sessionID.current + 1;
    }
    this._sensorService.emit('Set_session', {
      msg: {'sessionStatus': this.session = status, 'sessionIndex': this.sessionID.current}
    });
  }

  // emit event to clear all data in DB before start
  clearDB() {
    this._sensorService.emit('Clear_DB', {
      msg: 'clear DB'
    });
  }

  // what will be executed after component init
  ngOnInit() {
    // Test events to check sockets working properly
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

    // Socket events that handling actual data-flow
    // Telling server to start data transfer
    this._sensorService.emit('Init_data', {
      msg: 'Init data'
    });
    // Accept sensor values
    this._sensorService.on('Sensors_data', (data: any) => {
      this.data.light = data.msg.light;
      this.data.temp = data.msg.temp;
      this.data.bv = data.msg.bv;
      this.data.bc = data.msg.bc;
    });
    // Clear data from chart before start of the new session
    this._sensorService.on('Remove_data_from_chart', (data: any) => {
      this.AmCharts.updateChart(this.chart, () => {
        this.chartData = [];
      });
    });
    // Handling new data incoming from DB
    this._sensorService.on('Update_session', (data: any) => {
      //console.log(data.msg);
      for (let i = 0; i < data.msg.length; i++) {
        this.chartData.push({'Time': data.msg[i].Time, 'Volts': data.msg[i].Volts, 'index': data.msg[i].index});
      }
      for (let i = 0; i < this.chartData.length; i++) {
        for (let c = 0; c < this.chartData.length; c++) {
          if (this.chartData[i].index === this.chartData[c].index && i > c) {
            this.chartData.splice(c, 1);
          }
        }
      }
      this.AmCharts.updateChart(this.chart, () => {
        this.chart.dataProvider = this.chartData;
      });
      // console.log(this.chartData);
    });
  }

  // Chart creation after view init
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

  // Remove chart if user session is over
  ngOnDestroy() {
    if (this.chart) {
      this.AmCharts.destroyChart(this.chart);
    }
  }
}
