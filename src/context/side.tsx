import React, { createContext, useContext, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

type SideContextData = {
  getYourSide: () => void
  loading: boolean
}

type SideProviderProps = {
  children: React.ReactNode
}

const SideContext = createContext<SideContextData>({} as SideContextData)

const SideProvider = ({ children }: SideProviderProps) => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const baseUrl = 'https://swapi.dev/api/people'

  const getYourSide = useCallback(async () => {
    if (loading) return

    try {
      setLoading(true)
      const response = await Promise.race([
        fetch(`${baseUrl}/1`),
        fetch(`${baseUrl}/4`)
      ])
      const { name } = await response.json()

      const slug = name.replace(' ', '-').toLowerCase()

      navigate(slug)
    } catch {
      alert('An error has occurred, please try again.')
    } finally {
      setLoading(false)
    }
  }, [loading])

  return (
    <SideContext.Provider value={{ getYourSide, loading }}>
      {children}
    </SideContext.Provider>
  )
}

function useSide(): SideContextData {
  const context = useContext(SideContext)

  if (!context) {
    throw new Error('useSide must be used within a SideProvider')
  }

  return context
}

export { useSide, SideProvider }
