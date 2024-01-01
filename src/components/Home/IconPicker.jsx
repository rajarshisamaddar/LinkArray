import * as ReactFaIcons from "react-icons/fa6";
import { Icons } from "./IconData";
import { updateLink } from "../../redux/slices/global/globalSlice";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
const ReactIcons = {
  ...ReactFaIcons,
};

export default function IconPicker({ item, onSelect, searchInput }) {
  const [iconsGet, setIconsGet] = useState([]);
  const getIcons = async () => {
    try {
      const response = await fetch(
        `https://api.npoint.io/9b85b564f0206ec8a00e`
      );
      const data = await response.json();
      setIconsGet(data);
    } catch (error) {}
  };

  useEffect(() => {
    getIcons();
  }, []);
  const dispatch = useDispatch();
  const filterIcon = searchInput
    ? iconsGet.filter((icon) =>
        icon.name.toLowerCase().includes(searchInput.toLowerCase())
      )
    : iconsGet;
  const menuCategories = filterIcon.map((a, index) => {
    const IconElement = ReactIcons[a.name];
    return (
      <a
        key={index}
        className="flex flex-row items-center gap-2 cursor-pointer"
        onClick={() => {
          dispatch(updateLink({ ...item, icon: a.name }));
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
