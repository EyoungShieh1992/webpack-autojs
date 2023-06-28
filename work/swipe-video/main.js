'ui';

// 开发使用
const common = require("/storage/emulated/0/脚本/common/common.js");

let storage = storages.create('swipe-video-globalConfig');
// 全局配置
let globalConfig = {
  versionName: '1.0.0',
  curFileName: '短视频小助手',
  startAppSleepTime: storage.get('globalConfig', {}).startAppSleepTime || 15,// 启动APP后几秒后开始执行
  swipeVideoTime: storage.get('globalConfig', {}).swipeVideoTime || 10,// 自动刷视频间隔时间
  // 全局色值
  color: '#027AFF',
  showConsole: true, // 是否显示控制台，默认是
  cardColor: '#222222'
};

ui.layout(
  <drawer id="drawer">
    <vertical>
      {/* 高度调整为40，tabs高度调整为0，即不显示tabs，看后期需要 */}
      <appbar h="40">
        <toolbar bg="{{ globalConfig.color }}" h="40" id="toolbar" title="{{ globalConfig.curFileName }}" />
        <tabs id="tabs" h="0" bg="{{ globalConfig.color }}" />
      </appbar>
      <viewpager id="viewpager">
        {/* 控制台 */}
        <frame>
          <scroll>
            <vertical padding="6">
              <text
                text="欢迎使用{{ globalConfig.curFileName + globalConfig.versionName }}"
                textColor="black"
                textSize="16sp"
              />
              {/* 无障碍服务 */}
              <card w="*" margin="0 5 0 0" h="50" cardCornerRadius="2dp"
                cardElevation="1dp" foreground="?selectableItemBackground">
                <horizontal gravity="center_vertical">
                  <View bg="#f44336" h="*" w="10" />
                  <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                    <text text="无障碍服务" textColor="{{ globalConfig.cardColor }}" textSize="14sp" maxLines="1" />
                  </vertical>
                  <Switch id="autoService" text="" checked="{{auto.service != null}}" textSize="14sp" />
                </horizontal>
              </card>
              {/* 悬浮窗权限 */}
              {/* margin: 左 上 右 下 */}
              <card w="*" margin="0 5 0 0" h="50" cardCornerRadius="2dp"
                cardElevation="1dp" foreground="?selectableItemBackground">
                <horizontal gravity="center_vertical">
                  <View bg="#f44336" h="*" w="10" />
                  <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                    <text text="悬浮窗权限" textColor="{{ globalConfig.cardColor }}" textSize="14sp" maxLines="1" />
                  </vertical>
                  <Switch id="overlayService" text="" checked="{{auto.service != null}}" textSize="14sp" />
                </horizontal>
              </card>
              <card w="*" margin="0 5 0 0" h="50" cardCornerRadius="2dp"
                cardElevation="1dp" foreground="?selectableItemBackground">
                <horizontal gravity="center_vertical">
                  <View bg="#f44336" h="*" w="10" />
                  <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                    <text text="显示控制台" textColor="{{ globalConfig.cardColor }}" textSize="14sp" maxLines="1" />
                  </vertical>
                  <Switch id="showConsole" text="" checked="{{globalConfig.showConsole}}" textSize="14sp" />
                </horizontal>
              </card>
              <text
                text="其他配置"
                textColor="black"
                textSize="16sp"
                margin="0 10 0 0"
              />
              <card w="*" margin="0 5 0 0" h="50" cardCornerRadius="2dp"
                cardElevation="1dp" foreground="?selectableItemBackground">
                <horizontal gravity="center_vertical">
                  <View bg="#708090" h="*" w="10" />
                  <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                    <text text="启动APP后几秒后开始执行" textColor="{{ globalConfig.cardColor }}" textSize="14sp" maxLines="1" />
                  </vertical>
                  <input id="启动APP后几秒后开始执行" text="{{ globalConfig.startAppSleepTime }}" w="60" inputType="number" gravity="center" textSize="14sp" digits="0123456789" />
                  <text text="秒" textColor="{{ globalConfig.cardColor }}" textSize="14sp" maxLines="1" />
                </horizontal>
              </card>
              <card w="*" margin="0 5 0 0" h="50" cardCornerRadius="2dp"
                cardElevation="1dp" foreground="?selectableItemBackground">
                <horizontal gravity="center_vertical">
                  <View bg="#708090" h="*" w="10" />
                  <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                    <text text="刷视频间隔时间" textColor="{{ globalConfig.cardColor }}" textSize="14sp" maxLines="1" />
                  </vertical>
                  <input id="刷视频间隔时间" text="{{ globalConfig.swipeVideoTime }}" w="60" inputType="number" gravity="center" textSize="14sp" digits="0123456789" />
                  <text text="秒" textColor="{{ globalConfig.cardColor }}" textSize="14sp" maxLines="1" />
                </horizontal>
              </card>
              <card w="*" margin="0 5 0 0" h="*" cardCornerRadius="2dp"
                cardElevation="1dp" foreground="?selectableItemBackground">
                <horizontal gravity="center_vertical">
                  <View bg="#708090" h="*" w="10" />
                  <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                    <text text="请选择要刷的APP" textColor="{{ globalConfig.cardColor }}" textSize="14sp" maxLines="1" />
                    <radiogroup id="刷短视频APP列表">
                      {/* <radio text="抖音" id="douyin" w="*" /> */}
                      <radio text="抖音极速版" id="抖音极速版" w="*" checked="true" />
                      {/* <radio text="快手" id="kuaishou" w="*" /> */}
                      <radio text="快手极速版" id="快手极速版" w="*" />
                      <radio text="百度极速版" id="百度极速版" w="*" />
                      <radio text="今日头条极速版" id="今日头条极速版" w="*" />
                      <radio text="UC浏览器极速版" id="UC浏览器极速版" w="*" />
                    </radiogroup>
                  </vertical>
                </horizontal>
              </card>

              <button id="刷短视频开始运行" text="开始运行" style="Widget.AppCompat.Button.Colored" w="*" margin="0 10 0 0" />

              <vertical marginTop="12sp">
                <text text="使用须知：" textColor="red" textSize="12sp" />
                <text text="    本软件仅适用于娱乐，严禁任何人利用本软件侵犯他人隐私及一切不法活动，如软件使用者不能遵守此规定，请立即删除。对于因用户使用本软件而造成自身或他人隐私泄露，或侵犯他人利益等任何不良后果，均由用户自行承担，软件作者不负任何法律责任。"
                  textColor="black"
                  textSize="12sp" />
                <text textColor="red" marginTop="12sp" textSize="12sp" text="注意：如果未开启无障碍服务和悬浮窗权限，请先到设置中开启，否则无法正常使用" />
              </vertical>
            </vertical>
          </scroll>
        </frame>
      </viewpager>
    </vertical>
  </drawer>
);

