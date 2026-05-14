import type { Sale } from "../../../models/sale";

const Chart = ({ sales }: { sales: Sale[] }) => {
    if (sales.length > 0) {
        return <>
            <h2>{sales[0].course_name}</h2>
            <div>
                <ul>
                    {sales.map((s,i) => {
                        return <li key={i}>
                            {s.created_at}
                        </li>
                    })}
                </ul>
            </div>
        </>
    }
}

export default Chart;