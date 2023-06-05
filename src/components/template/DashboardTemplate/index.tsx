import Sidebar from "@/components/layout/Sidebar";
import { GridContainer, AppSidebar, AppMain, AppHeader } from "./styles";
import Header from "@/components/layout/Header";
import { Outlet } from "react-router-dom";

export default function DashboardTemplate() {
  return (
    <GridContainer>
      <AppSidebar>
        <Sidebar />
      </AppSidebar>
      <AppHeader>
        <Header></Header>
      </AppHeader>
      <AppMain>
        <Outlet />
      </AppMain>
    </GridContainer>
  );
}
