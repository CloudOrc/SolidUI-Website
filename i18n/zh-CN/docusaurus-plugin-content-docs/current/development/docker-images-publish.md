---
id: 'development-docker-publish'
title: 'Docker 发布镜像'
sidebar_position: 8
---

# SolidUI Docker 发布镜像

## 1.前置条件

[Docker](https://docs.docker.com/engine/install/) 1.13.1+

* 方式1：从官网下载地址: https://github.com/CloudOrc/SolidUI/releases ，下载对应的安装包（整体安装包）。
* 方式2：根据SolidUI 自行编译出项目安装包。



## 2. 创建镜像

[Docker Build](development-docker)

## 3. 发布镜像

```shell
使用 SolidUI 的管理员账户登录
docker login ghcr.io -u dlimeng -p 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

docker tag solidui-entrance:x.x.x  ghcr.io/cloudorc/solidui/solidui-entrance:x.x.x

docker tag solidui-web:x.x.x ghcr.io/cloudorc/solidui/solidui-web:x.x.x

docker tag soliduimodelui:x.x.x ghcr.io/cloudorc/solidui/soliduimodelui:x.x.x


docker push ghcr.io/cloudorc/solidui/solidui-entrance:x.x.x

docker push ghcr.io/cloudorc/solidui/solidui-web:x.x.x

docker push ghcr.io/cloudorc/solidui/soliduimodelui:x.x.x
```

## 4. 测试
镜像发布后，您可以在以下链接查看最新的镜像：
https://github.com/CloudOrc/SolidUI/pkgs/container/solidui%2Fsolidui-web
https://github.com/CloudOrc/SolidUI/pkgs/container/solidui%2Fsolidui-entrance
https://github.com/CloudOrc/SolidUI/pkgs/container/solidui%2Fsoliduimodelui