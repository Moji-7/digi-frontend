import { useState, useEffect } from 'react'
import axios from 'axios'
import {
  sp_myCategories_mock,
  sp_4Bala_mock,
  sp_4Bala_chart_mock,
  sp_5Moraba_mock,
  sp_4By_Seller_category_mock,
  sp_line_left_mock,
  sp_line_right_A_mock,
  sp_line_right_B_mock,
  sp_table_below_mock,
} from './mockData.js'

//axios.defaults.baseURL = 'http://localhost:4000/digiapi'
axios.defaults.baseURL = 'https://dog.ceo/api/breeds/image'

const useContextService = (axiosParams) => {
  const [dataAll, setDataAll] = useState(undefined)
  const [sp_myCategories, setSp_myCategories] = useState([])
  const [sp_4Bala, setSp_4Bala] = useState(undefined)
  const [sp_5Moraba, setSp_5Moraba] = useState(undefined)
  const [sp_4By_Seller_category, setSp_4By_Seller_category] = useState(undefined)
  const [sp_line_left, setSp_line_left] = useState(undefined)
  const [sp_line_right_A, setSp_line_right_A] = useState(undefined)
  const [sp_line_right_B, setSp_line_right_B] = useState(undefined)
  const [sp_table_below, setSp_table_below] = useState(undefined)

  const [sp_4Bala_chart, setSp_4Bala_chart] = useState(undefined)

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  const fetchSp = async (which) => {
    try {
      setLoading(true)
      setTimeout(() => {
        console.log('waiting... this must be omit :)')
      }, 1100)
      const response = await axios.request(axiosParams)
      switch (which) {
        case 'sp_4Bala':
          return sp_4Bala_mock
        case 'sp_myCategories':
          return sp_myCategories_mock
        case 'sp_5Moraba':
          return sp_5Moraba_mock
        case 'sp_4Bala_chart':
          return sp_4Bala_chart_mock
        case 'sp_4By_Seller_category':
          return sp_4By_Seller_category_mock
        case 'sp_line_left':
          return sp_line_left_mock
        case 'sp_line_right_A':
          return sp_line_right_A_mock
        case 'sp_line_right_B':
          return sp_line_right_B_mock
        case 'sp_table_below':
          return sp_table_below_mock
        default:
          break
      }

      return await response.data
    } catch (error) {
      setError(error)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }

  const fetchSp_myCategories = async () => {
    let response = await fetchSp('sp_myCategories')
    setSp_myCategories(response)
  }
  const fetchSp_4Bala = async () => {
    let response = await fetchSp('sp_4Bala')
    setSp_4Bala(response)
  }
  const fetchSp_5Moraba = async () => {
    let response = await fetchSp('sp_5Moraba')
    setSp_5Moraba(response)
  }
  const fetchSp_4By_Seller_category = async () => {
    let response = await fetchSp('sp_4By_Seller_category')
    setSp_4By_Seller_category(response)
  }
  const fetchSp_line_left = async () => {
    let response = await fetchSp('sp_line_left')
    setSp_line_left(response)
  }
  const fetchSp_line_right_A = async () => {
    let response = await fetchSp('sp_line_right_A')
    setSp_line_right_A(response)
  }
  const fetchSp_line_right_B = async () => {
    let response = await fetchSp('sp_line_right_B')
    setSp_line_right_B(response)
  }
  const fetchSp_table_below = async () => {
    let response = await fetchSp('sp_table_below')
    setSp_table_below(response)
  }

  const fetchDataAll = async () => {
    let _dataAll = {}
    //start step sp_4Bala
    await fetchSp_4Bala()
    _dataAll.sp_4Bala = sp_4Bala
    //finish step sp_4Bala

    //start step sp_4Bala
    await fetchSp_5Moraba()
    _dataAll.sp_5Moraba = sp_5Moraba
    //finish step sp_4Bala

    //start step sp_4Bala
    // await fetchSp_4By_Seller_category()
    // _dataAll.sp_4By_Seller_category = sp_4By_Seller_category
    //finish step sp_4Bala

    //start step sp_4Bala
    await fetchSp_line_right_A()
    _dataAll.sp_line_right_A = sp_line_right_A
    //finish step sp_4Bala

    //start step sp_4Bala
    await fetchSp_line_right_B()
    _dataAll.sp_line_right_B = sp_line_right_B
    //finish step sp_4Bala

    //start step sp_4Bala
    await fetchSp_line_left()
    _dataAll.sp_line_left = sp_line_left
    //finish step sp_4Bala

    //start step sp_4Bala
    await fetchSp_table_below()
    _dataAll.sp_table_below = sp_table_below
    //finish step sp_4Bala

    //make all data
    setDataAll(_dataAll)
  }

  const fetchSp_4Bala_chart = async () => {
    setSp_4Bala_chart(await fetchSp('sp_4Bala_chart'))
  }

  useEffect(() => {
    fetchDataAll()
  }, [])

  return {
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
  }
}

export default useContextService
