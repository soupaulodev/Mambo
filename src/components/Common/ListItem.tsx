import { Checkbox } from "./Checkbox";

interface Props {
  item: {
    order: number;
    product: string;
    date: {
      date: string;
      time: string;
    };
    observations?: string;
    amount: number;
    client: {
      name: string;
      phone: string;
    };
  };
}

export const ListItem = ({
  order,
  product,
  date,
  observations,
  amount,
  client,
}: Props["item"]) => {
  return (
    <p className="flex items-stretch gap-5 py-2.5 text-base text-start font-normal text-gray-800 dark:text-gray-200 leading-none cursor-pointer">
      <span className="-mt-[4px]">
        <Checkbox />
      </span>
      <span>{order}</span>
      <span>{amount}x</span>
      <span>
        <div className="flex flex-col gap-1">
          {product}
          {observations ? (
            <span className="text-sm">Obs: {observations}</span>
          ) : null}
        </div>
      </span>
      <span>
        <div className="flex flex-col gap-1">
          <span>{client.name}</span>
          <span className="text-sm">{client.phone}</span>
        </div>
      </span>
      <span>
        <div className="flex flex-col gap-1">
          <span>{date.time}</span>
          <span className="text-sm">{date.date}</span>
        </div>
      </span>
    </p>
  );
};
