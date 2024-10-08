import React from 'react'
import styled from 'styled-components'
import { styles } from '@/app/styles'

const Main = styled.main`
  width: 720px;
  height: 480px;
  padding: 24px;
  border-radius: ${styles.borderRadius.medium};
  background-color: ${styles.backgroundColor.default};
  box-shadow: ${styles.boxShadow.primary};
`

interface Props {
  children: React.ReactNode
}

export function CreateTodolist({ children }: Props) {
  return <Main>{children}</Main>
}
