'use client';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import MenuTitle from './menu-title';
import { cn } from '@/lib/utils';
import { Avatar } from '../ui/avatar';
import { AvatarFallback } from '../ui/avatar';
import { LightDarkToggle } from '../ui/light-dark-toggle';
import { usePathname } from 'next/navigation';

export const items = [
  {
    title: 'My dashboard',
    url: '/dashboard',
  },
  {
    title: 'Teams',
    url: '/dashboard/teams',
  },
  {
    title: 'Employees',
    url: '/dashboard/employees',
  },
  {
    title: 'Account',
    url: '/dashboard/account',
  },
  {
    title: 'Settings',
    url: '/dashboard/settings',
  },
];

const DashBoardSidebar = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarContent
        className={cn(`bg-muted overflow-auto p-4 flex flex-col`, className)}
      >
        <SidebarGroup>
          <SidebarGroupLabel>
            <header className="hidden md:block border-b dark:border-b-black border-b-zinc-300 pb-4">
              <MenuTitle />
            </header>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="py-4 grow">
              {items.map((item) => {
                const isActive = pathname === item.url; // Проверяем, активна ли ссылка

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.url}
                        className={cn(
                          'block p-2 hover:bg-white dark:hover:bg-zinc-700 rounded-md text-muted-foreground hover:text-foreground',
                          isActive &&
                            'bg-primary hover:bg-primary dark:hover:bg-primary hover:text-primary-foreground text-primary-foreground'
                        )}
                      >
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="flex flex-row gap-2 items-center justify-between">
        <Avatar>
          <AvatarFallback className="bg-pink-300 dark:bg-pink-800">
            DU
          </AvatarFallback>
        </Avatar>
        <Link href="/" className="hover:underline">
          Logout
        </Link>
        <LightDarkToggle />
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashBoardSidebar;
