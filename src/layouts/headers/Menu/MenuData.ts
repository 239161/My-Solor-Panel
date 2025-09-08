// Types
interface SubItemType {
  link: string;
  title: string;
}

interface SubMenuType {
  link: string;
  title: string;
  has_submenu?: boolean;
  sub_items?: SubItemType[];
}

interface DataType {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menus?: SubMenuType[];
}

// Menu Data
const menu_data: DataType[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
    has_dropdown: false,
  },
  {
    id: 2,
    title: "About",
    link: "/about",
    has_dropdown: false,
  },
  {
    id: 3,
    title: "Products",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      {
        link: "/service",
        title: "Solar Panel",
        has_submenu: true,
        sub_items: [
          { link: "/solorroof", title: "Solar Rooftop Plant" },
          { link: "/solar-power-plant", title: "Solar power plant" },
        ],
      },
      
      { link: "/epc", title: "EPC" },
      { link: "/solor-lights", title: "Solar lights" },
      { link: "/solor-home-lights", title: "Solar Home Light" },
      { link: "/street-lights", title: "Street Lights" },
      { link: "/service-details", title: "Solar Off-grid Power Plant" },
      { link: "/service-details", title: "Solar Power Plant O&M" },
      { link: "/service-details", title: "Solar Fencing" },
    ],
  },
  {
    id: 4,
    title: "Projects",
    link: "projects",
    has_dropdown: false,
    sub_menus: [
      { link: "/project-grid", title: "Solor" },
      { link: "/project-details", title: "Project Details" },
    ],
  },
  {
    id: 5,
    title: "Certificates",
    link: "certificates",
    has_dropdown: false,
    sub_menus: [
      { link: "/blog", title: "Blog" },
      { link: "/blog-details", title: "Blog Details " },
      { link: "/team", title: "Team " },
      { link: "/team-details", title: "Team Details" },
      { link: "/faq", title: "FAQ" },
      { link: "/erorr", title: "Erorr" },
    ],
  },
  {
    id: 6,
    title: "Contact",
    link: "/contact",
    has_dropdown: false,
  },
];

export default menu_data;
