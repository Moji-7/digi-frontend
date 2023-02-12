import { useState } from 'react'
import { allCategory_mock, myCategory_mock } from './mockData'

const useCategoryContext = () => {
  const [allCategory, setAllCategory] = useState(allCategory_mock)
  const [myCategory, setMyCategory] = useState(myCategory_mock)
  return { allCategory, setAllCategory, myCategory, setMyCategory }
}

export default useCategoryContext
