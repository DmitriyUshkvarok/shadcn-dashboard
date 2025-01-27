'use client';

import { TrendingUp } from 'lucide-react';
import { LabelList, RadialBar, RadialBarChart } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const chartData = [
  { team: 'Backend', completed: 120, fill: 'hsl(210, 90%, 50%)' },
  { team: 'Frontend', completed: 95, fill: 'hsl(0, 85%, 55%)' },
  { team: 'QA', completed: 60, fill: 'hsl(48, 90%, 60%)' },
  { team: 'Support', completed: 80, fill: 'hsl(120, 75%, 50%)' },
  { team: 'Marketing', completed: 50, fill: 'hsl(333, 71%, 51%)' },
];

const chartConfig = {
  backend: {
    label: 'Backend',
    color: 'hsl(var(--chart-1))',
  },
  frontend: {
    label: 'Frontend',
    color: 'hsl(var(--chart-2))',
  },
  qa: {
    label: 'QA',
    color: 'hsl(var(--chart-3))',
  },
  support: {
    label: 'Support',
    color: 'hsl(var(--chart-4))',
  },
  marketing: {
    label: 'Marketing',
    color: 'hsl(var(--chart-5))',
  },
} satisfies ChartConfig;

export function StatisticsOfCompletedTask() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Radial Chart - Teams</CardTitle>
        <CardDescription>
          Progress by Teams (January - June 2024)
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={-90}
            endAngle={380}
            innerRadius={30}
            outerRadius={110}
          >
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  hideLabel
                  nameKey="team"
                  //   valueKey="completed"
                />
              }
            />
            <RadialBar
              dataKey="completed"
              background={{ fill: 'hsl(var(--muted))' }}
            >
              <LabelList
                position="insideStart"
                dataKey="team"
                className="fill-white capitalize mix-blend-luminosity"
                fontSize={11}
              />
            </RadialBar>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing progress for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
