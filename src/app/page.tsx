"use client"

import { useState } from "react";
import { Sidebar } from "./components/Sidebar";



const Page = () => {

  const [sidebarOpened, setSidebarOpened] = useState(true);

  const toggleSideBar = () => {
    setSidebarOpened(!sidebarOpened);
  }

  return (
    <main className="felx min-h-screen bg-gpt-gray">
      <Sidebar 
      open={sidebarOpened} 
      onClose={toggleSideBar}>

      </Sidebar>
      <section className="flex flex-col w-full">
        <button onClick={toggleSideBar}>Toggle Sidebar</button>
      </section>
    </main>
  );
} 

export default Page;