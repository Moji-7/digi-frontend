import { useEffect, useState } from 'react'

const useDigiEventsService = () => {
  const [eventSp_5MorabaSelect, setEventSp_5MorabaSelect] = useState('')
  const [eventSp_4Bala_chartSelect, setEventSp_4Bala_chartSelect] = useState('')

  const sp_5MorabaClick = (sp_5Moraba) => {
    setEventSp_5MorabaSelect(sp_5Moraba)
  }
  const sp_4Bala_chartClick = (sp_4Bala_chart) => {
    setEventSp_4Bala_chartSelect(sp_4Bala_chart)
    console.log(sp_4Bala_chart)
  }

  return { sp_4Bala_chartClick, eventSp_4Bala_chartSelect, sp_5MorabaClick, eventSp_5MorabaSelect }
}
export default useDigiEventsService
