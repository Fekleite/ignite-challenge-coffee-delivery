import styled from 'styled-components'

export const Card = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;

  padding: 0.5rem 0.25rem 2rem 0.5rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const ProductImage = styled.div`
  max-width: 4rem;

  img {
    width: 100%;
    max-width: 100%;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  > span {
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Actions = styled.div`
  display: flex;
  gap: 8px;

  > div {
    button,
    span {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }
  }

  > button {
    display: flex;
    align-items: center;
    gap: 4px;

    padding: 0.25rem 0.5rem;

    background-color: ${(props) => props.theme['base-button']};
    border-radius: 6px;
    border: 0;

    span {
      font-size: 12px;
      text-transform: uppercase;

      color: ${(props) => props.theme['base-text']};
    }

    svg {
      color: ${(props) => props.theme['purple-500']};
    }

    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme['base-hover']};

      span {
        color: ${(props) => props.theme['base-subtitle']};
      }

      svg {
        color: ${(props) => props.theme['purple-700']};
      }
    }
  }
`

export const Price = styled.div`
  span {
    font-weight: 700;

    color: ${(props) => props.theme['base-text']};
  }
`
