import DashboardCo from "@/components/Dashboard";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

async function Dashboard() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || !user.id) redirect("/auth-callback?origin=dashboard"); 



  return <DashboardCo/>;
}

export default Dashboard;
