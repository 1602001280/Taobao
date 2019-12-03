var buttons = [];

function initButton() {
    var liulan = getLiulan();
    buttons[0] = liulan;
    if (liulan) {
        return;
    } else {
        var sosuo = getSosuo();
        buttons[1] = sosuo;
        return;
    }
}

function getLiulan() {
    let liulans = className("android.view.View").textEndsWith("去浏览").find();
    if (!liulans.isEmpty()) {
        for (var i = 0; i < liulans.length; i++) {
            let b = liulans[i];
            if (!b.text().includes("已完成") && !b.text().includes("浏览首页") && !b.text().includes("淘宝人生") && !b.text().includes("我的淘宝")) {
                log(b.text());
                return b;
            }
        }
        toastLog("已完成浏览")
        return 0;
    } else {
        toastLog("寻找浏览出错")
        return 0;
    }
}

function getSosuo() {
    var sosuos = className("android.view.View").textEndsWith("去搜索").find();
    if (!sosuos.isEmpty()) {
        for (var i = 0; i < sosuos.length; i++) {
            let b = sosuos[i];
            if (!b.text().includes("已完成")) {
                log(b.text());
                return b;
            }
        }
        toastLog("已完成搜索")
        return 0;
    } else {
        toastLog("寻找搜索出错")
        return 0;
    }
}
/*
function getGuangdian() {
    var button = className("android.view.View").textStartsWith("逛一逛").findOne(5000);
    if (!button.text().includes("已完成")) {
        log(button.text());
        return button;
    } else {
        toastLog("寻找逛店出错")
        return 0;
    }
}

function getLiulan() {
    var button = className("android.view.View").textStartsWith("浏览").find();
    if (!button.isEmpty()) {
        for (var i = 0; i < button.length; i++) {
            var b = button[i];
            if (!b.text().includes("已完成")) {
                log(b.text());
                return b;
            }
        }
        return 0;
    } else {
        toastLog("寻找浏览出错")
        return 0;
    }
}
*/

function isHavebutton() {
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i]) {
            //log(buttons[i]);
            return true;
        }
    }
    toastLog("没有找到点击按钮");
    return false;
}

function isHuadong() {
    var huadong = className("android.view.View").desc("滑动浏览得").findOne(2000);
    if (!huadong) {
        huadong = className("android.view.View").text("滑动浏览得").findOne(2000);
    }
    toastLog("寻找滑动结束");
    if (huadong) {
        toastLog("滑动");
        sleep(500);
        swipe(500, 1200, 500, 300, 1500);
        return true;
    }
    else {
        toastLog("未找到滑动");
        return false;
    }
}

function collect() {
    let randomtime = Math.round(Math.random() * 1000);
    let isswipe = isHuadong();
    if (isswipe) {
        sleep(17000 + randomtime);
    }
    else {
        sleep(19000);
    }
    toastLog("领取结束返回");
    back();
    sleep(1000);
}

function main() {
    toastLog("请在五秒内切换到活动页");
    sleep(5000);
    let clicknum = 0;

    initButton();

    while (isHavebutton()) {
        if (clicknum > 100) {
            toastLog("任务次数执行过多，已终止。")
            break;
        }



        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i]) {

                toastLog("开始" + clicknum + "次");

                buttons[i].click();
                collect();
            }
        }

        clicknum++;
        initButton();

    }

    toastLog("结束");
}

main();


