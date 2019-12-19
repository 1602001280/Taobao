auto.waitFor()
    try {
        aliay_package=getPackageVersion("com.eg.android.AlipayGphone")
        aliay_package_three=aliay_package.split(".")[2]
    } catch (error) {
        aliay_package_three=28
        console.error("获取支付宝版本失败,如不能正常使用，请下载旧版支付宝")
    }
    finally{
        big_give_nlq()
    }
function big_give_nlq(){
    console.show()
    console.setPosition(0, device.height / 2);
    for(let num_a=1;num_a<9999;num_a++){
    toastLog("收金色能量球-->第"+num_a+"次进入森林")
    if(aliay_package_three<70){
    senlin()
    toast("已打开蚂蚁森林")
    if(num_a==1){
        obj = boundsInside(0, 0, device.width, device.width / 1080 * 1920 / 3).descMatches(/\d+g/).findOne(4000)
        start= obj ? parseInt(obj.contentDescription) : 0;
        var btn_parent_num_first=desc("攻略").findOne().parent().childCount()
       }
    var btn_parent_num=desc("攻略").findOne().parent().childCount()
    var btn_parent=desc("攻略").findOne().parent()
    }
    else{
        senlin2()
        toast("已打开蚂蚁森林")
        if(num_a==1){
            obj = boundsInside(0, 0, device.width, device.width / 1080 * 1920 / 3).textMatches(/\d+g/).findOne(4000)
            start= obj ? parseInt(obj.text()) : 0;
            var btn_parent_num_first=text("攻略").findOne().parent().childCount()
        }
        var btn_parent_num=text("攻略").findOne().parent().childCount()
        var btn_parent=text("攻略").findOne().parent()
    }
    if(btn_parent_num_first!=btn_parent_num ||btn_parent_num<=7){
        toastLog("收集完毕")
        break;
    }
    btn_nlq=btn_parent.child(btn_parent_num-7).bounds()  //金色能量球
    for(let num=0;num<100;num++){
    press(btn_nlq.centerX(),btn_nlq.centerY(),1)
    sleep(10)
    }
    if(aliay_package_three<70){
    var obj = boundsInside(0, 0, device.width, device.width / 1080 * 1920 / 3).descMatches(/\d+g/).findOne(4000)
    var start2= obj ? parseInt(obj.contentDescription) : 0;
    }
    else{
    var obj = boundsInside(0, 0, device.width, device.width / 1080 * 1920 / 3).textMatches(/\d+g/).findOne(4000)
    var start2= obj ? parseInt(obj.text()) : 0;   
    }
    backhome()
    toastLog("共收取:"+(start2-start)+"g")
}
}
function senlin(){
    app.startActivity({
        data: "alipayqr://platformapi/startapp?saId=60000002"
    })
    threads.start(function(){
        var clomc=desc("关闭蒙层").findOne(20000)
    if(clomc){
    clomc.click()
    }
    })
    
    let cj=desc("攻略").findOne(12000)
    if(!cj){
        backhome()
        sleep(1500)
        app.startActivity({
            data: "alipayqr://platformapi/startapp?saId=60000002"
        })
        threads.start(function(){
            var clomc=desc("关闭蒙层").findOne(20000)
        if(clomc){
        clomc.click()
        }
        })
        desc("攻略").findOne()
    }
    }
    function senlin2(){
        app.startActivity({
            data: "alipayqr://platformapi/startapp?saId=60000002"
        })
        threads.start(function(){
            var clomc=text("关闭蒙层").findOne(20000)
        if(clomc){
        clomc.click()
        }
        })
        
        let cj=text("攻略").findOne(12000)
        if(!cj){
            backhome()
            sleep(1500)
            app.startActivity({
                data: "alipayqr://platformapi/startapp?saId=60000002"
            })
            threads.start(function(){
                var clomc=text("关闭蒙层").findOne(20000)
            if(clomc){
            clomc.click()
            }
            })
            text("攻略").findOne()
        }
    }
    function backhome()
    {
        while (!className("android.widget.TextView").text("首页").exists()) 
        {
        back();
        sleep(1000);
        }
    }
    function getPackageVersion(packageName) { 
        importPackage(android.content); 
        var pckMan = context.getPackageManager(); 
        var packageInfo = pckMan.getPackageInfo(packageName, 0); 
        return packageInfo.versionName; 
        } 