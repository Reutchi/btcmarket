import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip, ResponsiveContainer
} from "recharts";


const ShowAreaChart = ({data}) => {
    const graphData = data.prices?.map((price) => {
        const [timestamp,p] = price
        const date = new Date(timestamp).toLocaleDateString('en-us')
        return{
            Date: date,
            Price: p,
        }
    })
    return (
        <ResponsiveContainer className='flex justify-center' width="100%" height={400}>
        <AreaChart
                width={500}
                height={400}
                data={graphData}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Date" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="Price" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </ResponsiveContainer>
    );
}
export default ShowAreaChart