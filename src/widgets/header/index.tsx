import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { Button, Modal, ModalContent } from "@heroui/react";
import { IoMdMenu } from "react-icons/io";
import MobileMenu from "./ui/MobileMenu";

interface PropTypes {}

const Header: React.FC<PropTypes> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="w-full py-[20px] px-[15vw] border-b-1 shadow-md bg-gray-50 max-md:px-[5vw] max-sm:py-[15px]">
      <div className="w-full flex gap-[30px] items-center max-sm:justify-between">
        <div className="font-luckiest-guy text-3xl">GlavX</div>

        <div className="flex-1 flex gap-[20px] justify-end items-center max-sm:hidden">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              classNames(
                "font-600 hover:text-blue-500/70 transition-all duration-200",
                {
                  "text-blue-500": isActive,
                }
              )
            }
          >
            Главная
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              classNames(
                "font-600 hover:text-blue-500/70 transition-all duration-200",
                {
                  "text-blue-500": isActive,
                }
              )
            }
          >
            О нас
          </NavLink>
        </div>
        <Button
          className={
            "bg-transparent p-[5px] w-fit h-fit min-w-fit rounded-full data-[hover=true]:opacity-100 hidden max-sm:block"
          }
          onPress={() => {
            setMobileMenuOpen(true);
          }}
        >
          <IoMdMenu size={24} className="fill-dark-50" />
        </Button>
        {/* <div className="flex gap-[20px] max-sm:hidden">
          <Button className="bg-transparent p-[7px] w-fit h-fit min-w-fit rounded-full data-[hover=true]:opacity-100">
            <IoMoonOutline size={20} />
            
          </Button>
        </div> */}

        <Modal
          placement="top"
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          classNames={{ base: "!m-0 rounded-t-none rounded-b-xs max-w-full" }}
          hideCloseButton
          motionProps={{
            variants: {
              enter: {
                opacity: 1,
                transition: {
                  duration: 0.4,
                  ease: "easeOut",
                },
              },
              exit: {
                opacity: 0,
                transition: {
                  duration: 0.2,
                  ease: "easeIn",
                },
              },
            },
          }}
        >
          <ModalContent>
            <MobileMenu onClose={() => setMobileMenuOpen(false)} />
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default Header;
