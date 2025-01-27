'use client';

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const chartData = [
  { role: 'Developers', count: 50, fill: 'hsl(210, 90%, 50%)' },
  { role: 'Designers', count: 20, fill: 'hsl(0, 85%, 55%)' },
  { role: 'Testers', count: 15, fill: 'hsl(48, 90%, 60%)' },
  { role: 'Managers', count: 10, fill: 'hsl(120, 75%, 50%)' },
  { role: 'Others', count: 5, fill: 'hsl(333, 71%, 51%)' },
];

const chartConfig = {
  label: {
    color: 'hsl(var(--background))',
  },
} satisfies ChartConfig;

export function AllocationOfEmployeesByRole() {
  return (
    <ResponsiveContainer height={350} width="100%">
      <ChartContainer config={chartConfig}>
        <BarChart
          data={chartData}
          layout="vertical"
          margin={{
            right: 16,
          }}
        >
          <CartesianGrid horizontal={false} vertical={false} />
          <YAxis
            dataKey="count"
            type="category"
            tickLine={false}
            axisLine={false}
            tick={{
              fill: 'hsl(0, 0%, 40%)',
              fontSize: 12,
            }}
          />
          <XAxis
            type="number"
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}%`}
            tick={{
              fill: 'hsl(0, 0%, 40%)',
              fontSize: 12,
            }}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />
          <Bar
            dataKey="count"
            layout="vertical"
            radius={4}
            isAnimationActive={true}
          >
            {chartData.map((entry, index) => (
              <LabelList
                key={`label-${index}`}
                dataKey="role"
                position="insideLeft"
                offset={8}
                className="fill-[white]"
                fontSize={12}
              />
            ))}
          </Bar>
        </BarChart>
      </ChartContainer>
    </ResponsiveContainer>
  );
}
