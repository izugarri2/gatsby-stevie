import humanizeDuration from "humanize-duration";
import { DateTime } from "luxon";
import { Box } from "theme-ui";

const Duration = ({ startDate, endDate }) => {
  const end = endDate || DateTime.now();

  return (
    <Box sx={{ fontStyle: "italic" }}>
      {startDate.toLocaleString({ month: "short", year: "numeric" })} -{" "}
      {endDate
        ? endDate.toLocaleString({ month: "short", year: "numeric" })
        : "Present"}{" "}
      |{" "}
      {humanizeDuration(end.diff(startDate), {
        units: ["y", "mo"],
        round: true,
      })}
    </Box>
  );
};

export default Duration;
