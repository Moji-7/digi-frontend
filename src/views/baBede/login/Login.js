import { CButton, CFormInput } from '@coreui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserNameHint from './UserNameHint'

const Login = () => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [validationErrors, setValidationErrors] = useState([])
  const [loginloading, setLoginloading] = useState(false)
  const navigate = useNavigate()
  // const [password, setPassword] = useState()
  // const [password, setPassword] = useState()
  const handleSubmit = (e) => {
    e.preventDefault()
    const userdata = { user: username, password: password }
    loginDo(userdata)
  }
  const loginDo = async (userdata) => {
    setLoginloading((prev) => false)
    if (!username || !password) {
      setValidationErrors((prev) => [...prev, 'please input username & password'])
      return false
    }
    setLoginloading((prev) => true)
    console.log('wait...')
    setTimeout(() => {
      // const result = await axios.post('http://localhost:4000/login', userdata)
      setLoginloading(false)
      // console.log(result)
      navigate('/base')
    }, 2000)
  }
  useEffect(() => {
    console.log('loading..................')
  }, [loginloading])

  return (
    <div>
      Login
      <form onSubmit={(e) => handleSubmit(e)}>
        username
        <CFormInput
          name="username"
          onChange={(e) => setUsername((prev) => e.target.value)}
        ></CFormInput>
        password
        <CFormInput
          name="password"
          onChange={(e) => setPassword((prev) => e.target.value)}
        ></CFormInput>
        suggest user name
        <UserNameHint></UserNameHint>
        {validationErrors &&
          validationErrors.map((x, index) => (
            <>
              <span key={index}>{x}</span>
              <br />
            </>
          ))}
        <CButton type="submit">login</CButton>
        {loginloading ? 'loading' : 'loadedddddd'}
      </form>
    </div>
  )
}

export default Login
