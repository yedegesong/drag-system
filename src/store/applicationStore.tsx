import { observable, action } from 'mobx'
export interface nodeProps {
  name: string, // 组件名称
  type: string, // 组件类型
  belong: string | number, // 组件唯一标识
  // 物料私有属性，可添加特有属性
  attrs?: {},
  // 业务组件保存的数据
  dataContext?: {}
}
export class ApplicationStore {
  @observable
  designList: Array<nodeProps> = [
    {
      belong: "design/nav",
      name: "九宫格导航",
      type: "Card",
    }
  ]

  @action
  increment(item: nodeProps) {
    this.designList.push(item)
  }

  // 增量更新
  @action
  updateDesignList(item: Array<nodeProps>) {
    this.designList = item
  }

  // 获取列表里面的固定的值
  @action
  getDesignListKey(nodePropsKey: string | number) {
    return this.designList.find((item) => { return item.belong === nodePropsKey })
  }

  // 设置列表里面的固定的值
  // @action
  // setDesignListKey(nodePropsKey,value) {

  // }
}