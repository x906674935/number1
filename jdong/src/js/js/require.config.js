//配置模块
    //1个参数   配置项
    require.config({
        baseUrl : 'js/',    //提取公共路径
        paths : {
            //配置得各个模块
            'query' : 'lib/jquery-1.11.3.min',   //命名必须是query
            'cookie' : 'plug/cookie',
            'aExp' : 'js/index',
            'bExp' : 'js/goodsInfo',
            'cExp' : 'js/register',
            'dExp' : 'js/login',
            'eExp' : 'js/cart'
        }
        //非AMD规范得模块
        //shim:{}
    })