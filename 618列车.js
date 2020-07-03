var height = 0;
var width = 0;
var flag = 0;
var repeat = 2;
var users = { "c***3": 0, "黑***5": 0, "芍***离": 0 };


function findButton(word, attributes, position, timeout) {

    var button = null;

    var word = word;
    var attributes = attributes != null ? attributes : "text";
    var position = position != null ? position : 0;
    var timeout = timeout != null ? timeout : 800;

    /*
    console.log(word);
    console.log(attributes);
    console.log(position);
    console.log(timeout);
    */

    if (position == "start") {
        if (attributes == "desc") {
            button = descStartsWith(word).findOne(timeout);
        } else if (attributes == "text") {
            button = textStartsWith(word).findOne(timeout);
        }
    } else if (position == "end") {
        if (attributes == "desc") {
            button = descEndsWith(word).findOne(timeout);
        } else if (attributes == "text") {
            button = textEndsWith(word).findOne(timeout);
        }
    }
    else {
        if (attributes == "desc") {
            button = desc(word).findOne(timeout);
        } else if (attributes == "text") {
            button = text(word).findOne(timeout);
        }
    }

    if (button) {
        //toastLog(word + "找到了");
        return button;
    } else {
        //toastLog(word + "没找到");
        return false;
    }
}


function clickButton(word, attributes, position, timeout) {
    let button = findButton(word, attributes, position, timeout);


    if (button) {
        //console.log(button.bounds());
        click(button);
        click(button.bounds().centerX(), button.bounds().centerY());
        /*
        if (button.clickable()) {
            console.log("aaaa");
            
            click(button);
        } else {
            click(button.bounds().centerX(), button.bounds().centerY());
        }*/
    } else {
        return false;
    }
    sleep(2000);
}

function clickThisbutton(button) {
    var button = button ;

    if (button) {
        //console.log(button.bounds());
        click(button);
        click(button.bounds().centerX(), button.bounds().centerY());
        /*
        if (button.clickable()) {
            console.log("aaaa");
            
            click(button);
        } else {
            click(button.bounds().centerX(), button.bounds().centerY());
        }*/
    } else {
        return false;
    }
    sleep(2000);
    
}

main()

function main() {

    let run = true;


    run = initReady();
    if (run == false && flag < 3) {
        console.log("错误");
        flag++
        return main();
    }

    run = initView();
    if (run == false && flag < 3) {
        console.log("错误");
        flag++
        return main();
    }

    run = browseClick();
    if (run == false && flag < 3) {
        console.log("错误");
        flag++
        return main();
    }

    let ac = accountSwitch();
    if (ac) {
        return main()
    }
}


function initReady() {
    auto.waitFor();
    height = device.height;
    width = device.width;
    console.log("\n设备宽" + width + "\n设备高" + height + "\n手机型号" + device.model + "\n安卓版本" + device.release);
    if (height == 0 || width == 0) {
        console.error("设备宽高获取失败");
        engines.myEngine().forceStop();
    }
    else {
        setScreenMetrics(width, height);
    }

    app.startActivity({
        action: "VIEW",
        className: "com.taobao.tao.TBMainActivity",
        packageName: "com.taobao.taobao",
    });
    console.log("等待淘宝主页Activity");
    waitForActivity("com.taobao.tao.TBMainActivity", 1000);
    //app.launchApp("手机淘宝")

    if (findButton("阿里拍卖")) {
        //clickButton("主互动", "desc");
        click(width*3/4,1700);
        sleep(3000);
        return true
    } else {
        return false
    }
}

function initView() {

    if (!findButton("做任务，领喵币")) {
        return false;
    }

    button = findButton("确认");
    if (button) {
        button.click();
        sleep(500);
    }
    button = findButton("开心收下");
    if (button) {
        button.click();
        sleep(500);
    }

    click(width/2,1396);

    clickButton("做任务，领喵币", "text");

    if (!findButton("×10000")) {
        return false;
    }

    return true;

    /*
    button = findButton("收下祝福");
    if (button) {
        button.click();
        sleep(500);
    }
    button = findButton("开心收下");
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
    */
}

function browseClick() {
    let flag = 2;
    let text = "";
    clickButton("签到");
    while (flag > 0) {

        if (!findButton("去浏览", "text")) {
            flag--;
            clickButton("关闭");
            sleep(2000);
            clickButton("做任务，领喵币", "text");
            if (findButton("去兑换", "text")) {
                clickButton("去兑换", "text");
            }
            if (findButton("去围观", "text")) {
                clickButton("去围观", "text");
                sleep(20000);
                back();
            }
            continue;
        }
        
        let button = findButton("去浏览", "text")
        let currenttext = button.parent().child(0).text()
        console.log(currenttext);
        if (currenttext == text) {
            flag--;
            clickButton("关闭");
            sleep(2000);
            clickButton("做任务，领喵币", "text");
        } else {
            text = currenttext;
        }

        if (currenttext.includes("浏览首页")) {
            clickThisbutton(button);
            sleep(18000);
            for (let index = 0; index < 4; index++) {
                sleep(500);
                swipe(width / 2, height / 4, width / 2, height / 4 * 3, 1000);
            }
            sleep(500);
            initReady();
            initView();
        }
        
        clickButton("去浏览", "text");

        /*
        if (!findButton("浏览15", "desc", "start",10000)) {
            back();
            flag++;
            continue;
        }
        */
        for (let index = 0; index < 3; index++) {
            sleep(500);
            swipe(width / 2, height / 4 * 3, width / 2, height / 4, 1000);
        }
        sleep(15000);

        /*
        if (!findButton("任务已完成", "desc")) {
            back();
            flag--;
            continue;
        }
        */

        back();

        if (!findButton("×10000")) {
            back();
            flag--;
            continue;
        }

        sleep(2000);
    }

    if (flag > 0) {
        return true;
    } else {
        return true;
    }




    /*
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
            if (findButton("x5000")) {
                console.log("返回成功");
            } else {
                initView();
            }
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
    */
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
        app.startActivity({
            action: "VIEW",
            className: "com.taobao.tao.TBMainActivity",
            packageName: "com.taobao.taobao",
        });
        console.log("等待淘宝主页Activity");
        waitForActivity("com.taobao.tao.TBMainActivity", 1000);
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
    button = findButton("我的淘宝","desc");
    if (button) {
        click(button.bounds().centerX(), button.bounds().centerY());
        sleep(1000);
    }
    else {
        console.error("账户切换失败");
        return 0;
    }

    button = findButton("设置","desc");
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
        users[currentuser]++;
        for (let user in users) {
            for (let index = 1; index <= repeat; index++) {

                if (users[user] < index && user != currentuser) {
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