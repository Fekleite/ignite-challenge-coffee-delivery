import styled from 'styled-components'

export const Card = styled.div`
  max-width: 16rem;

  background-color: ${(props) => props.theme['base-card']};

  border-radius: 6px 36px;
  padding: 5rem 1.25rem 1.25rem;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;

    text-align: center;

    color: ${(props) => props.theme['base-subtitle']};

    margin-bottom: 0.5rem;
  }

  > span {
    font-size: 0.875rem;
    line-height: 130%;
    text-align: center;
    color: ${(props) => props.theme['base-label']};
  }
`

export const ImageContainer = styled.div`
  position: absolute;
  top: -20px;

  img {
    display: block;
  }
`

export const Badges = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 4px;

  padding: 0.75rem 0;

  span {
    padding: 0.25rem 0.5rem;
    border-radius: 100px;

    background-color: ${(props) => props.theme['yellow-300']};

    font-weight: 700;
    font-size: 0.625rem;
    line-height: 130%;
    text-transform: uppercase;

    color: ${(props) => props.theme['yellow-700']};
  }
`

export const Footer = styled.div`
  width: 100%;
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 4px;

  small {
    font-size: 0.875rem;

    color: ${(props) => props.theme['base-text']};
  }

  span {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.5rem;

    color: ${(props) => props.theme['base-text']};
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const BuyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme['purple-700']};
  color: ${(props) => props.theme['base-card']};

  padding: 0.5rem;
  border-radius: 6px;
  border: 0;

  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: ${(props) => props.theme['purple-500']};
  }
`
