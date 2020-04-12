import Carousel from 'design/components/carousel'
import Nav from 'design/components/nav'

interface Config {
  [propName: string]: React.ReactNode;
}

const designComponentMap:Config= {
  'design/carousel': Carousel,
  'design/nav': Nav,
}

export default designComponentMap 
