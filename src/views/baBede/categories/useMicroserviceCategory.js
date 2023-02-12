import { useState } from 'react'
import { micro_categoryData_mock } from './mockMicroservice'
const useMicroserviceCategory = () => {
  const [microcategoryData, setMicrocategoryData] = useState([])
  const micro_categoryData = (category) => {
    setMicrocategoryData(micro_categoryData_mock)
  }
  return { micro_categoryData }
}
export default useMicroserviceCategory
