import { useState } from "react";
import { RiCheckLine } from "react-icons/ri";

export const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div
      className={`w-5 h-5 rounded-full overflow-hidden grid place-content-center ${
        isChecked ? "bg-green-500" : "border-2 border-gray"
      }`}
      onClick={() => setIsChecked(!isChecked)}
    >
      {isChecked ? (
        <RiCheckLine className="text-white text-base font-bold" />
      ) : null}
    </div>
  );
};
