import React from 'react';
import { toJS} from 'mobx'
import { observer } from 'mobx-react-lite'
import { DragSourceMonitor,useDrag } from 'react-dnd'
import { useStores } from 'store'
import { Card } from 'antd';
import './index.scss';
interface BoxValue {
  belong: string;
  name: string;
  desc?: string;
  category: string;
  thumbnail: string;
}

const Box:React.FC<BoxValue> = (props) =>  {
 const { applicationContext,applicationContext:{designList} } = useStores()
 const sourceDesignList = toJS(designList)
  const {name,desc} = props
  const box = {
    ...props,
    type: 'Card',
};
  const [, drag] = useDrag({
    item: box,
    begin(monitor: DragSourceMonitor) {
      const useless = sourceDesignList.find((item) => item.belong === -1);
       // 拖拽开始时，向 cardList 数据源中插入一个占位的元素，如果占位元素已经存在，不再重复插入
       if(!useless){
          applicationContext.updateDesignList([...sourceDesignList,{ type: "part", name: '放这里', belong: -1 }])
       }
  },
  // 拖拽结束
    end:(item,monitor: DragSourceMonitor)=>{
      const uselessIndex = sourceDesignList.findIndex((item) => item.belong === -1);
      // 当目标处于目标元素时
      if (monitor.didDrop()) {
          // 插入数据源
           sourceDesignList.splice(uselessIndex, 1, { ...monitor.getItem()});
      } else {
          sourceDesignList.splice(uselessIndex, 1);
      }
          applicationContext.updateDesignList(sourceDesignList)
    }
});
  return (
    <div className="sys-box" ref={drag}>
      <Card title={name}>
          {desc}
       </Card>
    </div>
  );
}

export default observer(Box)