import { CFormInput } from '@coreui/react'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

const UserNameHint = () => {
  const [users, setUsers] = useState([])
  const [inputUserName, setInputUserName] = useState('')
  const [userSuggests, setUserSuggests] = useState([])
  const handleSuggest = async (e) => {
    // debugger
    //await getSuggets()
    // setInputUserName(e.target.value)
    if (e.target.value.length >= 3) {
      await getSuggets(e.target.value)
      //setUserSuggests(users)
      // debugger
    }
  }

  const getSuggets = async (name) => {
    debugger
    //const fetchData = await axios.get('')
    const newFetchData = [{ name: 'ali' }, { name: 'amin' }, { name: 'reza' }]
    const filtered = newFetchData.filter((x) => x.name === name)
    setUserSuggests(filtered)
  }
  // useEffect(() => {
  //   return async () => {
  //     await getSuggets(inputUserName)
  //     setUserSuggests(userSuggests)
  //   }
  // }, [userSuggests])

  useEffect(() => {
    return async () => {
      if (inputUserName.length >= 3) {
        await getSuggets(inputUserName)
        //setUserSuggests(users)
        // debugger
      }
    }
  }, [inputUserName])

  useEffect(() => {
    const receivedData = [{ name: 'ali' }, { name: 'amin' }, { name: 'reza' }]
    setUsers(receivedData)
    setUserSuggests(users)
  }, [])
  return (
    <>
      UserNameHint
      <CFormInput
        name="userNameSuggest"
        // value={inputUserName}
        onChange={(e) => handleSuggest(e)}
      ></CFormInput>
      {inputUserName}
      {userSuggests && userSuggests.map((x, index) => <li key={index}>{x.name}</li>)}
    </>
  )
}

export default UserNameHint
