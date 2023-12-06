import React from 'react'
import { useState } from 'react'
import CurrentUseContext from './Index'

const Provider = ({children}) => {
    const [user,setUser]=useState([])
  return (
    <React.Fragment>
      <CurrentUseContext.Provider value={{user,setUser}}>
    {children}
      </CurrentUseContext.Provider>
    </React.Fragment>
  )
}

export default Provider
