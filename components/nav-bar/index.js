// components/nav-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs: {
      type: Array,
      default: []
    },
    key: {
      type: String,
      dafault: 'id'
    },
    label: {
      type: String,
      default: 'name'
    },
    activeIndex: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    defaultKey: 'id',
    defaultName: 'name',
  },

  /** 旧式的定义方式，可以保持对 <2.2.3 版本基础库的兼容 在组件实例进入页面节点树时执行 */
  attached() {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeTab(e) {
      const index = e.detail.index;
      this.triggerEvent("handleClick", index)
    }
  }
})
