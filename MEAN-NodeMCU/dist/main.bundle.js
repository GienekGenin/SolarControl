webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n  About\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sensor_service__ = __webpack_require__("../../../../../src/app/sensor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent(_sensorService) {
        this._sensorService = _sensorService;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-weather',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__sensor_service__["a" /* SensorService */]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome\r\n  </h1>\r\n  <img width=\"630\" alt=\"IOT Logo\" src=\"../assets/img/IOT.png\">\r\n  <nav>\r\n    <a routerLink=\"/sensor\" routerLinkActive=\"active\">Sensors data</a>\r\n    <a routerLink=\"/about\" routerLinkActive=\"active\">About project</a>\r\n  </nav>\r\n</div>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\n  text-decoration: none; }\n  a:hover {\n    text-decoration: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sensor_sensor_component__ = __webpack_require__("../../../../../src/app/sensor/sensor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sensor_service__ = __webpack_require__("../../../../../src/app/sensor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__amcharts_amcharts3_angular__ = __webpack_require__("../../../../@amcharts/amcharts3-angular/es2015/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: 'sensor', component: __WEBPACK_IMPORTED_MODULE_3__sensor_sensor_component__["a" /* SensorComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_8__about_about_component__["a" /* AboutComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__sensor_sensor_component__["a" /* SensorComponent */],
                __WEBPACK_IMPORTED_MODULE_8__about_about_component__["a" /* AboutComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__amcharts_amcharts3_angular__["a" /* AmChartsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
                )
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__sensor_service__["a" /* SensorService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/sensor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SensorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
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


var SensorService = (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SensorService);
    return SensorService;
}());



/***/ }),

