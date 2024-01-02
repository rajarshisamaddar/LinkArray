import * as ReactFaIcons from "react-icons/fa6";
import { Icons } from "./IconData";
import { updateLink } from "../../redux/slices/global/globalSlice";
import { useDispatch } from "react-redux";
const ReactIcons = {
  ...ReactFaIcons,
};

export default function IconPicker({ item, onSelect, searchInput }) {
  const dispatch = useDispatch();
  const filterIcon = searchInput
    ? Icons.filter((icon) =>
        icon.toLowerCase().includes(searchInput.toLowerCase())
      )
    : Icons;
  const menuCategories = filterIcon.map((a, index) => {
    const IconElement = ReactIcons[a];
    console.log(`Icon name: ${a}, Icon component:`, IconElement); // Add this line
    return (
      <a
        key={index}
        className="flex flex-row items-center gap-2 cursor-pointer"
        onClick={() => {
          dispatch(updateLink({ ...item, icon: a }));
          onSelect();
        }}
      >
        {IconElement && <IconElement color="black" size={35} />}
      </a>
    );
  });

  return (
    <>
      <div className="grid grid-cols-11 gap-2 overflow-y-auto sm:grid-cols-6 mb:grid-cols-9">
        {menuCategories}
      </div>
    </>
  );
}
