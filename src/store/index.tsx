import React from 'react';
import {ApplicationStore} from 'store/applicationStore'

export const storesContext = React.createContext({
  applicationContext: new ApplicationStore(),
})

export const useStores = () => React.useContext(storesContext)