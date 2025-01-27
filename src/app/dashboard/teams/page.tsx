import { StatisticsOfCompletedTask } from '@/components/teams/statistics-of-completed-tasks';
import { TypesOfProjects } from '@/components/teams/types-of-projects';
import { AllocationOfEmployeesByRole } from '@/components/teams/allocation-of-employees-by-role';
import { EngagementChart } from '@/components/teams/TeamEngagementChart';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';
const TeamsPage = () => {
  return (
    <div>
      <Card className="flex justify-center flex-wrap gap-2 my-4 border-0">
        <CardContent>
          <StatisticsOfCompletedTask />
        </CardContent>
        <CardContent>
          <TypesOfProjects />
        </CardContent>
      </Card>
      <Card className="my-4">
        <CardHeader>
          <CardTitle>Team Distribution</CardTitle>
          <CardDescription>
            Current employee distribution by roles
          </CardDescription>
        </CardHeader>
        <CardContent className="pl-0">
          <AllocationOfEmployeesByRole />
        </CardContent>
        <CardFooter className="flex-col items-center gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            Trending up by 3.8% this quarter <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Showing employee count by role
          </div>
        </CardFooter>
      </Card>

      <EngagementChart />
    </div>
  );
};

export default TeamsPage;
