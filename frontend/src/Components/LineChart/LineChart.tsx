import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts"

type Props = {
  data: any
  xAxis: string
  dataKey: string
}

const SimpleLineChart = ({ data, xAxis, dataKey }: Props) => {
  return (
    <ResponsiveContainer width="99%" height={500}>
      <LineChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 30,
          bottom: 20,
        }}
      >
        {/* Grid Lines */}
        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
        {/* Line */}
        <Line
          type="monotone"
          dataKey={dataKey}
          stroke="#f59e0b"
          strokeWidth={3}
          activeDot={{ r: 8, fill: '#f59e0b' }}
        />
        {/* Tooltips */}
        <Tooltip 
          contentStyle={{
            backgroundColor: '#f9fafb',
            borderRadius: '8px',
            border: '1px solid #e5e7eb',
          }}
          labelStyle={{
            color: '#f59e0b',
            fontWeight: 'bold',
          }}
        />
        {/* X and Y Axis */}
        <XAxis
          dataKey={xAxis}
          axisLine={{ stroke: '#e5e7eb' }}
          tickLine={{ stroke: '#e5e7eb' }}
          tick={{ fill: '#374151', fontSize: '12px' }}
        />
        <YAxis
          axisLine={{ stroke: '#e5e7eb' }}
          tickLine={{ stroke: '#e5e7eb' }}
          tick={{ fill: '#374151', fontSize: '12px' }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default SimpleLineChart