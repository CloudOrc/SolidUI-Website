---
title: SolidUI社区-Snakemq通信源码分析
date: 2023-07-02
tags: [SolidUI, AIGC, stable-diffusion]
---

## 背景

随着文本生成图像的语言模型兴起，SolidUI想帮人们快速构建可视化工具，可视化内容包括2D,3D,3D场景，从而快速构三维数据演示场景。SolidUI 是一个创新的项目，旨在将自然语言处理（NLP）与计算机图形学相结合，实现文生图功能。通过构建自研的文生图语言模型，SolidUI 利用 RLHF (Reinforcement Learning Human Feedback) 流程实现从文本描述到图形生成的过程。

项目地址: [https://github.com/CloudOrc/SolidUI](https://github.com/CloudOrc/SolidUI)

项目镜像地址: [https://gitee.com/CloudOrc/SolidUI](https://gitee.com/CloudOrc/SolidUI)

## Snakemq介绍

SnakeMQ是一个轻量级的消息队列(MQ)系统,主要用于在Python中实现异步任务队列和消息传递。

SolidUI 模型代理模块（soliduimodelui） 用到Snakemq , 涉及到内部通信时候，如果client 和server 不一一对应，通信就有问题，虽然日志不报错，但是不回返回结果，本文主要讲相关通信问题，为后续共建伙伴提供解决思路。

## Snakemq作用

## 
* 轻量级和易于使用 - SnakeMQ使用纯Python编写,无任何外部依赖,可以很容易地在任何Python项目中集成使用。
* 支持主流协议 - SnakeMQ实现了STOMP和AMQP等主流的MQ协议。
* 多种消息模型 - 支持发布-订阅、工作队列、请求-响应等多种消息模型。
* 持久化支持 - 支持将消息持久化到不同的后端,如Redis、MongoDB等。
* 高性能 - SnakeMQ针对Python进行了优化,单机可以处理上万消息每秒。
* 可扩展 - 可以水平扩展以实现集群,提高系统整体吞吐量。
* 多语言支持 - 除了Python SDK,还提供了NodeJS、Java等语言的SDK。

SolidUI 中 soliduimodelui模块，是模型代理API，需要Web和 Kernel 通信用到Snakemq 

## Snakemq 测试代码

>Snakemq client.py
```plain
import snakemq.link
import snakemq.packeter
import snakemq.messaging
import snakemq.rpc
import time
import json
import logging
logging.basicConfig(format="[%(asctime)s] %(levelname)s [%(name)s:%(lineno)s] %(message)s")
logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)
console_handler = logging.StreamHandler()
console_handler.setLevel(logging.INFO)
logger.addHandler(console_handler)
logger.setLevel(logging.INFO)
fh = logging.FileHandler('app.log')
logger.addHandler(fh)
link = snakemq.link.Link()
packeter = snakemq.packeter.Packeter(link)
messaging = snakemq.messaging.Messaging("client", "", packeter)
connector = ("server", 8765)
link.add_connector(connector)
def on_connect(connector_id):
    logger.info(f"Connected to: {connector_id}")
link.on_connect.add(on_connect)
def on_disconnect(connector_id):
    logger.info(f"已断开: {connector_id}")
link.on_disconnect.add(on_disconnect)

def on_recv(conn, ident, message):
    logger.info(f"client接收到: {message.data}, 来自: {ident}")
messaging.on_message_recv.add(on_recv)
message = snakemq.message.Message(json.dumps({"type": "status", "value": "ready"}).encode("utf-8"), ttl=600)
messaging.send_message("server", message)
while True:
    link.loop()
    time.sleep(0.1)
```


>Snakemq server.py
```plain
import snakemq.link
import snakemq.packeter
import snakemq.messaging
import snakemq.rpc
import time
import json
import logging
logging.basicConfig(format="[%(asctime)s] %(levelname)s [%(name)s:%(lineno)s] %(message)s")
logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)
console_handler = logging.StreamHandler()
console_handler.setLevel(logging.INFO)
logger.addHandler(console_handler)
logger.setLevel(logging.INFO)
fh = logging.FileHandler('app.log')
logger.addHandler(fh)
link = snakemq.link.Link()
packeter = snakemq.packeter.Packeter(link)
messaging = snakemq.messaging.Messaging("server", "", packeter)
link.add_listener(("0.0.0.0", 8765))
def on_recv(conn, ident, message):
    logger.info(f"server接收到: {message.data}, 来自: {ident}")
messaging.on_message_recv.add(on_recv)

message = snakemq.message.Message(json.dumps( {"type": "execute", "value": "abc"}).encode("utf-8"), ttl=600)
messaging.send_message("client", message)
# Main loop
while True:
    link.loop()
    time.sleep(0.1)
```


>Dockerfile
```plain
FROM python:3.8
WORKDIR /opt/snaketmq-test

RUN pip install snakemq
RUN python -c "import snakemq; print(snakemq.__file__); print(dir(snakemq))"
COPY . .

CMD ["python", "server.py"]
```

## 
>Dockerfile  build & run
```plain
docker build -t snaketmq-test . 

docker network create mynet

docker run -d --name server --network mynet  snaketmq-test

docker run --network mynet  snaketmq-test python client.py
```



## Snakemq通信

注意：Snakemq 测试代码，因为容器内通信，ip addr 会涉及到多个ip ，虽然容器设置网段mynet ，但是 server  link.add_listener(("0.0.0.0", 8765))  这行代码 

* server: 表示SnakeMQ的服务器实例。
* link: server中的link属性,表示网络连接管理器。
* add_listener: 向link中添加一个监听器。
* ("0.0.0.0", 8765): 监听的地址和端口。"0.0.0.0"表示监听所有网卡地址,"8765"表示监听8765端口。
client  connector = ("server", 8765)  link.add_connector(connector) 这行代码

* connector = ("server", 8765) : 创建一个元组connector,里面包含了SnakeMQ服务器的地址"server"和端口8765。
* link.add_connector(connector): 调用link对象(这里应该是SnakeMQ的连接对象)的add_connector方法,传入参数connector,将上一步创建的连接信息添加到连接对象中。
* 综合来看,这行代码的作用就是创建一个连接元组,包含SnakeMQ服务器的地址和端口,然后将这个连接信息添加到SnakeMQ的连接对象中,以建立SnakeMQ的客户端连接。
## 结语

本文通过Snakemq 案例 来解释SolidUI 内部通信，让大家明白配置地址时候ip 为什么这样设置，目的是为了一一对应，不是盲目设置localhost就能解决，为大家后续更好共建SolidUI提供思路。



## 如果成为贡献者

* 官方文档贡献。发现文档的不足、优化文档，持续更新文档等方式参与社区贡献。通过文档贡献，让开发者熟悉如何提交PR和真正参与到社区的建设。参考攻略：[https://github.com/CloudOrc/SolidUI/discussions/54](https://github.com/CloudOrc/SolidUI/discussions/54)
* 代码贡献。我们梳理了社区中简单并且容易入门的的任务，非常适合新人做代码贡献。请查阅新手任务列表：[https://github.com/CloudOrc/SolidUI/issues/12](https://github.com/CloudOrc/SolidUI/issues/12)
* 内容贡献：发布SolidUI开源组件相关的内容，包括但不限于安装部署教程、使用经验、案例实践等，形式不限，请投稿给小助手。例如：[https://github.com/CloudOrc/SolidUI/issues/10](https://github.com/CloudOrc/SolidUI/issues/10)
* 社区答疑：积极在社区中进行答疑、分享技术、帮助开发者解决问题等；
其他：积极参与社区活动、成为社区志愿者、帮助社区宣传、为社区发展提供有效建议等；


