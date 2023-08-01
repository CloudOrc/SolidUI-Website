---
title: SolidUI社区-独立部署和Docker通信分析
tags: [SolidUI, AIGC, stable-diffusion]
---

## 背景

随着文本生成图像的语言模型兴起，SolidUI想帮人们快速构建可视化工具，可视化内容包括2D,3D,3D场景，从而快速构三维数据演示场景。SolidUI 是一个创新的项目，旨在将自然语言处理（NLP）与计算机图形学相结合，实现文生图功能。通过构建自研的文生图语言模型，SolidUI 利用 RLHF (Reinforcement Learning Human Feedback) 流程实现从文本描述到图形生成的过程。

项目地址: [https://github.com/CloudOrc/SolidUI](https://github.com/CloudOrc/SolidUI)

项目镜像地址: [https://gitee.com/CloudOrc/SolidUI](https://gitee.com/CloudOrc/SolidUI)


## 独立部署通信

单独部署，与外网通信，这块不难只有相应公网，就可以正常访问。

单独部署，内部进程间通信，如果有多个网卡，ip addr 涉及多个ip ，需要设置内网ip 或者域名 ，去一一对应。

### 例如

如果有多个网卡，ip addr 涉及多个ip ，需要设置内网ip 或者域名 ，去一一对应，没有的话用127.0.0.1 就可以。

设置 Snakemq 通信

```plain
soliduimodelui/.env  SNAKEMQ_LISTENER server 监听器 ，设置内网ip
soliduimodelui/.env  SNAKEMQ_CONNECTOR  与server 连接ip  ，设置内网ip
```

## Docker 部署通信

容器化部署，在此我简化描述，不带容器管理框架描述，因为通信最根本的明白后，其它在框架中也就明白了，外部通信，开放端口 ，内部通信，通过设置网段名称，不同容器通信，通过容器名称进行。

### 例如

>数据库连接
在docker-compose.yml 中，设置了Mysql数据库名称为mysql 

所以solidui-entrance application.yaml  中  datasource.url  mysql 替换 localhost

soliduimodelui/.env  DB_HOST mysql 替换 localhost 

>soliduimodelui/.env Snakemq 通信
```plain
soliduimodelui/.env  SNAKEMQ_LISTENER server 监听器 ，设置0.0.0.0
soliduimodelui/.env  SNAKEMQ_CONNECTOR  与server 连接ip  ，设置soliduimodelui
```


## 结语

本文通过讲解独立部署 和 Docker 通信分析 ，告诉部署设置ip时候方式，不是盲目设置localhost就能解决，为大家后续更好共建SolidUI提供思路。


>Snakemq 通信参考 [https://mp.weixin.qq.com/s?__biz=MjM5MDQwNjIwMw==&mid=2257496764&idx=1&sn=420786eafebad5adc89e13c5e33981b8&chksm=a53f49e89248c0fe766d1c2273fa7ab12dac46cf093f56d8ddb27481d4464bf77bc2dc42df28&token=1527106529&lang=zh_CN#rd](https://mp.weixin.qq.com/s?__biz=MjM5MDQwNjIwMw==&mid=2257496764&idx=1&sn=420786eafebad5adc89e13c5e33981b8&chksm=a53f49e89248c0fe766d1c2273fa7ab12dac46cf093f56d8ddb27481d4464bf77bc2dc42df28&token=1527106529&lang=zh_CN#rd)
## 如果成为贡献者

* 官方文档贡献。发现文档的不足、优化文档，持续更新文档等方式参与社区贡献。通过文档贡献，让开发者熟悉如何提交PR和真正参与到社区的建设。参考攻略：[https://github.com/CloudOrc/SolidUI/discussions/54](https://github.com/CloudOrc/SolidUI/discussions/54)
* 代码贡献。我们梳理了社区中简单并且容易入门的的任务，非常适合新人做代码贡献。请查阅新手任务列表：[https://github.com/CloudOrc/SolidUI/issues/12](https://github.com/CloudOrc/SolidUI/issues/12)
* 内容贡献：发布SolidUI开源组件相关的内容，包括但不限于安装部署教程、使用经验、案例实践等，形式不限，请投稿给小助手。例如：[https://github.com/CloudOrc/SolidUI/issues/10](https://github.com/CloudOrc/SolidUI/issues/10)
* 社区答疑：积极在社区中进行答疑、分享技术、帮助开发者解决问题等；
其他：积极参与社区活动、成为社区志愿者、帮助社区宣传、为社区发展提供有效建议等；


