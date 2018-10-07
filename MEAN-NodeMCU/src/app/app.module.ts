import { AmChartsModule } from '@amcharts/amcharts3-angular';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MaterialModule } from './material.module';
import { SensorService } from './sensor.service';
import { SensorComponent } from './sensor/sensor.component';
import { UserService } from './users.service';

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
