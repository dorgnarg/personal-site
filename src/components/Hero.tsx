import type { FC } from 'react';
import FitText from './FitText';
import { ArrowDown } from 'react-feather';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

const HeroHashLink = styled(HashLink)`
  color: white;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  padding: 0;
  margin: 0;
  &:hover {
    background-color: inherit;
    color: inherit
  }
`;

interface HeroProps {
  text: string;
  scrollTo?: string;
}

const Hero: FC<HeroProps> = ({ text, scrollTo = 'content' }) => (
  <div
    style={{
      height: '70vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    }}
  >
    <div style={{ flex: 1 }} />
    <div
      style={{
        padding: '0 12px',
        width: '100%',
      }}
    >
      <FitText
        className="redaction"
        maxFontSize={150}
      >
        {text}
      </FitText>
    </div>
    <div style={{ flex: 1 }} />
    <div
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 24,
      }}
    >
      <HeroHashLink smooth to={`#${scrollTo}`} style={{ display: 'flex', alignItems: 'center' }}>
        <ArrowDown style={{ paddingRight: 6 }} />
        Scroll
      </HeroHashLink>
    </div>
  </div>
);

export default Hero;
