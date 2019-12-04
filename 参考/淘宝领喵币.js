

//by HyunMai QQ：2668649792

//支付宝地址 alipays://platformapi/startapp?appId=68687502

app.startActivity({
    data: 'taobao://m.tb.cn/h.esMRgPK'
});
toast("等待启动...."), sleep(8000);

while (!click("领喵币"));
toast("等待显示...."), sleep(5000);
if (text("签到").exists()) toastLog("签到完成...."), click("签到");
var task = text("去浏览");
if (!task.exists()) toastLog("没有任务啦...."), exit();
toastLog("发现：" + task.find().length + " 个浏览任务"), sleep(1000);
while (task.exists()) {
    while (!click("去浏览"));
    toast("等待显示...."), sleep(3000);
    while (true) {
        if (descMatches(/.*领喵币.*/).exists()) click("领喵币")
        if (textMatches(/.*获得.*|.*完成.*|.*上限.*/).exists() || descMatches(/.*获得.*|.*完成.*|.*上限.*/).exists()) break;
    };
    toastLog("浏览完成...."), back();
    sleep(2500);
};
toastLog("所有浏览完成....");