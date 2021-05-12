# 一些说明

## 前置条件

- 参考 [链家二手房数据格式](https://tj.lianjia.com/ershoufang/)
- 目前仅支持查询 “天津”范围内的数据！！！
- 目前仅支持查询 “天津”范围内的数据！！！
- 目前仅支持查询 “天津”范围内的数据!!!
- `area_code`,`street_code` 仅在城市范围内唯一，因为链家的顶级域名是 tj
- 发现问题 河北/河东区都有 靖江路 `jingjianglu`
    - 如果是 图谱则 最下一层code 返回为 `pcode + '_' + code`


```
// 和平的所有街道
https://tj.lianjia.com/ershoufang/heping/
// 南开的所有街道
https://tj.lianjia.com/ershoufang/nankai/


// 和平区 南市街的所有房子
https://tj.lianjia.com/ershoufang/nanshi/
// 南开区 鼓楼街的所有房子
https://tj.lianjia.com/ershoufang/guloujie/
```

### 1.0获取城市列表

- 目前仅支持 “天津”
```aidl
http://localhost:8080/cities/tj/areas

{
    status: "ok",
    msg: "获取成功",
    data: {
        total: 1,
        list: [
            {
                id: 1234,
                name: "天津",
                code: "tj"
            }
        ]
    }
}
```

### 1.1 获取单个城市 by code
```aidl
http://localhost:8080/cities/tj

{
    status: "ok",
    msg: "获取成功",
    data: {
        id: 1234,
        name: "天津",
        code: "tj"
    }
}
```

### 1.2 获取某个城市的所有区

```
http://localhost:8080/cities/tj/areas

{
    status: "ok",
    msg: "获取成功",
    data: {
        total: 18,
        list: [
            {
                id: 1,
                name: "和平",
                code: "heping"
            },
            {
                id: 2,
                name: "南开",
                code: "nankai"
            }
            ...
        ]
    }
}
```

### 2.0 获取所有区(这里就是查询表里的所有区，没有城市限制)

```aidl
http://localhost:8080/areas

{
    status: "ok",
    msg: "获取成功",
    data: {
        total: 18,
        list: [
            {
                id: 1,
                name: "和平",
                code: "heping"
            },
            {
                id: 2,
                name: "南开",
                code: "nankai"
            }
            ...
        ]
    }
}
```

### 2.1 获取单个小区信息 通过code

```aidl
http://localhost:8080/areas/heping

{
    status: "ok",
    msg: "获取成功",
    data: {
        id: 1,
        name: "和平",
        code: "heping"
    }
}
```

### 2.2 获取某小区的所有街道

```
http://localhost:8080/areas/heping/streets

{
    status: "ok",
    msg: "获取成功",
    data: [
        {
            id: 1,
            name: "南市",
            code: "nanshi"
        },
        {
            id: 2,
            name: "南营门街",
            code: "nanyingmenjie"
        },
        ...
    ]
}
```

### 2.3 获取 某个街道的所有小区

```
# 南市的所有小区  
# 因为 街道code唯一，
# 所以 这里不用级联查询 
# 所以 不用级联向上查询 对应区Area 
# 所以 不用级联向上查询 和对应城市City
http://localhost:8080/streets/nanshi

{
    status: "ok",
    msg: "获取成功",
    data: {
        total: 39,
        list: [
            "庆有东里",
            "天津大都会SMART",
            "和平园",
            "荣安街",
            "金茂广场",
            ...
        ]
    }
}
```

### 3.0 获取省区街关系图谱

```
http://localhost:8080/house_graph/tj

{
	"status": "ok",
	"msg": "获取成功",
	"data": {
		"id": 1234,
		"pid": null,
		"name": "天津",
		"code": "tj",
		"pcode": null,
		"value": 18,
		"children": [{
			"id": 1,
			"pid": 1234,
			"name": "和平",
			"code": "heping",
			"pcode": "tj",
			"value": 6,
			"children": [{
				"id": 1,
				"pid": 1,
				"name": "南市",
				"code": "heping_nanshi",
				"pcode": "heping",
				"value": 0,
				"children": null
			}]
		}]
	}
}
```

