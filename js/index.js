$(function(){
    whatScreen();
    function whatScreen(){
        //定义一个空字符串
        var str="";
        //获取当前页面的宽度
        var screenWidth = document.querySelector("html").offsetWidth;
        //判断当前页面的小在什么范围
        if (screenWidth<=768) {
            str="极小屏幕-"+screenWidth;
        }else if(screenWidth>768&&screenWidth<=992){
            str="小屏幕-"+screenWidth;
        }else if(screenWidth>992&&screenWidth<=1200){
            str="中等屏幕-"+screenWidth;
        }else if(screenWidth>1200){
            str="大屏幕-"+screenWidth;
        }
        $("title").text(str);
    }
    //onresize 事件会在窗口或框架被调整大小时发生。
    window.onresize=function(){
        //调用事件
        whatScreen();
    }
    //初始化工具提示
    $('[data-toggle="tooltip"]').tooltip()
});