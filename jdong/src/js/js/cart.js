function Head() {
    this.headAd = $(".head-ad");
    this.headDelete = $(".head-ad .head-delete");
    this.logoBg = $(".head-nav .logoImg");
    this.myjd = $(".myjd");
    this.companyBuy = $(".company-buy");
    this.customService = $(".custom-service");
    this.webNav = $(".web-nav");
    this.phoneJd = $(".phone-jd");
    this.address = $('.address');
    this.province = $(".address_box .province span a");
    this.search = $('.search_box');
    this.uName = $('.uName');
    this.uName1 = $('.uName1');
    if (getCookie("uName")) {
        this.uName.html("欢迎您：");
        this.uName1.html(getCookie("uName"));
    }
    this.init();
}
Head.prototype = {
    init: function () {
        this.img = $("<img>");

        this.bindEvent();
    },
    logoBgText: function () {
        this.timer = setTimeout(function () {
            $(".logoImg span").css("display", "block");
        }, 3000)
    },
    bindEvent: function () {
        var _this = this;
        this.headDelete.click(function (e) {
            e.stopPropagation();
            $(".head-ad").remove();
        }),
            this.logoBg.stop(true).mouseover(function () {
                clearInterval(_this.timer1);
                _this.img.attr("src", "../images/logo.gif");
                _this.img.appendTo($(".head-nav .logoImg"));
                _this.logoBgText();
            }),
            this.logoBg.stop(true).mouseout(function () {
                _this.timer1 = setTimeout(function () {
                    clearInterval(_this.timer);
                    $(".head-nav .logoImg").find("img").remove();
                    $(".logoImg span").css("display", "none");
                    //_this.logoBg.css('background-image','url(../images/logo_03.png)');
                }, 4000)
            }),
            this.myjd.mouseover(() => {
                $(".myjd-box").css('display', 'block');
                _this.myjd.css('background', '#fff');
                _this.myjd.css('border', 'solid rgb(204,204,204)');
                _this.myjd.css('border-width', '0 1px');
            }),
            this.myjd.mouseout(() => {
                $(".myjd-box").css('display', 'none');
                _this.myjd.css('background', '');
                _this.myjd.css('border', '');
                _this.myjd.css('border-width', '');
            })
        this.companyBuy.mouseover(() => {
            $(".c-b-box").css('display', 'block');
            _this.companyBuy.css('background', '#fff');
            _this.companyBuy.css('border', 'solid rgb(204,204,204)');
            _this.companyBuy.css('border-width', '0 1px');
        }),
            this.companyBuy.mouseout(() => {
                $(".c-b-box").css('display', 'none');
                _this.companyBuy.css('background', '');
                _this.companyBuy.css('border', '');
                _this.companyBuy.css('border-width', '');
            })
        this.customService.mouseover(() => {
            $(".c-s-box").css('display', 'block');
            _this.customService.css('background', '#fff');
            _this.customService.css('border', 'solid rgb(204,204,204)');
            _this.customService.css('border-width', '0 1px');
        }),
            this.customService.mouseout(() => {
                $(".c-s-box").css('display', 'none');
                _this.customService.css('background', '');
                _this.customService.css('border', '');
                _this.customService.css('border-width', '');
            })
        this.webNav.mouseover(() => {
            $(".w-n-box").css('display', 'block');
            _this.webNav.css('background', '#fff');
            _this.webNav.css('border', 'solid rgb(204,204,204)');
            _this.webNav.css('border-width', '0 1px');
        }),
            this.webNav.mouseout(() => {
                $(".w-n-box").css('display', 'none');
                _this.webNav.css('background', '');
                _this.webNav.css('border', '');
                _this.webNav.css('border-width', '');
            }),
            this.phoneJd.mouseover(() => {
                $(".p-j-box").css('display', 'block');
            }),
            this.phoneJd.mouseout(() => {
                $(".p-j-box").css('display', 'none');
            }),
            this.address.mouseover(() => {
                $(".address_box").css("display", "block");
                _this.address.css("border-color", "rgb(204,204,204)");
                _this.address.css('background', '#fff');
            }),
            this.address.mouseout(() => {
                $(".address_box").css("display", "none");
                _this.address.css("border-color", "rgb(227,228,229)");
                _this.address.css('background', '');
            }),
            this.province.not($('.active')).mouseover(function () {
                $(this).css('color', 'rgb(241,2,21)');
                $(this).parent().css('background', 'rgb(244,244,244)');
            }),
            this.province.not($('.active')).mouseout(function () {
                $(this).css('color', '#9999a2');
                $(this).parent().css('background', '');
            }),

            $(window).scroll(function () {
                if ($(window).scrollTop() >= 700) {
                    if (!$(document).find('.xidingBox').length) {
                        let boxOut = $('<div></div>');
                        boxOut.addClass('xidingBox')
                        var box = $('<div></div>')
                        box.addClass('xiding');
                        box.addClass('main');
                        _this.search.clone().appendTo(box);
                        box.appendTo(boxOut);
                        boxOut.appendTo(document.body);
                        boxOut.stop(true).animate({
                            'top': 0
                        })
                    }
                    _this.search.find('input').val($('.xiding').find('input').val());
                } else {
                    $('.xidingBox').remove();
                }
            });
    }
}
new Head();

if (getCookie("goods")) {
    let goodsObj = JSON.parse(getCookie("goods"));
    console.log(goodsObj)
    $.get('../json/goods.json', {}, function (data) {
        var cartStr = "";
        var allPrice = 0;
        for (var i = 0, j = data.goods_01.length; i < j; i++) {
            for (key in goodsObj) {
                if (key == data.goods_01[i].id) {
                    let cart_priceAll = (data.goods_01[i].price*goodsObj[key]);
                    allPrice += (data.goods_01[i].price*goodsObj[key]);
                    cartStr += `
                    <div class="cartGoodsList">
                    <p class="c-g-l-title">${data.goods_01[i].info}</p>
                    <div class="c-g-l-img-box">
                        <img src="${data.goods_01[i].url}" alt="">
                    </div>
                    <p class="c-g-l-info">${data.goods_01[i].info}</p>
                    <span class="cart_price">￥${data.goods_01[i].price}</span>
                    <div class="cartNumber">
                        <input type="number" class="cart_number" value="${goodsObj[key]}">
                    </div>
                    <span class="cart_priceAll">￥${cart_priceAll}</span>
                    <span class="cart-delGoods">删除</span>
                </div>
                    `
                }
            }
        }
        document.querySelector('.conCart').innerHTML += cartStr;
        $('.Allprice input').val(allPrice);
    })
}
