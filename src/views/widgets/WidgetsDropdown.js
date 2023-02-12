import React, { useContext, useEffect, useState } from 'react'
import {
  CButton,
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowTop, cilOptions } from '@coreui/icons'

import { dashboardContext } from '../dashboard/Dashboard'
import useDigiEventsService from '../../components/service/useDigiEventsService'
import useDigiStatefulService from '../../components/service/useDigiStatefulService'
import MyCategories from '../baBede/categories/MyCategories'

const WidgetsDropdown = () => {
  const colors = ['danger', 'info', 'success', 'primary']

  //let { sp_4Bala_chartClick } = useDigiEventsService()
  let {
    loading,
    error,
    fetchSp_4Bala,
    sp_4Bala,
    sp_4Bala_chartClick,
    fetchSp_4Bala_chart,
    sp_4Bala_chart,
  } = useContext(dashboardContext)
  const [chartData, setchartData] = useState([])

  useEffect(() => {
    fetchSp_4Bala_chart()
    //sp_4Bala_chart
    if (sp_4Bala_chart)
      setchartData((prev) => [
        ...prev,
        {
          item_category4:
            sp_4Bala && sp_4Bala.find((x) => x.item_category4 == 'لباس زنانه').item_category4,
          min: sp_4Bala_chart.map((x) => x.min),
          count: sp_4Bala_chart.map((x) => x.count),
        },
      ])
  }, [sp_4Bala])

  ////////////////////////////////////////////////////////////////////////

  // useEffect(() => {
  //   console.log(
  //     'Hi, from useDigiStatefyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyulService :)',
  //   )
  // }, [eventSp_4Bala_chartSelect])
  ////////////////////////////////////////////////////////////////////////

  return (
    <>
      <CRow>
        <CCol sm={6} lg={3}>
          <MyCategories></MyCategories>
        </CCol>
      </CRow>
      <CRow>
        {/* {loading && <p>loading...</p>}
      <ul className="list-group">
        {chartData &&
          chartData.map((tutorial, index) => <li key={index}>{tutorial.item_category4}</li>)}
      </ul>
      <button onClick={(e) => call_fetchSp_4Bala(e)}>call_fetchSp_4Bala</button>
      <h2>
        loading:{loading.toString()}
        result: {sp_4Bala && sp_4Bala.message}
      </h2> */}
        {sp_4Bala &&
          sp_4Bala.map((item, index) => (
            <CCol sm={6} lg={3} key={index}>
              <CWidgetStatsA
                className="mb-4"
                color={colors[index]}
                value={
                  <>
                    <CButton
                      color="light"
                      shape="rounded-pill"
                      onClick={(e) => sp_4Bala_chartClick(item)}
                    >
                      <span style={{ fontSize: '26px' }} className={'text-' + colors[index]}>
                        {item.item_category4}
                      </span>
                      <CIcon
                        fontWeight="fontWeightBold"
                        icon={cilArrowTop}
                        className={'font-bold text-' + colors[index]}
                      />
                    </CButton>

                    <div className="fs-6 fw-normal">
                      average price ({item.avg_rrp_price.toLocaleString()}
                      <CIcon icon={cilArrowBottom} />)
                    </div>
                  </>
                }
                title={'Total:' + item.count}
                action={
                  <CDropdown alignment="end">
                    <CDropdownToggle color="transparent" caret={false} className="p-0">
                      <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
                    </CDropdownToggle>
                    <CDropdownMenu>
                      <CDropdownItem>Action</CDropdownItem>
                      <CDropdownItem>Another action</CDropdownItem>
                      <CDropdownItem>Something else here...</CDropdownItem>
                      <CDropdownItem disabled>Disabled action</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                }
                chart={
                  chartData && (
                    //chartData.find((x) => x.item_category4 == 'لباyس زنانه')
                    <CChartLine
                      className="mt-3 mx-3"
                      style={{ height: '70px' }}
                      data={{
                        labels:
                          chartData ??
                          chartData.find((x) => x.item_category4 == sp_4Bala.item_category4).min,
                        datasets: [
                          {
                            label: 'my minimun price',
                            backgroundColor: 'transparent',
                            borderColor: 'rgba(255,255,255,.55)',
                            pointBackgroundColor: getStyle('--cui-primary'),
                            data:
                              chartData ??
                              chartData.find((x) => x.item_category4 == sp_4Bala.item_category4)
                                .count,
                          },
                        ],
                      }}
                      options={{
                        plugins: {
                          legend: {
                            display: false,
                          },
                        },
                        maintainAspectRatio: false,
                        scales: {
                          x: {
                            grid: {
                              display: false,
                              drawBorder: false,
                            },
                            ticks: {
                              display: false,
                            },
                          },
                          y: {
                            min: 0,
                            max: 110,
                            display: false,
                            grid: {
                              display: false,
                            },
                            ticks: {
                              display: false,
                            },
                          },
                        },
                        elements: {
                          line: {
                            borderWidth: 1,
                            tension: 0.4,
                          },
                          point: {
                            radius: 4,
                            hitRadius: 10,
                            hoverRadius: 4,
                          },
                        },
                      }}
                    />
                    //tamam
                  )
                }
              />
            </CCol>
          ))}
        {/* <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="info"
          value={
            <>
              $6.200{' '}
              <span className="fs-6 fw-normal">
                (40.9% <CIcon icon={cilArrowTop} />)
              </span>
            </>
          }
          title="Income"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
          chart={
            <CChartLine
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointBackgroundColor: getStyle('--cui-info'),
                    data: [1, 18, 9, 17, 34, 22, 11],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawBorder: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    min: -9,
                    max: 39,
                    display: false,
                    grid: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
                elements: {
                  line: {
                    borderWidth: 1,
                  },
                  point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
            />
          }
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="warning"
          value={
            <>
              2.49{' '}
              <span className="fs-6 fw-normal">
                (84.7% <CIcon icon={cilArrowTop} />)
              </span>
            </>
          }
          title="Conversion Rate"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
          chart={
            <CChartLine
              className="mt-3"
              style={{ height: '70px' }}
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(255,255,255,.2)',
                    borderColor: 'rgba(255,255,255,.55)',
                    data: [78, 81, 80, 45, 34, 12, 40],
                    fill: true,
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    display: false,
                  },
                  y: {
                    display: false,
                  },
                },
                elements: {
                  line: {
                    borderWidth: 2,
                    tension: 0.4,
                  },
                  point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
            />
          }
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="danger"
          value={
            <>
              44K{' '}
              <span className="fs-6 fw-normal">
                (-23.6% <CIcon icon={cilArrowBottom} />)
              </span>
            </>
          }
          title="Sessions"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
          chart={
            <CChartBar
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                  'August',
                  'September',
                  'October',
                  'November',
                  'December',
                  'January',
                  'February',
                  'March',
                  'April',
                ],
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(255,255,255,.2)',
                    borderColor: 'rgba(255,255,255,.55)',
                    data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
                    barPercentage: 0.6,
                  },
                ],
              }}
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
                      display: false,
                      drawTicks: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    grid: {
                      display: false,
                      drawBorder: false,
                      drawTicks: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
              }}
            />
          }
        />
      </CCol> */}
      </CRow>
    </>
  )
}

export default WidgetsDropdown
