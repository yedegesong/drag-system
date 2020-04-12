import React,{useRef} from 'react';
import { useDrop,DragSourceMonitor,DropTargetMonitor } from 'react-dnd'
import './index.scss';

interface CardValue {
  cmpSource?: React.ReactNode;
}

const Card:React.FC<CardValue> = (props) =>  {
  const ref = useRef<HTMLDivElement>(null);
  const [{isOver,canDrop}, drop ] = useDrop({
    accept: 'Card',
    hover(item,monitor){
     
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    })
  });
  //console.log(isOver)
  //console.log(canDrop)
  drop(ref)
  return (
    <div ref={ ref } className="sys-card">
       {props.children}
    </div>
  );
}

export default Card