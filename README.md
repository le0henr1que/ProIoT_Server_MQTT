# ProIot Project

[![GitHub issues](https://img.shields.io/github/issues/le0henr1que/ProIoT_Server_MQTT.svg)](https://github.com/le0henr1que/ProIoT_Server_MQTT/issues)
[![GitHub forks](https://img.shields.io/github/forks/sle0henr1que/ProIoT_Server_MQTT.svg)](https://github.com/le0henr1que/ProIoT_Server_MQTT/network)

Este projeto tem como objetivo criar uma solução que permita a integração de dispositivos com o protocolo MQTT, utilizando Web Socket e REST para enviar informações para um banco de dados e exibir dados em um frontend.

## Pré-requisitos

Para este projeto, serão necessários os seguintes componentes:

<<<<<<< HEAD
- Placa ESP8266
- Sensor LDR 3mm (Sensor de luz)
- Jumper
- Biblioteca PubSubClient
- Servidor MQTT (Broket Gratis ou Pago)
- Protoboarad
- Noded Js
- Banco de dados mongoDb (local)
- Led
=======
  *  Placa ESP8266
  *  Sensor LDR 3mm (Sensor de luz)
  *  Jumper
  *  Biblioteca PubSubClient
  *  Servidor MQTT (Broket Gratis ou Pago)
  *  Protoboarad
  * Noded Js
  * Banco de dados mongoDb (local)
  * Led
  
## Documentação
A documentação da API está disponível em http://localhost:5000/api/docs , Ela fornece informações detalhadas sobre as rotas disponíveis e os parâmetros de entrada e saída de cada rota.
>>>>>>> 43342ab0de90b3c2eb85174d4a53c390e9ca8ef5

## Esquema elétrico

![image](https://user-images.githubusercontent.com/68018921/221332759-7b336f85-f03e-4ddf-95a4-b009d69d503b.png)

## Fluxo de sistema

![image](https://user-images.githubusercontent.com/68018921/221332932-082957c9-3041-4422-a94c-e2363cbc27fd.png)

## Uso e Instalação

1. Baixe as bibliotecas PubSubClient e ArduinoJSON e instale-as em sua IDE do Arduino.
2. Siga o esquema elétrico e conecte o sensor de LDR à placa ESO8266.
3. Configure a conexão Wifi na placa ESP8266.
4. No código disponibilizado em IoT-Code-NodeMCU/sketch_feb21a escolha um broker e adicione na variavel.
5. Faça o upload do código em seu dispositivo.
6. Clone o repositório com o comando `git clone https://github.com/le0henr1que/ProIoT_Server_MQTT`.
7. Adicione as variaveis de ambiente, criando um arquivo em seu repositorio chamado `.env`.
8. Instale as dependencias do projeto com o comando `yanrn` ou `npm install`.
9. Com o seu dispositivo ligado, execute o comando `yarn dev:server` para iniciar o projeto, algumas informações de confirmação serão exibidas em seu terminal.
10. Se tudo funcionar corretamente, você recebera as informações do seu dispositivo no seu terminal.

## Simular um dispositivo

O MQTT (Message Queuing Telemetry Transport) é um protocolo de mensagens leve e eficiente projetado para conectar dispositivos de Internet das Coisas (IoT) e permitir a comunicação entre eles.
Para simular o envio de mensagens `publish` de um dispositivo, basta executar o comando `yarn teste:mqtt <NOME DO TÓPICO> <MENSAGEM QUE DESEJA ENVIAR>` ou `npm run <NOME DO TÓPICO> <MENSAGEM QUE DESEJA ENVIAR>`. É importante lembrar que o broker MQTT deve ser o mesmo em todas as configurações do projeto, tanto na configuração do dispositivo quanto na configuração do servidor.
Para que o envio do mqtt funcione, primeiro é necessário cadastrar um dispositivo com o Tópico mqtt que você deseja testar.

### Exemplo:

Chame a rota `/device` no metodo `POST` para criar um novo dispositivo enviando os seguintes dados, o acesse http://localhost:5000/api/docs para executar as chamadas de rotas.

```JSON
{
  "name": "Meu dispositivo",
  "deviceInput": [
    {
      "nameInput": "Temperatura",
      "measurement": "°C",
      "value": "25",
      "mqttClientTopic":"TESTETPP"
    }
  ]

}

```

Note que ao criar um dispositivo, é de suma importancia que exista o campo `mqttClientTopic` para os teste de publish funcione.
Em seguida, verifique se o seu dispositivo foi criado, para isso você pode seguir as etapas em https://github.com/le0henr1que/ProIoT_Front_MQTT para executar o Front End, ou realizar um `GET` na rota `/devices`

Agora com o dispositivo já vinculado a um tópico abra dois terminais diferente, um com os logs do tsnd em execução e outro para executar o teste de `publish`:

```shell
yarn teste:mqtt TESTETPP 15
```

com os terminais aberto, os logs de recebimento do `publish` será exibido e o campo `value` alterado, sempre que um tópico receber uma nova publicação, este dado será atualizado.

## Execução Front End

Para melhor funcionamento e visualização da entrada dos dados, siga as etapas em https://github.com/le0henr1que/ProIoT_Front_MQTT para executar o front end.
Em seguida realize o cadastro do dispositivo pela interface e realize o teste de `publish` pelo seu terminal e visualize a informação sendo enviada com `webSocket` em sua interface.
![image](https://user-images.githubusercontent.com/68018921/221335166-174e3c2e-453e-425a-bf57-3b9ce56743fd.png)

## Funcionamento

O sistema é constituído por módulos independentes, onde cada um é responsável por executar única e exclusivamente uma tarefa. Os módulos se comunicam entre si através de eventos enviados em gatilhos específicos.

![image](https://user-images.githubusercontent.com/68018921/221332978-6dac98bc-5d75-4949-b647-12625a340f67.png)

## Considerações finais

Este projeto é uma solução simples e eficaz para a integração de dispositivos com o protocolo MQTT, utilizando Web Socket e REST para enviar informações para um banco de dados e exibir dados em um frontend. É importante lembrar que a segurança deve ser levada em consideração ao implementar este tipo de solução, e que é necessário configurar corretamente a conexão Ethernet e os servidores utilizados.
