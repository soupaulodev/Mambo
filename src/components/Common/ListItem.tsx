interface Props {
  item: {
    order: number;
    product: string;
    amount: number;
    client: string;
    phone: string;
  };
}

export const ListItem = ({
  order,
  product,
  amount,
  client,
  phone,
}: Props["item"]) => {
  return (
    <tr>
      <th
        scope="col"
        className="px-6 py-4 whitespace-nowrap text-sm text-start font-normal text-gray-800 dark:text-gray-200"
      >
        {order}
      </th>
      <th
        scope="col"
        className="px-6 py-4 whitespace-nowrap text-sm text-start font-normal text-gray-800 dark:text-gray-200"
      >
        {product}
      </th>
      <th
        scope="col"
        className="px-6 py-4 whitespace-nowrap text-sm text-start font-normal text-gray-800 dark:text-gray-200"
      >
        {amount}
      </th>
      <th
        scope="col"
        className="px-6 py-4 whitespace-nowrap text-sm text-start font-normal text-gray-800 dark:text-gray-200"
      >
        {client}
      </th>
      <th
        scope="col"
        className="px-6 py-4 whitespace-nowrap text-sm text-start font-normal text-gray-800 dark:text-gray-200"
      >
        {phone}
      </th>
    </tr>
  );
};
