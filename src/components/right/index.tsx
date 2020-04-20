import React from 'react';
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import './index.scss';

const Right: React.FC = () => {
  return (
    <div className="sys-right">
      我是右边内容
    </div>
  );
}

export default observer(Right)