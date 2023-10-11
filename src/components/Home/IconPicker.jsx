import * as ReactFaIcons from "react-icons/fa6";
import { Icons } from "./IconData";

const ReactIcons = {
  ...ReactFaIcons,
};

export default function IconPicker() {
  const menuCategories = Icons.map((a) => {
    const IconElement = ReactIcons[a];

    return (
      <a key={a} className="flex flex-row items-center gap-2">
        {IconElement && <IconElement color="red" size={35} />}
      </a>
    );
  });

  return (
    <>
      <div className="flex overflow-visible">{menuCategories}</div>
    </>
  );
}
