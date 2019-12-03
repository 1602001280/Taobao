function getGuangdian() {
    var text=className("android.view.View").textStartsWith("逛逛\"").findOne(5000);
    if (text) {
        var button = text.parent().parent().child(2);
    } else {
        toastLog("寻找逛店出错")
        return 0;
    }
    
    /*
    var text=className("android.view.View").textStartsWith("去进店").findOne(5000);
    if (button) {
        var text = button.parent().child(1).child(0);
    } else {
        toastLog("寻找逛店出错")
        return 0;
    }
    */

    if (button && text) {
        if (button.text() == "去浏览") {
            toastLog("找到 " + text.text());
            return button;
        } else if (button.text() == "已完成") {
            toastLog("已完成逛店")
            return 0;
        }
    }

}

function getLiulan(params) {
    var button = className("android.view.View").text("去浏览").findOne(5000);
    if (button) {
        var text = button.parent().child(1).child(0);
    } else {
        toastLog("寻找浏览出错")
        return 0;
    }

    if (button && text) {
        if (button.text() == "去浏览") {
            toastLog("找到 " + text.text());
            return button;
        }
    }
}

function huadong() {
    let huadong = className("android.view.View").desc("滑动浏览得").findOne(8000);
    toastLog("寻找滑动结束");
    if (huadong) {
        toastLog("滑动");
        sleep(1000);
        swipe(500, 1000, 500, 500, 800);
    }
    else {
        toastLog("没找到滑动");
    }
}


function main() {
    toastLog("启动");
    sleep(5000);
    var i = 1;
    /*
    var store = className("android.view.View").textStartsWith("逛逛").findOne(5000).text();
    var store=comein.parent().child(1).child(0).text();
    var text=view.parent().child(1).child(0).text();
    */
    var comein = getGuangdian();
    var view = getLiulan();

    while (comein || view) {
        if (i > 100) {
            toastLog("任务次数执行过多，已终止。")
            break;
        }

        toastLog("开始" + i + "次");
        r = Math.round(Math.random() * 1000);

        if (comein) {

            comein.click();
            //toastLog("进店" + store);

            huadong();
            sleep(15000 + r);

            toastLog("返回");
            back();
            sleep(1000);

            /*
            if (getGuangdian()) {
                toastLog("已存在下一次进店");
            } else {
                toastLog("重新打开任务页");
                className("android.widget.Button").clickable(true).depth(18).findOne(5000).click();
                sleep(1000);
                click(900, 1700);
                //toastLog("找到下一次进店");
            }
            */
        }

        else if (view) {
            view.click();
            //toastLog("浏览" + text);
            sleep(21000 + r);
            
            toastLog("返回");
            back();
            sleep(1000);
        }

        i++;

        comein = getGuangdian();
        view = getLiulan();

        /*
        comein =
            className("android.view.View").textStartsWith("逛逛").findOne(5000).parent().parent().child(2);
        //comein = className("android.view.View").text("去进店").findOne(2000);
        view = className("android.view.View").text("去浏览").findOne(2000);
        //store = className("android.view.View").textStartsWith("逛逛").findOne(2000).text();
        if (comein) { store = comein.parent().child(1).child(0).text(); }
        if (view) { text = view.parent().child(1).child(0).text(); }
        */

    }

    toastLog("结束");

}

main();


