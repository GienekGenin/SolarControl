import { Component, OnInit } from '@angular/core';
import { SensorService } from '../sensor.service';

@Component({
  selector: 'app-weather',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  // tslint:disable-next-line
  constructor(private _sensorService: SensorService) {}
  ngOnInit() {}
}
