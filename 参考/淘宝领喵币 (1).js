

className("android.widget.Button").text("升级领红包").waitFor()

id("9573212811").findOne().child(1).child(1).children().forEach(child => {
    var target = child.text()
    while (!click(target));
    id("uik_public_menu_action_icon").waitFor();
    swipe(500, 1600, 500, 400, 700);
    while(!desc("任务完成").exists());
    back();
});