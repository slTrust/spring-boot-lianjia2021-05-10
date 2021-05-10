## 前言

- 本项目是 spring-boot写的起手项目
- 已完成用户登录模块
- 现阶段准备做一个二手房数据可视化的全栈项目

> 后续工作

- 用 vue-admin 搭建一个数据可视化后台
- 完成基本的sql查询，数据统计
- 里程碑目标是"全国的二手房数据""


## 数据准备工作

### docker 启动一个 mysql

```
# docker 数据挂载目录
cd ~/mysql_data

# docker  启动mysql
docker run -v "$PWD/data":/var/lib/mysql --name my-mysql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=lianjia -p 3306:3306 -d mysql:5.7.27
```

### 方式一：爬虫爬取最新的二手房数据

- 我用的是 python爬虫框架 scrapy 写的一个爬虫
    - 我的[仓库](https://github.com/slTrust/spider-ershoufang-20210510)
    - 后续链家如果格式变了，只需 修改xpath 即可
        - xpath使用指南 
            - chrome浏览器 右键检查元素 -> 选中你需要爬去的节点元素 -> 右键 copy xpath
- 如果你觉得麻烦，没关系，后续我会把我爬到的13w数据 打包到网盘，直接导入即可

```
链接: https://pan.baidu.com/s/13NgNBDU1yZYZVXeASFMWnA 
提取码: pjqc 
```

### 方式二：如果你不用我的爬虫，可以直接下载网盘的数据,然后用本项目的flyway 建库建表 

```
# pom.xml 里配置好数据库连接信息
mvn flyway:migrate
```

### 此时有了数据，你就可以发挥你的想象力以及脑洞

用我的这个模版项目

- 学习sql
    - 重新设计我的表，因为是 单表 N多的字段放在一起了，有点冗余

- 学习后端
    - 你可以学习 mybatis 练练数据库操作
    - 你可以写写 单元测试 

- or 做一个 可视化的数据分析项目
- 学习前端
    - 可以学习 vue / react
    - 建议直接用 别人的UI组件库 如 [vue-admin](https://github.com/PanJiaChen/vue-element-admin) 等
    - 可以学习 ts
    - 可以学习 electron 打个壳，放你的网址
    - 可视化 echarts / highcharts / d3 /antV 都可以
    - 还可以利用 数据里提供的 address 使用 百度的逆向经纬度解析，学习地理信息可视化，如城市地图 可以参考 https://deck.gl/
- 学习运维以及部署
    - 买一台阿里云服务器部署上去
    - 一些基本的 linux 命令
    - docker化部署
- 学习爬虫
    - 爬取全国的二手房数据 or 任何你想要爬的数据
    - 分布式爬虫

