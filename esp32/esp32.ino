#include <WiFi.h>
#include <HTTPClient.h>
#include <HardwareSerial.h>
#include <ArduinoJson.h>

const char* ssid = "NodeMCU";
const char* password = "1q2w120195";

const int S0 = 2;
const int S1 = 4;
const int S2 = 5;
const int S3 = 18;
const int a_12 = 25;
const int a_13 = 26;
const int a_14 = 35;

int pin_stat[9][4] = {
    {0, 0, 0, 0},
    {1, 0, 0, 0},
    {0, 1, 0, 0},
    {1, 1, 0, 0},
    {0, 0, 1, 0},
    {1, 0, 1, 0},
    {0, 1, 1, 0},
    {1, 1, 1, 0},
    {0, 0, 0, 1}
};

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting..");
  }
  pinMode(S0, OUTPUT);
  pinMode(S1, OUTPUT);
  pinMode(S2, OUTPUT);
  pinMode(S3, OUTPUT);
  adcAttachPin(a_12);
  adcAttachPin(a_13);
  adcAttachPin(a_14);
}

void sendData(String data) {
  //Check WiFi connection status
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    http.begin("http://blooming-fortress-61113.herokuapp.com/data");
    http.addHeader("Content-Type", "application/json");
    String postMessage = data;
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
    http.end();
  }
}

void loop() {
  StaticJsonBuffer<500> jsonBuffer;
  JsonObject& root = jsonBuffer.createObject();
  JsonArray& temp = root.createNestedArray("temp");
  JsonArray& light = root.createNestedArray("light");
  for (int i = 0; i < 9; i++){
    for (int c = 0; c < 4; c++){
      if (c == 0)
      {
          digitalWrite(S0, pin_stat[i][c]);
      }
      if (c == 1)
      {
          digitalWrite(S1, pin_stat[i][c]);
      }
      if (c == 2)
      {
          digitalWrite(S2, pin_stat[i][c]);
      }
      if (c == 3)
      {
          digitalWrite(S3, pin_stat[i][c]);
      }
    }
    temp.add(analogRead(a_12)*3.6/4096);
    light.add(analogRead(a_13)*3.6/4096);
  }
  float sum = 0;
  for(int i = 0;i<100;i++){
     sum += analogRead(a_14)*3.645/4096;
  }
  root["bv"] = sum/100;
  root["bc"] = 1;
  delay(500);
//  root.prettyPrintTo(Serial);
  String test;
  root.printTo(test);
  sendData(test);
  Serial.println(test);
}
