function Register() {
    this.zHBox = $('.zhanghaoBox');
    this.zhanghao = $('#zhanghao');
    this.zHInfo = $('.z-h-info');
    this.mMBox = $('.mimaBox');
    this.mima = $('#mima');
    this.mMInfo = $('.m-m-info');
    this.yZMBox = $('.yanzhengmaBox');
    this.yanzhengma = $('#yanzhengma');
    this.yZMCode = $('.yzm-code');
    this.yZMInfo = $('.y-z-m-info');
    this.goNext = $('.goNext');
    this.points = $('.points');
    this.yan = "";
    this.key = false;
    this.key1 = true;
    this.key2 = false;
    this.key3 = false;
    this.init();
}
Register.prototype = {
    init: function () {
        this.eventBind();
        this.changeYzm();
    },
    changeYzm: function () {
        this.yan = "";
        for (let i = 1; i <= 4; i++) {
            var data = getNum(48, 122);
            if (data <= 57 || data >= 65 && data <= 90 || data >= 97) {
                this.yan += String.fromCharCode(data);
            }
            else {
                i--;
            }
        }
        this.yZMCode.html(this.yan);
    },
    eventBind: function () {
        var _this = this;
        this.zHBox.on({
            "mouseover": function () {
                $(this).css('border-color', '#333');
                $(this).find('label').css('border-color', '#333');
            },
            "mouseout": function () {
                $(this).css('border-color', '#ccc');
                $(this).find('label').css('border-color', '#ccc');
            }
        }),
            this.mMBox.on({
                "mouseover": function () {
                    $(this).css('border-color', '#333');
                    $(this).find('label').css('border-color', '#333');
                },
                "mouseout": function () {
                    $(this).css('border-color', '#ccc');
                    $(this).find('label').css('border-color', '#ccc');
                }
            }),
            this.yZMBox.on({
                "mouseover": function () {
                    $(this).css('border-color', '#333');
                    $(this).find('label').css('border-color', '#333');
                },
                "mouseout": function () {
                    $(this).css('border-color', '#ccc');
                    $(this).find('label').css('border-color', '#ccc');
                }
            }),
            this.zhanghao.on({
                "focus": function () {
                    if (!_this.zhanghao.val()) {
                        _this.zHInfo.html("请输入6至12位的账号,并以字母开头")
                    }
                },
                "input": function () {
                    let reg = new RegExp(/^[a-zA-Z]{1}(.{5,11})$/)
                    if (!reg.test(_this.zhanghao.val())) {
                        _this.zHInfo.html("您输入的账号不合规定，请继续输入6至12位的账号,并以字母开头");
                        _this.zHInfo.css('color', 'red');
                    } else {
                        _this.zHInfo.html("您输入的账号符合规定");
                        _this.zHInfo.css('color', '#333');
                        _this.key3 = true;
                    }
                },
                "blur": function () {
                    if (_this.key3) {
                        $.get("../php/registerYhm.php", { zhanghao: _this.zhanghao.val() }, function (data) {
                            let objData = $.parseJSON(data);
                            _this.zHInfo.html(objData.info);
                            if (objData.state == 0) {
                                _this.zHInfo.css('color', 'red');
                            } else if (objData.state == 2) {
                                _this.key = true;
                                _this.zHInfo.css('color', 'green');
                            }
                        })
                    }
                }
            }),
            this.mima.on({
                "focus": function () {
                    if (!_this.mima.val()) {
                        _this.mMInfo.html("请输入1至6位的密码")
                    }
                },
                "input": function () {
                    let reg = new RegExp(/[~,！,!,@,#,￥,%,&,*]/);
                    let reg2 = new RegExp(/^.{1,6}$/);
                    let reg1 = new RegExp(/^\d{1,6}$/);
                    if (reg.test(_this.mima.val()) && reg2.test(_this.mima.val())) {
                        _this.mMInfo.html("密码强度：强");
                        _this.mMInfo.css('color', 'purple');
                    } else if (reg1.test(_this.mima.val())) {
                        _this.mMInfo.html("密码强度：弱");
                        _this.mMInfo.css('color', 'pink');
                    } else if (reg2.test(_this.mima.val())) {
                        _this.mMInfo.html("密码强度：中");
                        _this.mMInfo.css('color', 'green');
                    } else {
                        _this.mMInfo.html("密码不符合规范，请重新继续输入");
                        _this.mMInfo.css('color', 'red');
                        _this.key1 = false;
                    }
                }
            }),
            this.yZMCode.on('click', function () {
                _this.changeYzm();
            }),
            this.yanzhengma.on({
                "focus": function () {
                    _this.yZMInfo.html("请继续输入验证码");
                },
                "blur": function () {
                    if (_this.yan == $(this).val()) {
                        _this.yZMInfo.html("验证成功");
                        _this.yZMInfo.css('color', 'green');
                        _this.key2 = true;
                    } else {
                        _this.yZMInfo.html("验证失败，请重新输入验证码");
                        _this.yZMInfo.css('color', 'red');
                    }
                }
            }),
            this.goNext.on({
                "click": function () {
                    if (_this.key && _this.key1 && _this.key2) {
                        $.get("../php/registerS.php", { zhanghao: _this.zhanghao.val(), mima: _this.mima.val() },
                            function (data) {
                                let objData1 = $.parseJSON(data);
                                if(objData1.state == 1){
                                    _this.points.addClass("adopt");
                                }
                                alert(objData1.info);
                                window.location.href = 'http://10.9.48.215/JD/html/login.html';
                            })
                    }
                }
            })


    }
}
new Register();