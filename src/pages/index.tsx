import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { HashLink } from 'react-router-hash-link';
import { StaticImage } from 'gatsby-plugin-image';
import { ArrowDown } from 'react-feather';
import {
  ContactForm,
  FitText,
  Footer,
  Layout,
  Navbar,
  ProjectImage,
  Title,
} from '../components';

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

const IndexPage = () => {
  return (
    <Layout>
      <Helmet title="Daniel Moore" />
      <title>Home Page</title>
      <Navbar noProjects />
      <main>
        <section
          style={{
            height: 'calc(100vh - 48px)',
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
            <FitText className="redaction">
              Director &amp;<br />
              Dramaturg
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
            <HeroHashLink smooth to="#projects" style={{ display: 'flex', alignItems: 'center' }}>
              <ArrowDown style={{ paddingRight: 6 }} />
              Scroll
            </HeroHashLink>
          </div>
        </section>
        <section
          style={{
            padding: '10% 0'
          }}
        >
          <svg viewBox="0 0 200 30">
            <text 
              style={{ fontWeight: 'bold', fontFamily: 'redaction-50, Times, serif' }}
              fill="white" x="86" y="23"
            >
              * * *
            </text>
          </svg>
        </section>
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: 24,
            overflow: 'hidden'
          }}
          id="projects"
        >
          <Title title="Projects" />
          <div style={{ maxWidth: '90%' }}>
            <ProjectImage
              img={<StaticImage src="../images/an-unsettled-supper.png" alt="An Unsettled Supper poster" />}
              title="An Unsettled Supper"
              desc="An immersive atmospheric horror experience."
              url="unsettled-supper"
            />
            <ProjectImage
              img={<StaticImage src="../images/untitled-redacted.jpg" alt="An Unsettled Supper poster" />}
              title="untitled [redacted]"
              desc="A surreal horror audio drama podcast."
              url="untitled-redacted"
            />
            <ProjectImage
              img={<StaticImage src="../images/remotion-2020.jpg" alt="An Unsettled Supper poster" />}
              title="rEMOTION Play Festival"
              desc="A socially-distanced play festival."
              url="remotion-2020"
            />
            <ProjectImage
              img={<StaticImage src="../images/tsot.png" alt="An Unsettled Supper poster" />}
              title="There's Something Out There"
              desc="A horror audio drama."
              url="something-out-there"
            />
          </div>
        </section>
        <section id="contact">
          <Title title="Contact" />
          <ContactForm />
        </section>
      </main>
      <Footer />
    </Layout>
  );
};

export default IndexPage;