/***/ "../../../../../src/app/sensor/sensor.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n  <table style=\"width:100%\">\r\n    <tr>\r\n      <th>Sensor index</th>\r\n      <th>Light</th>\r\n      <th>Temperature</th>\r\n    </tr>\r\n    <tr>\r\n      <td>1</td>\r\n      <td>{{data.light[0]}}</td>\r\n      <td>{{data.temp[0]}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>2</td>\r\n      <td>{{data.light[1]}}</td>\r\n      <td>{{data.temp[1]}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>3</td>\r\n      <td>{{data.light[2]}}</td>\r\n      <td>{{data.temp[2]}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>4</td>\r\n      <td>{{data.light[3]}}</td>\r\n      <td>{{data.temp[3]}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>5</td>\r\n      <td>{{data.light[4]}}</td>\r\n      <td>{{data.temp[4]}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>6</td>\r\n      <td>{{data.light[5]}}</td>\r\n      <td>{{data.temp[5]}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>7</td>\r\n      <td>{{data.light[6]}}</td>\r\n      <td>{{data.temp[6]}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>8</td>\r\n      <td>{{data.light[7]}}</td>\r\n      <td>{{data.temp[7]}}</td>\r\n    </tr>\r\n    <tr>\r\n      <th>Instant Battery Voltage</th>\r\n      <th>Instant Battery Current</th>\r\n    </tr>\r\n    <tr>\r\n      <td>{{data.bv}}</td>\r\n      <td>{{data.bc}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>\r\n        <label for=\"set_session\">Set session: </label><input type=\"number\" id=\"set_session\" (change)=\"setSession($event)\">\r\n      </td>\r\n      <td>Next session: {{session.next}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>\r\n        <button (click)=\"stopSession(false)\">Stop session</button>\r\n      </td>\r\n      <td>Current session {{session.current}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>\r\n        <label for=\"choose_session\">Choose session: </label><input type=\"number\" id=\"choose_session\" (change)=\"chooseSession($event)\">\r\n      </td>\r\n      <td><button (click)=\"clearDB()\">Clear DB</button></td>\r\n    </tr>\r\n  </table>\r\n  <br>\r\n  <div id=\"chartdiv\" [style.width.%]=\"100\" [style.height.px]=\"500\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/sensor/sensor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sensor/sensor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SensorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sensor_service__ = __webpack_require__("../../../../../src/app/sensor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__amcharts_amcharts3_angular__ = __webpack_require__("../../../../@amcharts/amcharts3-angular/es2015/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SensorComponent = (function () {
    function SensorComponent(_sensorService, AmCharts) {
        this._sensorService = _sensorService;
        this.AmCharts = AmCharts;
        this.data = {
            'light': [],
            'temp': [],
            'bv': 0,
            'bc': 0
        };
        this.oldData = {
            'Time': 0,
            'Volts': 0,
            'Current': 0,
            'index': 0
        };
        this.chartData = [];
        this.session = {
            current: 0,
            next: 0
        };
    }
    // set session index and signals server to start or stop measuring session
    SensorComponent.prototype.setSession = function (e) {
        var _this = this;
        this.session.current = +e.target.value;
        this.session.next = +this.session.current + 1;
        this._sensorService.emit('Set_session', {
            msg: { 'sessionStatus': true, 'sessionID': this.session.current }
        });
        this.AmCharts.updateChart(this.chart, function () {
            _this.chartData = [];
        });
    };
    SensorComponent.prototype.stopSession = function (status) {
        this._sensorService.emit('Stop_session', {
            msg: status
        });
    };
    SensorComponent.prototype.chooseSession = function (e) {
        this._sensorService.emit('Choose_session', {
            msg: +e.target.value
        });
    };
    SensorComponent.prototype.clearDB = function () {
        this._sensorService.emit('Clear_DB', {
            msg: 'Clear DB'
        });
    };
    // what will be executed after component init
    SensorComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Test events to check sockets working properly
        this._sensorService.emit('Client_asking', {
            msg: 'Client to server, can u hear me server?'
        });
        this._sensorService.on('Server_asking', function (data) {
            console.log(data.msg);
            _this._sensorService.emit('Client_response', {
                msg: 'Yes, its working for me!'
            });
            _this._sensorService.on('Server_response', function (_data) {
                console.log(_data.msg);
            });
        });
        // Telling server to start data transfer
        this._sensorService.emit('Init_data', {
            msg: 'Init data'
        });
        // Accept sensor values
        this._sensorService.on('Sensors_data', function (data) {
            _this.data.light = data.msg.light;
            _this.data.temp = data.msg.temp;
            _this.data.bv = data.msg.bv;
            _this.data.bc = data.msg.bc;
        });
        // Clear data from chart before start of the new session
        // Handling new data incoming from DB
        this._sensorService.on('View_session', function (data) {
            _this.chartData = data.msg;
            _this.AmCharts.updateChart(_this.chart, function () {
                _this.chart.dataProvider = _this.chartData;
            });
        });
        this._sensorService.on('Update_session', function (data) {
            if (_this.oldData.index !== data.msg.index) {
                _this.chartData.push({
                    'Time': data.msg.Time,
                    'Volts': data.msg.Volts,
                    'Current': data.msg.Current,
                    'index': data.msg.index
                });
                _this.oldData = data.msg;
            }
            _this.AmCharts.updateChart(_this.chart, function () {
                _this.chart.dataProvider = _this.chartData;
            });
        });
    };
    // Chart creation after view init
    SensorComponent.prototype.ngAfterViewInit = function () {
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
    };
    // Remove chart if user session is over
    SensorComponent.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.AmCharts.destroyChart(this.chart);
        }
    };
    SensorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sensor',
            template: __webpack_require__("../../../../../src/app/sensor/sensor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sensor/sensor.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__sensor_service__["a" /* SensorService */], __WEBPACK_IMPORTED_MODULE_2__amcharts_amcharts3_angular__["b" /* AmChartsService */]])
    ], SensorComponent);
    return SensorComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polyfills__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
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
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
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
/** Evergreen browsers require these. **/
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.

/**
 * Required to support Web Animations `@angular/platform-browser/animations`.
 * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
 **/
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

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map