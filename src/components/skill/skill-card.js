import { Card, Flex, Box } from "@theme-ui/components";

const SkillCard = ({ icon, name, url, cardSx }) => {
  return (
    <Card variant="skill" sx={cardSx}>
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        {icon}
        <Box sx={{ mt: 2, textAlign: "center", fontSize: [2, 3] }}>{name}</Box>
      </Flex>
    </Card>
  );
};

export default SkillCard;
