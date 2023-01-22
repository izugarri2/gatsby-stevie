import { Text } from "@theme-ui/components";
import { DateTime } from "luxon";

const birthday = DateTime.fromObject({ year: 1982, month: 11, day: 28 });

const Age = () => {
  const age = DateTime.local().diff(birthday, ["years", "months", "days"]);

  return (
    <Text sx={{ fontSize: 2 }}>
      📆 {age.years} years, {age.months} months and {Math.floor(age.days)} days
      old
    </Text>
  );
};

export default Age;
