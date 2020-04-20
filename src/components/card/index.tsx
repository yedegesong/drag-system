import React, { useRef } from 'react';
import { useDrop, DragSourceMonitor, DropTargetMonitor } from 'react-dnd'
import { nodeProps } from 'store/applicationStore'
import './index.scss';

interface CardValue {
  cmpSource?: React.ReactNode;
  handleClick: Function;
  sourceData?: nodeProps;
}

const Card: React.FC<CardValue> = (props) => {
  const ref = useRef<HTMLDivElement>(null)
  const { children, handleClick, sourceData } = props
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: 'Card',
    hover(item, monitor) {

    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    })
  });

  drop(ref)
  return (
    <div ref={ref} className="sys-card" onClick={(event) => { handleClick(event, sourceData) }}>
      {children}
    </div>
  )
}

export default Card