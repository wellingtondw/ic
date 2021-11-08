import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import darthVaderImg from '../../assets/images/darth-vader.png'
import lukeSkywalkerImg from '../../assets/images/luke-skywalker.png'

import { Avatar } from '../../components/Avatar'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'

import * as S from './styles'

export const SelectedSide = () => {
  const { pathname } = useLocation()
  const isDarthSide = pathname.replace('/', '') === 'darth-vader'

  return (
    <S.Wrapper isDarthSide={isDarthSide}>
      <Header backButtonVariant={isDarthSide ? 'light' : 'dark'} />
      <S.Main>
        <Avatar src={isDarthSide ? darthVaderImg : lukeSkywalkerImg} />
        <S.MasterTitle>
          Your master is
          <strong>{`${
            isDarthSide ? 'Darth Vader' : 'Luke Skywalker'
          } `}</strong>
        </S.MasterTitle>
        <Button variant={isDarthSide ? 'light' : 'dark'}>
          choose your path again, Padawan
        </Button>
      </S.Main>
    </S.Wrapper>
  )
}
