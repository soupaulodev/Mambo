import { VscSettings } from "react-icons/vsc";
import { ListItem } from "../Common/ListItem";
import { MdOutlineTaskAlt } from "react-icons/md";
import { ButtonNewOrder } from "../Common/ButtonNewOrder";

export const Estrada = () => {
  const itemDataProps = [
    {
      order: 10000,
      product: 'Bubble Base 18" Bubble Base Bubble Base',
      date: {
        date: "03/04/2024",
        time: "10:00",
      },
      observations: "Anotação",
      amount: 2,
      client: {
        name: "Joaquim",
        phone: "123456789",
      },
    },
    {
      order: 10000,
      product: 'Bubble Base 18"',
      date: {
        date: "03/04/2024",
        time: "10:00",
      },
      observations: "Anotação",
      amount: 2,
      client: {
        name: "Joaquim",
        phone: "123456789",
      },
    },
    {
      order: 10000,
      product: 'Bubble Base 18" Bubble Base Bubble Base',
      date: {
        date: "03/04/2024",
        time: "10:00",
      },
      amount: 2,
      client: {
        name: "Joaquim",
        phone: "123456789",
      },
    },
  ];

  return (
    <div className="flex flex-col w-full px-20 py-9">
      <header className="w-full inline-flex items-baseline justify-between mb-7">
        <div>
          <h1 className="text-2xl font-semibold leading-none text-zinc-800 dark:text-white mb-2">
            Estrada
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 inline-flex items-center gap-1">
            <MdOutlineTaskAlt className="size-4 mb-0.5" />
            <span className="text-sm leading-none">29 encomendas</span>
          </p>
        </div>
        <a
          href="#"
          className="text-sm leading-none text-zinc-800 dark:text-white inline-flex items-center gap-2 px-3 py-2 rounded-md hover:bg-zinc-200/50 dark:hover:bg-zinc-800 duration-200"
        >
          <VscSettings className="size-4" />
          Visualizar
        </a>
      </header>
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-y-hidden min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            {itemDataProps.map((item) => (
              <ListItem {...item} />
            ))}
          </div>
          <ButtonNewOrder />
        </div>
      </div>
    </div>
  );
};
