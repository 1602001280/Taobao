auto.waitFor();

var height = device.height;
var width = device.width;
console.log("\n设备宽" + width + "\n设备高" + height + "\n手机型号" + device.model + "\n安卓版本" + device.release)
if (height == 0 || width == 0) {
    console.error("设备宽高获取失败")
    engines.myEngine().forceStop();
} else {
    setScreenMetrics(width, height);
}

var button = null;
var flag = 0;

initView();

browseClick();


function browseClick() {
    button = findButtonEnd("去浏览");
    while (button) {
        button.click();
        let t = button.text();
        if (!t.includes("已完成") && !t.includes("浏览首页") && !t.includes("淘宝人生") && !t.includes("我的淘宝") && !t.includes("去首页")) {
            sleep(500);
            swipe(500, 1200, 500, 300, 1000);
            sleep(500);
            swipe(500, 1200, 500, 300, 1000);
            sleep(500);
            swipe(500, 1200, 500, 300, 1000);
            sleep(15000);
            back();
        }
        else {
            if (t.includes("浏览首页")) {
                console.info(t);
                sleep(18000);
                sleep(500);
                swipe(500, 500, 500, 1500, 1000);
                sleep(500);
                swipe(500, 500, 500, 1500, 1000);
                sleep(500);
                swipe(500, 500, 500, 1500, 1000);
                sleep(500);
                swipe(500, 500, 500, 1500, 1000);
                sleep(500);

                initView();

                judgeTaskView("浏览首页");
            }
        }
        button = findButtonEnd("去浏览");
    }

    button = findButtonEnd("去换装");
    if (button) {
        button.click();
        waitForActivity("com.taobao.browser.exbrowser.BrowserUpperActivity");
        sleep(5000);
        click(543, 1692);
        sleep(500);
        click(110, 244)
        sleep(500);

        judgeTaskView("去换装");
    }

    button = findButtonEnd("去兑换");
    if (button) {
        button.click();
        return browseClick();
    }

}

function judgeTaskView(name) {
    waitForActivity("com.taobao.browser.BrowserActivity");
    button = findButton("x5000");
    if (button) {
        console.info(name + "成功");
        return browseClick();
    }
    else {
        flag++;
        console.error("返回失败" + flag);
        initView();
        if (flag < 3) {
            return browseClick();
        } else {
            console.error("失败次数过多");
            engines.myEngine().forceStop();
        }
    }

}

function initView() {
    app.startActivity({
        action: "VIEW",
        className: "com.taobao.tao.TBMainActivity",
        packageName: "com.taobao.taobao",
    });
    waitForActivity("com.taobao.tao.TBMainActivity");
    /*
    app.launchApp("手机淘宝")
    waitForActivity("com.taobao.tao.TBMainActivity");
    back();
    for (let index = 0; index < 5; index++) {
        let act = currentActivity();
        if (act == "com.taobao.tao.TBMainActivity") {
            break;
        } else {
            back();
        }
    }
    */
    
    button = findButton("首页");
    if (button) {
        click(540, 1564, 1054, 1809);
        sleep(500);
    }
    button = findButton("收下祝福");
    if (button) {
        button.click();
        sleep(500);
    }
    button = findButton("合种");
    if (button) {
        click(882, 1530, 1080, 1734);
        sleep(1000);
    }
    button = findButton("去签到");
    if (button) {
        click(button.bounds().centerX(), button.bounds().centerY());
        sleep(500);
    }
}

function findButton(word) {
    let button = null;
    for (let index = 0; index < 5; index++) {
        button = desc(word).findOne(500);
        if (button) {
            break;
        }
        button = text(word).findOne(500);
        if (button) {
            break;
        }
    }
    if (button) {
        console.log("获取" + word + "成功");
        console.log(button.text());
        console.log(button.bounds());
        return button;
    } else {
        console.error("获取" + word + "失败");
        return 0;
    }
}

function findButtonEnd(word) {
    let button = null;
    for (let index = 0; index < 5; index++) {
        button = descEndsWith(word).findOne(500);
        if (button) {
            break;
        }
        button = textEndsWith(word).findOne(500);
        if (button) {
            break;
        }
    }
    if (button) {
        console.log("获取" + word + "成功");
        console.log(button.text());
        console.log(button.bounds());
        return button;
    } else {
        console.error("获取" + word + "失败");
        return 0;
    }
}