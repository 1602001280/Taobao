var height = device.height;
var width = device.width;
var button = null;
var flag = 0;
var timeout = 3;
var users = { "c***3": 0, "黑***5": 0, "芍***离": 0 };

main()

function main() {

    initReady();

    initView();

    browseClick();

    watering();

    let ac = accountSwitch();
    if (ac) {
        return main()
    }

}

function initReady() {
    auto.waitFor();
    console.log("\n设备宽" + width + "\n设备高" + height + "\n手机型号" + device.model + "\n安卓版本" + device.release);
    if (height == 0 || width == 0) {
        console.error("设备宽高获取失败");
        engines.myEngine().forceStop();
    }
    else {
        setScreenMetrics(1080, 2160);
    }
}

function initView() {
    initAPP();

    button = findButton("阿里拍卖");
    if (button) {
        click(540, 1564, 1054, 1809);
        sleep(500);
    } else {
        if (findButton("待付款")) {
            button = findButton("首页");
            if (button) {
                click(button.bounds().centerX(), button.bounds().centerY());
                sleep(500);
                return initView();
            }
            else {
                console.error("未成功进入首页");
                engines.myEngine().forceStop();
            }
        } else {
            console.error("未成功进入首页");
            engines.myEngine().forceStop();
        }
    }
    button = findButton("收下祝福");
    if (button) {
        button.click();
        sleep(500);
    }
    button = findButton("立即查看");
    if (button) {
        button.click();
        sleep(500);
        back();
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

function initAPP() {
    app.startActivity({
        action: "VIEW",
        className: "com.taobao.tao.TBMainActivity",
        packageName: "com.taobao.taobao",
    });
    console.log("等待淘宝主页Activity");
    waitForActivity("com.taobao.tao.TBMainActivity",1000);
    //app.launchApp("手机淘宝")
}

function browseClick() {
    button = findButtonEnd("去浏览");
    while (button) {
        button.click();
        let t = button.text();
        if (!t.includes("已完成") && !t.includes("浏览首页") && !t.includes("淘宝人生") && !t.includes("我的淘宝") && !t.includes("去首页")) {
            for (let index = 0; index < 3; index++) {
                sleep(500);
                swipe(width / 2, height / 4 * 3, width / 2, height / 4, 1000);
            }
            sleep(15000);
            back();
        }
        else {
            if (t.includes("浏览首页")) {
                console.info(t);
                sleep(18000);
                for (let index = 0; index < 4; index++) {
                    sleep(500);
                    swipe(width / 2, height / 4, width / 2, height / 4 * 3, 1000);
                }
                sleep(500);
                initView();
                if (judgeTaskView("浏览首页")) {
                    return browseClick();
                }
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
        if (judgeTaskView("去换装")) {
            return browseClick();
        }
    }

    button = findButtonEnd("去兑换");
    if (button) {
        button.click();
        if (judgeTaskView("去兑换")) {
            return browseClick();
        }
    }

    function judgeTaskView(name) {
        //waitForActivity("com.taobao.browser.BrowserActivity");
        button = findButton("x5000");
        if (button) {
            console.info(name + "成功");
            return 1;
        }
        else {
            flag++;
            console.error("返回失败" + flag);
            initView();
            if (flag < 3) {
                return 1;
            } else {
                console.error("失败次数过多");
                engines.myEngine().forceStop();
                return 0;
            }
        }
    }

}

function watering() {
    console.info("开始浇水");
    //点击关闭浏览活动
    click(929, 538, 1047, 656);
    sleep(500);
    while (text("合种").exists()) {
        click(236, 1530, 844, 1734);
        button = text("去集福气").findOne(500);
        if (button) {
            console.info("浇水结束");
            back();
            break;
        }
    }
}

function accountSwitch() {
    for (let user in users) {
        if (user == "") {
            console.error("无账户");
            return 0;
        }
    }

    let act = currentActivity();
    let tbmain = "com.taobao.tao.TBMainActivity";
    if (act != tbmain) {
        initAPP();
    }

    /*
    function findandClick(str) {
        button = findButton(str);
        if (button) {
            if (button.clickable()) {
                click(button);
                return 1;
            } else {
                click(button.bounds().centerX(), button.bounds().centerY());
                sleep(500);
                return 1;
            }
        }
        else {
            console.error(str + "未点击");
            return 0;
        }
    }
    */

    // 我的淘宝 首页 设置 clickable为true但是点了没用 有用的是里面的child(0) 但是clickable为false点不了
    button = findButton("我的淘宝");
    if (button) {
        click(button.bounds().centerX(), button.bounds().centerY());
        sleep(1000);
    }
    else {
        console.error("账户切换失败");
        return 0;
    }

    button = findButton("设置");
    if (button) {
        click(button.bounds().centerX(), button.bounds().centerY());
        sleep(1000);
    }
    else {
        console.error("账户切换失败");
        return 0;
    }

    waitForActivity("com.taobao.mytaobao.setting.TaobaoSettingActivity");

    button = findButton("切换账户");
    if (button) {
        click(button.bounds().centerX(), button.bounds().centerY());
        sleep(1000);
    }
    else {
        console.error("账户切换失败");
        return 0;
    }

    button = findButton("当前登录");
    if (button) {
        let currentuser = button.parent().child(button.indexInParent() - 1).text();
        console.log("当前用户" + currentuser);
        users[currentuser] = 1;
        for (let user in users) {
            if (users[user] == 0) {
                console.info("切换账户" + user);
                button = findButton(user);
                if (button) {
                    click(button.bounds().centerX(), button.bounds().centerY());
                    sleep(500);
                    console.info("切换账户成功");
                    return 1;
                }
                else {
                    console.error("账户切换失败");
                    return 0;
                }
            }
        }
        console.info("完成所有账户");
        back();
        back();
        home();
        return 0;
    }
    else {
        console.error("账户切换失败");
        return 0;
    }
}

function findButton(word) {
    let button = null;
    for (let index = 0; index < timeout; index++) {
        button = desc(word).findOne(500);
        if (button) {
            break;
        }
        button = text(word).findOne(500);
        if (button) {
            break;
        }
    }
    return findLog(button, word);
}

function findButtonEnd(word) {
    let button = null;
    for (let index = 0; index < timeout; index++) {
        button = descEndsWith(word).findOne(500);
        if (button) {
            break;
        }
        button = textEndsWith(word).findOne(500);
        if (button) {
            break;
        }
    }
    return findLog(button, word);
}

function findButtonStart(word) {
    let button = null;
    for (let index = 0; index < timeout; index++) {
        button = descStartsWith(word).findOne(500);
        if (button) {
            break;
        }
        button = textStartsWith(word).findOne(500);
        if (button) {
            break;
        }
    }
    return findLog(button, word);
}

function findLog(button, word) {
    if (button) {
        console.log("获取" + word + "成功");
        console.log("Text = " + button.text());
        console.log(button.bounds());
        return button;
    } else {
        console.error("获取" + word + "失败");
        return 0;
    }
}