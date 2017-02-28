/**
 * Created by zhangyanqing on 2017/2/28.
 */
var hongbao = {
    init:function(){
        hongbao.validatePhone();
    },
    validatePhone:function(){
        $(document).on("click","#btn",function(){
            var $phone = $("#phone");
            if (hongbao.isPhoneNumber($phone.val())){
                console.log("输入正确");
                $phone.hide();
                $("#btn").hide();
                $("#success").show();
            }else{
                alert("请输入正确的手机号码")
            }
        });


    },
    isPhoneNumber:function(phone){
        // 验证手机号
        var pattern = /^1\d{10}$/;
        return pattern.test(phone);
    }
};