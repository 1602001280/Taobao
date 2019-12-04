/**
 * 我手机1080p的分辨率  你们低于这个分辨率的 自己改滑动坐标
 */

var urlArry = [
    "http://danielwellington.tmall.com/?spm=20191111.13377942.8691070648.6&hudongSrcX=zhdsy&screenxyz=2",
    "http://medela.tmall.com/campaign-10827-85.htm?spm=20191111.13377942.8691070647.6&uptscode=302&shop_navi=promotion&shop_origin=https%3A%2F%2Fmedela.tmall.com%2Fcampaign-10827-85.htm%3Fuptscode%3D302%26wh_weex%3Dtrue%26hudongSrcX%3Dzhdcj%26screenxyz%3D4",
    "http://360.tmall.com/campaign-10827-117.htm?spm=20191111.13377942.8691070647.6&uptscode=302&shop_navi=promotion&shop_origin=https%3A%2F%2F360.tmall.com%2Fcampaign-10827-117.htm%3Fuptscode%3D302%26wh_weex%3Dtrue%26hudongSrcX%3Dzhdcj%26screenxyz%3D3",
    "http://kelonkt.tmall.com/campaign-10827-105.htm?spm=20191111.13377942.8691070647.6&uptscode=302&shop_navi=promotion&shop_origin=https%3A%2F%2Fkelonkt.tmall.com%2Fcampaign-10827-105.htm%3Fuptscode%3D302%26wh_weex%3Dtrue%26hudongSrcX%3Dzhdcj%26screenxyz%3D4",
    "http://fotile.tmall.com/campaign-10827-97.htm?spm=20191111.13377942.8691070647.6&uptscode=302&shop_navi=promotion&shop_origin=https%3A%2F%2Ffotile.tmall.com%2Fcampaign-10827-97.htm%3Fuptscode%3D302%26wh_weex%3Dtrue%26hudongSrcX%3Dzhdcj%26screenxyz%3D3",
    "http://yuesai.tmall.com/campaign-10827-93.htm?spm=20191111.13377942.8691070647.6&uptscode=302&shop_navi=promotion&shop_origin=https%3A%2F%2Fyuesai.tmall.com%2Fcampaign-10827-93.htm%3Fuptscode%3D302%26wh_weex%3Dtrue%26hudongSrcX%3Dzhdcj%26screenxyz%3D2",
    "http://oiwas.tmall.com/campaign-10827-109.htm?spm=20191111.13377942.8691070647.6&uptscode=302&shop_navi=promotion&shop_origin=https%3A%2F%2Foiwas.tmall.com%2Fcampaign-10827-109.htm%3Fuptscode%3D302%26wh_weex%3Dtrue%26hudongSrcX%3Dzhdcj%26screenxyz%3D3",
    "http://tangchenbeijian.tmall.com/?spm=20191111.13377942.8691070647.6&hudongSrcX=zhdsy&screenxyz=2",
    "http://selected.tmall.com/?spm=20191111.13377942.8691070647.6&hudongSrcX=zhdsy&screenxyz=2",
    "http://bosch-pt.tmall.com/campaign-10827-95.htm?spm=20191111.13377942.8691070647.6&uptscode=302&shop_navi=promotion&shop_origin=https%3A%2F%2Fbosch-pt.tmall.com%2Fcampaign-10827-95.htm%3Fuptscode%3D302%26wh_weex%3Dtrue%26hudongSrcX%3Dzhdcj%26screenxyz%3D4",
    "http://kukahome.tmall.com/campaign-10827-135.htm?spm=20191111.13377942.8691070647.6&uptscode=302&shop_navi=promotion&shop_origin=https%3A%2F%2Fkukahome.tmall.com%2Fcampaign-10827-135.htm%3Fuptscode%3D302%26wh_weex%3Dtrue%26hudongSrcX%3Dzhdcj%26screenxyz%3D1",
    "http://mgbk.tmall.com/campaign-10827-88.htm?spm=20191111.13377942.8691070647.6&uptscode=302&shop_navi=promotion&shop_origin=https%3A%2F%2Fmgbk.tmall.com%2Fcampaign-10827-88.htm%3Fuptscode%3D302%26wh_weex%3Dtrue%26hudongSrcX%3Dzhdcj%26screenxyz%3D3",
    "http://midearsq.tmall.com/campaign-10827-87.htm?spm=20191111.13377942.8691070647.6&uptscode=302&shop_navi=promotion&shop_origin=https%3A%2F%2Fmidearsq.tmall.com%2Fcampaign-10827-87.htm%3Fuptscode%3D302%26wh_weex%3Dtrue%26hudongSrcX%3Dzhdcj%26screenxyz%3D2",
    "http://jmgo.tmall.com/?spm=20191111.13377942.8691070647.6&hudongSrcX=zhdsy&screenxyz=2",
    "http://tata.tmall.com/?spm=20191111.13377942.8691070647.6&hudongSrcX=zhdsy&screenxyz=2",
    "http://falanbabi.tmall.com/campaign-10827-88.htm?spm=20191111.13377942.8691070647.6&uptscode=302&shop_navi=promotion&shop_origin=https%3A%2F%2Ffalanbabi.tmall.com%2Fcampaign-10827-88.htm%3Fuptscode%3D302%26wh_weex%3Dtrue%26hudongSrcX%3Dzhdcj%26screenxyz%3D4",
    "http://elizabetharden.tmall.com/campaign-10827-134.htm?spm=20191111.13377942.8691070647.6&uptscode=302&shop_navi=promotion&shop_origin=https%3A%2F%2Felizabetharden.tmall.com%2Fcampaign-10827-134.htm%3Fuptscode%3D302%26wh_weex%3Dtrue%26hudongSrcX%3Dzhdcj%26screenxyz%3D2",
    "http://falanbabi.tmall.com/campaign-10827-88.htm?spm=20191111.13377942.8691070647.6&uptscode=302&shop_navi=promotion&shop_origin=https%3A%2F%2Ffalanbabi.tmall.com%2Fcampaign-10827-88.htm%3Fuptscode%3D302%26wh_weex%3Dtrue%26hudongSrcX%3Dzhdcj%26screenxyz%3D4",
]

