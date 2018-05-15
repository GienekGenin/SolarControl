import {Component, OnInit} from '@angular/core';
import {SensorService} from '../sensor.service';

@Component({
  selector: 'app-weather',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private _sensorService: SensorService) {
  }
  ngOnInit() {

  }
}
