import type { FC } from 'react';
import styled from 'styled-components';

const H1 = styled('h1')`
  font-size: 2.67rem;
  font-weight: normal;
  white-space: nowrap;
`;

interface TitleProps {
  title: string;
}

const Title: FC<TitleProps> = ({ title }) => (
  <div
    style={{
      paddingBottom: 24,
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <H1 aria-hidden="true">
      <span style={{ fontFamily: 'redaction-35' }}>{title}</span>
      <span style={{ fontFamily: 'redaction-50' }}>{title}</span>
      <span style={{ fontFamily: 'redaction-70' }}>{title}</span>
      <span style={{ fontFamily: 'redaction-100' }}>{title}</span>
      <span style={{ fontFamily: 'redaction-70' }}>{title}</span>
      <span style={{ fontFamily: 'redaction-50' }}>{title}</span>
      <span style={{ fontFamily: 'redaction-35' }}>{title}</span>
    </H1>
    <H1 style={{ fontFamily: 'redaction' }}>{title}</H1>
    <H1 aria-hidden="true">
      <span style={{ fontFamily: 'redaction-35' }}>{title}</span>
      <span style={{ fontFamily: 'redaction-50' }}>{title}</span>
      <span style={{ fontFamily: 'redaction-70' }}>{title}</span>
      <span style={{ fontFamily: 'redaction-100' }}>{title}</span>
      <span style={{ fontFamily: 'redaction-70' }}>{title}</span>
      <span style={{ fontFamily: 'redaction-50' }}>{title}</span>
      <span style={{ fontFamily: 'redaction-35' }}>{title}</span>
    </H1>
  </div>
);

export default Title;
