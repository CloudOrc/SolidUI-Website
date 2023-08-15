---
id: 'metadata'
title: 'Metadata'
sidebar_position: 3
---




## 元数据

### solidui_datasource 数据源管理

* id: 数据源的唯一标识符。
* datasource_name: 数据源的名称。
* datasource_desc: 数据源的描述。
* datasource_type_id: 数据源类型的ID。
* create_identify: 创建标识符。
* parameter: 参数。
* create_time: 创建时间。
* create_user: 创建用户。
* labels: 标签。
* expire: 过期标识。

### solidui_datasource_type 数据源类型

* id: 数据源类型的唯一标识符。
* name: 类型名称。
* description: 类型描述。
* option: 选项。
* classifier: 分类器。
* icon: 图标。
* layers: 层级。

### solidui_datasource_type_key 数据源类型设置

* id: 数据源类型键的唯一标识符。
* data_source_type_id: 数据源类型ID。
* key: 键。
* name: 名称。
* name_en: 英文名称。
* default_value: 默认值。
* value_type: 值类型。
* scope: 范围。
* require: 是否必需。
* description: 描述。
* description_en: 英文描述。
* value_regex: 值正则表达式。
* update_time: 更新时间。
* create_time: 创建时间。

### solidui_job_element 工作元素

* id: 工作元素的唯一标识符。
* project_id: 项目ID。
* name: 名称。
* data: 数据。
* data_type: 数据类型。
* create_time: 创建时间。
* update_time: 更新时间。

### solidui_job_element_page 工作元素页面

* id: 工作元素页面的唯一标识符。
* job_page_id: 工作页面ID。
* job_element_id: 工作元素ID。
* position: 位置。
* create_time: 创建时间。
* update_time: 更新时间。

### solidui_job_page  工作页面

* id: 工作页面的唯一标识符。
* project_id: 项目ID。
* name: 名称。
* parent_id: 父级ID。
* layout: 布局。
* orders: 排序。
* create_time: 创建时间。
* update_time: 更新时间。

### solidui_project 项目管理

* id: 项目的唯一标识符。
* user_name: 用户名。
* project_name: 项目名称。
* image: 项目图片。
* description: 描述。
* create_time: 创建时间。
* update_time: 更新时间。
* status: 项目状态。

### solidui_user 用户管理

* id: 用户的唯一标识符。
* user_name: 用户名。
* user_password: 用户密码。
* create_time: 创建时间。
* update_time: 更新时间。
* queue: 队列。

### solidui_model_type  模型类型设置

* id: 模型类型的唯一标识符。
* name: 名称。
* type_name: 类型名称。
* prompt: 提示。
* token: 令牌。
* baseurl: 基础URL。

## E-R图

![metadata](/image/metadata.png)

* 数据源(solidui_datasource)有一个数据源类型(solidui_datasource_type)，通过datasource_type_id字段关联。
* 数据源类型(solidui_datasource_type)有一个或多个数据源类型键(solidui_datasource_type_key)，通过id字段关联。
* 工作元素(solidui_job_element)存在于一个项目(solidui_project)中，通过project_id字段关联。
* 工作元素页面(solidui_job_element_page)关联到一个工作元素(solidui_job_element)和一个工作页面(solidui_job_page)，分别通过job_element_id和job_page_id字段。
* 工作页面(solidui_job_page)存在于一个项目(solidui_project)中，通过project_id字段关联。
* 项目(solidui_project)由一个用户(solidui_user)创建，通过user_name字段关联。


这个图并没有包括所有的表和字段，只包含了一些主要的关联。
