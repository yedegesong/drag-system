import React,{useState} from 'react';
import { Carousel } from 'antd-mobile';
const BaseCarousel = ()=>{
  const [soruceData] = useState({
    data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
    imgHeight: 176,
  });
  return (
    <Carousel>
      {soruceData.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: 176 }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
              />
            </a>
          ))}
    </Carousel>
  );
}

export default BaseCarousel