---
id: 'deployment-standalone'
title: 'Deployed Standalone'
sidebar_position: 3
---

# SolidUI Standalone Deployment

## 1. Preparations for Initial Installation
### 1.1 Linux Server

#### Hardware Requirements
To install one SolidUI microservice, at least 512M of memory is required. Each microservice is configured by default to start with a JVM -Xmx memory size of 512M (if memory is insufficient, you can try to reduce this to 256/128M; if memory is sufficient, you can increase it).

### 1.2 Preparation of JDK

Java version requirement: JDK 1.8.0_201 or above

### 1.3 Python

Python version requirement: Python 3.8 or above

### 1.4 Database Preparation

MySQL 5.7 or above


## 2. Configuration Changes
### 2.1 Preparation of Installation Package

Download the source code from https://github.com/CloudOrc/SolidUI or https://github.com/CloudOrc/SolidUI/releases and compile the corresponding installation package.

Compilation: [Server Compilation](/docs/development/development-server) and [Frontend Compilation](/docs/development/development-front)

After uploading the installation package solidui-x.x.x-bin.tar.gz, extract the installation package.

```shell script
 tar -zxvf solidui-x.x.x-bin.tar.gz
```

The directory structure after decompression is as follows:
```shell script
drwxr-xr-x 6 root root  4096 Jun 11 17:57 entrance-server
-rw-r--r-- 1 root root 27711 Jun  4 21:47 LICENSE
drwxr-xr-x 3 root root  4096 Jun 11 18:03 licenses
-rw-r--r-- 1 root root 24875 Jun  4 19:29 NOTICE
drwxr-xr-x 7 root root  4096 Sep 13 19:55 soliduimodelui
drwxr-xr-x 4 root root  4096 Jun 11 18:26 solidui-web
```

## 3. Server Installation and Launch

### 3.1 Preparation

```shell script
# Initialize database DDL and DML path
solidui-x.x.x-bin/entrance-server/conf/sql/mysql/solidui_mysql.sql

# Enter MySQL database
mysql -h192.168.xx.xx -P3306 -uroot -p

# Create database
CREATE DATABASE solidui DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;


# Modify database connection information, modify solidui_model_type table, token and baseurl fields (supported in version 0.2.0)
Token is the model API token
Baseurl is the model API base address, for example: https://api.openai.com (this is the foreign openai address), https://api.chatanywhere.com.cn (openai domestic proxy address), http://ip:port (chatGLM address)

solidui-x.x.x-bin/entrance-server/conf/sql/mysql/solidui_mysql.sql

# Modify `token` and `baseurl` fields in the `solidui_model_type` table

# Execute the database initialization script

source solidui-x.x.x-bin/entrance-server/conf/sql/mysql/solidui_mysql.sql

```

### 3.2 Configuration Changes

```shell script
cd solidui-x.x.x-bin/entrance-server/conf
# Modify database connection information
vi application.yaml
datasource:
url: jdbc:mysql://localhost:3306/solidui?useSSL=false&useUnicode=true&characterEncoding=UTF-8&serverTimezone=Asia/Shanghai
username: root
password: root

# Version 0.2.0 adds python service configuration
vi solidui-x.x.x-bin/soliduimodelui/.env
# Modify database connection information
DB_HOST=localhost
DB_PORT=3306
DB_NAME=solidui
DB_USER=root
DB_PASS=SolidUI@123

```

### 3.3 Server Launch

```shell script
cd solidui-x.x.x-bin/entrance-server
# Start service
sh bin/start.sh
# Stop service
sh bin/stop.sh

# Version 0.2.0 adds python service
cd solidui-x.x.x-bin
pip install -e .
modelui
```

## 4. Frontend Deployment

### 4.1 Preparation Work

Refer to [Frontend Deployment](deployment-web.md)

### 4.2 Launch

Access the default link http://localhost:8099

Default username and password: admin/admin




