"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Bell,
  Search,
  Filter,
  Download,
  RefreshCw,
  MoreHorizontal,
} from "lucide-react";

import TextType from "../TextType";

interface DashboardHeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onRefresh: () => void;
  onExport: () => void;
  isRefreshing: boolean;
}

export const DashboardHeader = memo(
  ({
    searchQuery,
    onSearchChange,
    onRefresh,
    onExport,
    isRefreshing,
  }: DashboardHeaderProps) => {
    return (
      <header className="bg-background/95 sticky top-0 z-50 flex h-16 w-full shrink-0 items-center gap-2 border-b backdrop-blur transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          {/* <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb> */}
          <TextType
            text={["Thanks", "for checking", "on us today!"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
            texts={["Good to see you!", "Know what is happening!"]}
            deletingSpeed={50}
            variableSpeed={false}
            variableSpeedEnabled={false}
            variableSpeedMin={60}
            variableSpeedMax={120}
            cursorBlinkDuration={0.5}
            onSentenceComplete={() => {}}
          />
        </div>

        <div className="ml-auto flex items-center gap-2 px-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <Button variant="outline" size="sm">
              <Bell className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </header>
    );
  },
);

DashboardHeader.displayName = "DashboardHeader";
