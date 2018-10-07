webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "a {\n  text-decoration: none; }\n  a:hover {\n    text-decoration: none; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__amcharts_amcharts3_angular__ = __webpack_require__("./node_modules/@amcharts/amcharts3-angular/es2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_about_about_component__ = __webpack_require__("./src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_login_form_login_form_component__ = __webpack_require__("./src/app/components/login-form/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_sensor_sensor_component__ = __webpack_require__("./src/app/components/sensor/sensor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_module__ = __webpack_require__("./src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_socket_socket_service__ = __webpack_require__("./src/app/services/socket/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_user_users_service__ = __webpack_require__("./src/app/services/user/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    { path: 'sensor', component: __WEBPACK_IMPORTED_MODULE_10__components_sensor_sensor_component__["a" /* SensorComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_8__components_about_about_component__["a" /* AboutComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_login_form_login_form_component__["a" /* LoginFormComponent */] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_sensor_sensor_component__["a" /* SensorComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_login_form_login_form_component__["a" /* LoginFormComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__amcharts_amcharts3_angular__["a" /* AmChartsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_11__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { enableTracing: false }),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_socket_socket_service__["a" /* SensorService */], __WEBPACK_IMPORTED_MODULE_13__services_user_users_service__["a" /* UserService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n  <nav>\r\n    <a routerLink=\"/sensor\" routerLinkActive=\"active\">Sensors data</a>\r\n  </nav>\r\n  About\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/about/about.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_socket_socket_service__ = __webpack_require__("./src/app/services/socket/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    // tslint:disable-next-line
    function AboutComponent(_sensorService) {
        this._sensorService = _sensorService;
    }
    AboutComponent.prototype.ngOnInit = function () { };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-weather',
            template: __webpack_require__("./src/app/components/about/about.component.html"),
            styles: [__webpack_require__("./src/app/components/about/about.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_socket_socket_service__["a" /* SensorService */]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/login-form/login-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\"></div>\r\n<div class=\"grad\"></div>\r\n<div class=\"header\">\r\n  <div>Solar<span>Project</span></div>\r\n</div>\r\n<br>\r\n<form class=\"login\" (submit)=\"loginUser($event)\">\r\n  <input type=\"text\" placeholder=\"admin\" name=\"user\"><br>\r\n  <input type=\"password\" placeholder=\"admin\" name=\"password\"><br>\r\n  <button mat-button type=\"submit\" value=\"Login\">Login</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/components/login-form/login-form.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Exo:100,200,400);\n@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:700,400,300);\nbody {\n  margin: 0;\n  padding: 0;\n  background: #fff;\n  color: #fff;\n  font-family: Arial;\n  font-size: 12px; }\n.body {\n  position: fixed;\n  top: -5px;\n  left: -5px;\n  right: -5px;\n  bottom: -5px;\n  width: auto;\n  height: auto;\n  background-image: url(https://lh5.googleusercontent.com/V4B42FVKdZrOY1eRdVMuI7k8Q4ocPj_VnUOEAHWZkfhtnNn8pebJDFvRTxOIgG0H-qt4mzKkTzoEh_DpLUJC=w1366-h626-rw);\n  background-size: cover;\n  -webkit-filter: blur(5px);\n  z-index: 0; }\n.grad {\n  position: absolute;\n  top: -0px;\n  left: -0px;\n  right: -0px;\n  bottom: -0px;\n  width: auto;\n  height: auto;\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0, 0, 0, 0)), color-stop(100%, rgba(0, 0, 0, 0.65)));\n  /* Chrome,Safari4+ */\n  z-index: 1;\n  opacity: 0.7; }\n.header {\n  position: absolute;\n  top: calc(50% - 35px);\n  left: calc(50% - 255px);\n  z-index: 2; }\n.header div {\n  float: left;\n  color: #fff;\n  font-family: 'Exo', sans-serif;\n  font-size: 35px;\n  font-weight: 200; }\n.header div span {\n  color: red !important; }\n.login {\n  position: absolute;\n  top: calc(50% - 75px);\n  left: calc(50% - 50px);\n  height: 150px;\n  width: 350px;\n  padding: 10px;\n  z-index: 2; }\n.login input[type=text] {\n  width: 250px;\n  height: 30px;\n  background: transparent;\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  border-radius: 2px;\n  color: #fff;\n  font-family: 'Exo', sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  padding: 4px; }\n.login input[type=password] {\n  width: 250px;\n  height: 30px;\n  background: transparent;\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  border-radius: 2px;\n  color: #fff;\n  font-family: 'Exo', sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  padding: 4px;\n  margin-top: 10px; }\n.login button {\n  width: 250px;\n  background: #fff;\n  border: 1px solid #fff;\n  cursor: pointer;\n  border-radius: 2px;\n  color: #a18d6c;\n  font-family: 'Exo', sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  margin-top: 10px; }\n.login input[type=submit]:hover {\n  opacity: 0.8; }\n.login input[type=text]:focus {\n  border: 1px solid rgba(255, 255, 255, 0.9); }\n.login input[type=password]:focus {\n  outline: none;\n  border: 1px solid rgba(255, 255, 255, 0.9); }\n::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.6); }\n::-moz-input-placeholder {\n  color: rgba(255, 255, 255, 0.6); }\n"

/***/ }),

/***/ "./src/app/components/login-form/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_socket_socket_service__ = __webpack_require__("./src/app/services/socket/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_users_service__ = __webpack_require__("./src/app/services/user/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(router, _sensorService, userService) {
        this.router = router;
        this._sensorService = _sensorService;
        this.userService = userService;
        this.user = {
            name: undefined,
            password: undefined,
        };
    }
    LoginFormComponent.prototype.loginUser = function (e) {
        var _this = this;
        var name = e.target.elements[0].value;
        var password = e.target.elements[1].value;
        if (name === '' || password === '') {
            alert('Fill all fields');
            return false;
        }
        this._sensorService.emit('UsersData', {
            user: { name: name, password: password },
        });
        this._sensorService.on('RecieveUsers', function (data) {
            _this.user = data.user;
            if (data.user === null) {
                alert('Incorrect username or password');
            }
            else if (name === _this.user.name && password === _this.user.password) {
                _this.router.navigate(['/sensor']);
                _this.userService.setUserLoggedIn(name);
            }
            else {
                alert('Incorrect username or password');
            }
        });
    };
    LoginFormComponent.prototype.ngOnInit = function () { };
    LoginFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login-form',
            template: __webpack_require__("./src/app/components/login-form/login-form.component.html"),
            styles: [__webpack_require__("./src/app/components/login-form/login-form.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_socket_socket_service__["a" /* SensorService */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_users_service__["a" /* UserService */]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/components/sensor/sensor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center\">\r\n      <h1>\r\n        Welcome\r\n      </h1>\r\n    </div>\r\n    <div class=\"col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center\">\r\n      <img width=\"630\" alt=\"IOT Logo\" src=\"../../assets/img/IOT.png\">\r\n    </div>\r\n    <div class=\"col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center\">\r\n      <nav>\r\n        <a routerLink=\"/about\" routerLinkActive=\"active\">About project</a>\r\n      </nav>\r\n    </div>\r\n  </div>\r\n  <div class=\"row d-flex justify-content-center\">\r\n    <div class=\"col-sm-6 col-md-6 col-lg-6 d-flex justify-content-center data_container\">\r\n      <table id=\"sensor\">\r\n        <tr>\r\n          <td>\r\n            <p class=\"light\">{{data.light[0]}}</p>\r\n            <p class=\"temp\">{{data.temp[0]}}&deg;</p>\r\n          </td>\r\n          <td>\r\n            <p class=\"light\">{{data.light[1]}}</p>\r\n            <p class=\"temp\">{{data.temp[1]}}&deg;</p>\r\n          </td>\r\n          <td>\r\n            <p class=\"light\">{{data.light[2]}}</p>\r\n            <p class=\"temp\">{{data.temp[2]}}&deg;</p>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <p class=\"light\">{{data.light[3]}}</p>\r\n            <p class=\"temp\">{{data.temp[3]}}&deg;</p>\r\n          </td>\r\n          <td>\r\n            <p class=\"light\">{{data.light[4]}}</p>\r\n            <p class=\"temp\">{{data.temp[4]}}&deg;</p>\r\n          </td>\r\n          <td>\r\n            <p class=\"light\">{{data.light[5]}}</p>\r\n            <p class=\"temp\">{{data.temp[5]}}&deg;</p>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <p class=\"light\">{{data.light[6]}}</p>\r\n            <p class=\"temp\">{{data.temp[6]}}&deg;</p>\r\n          </td>\r\n          <td>\r\n            <p class=\"light\">{{data.light[7]}}</p>\r\n            <p class=\"temp\">{{data.temp[7]}}&deg;</p>\r\n          </td>\r\n          <td>\r\n            <p class=\"light\">{{data.light[8]}}</p>\r\n            <p class=\"temp\">{{data.temp[8]}}&deg;</p>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n    <div class=\"col-sm-6 col-md-6 col-lg-6 d-flex justify-content-center\">\r\n      <table>\r\n        <tr>\r\n          <th>Instant Battery Voltage</th>\r\n          <th>Instant Battery Current</th>\r\n        </tr>\r\n        <tr>\r\n          <td>{{data.bv}}</td>\r\n          <td>{{data.bc}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <mat-form-field *ngIf=\"sessions\">\r\n              <mat-select placeholder=\"View session\" (change)=\"getSelectedSession($event.value)\">\r\n                <mat-option *ngFor=\"let session of sessions\" [value]=\"session.sessionID\">\r\n                  Session № {{ session.sessionID }}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </td>\r\n          <td *ngIf=\"lastSession\">Next session: {{lastSession.sessionID + 1}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <button mat-button (click)=\"setSession()\">Start new session</button>\r\n          </td>\r\n          <td *ngIf=\"lastSession\">Current session: {{lastSession.sessionID}}\r\n            <span *ngIf=\"lastSession.sessionStatus\">Running</span>\r\n            <span *ngIf=\"!lastSession.sessionStatus\">Stopped</span>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <button mat-button (click)=\"stopSession()\">Stop session</button>\r\n          </td>\r\n          <td>\r\n            <mat-form-field *ngIf=\"sessions\">\r\n              <mat-select placeholder=\"Delete sessions\" [formControl]=\"deleteSessionsControl\" multiple>\r\n                <mat-option *ngFor=\"let session of sessions\" [value]=\"session.sessionID\">{{session.sessionID}}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <div *ngIf=\"deleteSessionsControl.value\">\r\n              <button mat-button (click)=\"deleteSessions()\" [disabled]=\"deleteSessionsControl.value.length === sessions.length || deleteSessionsControl.value.length === 0\">\r\n                <span *ngIf=\"!(deleteSessionsControl.value.length === sessions.length)\">Delete sessions</span>\r\n                <span *ngIf=\"deleteSessionsControl.value.length === sessions.length\" style=\"color:red\">Can't delete all</span>\r\n              </button>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <div id=\"chartdiv\" [style.width.%]=\"100\" [style.height.px]=\"500\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/sensor/sensor.component.scss":
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n  text-align: center; }\n\n.data_container {\n  min-width: 360px;\n  min-height: 260px; }\n\n#sensor {\n  background-image: url(\"https://lh5.googleusercontent.com/TISjfhhvpS0l4IEUiAqvTS7RNHezOgMi5N7sfne-NdETRlajOdzHzfqNj26HbduGOslHVJDFTqlYtrkI55EE=w1366-h626\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: white;\n  width: 350px;\n  height: 235px; }\n\n#sensor > td {\n  margin: 10px; }\n\n.light {\n  background-color: darkviolet;\n  margin: auto;\n  width: 60px; }\n\n.temp {\n  background-color: red;\n  margin: auto;\n  width: 60px; }\n"

/***/ }),

/***/ "./src/app/components/sensor/sensor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SensorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__amcharts_amcharts3_angular__ = __webpack_require__("./node_modules/@amcharts/amcharts3-angular/es2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_socket_socket_service__ = __webpack_require__("./src/app/services/socket/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SensorComponent = /** @class */ (function () {
    function SensorComponent(_sensorService, AmCharts) {
        this._sensorService = _sensorService;
        this.AmCharts = AmCharts;
        this.data = {
            light: [],
            temp: [],
            bv: 0,
            bc: 0,
        };
        this.chartData = [];
        this.lastSession = null;
        this.deleteSessionsControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]();
    }
    SensorComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Test events to check sockets working properly
        this._sensorService.emit('Client_asking', {
            msg: 'Client to server, can u hear me server?',
        });
        this._sensorService.on('Server_asking', function (data) {
            // tslint:disable-next-line:no-console
            console.log(data.msg);
            _this._sensorService.emit('Client_response', {
                msg: 'Yes, its working for me!',
            });
            _this._sensorService.on('Server_response', function (_data) {
                // tslint:disable-next-line:no-console
                console.log(_data.msg);
            });
        });
        this._sensorService.on('SensorsData', function (_data) {
            _this.data.light = _data.msg.light;
            _this.data.temp = _data.msg.temp;
            _this.data.bv = _data.msg.bv;
            _this.data.bc = _data.msg.bc;
        });
        this._sensorService.emit('Init', {
            msg: 'Client to server, can u hear me server?',
        });
        this._sensorService.on('GetAllSessions', function (_data) {
            _this.sessions = _data.msg;
        });
        this._sensorService.on('GetLastSession', function (_data) {
            _this.lastSession = _data.msg[0];
        });
        this._sensorService.on('InitData', function (_msg) {
            _this.chartData = _msg.data;
            _this.AmCharts.updateChart(_this.chart, function () {
                _this.chart.dataProvider = _this.chartData;
            });
        });
        this._sensorService.on('GetSelectedSession', function (_msg) {
            _this.chartData = _msg.data;
            _this.AmCharts.updateChart(_this.chart, function () {
                _this.chart.dataProvider = _this.chartData;
            });
        });
        this._sensorService.on('NewData', function (data) {
            _this.chartData.push({
                time: data.time,
                bv: data.msg.bv,
                bc: data.msg.bc,
                index: _this.chartData.length,
            });
            _this.AmCharts.updateChart(_this.chart, function () {
                _this.chart.dataProvider = _this.chartData;
            });
        });
    };
    SensorComponent.prototype.setSession = function () {
        var _this = this;
        this.AmCharts.updateChart(this.chart, function () {
            _this.chart.dataProvider = [];
            _this.chartData = [];
        });
        this._sensorService.emit('StartNewSession', {
            msg: 'StartNewSession',
        });
    };
    SensorComponent.prototype.stopSession = function () {
        this._sensorService.emit('StopSession', {
            msg: 'StopSession',
        });
    };
    SensorComponent.prototype.getSelectedSession = function (sessionID) {
        this._sensorService.emit('GetSelectedSession', {
            msg: sessionID,
        });
    };
    SensorComponent.prototype.deleteSessions = function () {
        this._sensorService.emit('DeleteSessions', {
            msg: this.deleteSessionsControl.value,
        });
    };
    // Chart creation after view init
    SensorComponent.prototype.ngAfterViewInit = function () {
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
    };
    // Remove chart if user session is over
    SensorComponent.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.AmCharts.destroyChart(this.chart);
        }
    };
    SensorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-sensor',
            template: __webpack_require__("./src/app/components/sensor/sensor.component.html"),
            styles: [__webpack_require__("./src/app/components/sensor/sensor.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_socket_socket_service__["a" /* SensorService */],
            __WEBPACK_IMPORTED_MODULE_0__amcharts_amcharts3_angular__["b" /* AmChartsService */]])
    ], SensorComponent);
    return SensorComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatSelectModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatSelectModule */]],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/services/socket/socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SensorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SensorService = /** @class */ (function () {
    function SensorService() {
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__["connect"]();
    }
    SensorService.prototype.on = function (eventName, callback) {
        if (this.socket) {
            this.socket.on(eventName, function (data) {
                callback(data);
            });
        }
    };
    SensorService.prototype.emit = function (eventName, data) {
        if (this.socket) {
            this.socket.emit(eventName, data);
        }
    };
    SensorService.prototype.removeListener = function (eventName) {
        if (this.socket) {
            this.socket.removeListener(eventName);
        }
    };
    SensorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SensorService);
    return SensorService;
}());



/***/ }),

/***/ "./src/app/services/user/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserService = /** @class */ (function () {
    function UserService() {
        this.isUserLoggedIn = false;
    }
    UserService.prototype.setUserLoggedIn = function (_name) {
        this.isUserLoggedIn = true;
        this.name = _name;
    };
    UserService.prototype.getUserLoggedIn = function () {
        return this.isUserLoggedIn;
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polyfills__ = __webpack_require__("./src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])()
    .bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect__ = __webpack_require__("./node_modules/core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone__ = __webpack_require__("./node_modules/zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/* IE9, IE10 and IE11 requires all of the following polyfills. */
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following for the Reflect API. */
// import 'core-js/es6/reflect';
/* Evergreen browsers require these. */
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.

/*
 * Required to support Web Animations `@angular/platform-browser/animations`.
 * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
 */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map