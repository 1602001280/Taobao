//console.log(desc("任务已完成").findOne(1000).bounds());

click(1080/2,1396);



/*



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


function findButton(word) {
    let button = null;
    for (let index = 0; index < 3; index++) {
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

function findandClick(str) {
    button = findButton(str);
    if (button) {
        if (button.clickable()) {
            click(button.bounds().centerX(), button.bounds().centerY());
            sleep(500);
            console.log('aaa');
            return 1;
        } else {
            click(button.bounds().centerX(), button.bounds().centerY());
            sleep(500);
            console.log('bbb');
            return 1;
        }
    }
    else {
        console.error(str + "未点击");
        console.log('ccc');
        return 0;
    }
}

var users = { "c***3": 0, "黑***5": 0, "芍***离": 0 };

accountSwitch();
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
/*
    // 我的淘宝 首页 设置 clickable为true但是点了没用 有用的是里面的child(0) 但是clickable为false点不了
    button = findButton("我的淘宝");
    if (button) {
        click(button.bounds().centerX(), button.bounds().centerY());
        sleep(500);
    }
    else {
        console.error("账户切换失败");
        return 0;
    }

    button = findButton("设置");
    if (button) {
        click(button.bounds().centerX(), button.bounds().centerY());
        sleep(500);
    }
    else {
        console.error("账户切换失败");
        return 0;
    }

    waitForActivity("com.taobao.mytaobao.setting.TaobaoSettingActivity");

    button = findButton("切换账户");
    if (button) {
        click(button.bounds().centerX(), button.bounds().centerY());
        sleep(500);
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
        console.error("完成所有账户");
        return 0;
    }
    else {
        console.error("账户切换失败");
        return 0;
    }
}


*/


/*function allfun() {
    this.fun1 = function () {
        console.log('aaa');
    }
    this.fun2 = function () {
        console.log('bbb');
    }
}
allfun();//及时执行

var funs = new allfun();//实例化及时函数

var f1 = new funs.fun1();//方法一实例化
//var f2 = new funs.fun2();//方法二实例化
//运行测试



/*
var users = {"aaa": 0};

for (let user in users) {
    if (user != "") {
        console.log(user);
    }
    
}

/*
    let act = currentActivity();
    let tbmain="com.taobao.tao.TBMainActivity";
    if (act!=tbmain) {
        back();
    }else{
        console.log('aaa');
    }


/*
* 创建函数--闭包
*/
/*
function foo(){ 
    var val1=18; 
    console.log('val1');
    function baz(){ 
        console.log('baz'); 
    } 
    return { //返回值对象实质上是一个 我们模块的公有API 
        baz:baz 
    } 
} 

var m=foo().baz(); //调用外部函数--->val1
//调用函数的内部函数--->baz


/*
var a=10;
function numberone(){
    var b=20;
    console.log(b);//20
    function numbertwo(){
        var c=30;
        console.log(c);//由于函数不能在外部环境被调用，所以没有输出值
    }
    return { //返回值对象实质上是一个 我们模块的公有API 
        numbertwo:numbertwo 
    } 
}
var f=numberone();
f.numbertwo();//不能再外部环境搜索到函数

/*
button = text("当前登录").findOne(500);
if (button) {
    let currentuser = button.parent().child(button.indexInParent() - 1).text();

    console.log("当前用户" + currentuser);
}
if ('22222' == '22222') {
    console.log('aaa');

} else {
    console.log('bbb');

}
/*

result = {'a':'123','b':'456'};
for(var i in result){

    console.log(i);
    console.log(typeof(i));
    }
/*
waitForActivity("com.taobao.mytaobao.setting.TaobaoSettingActivity");
/*

    app.startActivity({
        action: "VIEW",
        className: "com.taobao.mytaobao.setting.TaobaoSettingActivity",
        packageName: "com.taobao.taobao",
    });

    while(true) {
        click(236,1530,844,1734);
        button=text("去集福气").findOne(500);
        if (button) {
            back();
            break;
        }
    }
*/

/*
sleep(5000);
for (let index = 0; index < 100; index++) {
    //const element = array[index];
    toastLog(index);
    sleep(3000);
    click(543, 1767);
    sleep(500);
    click(409, 1700);
    sleep(500);
    click(409, 1655);
}
*/




/*
app.launch("com.taobao.taobao");
app.startActivity("com.taobao.tao.TBMainActivity");
sleep(500);
app.startActivity("com.taobao.browser.BrowserActivity");

*/

/*
app.startActivity({
    packageName : "com.taobao.taobao",
    className : "com.taobao.browser.BrowserActivity",
    data : ""
})
*/
/*
sleep(500);sleep(500);sleep(500);sleep(500);sleep(500);sleep(500);

sleep(500);
swipe(500, 500, 500, 1500, 1000);
sleep(500);
swipe(500, 500, 500, 1500, 1000);
sleep(500);
swipe(500, 500, 500, 1500, 1000);
sleep(500);
swipe(500, 500, 500, 1500, 1000);
sleep(500);
*/