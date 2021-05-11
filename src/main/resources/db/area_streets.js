function getInsertAreaSql(){
    let items = [
        {id:1,name:'和平',code:'heping'},
        {id:2,name:'南开',code:'nankai'},
        {id:3,name:'河西',code:'hexi'},
        {id:4,name:'河北',code:'hebei'},
        {id:5,name:'河东',code:'hedong'},
        {id:6,name:'红桥',code:'hongqiao'},
        {id:7,name:'西青',code:'xiqing'},
        {id:8,name:'北辰',code:'beichen'},
        {id:9,name:'东丽',code:'dongli'},
        {id:10,name:'津南',code:'jinnan'},
        {id:11,name:'塘沽',code:'tanggu'},
        {id:12,name:'开发区',code:'kaifaqutj'},
        {id:13,name:'武清',code:'wuqing'},
        {id:14,name:'滨海新区',code:'binhaixinqu'},
        {id:15,name:'宝坻',code:'baodi'},
        {id:16,name:'蓟州',code:'jizhou'},
        {id:17,name:'海河教育园区',code:'haihejiaoyuyuanqu'},
        {id:18,name:'静海',code:'jinghai'},
    ]
    let res = []
    items.forEach((e)=>{
        let {id,name,code} = e
        let sql = `insert into area(id,cid,name,code,created_at,updated_at) values(${id},1234,'${name}','${code}',now(),now());`
        res.push(sql)
    })
    return res
}
/*
insert into area(id,cid,name,code,created_at,updated_at) values(1,1234,'和平','heping',now(),now());
insert into area(id,cid,name,code,created_at,updated_at) values(2,1234,'南开','nankai',now(),now());
insert into area(id,cid,name,code,created_at,updated_at) values(3,1234,'河西','hexi',now(),now());
insert into area(id,cid,name,code,created_at,updated_at) values(4,1234,'河北','hebei',now(),now());
insert into area(id,cid,name,code,created_at,updated_at) values(5,1234,'河东','hedong',now(),now());
insert into area(id,cid,name,code,created_at,updated_at) values(6,1234,'红桥','hongqiao',now(),now());
insert into area(id,cid,name,code,created_at,updated_at) values(7,1234,'西青','xiqing',now(),now());
insert into area(id,cid,name,code,created_at,updated_at) values(8,1234,'北辰','beichen',now(),now());
insert into area(id,cid,name,code,created_at,updated_at) values(9,1234,'东丽','dongli',now(),now());
insert into area(id,cid,name,code,created_at,updated_at) values(10,1234,'津南','jinnan',now(),now());
insert into area(id,cid,name,code,created_at,updated_at) values(11,1234,'塘沽','tanggu',now(),now());
insert into area(id,cid,name,code,created_at,updated_at) values(12,1234,'开发区','kaifaqutj',now(),now());
insert into area(id,cid,name,code,created_at,updated_at) values(13,1234,'武清','wuqing',now(),now());
insert into area(id,cid,name,code,created_at,updated_at) values(14,1234,'滨海新区','binhaixinqu',now(),now());
insert into area(id,cid,name,code,created_at,updated_at) values(15,1234,'宝坻','baodi',now(),now());
insert into area(id,cid,name,code,created_at,updated_at) values(16,1234,'蓟州','jizhou',now(),now());
insert into area(id,cid,name,code,created_at,updated_at) values(17,1234,'海河教育园区','haihejiaoyuyuanqu',now(),now());
insert into area(id,cid,name,code,created_at,updated_at) values(18,1234,'静海','jinghai',now(),now());
*/
function getInsertStreetSql(data){
    let res = []
    data.forEach((e,i)=>{
        let id = e.id;
        e.streets.forEach((street,idx)=>{
            let {name,code} = street
            let sql = `insert into street(id,aid,name,code,created_at,updated_at) values(null,${id},'${name}','${code}',now(),now());`
            res.push(sql)
        })

    })
    return res
}


