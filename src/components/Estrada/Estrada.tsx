import { ListHeader } from "../Common/ListHeader";
import { ListItem } from "../Common/ListItem";

export const Estrada = () => {
  const itemDataProps = {
    item: {
      order: 1,
      product: "Cerveja",
      amount: 2,
      client: "Joaquim",
      phone: "123456789",
    },
  };

  return (
    <div className="flex flex-col w-full">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <ListHeader />
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <ListItem {...itemDataProps.item} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
