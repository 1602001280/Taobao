"ui";
ui.layout(
    <vertical>
        <appbar>
            <toolbar title="双11喵铺助手"/>
        </appbar>
        <Switch id="autoService" text="无障碍服务" checked="{{auto.service != null}}" padding="8 8 8 8" textSize="15sp"/>
        <frame height="200" gravity="center">
            <text text="一定勾选右上角的无障碍 ,进入无障碍服务后，找到本软件的名字，然后勾选即可" gravity="center"/>
        </frame>
        <button id="start" text="开始运行"/>
    </vertical>
);

ui.autoService.on("check", function(checked) {
    // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启
    if (checked && auto.service == null) {
        app.startActivity({
            action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
    }
    if (!checked && auto.service != null) {
        auto.service.disableSelf();
    }
});

// 当用户回到本界面时，resume事件会被触发
ui.emitter.on("resume", function() {
    // 此时根据无障碍服务的开启情况，同步开关的状态
    ui.autoService.checked = auto.service != null;
});

ui.start.on("click", function() {
    //程序开始运行之前判断无障碍服务
    if (auto.service == null) {
        toast("请先开启无障碍服务！");
        return;
    }
    main();
});


function main() {
    // 这里写脚本的主逻辑
    threads.start(function() {
        auto();
        setScreenMetrics(1080, 2340);

        sleep(1000)
        app.launchApp("手机淘宝")
        sleep(2000)
        if (className("android.widget.TextViewtext").text("打开").exists()) {
            sleep(1000)
            toast("找到盖楼")
            sleep(2000)
            className("android.widget.TextViewtext").text("打开").findOne().click()
            sleep(2000)
            className("android.widget.Button").text("为TA助力").findOne().click()
            sleep(2000)
            className("android.widget.Button").text("去升级喵铺 ").findOne().click()
        } else {
            toast("没找到")
            bounds = (547, 1169, 1028, 1414)
            bounds = (547, 1174, 1028, 1419)
            sleep(5000)
            click(790, 1274)
            sleep(5000)
            //bounds = (808,1601,1025,1826)
            click(900, 1700)
            sleep(2500)
        }
        toast("即将去进店")

        while (className("android.view.View").text("去进店").exists()) {
            className("android.view.View").text("去进店").findOne().click()
            sleep(1000)
            swipe(500, 1800, 800, 200, 1000);
            sleep(2000)
            toast("任务进行中")
            swipe(500, 1800, 500, 200, 1000);
            sleep(2000)
            toast("任务进行中")
            swipe(500, 1800, 500, 200, 1000);
            sleep(15000)
            className("android.widget.FrameLayout").desc("返回").findOne().click()
            sleep(3000)
        }
        toast("进店任务结束，准备去浏览")


        sleep(3000)

        while (className("android.view.View").text("去浏览").exists()) {
            className("android.view.View").text("去浏览").click()
            sleep(2000)
            swipe(500, 1800, 800, 200, 1000);
            toast("任务进行中")
            sleep(3000)
            swipe(500, 1800, 500, 500, 1000);
            toast("任务进行中")
            sleep(16000)
            className("android.widget.ImageButton").findOne().click()
            sleep(3000)
        }

        
        toast("没有任务啦，程序自动退出")
        back()

        exit()

    })
}