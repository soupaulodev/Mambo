import { useState } from "react";
import { IoAdd } from "react-icons/io5";

export const ButtonNewOrder = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      className="w-full flex items-center gap-4 py-2.5"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <IoAdd
        className={`size-[1.375rem] mb-0.5 duration-200 rounded-full ${
          isHovered ? "bg-green-500 text-white " : "text-green-500"
        }`}
      />
      <span
        className={`leading-none text-zinc-600 ${
          isHovered ? "text-green-600" : "text-zinc-600"
        }`}
      >
        Criar nova encomenda
      </span>
    </button>
  );
};
