import styled from 'styled-components'

import heroBackgroundImg from '../../assets/hero-background.png'

const CIRCLE_COLORS = {
  yellowDark: 'yellow-700',
  yellow: 'yellow-500',
  baseText: 'base-text',
  purple: 'purple-500',
} as const

interface IconCircleProps {
  circleColor: keyof typeof CIRCLE_COLORS
}

export const HomeContainer = styled.main`
  width: 100%;
`

export const HeroSection = styled.section`
  width: 100%;
  min-height: 34rem;

  background-image: url(${heroBackgroundImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  display: flex;
  align-items: center;
`

export const Grid = styled.div`
  width: 100%;
  max-width: 72rem;

  margin: 0 auto;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Content = styled.div`
  max-width: 38.75rem;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};

    margin-bottom: 1rem;
  }

  p {
    width: 90%;

    font-size: 1.25rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};

    margin-bottom: 4.125rem;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    display: grid;
    justify-content: flex-start;
    grid-template-columns: repeat(2, auto);
    gap: 20px 40px;

    li {
      display: flex;
      align-items: center;
      gap: 12px;

      span {
        color: ${(props) => props.theme['base-text']};
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

export const ImageContainer = styled.div`
  max-width: 29.75rem;

  img {
    width: 100%;
    max-width: 100%;

    display: block;
  }
`
