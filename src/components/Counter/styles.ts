import styled from 'styled-components'

export const CounterContainer = styled.div`
  display: flex;

  max-width: 4.5rem;

  span {
    width: 1.75rem;

    padding: 0.75rem 0.25rem;

    background-color: ${(props) => props.theme['base-button']};

    text-align: center;

    color: ${(props) => props.theme['base-title']};
  }
`

const Button = styled.button`
  border: 0;
  padding: 0.75rem 0;

  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['purple-500']};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme['purple-700']};
  }
`

export const MinusButton = styled(Button)`
  border-bottom-left-radius: 6px;
  border-top-left-radius: 6px;

  padding-left: 0.5rem;
`

export const PlusButton = styled(Button)`
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;

  padding-right: 0.5rem;
`
