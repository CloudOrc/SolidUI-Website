---
id: 'deployment-kubernetes'
title: 'Kubernetes 部署'
sidebar_position: 3
---

# SolidUI Kubernetes 部署

## 1. 环境准备

[Docker](https://docs.docker.com/engine/install/) 1.13.1+ [Kubernetes](https://kubernetes.io/) 1.19.0+ [Helm](https://helm.sh/) 3.4.x+ [ingress](https://kubernetes.github.io/ingress-nginx/) 1.3.0+

## 2.以 Helm 的方式启动 (推荐)

这种方式需要先安装 Helm, Helm 的安装网上已经有非常多的资料，请自行安装即可

### 2.1 下载源码

从github仓库 https://github.com/CloudOrc/SolidUI 获取项目的源代码。

### 2.2 拉取镜像并启动服务

```
# 进入服务器（以Centos7为例）

cd SolidUI/deploy/kubernetes/helm-solidui

helm install solidui ./
```

### 2.3 访问服务

访问链接 http://ingress-ip-address:8099

默认用户名密码：admin/admin