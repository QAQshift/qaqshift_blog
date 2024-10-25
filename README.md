<<<<<<< HEAD
# QAQshift Blog

## 数据库表创建

```typescript
// 用户
let users = `create table if not exists users(
   id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
   name VARCHAR(100) NOT NULL COMMENT '用户名',
   email VARCHAR(100) NOT NULL UNIQUE COMMENT '邮箱',
   password VARCHAR(100) NOT NULL COMMENT '密码',
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间'
);`;

// 分类
let subset = `create table if not exists subset(
    id INT NOT NULL AUTO_INCREMENT,
    subset_name VARCHAR(100) NOT NULL COMMENT '分类名称',
    classfiy INT NOT NULL COMMENT '类型0文章，1图片，2资源',
    moment VARCHAR(100) NOT NULL COMMENT '创建时间',
    PRIMARY KEY (id)
);`;

// 文件
let file = `create table if not exists file(
    id INT NOT NULL AUTO_INCREMENT,
    url VARCHAR(100) NOT NULL COMMENT '地址',
    file_name VARCHAR(32) NOT NULL COMMENT '格式',
    formart VARCHAR(100) NOT NULL COMMENT '名称',
    sub_id INT COMMENT '分类id 0文章  1资源',
    moment VARCHAR(100) NOT NULL COMMENT '创建时间',
    PRIMARY KEY (id)
);`;

// 文章
let article = `create table if not exists article(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL COMMENT '标题',
    sub_id INT COMMENT '分类id',
    classfiy INT NOT NULL COMMENT '类型0文章，1图片，2资源',
    label VARCHAR(200) COMMENT '标签',
    introduce VARCHAR(1000) COMMENT '简介',
    content VARCHAR(5000) COMMENT '内容',
    cover VARCHAR(100) COMMENT '封面地址',
    views INT DEFAULT 0 COMMENT '查看次数',
    state INT DEFAULT 0 COMMENT '文章状态 0草稿，1已发布',
    moment VARCHAR(100) NOT NULL COMMENT '创建时间',
    PRIMARY KEY (id)
);`;

// 点赞
let praise = `create table if not exists praise(
    id INT NOT NULL AUTO_INCREMENT,
    user_id VARCHAR(100) NOT NULL COMMENT '用户id',
    user_type INT NOT NULL COMMENT '用户类型 0用户 1游客',
    article_id INT NOT NULL COMMENT '文章id',
    moment VARCHAR(100) NOT NULL COMMENT '创建时间',
    PRIMARY KEY (id)
);`;

// 文章评论
let comment = `create table if not exists comment(
    id INT NOT NULL AUTO_INCREMENT,
    user_id VARCHAR(100) NOT NULL COMMENT '用户id',
    user_type INT NOT NULL COMMENT '用户类型 0用户 1游客',
    user_name VARCHAR(100) COMMENT '用户名称',
    article_id INT NOT NULL COMMENT '文章id',
    content VARCHAR(1000) NOT NULL COMMENT '内容',
    complaint INT DEFAULT 0 COMMENT '举报次数',
    isread INT DEFAULT 0 COMMENT '是否已读',
    moment VARCHAR(100) NOT NULL COMMENT '创建时间',
    PRIMARY KEY (id)
);`;

// 标签
let label = `create table if not exists label(
    id INT NOT NULL AUTO_INCREMENT,
    label_name VARCHAR(100) NOT NULL COMMENT '名称',
    moment VARCHAR(100) NOT NULL COMMENT '创建时间',
    PRIMARY KEY (id)
);`;

// 私信
let message = `create table if not exists message(
    id INT NOT NULL AUTO_INCREMENT,
    user_id VARCHAR(100) NOT NULL COMMENT '用户id',
    user_type INT NOT NULL COMMENT '用户类型 0用户 1游客',
    user_name VARCHAR(100) COMMENT '用户名称',
    content VARCHAR(1000) NOT NULL COMMENT '内容',
    isread INT DEFAULT 0 COMMENT '是否已读 0否 1是',
    moment VARCHAR(100) NOT NULL COMMENT '创建时间',
    PRIMARY KEY (id)
);`;

// 埋点
let record = `create table if not exists record(
    id INT NOT NULL AUTO_INCREMENT,
    user_id VARCHAR(100) NOT NULL COMMENT '用户id',
    user_type INT NOT NULL COMMENT '用户类型 0用户 1游客',
    position VARCHAR(100) COMMENT '位置',
    device INT DEFAULT 0 COMMENT '设备 0mobile 1pc',
    moment VARCHAR(100) NOT NULL COMMENT '创建时间',
    PRIMARY KEY (id)
);`;
```

## 后台接口

### 用户登录

地址：/signin

```typescript
export
```
=======
# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).
>>>>>>> master
