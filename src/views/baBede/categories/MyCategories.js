import { CButton, CNavItem } from '@coreui/react'
//import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import AllCategories from './AllCategories'
import SavedCategories from './SavedCategories'
import useCategoryContext from './useCategoryContext'
export const myCategoryContext = createContext()

const MyCategories = () => {
  const vals = useCategoryContext()
  const { allCategory, setAllCategory, myCategory, setMyCategory } = vals
  const contextValues = { allCategory, setAllCategory, myCategory, setMyCategory }
  //const [sample, setSample] = useState()
  const data = [1, 2, 3]
  // const getData = async () => {
  //   const result = await axios.get('https://jsonplaceholder.typicode.com/users')

  //   return result.data
  //   //const json=await useFetcher()
  // }
  // useEffect(async () => {
  //   const data = await getData()
  //   setSample(data)
  // }, [])
  const [inputValue, setInputValue] = React.useState()
  const handleClick = () => {
    setInputValue('mojtaba')
  }
  return (
    <myCategoryContext.Provider value={contextValues}>
      <h1>MyCategories</h1>
      {/* {sample && sample.map((item, index) => <li key={index}>{item.username}</li>)} */}
      <button onClick={handleClick}>my Button</button>

      <input
        name="myInput"
        data-testid="myInput"
        value={inputValue}
        onChange={(e) => handleClick(e)}
      ></input>
      {/* <AllCategories></AllCategories>
      <hr />
      <SavedCategories></SavedCategories> */}
    </myCategoryContext.Provider>
  )
}

export default MyCategories
