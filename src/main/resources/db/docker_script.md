### 安装 docker

- 安装后，配置 镜像

### 安装mysql


```
# 这样默认安装最新版
docker pull mysql

# 安装指定版本
docker pull mysql:5.7.25
```

### 开启一个mysql服务

```
# --name 起一个名字
# -e 指定环境变量
# -p 3306:3306 监听客户端3306端口的内容，转发到容器的3306
# -d docker daemon  启动一个后台进程运行

docker run --name my-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -e MYSQL_DATABASE=xdml -p 3306:3306 -d mysql
```

### idea里database连接数据库，新建表，和插入数据

```
create table user(id int ,name varchar(10));

选中所有之后 代码区左上角绿色箭头点击一下

建表成功

插入一条数据
insert into user(id,name) values(1,"张三");
```

### 修改数据库表

```
create table user(
  id int primary key auto_increment,
  username varchar(10),
  encrypted_password varchar(100),
  avatar varchar(100),
  created_at datetime,
  updated_at datetime
)
```