import lifecycle from '/util/lifecycle';
import animModal from '/util/items';

Page({
  ...lifecycle,
  ...animModal.animOp,
  data: {
    ...animModal.data,
    pageName: 'component/index',
    pageInfo: {
      pageId: 0,
    },
    hidden: true ,
    curIndex: 0,
    arr: {
      onItemTap: 'onGridItemTap',
      onChildItemTap: 'onChildItemTap',
      list: [
        {
          icon: '/image/view.png',
          title: '视图容器',
          entitle: 'View',
          subs: [
            {
              title: '基础视图',
              entitle: 'View',
              page: 'view',
            },
            {
              title: '滚动视图',
              entitle: 'ScrollView',
              page: 'scroll-view',
            },
            {
              title: '滑动视图',
              entitle: 'Swiper',
              page: 'swiper',
            },{
              title: 'cover-view视图',
              entitle: 'cover-view',
              page: 'cover-view',
            },
          ],
        }, {
          icon: '/image/basic.png',
          title: '基础内容',
          entitle: 'Basic Content',
          subs: [{
              title: '文字',
              entitle: 'Text',
              page: 'text',
            },{
              title: '图标',
              entitle: 'Icon',
              page: 'icon',
            },{
              title: '进度条',
              entitle: 'Progress',
              page: 'progress',
            },],
        }, {
          icon: '/image/form.png',
          title: '表单组件',
          entitle: 'Form',
          subs: [{
              title: '按钮',
              entitle: 'Button',
              page: 'button',
            },{
              title: '复选框',
              entitle: 'Checkbox',
              page: 'checkbox',
            },{
              title: '表单',
              entitle: 'Form',
              page: 'form',
            },{
              title: '文本输入',
              entitle: 'Input',
              page: 'input',
            },{
              title: '标签',
              entitle: 'Label',
              page: 'label',
            },{
              title: '选择器视图',
              entitle: 'PickerView',
              page: 'picker-view',
            },{
              title: '选择器',
              entitle: 'Picker',
              page: 'picker',
            },{
              title: '单选框',
              entitle: 'Radio',
              page: 'radio',
            },{
              title: '滑动条',
              entitle: 'Slider',
              page: 'slider',
            },{
              title: '开关',
              entitle: 'Switch',
              page: 'switch',
            },{
              title: '多行输入',
              entitle: 'Textarea',
              page: 'textarea',
            }, ],
        }, {
          icon: '/image/feedback.png',
          title: '操作反馈',
          entitle: 'Feedback',
          subs: [{
              title: '动作面板',
              entitle: 'ActionSheet',
              page: 'action-sheet',
            },{
              title: '对话框',
              entitle: 'Modal',
              page: 'modal',
            }, {
              title: '轻提示',
              entitle: 'Toast',
              page: 'toast',
            },{
              title: '加载提示',
              entitle: 'Loading',
              page: 'loading',
            },],
        }, {
          icon: '/image/navigator.png',
          title: '导航',
          entitle: 'Navigator',
          page: 'navigator',
        }, {
          icon: '/image/media.png',
          title: '媒体组件',
          entitle: 'Media',
          subs: [{
              title: '图像',
              entitle: 'Image',
              page: 'image',
            },{
              title: '音频',
              entitle: 'Audio',
              page: 'audio',
            },{
              title: '视频',
              entitle: 'Video',
              page: 'video',
            },{
              title:'音频升级版',
              entitle:'InnerAudio',
              page:'inner-audio',
            },{
              title:'背景音频',
              entitle:'BackgroundAudio',
              page:'background-audio',
            }],
        }, {
          icon: '/image/map.png',
          title: '地图',
          entitle: 'Map',
          page: 'map',
        }, {
          icon: '/image/canvas.png',
          title: '画布',
          entitle: 'Canvas',
          page: 'canvas',
        },
         {
          icon: '/image/api_websocket.png',
          title: '开放能力',
          entitle: 'Open',
          subs: [{
              title: '分享',
              entitle: 'Share',
              page: 'share',
            },{
              title: '开放区域',
              entitle: 'option-menu',
              page: 'option-menu',
            },{
              title: '小程序生活号',
              entitle: 'lifestyle',
              page: 'lifestyle',
            },{
              title: '消息模板',
              entitle: 'Message',
              page: 'message',
            },{
              title: '云客服',
              entitle: 'contact',
              page: 'contact-button',
            },{
              title: '内嵌H5',
              entitle: 'webView',
              page: 'webview',
            }],
        },
      ],
    },
  },
  onGridItemTap(e) {
    const curIndex = e.target.dataset.index;
    const childList = this.data.arr.list[curIndex];
    if (childList.subs) {
      this.setData({
        hidden: !this.data.hidden,
        curIndex,
      });
      this.createMaskShowAnim();
      this.createContentShowAnim();
    } else {
      const e = {
        target: {
          dataset: { page: childList.page }
        }
      };
      this.onChildItemTap(e);
    }
  },
  onChildItemTap(e) {
    const { page } = e.target.dataset;
    my.navigateTo({
      url: `component-pages/${page}/${page}`,
    });
  },
  onModalCloseTap() {
    this.createMaskHideAnim();
    this.createContentHideAnim();
    setTimeout(() => {
      this.setData({
        hidden: true,
      });
    }, 210);
  },
});
