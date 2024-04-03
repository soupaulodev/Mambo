import { SideBar } from "../../components/Common/SideBar";
import { Estrada } from "../../components/Estrada/Estrada";

export const Home = () => {
  return (
    <main className="dark grid grid-cols-5 h-screen overflow-hidden divide-x">
      <aside className="col-span-1">
        <SideBar />
      </aside>
      <main className="col-span-4">
        <Estrada />
      </main>
    </main>
  );
};
