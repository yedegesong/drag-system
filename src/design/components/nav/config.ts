class Configurable {
  attribute: Map<string, Object>
  constructor() {
    // 记录属性列表
    this.attribute = new Map()
  }

  registerConfigProperty(key: string, value: Object) {
    this.attribute.set(key, value)
  }

}

export default class DesignNavConfig extends Configurable {
  baseInfo: { name: string };
  configs: { pageSize: { name: string } }
  constructor() {
    super()
    this.baseInfo = {
      name: '店铺商品列表'
    }
    this.configs = {
      pageSize: { name: '一页显示数量' }
    }
  }

  addProperties() {
    const pageSize = {
      name: 'pageSize',
      type: 'text',
      default: 10,
      options: { width: '140px', center: true },
    }
    this.registerConfigProperty('pageSize', pageSize)
  }
}