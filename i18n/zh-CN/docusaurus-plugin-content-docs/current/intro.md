---
id: 'intro'
title: '框架介绍'
sidebar_position: 1
---

# 介绍

AI生成图形模型。

## 核心特点

* 极简流程，简洁设计
* 多种2D图例
* 多种3D图例
* 多种3D场景
* 支持多种数据源
* 支持Huggingface space
* 支持插件机器人
* 支持SolidUI-Model
* 支持Large Language Model
* 容器化部署

# 快速开始

为了快速体验

从 [Standalone](deployment/deployment-standalone.md) 开始

从 [Docker](deployment/deployment-docker.md) 开始

# 这是什么？

随着文本生成图像的语言模型兴起，SolidUI想帮人们快速构建可视化工具，可视化内容包括2D,3D,3D场景，从而快速构三维数据演示场景。SolidUI 是一个创新的项目，旨在将自然语言处理（NLP）与计算机图形学相结合，实现文生图功能。通过构建自研的文生图语言模型，SolidUI 利用 RLHF (Reinforcement Learning Human Feedback) 流程实现从文本描述到图形生成的过程。

## 自研文生图语言模型

SolidUI 的文生图语言模型是一个深度学习模型，可以将用户输入的自然语言描述转换为具体的图形表示。这个模型在大量文本和图形数据上进行训练，学习到从文本到图形的映射关系。为了实现这一目标，SolidUI 的自研文生图语言模型具有以下特点：

* 结合 NLP 和计算机图形学，实现从文本描述到图形生成的过程
* 可处理多种类型的图形，如 2D、3D 和场景等
* 模型训练过程涉及大量的文本和图形数据，以确保生成的图形质量和准确性

## RLHF 流程

SolidUI 使用 RLHF (Reinforcement Learning Human Feedback) 流程来优化文生图语言模型的性能。该流程利用人类反馈来指导模型的学习过程，从而使模型能够更好地满足用户需求。RLHF 流程的主要步骤包括：

* 收集反馈：用户对生成的图形进行评价，提供关于图形质量和准确性的反馈。
* 更新模型：根据收集到的反馈，使用强化学习算法对模型进行更新，以提高生成图形的质量和准确性。
* 迭代优化：重复收集反馈和更新模型的过程，直到模型性能达到满意的水平。

通过这一流程，SolidUI 的文生图语言模型能够不断地从用户反馈中学习和进步，生成更高质量和准确性的图形。

![0.1.0版本](/doc/image/designpage.png)

# 文档

SolidUI v0.1.0 的完整文档列表，请参见 [SolidUI-Website](https://cloudorc.github.io/SolidUI-Website/zh-CN/)

# 贡献

我们非常欢迎和期待更多的贡献者参与共建 SolidUI, 不论是代码、文档，或是其他能够帮助到社区的贡献形式。

# 联系我们

- 对 SolidUI 的任何问题和建议，可以提交 issue，以便跟踪处理和经验沉淀共享
- [twitter](https://twitter.com/dlimeng192048)
- [youtube](https://www.youtube.com/@dlimeng)
- [bilibili](https://space.bilibili.com/472576729) (in Chinese)
- [discord](https://discord.gg/NGRNu2mGeQ)


# 谁在使用 SolidUI

我们创建了一个 issue [[Who is Using SolidUI]](https://github.com/CloudOrc/SolidUI/issues/1) 以便用户反馈和记录谁在使用 SolidUI.

# Contributors

Thanks to everyone who contributed PR~ 🎉🎉🎉

<a href="https://github.com/CloudOrc/SolidUI/graphs/contributors">
<img src="https://contrib.rocks/image?repo=CloudOrc/SolidUI" />
</a>

# 感谢与赞助

我们非常感谢您对我们项目和开发工作的支持和认可。在开源软件开发过程中，我们深知用户和社区的反馈与支持是至关重要的。我们的项目已经提供了 README 和 Issue 系统，方便用户进行部署和解决问题，同时也有助于提升项目的活跃度。我们会优先关注 issue 中提出的问题。

如果您对于社区有兴趣，欢迎参与（代码，文档，使用），欢迎任何形式参与。

如果您觉得 SolidUI 项目对您有价值，并愿意支持我们的开发工作，请为项目点个小星星或[赞助我们](https://afdian.net/a/solidui) 。
