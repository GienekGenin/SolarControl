import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SensorService} from '../sensor.service';
import {UserService} from '../users.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(private router: Router, private _sensorService: SensorService, private user: UserService) {
  }

  users = {
    username: undefined,
    pass: undefined
  };

  loginUser(e) {
    const userName = e.target.elements[0].value;
    const password = e.target.elements[1].value;
    if (userName === this.users.username && password === this.users.pass) {
      this.router.navigate(['/sensor']);
      this.user.setUserLoggedIn(userName);
    } else if (userName === 'demo' && password === 'demo') {
      this.router.navigate(['/demo']);
      this.user.setUserLoggedIn(userName);
    } else {
      alert('Incorrect username or password');
    }
  }

  ngOnInit() {
    this._sensorService.emit('users_data', {
      msg: 'Requesting users data'
    });
    this._sensorService.on('receive_users', (data: any) => {
      this.users = data.msg;
    });
  }
}
