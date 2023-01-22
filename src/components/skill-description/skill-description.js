import { Box, Card, Link } from "theme-ui";

const SkillDescription = ({ skills, skill }) => {
  return (
    <Card variant="skill" sx={{ color: "text" }}>
      <Box sx={{ wordBreak: "break-word" }}>
        <Link href={skills[skill].url}>{skills[skill].url}</Link>
      </Box>
      <Box>{skills[skill].description}</Box>
    </Card>
  );
};

export default SkillDescription;
