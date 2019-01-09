#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <SoftwareSerial.h>

SoftwareSerial NodeSerial(D5, D6); //RX, TX

const char *ssid = "NodeMCU";
const char *password = "1q2w120195";

void setup()
{
  pinMode(D5, INPUT);
  pinMode(D6, OUTPUT);
  Serial.begin(9600);
  NodeSerial.begin(115200);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(1000);
    Serial.print("Connecting..");
  }
}

void sendData(String data)
{
  if (WiFi.status() == WL_CONNECTED) //Check WiFi connection status
  {
    HTTPClient http;
    http.begin("http://blooming-fortress-61113.herokuapp.com/data");
    http.addHeader("Content-Type", "application/json");
//    String postMessage = "";
    int httpCode = http.POST(data); //Send POST request
    if (httpCode > 0)                      //Check the returning code
    {
      String payload = http.getString();
      // Serial.println(payload); //Print the response payload
    }
    http.end(); //Close connection
  }
}

void loop()
{
  String message;
  if (NodeSerial.available() > 0)
  {
    String message = NodeSerial.readString();
    Serial.println(message);
    sendData(message);
  }
}
