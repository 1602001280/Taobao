
//签到任务
app.startActivity({
    packageName : "com.taobao.taobao",
    className : "com.taobao.browser.BrowserActivity",
    data : "http://pages.tmall.com/wow/hdwk/act/19-1111-solo?utparam=%7B%22ranger_buckets_native%22%3A%22tsp2189_21582_normaluser01%22%7D&spm=a2141.1.zhuhuichang.3&scm=1007.home_banner.2.1&wh_biz=tm&disableNav=YES&disableProgress=YES&&hd_from_id=tbbutton"
})
while(text("领喵币").find().empty() && desc("领喵币").find().empty()) {
    sleep(1000);
}
while(!click("领喵币"));
while(text("签到").find().empty() && desc("签到").find().empty()) {
    sleep(1000);
}
while(!click("签到"));
sleep(2000);

//浏览双11主会场
app.startActivity({
    packageName : "com.taobao.taobao",
    className : "com.taobao.browser.BrowserActivity",
    data : "http://h5.m.taobao.com/weex/viewpage.htm?spm=20191111.13377942.8691070647.2&wh_weex=true&wh_biz=tm&wx_main_hc=true&hd_from_id=20191111-solo&_wx_f_=1&weex_original_url=https%3A%2F%2F1111.tmall.com%2F%3Fspm%3D20191111.13377942.8691070647.2%26wh_weex%3Dtrue%26wh_biz%3Dtm%26wx_main_hc%3Dtrue%26hd_from_id%3D20191111-solo%26_wx_f_%3D1"
})
while(descContains("已获得").find().empty() && textContains("已获得").find().empty()) {
    sleep(1000);
}

//浏览必买好货
app.startActivity({
    packageName : "com.taobao.taobao",
    className : "com.taobao.browser.BrowserActivity",
    data : "http://pages.tmall.com/wow/hdwk/act/sjphy?spm=20191111.13377942.8691070647.5&wh_biz=tm&hd_from_id=20191111-solo"
})
while (desc("任务完成").find().empty() && text("任务完成").find().empty()) {
    sleep(1000);
}

//查看双11省钱账单什么玩意
app.startActivity({
    packageName : "com.taobao.taobao",
    className : "com.taobao.browser.BrowserActivity",
    data : "http://market.m.taobao.com/app/alime/Debill/p/index/index.html?spm=20191111.13377942.8691070647.4"
})
sleep(2000);

//浏览聚划算
app.startActivity({
    packageName : "com.taobao.taobao",
    className : "com.taobao.ju.android.ui.main.TabMainActivity",
    data : "http://tb.cn/x/ju/?spm=20191111.13377942.8691070647.9&jufrom=jg&juspmb=7718929&hd_from_id=20191111-solo"
})
while(descContains("已获得").find().empty() && textContains("已获得").find().empty()) {
    sleep(1000);
}

//品牌福利中心
app.startActivity({
    packageName : "com.taobao.taobao",
    className : "com.taobao.browser.BrowserActivity",
    data : "http://pages.tmall.com/wow/a/act/tmall/dailygroup/862/wupr?spm=20191111.13377942.8691070647.10&wh_pid=daily-174346&hd_from_id=20191111-solo"
})
while(descContains("我的喵币").find().empty() && textContains("我的喵币").find().empty()) {
    sleep(1000);
}

//浏览人气会场
for(let i = 0; i < 8; i++) {
    app.startActivity({
        packageName : "com.taobao.taobao",
        className : "com.taobao.browser.BrowserActivity",
        data : "https://pages.tmall.com/wow/hdwk/act/hcjump?spm=20191111.13377942.8691070647.3&wh_biz=tm"
    })
    while(descContains("已获得").find().empty() && textContains("已获得").find().empty()) {
        sleep(1000);
    }
}

//浏览商铺任务
for (let i of shopsUrlArry()) {
    app.startActivity({
        packageName : "com.taobao.taobao",
        className : "com.taobao.browser.BrowserActivity",
        data : i
    })
    while (desc("任务完成").find().empty() && text("任务完成").find().empty()) {
        sleep(1000);
    }
}

