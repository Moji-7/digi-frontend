import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { CWidgetStatsD, CRow, CCol } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cibFacebook, cibLinkedin, cibTwitter, cilCalendar, cibFlask } from '@coreui/icons'
import { CChart } from '@coreui/react-chartjs'
import { dashboardContext } from '../dashboard/Dashboard'

const WidgetsBrand = ({ withCharts }) => {
  const chartOptions = {
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
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  }
  const colors = ['#3bf998', '#9b0998', '#3b1cc8', '#f22998']
  let {
    loading,
    error,
    fetchSp_4By_Seller_category,
    sp_4By_Seller_category,
    eventSp_5MorabaSelect,
  } = useContext(dashboardContext)
  const [chartData, setchartData] = useState([])

  useEffect(() => {
    fetchSp_4By_Seller_category()
    console.log(eventSp_5MorabaSelect.seller)
  }, [eventSp_5MorabaSelect])

  return (
    <CRow>
      {sp_4By_Seller_category &&
        sp_4By_Seller_category.map((item, index) => (
          <CCol sm={6} lg={5} key={index}>
            <CWidgetStatsD
              className="mb-4"
              about="ssss"
              icon={<CIcon icon={cibFlask} height={12} className="my-4 text-white" />}
              values={[
                { title: '', value: item.item_category4 },

                { title: 'count', value: item.count },

                { title: 'avg off', value: item.avg_discount + '%' },
                { title: 'avg $', value: item.avg_price.toLocaleString() },

                { title: 'avg rate', value: item.avg_rating_rate },
              ]}
              style={{
                '--cui-card-cap-bg': colors[index],
              }}
            />
          </CCol>
        ))}
      {/* <CCol sm={6} lg={3}>
<CWidgetStatsD
className="mb-4"
color="warning"
{...(withCharts && {
chart: (
  <CChart
    className="position-absolute w-100 h-100"
    type="line"
    data={{
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          backgroundColor: 'rgba(255,255,255,.1)',
          borderColor: 'rgba(255,255,255,.55)',
          pointHoverBackgroundColor: '#fff',
          borderWidth: 2,
          data: [35, 23, 56, 22, 97, 23, 64],
          fill: true,
        },
      ],
    }}
    options={chartOptions}
  />
),
})}
icon={<CIcon icon={cilCalendar} height={52} className="my-4 text-white" />}
values={[
{ title: 'events', value: '12+' },
{ title: 'meetings', value: '4' },
]}
/>
</CCol> */}
    </CRow>
  )
}

WidgetsBrand.propTypes = {
  withCharts: PropTypes.bool,
}

export default WidgetsBrand
