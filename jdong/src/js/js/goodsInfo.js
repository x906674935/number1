function Loupe() {
    this.goods_bigImg = $('.goods_bigImg img');
    this.smallImgBox = $('.smallImgBox');
    this.smallImgBoxImgs = $('.smallImgBox img');
    this.count = 0;
    this.preBtn = $('.preBtn');
    this.nextBtn = $('.nextBtn');
    this.goodsBigImg = $('.goods_bigImg');
    this.screen = $('.goods_screen');
    this.screen1= document.querySelector('.goods_screen');
    this.biger = $('.bigerImg');
    this.bigerImg = $('.bigerImg img');
    this.goodsCount = $('.Gnumber');
    this.addBtn = $('.addBtn');
    this.GoodsInfoCar = $('.car_count');
    this.init();
}
Loupe.prototype = {
    init: function () {
        this.eventBind();
    },
    eventBind: function () {
        var _this = this;
        this.smallImgBoxImgs.on({
            'mouseover': function () {
                _this.goods_bigImg.attr('src', $(this).attr('src'));
                $(this).css("border-color", "rgb(229,62,65)")
            },
            'mouseout': function () {
                $(this).css("border-color", "#fff")
            }
        })
        this.preBtn.on({
            'click': function () {
                _this.count = _this.count > 0 ? --_this.count : _this.count;
                console.log(_this.count);
                _this.smallImgBox.animate({
                    'left': - _this.count * 60,
                });
            },
            'mouseover': function () {
                if (_this.count > 0) {
                    $(this).find('i').css('color', 'gray');
                }
            },
            'mouseout': function () {
                $(this).find('i').css('color', 'rgb(223,223,223)');
            },
        })
        this.nextBtn.on({
            'click': function () {
                _this.count = _this.count >= 2 ? _this.count : ++_this.count;
                console.log(_this.count);
                _this.smallImgBox.animate({
                    'left': -_this.count * 60,
                });
            },
            'mouseover': function () {
                if (_this.count < 2) {
                    $(this).find('i').css('color', 'gray');
                }
            },
            'mouseout': function () {
                $(this).find('i').css('color', 'rgb(223,223,223)');
            },
        })
        this.goodsBigImg.on({
            'mouseover': function (e) {
                _this.biger.css("display", "block");
                _this.screen.css("display", "block");
                $(this).on({
                    'mousemove': function (e) {
                        e.stopPropagation();
                        var tt = e.clientY - _this.screen1.offsetHeight- this.offsetTop,
                            ll = e.clientX - _this.screen1.offsetWidth - this.offsetLeft;
                        tt = tt < 0 ? 0 : (tt > 110 ? 110 : tt);
                        ll = ll < 0 ? 0 : ll > 110 ? 110 : ll;
                        _this.screen.css('left', ll)
                        _this.screen.css('top', tt)
                        _this.bigerImg.css('left',-2.25 * ll)
                        _this.bigerImg.css('top', -2.25 * tt)
                    }
                }),
                $(this).on({
                    'mouseout': function (e) {
                        _this.biger.css("display", "none");
                        _this.screen.css("display", "none");
                    }
                })  
            }
        })
        this.addBtn.on('click',function(){
            setCookie("cartAllNumber",Number(_this.GoodsInfoCar.html())+Number(_this.goodsCount.val()),7);
            $('.car_count').html(getCookie("cartAllNumber"));
        })
    }
}
new Loupe();

if(getCookie("goodsChecked")){
    $.get('../json/goods.json',{},function(data){
        for (var i = 0,j = data.goods_01.length ; i < j; i++) {
            if(data.goods_01[i].id == getCookie("goodsChecked")){
                $('.goods_info img').attr('src',data.goods_01[i].url);
                $('.goodsTitle').html(data.goods_01[i].info);
                $('.goodsPrice').html("京东价：￥" + data.goods_01[i].price );
            }
        }
    })
    
};
if(getCookie("cartAllNumber")){
    $('.car_count').html(getCookie("cartAllNumber"));
}
if(!getCookie("goods")){
    var listObj = {};
}else{
    var listObj = JSON.parse(getCookie("goods"));
}

$('.addBtn').on('click',function(){
    if(listObj[getCookie("goodsChecked")]){
        listObj[getCookie("goodsChecked")] = listObj[getCookie("goodsChecked")] + Number($('.Gnumber').val());
    }else{
        listObj[getCookie("goodsChecked")] = Number($('.Gnumber').val());
    }
    var listStr = JSON.stringify(listObj)
    setCookie('goods', listStr, 30);
})