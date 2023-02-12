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
  CContainer,
  CRow,
  CCol,
} from '@coreui/react'
import { myCategory_mock } from './mockData'
import { myCategoryContext } from './MyCategories'

import CallCategoryData from './CallCategoryData'

const SavedCategories = () => {
  const { setAllCategory, myCategory, setMyCategory } = useContext(myCategoryContext)

  const myCategory_remove = (item) => {
    console.log(item.item)
    setMyCategory((prev) => [...prev, item])
    console.log(myCategory_mock.filter((x) => x.item !== item.item))
    setMyCategory((prev) => [...prev.filter((x) => x.item !== item.item)])
    setAllCategory((prev) => [...prev, item])
  }

  return (
    <>
      <CCard style={{ width: '24rem' }}>
        <CCardHeader>My Saved Categories</CCardHeader>
        <CListGroup flush>
          <CContainer container spacing={2}>
            {myCategory &&
              myCategory.map((item, index) => (
                <CListGroupItem key={index}>
                  <CRow>
                    <CCol item xs={4}>
                      {item.item}
                    </CCol>
                    <CCol item xs={2}>
                      <CButton
                        color="light"
                        shape="rounded-pill"
                        onClick={() => myCategory_remove(item)}
                      >
                        X
                      </CButton>
                    </CCol>
                    <CCol item xs={6}>
                      <CallCategoryData category={item}></CallCategoryData>
                    </CCol>
                  </CRow>
                </CListGroupItem>
              ))}
          </CContainer>
        </CListGroup>
        <CCardFooter>call all micro service</CCardFooter>
      </CCard>
    </>
  )
}

export default SavedCategories
