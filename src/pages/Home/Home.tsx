import { SideBar } from "../../components/Common/SideBar";
import { Tabs } from "../../components/Tab/Tabs";

export const Home = () => {
  return (
    <main className="dark grid grid-cols-5 h-screen overflow-hidden divide-x">
      <aside className="col-span-1">
        <SideBar />
      </aside>
      <main className="col-span-4">
        {/* <Estrada /> */}
        <Tabs />
      </main>
    </main>
  );
};
