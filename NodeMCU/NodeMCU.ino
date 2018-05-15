#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <SoftwareSerial.h>

SoftwareSerial NodeSerial(D5, D6);  //RX, TX
#define flag D4
const char* ssid = "NodeMCU";
const char* password = "1q2w120195";

void setup () {
    pinMode(D5, INPUT);
    pinMode(D6, OUTPUT);    pinMode(flag, INPUT);
    Serial.begin(9600);
    NodeSerial.begin(9600);
    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print("Connecting..");
  }
}

void sendData(String data) {
  if (WiFi.status() == WL_CONNECTED) { //Check WiFi connection status
    HTTPClient http;
    http.begin("http://blooming-fortress-61113.herokuapp.com/data");
    http.addHeader("Content-Type", "application/json");
    String postMessage = "{\"data\":" + data + "}";
    //http.addHeader("Content-Type", "application/x-www-form-urlencoded");
    //Serial.println("data:");
    //Serial.println(data);
    //Serial.println(postMessage);
    int httpCode = http.POST(postMessage);
    //Serial.print("http result:");
    //Serial.println(httpCode);
    //http.writeToStream(&Serial);
    //Send the request
    if (httpCode > 0) { //Check the returning code
    //Serial.println("We've got response!");
    //Serial.println("http response: " + httpCode);
      String payload = http.getString();   //Get the request response payload
      //Serial.println(payload);                     //Print the response payload
    }
    http.end();   //Close connection
  }
  delay(100);    //Send a request every 30 seconds
}

void loop() {
  String message;
  int i = 0;
  bool a = digitalRead(flag);
    if (NodeSerial.available()>0) {
      ++i;
      String s = NodeSerial.readString();
      message = message + s;
      if(i=3){
        Serial.println("Start");
        Serial.println(message.length());
        Serial.println(message);
        Serial.println("End");
        sendData(message);
      }
       NodeSerial.end();
       NodeSerial.begin(9600);
    }
    if(!a){
      message = "";  
    }
}

/*
  Serial.println("hi");
    String message;
    while (NodeSerial.available() > 0) {
    message = NodeSerial.readString();
    //message.remove(0,63);
    Serial.println(message);
  }
  delay(1000);
  //sendData(message);
  */
