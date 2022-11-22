import React, { useEffect } from "react";

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

  function googleTranslateElementInit() {
    new window.google.translate.TranslateElement(
      { pageLanguage: "en" },
      "google_translate_element"
    );
  }

  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  return (
    <div className="h-[48px] navbar-bg text-[#f5f5f7] flex items-center justify-center gap-[30px]  relative">
      {navData.map((item) => {
        return <a href={item.link}> {item.title}</a>;
      })}{" "}
      <div
        id="google_translate_element"
        className="absolute right-0 -bottom-11"
      ></div>
    </div>
  );
};

export default NavBar;
