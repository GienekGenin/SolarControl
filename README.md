# SolarControl
This is my graduate work

## Project's circuit
![Circuit](https://pp.userapi.com/c846323/v846323282/5b163/XHdE0YK-Hw4.jpg)

## About this project

## First stage. STM32F767ZI

1. Declare your pins using `AnalogIn` object
2. Use `Timer` to create timer and set measuring frequency
```c++
    begin = timer.read_ms();
    if(begin - lastms >= 3000){
    lastms = begin;
    /*
        Read data from sensor here
    */
    }
```
3. Read data from solar panel and from light and temperature sensors attached to the front of the panel.
```c++
    float L1 = a_light_1/3.28 * 4096,L2 = a_light_1/3.28 * 4096,L3 = a_light_1/3.28 * 4096;
    float L4 = a_light_4/3.28 * 4096,L5 = a_light_5/3.28 * 4096,L6 = a_light_6/3.28 * 4096;
    float L7 = a_light_7/3.28 * 4096,L8 = a_light_8/3.28* 4096,L9 = a_light_9/3.28 * 4096;
    float T1 = a_temp_1/3.28 * 4096,T2 = a_temp_2/3.28 * 4096,T3 = a_temp_3/3.28 * 4096;
    float T4 = a_temp_4/3.28 * 4096,T5 = a_temp_5/3.28 * 4096,T6 = a_temp_6/3.28 * 4096;
    float T7 = a_temp_7/3.28 * 4096,T8 = a_temp_8/3.28 * 4096,T9 = a_temp_9/3.28 * 4096;
    float bc = a_bc/3.28,bv = a_bv * 3.28 + 1000*(float)a_bv * 3.28/200;
```
4. Create JSON string from this data
```c++
    string message = createData(L1,L2,L3,L4,L5,L6,L7,L8,L9,T1,T2,T3,T4,T5,T6,T7,T8,T9,bc,bv);
```

5. Send this data to NodeMCU

```c++
    device.printf("%s", lightArr);
    device.printf("%s", tempArr);
    device.printf("%s", battaryArr);
```

## Second stage. NodeMCU

1. Create Wi-Fi connection
```c++
    #include <ESP8266WiFi.h>
    //Declare Wi-Fi login and passowrd
    const char* ssid = "*****";
    const char* password = "*****";
    //In setup
    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED) {
        delay(1000);
        Serial.print("Connecting..");
    }
```
2. Create `Serial` connections
```c++
    #include <SoftwareSerial.h>
    SoftwareSerial NodeSerial(D5, D6);  //RX, TX
    //In setup
    Serial.begin(9600);
    NodeSerial.begin(9600);
```  
3. Create function to send `HTTP` request to your server
```c++
void sendData(String data) {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    http.begin("http://blooming-fortress-61113.herokuapp.com/data");
    http.addHeader("Content-Type", "application/json");
    String postMessage = "{\"data\":" + data + "}";
    int httpCode = http.POST(postMessage);
    if (httpCode > 0) {
      String payload = http.getString();
    }
    http.end();
  }
  delay(100);
}
```
#### 4. Read data from `STM` and send it to your server 
```c++
void loop() {
  String message;
  int i = 0;
    if (NodeSerial.available()>0) {
      ++i;
      String s = NodeSerial.readString();
      message = message + s;
      if(i=3){
        sendData(message);
      }
       NodeSerial.end();
       NodeSerial.begin(9600);
    }
}
```

## Third stage. MEAN application

Angular project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Express server

Run `ng build` and then `npm start` to check everything working fine on express server

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

##### I used a lot of libraries to build this MEAN application and I will try to comment nicely every important aspect of app in the source code.

## Authors

**[Gennadii Genin](https://github.com/GienekGenin)**