import React from "react";

const NavBar = () => {
  let navData = [
    {
      title: "Store",
      link: "#",
    },
    {
      title: "Mac",
      link: "#",
    },
    {
      title: "iPad",
      link: "#",
    },
    {
      title: "iPhone",
      link: "#",
    },
    {
      title: "Watch",
      link: "#",
    },
    {
      title: "AirPods",
      link: "#",
    },
  ];

  return (
    <div className="h-[48px] navbar-bg text-[#f5f5f7] flex items-center justify-center gap-[30px]">
      {navData.map((item) => {
        return <a href={item.link}> {item.title}</a>;
      })}
    </div>
  );
};

export default NavBar;
