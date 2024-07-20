import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import homeIcon from "../Assets/home.png";
import menuIcon from "../Assets/menu.png";
import menuIcon2 from "../Assets/menu2.png";
import orderIcon from "../Assets/order.png";
import orderIcon2 from "../Assets/order2.png";
import messageIcon from "../Assets/message.png";
import messageIcon2 from "../Assets/message2.png";
import profileIcon from "../Assets/profile.png";
import profileIcon2 from "../Assets/profile2.png";

function NavBar() {
  const location = useLocation();

  const items = [
    {
      path: "/",
      tab: "Home",
      icon1: homeIcon,
      icon2: homeIcon
    },
    {
      path: "/menu",
      tab: "Menu",
      icon1: menuIcon,
      icon2: menuIcon2
    },
    {
      path: "/orders",
      tab: "Orders",
      icon1: orderIcon,
      icon2: orderIcon2
    },
    {
      path: "/contact",
      tab: "Contact",
      icon1: messageIcon,
      icon2: messageIcon2
    },
    {
      path: "/profile",
      tab: "Profile",
      icon1: profileIcon,
      icon2: profileIcon2
    },
  ];

  return (
    <div className="bg-white py-2 px-10 md:px-40">
      <div className="md:flex md:gap-40">
        <div className="flex items-center gap-2">
          <div className="hidden md:block">Mama Chi's Kitchen</div>
        </div>
        <div className="flex items-center gap-8">
          {items.map((t, i) => (
            <div className="items-center text-center w-20" key={i}>
              <Link to={t.path} className="text-center items-center">
                <img
                  src={t.path === location.pathname ? t.icon2 : t.icon1}
                  alt={t.tab}
                  className="w-6 h-6 mx-auto"
                />
                <div
                  className={`text-xs ${
                    t.path === location.pathname ? "text-black" : "text-[#666]"
                  }`}
                >
                  {t.tab}
                </div>
              </Link>
              {location.pathname === t.path ? (
                <hr className="border border-black mt-2 -mb-2" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