// 启动ui不弹出输入法
activity.getWindow().setSoftInputMode(android.view.WindowManager.LayoutParams.SOFT_INPUT_STATE_ALWAYS_HIDDEN);

let 免责声明 = `
短视频小助手免责声明
1、一切移动客户端用户在下载并浏览短视频小助手集软件时均被视为已经仔细阅读本条款并完全同意。凡以任何方式登陆本APP，或直接、间接使用本APP资料者，均被视为自愿接受本网站相关声明和用户服务协议的约束。
2、短视频小助手转载的内容并不代表短视频小助手之意见及观点，也不意味着本网赞同其观点或证实其内容的真实性。
3、短视频小助手转载的文字、图片、音视频等资料均由本APP用户提供，其真实性、准确性和合法性由信息发布人负责。短视频小助手不提供任何保证，并不承担任何法律责任。
4、短视频小助手所转载的文字、图片、音视频等资料，如果侵犯了第三方的知识产权或其他权利，责任由作者或转载者本人承担，本APP对此不承担责任。
5、短视频小助手不保证为向用户提供便利而设置的外部链接的准确性和完整性，同时，对于该外部链接指向的不由短视频小助手实际控制的任何网页上的内容，短视频小助手不承担任何责任。
6、用户明确并同意其使用短视频小助手网络服务所存在的风险将完全由其本人承担;因其使用短视频小助手网络服务而产生的一切后果也由其本人承担，短视频小助手对此不承担任何责任。
7、除短视频小助手注明之服务条款外，其它因不当使用本APP而导致的任何意外、疏忽、合约毁坏、诽谤、版权或其他知识产权侵犯及其所造成的任何损失，短视频小助手概不负责，亦不承担任何法律责任。
8、对于因不可抗力或因黑客攻击、通讯线路中断等短视频小助手不能控制的原因造成的网络服务中断或其他缺陷，导致用户不能正常使用短视频小助手，短视频小助手不承担任何责任，但将尽力减少因此给用户造成的损失或影响。
9、本声明未涉及的问题请参见国家有关法律法规，当本声明与国家有关法律法规冲突时，以国家法律法规为准。
10、本网站相关声明版权及其修改权、更新权和最终解释权均属短视频小助手所有。
`

//创建选项菜单(右上角)
ui.emitter.on('create_options_menu', (menu) => {
  menu.add('停止所有脚本');
  menu.add('查看日志');
  menu.add('免责声明');
  menu.add('关于');
});
//监听选项菜单点击
ui.emitter.on('options_item_selected', (e, item) => {
  switch (item.getTitle()) {
    case '停止所有脚本':
      // Yz.stopOtherScript();
      break;
    case '查看日志':
      app.startActivity('console');
      // app.startActivity("settings");
      break;
    case '免责声明':
      alert('免责声明', 免责声明);
      break;
    case '关于':
      alert(
        '关于',
        globalConfig.curFileName + ' v' + globalConfig.versionName
      );
      break;
  }
  e.consumed = true;
});

//设置滑动页面的标题
ui.viewpager.setTitles(['控制台']);
//让滑动页面和标签栏联动
ui.tabs.setupWithViewPager(ui.viewpager);

//让工具栏左上角可以打开侧拉菜单
activity.setSupportActionBar(ui.toolbar);
// ui.toolbar.setupWithDrawer(ui.drawer);

