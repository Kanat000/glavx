import { Button } from "@heroui/react";
import classNames from "classnames";
import React from "react";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";

interface PropTypes {
  onClose?: () => void;
}

const MobileMenu: React.FC<PropTypes> = ({ onClose }) => {
  return (
    <div className="px-[5vw] py-[15px] flex flex-col gap-[30px]">
      <div className="flex justify-between items-center">
        <div className="font-luckiest-guy text-3xl">GlavX</div>
        <Button
          className="bg-transparent p-[5px] h-fit min-w-fit"
          onPress={() => onClose?.()}
        >
          <IoMdClose size={24} />
        </Button>
      </div>

      <div className="flex flex-col gap-[10px]">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            classNames(
              "font-400 hover:text-blue-500/70 transition-all duration-200 p-[10px] text-center rounded-xs",
              {
                "bg-blue-500 !text-white": isActive,
              }
            )
          }
        >
          Главная
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            classNames(
              "font-400 hover:text-blue-500/70 transition-all duration-200 p-[10px] text-center rounded-xs",
              {
                "bg-blue-500 !text-white": isActive,
              }
            )
          }
        >
          О нас
        </NavLink>
      </div>
    </div>
  );
};

export default MobileMenu;
