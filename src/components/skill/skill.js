import { Link } from "@theme-ui/components";
import SkillCard from "./skill-card";

const Skill = ({ url, ...rest }) => {
  return url ? (
    <Link
      href={url}
      sx={{
        textDecoration: "none",
        "&:hover,&:focus": { textDecoration: "underline" },
      }}
    >
      <SkillCard {...rest} />
    </Link>
  ) : (
    <SkillCard {...rest} />
  );
};

export default Skill;
