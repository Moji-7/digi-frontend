import React, { Component } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import userEvent from '@testing-library/user-event'
import { renderHook, act } from '@testing-library/react'

import MyCategories from './MyCategories'
//
import useCategoryContext from './useCategoryContext'
//import axios from 'axios'
//const axios = jest.mock('axios')

describe('this is my category ui and context creation', () => {})
//beforeAll('', () => {})

// for render
it('should have text', () => {
  render(<MyCategories />)
  const content = screen.getByText(/MyCategories/i)
  expect(content).toBeInTheDocument()
  //myCategory.dom().contains().tobetruely()
})

//for event DOM
it('context has mock with length', () => {
  const { result } = renderHook(() => useCategoryContext())
  expect(result.current.allCategory).toHaveLength(5)
})

//for mock data
it('render all data', () => {
  // axios.get.mockImplementation(() =>
  //   Promise.resolve({ data: [{ username: 'ali' }, { username: 'moji' }] }),
  // )
  // const allli = screen.getAllByRole('li')
  //expect(allli).toHaveLength(3)
})

//for mock service
it('button click', () => {
  render(<MyCategories />)

  const myInitialState = 'mojtaba'
  React.useState = jest.fn().mockReturnValue([myInitialState, {}])

  const button = screen.getByRole('button', { name: /my button/i })
  const myInput = screen.getByTestId('myInput')
  //const myInput = screen.getByRole('input', { name: /myInput/i })
  fireEvent.click(button)

  //render(<MyCategories />)

  //
  act(() => {
    fireEvent.change(myInput)
  })
  expect(myInput).toHaveTextContent('mojtaba')
})

//for mock import
it('', () => {})
