//管理模块
// require(参数1，参数2)方法
//         参数1：需要依赖的模块[数组的形式]
//         参数2：回调函数（模块加载完毕需要做得事情）


// require(["js/lib/模块1", "js/模块2","js/plug/模块3","js/模块4"],function(参数必须和前面的模块一一对应){
//     //等待前面的模块加载完毕才执行当前回调函数（解决了模块依赖）;
// })


//引用并且配置模块
    
    require(['./require.config'],() => {  
        require(['aExp'],(index) => {              //参数代表前面数组内的JS文件，且一一对应
            index.init();
        })
    })
    
    
    
    
    
    
    //AMD模块
    /** 
     * 
     * define( 参数1 ,参数2 )
     * 
     * 参数1 ； 当前模块所要依赖得模块得名称
     * 参数2 : 回调函数
     *      每个符合AMD规范得模块
     *         return {
     *              init : 当前模块执行得方法
     *          }
     * 
     */