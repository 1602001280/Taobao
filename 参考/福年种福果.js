app.launchApp('手机淘宝');
waitForActivity("com.taobao.tao.TBMainActivity");

var bect = text('阿里拍卖').findOnce().bounds();
click(bect.right, bect.bottom + 150);

waitForActivity("com.taobao.browser.BrowserActivity");
sleep(4000)

click(random(950, 990), random(1560, 1666))
sleep(2000)


var name = "";
if (textStartsWith('逛').exists()) {
    name = textStartsWith('逛').find();
    main(name);
}
if (textStartsWith('浏览').exists()) {
    name = textStartsWith('浏览').find();
    main(name);
}
if (textStartsWith('搜').exists()) {
    name = textStartsWith('搜').find();
    main(name);
}
if (textStartsWith('去').exists()) {
    name = textStartsWith('去').find();
    main(name);
}
log('完成点击');
goQianDao();
log('完成签到');

function main(name) {
    log('获取' + name.size() + '个控件');
    name.forEach((item, position) => {
        log('进入1循环');
        var str = item.text();
        if (str == "去邀请") {
            return false;
        }

        var leftNumber = getLeftNumber(str);
        var rightNumber = getRightNumber(str);
        //根据数字判断当前控件是否已经完成
        if (leftNumber !== rightNumber) {
            log('进入2循环');
            if (rightNumber == 1) {
                if (textEndsWith('去换装').exists()) {
                    textEndsWith('去换装').findOnce().click();
                    sleep(4000)
                    waitForActivity("com.taobao.browser.exbrowser.BrowserUpperActivity");
                    sleep(2000)
                    back();
                }
                if (textStartsWith('浏览首页猜你喜欢').exists()) {
                    textStartsWith('浏览首页猜你喜欢').findOnce().click();
                    sleep(10000)
                    swipePosition()
                    sleep(10000)
                    back();
                }
                var obj = text(str).findOnce();
                log('1个条件中的' + obj.text());
                obj.click();
                goSee();
            } else {
                for (let index = 1; index <= rightNumber; index++) {
                    s = str.slice(0, 5);
                    var obj = textStartsWith(s).findOnce();
                    log('多个条件中的' + obj.text());
                    obj.click();
                    goSee();
                }
            }
        } else {
            log('当前---' + str + '---点击完成');
        }


    });

}
//获取标题中‘/’左边的值
function getLeftNumber(str) {
    var number = str.search('/');
    var stringNum = str.slice(number + 1, number + 3);
    var intRightNumber = parseInt(stringNum);
    if (intRightNumber >= 10) {
        var intLeftNum = parseInt(str.slice(number - 2, number));
    } else {
        var intLeftNum = parseInt(str.slice(number - 1, number));
    }
    return intLeftNum;
}

//获取标题中‘/’右边的值
function getRightNumber(str) {
    var number = str.search('/');
    var stringNum = str.slice(number + 1, number + 3);
    var intRightNumber = parseInt(stringNum);
    return intRightNumber;
}

//进入单个页面的操作
function goSee() {
    sleep(6000)
    swipePosition();
    sleep(10000);
    swipePosition();
    sleep(7000)
    back();
    sleep(2000);
}

//生成随机4个位置并由下往上滑动屏幕
function swipePosition() {
    widthOne = random(300, 800);
    heightOne = random(1600, 1800);
    widthTwo = random(300, 800);
    heightTwo = random(500, 700);
    timeGo = random(250, 600); //随机延迟滑动
    swipe(widthOne, heightOne, widthTwo, heightTwo, timeGo);
}

//去签到
function goQianDao() {
    if (text('去签到').exists()) {
        brect = text('去签到').findOnce().bounds();
        click(brect.centerX(), brect.centerY());

    }
}