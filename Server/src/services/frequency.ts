export const getRangeStartAndEnd = (range: "day" | "week" | "month") => {
    let startOf: Date;
    let endOf: Date;

    const now = new Date();

    switch (range) {
        case "day": {
            startOf = new Date(now);
            startOf.setHours(0, 0, 0, 0);

            endOf = new Date(now);
            endOf.setHours(23, 59, 59, 999);
            break;
        }

        case "week": {
            const day = now.getDay();

            startOf = new Date(now);
            startOf.setDate(now.getDate() - day);
            startOf.setHours(0, 0, 0, 0);

            endOf = new Date(startOf);
            endOf.setDate(startOf.getDate() + 6);
            endOf.setHours(23, 59, 59, 999);
            break;
        }

        case "month": {
            startOf = new Date(now.getFullYear(), now.getMonth(), 1);
            endOf = new Date(now.getFullYear(), now.getMonth() + 1, 0);
            endOf.setHours(23, 59, 59, 999);
            break;
        }
    }

    return { startOf, endOf };
};