import { useState } from "react";
import { Box } from "theme-ui";
import SkillDescription from "../skill-description/skill-description";
import SkillSwiper from "../skill-swiper/skill-swiper";
import { skillList } from "./skills.constants";

const Skills = () => {
  const [currentSkill, setCurrentSkill] = useState(
    skillList.findIndex((skill) => skill.name === "JavaScript")
  );

  return (
    <Box>
      <SkillSwiper
        skills={skillList}
        currentSkill={currentSkill}
        setCurrentSkill={setCurrentSkill}
      />
      <SkillDescription skills={skillList} skill={currentSkill} />
    </Box>
  );
};

export default Skills;
