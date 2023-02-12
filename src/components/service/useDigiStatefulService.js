import { useContext, useEffect } from 'react'

// import { dashboardContext } from '../dashboard/Dashboard'
const useDigiStatefulService = (useContextServiceVals, useDigiEventsServiceVals) => {
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
  useEffect(() => {
    console.log(
      'Hi, from useDigiStatefyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyulService :)',
    )
    fetchSp_5Moraba()
    fetchSp_4By_Seller_category()
    fetchSp_line_left()
    fetchSp_line_right_A()
    fetchSp_line_right_B()
  }, [eventSp_4Bala_chartSelect])
}
export default useDigiStatefulService
