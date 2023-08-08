---
id: 'deployment-docker'
title: 'Docker-Compose deployment'
sidebar_position: 2
---

# SolidUI Docker-Compose deployment

## 1. Environment preparation

[Docker](https://docs.docker.com/engine/install/) 1.13.1+
[Docker Compose](https://docs.docker.com/compose/) 1.11.0+

## 2. Start docker-compose (recommended)

This method needs to install docker-compose first, there are already a lot of information on the installation of docker-compose on the Internet, please install it yourself

### 2.1 Download deployment package or source code

Download at https://github.com/CloudOrc/SolidUI/releases

Please download the source package solidui-x.x.x-bin.tar.gz


### 2.2 Pull the image and start the service

```shell script
# Enter the server (take Centos7 as an example)
tar -zxvf solidui-x.x.x-bin.tar.gz

cd solidui-x.x.x-src/solidui-dist/docker/

docker-compose up -d

```

### 2.3 Modify the database table information, modify the table solidui_model_type, token and baseurl fields (supported after version 0.2.0)

token is the model API token
baseurl is the base address of the model API, for example: https://api.openai.com (this is the address of openai abroad), https://api.chatanywhere.com.cn (the address of openai's domestic agent), http://ip: port (chatGLM address)

```shell script
# Enter the mysql created by Docker-Compose
mysql -h ip -u root -p
use solidui;
update solidui_model_type set token = '' , baseurl='' where id = 'id';

```

### 2.4 Accessing Services

Access link http://localhost:8099

Default username and password: admin/adm