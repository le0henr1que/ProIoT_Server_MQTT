#include <ESP8266WiFi.h>
#include <PubSubClient.h>

const char* ssid = "SSID";
const char* password = "Senha";

const char* mqttServer = "mqtt.eclipseprojects.io";
const int mqttPort = 1883;

#define ID_MQTT "BCI01"

const char* mqttTopic = "BCIBotao1";
int ANALOG_PIN = A0; 
int val = 0;
int BOARD_RESOLUTION = 1024 ; 


WiFiClient wifiClient;
PubSubClient mqttClient(wifiClient);

void setup() {
  pinMode(D5, OUTPUT);
  pinMode(D2, INPUT);
  Serial.begin(115200);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }

  Serial.println("Connected to WiFi");

  mqttClient.setServer(mqttServer, mqttPort);

  while (!mqttClient.connected()) {
    Serial.println("Connecting to MQTT server...");
    if (mqttClient.connect("NodeMCU")) {
      Serial.println("Connected to MQTT server");
    } else {
      Serial.println("Failed to connect to MQTT server");
      delay(5000);
    }
  }
}

void loop() {

  val = analogRead(ANALOG_PIN); 
  if (val < 18) {
    digitalWrite(D5, HIGH);

  } else {
   digitalWrite(D5, LOW);
  }
    String valStr = String(val);

    Serial.println(val);
    mqttClient.publish(mqttTopic, valStr.c_str());
    
  
    delay(1000);
  // }
}