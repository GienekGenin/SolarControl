#include <WiFi.h>
#include <HTTPClient.h>
#include <HardwareSerial.h>
#include <ArduinoJson.h>

TaskHandle_t Task1;
TaskHandle_t Task2;

const char* ssid = "NodeMCU";
const char* password = "1q2w120195";

const int S0 = 2;
const int S1 = 4;
const int S2 = 5;
const int S3 = 18;
const int a_12 = 32;
const int a_13 = 33;
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

void setup() {
  Serial.begin(9600); 

  //create a task that will be executed in the Task1code() function, with priority 1 and executed on core 0
  xTaskCreatePinnedToCore(
                    Task1code,   /* Task function. */
                    "Task1",     /* name of task. */
                    10000,       /* Stack size of task */
                    NULL,        /* parameter of the task */
                    1,           /* priority of the task */
                    &Task1,      /* Task handle to keep track of created task */
                    0);          /* pin task to core 0 */                  
  delay(500); 

  //create a task that will be executed in the Task2code() function, with priority 1 and executed on core 1
  xTaskCreatePinnedToCore(
                    Task2code,   /* Task function. */
                    "Task2",     /* name of task. */
                    10000,       /* Stack size of task */
                    NULL,        /* parameter of the task */
                    1,           /* priority of the task */
                    &Task2,      /* Task handle to keep track of created task */
                    1);          /* pin task to core 1 */
    delay(500); 
}

//Task1code: blinks an LED every 1000 ms
void Task1code( void * pvParameters ){
    pinMode(S0, OUTPUT);
  pinMode(S1, OUTPUT);
  pinMode(S2, OUTPUT);
  pinMode(S3, OUTPUT);
  adcAttachPin(a_12);
  adcAttachPin(a_13);
  adcAttachPin(a_14);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting..");
  }
  for(;;){
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
    float voltage = analogRead(a_14)*3.3/4095;
//    temp.add(analogRead(a_12)*5/4095);
//    light.add(analogRead(a_13)*5/4095);
    temp.add(voltage);
    light.add(voltage);
    float bc = voltage/220;
    float bv = 1000 * bc + voltage;
    root["bv"] = voltage;
    root["bc"] = voltage;
  }
//  root.prettyPrintTo(Serial);
  String test;
  root.printTo(test);
  sendData(test);
  Serial.println(test);
  }
}

//Task2code: blinks an LED every 700 ms
void Task2code( void * pvParameters ){
  while(true){
    Serial.println("task1");
    delay(5000);
  }
}

void loop() {
  
}
