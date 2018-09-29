import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SensorService } from '../sensor.service';
import { UserService } from '../users.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  constructor(
    private router: Router,
    private _sensorService: SensorService,
    private userService: UserService
  ) {}

  user = {
    name: undefined,
    password: undefined
  };

  loginUser(e) {
    const name = e.target.elements[0].value;
    const password = e.target.elements[1].value;
    if (name === '' || password === '') {
      alert('Fill all fields');
      return false;
    }
    this._sensorService.emit('UsersData', {
      user: { name, password }
    });
    this._sensorService.on('RecieveUsers', (data: any) => {
      this.user = data.user;
      if (data.user === null) {
        alert('Incorrect username or password');
      } else if (name === this.user.name && password === this.user.password) {
        this.router.navigate(['/sensor']);
        this.userService.setUserLoggedIn(name);
      } else {
        alert('Incorrect username or password');
      }
    });
  }

  ngOnInit() {}
}
