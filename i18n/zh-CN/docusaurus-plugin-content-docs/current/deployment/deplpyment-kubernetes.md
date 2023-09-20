---
id: 'deployment-kubernetes'
title: 'Kubernetes 部署'
sidebar_position: 3
---

# SolidUI Kubernetes 部署

## 1. 环境准备

### 软件环境  
[Docker](https://docs.docker.com/engine/install/) 1.13.1+ [Kubernetes](https://kubernetes.io/) 1.19.0+ [Helm](https://helm.sh/) 3.4.x+ [ingress](https://kubernetes.github.io/ingress-nginx/) 1.3.0+

### 操作系统
Centos 7+, Ubuntu 20.04

### 硬件环境
CPU 8核+，内存 16G+  

## 2.以 Helm 的方式启动 (推荐)

这种方式需要先安装 Helm, Helm 的安装网上已经有非常多的资料，请自行安装即可

### 2.1 下载源码

方式1：从github仓库 https://github.com/CloudOrc/SolidUI 获取项目的源代码。

方式2：从https://github.com/CloudOrc/SolidUI/releases 下载下载所需版本的源码包。

请下载源码包 solidui-x.x.x-src.tar.gz


### 2.2 拉取镜像并启动服务

```
# 进入服务器（以Centos7为例）

cd solidui-x.x.x-src/deploy/kubernetes/helm-solidui

helm install solidui ./
```

### 2.3 查看服务状态及ingress端口
```
//查看pod状态
kubectl get pods -n solidui
//查看ingress端口
kubectl get svc -A |grep ingress-nginx-controller
//如果不使用ingress访问可通过port-forward转发端口进行访问
kubectl port-forward svc/solidui-web  80:8099 --address 0.0.0.0 -n solidui
```

### 2.4 访问服务

访问链接 http://ingress-ip-address:ingress-port

默认用户名密码：admin/admin