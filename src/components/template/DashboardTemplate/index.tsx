import Sidebar from "@/components/layout/Sidebar";
import { GridContainer, AppSidebar, AppMain, AppHeader } from "./styles";
import Header from "@/components/layout/Header";

export interface DashboardTemplateProps {
  children: JSX.Element | JSX.Element[];
}

export default function DashboardTemplate({
  children,
}: DashboardTemplateProps) {
  return (
    <GridContainer>
      <AppSidebar>
        <Sidebar />
      </AppSidebar>
      <AppHeader>
        <Header></Header>
      </AppHeader>
      <AppMain>{children}</AppMain>
    </GridContainer>
  );
}
