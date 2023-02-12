import React, { useContext, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCardHeader,
  CCardImage,
  CCardLink,
  CCardSubtitle,
  CCardText,
  CCardTitle,
  CListGroup,
  CListGroupItem,
  CNav,
  CNavItem,
  CNavLink,
  CCol,
  CRow,
  CFormSelect,
} from '@coreui/react'
import { allCategory_mock } from './mockData'
import { myCategoryContext } from './MyCategories'
const AllCategories = () => {
  const { allCategory, setAllCategory, myCategory, setMyCategory } = useContext(myCategoryContext)

  const [selectedCategory, setSelectedCategory] = useState()
  const allCategory_select = (e) => {
    console.log(e.target.value)
    setSelectedCategory(e.target.value)
    // setAllCategory((prev) => [...prev,selectedCategory])
  }
  const myCategory_add = () => {
    if (selectedCategory) {
      //setAllCategory((prev) => [...prev.filter((x) => x.item == selectedCategory.item)])
      console.log(selectedCategory)
      setMyCategory((prev) => [...prev, { item: selectedCategory }])
      setAllCategory((prev) => allCategory.filter((x) => x.item !== selectedCategory))
    }
  }
  return (
    <>
      <CFormSelect
        size="lg"
        className="mb-3"
        aria-label="Large select example"
        onChange={(e) => allCategory_select(e)}
        value={selectedCategory}
      >
        {allCategory && allCategory.map((item, index) => <option key={index}>{item.item}</option>)}
      </CFormSelect>
      <CButton color="primary" shape="rounded-pill" onClick={() => myCategory_add()}>
        add to my category
      </CButton>
    </>
  )
}

export default AllCategories
