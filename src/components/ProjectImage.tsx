import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const OverlayLink = styled(Link)`
  &:hover {
    background-color: inherit;
  }
`

interface ProjectImageProps {
  desc: string;
  img: any;
  title: string;
  url: string;
}

const ProjectImage: FC<ProjectImageProps> = (props) => {
  const { desc, img, title, url } = props;
  const ref = useRef<HTMLDivElement>();
  const [hover, setHover] = useState(false);
  const [ratio, setRatio] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!hover) {
      setRatio(img.props.__imageData.width / img.props.__imageData.height)
    }

    if (ref?.current) {
      setWidth(ref.current.offsetWidth);
    }
  }, [hover, img]);

  return (
    <div
      ref={ref}
      style={{
        border: '1px solid red',
        padding: 5,
        position: 'relative',
        width: '100%',
        maxWidth: 600 - 12,
        maxHeight: (width - 12) / ratio,
        margin: '96px 0',
        textDecoration: 'none'
      }}
    >
      {hover
        ? (
          <>
            <div
              style={{
                backgroundColor: 'red',
              }}
            >
              <div
                style={{
                  padding: 75,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: (width - 12) / ratio - 150,
                  color: 'black',
                }}
              >
                <h1 className="redaction" style={{ fontWeight: 'normal', textAlign: 'center' }}>{title}</h1>
                <p style={{ textAlign: 'center' }}>
                  {desc}
                </p>
              </div>
              {window.innerWidth > 600 && (
                <svg
                  viewBox={`0 0 500 ${500 / ratio}`}
                  style={{
                    position: 'absolute',
                    top: 25,
                    left: 25,
                    width: 'calc(100% - 55px)',
                    height: 'calc(100% - 55px)',
                  }}
                  fill="transparent"
                >
                  <path
                    id="curve"
                    d={`m 15 15 l ${500 - 25} 0 l 0 ${(500 / ratio) - 25} l -${500 - 25} 0 Z`}
                    stroke="none"
                  />
                  <text
                    width="600"
                    style={{ fontSize: '8pt' }}
                  >
                    <textPath href="#curve" fill="black">
                      {Array.apply(null, Array(30)).map(() => `${title} • `)}
                    </textPath>
                  </text>
                </svg>
              )}
            </div>
          </>
        ) : img}
      <OverlayLink
        to={`/projects/${url}`}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        onMouseOver={() => setHover(true)}
        onFocus={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        onBlur={() => setHover(false)}
        role="navigation"
      />
    </div>
  );
};

export default ProjectImage;
