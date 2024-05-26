import React from 'react'
import { HashLoader } from 'react-spinners'
import style from "./Home.module.css"

const Loader = () => {
  return (
    <div className={style.loader}>
          <HashLoader color="black" id='hash' size={100} />
          
    </div>
  )
}

export default Loader
