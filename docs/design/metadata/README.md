---
id: 'metadata'
title: 'Metadata'
sidebar_position: 3
---

## Metadata

**solidui_datasource (Data Source Management)**

- id: Unique identifier of the data source.
- datasource_name: Name of the data source.
- datasource_desc: Description of the data source.
- datasource_type_id: ID of the data source type.
- create_identify: Creation identifier.
- parameter: Parameters.
- create_time: Creation time.
- create_user: User who created the source.
- labels: Labels.
- expire: Expiration indicator.

**solidui_datasource_type (Data Source Type)**

- id: Unique identifier of the data source type.
- name: Type name.
- description: Type description.
- option: Options.
- classifier: Classifier.
- icon: Icon.
- layers: Layers.

**solidui_datasource_type_key (Data Source Type Setting)**

- id: Unique identifier of the data source type key.
- data_source_type_id: Data source type ID.
- key: Key.
- name: Name.
- name_en: Name in English.
- default_value: Default value.
- value_type: Value type.
- scope: Scope.
- require: Whether it is required.
- description: Description.
- description_en: Description in English.
- value_regex: Value regular expression.
- update_time: Update time.
- create_time: Creation time.

**solidui_job_element (Job Element)**

- id: Unique identifier of the job element.
- project_id: Project ID.
- name: Name.
- data: Data.
- data_type: Data type.
- create_time: Creation time.
- update_time: Update time.

**solidui_job_element_page (Job Element Page)**

- id: Unique identifier of the job element page.
- job_page_id: Job page ID.
- job_element_id: Job element ID.
- position: Position.
- create_time: Creation time.
- update_time: Update time.

**solidui_job_page (Job Page)**

- id: Unique identifier of the job page.
- project_id: Project ID.
- name: Name.
- parent_id: Parent ID.
- layout: Layout.
- orders: Order.
- create_time: Creation time.
- update_time: Update time.

**solidui_project (Project Management)**

- id: Unique identifier of the project.
- user_name: Username.
- project_name: Project name.
- image: Project image.
- description: Description.
- create_time: Creation time.
- update_time: Update time.
- status: Project status.

**solidui_user (User Management)**

- id: Unique identifier of the user.
- user_name: Username.
- user_password: User password.
- create_time: Creation time.
- update_time: Update time.
- queue: Queue.

**solidui_model_type (Model Type Setting)**

- id: Unique identifier of the model type.
- name: Name.
- code: output code type
- type_name: Type name.
- prompt: Prompt.
- token: Token.
- baseurl: Base URL.

## E-R

![metadata](/image/metadata.png)

* The data source (solidui_datasource) has a data source type (solidui_datasource_type), linked via the datasource_type_id field.
* The data source type (solidui_datasource_type) has one or more data source type keys (solidui_datasource_type_key), linked via the id field.
* The job element (solidui_job_element) exists within a project (solidui_project), linked via the project_id field.
* The job element page (solidui_job_element_page) is linked to a job element (solidui_job_element) and a job page (solidui_job_page), respectively via the job_element_id and job_page_id fields.
* The job page (solidui_job_page) exists within a project (solidui_project), linked via the project_id field.
* The project (solidui_project) is created by a user (solidui_user), linked via the user_name field.

This diagram does not include all tables and fields, it only contains some of the main associations.