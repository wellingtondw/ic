/* eslint-disable @typescript-eslint/no-explicit-any */
import fetchMock from 'jest-fetch-mock'
import { renderHook } from '@testing-library/react-hooks'
import { useSide, SideProvider } from './index'
import { act } from '@testing-library/react'

window.alert = jest.fn()
const mockedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockedNavigate
}))

describe('Side Context', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })

  it('should be able to redirect luke side', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ name: 'Luke Skywalker' }))

    const { result, waitFor } = renderHook(() => useSide(), {
      wrapper: SideProvider
    })

    await act(() => result.current.getYourSide())

    await waitFor(() => {
      expect(mockedNavigate).toBeCalledWith('luke-skywalker')
    })
  })

  it('should be able to redirect darth side', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ name: 'Darth Vader' }))
    const { result, waitFor } = renderHook(() => useSide(), {
      wrapper: SideProvider
    })

    await act(() => result.current.getYourSide())

    await waitFor(() => {
      expect(mockedNavigate).toBeCalledWith('darth-vader')
    })
  })

  it('should be able to render alert error', async () => {
    fetchMock.mockRejectOnce(new Error('error'))
    const alert = jest.spyOn(window, 'alert')

    const { result, waitFor } = renderHook(() => useSide(), {
      wrapper: SideProvider
    })

    await act(() => result.current.getYourSide())

    await waitFor(() => {
      expect(alert).toHaveBeenCalledTimes(1)
    })
  })
})
