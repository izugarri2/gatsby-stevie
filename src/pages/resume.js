/** @jsxImportSource theme-ui */
import { Box, Grid, Link } from "@theme-ui/components";
import { Themed } from "@theme-ui/mdx";
import { DateTime } from "luxon";
import { Fade } from "react-awesome-reveal";
import Helmet from "../components/helmet/helmet";
import MainLayout from "../components/layouts/mainLayout";
import Job from "../components/job/job";
import Section from "../components/section/section";
import Skill from "../components/skill/skill";
import { skillList } from "../components/skills/skills.constants";
import Duration from "../components/duration/duration";
import { useMemo } from "react";

const ResumePage = () => {
  const sortedSkillList = useMemo(() => {
    const jsIndex = skillList.findIndex((skill) => skill.name === "JavaScript");
    let sorted = skillList.slice(0, jsIndex + 1).reverse();
    sorted = sorted.concat(skillList.slice(jsIndex + 1));
    return sorted;
  }, []);

  return (
    <MainLayout>
      <Helmet title="Resume" />
      <Themed.h1>Resume</Themed.h1>
      <Section>
        <Themed.h2>Skills</Themed.h2>
        <Grid width={[146, 180]}>
          {sortedSkillList.map(({ icon, name, url }) => (
            <Fade direction="up" key={name}>
              <Skill
                icon={
                  <Box
                    sx={{ width: ["50px", "90px"], height: ["50px", "90px"] }}
                  >
                    {icon}
                  </Box>
                }
                name={name}
                url={url}
                cardSx={{
                  height: ["120px", "150px"],
                }}
              />
            </Fade>
          ))}
        </Grid>
      </Section>
      <Section>
        <Themed.h2>Work Experience</Themed.h2>
        <Job
          title="Lead Web Developer"
          company={<Link href="https://incentivio.com">Incentivio</Link>}
          startDate={DateTime.fromISO("2019-08-01")}
          endDate={DateTime.now()}
        >
          <Themed.p>
            For most of my time at Incentivio I have served as the Lead
            Developer on our web ordering app. This is a multi-tenant app used
            by 100s of restaurants and serving ~200,000 sessions per month. See{" "}
            <Link href="https://order.incentivio.com/c/puravidamiami">
              Pura Vida Miami
            </Link>
            , for one example.
          </Themed.p>

          <Themed.p>
            The application is written in React. Aside from development, I was
            responsible for architecting the application, developing CI/CD
            processes (GitHub Actions), and provisioning cloud based
            infrastructure (AWS CloudFront). I also manage a small team of
            overseas developers.
          </Themed.p>
        </Job>

        <Job
          title="Full Stack Software Engineer"
          company={<Link href="https://aeturnum.com/">Aeturnum</Link>}
          startDate={DateTime.fromISO("2013-01-01")}
          endDate={DateTime.fromISO("2018-09-01")}
        >
          <Themed.p>
            Aeturnum helps startups get off the ground by providing development
            services, with a large pool of developers overseas in Sri Lanka.
            When I started, I was one of few developers in the US. Over time I
            moved more into a project management role, interacting with clients
            and managing overseas developers. Even still, I always managed to do
            some development, which I preferred.
          </Themed.p>

          <Themed.p>
            I worked with a lot of different technologies with Aeturnum, some of
            which seem ancient now. Initially it was Groovy on Grails, or just
            Grails. I did a little bit with Ruby on Rails as well. Once front
            end frameworks became a little more mature, I started working with
            Angular 1.x and Spring boot on the backend.
          </Themed.p>

          <Themed.p>
            It was during my time with Aeturnum that I first started working
            with AWS as well. When I became responsible for my own projects, it
            was up to me to privision the proper infrastructure on AWS. Back
            then it was a lot of low level EC2, but I did a little with Elastic
            Beanstalk as well.
          </Themed.p>
        </Job>

        <Job
          title="Junior Software Engineer"
          company="Stark Investments"
          startDate={DateTime.fromISO("2007-11-01")}
          endDate={DateTime.fromISO("2008-10-28")}
        >
          <Themed.p>
            I started working for Stark as an intern while I was still studying
            Computer Science. Upon graduation I continued to work there for a
            short while.
          </Themed.p>
          <Themed.p>
            I was a member of the reconciliation team, which meant I used Perl
            to process reports and spreadsheets sent to us by clients and
            partners. That data was then compared against our records. It was
            pretty dull, in retrospect.
          </Themed.p>
          <Themed.p>
            In 2008 the housing market went to hell and so did many of Stark's
            investments. I was one of roughly 70 people laid off.
          </Themed.p>
        </Job>
      </Section>
      <Section>
        <Themed.h2>Education</Themed.h2>
        <Themed.h3 sx={{ color: "secondary" }}>
          University of Wisconsin - Milwaukee
        </Themed.h3>
        <Duration
          startDate={DateTime.fromObject({ year: 2006 })}
          endDate={DateTime.fromObject({ year: 2008 })}
        />
        <Themed.h4>BS, Computer Science</Themed.h4>

        <Themed.h3 sx={{ color: "secondary" }}>
          University of Rochester
        </Themed.h3>
        <Duration
          startDate={DateTime.fromObject({ year: 2001 })}
          endDate={DateTime.fromObject({ year: 2005 })}
        />
        <Themed.h4>BA, English</Themed.h4>
      </Section>
    </MainLayout>
  );
};

export default ResumePage;
