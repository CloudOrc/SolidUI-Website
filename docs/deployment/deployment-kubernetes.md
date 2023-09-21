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

* Method 1: Download the address from the official website: https://github.com/CloudOrc/SolidUI/releases, and download the corresponding installation package (overall installation package).
* Method 2: Compile the project installation package according to SolidUI.

Please download the source package solidui-x.x.x-src.tar.gz


### 2.2 Start the service with Helm

```
# Enter the server (take Centos7 as an example)

cd solidui-x.x.x-src/deploy/kubernetes/helm-solidui

helm install solidui ./
```

### 2.3 View the service status and ingress port
```
//View pod status
kubectl get pods -n solidui
//View the ingress port
kubectl get svc -A |grep ingress-nginx-controller
//If you do not use ingress access, you can access it through the port-forward forwarding port
kubectl port-forward svc/solidui-web  80:8099 --address 0.0.0.0 -n solidui
```

### 2.4 Accessing Services

Access link http://ingress-ip-address:ingress-port

Default username and password: admin/admin