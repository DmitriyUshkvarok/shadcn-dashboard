'use client';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import DashBoardSidebar from '@/components/dashboard/dashBoardSidebar';
import MenuTitle from '@/components/dashboard/menu-title';
import { MenuIcon } from 'lucide-react';
import { useMediaQuery } from '@/hooks/use-media-query';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { items } from '@/components/dashboard/dashBoardSidebar';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { LightDarkToggle } from '@/components/ui/light-dark-toggle';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <SidebarProvider>
      <div className="md:grid md:grid-cols-[250px_1fr] h-screen w-full">
        <DashBoardSidebar className="hidden md:flex" />
        {!isDesktop && (
          <div className="p-4 flex justify-between md:hidden sticky inset-0 w-full bg-background border-b border-border">
            <MenuTitle />
            <Drawer
              direction="right"
              open={mobileMenuOpen}
              onClose={() => setMobileMenuOpen(false)}
              onOpenChange={(open) => setMobileMenuOpen(open)}
            >
              <DrawerTrigger>
                <MenuIcon />
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>
                    <MenuTitle />
                  </DrawerTitle>
                  <DrawerDescription>
                    This is Mobiile Sidebar.
                  </DrawerDescription>
                </DrawerHeader>
                <ul className="py-4 grow">
                  {items.map((item) => {
                    const isActive = pathname === item.url;

                    return (
                      <Link
                        key={item.title}
                        href={item.url}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          'block p-2 hover:bg-white dark:hover:bg-zinc-700 rounded-md text-muted-foreground hover:text-foreground',
                          isActive &&
                            'bg-primary hover:bg-primary dark:hover:bg-primary hover:text-primary-foreground text-primary-foreground'
                        )}
                      >
                        <span>{item.title}</span>
                      </Link>
                    );
                  })}
                </ul>
                <DrawerFooter>
                  <div className="flex flex-row gap-4 items-center justify-center mb-3">
                    <Avatar>
                      <AvatarFallback className="bg-pink-300 dark:bg-pink-800">
                        DU
                      </AvatarFallback>
                    </Avatar>
                    <Link href="/" className="hover:underline">
                      Logout
                    </Link>
                    <LightDarkToggle />
                  </div>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        )}
        <div className="overflow-auto py-2 px-4">
          <h1 className="pb-4">Welcome back, Dmitriy!</h1>
          <main>
            <SidebarTrigger />
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
