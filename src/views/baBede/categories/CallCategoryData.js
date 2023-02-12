import React from 'react'
import PropTypes from 'prop-types'
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
import useMicroserviceCategory from './useMicroserviceCategory'

const CallCategoryData = (props) => {
  const { category } = props

  //call micro service
  const { micro_categoryData, microcategoryData, setMicrocategoryData } = useMicroserviceCategory()
  const service_call_category = (category) => {
    micro_categoryData(category)
    console.log(category.category)
  }
  return (
    <>
      <CButton
        color="light"
        shape="rounded-pill"
        onClick={() => service_call_category({ category })}
      >
        call micro service
      </CButton>
    </>
  )
}

CallCategoryData.propTypes = { category: PropTypes.object }
export default CallCategoryData
