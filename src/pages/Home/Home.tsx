import { SideBar } from "../../components/Common/SideBar";
import { Estrada } from "../../components/Estrada/Estrada";

export const Home = () => {
  return (
    <main className="flex h-screen overflow-hidden">
      <SideBar />
      <Estrada />
    </main>
  );
};
