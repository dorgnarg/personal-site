import type { FC } from 'react';
import { useState, useEffect, useRef } from 'react';

interface FitTextProps {
  children: any;
  maxFontSize?: number;
  className?: string;
}

const FitText: FC<FitTextProps> = (props) => {
  const ref = useRef<HTMLDivElement>();
  const [width, setWidth] = useState(0);
  const [fontSize, setFontSize] = useState(16);
  const { children, maxFontSize = 1000, className = '', ...other } = props;

  useEffect(() => {
    // Debounce
    let timeoutId = null;
    let isMounted = true;
    const resizeListener = () => {
      if (isMounted) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setWidth(ref.current ? ref.current.offsetWidth : 0);
        }, 150);
      }
    };

    window.addEventListener('resize', resizeListener);

    return () => {
      isMounted = false;
      window.removeEventListener('resize', resizeListener);
    }
  }, []);

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    setFontSize(Math.min(width / (0.5 * 10), maxFontSize));
  }, [width, maxFontSize]);

  useEffect(() => {
    console.log('new font size', fontSize);
  }, [fontSize]);

  return (
    <div
      ref={ref}
      style={{
        height: '100%',
        width: '100%',
        fontSize,
      }}
      className={className}
      {...other}
    >
      {children}
    </div>
  );
};

export default FitText;
