/**
 *  on 2016/12/20.
 *  钟贵廷
 */


$(function () {

    //校验密码是否一致
    $.validator.methods.comparePwd = function() {
        var password = $("#password").val();
        var re_password = $("#re_password").val();
        if(password != re_password)
        {
            return false;
        }
        else
        {
            return true;
        }
    };

    /**
     *异步检测验证码
     */
    $.validator.addMethod("checkCode",function(value,element){
       var flag = false;
        if(value.length == 4) //只有四位的验证码才去校验
        {
            $.ajax({
                type: "POST",
                url:'/Home/User/ajaxCheckCode',
                data:{code:value},
                async :false,
                success: function(msg) {
                    if(msg)
                    {
                        flag =  true;
                    }
                    else
                    {
                        flag =  false;
                    }
                }
            });
        }
        return flag;
    });

    //用户注册
    $("#userForm").validate({
        // onfocusin: function(element){
        //     $(element).valid();
        // },

        rules: {
            email: {
                "required":true,
                "email":true,
            },
            password:{
                "required":true,
                "minlength":6,
                "maxlength":20,
            },

            re_password:{
                "required":true,
                comparePwd: "#password"
            },
            verify:{
                "required":true,
                checkCode:true,
            }

        },

        messages: {
            email: {
                "required":"电子邮箱不能为空",
                "email":"电子邮箱格式不正确"
            },
            password:{
                "required":"密码不能为空",
                "minlength":"密码长度不能小于6位",
                "maxlength":"密码长度大于20位",
            },
            re_password:{
                "required":"确认密码不能为空",
                comparePwd: "确认密码不一致!"
            },
            verify:{
                "required":"验证码不正确",
                checkCode:"验证码不正确",
            }

        }
    });


   

});
