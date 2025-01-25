import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TeamsStats from '@/components/teams/team-stats';
import EmployeesStats from '@/components/employees/employees-stats';

const DashboardPage = () => {
  return (
    <Tabs defaultValue="employees">
      <TabsList className="mb-4">
        <TabsTrigger value="employees">Employees stats</TabsTrigger>
        <TabsTrigger value="teams">Teams stats</TabsTrigger>
      </TabsList>
      <TabsContent value="employees">
        <EmployeesStats />
      </TabsContent>
      <TabsContent value="teams">
        <TeamsStats />
      </TabsContent>
    </Tabs>
  );
};

export default DashboardPage;