for (let i of urlArry) {
    app.startActivity({
        packageName : "com.taobao.taobao",
        className : "com.taobao.browser.BrowserActivity",
        data : i
    })
    //滑动一下啊界面
    sleep(5000);
    swipe(500, 1600, 500, 400, 700);
    sleep(20*1000);
}



    //双11合伙人群聊
    // data: "http://tb.cn/n/im/dynamic/chat.html?targetType=-1&targetId=0_G_2206480966910%233_1571085710247_0&bizType=26",
    //助力邀请界面
    // data : "https://pages.tmall.com/wow/z/hdwk/act-2019-1111/app-20191111-pk-share?spm=20191111.13377942.8691070647.1&wh_biz=tm&shareType=singleAssist&disableProgress=YES&disableNav=YES"
    //打开喵铺
    // data : "http://pages.tmall.com/wow/hdwk/act/19-1111-solo?utparam=%7B%22ranger_buckets_native%22%3A%22tsp2189_23052_newuser01%22%7D&spm=a2141.1.zhuhuichang.3&scm=1007.home_banner.2.1&wh_biz=tm&disableNav=YES&disableProgress=YES&&hd_from_id=tbbutton"
    //双11主会场
    //data : "http://h5.m.taobao.com/weex/viewpage.htm?spm=20191111.13377942.8691070647.2&wh_biz=tm&wh_weex=true&wx_main_hc=true&wh_bizStageId=1005&hd_from_id=20191111-solo&_wx_f_=1&weex_original_url=https%3A%2F%2Fpages.tmall.com%2Fwow%2Fa%2Fact%2Ftmall%2F23759%2FpageFrame%3Fspm%3D20191111.13377942.8691070647.2%26wh_biz%3Dtm%26wh_weex%3Dtrue%26wx_main_hc%3Dtrue%26wh_bizStageId%3D1005%26hd_from_id%3D20191111-solo%26_wx_f_%3D1"
    //美妆预售会场
    //data : "http://pages.tmall.com/wow/a/act/tmall/tmc/23759/wupr?spm=20191111.13377942.8691070647.3&wh_pid=industry-170325&hd_from_id=20191111-solo"