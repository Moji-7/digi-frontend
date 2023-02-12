import React, { createContext, useEffect, useState } from 'react'
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CWidgetStatsF,
  CTooltip,
  CLink,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
  cilBorderAll,
  cilBorderBottom,
  cilBorderClear,
  cilBorderHorizontal,
  cilBorderInner,
  cilBorderLeft,
  cilBorderOuter,
  cilBorderRight,
  cilBorderStyle,
  cilBorderTop,
  cilBorderVertical,
  cilBell,
  cilMoon,
  cilSettings,
  cilPin,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'

import useContextService from '../../components/service/useContextService'
import useDigiStatefulService from '../../components/service/useDigiStatefulService'
import useDigiEventsService from '../../components/service/useDigiEventsService'
import Login from '../baBede/login/Login'

export const dashboardContext = createContext()
const Dashboard = () => {
  const useContextServiceVals = useContextService({
    method: 'GET',
    url: '/random',
    // params: {
    //   title: '?page=1&sort=26',
    // },
  })
  //get event handler and state values
  // let { sp_4Bala_chartClick, eventSp_4Bala_chartSelect, sp_5MorabaClick, eventSp_5MorabaSelect } =
  //   useDigiEventsService()
  const useDigiEventsServiceVals = useDigiEventsService()

  const {
    dataAll,
    loading,
    error,
    fetchSp_myCategories,
    sp_myCategories,
    fetchSp_4Bala,
    sp_4Bala,
    fetchSp_5Moraba,
    sp_5Moraba,
    fetchSp_4By_Seller_category,
    sp_4By_Seller_category,
    fetchSp_line_right_A,
    sp_line_right_A,
    fetchSp_line_right_B,
    sp_line_right_B,
    fetchSp_line_left,
    sp_line_left,
    fetchSp_table_below,
    sp_table_below,

    fetchSp_4Bala_chart,
    sp_4Bala_chart,
  } = useContextServiceVals
  const { sp_4Bala_chartClick, eventSp_4Bala_chartSelect, sp_5MorabaClick, eventSp_5MorabaSelect } =
    useDigiEventsServiceVals

  useDigiStatefulService(useContextServiceVals, useDigiEventsServiceVals)

  // set the context values
  const contextValue = {
    dataAll,
    loading,
    error,
    fetchSp_4Bala,
    sp_4Bala,
    fetchSp_5Moraba,
    sp_5Moraba,
    fetchSp_4By_Seller_category,
    sp_4By_Seller_category,
    fetchSp_line_right_A,
    sp_line_right_A,
    fetchSp_line_right_B,
    sp_line_right_B,
    fetchSp_line_left,
    sp_line_left,
    fetchSp_table_below,
    sp_table_below,

    //events exposing
    fetchSp_4Bala_chart,
    sp_4Bala_chart,
    sp_4Bala_chartClick,
    eventSp_5MorabaSelect,
  }

  /////////////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    if (dataAll)
      // setTutorials(dataAll)
      console.log(dataAll)
    // } else {
    //   setTutorials([])
    // }
  }, [dataAll])

  useEffect(() => {
    if (error) {
      console.log(error)
    }
  }, [error])

  useEffect(() => {
    if (loading) {
      console.log('retrieving data...')
    }
  }, [loading])

  //////////////////////////////////////////////////////////////////////////////////////////////////
  const percentage = (partialValue, totalValue) => {
    return ((100 * partialValue) / totalValue).toFixed(0)
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////
  //sp_line_leftSum
  const [sp_line_leftSum, setSp_line_leftSum] = useState({
    count_in_priceCategory: 0,
    count_discount_in_priceCategory: 0,
  })
  useEffect(() => {
    if (sp_line_left)
      setSp_line_leftSum((prev) => ({
        count_in_priceCategory: sp_line_left.reduce(function (prev, cur) {
          return prev + +cur.count_in_priceCategory
        }, 0),
        count_discount_in_priceCategory: sp_line_left.reduce(function (prev, cur) {
          return prev + +cur.count_discount_in_priceCategory
        }, 0),
        // ),
      }))
  }, [sp_line_left])
  //////////////////////////////////////////////////////////////////////////////////////////////////
  //sp_line_right_ASum
  const [sp_line_right_ASum, setSp_line_right_ASum] = useState({
    count_discount_upper66: 0,
    percent_discount_upper66: 0,
    count_discount_below66: 0,
    percent_discount_below66: 0,
    count_all: 0,
  })
  useEffect(() => {
    if (sp_line_right_A)
      setSp_line_right_ASum((prev) => ({
        count_discount_upper66: sp_line_right_A.reduce(
          (p, c) => (c.discount_category === 'upper66' ? p + +c.count : p),
          0,
        ),

        count_discount_below66: sp_line_right_A.reduce(
          (p, c) => (c.discount_category === 'below66' ? p + +c.count : p),
          0,
        ),
        count_all: sp_line_right_A.reduce((p, c) => p + +c.count, 0),
      }))
  }, [sp_line_right_A])
  //////////////////////////////////////////////////////////////////////////////////////////////////
  //sp_line_right_ASum
  const [sp_line_right_BSum, setSp_line_right_BSum] = useState({
    //count_in_ratingCategory: 0,
    count_all: 0,
  })
  useEffect(() => {
    if (sp_line_right_B)
      setSp_line_right_BSum((prev) => ({
        // count_in_ratingCategory: sp_line_right_B.reduce(function (prev, cur) {
        //   return prev + +cur.count_in_ratingCategory
        // }, 0),
        count_all: sp_line_right_B.reduce((p, c) => p + +c.count_in_ratingCategory, 0),
      }))
  }, [sp_line_right_B])
  const sp_line_right_B_icons = [
    cilBorderAll,
    cilBorderBottom,
    cilBorderClear,
    cilBorderHorizontal,
    cilBorderInner,
    cilBorderLeft,
    cilBorderOuter,
    cilBorderRight,
    cilBorderStyle,
    cilBorderTop,
    cilBorderVertical,
  ]
  /////////////////////////////////////////////////////////////////////////////////////////////
  const colors = ['primary', 'danger', 'info', 'success', 'warning']
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  /////////

  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'Yiorgos Avraamu',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'USA', flag: cifUs },
      usage: {
        value: 50,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'Avram Tarasios',
        new: false,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Brazil', flag: cifBr },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'India', flag: cifIn },
      usage: {
        value: 74,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cibCcStripe },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'France', flag: cifFr },
      usage: {
        value: 98,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cibCcPaypal },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        name: 'Agapetus Tadeáš',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Spain', flag: cifEs },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cibCcApplePay },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'Friderik Dávid',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Poland', flag: cifPl },
      usage: {
        value: 43,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cibCcAmex },
      activity: 'Last week',
    },
  ]
  const iconSide = (
    <CIcon
      fontWeight="fontWeightBold"
      icon={cilPin}
      className={'font-bold text-' + colors[2]}
    ></CIcon>
  )

  return (
    <dashboardContext.Provider value={contextValue}>
      <Login></Login>
      <WidgetsDropdown />
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              {/* {sp_line_right_A &&
                sp_line_right_A.map((item, index) => <span key={index}>{item.count}</span>)} */}
              <h4 id="traffic" className="card-title mb-0">
                Price and discount
              </h4>
              <div className="small text-medium-emphasis">
                y axis is: (counts)
                <hr />x axis is: (price)
              </div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['Day', 'Month', 'Year'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 'Month'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: '300px', marginTop: '40px' }}
            data={{
              labels:
                sp_line_left &&
                sp_line_left.map((item, index) => {
                  return item.min.toLocaleString()
                }),
              //labels: ['January', 'February', 'March', 'April', 'May'],
              datasets: [
                // sp_line_left.map((item, index) => (
                {
                  label: ' count in price Category',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-danger'),
                  pointHoverBackgroundColor: getStyle('--cui-danger'),
                  borderWidth: 1,
                  borderDash: [8, 5],
                  data:
                    sp_line_left && sp_line_left.map((item, index) => item.count_in_priceCategory),
                  fill: true,
                },
                {
                  label: 'count with discount in priceCategory',
                  backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                  borderColor: getStyle('--cui-success'),
                  pointHoverBackgroundColor: getStyle('--cui-success'),
                  borderWidth: 2,
                  data:
                    sp_line_left &&
                    sp_line_left.map((item, index) => item.count_discount_in_priceCategory),
                  fill: true,
                },
              ],
            }}
            // data={{

            //labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            //datasets: [
            //[
            //   {
            //     label: 'My First dataset',
            //     backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
            //     borderColor: getStyle('--cui-info'),
            //     pointHoverBackgroundColor: getStyle('--cui-info'),
            //     borderWidth: 2,
            //     data: [
            //       random(50, 200),
            //       random(50, 200),
            //       random(50, 200),
            //       random(50, 200),
            //       random(50, 200),
            //       random(50, 200),
            //       random(50, 200),
            //     ],
            //     fill: true,
            //   },
            //   {
            //     label: 'My Second dataset',
            //     backgroundColor: 'transparent',
            //     borderColor: getStyle('--cui-success'),
            //     pointHoverBackgroundColor: getStyle('--cui-success'),
            //     borderWidth: 2,
            //     data: [
            //       random(50, 200),
            //       random(50, 200),
            //       random(50, 200),
            //       random(50, 200),
            //       random(50, 200),
            //       random(50, 200),
            //       random(50, 200),
            //     ],
            //   },
            //   {
            //     label: 'My Third dataset',
            //     backgroundColor: 'transparent',
            //     borderColor: getStyle('--cui-danger'),
            //     pointHoverBackgroundColor: getStyle('--cui-danger'),
            //     borderWidth: 1,
            //     borderDash: [8, 5],
            //     data: [65, 65, 65, 65, 65, 65, 65],
            //   },
            // ],
            // }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </CCardBody>
        <CCardFooter>
          <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="text-center">
            {sp_5Moraba &&
              sp_5Moraba.map((item, index) => (
                <CCol className="mb-sm-2 mb-0" key={index}>
                  <div className="text-medium-emphasis ">
                    <CButton
                      color="light"
                      shape="rounded-pill"
                      onClick={(e) => sp_5MorabaClick(item)}
                    >
                      <span style={{ fontSize: '26px' }} className={'text-' + colors[index]}>
                        {item.seller}
                      </span>
                      <CIcon
                        fontWeight="fontWeightBold"
                        icon={cilPeople}
                        className={'font-bold text-' + colors[index]}
                      />
                    </CButton>
                    <br />
                    <CTooltip content="asset">
                      <CLink>
                        <span>
                          {iconSide}
                          {item.seller_count}
                        </span>
                      </CLink>
                    </CTooltip>
                    <span style={{ margin: '12px' }}>|</span>
                    <CTooltip content="avg price">
                      <CLink>
                        <span>
                          {iconSide}
                          {item.avg_rrp_price.toLocaleString()}
                        </span>
                      </CLink>
                    </CTooltip>
                  </div>
                  {/* rating count {item.sum_rating_count}  */}
                  commitment:
                  <strong>
                    <CTooltip content={'rate count: ' + item.sum_rating_count.toLocaleString()}>
                      <CLink> ({item.sum_rating_percent}%) </CLink>
                    </CTooltip>
                  </strong>
                  <CProgress
                    thin
                    className="mt-2"
                    color={colors[2]}
                    value={item.sum_rating_percent}
                  />
                </CCol>
              ))}
          </CRow>
        </CCardFooter>
      </CCard>

      <WidgetsBrand withCharts />

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Prices {' & '} discount</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <strong>All items(Seprated by Price & discount)</strong>
                </CCol>

                <CCol xs={12} md={6} xl={6}>
                  <strong>All items(Seprated by discount or seller rate)</strong>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">Total items</div>
                        <div className="fs-5 fw-semibold">
                          {sp_line_leftSum && sp_line_leftSum.count_in_priceCategory}
                        </div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Has discount</div>
                        <div className="fs-5 fw-semibold">
                          {sp_line_leftSum && sp_line_leftSum.count_discount_in_priceCategory}
                        </div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />
                  {sp_line_left &&
                    sp_line_left.map((item, index) => (
                      <div className="progress-group mb-4" key={index}>
                        <div className="progress-group-prepend">
                          <span className="text-medium-emphasis small">
                            {item.min.toLocaleString() + '-' + item.max.toLocaleString()}
                          </span>
                        </div>
                        <div className="progress-group-bars">
                          <CProgress
                            thin
                            color="info"
                            animated
                            value={percentage(
                              item.count_in_priceCategory,
                              sp_line_leftSum.count_in_priceCategory,
                            )}
                          />
                          <CProgress
                            thin
                            animated
                            color="danger"
                            value={percentage(
                              item.count_discount_in_priceCategory,
                              sp_line_leftSum.count_discount_in_priceCategory,
                            )}
                          />
                        </div>
                      </div>
                    ))}
                </CCol>

                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">discount (total)</div>
                        <div className="fs-5 fw-semibold">
                          {sp_line_right_ASum && sp_line_right_ASum.count_all}
                        </div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">rate (total)</div>
                        <div className="fs-5 fw-semibold">
                          {sp_line_right_BSum && sp_line_right_BSum.count_all}
                        </div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  {
                    sp_line_right_ASum && (
                      //sp_line_right_ASum.map((item, index) => (
                      <>
                        <div className="progress-group mb-4">
                          <div className="progress-group-header">
                            <CIcon className="me-2" icon="cil-burn" size="lg" />
                            <span>discount upper 66%</span>
                            <span className="ms-auto fw-semibold">
                              {percentage(
                                sp_line_right_ASum.count_discount_upper66,
                                sp_line_right_ASum.count_all,
                              )}
                              %
                            </span>
                          </div>
                          <div className="progress-group-bars">
                            <CProgress
                              thin
                              color="warning"
                              value={percentage(
                                sp_line_right_ASum.count_discount_upper66,
                                sp_line_right_ASum.count_all,
                              )}
                            />
                          </div>

                          <div className="progress-group-bars">
                            <CProgress
                              thin
                              color="warning"
                              value={percentage(
                                sp_line_right_ASum.count_discount_upper66,
                                sp_line_right_ASum.count_all,
                              )}
                            />
                          </div>
                        </div>
                        <div className="progress-group mb-4">
                          <div className="progress-group-header">
                            <CIcon className="me-2" icon="cil-burn" size="lg" />
                            <span>discount less 66%</span>
                            <span className="ms-auto fw-semibold">
                              {percentage(
                                sp_line_right_ASum.count_discount_below66,
                                sp_line_right_ASum.count_all,
                              )}
                              %
                            </span>
                          </div>
                          <div className="progress-group-bars">
                            <CProgress
                              thin
                              color="warning"
                              value={percentage(
                                sp_line_right_ASum.count_discount_below66,
                                sp_line_right_ASum.count_all,
                              )}
                            />
                          </div>

                          <div className="progress-group-bars">
                            <CProgress
                              thin
                              color="warning"
                              value={percentage(
                                sp_line_right_ASum.count_discount_below66,
                                sp_line_right_ASum.count_all,
                              )}
                            />
                          </div>
                        </div>
                      </>
                    )
                    //))
                  }

                  <div className="mb-5">
                    {/* all:{sp_line_right_BSum && sp_line_right_BSum.count_all} */}
                  </div>

                  {sp_line_right_B &&
                    sp_line_right_B.map((item, index) => (
                      <div className="progress-group" key={index}>
                        <div className="progress-group-header">
                          <CIcon className="me-2" icon={sp_line_right_B_icons[index]} size="lg" />
                          Rate
                          <span>({item.min + '-' + item.max})</span>
                          <span className="ms-auto fw-semibold">
                            {item.count_in_ratingCategory}
                            <span className="text-medium-emphasis small">
                              (
                              {percentage(
                                item.count_in_ratingCategory,
                                sp_line_right_BSum.count_all,
                              )}
                              %)
                            </span>
                          </span>
                        </div>
                        <div className="progress-group-bars">
                          <CProgress
                            thin
                            color="success"
                            value={percentage(
                              item.count_in_ratingCategory,
                              sp_line_right_BSum.count_all,
                            )}
                          />
                        </div>
                      </div>
                    ))}
                </CCol>
              </CRow>

              <br />

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>User</CTableHeaderCell>
                    {/* <CTableHeaderCell className="text-center">Country</CTableHeaderCell> */}
                    <CTableHeaderCell>Usage</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Payment Method</CTableHeaderCell>
                    {/* <CTableHeaderCell>Activity</CTableHeaderCell> */}
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div style={{ whiteSpace: 'nowrap' }}>{item.user.name}</div>
                        <div className="small text-medium-emphasis">
                          {/* <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                          {item.user.registered} */}
                          all sells 2348
                          <br /> avg price 448863
                        </div>
                      </CTableDataCell>
                      {/* <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.country.flag} title={item.country.name} />
                      </CTableDataCell> */}
                      <CTableDataCell>
                        <div className="clearfix">
                          <div className="float-start">
                            <strong>{item.usage.value}%</strong>
                          </div>
                          <div className="float-end">
                            <small className="text-medium-emphasis">
                              rating counts: {item.usage.period}
                            </small>
                          </div>
                        </div>
                        <CProgress thin color={item.usage.color} value={item.usage.value} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        {/* <CIcon size="xl" icon={item.payment.icon} /> */}
                        <CRow>
                          <CCol xs={6} sm={6} lg={3}>
                            <CWidgetStatsF
                              className="mb-1"
                              icon={<CIcon width={24} icon={cilSettings} size="m" />}
                              title="income"
                              value="$1.999,50"
                              color="primary"
                            />
                          </CCol>
                          <CCol xs={12} sm={6} lg={3}>
                            <CWidgetStatsF
                              className="mb-3"
                              icon={<CIcon width={24} icon={cilUser} size="xl" />}
                              title="income"
                              value="$1.999,50"
                              color="info"
                            />
                          </CCol>
                          <CCol xs={12} sm={6} lg={3}>
                            <CWidgetStatsF
                              className="mb-3"
                              icon={<CIcon width={24} icon={cilMoon} size="xl" />}
                              title="income"
                              value="$1.999,50"
                              color="warning"
                            />
                          </CCol>
                          <CCol xs={12} sm={6} lg={3}>
                            <CWidgetStatsF
                              className="mb-3"
                              icon={<CIcon width={24} icon={cilBell} size="xl" />}
                              title="income"
                              value="$1.999,50"
                              color="danger"
                            />
                          </CCol>
                        </CRow>
                      </CTableDataCell>
                      {/* <CTableDataCell>
                        <div className="small text-medium-emphasis">Last login</div>
                        <strong>{item.activity}</strong>
                      </CTableDataCell> */}
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </dashboardContext.Provider>
  )
}

export default Dashboard
