# QAQshift Blog

## 数据库表创建

```typescript
// 用户
let users = `create table if not exists users(
   id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
   name VARCHAR(100) NOT NULL COMMENT '用户名',
   email VARCHAR(100) NOT NULL UNIQUE COMMENT '邮箱',
   password VARCHAR(100) NOT NULL COMMENT '密码',
   img VARCHAR(100) COMMENT '头像',
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

// 日记
let dairy = `create table if not exists dairy(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL COMMENT '名称',
    content VARCHAR(5000) NOT NULL COMMENT '内容',
    picture VARCHAR(500) COMMENT '封面地址',
    weather_id INT COMMENT '天气id',
    mood INT DEFAULT 0 COMMENT '心情',
    moment VARCHAR(100) NOT NULL COMMENT '创建时间',
    PRIMARY KEY (id)
);`;

// 天气
let weather = `create table if not exists weather(
    id INT NOT NULL AUTO_INCREMENT,
    weather_name VARCHAR(32) NOT NULL COMMENT '名称',
    icon VARCHAR(100) COMMENT '图标',
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
// 请求
export type signin = {
  name: string;
  password: string;
};

// 返回数据
res={
    code:number; // 状态码 200正常 300未通过token 400功能访问 500服务器错误
    data?:{
        id:number;
        name:string;
        imgUrl:string //头像
        token:string;
    }
}
```

### 总览数据

地址：/overview

```typescript
// 请求
export type overview = {
  token: string;
  userId:string;
};

// 返回数据
res={
    code:number; // 状态码 200正常 300未通过token 400功能访问 500服务器错误
    data?:{
        file:number;
        article:string;
        gallery:string //图库
        diary:number;
    }
}
```

### 访问量

地址：/visits

```typescript
// 请求
export type visits = {
  token: string;
  length:number; //时间长度
};

// 返回数据
res={
    code:number; // 状态码 200正常 300未通过token 400功能访问 500服务器错误
    data?:{
        date:number; //日期
        count:number;
    }
}
```

### 数据监测

地址：/survey

```typescript
// 请求
export type survey = {
  token: string;
  length:number; //时间长度
};

// 返回数据
res={
    code:number; // 状态码 200正常 300未通过token 400功能访问 500服务器错误
    data?:{
        device:{//不同设备
            key:'mobile' | 'pc';
            value:number;
        }[];
        website:{
            key:'file' | 'article' | 'gallery' | 'diary';
            value:number;
        }[];
    }
}
```

### 评论

地址：/comment

```typescript
// 请求
export type comment = {
  token: string;
  pageSize:number; //单页条数
  nowPage:number;// 当前页
  count?:boolean; //是否返回总数
};

// 返回数据
res={
    code:number; // 状态码 200正常 300未通过token 400功能访问 500服务器错误
    data?:{
        count?:number;
        list:{
            id:number;
            article?:{
                id:number;
                title:string;
            };
            user:{
                id:string | number;
                name:string;
                imgUrl:string;
            };
            comment:string; // 内容
            moment:string; // 时间
            complaint:number; //举报数
        }[];
    }
}
```

### 私信

地址：/message

```typescript
// 请求
export type message = {
  token: string;
  pageSize:number; //单页条数
  nowPage:number;// 当前页
  count?:boolean; //是否返回总数
};

// 返回数据
res={
    code:number; // 状态码 200正常 300未通过token 400功能访问 500服务器错误
    data?:{
        count?:number;
        list:{
            id:number;
            user:{
                id:string | number;
                name:string;
                imgUrl:string;
            };
            comment:string; // 内容
            moment:string; // 时间
        }[];
    }
}
```

### 文章（列表）

地址：/article

```typescript
// 请求
export type article = {
  token: string;
  pageSize:number; //单页条数
  nowPage:number;// 当前页
  state?:number; // 状态
  subsetId?:number; // 分组
  searchTerm?:string | number; // 搜索词条
  count?:boolean; //是否返回总数
};

// 返回数据
res={
    code:number; // 状态码 200正常 300未通过token 400功能访问 500服务器错误
    data?:{
        count?:number;
        list:{
            id:number;
            user:{
                id:number;
                title:string;
                subsetId?:number;
                moment:string; // 时间
                label?:string[];
                introduce?:string; // 简介
                cover?:string; // 封面地址
                views:number; // 查看次数
                state:number; // 状态0未发布 1已发布
                comment:number; // 评论次数
                praise:number; // 点赞次数
            }
        }[];
    }
}
```

### 文章发布或撤回

地址：/changeAritcleState

```typescript
// 请求
export type changeAritcleState = {
  token: string;
  articleId:number; // 文章id
};

// 返回数据
res={
    code:number; // 状态码 200正常 300未通过token 400功能访问 500服务器错误
    data?:{
        count?:number;
    }
}
```

### 文章删除

地址：/deleteAritcle

```typescript
// 请求
export type deleteAritcle = {
  token: string;
  articleId:number; // 文章id
};

// 返回数据
res={
    code:number; // 状态码 200正常 300未通过token 400功能访问 500服务器错误
    data?:{
        count?:number;
    }
}
```

### 文章状态（列表）

地址：/aritcleState

```typescript
// 请求
export type aritcleState = {
  token: string;
};

// 返回数据
res={
    code:number; // 状态码 200正常 300未通过token 400功能访问 500服务器错误
    data?:{
        id?:number;
        name:'已发布' | '未发布';
        value:number;
    }[];
}
```

### 分组

地址：/subset

```typescript
// 请求
export type subset = {
  token: string;
  classify:number;
};

// 返回数据
res={
    code:number; // 状态码 200正常 300未通过token 400功能访问 500服务器错误
    data?:{
        count?:number;
        list:{
            id:number;
            name:string;
            value:number; //数据总数
            moment:string;  //时间
        }[];

    };
}
```

### 新建分组

地址：/addSubset

```typescript
// 请求
export type addSubset = {
  token: string;
  classify:number;
  subsetName:string|number;
};

// 返回数据
res={
    code:number; // 状态码 200正常 300未通过token 400功能访问 500服务器错误
}
```

### 修改分组

地址：/updateSubset

```typescript
// 请求
export type updateSubset = {
  token: string;
  subsetId:number;
  subsetName:string|number;
};

// 返回数据
res={
    code:number; // 状态码 200正常 300未通过token 400功能访问 500服务器错误
}
```

### 删除分组

地址：/deleteSubset

```typescript
// 请求
export type deleteSubset = {
  token: string;
  subsetId:number;
};

// 返回数据
res={
    code:number; // 状态码 200正常 300未通过token 400功能访问 500服务器错误
}
```

### 标签

地址：/label

```typescript
// 请求
export type label = {
  token: string;
};

// 返回数据
res={
    code:number; // 状态码 200正常 300未通过token 400功能访问 500服务器错误
    data?:{
        id:number;
        name:string | number;
        moment:string;
    }
}
```

### 新建标签

地址：/addLabel

```typescript
// 请求
export type addLabel = {
  token: string;
  labelName:string|number;
};

// 返回数据
res={
    code:number; // 状态码 200正常 300未通过token 400功能访问 500服务器错误
}
```

### 删除标签

地址：/deleteLabel

```typescript
// 请求
export type deleteLabel = {
  token: string;
  labelId:number;
};

// 返回数据
res={
    code:number; // 状态码 200正常 300未通过token 400功能访问 500服务器错误
}
```

### 文件

地址：/file

```typescript
// 请求
export type file = {
  token: string;
  pageSize:number; //单页条数
  nowPage:number;// 当前页
  subsetId?:number; // 分组
  count?:boolean;
};

// 返回数据
res={
    code:number; // 状态码 200正常 300未通过token 400功能访问 500服务器错误
    data?:{
        count?:number;
        list:{
            id:number;
            url:string; // 文件地址
            fileName:string; // 文件名
            format:string; // 格式
            subsetId?:number; // 所属类型
        }[];
    }
}
```

### 文件上传

地址：/uploadFile

```typescript
// 请求
export type uploadFile = {
  token: string;
  formData:new FormData();
  subsetId?:number; // 所属类型
};

// 返回数据
res={
    code:number; // 状态码 200正常 300未通过token 400功能访问 500服务器错误
    data?:{
        id:number;
        url:string; // 文件地址
        fileName:string; // 文件名
        format:string; // 格式
        subsetId?:number; // 所属类型
    }
}
```

### 文件删除

地址：/deleteFile

```typescript
// 请求
export type deleteFile = {
  token: string;
  files:number | number[];
};

// 返回数据
res={
    code:number; // 状态码 200正常 300未通过token 400功能访问 500服务器错误
}
```

### 文件移动

地址：/removeFile

```typescript
// 请求
export type removeFile = {
  token: string;
  files:number | number[];
  subsetId?:number; // 所属类型
};

// 返回数据
res={
    code:number; // 状态码 200正常 300未通过token 400功能访问 500服务器错误
}
```

### 图库

地址：/gallery

```typescript
// 请求
export type gallery = {
  token: string;
  pageSize:number; //单页条数
  nowPage:number;// 当前页
  subsetId?:number; // 所属类型
  count?:boolean;
  searchTerm?:string | number; // 搜索
};

// 返回数据
res={
    code:number; // 状态码 200正常 300未通过token 400功能访问 500服务器错误
    data?:{
        count?:number;
        list:{
            id:number;
            user:{
                id:number;
                title:string;
                subsetId?:number;
                moment:string; // 时间
                introduce?:string; // 简介
                cover?:string; // 封面地址
                content:string[]; // 图片内容
                views:number; // 查看次数
                comment:number; // 评论次数
                praise:number; // 点赞次数
            }
        }[];
    }
}
```

### 图库删除

地址：/deleteGallery

```typescript
// 请求
export type deleteGallery = {
  token: string;
  galleryId:number;
};

// 返回数据
res={
    code:number; // 状态码 200正常 300未通过token 400功能访问 500服务器错误
}
```

### 日记

地址：/dairy

```typescript
// 请求
export type dairy = {
  token: string;
  pageSize:number; //单页条数
  nowPage:number;// 当前页
  count?:boolean;
  searchTerm?:string | number; // 搜索
};

// 返回数据
res={
    code:number; // 状态码 200正常 300未通过token 400功能访问 500服务器错误
    data?:{
        count?:number;
        list:{
            id:number;
            user:{
                id:number;
                title:string;
                moment:string; // 时间
                picture?:string[]; // 图片
                content:string; // 内容
                weatherId:number; // 天气id
            }
        }[];
    }
}
```

### 日记删除

地址：/deleteDairy

```typescript
// 请求
export type deleteDairy = {
  token: string;
  dairyId:number;
};

// 返回数据
res={
    code:number; // 状态码 200正常 300未通过token 400功能访问 500服务器错误
}
```

### 文章新建

地址：/createArticle

```typescript
// 请求
export type createArticle = {
  token: string;
  title:string;
  subsetId?:number;
  classify:number;
  label?:string;
  introduce?:string;
  content?:string;
  cover?:string;
  state?:number;
  moment:string;
};

// 返回数据
res={
    code:number; // 状态码 200正常 300未通过token 400功能访问 500服务器错误
}
```

### 文章新建

地址：/createArticle

```typescript
// 请求
export type createArticle = {
  token: string;
  title:string;
  subsetId?:number;
  classify:number;
  label?:string;
  introduce?:string;
  content?:string;
  cover?:string;
  state?:number;
  moment:string;
};

// 返回数据
res={
    code:number; // 状态码 200正常 300未通过token 400功能访问 500服务器错误
}
```

### 获取文章/图库编辑信息

地址：/articleEditInfo

```typescript
// 请求
export type articleEditInfo = {
  token: string;
  articleId:string;
};

// 返回数据
res={
    code:number; // 状态码 200正常 300未通过token 400功能访问 500服务器错误
    data?:{
        id:number;
        title:string;
        subsetId?:number;
        label?:string[];
        introduce?:string;
        content?:string;
        cover?:string;
    }
}
```

### 文章/图库修改

地址：/updateArticle

```typescript
// 请求
export type updateArticle = {
  token: string;
  title:string;
  subsetId?:number;
  label?:string;
  introduce?:string;
  content?:string;
  cover?:string;
  state?:number;
};

// 返回数据
res={
    code:number; // 状态码 200正常 300未通过token 400功能访问 500服务器错误
}
```

### 创建日记

地址：/createDiary

```typescript
// 请求
export type createDiary = {
  token: string;
  title:string;
  content:string;
  picture?:string[];
  weatherId:number;
};

// 返回数据
res={
    code:number; // 状态码 200正常 300未通过token 400功能访问 500服务器错误
}
```

### 天气

地址：/weather

```typescript
// 请求
export type weather = {
  token: string;
};

// 返回数据
res={
    code:number; // 状态码 200正常 300未通过token 400功能访问 500服务器错误
    data?:{
        id:number;
        name:string;
        icon:string;
    }[]
}
```
