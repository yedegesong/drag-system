import Nav from 'design/components/nav'

interface Config {
  [propName: string]: React.ReactNode;
}

const designConfigMap: Config = {
  'design/nav': Nav,
}

export default designConfigMap 
