import React from 'react';
import Box from 'components/box'
import PageContainer from 'components/page-container'
import PageRight from 'components/right'
import designConfig from 'design/design-config'

import { observer } from 'mobx-react-lite'
import './index.scss';

const Content: React.FC = () => {

  function renderLeft() {
    return designConfig.map((item) => {
      return <Box key={item.belong} {...item} />
    })
  }
  return (
    <div className="sys-content">
      <div className="sys-left">
        {
          renderLeft()
        }
      </div>
      <div className="sys-center">
        <PageContainer />
      </div>
      <PageRight />
    </div>
  );
}

export default observer(Content)
