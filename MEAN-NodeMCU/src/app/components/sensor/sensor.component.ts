import { AmChart, AmChartsService } from '@amcharts/amcharts3-angular';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SensorService } from '../../services/socket/socket.service';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.scss'],
})
export class SensorComponent implements OnInit, AfterViewInit, OnDestroy {
  data = {
    light: [],
    temp: [],
    bv: 0,
    bc: 0,
  };
  chartData = [];
  sessions: object[];
  lastSession = null;
  deleteSessionsControl = new FormControl();
  private chart: AmChart;

  constructor(
    private _sensorService: SensorService,
    private AmCharts: AmChartsService,
  ) {}

  ngOnInit() {
    // Test events to check sockets working properly
    this._sensorService.emit('Client_asking', {
      msg: 'Client to server, can u hear me server?',
    });
    this._sensorService.on('Server_asking', (data: any) => {
      // tslint:disable-next-line:no-console
      console.log(data.msg);
      this._sensorService.emit('Client_response', {
        msg: 'Yes, its working for me!',
      });
      this._sensorService.on('Server_response', (_data: any) => {
        // tslint:disable-next-line:no-console
        console.log(_data.msg);
      });
    });
    this._sensorService.on('SensorsData', (_data: any) => {
      this.data.light = _data.msg.light;
      this.data.temp = _data.msg.temp;
      this.data.bv = _data.msg.bv;
      this.data.bc = _data.msg.bc;
    });
    this._sensorService.emit('Init', {
      msg: 'Client to server, can u hear me server?',
    });
    this._sensorService.on('GetAllSessions', (_data: any) => {
      this.sessions = _data.msg;
    });
    this._sensorService.on('GetLastSession', (_data: any) => {
      this.lastSession = _data.msg[0];
    });
    this._sensorService.on('InitData', (_msg: any) => {
      this.chartData = _msg.data;
      this.updateChart();
    });
    this._sensorService.on('GetSelectedSession', (_msg: any) => {
      this.chartData = _msg.data;
      this.updateChart();
    });
    this._sensorService.on('NewData', (data: any) => {
      this.chartData.push({
        time: data.time,
        bv: data.msg.bv,
        bc: data.msg.bc,
        index: this.chartData.length,
      });
      this.updateChart();
    });
  }

  setSession() {
    this.AmCharts.updateChart(this.chart, () => {
      this.chart.dataProvider = [];
      this.chartData = [];
    });
    this._sensorService.emit('StartNewSession', {
      msg: 'StartNewSession',
    });
  }

  stopSession() {
    this._sensorService.emit('StopSession', {
      msg: 'StopSession',
    });
  }

  getSelectedSession(sessionID) {
    this._sensorService.emit('GetSelectedSession', {
      msg: sessionID,
    });
  }

  deleteSessions() {
    this._sensorService.emit('DeleteSessions', {
      msg: this.deleteSessionsControl.value,
    });
  }

  removeIcon() {
    const parent = document.getElementsByClassName('amcharts-chart-div')[0];
    const child = document.querySelectorAll('[title="JavaScript charts"]')[0];
    parent.removeChild(child);
    return true;
  }

  updateChart() {
    this.AmCharts.updateChart(this.chart, () => {
      this.chart.dataProvider = this.chartData;
    });
    this.removeIcon();
  }

  // Chart creation after view init
  ngAfterViewInit() {
    this.chart = this.AmCharts.makeChart('chartdiv', {
      type: 'serial',
      theme: 'light',
      autoMarginOffset: 20,
      legend: {
        useGraphSettings: true,
      },
      dataProvider: this.chartData,
      synchronizeGrid: true,
      color: '#111111',
      categoryField: 'time',
      mouseWheelZoomEnabled: true,
      valueAxes: [
        {
          id: 'v1',
          axisColor: '#FF6600',
          axisThickness: 2,
          axisAlpha: 1,
          position: 'left',
          title: 'Voltage',
        },
        {
          id: 'v2',
          axisColor: '#FCD202',
          axisThickness: 2,
          axisAlpha: 1,
          position: 'right',
          title: 'Current',
        },
      ],
      graphs: [
        {
          valueAxis: 'v1',
          lineColor: '#FF6600',
          bullet: 'round',
          bulletBorderThickness: 1,
          hideBulletsCount: 50,
          title: 'Voltage',
          valueField: 'bv',
          useLineColorForBulletBorder: true,
          balloon: {
            drop: true,
          },
          fillAlphas: 0,
        },
        {
          valueAxis: 'v2',
          lineColor: '#FCD202',
          bullet: 'square',
          bulletBorderThickness: 1,
          hideBulletsCount: 50,
          title: 'Current',
          valueField: 'bc',
          useLineColorForBulletBorder: true,
          balloon: {
            drop: true,
          },
          fillAlphas: 0,
        },
      ],
      chartScrollbar: [
        {
          autoGridCount: true,
          graph: 'v1',
          scrollbarHeight: 20,
        },
        {
          autoGridCount: true,
          graph: 'v2',
          scrollbarHeight: 20,
        },
      ],
      chartCursor: {
        cursorPosition: 'mouse',
      },
      categoryAxis: {
        parseDates: false,
        axisColor: '#111',
        minorGridEnabled: true,
      },
      export: {
        enabled: true,
        position: 'bottom-right',
      },
    });
  }

  // Remove chart if user session is over
  ngOnDestroy() {
    if (this.chart) {
      this.AmCharts.destroyChart(this.chart);
    }
  }
}
