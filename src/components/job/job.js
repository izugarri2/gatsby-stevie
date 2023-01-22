/** @jsxImportSource theme-ui */
import { Flex, Box } from "@theme-ui/components";
import { Themed } from "@theme-ui/mdx";
import Duration from "../duration/duration";

const Job = ({ title, company, startDate, endDate, children }) => {
  return (
    <Flex sx={{ flexDirection: "column" }}>
      <Themed.h3 sx={{ color: "secondary" }}>
        {title} @ {company}
      </Themed.h3>
      <Duration startDate={startDate} endDate={endDate} />
      <Box>{children}</Box>
    </Flex>
  );
};

export default Job;
