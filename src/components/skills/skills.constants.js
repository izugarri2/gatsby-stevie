import { Box, Link, Themed } from "theme-ui";
import AWSIcon from "../../images/svgs/aws.svg";
import CypressIcon from "../../images/svgs/cypress.svg";
import GitIcon from "../../images/svgs/git.svg";
import I18NextIcon from "../../images/svgs/i18next.svg";
import JavaIcon from "../../images/svgs/java.svg";
import JavascriptIcon from "../../images/svgs/javascript.svg";
import MongoIcon from "../../images/svgs/mongo.svg";
import MuiIcon from "../../images/svgs/mui.svg";
import MySQLIcon from "../../images/svgs/mysql.svg";
import ReactIcon from "../../images/svgs/react-icon.svg";
import ReduxIcon from "../../images/svgs/redux.svg";
import SpringBootIcon from "../../images/svgs/spring-boot.svg";
import StyledComponentsIcon from "../../images/svgs/styled-elements.svg";

export const skillList = [
  {
    icon: <StyledComponentsIcon />,
    name: "Styled Components",
    description: (
      <Box>
        <Themed.p>
          This is the first styling solution I used that really made sense for a
          component-based framework.
        </Themed.p>
        <Themed.p>
          Will I be using <Link href="https://theme-ui.com/">Theme UI</Link> in
          the future? Maybe.
        </Themed.p>
      </Box>
    ),
    url: "https://www.styled-components.com",
  },

  {
    icon: <I18NextIcon />,
    name: "i18next",
    description: (
      <Box>
        <Themed.p>
          Yeah this makes internationalization really easy. That's all I want.
        </Themed.p>
      </Box>
    ),
    url: "https://www.i18next.com",
  },
  {
    icon: <MuiIcon />,
    name: "Material UI",
    description: (
      <Box>
        <Themed.p>
          There are a lot of UI frameworks to choose from. I think MUI does a
          great job of keeping itself up to date with new design trends. The
          React implementation is the most feature rich UI framework I've worked
          with.
        </Themed.p>
      </Box>
    ),
    url: "https://mui.com",
  },
  {
    icon: <CypressIcon />,
    name: "Cypress",
    description: (
      <Box>
        <Themed.p>
          I really like Cypress. I don't think there is any substitute for test
          scenarios that run on your app in an actual browser.
        </Themed.p>
      </Box>
    ),
    url: "https://www.cypress.io",
  },
  {
    icon: <ReduxIcon />,
    name: "Redux",
    description: (
      <Box>
        <Themed.p>
          I probably wouldn't use Redux anymore if it wasn't for{" "}
          <Link href="https://redux-toolkit.js.org/">Redux Toolkit</Link>. It
          makes global state management easy, and for now that's good enough for
          me.
        </Themed.p>
      </Box>
    ),
    url: "https://redux.js.org",
  },
  {
    icon: <ReactIcon />,
    name: "React",
    description: (
      <Box>
        <Themed.p>
          I have been developing with React since 2017, back when class
          components were a necessity. I don't have many complaints about React.
          I think hooks were a great addition and I'm looking forward to
          concurrency in v18.
        </Themed.p>
        <Themed.p>
          I think I have achieved some degree of mastery with the framework,
          though I do still find myself learning new things, mostly with regards
          to optimization.
        </Themed.p>
      </Box>
    ),
    url: "https://reactjs.org",
  },
  {
    icon: <JavascriptIcon />,
    name: "JavaScript",
    description: (
      <Box>
        <Themed.p>
          First and foremost, I am a JavaScript developer. I currently do most
          of my work with react and before that it was AngularJS. Even before
          that I worked with jQuery and AJAX, when that was still a thing.
        </Themed.p>
        <Themed.p>
          Even as frameworks have come and gone, I have continued to work with
          JavaScript, and I hope to continue doing so. TypeScript is pretty cool
          too.
        </Themed.p>
      </Box>
    ),
    url: "https://www.javascript.com",
  },

  {
    icon: <JavaIcon />,
    name: "Java",
    description: (
      <Box>
        <Themed.p>
          5-10 years ago I would have called myself a Java developer, but now
          I've migrated more to the front end. Nevertheless, I continue to work
          with Java on the backend, primarily with Spring Boot.
        </Themed.p>
      </Box>
    ),
    url: "https://www.java.com",
  },
  {
    icon: <SpringBootIcon />,
    name: "Spring Boot",
    description: (
      <Box>
        <Themed.p>
          You know, I thought Java was going to die a few years back, but it
          looks like I was wrong. I think Spring is the main reason it's still
          around. This is actually a pretty good framework and ecosystem.
        </Themed.p>
      </Box>
    ),
    url: "https://spring.io/projects/spring-boot",
  },
  {
    icon: <MongoIcon />,
    name: "MongoDB",
    description: (
      <Box>
        <Themed.p>
          I work with NoSQL more than SQL nowadays, and that's fine by me. I
          don't think real hard about this. As a front end dev, more JavaScript
          seems better.
        </Themed.p>
      </Box>
    ),
    url: "https://www.mongodb.com",
  },
  {
    icon: <MySQLIcon />,
    name: "MySQL",
    description: (
      <Box>
        <Themed.p>
          Sure I prefer working with Mongo, but SQL has its place. Not too long
          ago it seemed like the only option, so of course I am quite familiar
          with it.
        </Themed.p>
      </Box>
    ),
    url: "https://www.mysql.com",
  },
  {
    icon: <GitIcon />,
    name: "Github",
    description: (
      <Box>
        <Themed.p>
          Yeah I am a dev so I have worked with Github. I'm not bothered that
          it's owned by Microsoft now.
        </Themed.p>
        <Themed.p>
          When GitHub Actions were released, I converted a few projects over
          from Jenkins and I've been very happy with the results. Close
          integration between my repo and my CI system has been great so far.
        </Themed.p>
      </Box>
    ),
    url: "https://github.com",
  },
  {
    icon: <AWSIcon />,
    name: "AWS",
    description: (
      <Box>
        <Themed.p>
          It seems like a long time that I've been working with AWS. Maybe since
          2012. I've been down in the guts with VPC, subnets, and routing
          tables. I've also worked with more abstract services like Cloudfront
          and Lambda. Of the 100 or so services AWS has now, I've probably
          worked with 20.
        </Themed.p>
        <Themed.p>
          Most recently my focus has been on CI/CD with Github Actions and
          Cloudfront.
        </Themed.p>
      </Box>
    ),
    url: "https://aws.amazon.com",
  },
];
