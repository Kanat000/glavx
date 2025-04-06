import { HeroUIProvider } from "@heroui/react";
import { Outlet } from "react-router";
import Header from "widgets/header";

function App() {
  return (
    <HeroUIProvider>
      <div className="w-vw h-lvh overflow-hidden bg-gray-50 flex flex-col">
        <Header />
        <div className="w-full flex-1 overflow-y-auto py-[50px] bg-neutral-50 px-[10vw] max-md:px-[5vw]">
          <Outlet />
        </div>
      </div>
    </HeroUIProvider>
  );
}

export default App;
