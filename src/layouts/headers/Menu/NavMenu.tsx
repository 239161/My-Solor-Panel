// components/NavMenu.tsx
import React from "react";
import Link from "next/link";
import menu_data from "./MenuData";

const NavMenu = () => {
  return (
    <>
      <ul className="main-menu flex gap-6">
        {menu_data.map((item, i) => (
          <li key={i} className="relative group">
            <Link href={item.link} className="hover:text-blue-500">
              {item.title}{" "}
              {item.has_dropdown ? (
                <i className="fas fa-chevron-down ml-1"></i>
              ) : null}
            </Link>

            {/* First Level Submenu */}
            {item.has_dropdown && item.sub_menus && (
              <div className="sub-menu">
                <ul>
                  {item.sub_menus.map((sub_item, index) => (
                    <li
                      key={index}
                      className="relative group/sub border-b last:border-none"
                    >
                      <Link
                        href={sub_item.link}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {sub_item.title}{" "}
                        {sub_item.has_submenu ? (
                          <i className="fas fa-chevron-right float-right mt-1"></i>
                        ) : null}
                      </Link>

                      {/* Second Level Submenu */}
                      {sub_item.has_submenu && sub_item.sub_items && (
                        <ul className="">
                          {sub_item.sub_items.map((sub_sub, idx) => (
                            <li key={idx} className="border-b last:border-none">
                              <Link
                                href={sub_sub.link}
                                className="block px-4 py-2 hover:bg-gray-100"
                              >
                                {sub_sub.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;
