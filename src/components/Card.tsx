import { breakpoints } from '../constants'
import styled from 'styled-components';

const Card = styled.div`
  @media (min-width: ${breakpoints.xs}px) and (max-width: ${breakpoints.sm}px) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  @media (min-width: ${breakpoints.sm}px) and (max-width: ${breakpoints.lg}px) {
    margin-left: 3rem;
    margin-right: 3rem;
  }

  @media (min-width: ${breakpoints.lg}px) {
    margin-left: 6rem;
    margin-right: 6rem;
  }
`;

export default Card;
