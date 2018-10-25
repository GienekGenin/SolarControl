import { AmChartsModule } from '@amcharts/amcharts3-angular';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SensorComponent } from './components/sensor/sensor.component';
import { MaterialModule } from './material.module';
import { SensorService } from './services/socket/socket.service';
import { UserService } from './services/user/users.service';

const appRoutes: Routes = [
  { path: 'sensor', component: SensorComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: LoginFormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SensorComponent,
    AboutComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AmChartsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }, // <-- debugging purposes only
    ),
  ],
  providers: [SensorService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
