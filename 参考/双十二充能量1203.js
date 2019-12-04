auto.waitFor()

var height = device.height;

var width = device.width;
toast("\n设备宽" + width + "\n" + "设备高" + height + "\n" + "手机型号" + device.model + "\n安卓版本" + device.release)

setScreenMetrics(width, height);

toast("设备高"+height);

events.observeKey()

console.show()
console.info("需要手动进入充能量界面")
console.info("然后按音量+开始自动领取")
console.error("按音量-退出程序")
events.onKeyDown("volume_up", function (event) {
    autoplay()
});

events.onKeyDown("volume_down", function (event) {
    toast("结束程序");
    exit()
});


function swipe22s(act){
    while(textContains(act).exists()){        
        toast("存在" + act);
        textContains(act).findOne().click();
        sleep(1500);
        swipe(width / 2, height - 500, width / 2, 0, 500);
        sleep(2500);
        swipe(width / 2, height - 500, width / 2, 0, 500);
        sleep(10000);
        swipe(width / 2, height - 500, width / 2, 0, 500);
        sleep(8000);
        if(textContains("完成").exists()){
            back();
        } else {
        sleep(2200);
        back();
        }
        sleep(1600);
    }
    toast("完成[" + act + "]检测");
    sleep(2000);
}

    
function autoplay(){
    if(textEndsWith("签到").exists()){
        textEndsWith("签到").findOne().click();
        sleep(1600);
        toast("签到成功");
    }
    sleep(2000);
    toast("完成[签到]检测");

    swipe22s("去浏览");
    swipe22s("去搜索");
    
    toast("结束");
}