---
id: 'deployment-kubernetes'
title: 'Kubernetes Deployment'
sidebar_position: 4
---


# SolidUI Kubernetes deployment

## 1. Environment preparation

### Software Environment  
[Docker](https://docs.docker.com/engine/install/) 1.13.1+ [Kubernetes](https://kubernetes.io/) 1.19.0+ [Helm](https://helm.sh/) 3.4.x+ [ingress](https://kubernetes.github.io/ingress-nginx/) 1.3.0+

### Operating System  
Centos 7+, Ubuntu 20.04

### Hardware Environment  
CPU 8core+，Memory 16G+  

## 2.Start Helme (recommended)

In this way, you need to install the Helm first. There are a lot of information on the installation website of the Helm, please install it by yourself.

### 2.1 Download source code

Download the source code of https://github.com/CloudOrc/SolidUI for items in the github.

### 2.2 Start the service with Helm

```
# Enter the server (take Centos7 as an example)

cd SolidUI/deploy/kubernetes/helm-solidui

helm install solidui ./
```

### 2.3 Accessing Services

Access link http://ingress-ip-address:8099

Default username and password: admin/admin