#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <SoftwareSerial.h>

SoftwareSerial NodeSerial(D5, D6);  //RX, TX

const char* ssid = "NodeMCU";
const char* password = "1q2w120195";

void setup () {
    pinMode(D5, INPUT);
    pinMode(D6, OUTPUT);
    Serial.begin(230400);
    NodeSerial.begin(115200);
//    WiFi.begin(ssid, password);
//    while (WiFi.status() != WL_CONNECTED) {
//    delay(1000);
//    Serial.print("Connecting..");
//  }
}

void sendData(String data) {
  //Check WiFi connection status
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    http.begin("http://blooming-fortress-61113.herokuapp.com/data");
    http.addHeader("Content-Type", "application/json");
    String postMessage = "{\"data\":" + data + "}";
    //Uncomment these lines to see output
    /*
      Serial.println("Data:");
      Serial.println(data);
      Serial.println("PostMessage:");
      Serial.println(postMessage);
    */
    //Send POST request
    int httpCode = http.POST(postMessage);
    //Check the returning code
    if (httpCode > 0) {
    //Print http response
    //Serial.println("http response: " + httpCode);
      //Get the request response payload
      String payload = http.getString();
      //Print the response payload
      //Serial.println(payload);
    }
    //Close connection
    http.end();
  }
  //Send a request every 100ms seconds
  //delay(100);
}

void loop() {
  String message;
    if (NodeSerial.available()>0) {
      String message = NodeSerial.readString();
      Serial.println(message);
        //sendData(message);
    }
}
