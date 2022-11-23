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

  let defaultLanguageCode = "es";

  function googleTranslateElementInit() {
    new window.google.translate.TranslateElement(
      { pageLanguage: "fr" },
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
      {navData.map((item, ind) => {
        return (
          <a key={ind} href={item.link}>
            {" "}
            {item.title}
          </a>
        );
      })}{" "}
      <div
        id="google_translate_element"
        className="absolute right-0 -bottom-11 overflow-hidden"
      ></div>
    </div>
  );
};

export default NavBar;
