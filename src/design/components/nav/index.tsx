import React from 'react';
import { Grid } from 'antd-mobile';

const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`,
}));
const Nav = ()=>{
  return (
    <Grid data={data} activeStyle={false} />
  );
}

export default Nav