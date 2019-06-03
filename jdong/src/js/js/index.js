



define(['query', 'cookie'], () => {
    function fn() {

        //头部以及搜索框部分
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
                console.log(1);
                this.uName.html("欢迎您：");
                this.uName1.html(getCookie("uName"));
                this.uName.css('margin', '10px')
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
                        _this.img.attr("src", "images/logo.gif");
                        _this.img.appendTo($(".head-nav .logoImg"));
                        _this.logoBgText();
                    }),
                    this.logoBg.stop(true).mouseout(function () {
                        _this.timer1 = setTimeout(function () {
                            clearInterval(_this.timer);
                            $(".head-nav .logoImg").find("img").remove();
                            $(".logoImg span").css("display", "none");
                            //_this.logoBg.css('background-image','url(images/logo_03.png)');
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




        //banner图部分
        function Banner() {
            this.list = $('.ban-nav div.list');
            this.r_c_box = $('.rotation-chart');
            this.imgs = $('.r-c-outBox>img');
            this.preBtn = $('.rotation-chart .pre');
            this.nextBtn = $('.rotation-chart .next');
            this.dotBtn = $('.r-c-dotBtn>li');
            this.count = 0;
            this.timer = null;
            this.init();
        }
        Banner.prototype = {
            init: function () {

                this.bindEvent();
                this.autoMove();
            },
            //图片的切换
            changeImg: function () {
                this.imgs.eq(this.count).fadeIn().siblings().fadeOut();
                this.dotBtn.eq(this.count).addClass('checked').siblings().removeClass('checked');
            },
            //下一张图片
            nextImg: function () {
                this.count = this.count >= 7 ? 0 : ++this.count;
                this.changeImg();
            },
            //上一张图片
            preImg: function () {
                this.count = this.count <= 0 ? 8 : --this.count;
                this.changeImg();
            },
            //设置定时器
            autoMove: function () {
                var _this = this;
                this.timer = setInterval(function () {
                    _this.nextImg();
                }, 3000)
            },
            bindEvent: function () {
                var _this = this;
                this.list.on({
                    mouseover: function () {
                        $(this).css('background', 'rgb(217,217,217)');
                        $(this).find('.goods-box').css('display', 'block');
                    },
                    mouseout: function () {
                        $(this).css('background', '');
                        $(this).find('.goods-box').css('display', 'none');
                    }
                }),
                    this.preBtn.on('click', function () {

                        _this.preImg();
                    }),
                    this.nextBtn.on('click', function () {
                        _this.nextImg();
                    }),
                    this.r_c_box.on({
                        mouseover: function () {
                            clearInterval(_this.timer);

                        },
                        mouseout: function () {
                            clearInterval(_this.timer);
                            _this.autoMove();
                        }
                    }),
                    this.dotBtn.on({
                        mouseover: function () {
                            _this.count = $(this).index();
                            _this.changeImg();
                        }
                    })
            }
        }
        new Banner();

        //秒杀模块
        function FlashDeals() {
            this.time = document.querySelectorAll('h6.time>span>span');
            this.box = $('.f-d-g-outBox');
            this.preBtn = $('.f-d-goods .preBtn');
            this.nextBtn = $('.f-d-goods .nextBtn');
            this.count = 0;
            this.boxIn = $('.f-d-g-outBox .f-d-g-box');
            this.boxIn.eq(0).clone().appendTo(this.box);
            this.boxIn.eq(1).clone().appendTo(this.box);
            this.boxIn.eq(2).clone().appendTo(this.box);
            this.boxIn.eq(3).clone().appendTo(this.box);
            this.asideBox = $('.f-d-adOut');
            this.asideBox1 = $('.fda1');
            this.asideBox1.clone().appendTo(this.asideBox);
            this.asideDot = $('.dotBtn li');
            this.timer1 = null;
            this.count1 = 0;
            this.add = function (k) {
                k < 10 ? k = "0" + k : k;
                return k;
            }
            var _this = this;
            this.timer = setInterval(function () {
                let c = new Date();
                let d = new Date("2050-01-01 00:00:00");
                let e = d - c;
                let sun = parseInt(e / (1000 * 60 * 60 * 24))
                let hours = parseInt(e % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
                let minutes = parseInt(e % (1000 * 60 * 60 * 24) % (1000 * 60 * 60) / (1000 * 60));
                let seconds = parseInt(e % (1000 * 60 * 60 * 24) % (1000 * 60 * 60) % (1000 * 60) / 1000);
                _this.time[0].innerHTML = _this.add(hours)
                _this.time[1].innerHTML = _this.add(minutes)
                _this.time[2].innerHTML = _this.add(seconds);
            }, 1000)
            this.init();
            this.timer1 = setInterval(function () {
                if (_this.count1 >= 2) {
                    _this.asideBox.css('left', '0');
                }
                _this.count1 = _this.count1 >= 2 ? 1 : ++_this.count1;
                _this.asideDot.eq(_this.count1 % 2).css('background', 'rgb(227,51,51)').siblings().css('background', '#c0c0c0')
                _this.asideBox.stop(true).animate({
                    'left': -200 * _this.count1
                })
            }, 3000)

        }
        FlashDeals.prototype = {
            init: function () {
                this.bindEvent();
            },
            imgMove: function () {
                this.box.stop(true).animate({
                    'left': -800 * this.count
                })
            },
            bindEvent: function () {
                var _this = this;
                this.nextBtn.on('click', function () {
                    if (_this.count > 2) {
                        _this.box.css('left', '0')
                    }
                    _this.count = _this.count > 2 ? 1 : ++_this.count;
                    _this.imgMove();
                }),
                    this.preBtn.on('click', function () {
                        if (_this.count <= 0) {
                            console.log(1);
                            _this.box.css('left', -2400)
                        }
                        _this.count = _this.count <= 0 ? 2 : --_this.count;
                        _this.imgMove();
                    })
            }
        }
        new FlashDeals();

        //内容区块上部
        function ContentHead() {
            this.allImg = $("img");
            this.init();
        }
        ContentHead.prototype = {
            init: function () {
                this.eventBind();
            },
            eventBind: function () {
                this.allImg.on({
                    mouseover: function () {
                        $(this).stop(true).animate({
                            'opacity': 0.8
                        })
                    },
                    mouseout: function () {
                        $(this).stop(true).animate({
                            'opacity': 1
                        })
                    },

                })
            }
        }
        new ContentHead();



        // 侧边栏
        function AsideBox() {
            this.asideBtn = $('.asideNav div');
            this.goTop = $('.goTop');
            this.init();
        }
        AsideBox.prototype = {
            init: function () {
                this.eventBind();
            },
            eventBind: function () {
                this.asideBtn.on({
                    mouseover: function () {
                        $(this).find('a').css('background', 'rgb(200,22,35)');
                        $(this).find('i').css('background', 'rgb(200,22,35)');

                        $(this).find('span').stop(true).animate({
                            'left': '-60'
                        })
                    },
                    mouseout: function () {
                        $(this).find('a').css('background', 'rgb(122,110,110)')
                        $(this).find('i').css('background', 'rgb(122,110,110)')

                        $(this).find('span').stop(true).animate({
                            'left': '35'
                        })
                    }
                }),
                    this.goTop.on({
                        mouseover: function () {
                            $(this).find('a').css('background', 'rgb(200,22,35)');
                            $(this).find('i').css('background', 'rgb(200,22,35)');

                            $(this).find('span').stop(true).animate({
                                'left': '-40'
                            })
                        },
                        mouseout: function () {
                            $(this).find('a').css('background', 'rgb(122,110,110)')
                            $(this).find('i').css('background', 'rgb(122,110,110)')

                            $(this).find('span').stop(true).animate({
                                'left': '35'
                            })
                        },
                        click: function () {
                            $(window).scrollTop(0);
                        }
                    })
            }
        }
        new AsideBox();



        //商品信息遍历
        var key = true, key1 = true;
        var goodsListInfo = "";
        $(window).scroll(function () {
            let scrollH = $(window).scrollTop();
            if ($(window).scrollTop() >= 2450) {
                if (key1) {
                    let img = $('<img>');
                    let goodsBox = $('.goods_con');
                    goodsBox.css('height', '1000');
                    img.css('margin', '10px auto');
                    img.attr("src", "images/loading.gif");
                    img.appendTo(goodsBox);
                }
                if (key) {
                    $.post('json/goods.json', {}, function (data) {
                        for (var i = 0, j = data.goods_01.length; i < j; i++) {
                            goodsListInfo += `
                        <li>
                            <a href="javascript:void(0)" title="${data.goods_01[i].info}" >
                                <div class="img">
                                    <img src="JD/${data.goods_01[i].url}" alt="">
                                </div>
                                <p class="goods_info">${data.goods_01[i].info}</p>
                                <h3 class="price"> ￥${data.goods_01[i].price}</h3>
                                <h4 class="choose">${data.goods_01[i].id}</h4>
                            </a>
                        </li> 
                    `
                        }
                    })
                    key = false;
                }
                $('.goods_con').contents().on('load', function () {
                    $('.goods_con').html(goodsListInfo);
                    key1 = false;
                })
            }
        })


        var goodsList = $('.goods_con');
        goodsList.on('click', function (e) {
            if ($(e.target).is("li")) {
                console.log($(e.target).find('h4').html());
                setCookie("goodsChecked", $(e.target).find('h4').html(), 7);
                window.location.href = "http://10.9.48.215/JD/html/goodsInfo.html";
            } else if ($(e.target).is("img")) {
                console.log($(e.target).parent().parent().find('h4').html());
                setCookie("goodsChecked", $(e.target).parent().parent().find('h4').html(), 7);
                window.location.href = "http://10.9.48.215/JD/html/goodsInfo.html";
            } else {
                console.log($(e.target).parent().find('h4').html());
                setCookie("goodsChecked", $(e.target).parent().find('h4').html(), 7);
                window.location.href = "http://10.9.48.215/JD/html/goodsInfo.html";
            }
        })

        if (getCookie("cartAllNumber")) {
            $('.car_count').html(getCookie("cartAllNumber"));
        }
    }
    return {
        init: fn
    }
})