function shopsUrlArry() {
    return [
        "http://danielwellington.tmall.com/?spm=20191111.13377942.8691070648.6&hudongSrcX=zhdsy&screenxyz=2",
        "http://tangchenbeijian.tmall.com/?spm=20191111.13377942.8691070647.6&hudongSrcX=zhdsy&screenxyz=2",
        "http://selected.tmall.com/?spm=20191111.13377942.8691070647.6&hudongSrcX=zhdsy&screenxyz=2",
        "http://jmgo.tmall.com/?spm=20191111.13377942.8691070647.6&hudongSrcX=zhdsy&screenxyz=2",
        "http://tata.tmall.com/?spm=20191111.13377942.8691070647.6&hudongSrcX=zhdsy&screenxyz=2",
        "http://medela.tmall.com/campaign-10827-85.htm?spm=20191111.13377942.8691070647.6&uptscode=302&shop_navi=promotion&shop_origin=https%3A%2F%2Fmedela.tmall.com%2Fcampaign-10827-85.htm%3Fuptscode%3D302%26wh_weex%3Dtrue%26hudongSrcX%3Dzhdcj%26screenxyz%3D4",
        "http://360.tmall.com/campaign-10827-117.htm?spm=20191111.13377942.8691070647.6&uptscode=302&shop_navi=promotion&shop_origin=https%3A%2F%2F360.tmall.com%2Fcampaign-10827-117.htm%3Fuptscode%3D302%26wh_weex%3Dtrue%26hudongSrcX%3Dzhdcj%26screenxyz%3D3",
        "http://kelonkt.tmall.com/campaign-10827-105.htm?spm=20191111.13377942.8691070647.6&uptscode=302&shop_navi=promotion&shop_origin=https%3A%2F%2Fkelonkt.tmall.com%2Fcampaign-10827-105.htm%3Fuptscode%3D302%26wh_weex%3Dtrue%26hudongSrcX%3Dzhdcj%26screenxyz%3D4",
        "http://fotile.tmall.com/campaign-10827-97.htm?spm=20191111.13377942.8691070647.6&uptscode=302&shop_navi=promotion&shop_origin=https%3A%2F%2Ffotile.tmall.com%2Fcampaign-10827-97.htm%3Fuptscode%3D302%26wh_weex%3Dtrue%26hudongSrcX%3Dzhdcj%26screenxyz%3D3",
        "http://yuesai.tmall.com/campaign-10827-93.htm?spm=20191111.13377942.8691070647.6&uptscode=302&shop_navi=promotion&shop_origin=https%3A%2F%2Fyuesai.tmall.com%2Fcampaign-10827-93.htm%3Fuptscode%3D302%26wh_weex%3Dtrue%26hudongSrcX%3Dzhdcj%26screenxyz%3D2",
        "http://oiwas.tmall.com/campaign-10827-109.htm?spm=20191111.13377942.8691070647.6&uptscode=302&shop_navi=promotion&shop_origin=https%3A%2F%2Foiwas.tmall.com%2Fcampaign-10827-109.htm%3Fuptscode%3D302%26wh_weex%3Dtrue%26hudongSrcX%3Dzhdcj%26screenxyz%3D3",
        "http://bosch-pt.tmall.com/campaign-10827-95.htm?spm=20191111.13377942.8691070647.6&uptscode=302&shop_navi=promotion&shop_origin=https%3A%2F%2Fbosch-pt.tmall.com%2Fcampaign-10827-95.htm%3Fuptscode%3D302%26wh_weex%3Dtrue%26hudongSrcX%3Dzhdcj%26screenxyz%3D4",
        "http://kukahome.tmall.com/campaign-10827-135.htm?spm=20191111.13377942.8691070647.6&uptscode=302&shop_navi=promotion&shop_origin=https%3A%2F%2Fkukahome.tmall.com%2Fcampaign-10827-135.htm%3Fuptscode%3D302%26wh_weex%3Dtrue%26hudongSrcX%3Dzhdcj%26screenxyz%3D1",
        "http://mgbk.tmall.com/campaign-10827-88.htm?spm=20191111.13377942.8691070647.6&uptscode=302&shop_navi=promotion&shop_origin=https%3A%2F%2Fmgbk.tmall.com%2Fcampaign-10827-88.htm%3Fuptscode%3D302%26wh_weex%3Dtrue%26hudongSrcX%3Dzhdcj%26screenxyz%3D3",
        "http://midearsq.tmall.com/campaign-10827-87.htm?spm=20191111.13377942.8691070647.6&uptscode=302&shop_navi=promotion&shop_origin=https%3A%2F%2Fmidearsq.tmall.com%2Fcampaign-10827-87.htm%3Fuptscode%3D302%26wh_weex%3Dtrue%26hudongSrcX%3Dzhdcj%26screenxyz%3D2",
        "http://falanbabi.tmall.com/campaign-10827-88.htm?spm=20191111.13377942.8691070647.6&uptscode=302&shop_navi=promotion&shop_origin=https%3A%2F%2Ffalanbabi.tmall.com%2Fcampaign-10827-88.htm%3Fuptscode%3D302%26wh_weex%3Dtrue%26hudongSrcX%3Dzhdcj%26screenxyz%3D4",
        "http://elizabetharden.tmall.com/campaign-10827-134.htm?spm=20191111.13377942.8691070647.6&uptscode=302&shop_navi=promotion&shop_origin=https%3A%2F%2Felizabetharden.tmall.com%2Fcampaign-10827-134.htm%3Fuptscode%3D302%26wh_weex%3Dtrue%26hudongSrcX%3Dzhdcj%26screenxyz%3D2",
        "http://falanbabi.tmall.com/campaign-10827-88.htm?spm=20191111.13377942.8691070647.6&uptscode=302&shop_navi=promotion&shop_origin=https%3A%2F%2Ffalanbabi.tmall.com%2Fcampaign-10827-88.htm%3Fuptscode%3D302%26wh_weex%3Dtrue%26hudongSrcX%3Dzhdcj%26screenxyz%3D4",
        "http://downland.tmall.com/campaign-10827-38.htm?spm=20191111.13377942.8691070647.6&uptscode=302&shop_navi=promotion&shop_origin=https%3A%2F%2Fdownland.tmall.com%2Fcampaign-10827-38.htm%3Fuptscode%3D302%26wh_weex%3Dtrue%26hudongSrcX%3Dzhdcj%26screenxyz%3D4",
        "http://tokit.tmall.com/campaign-10827-11.htm?spm=20191111.13377942.8691070647.6&uptscode=302&shop_navi=promotion&shop_origin=https%3A%2F%2Ftokit.tmall.com%2Fcampaign-10827-11.htm%3Fuptscode%3D302%26wh_weex%3Dtrue%26hudongSrcX%3Dzhdcj%26screenxyz%3D4",
        "http://baisihan.tmall.com/campaign-10827-71.htm?spm=20191111.13377942.8691070647.6&uptscode=302&shop_navi=promotion&shop_origin=https%3A%2F%2Fbaisihan.tmall.com%2Fcampaign-10827-71.htm%3Fuptscode%3D302%26wh_weex%3Dtrue%26hudongSrcX%3Dzhdcj%26screenxyz%3D4",
    ]
}