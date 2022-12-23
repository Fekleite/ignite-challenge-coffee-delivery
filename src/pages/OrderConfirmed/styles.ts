import styled from 'styled-components'

const CIRCLE_COLORS = {
  yellowDark: 'yellow-700',
  yellow: 'yellow-500',
  purple: 'purple-500',
} as const

interface IconCircleProps {
  circleColor: keyof typeof CIRCLE_COLORS
}

export const OrderConfirmedContainer = styled.main`
  width: 100%;

  padding: 6.5rem 0;
`

export const Grid = styled.div`
  width: 100%;
  max-width: 72rem;

  margin: 0 auto;
  padding: 5rem 1rem;

  display: flex;
  justify-content: space-between;
  gap: 20px;
`

export const Info = styled.div`
  h2 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;

    color: ${(props) => props.theme['yellow-700']};

    margin-bottom: 0.25rem;
  }

  > span {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  ul {
    margin-top: 2.5rem;

    position: relative;
    list-style: none;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;

    padding: 2.5rem;

    background-color: ${(props) => props.theme.background};
    border-radius: 6px 36px;

    &::after {
      content: '';

      position: absolute;
      top: -1px;
      bottom: -1px;
      left: -1px;
      right: -1px;

      background: linear-gradient(102.89deg, #dbac2c, #8047f8);
      border-radius: 7px 37px;

      z-index: -1;
    }

    li {
      display: flex;
      align-items: center;
      gap: 12px;

      span {
        line-height: 130%;
      }
    }
  }
`

export const IconCircle = styled.div<IconCircleProps>`
  background-color: ${(props) => props.theme[CIRCLE_COLORS[props.circleColor]]};
  color: ${(props) => props.theme.background};

  padding: 0.5rem;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Illustration = styled.div`
  width: 100%;
  max-width: 30.75rem;

  display: flex;
  align-items: flex-end;
`
