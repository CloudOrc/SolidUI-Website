---
id: 'deployment-standalone'
title: '独立部署'
sidebar_position: 3
---

# SolidUI 单独部署

## 1.首次安装准备事项
### 1.1 Linux 服务器

#### 硬件要求
安装SolidUI 微服务1个，至少512M内存。每个微服务默认配置启动的jvm -Xmx 内存大小为 512M（内存不够的情况下，可以尝试调小至256/128M，内存足够情况下也可以调大）。

### 1.2 JDK准备

java版本要求：jdk1.8.0_201 或以上版本

### 1.3 Python

Python版本要求：python3.8 或以上版本

### 1.4 数据库准备

Mysql5.7 或以上版本


## 2.配置修改
### 2.1 安装包准备

https://github.com/CloudOrc/SolidUI 或者 https://github.com/CloudOrc/SolidUI/releases 下载源码，编译对应的安装包。

编译：[服务端编译](/docs/development/development-server) 和 [前端编译](/docs/development/development-front)

上传安装包solidui-x.x.x-bin.tar.gz后，进行解压安装包

```shell script
 tar -zxvf solidui-x.x.x-bin.tar.gz
```

解压后的目录结构如下：
```shell script
drwxr-xr-x 6 root root  4096 Jun 11 17:57 entrance-server
-rw-r--r-- 1 root root 27711 Jun  4 21:47 LICENSE
drwxr-xr-x 3 root root  4096 Jun 11 18:03 licenses
-rw-r--r-- 1 root root 24875 Jun  4 19:29 NOTICE
drwxr-xr-x 7 root root  4096 Sep 13 19:55 soliduimodelui
drwxr-xr-x 4 root root  4096 Jun 11 18:26 solidui-web
```

## 3.服务端按照和启动

### 3.1 准备工作

```shell script
# 初始化数据库ddl 和 dml 路径
solidui-x.x.x-bin/entrance-server/conf/sql/mysql/solidui_mysql.sql

# 进入mysql数据库
mysql -h192.168.xx.xx -P3306 -uroot -p

# 创建数据库
CREATE DATABASE solidui DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;


# 修改数据库连接信息，修改表solidui_model_type，token和baseurl字段 (0.2.0版本支持)
token为模型API token
baseurl为模型API基础地址，例如：https://api.openai.com（这是国外openai地址），https://api.chatanywhere.com.cn（openai国内代理地址），http://ip:port（chatGLM地址）

solidui-x.x.x-bin/entrance-server/conf/sql/mysql/solidui_mysql.sql

# 修改`solidui_model_type` 表 `token`和`baseurl`字段

# 执行数据库初始化脚本

source solidui-x.x.x-bin/entrance-server/conf/sql/mysql/solidui_mysql.sql

```

### 3.2 配置修改

```shell script
cd solidui-x.x.x-bin/entrance-server/conf
# 修改数据库连接信息
vi application.yaml
datasource:
url: jdbc:mysql://localhost:3306/solidui?useSSL=false&useUnicode=true&characterEncoding=UTF-8&serverTimezone=Asia/Shanghai
username: root
password: root

# 0.2.0 版本增加python服务配置
vi solidui-x.x.x-bin/soliduimodelui/.env
# 修改数据库连接信息
DB_HOST=localhost
DB_PORT=3306
DB_NAME=solidui
DB_USER=root
DB_PASS=SolidUI@123

```

### 3.3 服务端启动

```shell script
cd solidui-x.x.x-bin/entrance-server
# 启动服务
sh bin/start.sh
# 停止服务
sh bin/stop.sh

#0.2.0 版本增加python服务
cd solidui-x.x.x-bin
pip install -e .
modelui
```

## 4.前端部署

### 4.1 准备工作

参考[前端部署](deployment-web.md)

### 4.2 启动

访问默认链接 http://localhost:8099

默认用户名密码：admin/admin












