"use client";
import React, { useState } from "react";
import menu_data from "./MenuData";
import Link from "next/link";

const MobileMeneu = () => {
  const [navTitle, setNavTitle] = useState("");
  const [subNavTitle, setSubNavTitle] = useState("");

  // Toggle first level menu
  const openMobileMenu = (menu: string) => {
    setNavTitle(navTitle === menu ? "" : menu);
    setSubNavTitle(""); // close sub-submenu when main changes
  };

  // Toggle second level menu
  const openSubMobileMenu = (submenu: string) => {
    setSubNavTitle(subNavTitle === submenu ? "" : submenu);
  };

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mobile-menu-area sticky d-sm-block d-md-block d-lg-none">
        <div className="mobile-menu mean-container">
          <div className="mean-bar">
            <a
              onClick={() => setOpen(!open)}
              className={`meanmenu-reveal ${open ? "meanclose" : ""}`}
              style={{
                right: "0px",
                left: "auto",
                textAlign: "center",
                textIndent: "0px",
                fontSize: "18px",
              }}
            >
              {open ? (
                "X"
              ) : (
                <>
                  <span></span>
                  <span></span>
                  <span></span>
                </>
              )}
            </a>

            <nav className="mean-nav">
              <ul className={`nav_scroll ${open ? "d-block" : "d-none"}`}>
                {menu_data.map((item, i) => (
                  <li key={i}>
                    <Link href={item.link}>{item.title}</Link>

                    {item.has_dropdown && (
                      <div className="sub-menu">
                        <ul
                          style={{
                            display: navTitle === item.title ? "block" : "none",
                          }}
                        >
                          {item.sub_menus?.map((sub_item, index) => (
                            <li key={index}>
                              <Link href={sub_item.link}>{sub_item.title}</Link>

                              {/* Second level submenu */}
                              {sub_item.has_submenu && (
                                <>
                                  <ul
                                    style={{
                                      display:
                                        subNavTitle === sub_item.title
                                          ? "block"
                                          : "none",
                                      marginLeft: "15px",
                                    }}
                                  >
                                    {sub_item.sub_items?.map(
                                      (sub2, subIndex) => (
                                        <li key={subIndex}>
                                          <Link href={sub2.link}>
                                            {sub2.title}
                                          </Link>
                                        </li>
                                      )
                                    )}
                                  </ul>

                                  <a
                                    className="mean-expand"
                                    onClick={() =>
                                      openSubMobileMenu(sub_item.title)
                                    }
                                    style={{
                                      fontSize: "18px",
                                      display: "inline-block",
                                      marginLeft: "5px",
                                    }}
                                  >
                                    +
                                  </a>
                                </>
                              )}
                            </li>
                          ))}
                        </ul>

                        <a
                          className="mean-expand"
                          onClick={() => openMobileMenu(item.title)}
                          style={{
                            fontSize: "18px",
                            display: "inline-block",
                            marginLeft: "5px",
                          }}
                        >
                          +
                        </a>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMeneu;
