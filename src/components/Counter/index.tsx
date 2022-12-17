import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'

import { CounterContainer, MinusButton, PlusButton } from './styles'

export function Counter() {
  const [count, setCount] = useState(1)

  function handleAdd() {
    setCount((oldState) => oldState + 1)
  }

  function handleSub() {
    setCount((oldState) => {
      if (oldState === 0) {
        return 0
      }

      return oldState - 1
    })
  }

  return (
    <CounterContainer>
      <MinusButton title="Menos um" onClick={handleSub}>
        <Minus size={14} weight="bold" />
      </MinusButton>

      <span>{count}</span>

      <PlusButton title="Mais um" onClick={handleAdd}>
        <Plus size={14} weight="bold" />
      </PlusButton>
    </CounterContainer>
  )
}
