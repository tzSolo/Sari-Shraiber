import { DateTime } from "luxon";

export const getRangeStartAndEnd = (range: "day" | "week" | "month") => {

    const now = DateTime.now().setZone("Asia/Jerusalem");

    const startOf = now.startOf(range);
    const endOf = now.endOf(range);

    return { startOf, endOf };
};