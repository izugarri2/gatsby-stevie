import Helmet from "../components/helmet/helmet";
import { Box, Link, Text, Themed } from "theme-ui";
import MainLayout from "../components/layouts/mainLayout";
import Section from "../components/section/section";
import Skills from "../components/skills/skills";
import Age from "../components/age/age";

const IndexPage = () => {
  return (
    <MainLayout>
      <Helmet title="About" />
      <Box>
        <Themed.h1>About</Themed.h1>
        <Box>
          <div>
            <Age />
          </div>
          <div>
            <Text sx={{ fontSize: 2 }}>🌴 Living in Florida</Text>
          </div>
        </Box>
        <Section>
          <Themed.h2>Disc Golf</Themed.h2>
          <Themed.p>
            I love disc golf. I started playing in 2001 in Manitowoc, WI, and
            I've been playing ever since.
          </Themed.p>
          <Themed.p>
            Now I play in golf in the Jacksonville, FL area. I play mostly in
            leagues or for fun, but I have played some professional golf, with
            very limited success.
          </Themed.p>
          <Themed.p>
            <Link href="https://www.pdga.com/player/75372">PDGA #75372</Link>).
          </Themed.p>
        </Section>
        <Section>
          <Themed.h2>Software</Themed.h2>
          <Themed.p>
            I write software professionally and for fun. Most of my work has
            revolved around web development, which means I use quite a lot of
            JavaScript. I think it would be most accurate to label myself a
            JavaScript Developer.
          </Themed.p>
          <Themed.p>
            Because I've been at this a while, though, I'm also a full stack
            developer. I've done quite a lot with Java (mostly Spring Boot) and
            AWS.
          </Themed.p>
          <Themed.p>
            I enjoy writing clean, optimal and well tested code (ty{" "}
            <Link href="https://cypress.io">Cypress</Link>).
          </Themed.p>
        </Section>
        <Section>
          <Themed.h2>Things I Work With</Themed.h2>
          <Skills />
        </Section>
      </Box>
    </MainLayout>
  );
};

export default IndexPage;