ui.autoService.on('check', function (checked) {
  // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启
  if (checked && auto.service == null) {
    app.startActivity({
      action: 'android.settings.ACCESSIBILITY_SETTINGS'
    });
  }
  if (!checked && auto.service != null) {
    auto.service.disableSelf();
  }
});

// 当用户回到本界面时，resume事件会被触发
ui.emitter.on('resume', function () {
  // 此时根据无障碍服务的开启情况，同步开关的状态
  ui.autoService.checked = auto.service != null;
});
//开启悬浮窗权限
ui.overlayService.on('check', function (checked) {
  // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启
  if (checked) {
    toastLog('请打开悬浮窗开关');
    var intent = new Intent();
    intent.setAction("android.settings.action.MANAGE_OVERLAY_PERMISSION");
    // ui.emitter.on("activity_result", (req, res, intent) => {});
    activity.getEventEmitter().on("activity_result", function (requestCode, resultCode, intentData) { });
    activity.startActivityForResult(intent, 8000);
  }

  if (!checked && auto.service != null) {
    //auto.service.disableSelf();
    toastLog('已关闭悬浮窗权限');
  }
});

// ui.启动APP后几秒后开始执行.on('click', function () {
//   this.focusable=true
// })

ui.启动APP后几秒后开始执行.addTextChangedListener(new android.text.TextWatcher({
  onTextChanged: (value, start, before, intcount) => {
    // toastLog(value)
  },
  afterTextChanged: (editable) => {
    globalConfig.startAppSleepTime = parseInt(editable);
  }
}));

ui.刷视频间隔时间.addTextChangedListener(new android.text.TextWatcher({
  onTextChanged: (value, start, before, intcount) => {
    // toastLog(value)
  },
  afterTextChanged: (editable) => {
    globalConfig.swipeVideoTime = parseInt(editable);
  }
}));

ui.刷短视频开始运行.on('click', function () {
  let selectApp = common.getSelectRadioText(ui.刷短视频APP列表);
  if (!selectApp) {
    toastLog('请选择刷视频的APP');
    return;
  }

  switch (selectApp) {
    // case '抖音':
    //   common.openApp('com.ss.android.ugc.aweme')
    //   break;
    case '抖音极速版':
      common.openApp('抖音极速版')
      threads.start(function () {
        text("首页").waitFor();
        text('首页').findOne().parent().parent().parent().parent().click()
        text('推荐').findOne().parent().click()
      })
      break;
    // case '快手':
    //   common.openApp('快手')
    //   break;
    case '快手极速版':
      common.openApp('快手极速版')
      break;
    case '百度极速版':
      common.openApp('百度极速版')
      break;
    case '今日头条极速版':
      common.openApp('今日头条极速版')
      break;
    case 'UC浏览器极速版':
      common.openApp('UC浏览器极速版')
      break;
  }

  threads.start(function () {
    // 开启日志（悬浮窗权限）
    globalConfig.showConsole && common.resetConsole();

    common.waitTime(globalConfig.startAppSleepTime, "等待" + globalConfig.startAppSleepTime + "秒后开始执行")
    // 启动APP后几秒后开始执行
    // sleep(globalConfig.startAppSleepTime * 1000)

    //在新线程执行的代码
    while (true) {
      common.swipeRandom(device.width / 2, device.height - 200, 100, 100, 200)
      common.waitTime(globalConfig.swipeVideoTime, globalConfig.swipeVideoTime + "秒后切换下个视频")
    }
  });

  threads.start(function () { // 关闭一些
    //在新线程执行的代码
    while (true) {
      // [抖音极速版]关闭个人信息保护指引
      if (text("同意").exists()) {
        console.log('关闭个人信息保护指引')
        text('同意').findOne().click()
      }
      // [抖音极速版]关闭新人现金红包弹窗
      if (id('dsa').exists()) {
        console.log('关闭新人现金红包')
        id('dsa').findOne().click()
      }
      // [抖音极速版]关闭青少年模式弹窗
      if (text("我知道了").exists()) {
        console.log('关闭青少年模式')
        text('我知道了').findOne().click()
      }
      // [抖音极速版]关闭发现通讯录朋友
      if (text("发现通讯录朋友").exists()) {
        console.log('关闭发现通讯录朋友')
        text('拒绝').findOne().click()
      }
      // [抖音极速版]关闭邀请新朋友得现金
      if (desc("不感兴趣").exists()) {
        console.log('关闭邀请新朋友得现金')
        desc('不感兴趣').findOne().click()
      }
      // [抖音极速版]关闭邀请新朋友得现金
      if (id("close").exists()) {
        console.log('关闭弹窗')
        id("close").findOne().click()
      }
      // [抖音极速版]移除朋友推荐
      if (text("移除").exists()) {
        console.log('移除朋友推荐')
        text("移除").findOne().click()
      }

      sleep(2000)
    }
  });

});

events.observeKey(); //启用 按键监听
events.setKeyInterceptionEnabled("volume_down", true); //屏蔽 音量减
events.onKeyDown("volume_down", function (event) {
  engines.stopAllAndToast();
})
