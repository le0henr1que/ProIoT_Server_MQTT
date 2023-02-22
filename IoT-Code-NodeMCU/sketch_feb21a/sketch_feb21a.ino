#include <ESP8266WiFi.h>
#include <PubSubClient.h>

// Configuração da rede WiFi
const char* ssid = "ssid-da-rede";
const char* password = "senha-da-rede";

// Configuração do servidor MQTT
const char* mqttServer = "mqtt.eclipseprojects.io";
const int mqttPort = 1883;

#define ID_MQTT "BCI01"
// const char* mqttUser = "";
// const char* mqttPassword = "";

// Configuração do tópico MQTT
const char* mqttTopic = "BCIBotao1";
int ANALOG_PIN = A0; 
int val = 0;
int BOARD_RESOLUTION = 1024 ; // The analogic board resolution, for example NodeMCU ESP8266 is 10 bit (from 0 to 1023)
// Configuração do pino do botão
// const int buttonPin = D3;

WiFiClient wifiClient;
PubSubClient mqttClient(wifiClient);

void setup() {
  // pinMode(buttonPin, INPUT_PULLUP);
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
  // mqttClient.setCredentials(mqttUser, mqttPassword);

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
  // int buttonState = digitalRead(buttonPin
  val = analogRead(ANALOG_PIN); // Reading from analogic pin
  if (val < BOARD_RESOLUTION / 2) {
    digitalWrite(D5, HIGH);
    mqttClient.publish(mqttTopic, "Noite");

  } else {
   digitalWrite(D5, LOW);
  mqttClient.publish(mqttTopic, "Dia");

  }
    Serial.println(val);
  // char b[ ] = { val };
  // // if (buttonState == LOW) {
  //   Serial.println(b);

  //   mqttClient.publish(mqttTopic, b);
    delay(10000);
  // }
}