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
  oldData = {
    'Time': 0,
    'Volts': 0,
    'Current': 0,
    'index': 0
  };
  chartData = [];
  session = {
    current: 0,
    next: 0
  };
  private chart: AmChart;

  constructor(private _sensorService: SensorService, private AmCharts: AmChartsService) {
  }

// set session index and signals server to start or stop measuring session
  setSession(e) {
    this.session.current = +e.target.value;
    this.session.next = +this.session.current + 1;
    this._sensorService.emit('Set_session', {
      msg: {'sessionStatus': true, 'sessionID': this.session.current}
    });
    this.AmCharts.updateChart(this.chart, () => {
      this.chartData = [];
    });
  }

  stopSession(status) {
    this._sensorService.emit('Stop_session', {
      msg: status
    });
  }

  chooseSession(e) {
    this._sensorService.emit('Choose_session', {
      msg: +e.target.value
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

    // Handling new data incoming from DB
    this._sensorService.on('View_session', (data: any) => {
      this.chartData = data.msg;
      this.AmCharts.updateChart(this.chart, () => {
        this.chart.dataProvider = this.chartData;
      });
    });
    this._sensorService.on('Update_session', (data: any) => {
      // console.log('Update session');
      // console.log(data.msg);
      console.log(this.oldData !== data.msg);
      console.log('___________');
      console.log(data.msg);
      console.log(this.oldData);
      console.log('___________');
      if (this.oldData.index !== data.msg.index) {
        this.chartData.push({
          'Time': data.msg.Time,
          'Volts': data.msg.Volts,
          'Current': data.msg.Current,
          'index': data.msg.index
        });
        this.oldData = data.msg;
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
      'autoMarginOffset': 20,
      'legend': {
        'useGraphSettings': true
      },
      'dataProvider': this.chartData,
      'synchronizeGrid': true,
      'color': '#111111',
      'categoryField': 'Time',
      'mouseWheelZoomEnabled': true,
      'valueAxes': [{
        'id': 'v1',
        'axisColor': '#FF6600',
        'axisThickness': 2,
        'axisAlpha': 1,
        'position': 'left',
        'title': 'Voltage'
      }, {
        'id': 'v2',
        'axisColor': '#FCD202',
        'axisThickness': 2,
        'axisAlpha': 1,
        'position': 'right',
        'title': 'Current'
      }],
      'graphs': [{
        'valueAxis': 'v1',
        'lineColor': '#FF6600',
        'bullet': 'round',
        'bulletBorderThickness': 1,
        'hideBulletsCount': 50,
        'title': 'Voltage',
        'valueField': 'Volts',
        'useLineColorForBulletBorder': true,
        'balloon': {
          'drop': true
        },
        'fillAlphas': 0
      }, {
        'valueAxis': 'v2',
        'lineColor': '#FCD202',
        'bullet': 'square',
        'bulletBorderThickness': 1,
        'hideBulletsCount': 50,
        'title': 'Current',
        'valueField': 'Current',
        'useLineColorForBulletBorder': true,
        'balloon': {
          'drop': true
        },
        'fillAlphas': 0
      }],
      'chartScrollbar': [{
        'autoGridCount': true,
        'graph': 'v1',
        'scrollbarHeight': 20
      }, {
        'autoGridCount': true,
        'graph': 'v2',
        'scrollbarHeight': 20
      }],
      'chartCursor': {
        'cursorPosition': 'mouse'
      },
      'categoryAxis': {
        'parseDates': false,
        'axisColor': '#111',
        'minorGridEnabled': true
      },
      'export': {
        'enabled': true,
        'position': 'bottom-right'
      }
    });
  }

  // Remove chart if user session is over
  ngOnDestroy() {
    if (this.chart) {
      this.AmCharts.destroyChart(this.chart);
    }
  }
}