let data = [
    {
        id:1,code:'heping',name:'和平',
        streets:[
            {code:'nanshi',name:'南市'},
            {code:'nanyingmenjie',name:'南营门街'},
            {code:'quanyechang',name:'劝业场'},
            {code:'tiyuguanjie',name:'体育馆街'},
            {code:'xiaobailou',name:'小白楼'},
            {code:'xinxingjie',name:'新兴街'}
        ]
    },
    {
        id:2,code:'nankai',name:'南开',
        streets:[
            {code:'changhongjie',name:'长虹街'},
            {code:'guangkaijie',name:'广开街'},
            {code:'guloujie',name:'鼓楼街'},
            {code:'huayuan',name:'华苑'},
            {code:'jialingdaojie',name:'嘉陵道街'},
            {code:'shuishanggongyuanjie',name:'水上公园街'},
            {code:'tiyuzhongxinjie',name:'体育中心街'},
            {code:'wangdingdi',name:'王顶堤'},
            {code:'wanxingjie',name:'万兴街'},
            {code:'xiangyanglu',name:'向阳路'},
            {code:'xingnanjie',name:'兴南街'},
            {code:'xuefujie',name:'学府街'},
        ]
    },
    {
        id:3,code:'hexi',name:'河西',
        streets:[
            {code:'chentangzhuang',name:'陈塘庄'},
            {code:'dayingmen',name:'大营门'},
            {code:'guajiasi',name:'挂甲寺'},
            {code:'jianshan',name:'尖山'},
            {code:'liulinjie',name:'柳林街'},
            {code:'machangjie',name:'马场街'},
            {code:'meijiang',name:'梅江'},
            {code:'taoyuanjie',name:'桃园街'},
            {code:'tiantajie',name:'天塔街'},
            {code:'xiaohaidi',name:'小海地'},
            {code:'xiawafang',name:'下瓦房'},
            {code:'xinmeijiang',name:'新梅江'},
            {code:'youyilu',name:'友谊路'},
            {code:'yuexiulu',name:'越秀路'},
        ]
    },
    {
        id:4,code:'hebei',name:'河北',
        streets:[
            {code:'guangfudao',name:'光复道'},
            {code:'hongshunlijie',name:'鸿顺里街'},
            {code:'jianchangdao',name:'建昌道'},
            {code:'jiangdoulu',name:'江都路'},
            {code:'jingjianglu',name:'靖江路'},
            {code:'ningyuan',name:'宁园'},
            {code:'tianmuzhen',name:'天穆镇'},
            {code:'tiedonglu',name:'铁东路'},
            {code:'wangchuanchang',name:'王串场'},
            {code:'wanghailou',name:'望海楼'},
            {code:'xinkaihe',name:'新开河'},
            {code:'yueyahe',name:'月牙河'},
            {code:'zhenlidao',name:'真理道'},
        ]
    },
    {
        id:5,code:'hedong',name:'河东',
        streets:[
            {code:'changzhoudao',name:'常州道'},
            {code:'chunhuajie',name:'春华街'},
            {code:'dawangzhuang',name:'大王庄'},
            {code:'dazhigu',name:'大直沽'},
            {code:'erhaoqiaojie',name:'二号桥街'},
            {code:'fuminlu',name:'富民路'},
            {code:'jingjianglu',name:'靖江路'},
            {code:'lushandao',name:'鲁山道'},
            {code:'shanghanglu',name:'上杭路'},
            {code:'taiyangcheng',name:'太阳城'},
            {code:'tangjiakou',name:'唐家口'},
            {code:'wanxincun',name:'万新村'},
            {code:'xiangyanglou',name:'向阳楼'},
            {code:'zhangguizhuang',name:'张贵庄'},
            {code:'zhenlidao',name:'真理道'},
            {code:'zhongshanmenjie',name:'中山门街'},
        ]
    },
    {
        id:6,code:'hongqiao',name:'红桥',
        streets:[
            {code:'dahutong',name:'大胡同'},
            {code:'dingzigujie',name:'丁字沽街'},
            {code:'jieyuandao',name:'芥园道'},
            {code:'lingdangge',name:'铃铛阁'},
            {code:'santiaoshi',name:'三条石'},
            {code:'shaogongzhuang',name:'邵公庄'},
            {code:'shuanghuancun',name:'双环邨'},
            {code:'tianmuzhen',name:'天穆镇'},
            {code:'xianyangbeilu',name:'咸阳北路'},
            {code:'xigujie',name:'西沽街'},
            {code:'xiyingmen1',name:'西营门'},
            {code:'xiyuzhuang',name:'西于庄'},
        ]
    },
    {
        id:7,code:'xiqing',name:'西青',
        streets:[
            {code:'balitai',name:'八里台'},
            {code:'dasi',name:'大寺'},
            {code:'houtai',name:'侯台'},
            {code:'huayuan',name:'华苑'},
            {code:'jingwuzhen',name:'精武镇'},
            {code:'liqizhuang',name:'李七庄'},
            {code:'meijiang',name:'梅江'},
            {code:'tiyuzhongxinjie',name:'体育中心街'},
            {code:'xinkouzhen',name:'辛口镇'},
            {code:'xinmeijiang',name:'新梅江'},
            {code:'xiyingmen1',name:'西营门'},
            {code:'yangliuqing',name:'杨柳青'},
            {code:'zhangjiawo',name:'张家窝'},
            {code:'zhongbeizhen',name:'中北镇'},
        ]
    },
    {
        id:8,code:'beichen',name:'北辰',
        streets:[
            {code:'beicangzhen',name:'北仓镇'},
            {code:'guoyuanxincun',name:'果园新村'},
            {code:'jixianli',name:'集贤里'},
            {code:'ruijingjuzhuqu',name:'瑞景居住区'},
            {code:'shuanghuancun',name:'双环邨'},
            {code:'shuangjie',name:'双街'},
            {code:'shuangkouzhen',name:'双口镇'},
            {code:'tianmuzhen',name:'天穆镇'},
            {code:'xiaodianzhen',name:'小淀镇'},
            {code:'xiditou',name:'西堤头'},
            {code:'yixingbu',name:'宜兴埠'},
        ]
    },
    {
        id:9,code:'dongli',name:'东丽',
        streets:[
            {code:'donglihu',name:'东丽湖'},
            {code:'erhaoqiaojie',name:'二号桥街'},
            {code:'gangguangongsi',name:'钢管公司'},
            {code:'huamingzhen',name:'华明镇'},
            {code:'jinzhongjie',name:'金钟街'},
            {code:'junliangcheng',name:'军粮城'},
            {code:'konggangjingjiqu',name:'空港经济区'},
            {code:'wanxinjie',name:'万新街'},
            {code:'xinlijie',name:'新立街'},
            {code:'yueyahe',name:'月牙河'},
            {code:'zhangguizhuang',name:'张贵庄'},
        ]
    },
    {
        id:10,code:'jinnan',name:'津南',
        streets:[
            {code:'balitai',name:'八里台'},
            {code:'beizhakou',name:'北闸口'},
            {code:'geguzhen',name:'葛沽镇'},
            {code:'liulinjie',name:'柳林街'},
            {code:'shuanggang',name:'双港'},
            {code:'xianshuigu',name:'咸水沽'},
            {code:'xiaohaidi',name:'小海地'},
            {code:'xiaozhanzhen',name:'小站镇'},
            {code:'xinmeijiang',name:'新梅江'},
            {code:'xinzhuang',name:'辛庄'},
        ]
    },
    {
        id:11,code:'tanggu',name:'塘沽',
        streets:[
            {code:'beitangjie',name:'北塘街'},
            {code:'bohaishiyoujie',name:'渤海石油街'},
            {code:'dagujie',name:'大沽街'},
            {code:'gongnongcun',name:'工农村'},
            {code:'hangzhoudao',name:'杭州道'},
            {code:'hujiayuan',name:'胡家园'},
            {code:'jiefanglu',name:'解放路'},
            {code:'sanhuailujie',name:'三槐路街'},
            {code:'xiangyangjie',name:'向阳街'},
            {code:'xinchengzhen',name:'新城镇'},
            {code:'xincunjie',name:'新村街'},
            {code:'xingang',name:'新港'},
            {code:'xinhejie',name:'新河街'},
        ]
    },
    {
        id:12,code:'kaifaqutj',name:'开发区',
        streets:[
            {code:'dierdajie',name:'第二大街'},
            {code:'disandajie',name:'第三大街'},
            {code:'disidajie',name:'第四大街'},
            {code:'diwudajie',name:'第五大街'},
            {code:'diyidajie',name:'第一大街'},
            {code:'kaifaqu',name:'开发区'},
        ]
    },
    {
        id:13,code:'wuqing',name:'',
        streets:[
            {code:'baolijinjie',name:'保利金街'},
            {code:'daiwangguzhen',name:'大王古镇'},
            {code:'fuluolunsa',name:'佛罗伦萨'},
            {code:'gaocun',name:'高村'},
            {code:'hexiwu',name:'河西务'},
            {code:'huangzhuang',name:'黄庄'},
            {code:'jinghu',name:'静湖'},
            {code:'nanhu6',name:'南湖'},
            {code:'sicun',name:'泗村'},
            {code:'tiyuzhongxin2',name:'体育中心'},
            {code:'wuqingqita',name:'武清其它'},
            {code:'xiazhuzhuang',name:'下朱庄'},
            {code:'xinwan',name:'新湾'},
            {code:'yangcun',name:'杨村'},
            {code:'zhongxinguangchang',name:'中信广场'},
        ]
    },
    {
        id:14,code:'binhaixinqu',name:'滨海新区',
        streets:[
            {code:'binhaiqita',name:'滨海其它'},
            {code:'dagang',name:'大港'},
            {code:'hangu',name:'汉沽'},
            {code:'zenghui',name:'曾会'},
            {code:'zhongxinshengtaicheng',name:'中新生态城'},
        ]
    },
    {
        id:15,code:'baodi',name:'',
        streets:[
            {code:'baodiqitadong',name:'宝坻其他东'},
            {code:'baodiqitaxi',name:'宝坻其他西'},
            {code:'beichenglu',name:'北城路'},
            {code:'chaoyangdadao',name:'潮阳大道'},
            {code:'feicuiwan',name:'翡翠湾'},
            {code:'haibin',name:'海滨'},
            {code:'huochezhan19',name:'火车站'},
            {code:'jianshelu3',name:'建设路'},
            {code:'jingjinxincheng',name:'京津新城'},
            {code:'majiadian',name:'马家店'},
            {code:'nanguandajie',name:'南关大街'},
            {code:'nansanlu',name:'南三路'},
            {code:'yigou',name:'怡购'},
        ]
    },
    {
        id:16,code:'jizhou',name:'蓟州',
        streets:[
            {code:'jinweixiandong',name:'津围线东'},
            {code:'jinweixianxi',name:'津围线西'},
            {code:'jizhou1',name:'蓟州'},
            {code:'jizhouchengqu',name:'蓟州城区'},
            {code:'panshanfengjingqu',name:'盘山风景区'},
            {code:'renmingongyuan4',name:'人民公园'},
            {code:'yuqiaoshuiku',name:'于桥水库'},
        ]
    },
    {
        id:17,code:'haihejiaoyuyuanqu',name:'蓟州',
        streets:[
            {code:'balitai',name:'八里台'},
            {code:'xianshuigu',name:'咸水沽'},
            {code:'xinzhuang',name:'辛庄'},
        ]
    },
    {
        id:18,code:'jinghai',name:'静海',
        streets:[
            {code:'jinghai1',name:'静海'},
            {code:'jinghaiqita',name:'静海其他'},
            {code:'tuanbodong',name:'团泊东'},
            {code:'tuanboxi',name:'团泊西'},
        ]
    },
]
/*
insert into street(id,aid,name,code,created_at,updated_at) values(null,1,'南市','nanshi',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,1,'南营门街','nanyingmenjie',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,1,'劝业场','quanyechang',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,1,'体育馆街','tiyuguanjie',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,1,'小白楼','xiaobailou',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,1,'新兴街','xinxingjie',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,2,'长虹街','changhongjie',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,2,'广开街','guangkaijie',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,2,'鼓楼街','guloujie',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,2,'华苑','huayuan',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,2,'嘉陵道街','jialingdaojie',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,2,'水上公园街','shuishanggongyuanjie',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,2,'体育中心街','tiyuzhongxinjie',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,2,'王顶堤','wangdingdi',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,2,'万兴街','wanxingjie',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,2,'向阳路','xiangyanglu',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,2,'兴南街','xingnanjie',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,2,'学府街','xuefujie',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,3,'陈塘庄','chentangzhuang',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,3,'大营门','dayingmen',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,3,'挂甲寺','guajiasi',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,3,'尖山','jianshan',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,3,'柳林街','liulinjie',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,3,'马场街','machangjie',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,3,'梅江','meijiang',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,3,'桃园街','taoyuanjie',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,3,'天塔街','tiantajie',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,3,'小海地','xiaohaidi',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,3,'下瓦房','xiawafang',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,3,'新梅江','xinmeijiang',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,3,'友谊路','youyilu',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,3,'越秀路','yuexiulu',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,4,'光复道','guangfudao',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,4,'鸿顺里街','hongshunlijie',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,4,'建昌道','jianchangdao',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,4,'江都路','jiangdoulu',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,4,'靖江路','jingjianglu',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,4,'宁园','ningyuan',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,4,'天穆镇','tianmuzhen',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,4,'铁东路','tiedonglu',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,4,'王串场','wangchuanchang',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,4,'望海楼','wanghailou',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,4,'新开河','xinkaihe',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,4,'月牙河','yueyahe',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,4,'真理道','zhenlidao',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,5,'常州道','changzhoudao',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,5,'春华街','chunhuajie',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,5,'大王庄','dawangzhuang',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,5,'大直沽','dazhigu',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,5,'二号桥街','erhaoqiaojie',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,5,'富民路','fuminlu',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,5,'靖江路','jingjianglu',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,5,'鲁山道','lushandao',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,5,'上杭路','shanghanglu',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,5,'太阳城','taiyangcheng',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,5,'唐家口','tangjiakou',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,5,'万新村','wanxincun',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,5,'向阳楼','xiangyanglou',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,5,'张贵庄','zhangguizhuang',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,5,'真理道','zhenlidao',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,5,'中山门街','zhongshanmenjie',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,6,'大胡同','dahutong',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,6,'丁字沽街','dingzigujie',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,6,'芥园道','jieyuandao',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,6,'铃铛阁','lingdangge',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,6,'三条石','santiaoshi',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,6,'邵公庄','shaogongzhuang',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,6,'双环邨','shuanghuancun',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,6,'天穆镇','tianmuzhen',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,6,'咸阳北路','xianyangbeilu',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,6,'西沽街','xigujie',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,6,'西营门','xiyingmen1',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,6,'西于庄','xiyuzhuang',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,7,'八里台','balitai',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,7,'大寺','dasi',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,7,'侯台','houtai',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,7,'华苑','huayuan',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,7,'精武镇','jingwuzhen',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,7,'李七庄','liqizhuang',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,7,'梅江','meijiang',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,7,'体育中心街','tiyuzhongxinjie',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,7,'辛口镇','xinkouzhen',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,7,'新梅江','xinmeijiang',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,7,'西营门','xiyingmen1',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,7,'杨柳青','yangliuqing',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,7,'张家窝','zhangjiawo',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,7,'中北镇','zhongbeizhen',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,8,'北仓镇','beicangzhen',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,8,'果园新村','guoyuanxincun',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,8,'集贤里','jixianli',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,8,'瑞景居住区','ruijingjuzhuqu',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,8,'双环邨','shuanghuancun',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,8,'双街','shuangjie',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,8,'双口镇','shuangkouzhen',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,8,'天穆镇','tianmuzhen',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,8,'小淀镇','xiaodianzhen',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,8,'西堤头','xiditou',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,8,'宜兴埠','yixingbu',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,9,'东丽湖','donglihu',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,9,'二号桥街','erhaoqiaojie',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,9,'钢管公司','gangguangongsi',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,9,'华明镇','huamingzhen',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,9,'金钟街','jinzhongjie',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,9,'军粮城','junliangcheng',now(),now());

insert into street(id,aid,name,code,created_at,updated_at) values(null,9,'空港经济区','konggangjingjiqu',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,9,'万新街','wanxinjie',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,9,'新立街','xinlijie',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,9,'月牙河','yueyahe',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,9,'张贵庄','zhangguizhuang',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,10,'八里台','balitai',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,10,'北闸口','beizhakou',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,10,'葛沽镇','geguzhen',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,10,'柳林街','liulinjie',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,10,'双港','shuanggang',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,10,'咸水沽','xianshuigu',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,10,'小海地','xiaohaidi',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,10,'小站镇','xiaozhanzhen',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,10,'新梅江','xinmeijiang',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,10,'辛庄','xinzhuang',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,11,'北塘街','beitangjie',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,11,'渤海石油街','bohaishiyoujie',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,11,'大沽街','dagujie',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,11,'工农村','gongnongcun',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,11,'杭州道','hangzhoudao',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,11,'胡家园','hujiayuan',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,11,'解放路','jiefanglu',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,11,'三槐路街','sanhuailujie',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,11,'向阳街','xiangyangjie',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,11,'新城镇','xinchengzhen',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,11,'新村街','xincunjie',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,11,'新港','xingang',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,11,'新河街','xinhejie',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,12,'第二大街','dierdajie',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,12,'第三大街','disandajie',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,12,'第四大街','disidajie',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,12,'第五大街','diwudajie',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,12,'第一大街','diyidajie',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,12,'开发区','kaifaqu',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,13,'保利金街','baolijinjie',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,13,'大王古镇','daiwangguzhen',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,13,'佛罗伦萨','fuluolunsa',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,13,'高村','gaocun',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,13,'河西务','hexiwu',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,13,'黄庄','huangzhuang',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,13,'静湖','jinghu',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,13,'南湖','nanhu6',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,13,'泗村','sicun',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,13,'体育中心','tiyuzhongxin2',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,13,'武清其它','wuqingqita',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,13,'下朱庄','xiazhuzhuang',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,13,'新湾','xinwan',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,13,'杨村','yangcun',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,13,'中信广场','zhongxinguangchang',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,14,'滨海其它','binhaiqita',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,14,'大港','dagang',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,14,'汉沽','hangu',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,14,'曾会','zenghui',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,14,'中新生态城','zhongxinshengtaicheng',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,15,'宝坻其他东','baodiqitadong',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,15,'宝坻其他西','baodiqitaxi',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,15,'北城路','beichenglu',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,15,'潮阳大道','chaoyangdadao',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,15,'翡翠湾','feicuiwan',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,15,'海滨','haibin',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,15,'火车站','huochezhan19',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,15,'建设路','jianshelu3',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,15,'京津新城','jingjinxincheng',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,15,'马家店','majiadian',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,15,'南关大街','nanguandajie',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,15,'南三路','nansanlu',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,15,'怡购','yigou',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,16,'津围线东','jinweixiandong',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,16,'津围线西','jinweixianxi',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,16,'蓟州','jizhou1',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,16,'蓟州城区','jizhouchengqu',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,16,'盘山风景区','panshanfengjingqu',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,16,'人民公园','renmingongyuan4',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,16,'于桥水库','yuqiaoshuiku',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,17,'八里台','balitai',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,17,'咸水沽','xianshuigu',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,17,'辛庄','xinzhuang',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,18,'静海','jinghai1',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,18,'静海其他','jinghaiqita',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,18,'团泊东','tuanbodong',now(),now());
insert into street(id,aid,name,code,created_at,updated_at) values(null,18,'团泊西','tuanboxi',now(),now());


*/