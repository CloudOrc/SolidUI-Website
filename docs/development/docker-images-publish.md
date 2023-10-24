---
id: 'development-docker-publish'
title: 'Docker Publish'
sidebar_position: 8
---

# Docker Build for SolidUI

## 1. Prerequisites

[Docker](https://docs.docker.com/engine/install/) 1.13.1+

* Method 1: Download the address from the official website: https://github.com/CloudOrc/SolidUI/releases, and download the corresponding installation package (overall installation package).
* Method 2: Compile the project installation package according to SolidUI.


## 2. Create an image

[Docker Build](development-docker)

## 3. Release the image

```shell
Log in with the SolidUI administrator account.
docker login ghcr.io -u dlimeng -p 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

docker tag solidui-entrance:x.x.x  ghcr.io/cloudorc/solidui/solidui-entrance:x.x.x

docker tag solidui-web:x.x.x ghcr.io/cloudorc/solidui/solidui-web:x.x.x

docker tag soliduimodelui:x.x.x ghcr.io/cloudorc/solidui/soliduimodelui:x.x.x


docker push ghcr.io/cloudorc/solidui/solidui-entrance:x.x.x

docker push ghcr.io/cloudorc/solidui/solidui-web:x.x.x

docker push ghcr.io/cloudorc/solidui/soliduimodelui:x.x.x
```

## 4. Test
After the image is published, you can view the latest image at the following links:
https://github.com/CloudOrc/SolidUI/pkgs/container/solidui%2Fsolidui-web
https://github.com/CloudOrc/SolidUI/pkgs/container/solidui%2Fsolidui-entrance
https://github.com/CloudOrc/SolidUI/pkgs/container/solidui%2Fsoliduimodelui


