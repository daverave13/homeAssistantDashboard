import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import {
  RiArrowRightDoubleFill,
  RiArrowLeftDoubleFill,
} from "@remixicon/react";
import { Icon } from "@tremor/react";
import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { Link } from "react-router-dom";
import menuItems from "./menuItems";

const SidebarNavigation = () => {
  const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext);

  return (
    <Sidebar
      className="hidden sm:inline-block"
      collapsed={!isSidebarOpen}
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
        },
      }}
    >
      <div className="flex flex-col justify-between h-100 ">
        <Menu
          menuItemStyles={{
            button: {
              [`&.ps-menu-button:hover`]: {
                color: "black",
              },
            },
          }}
        >
          {menuItems.map((item) => (
            <MenuItem
              key={item.path}
              className="text-tremor-default-strong dark:text-dark-tremor-content-strong"
              component={<Link to={item.path} />}
              icon={<Icon icon={item.icon} size="lg" color="yellow" />}
            >
              {item.name}
            </MenuItem>
          ))}
        </Menu>
        <div className="flex justify-center py-4" onClick={toggleSidebar}>
          <Icon
            size="xl"
            icon={
              isSidebarOpen ? RiArrowLeftDoubleFill : RiArrowRightDoubleFill
            }
            color="yellow"
            className="cursor-pointer"
          />
        </div>
      </div>
    </Sidebar>
  );
};

export default SidebarNavigation;
