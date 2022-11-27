import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [filpCard, setFilpCard] = useState(false);

  let Homeschooldata = [
    {
      title: "Control your home with Siri",
      link: "#",
    },
    {
      title: "Create automations with the Home app",
      link: "#",
    },
    {
      title: "Share control of your home",
      link: "#",
    },
    {
      title: "Privately monitor home activities with HomeKit Secure Video",
      link: "#",
    },
    {
      title: "Set up your HomePod mini or Apple TV as a home hub",
      link: "#",
    },
    {
      title: "Secure your home network with HomeKit routers",
      link: "#",
    },
  ];

  let homPodCardData = [
    {
      title: "Lock doors at bedtime",
      icon: "https://www.apple.com/v/home-app/c/images/overview/icon/icon_lock__fpt8n2i4qyqi_large_2x.png",
      text: "Automate the locking of all the doors in your house.",
    },
    {
      title: "View live camerase",
      icon: "https://www.apple.com/v/home-app/c/images/overview/icon/icon_cameras__d4j55gv0ac6e_large_2x.png",
      text: "Automate the locking of all the doors in your house.",
    },
    {
      title: "Turn lights on at sunset",
      icon: "https://www.apple.com/v/home-app/c/images/overview/icon/icon_lights_sunset__d186ly8k3hg2_large_2x.png",
      text: "Automate the locking of all the doors in your house.",
    },
  ];

  return (
    <div className="w-full bg-slate-100 relative">
      <Header />
      <section className=" w-full h-screen flex flex-col  items-center ">
        <div className="animationHome h-[150px] w-[150px] bg-[#fff] mt-[100px] rounded-[40px] flex items-center justify-center ">
          <img
            src="https://www.pngall.com/wp-content/uploads/2016/04/Home-Download-PNG.png"
            className="h-[100px] w-[100px]"
          />
        </div>
        {/* <div className="mt-[55px]">
          <p className="text-[#1d1d1f] font-[700] text-[24px]"> Home app </p>
        </div> */}
        <p className="text-[100px] font-[700] text-center leading-tight w-[80%] mt-[30px] animationHome">
          The foundation for a&nbsp;smarter home.
        </p>
      </section>
      <section className=" px-[100px]">
        <div className="h-[50%]">
          <img src="https://www.apple.com/in/home-app/images/overview/hero_homepod_lockup__d8j0cm45ask2_medium_2x.jpg" />
        </div>
        <div>
          <p className="  mt-[100px] font-[700] text-[32px] text-center mx-[220px]">
            The redesigned Home app makes it easier to control all your smart
            home accessories — on all your Apple devices. It’s secure and
            protects your personal data. And with HomePod mini or Apple TV set
            up as the ultimate home hub, the new Home app unlocks the full
            potential of your smart home.
          </p>
        </div>
      </section>
      <section className="px-[100px]">
        <p className="text-[64px] font-[600] mt-[50px]">
          A fully renovated experience.
        </p>

        <div className=" h-[800px] w-full rounded-[30px] bg-[#fff] mt-[30px]"></div>
      </section>

      <section className="h-[800px] px-[100px] mt-[30px] flex gap-[30px] ">
        <div className="h-[700px] w-[50%] bg-[#fff] rounded-[40px]"></div>
        {/*  */}
        <div className="h-[700px] w-[50%] bg-[#fff] rounded-[40px]"></div>
      </section>
      <section className="px-[100px] my-[100px]">
        <p className="text-[64px] font-[700] leading-tight">
          {" "}
          HomePod mini and Apple TV. <br /> The keys to even more control.
        </p>
        <p className="text-[#6e6e73] max-w-[980px] text-[32px] font-[600] mt-[20px]">
          The Home app can do even more with the help of your HomePod mini or
          Apple TV. Either one can be set up as a smart home hub, giving you
          access to your home while you’re away and letting you automate all of
          your home’s smart accessories. And your HomePod mini or Apple TV hub
          is also an essential building block for Matter — the new smart home
          industry standard that will be compatible with more accessories, and
          even connect them across platforms.
        </p>
      </section>

      <section className="h-screen px-[100px]">
        <div className="mt-[30px]  flex gap-[30px]  justify-between ">
          {homPodCardData.map((item, ind) => {
            return (
              <div
                key={ind}
                className="h-[500px] w-[380px] bg-[#fff] rounded-[40px]  flex items-center px-[90px]"
              >
                <div className=" flex items-center flex-col">
                  <div className="h-[100px] w-[100px] overflow-hidden  ">
                    <img src={item.icon} />{" "}
                  </div>
                  <p className="text-[34px] font-[700] leading-tight text-center mt-[50px]">
                    {item.title}
                  </p>
                  <p className="text-[#86868b] text-[21px] text-center mt-[20px]">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="w-full px-[100px] pb-[100px] ">
        <p className="font-[600] text-[64px]">Your data is private property.</p>
        <div className="w-full bg-[#fff] h-[600px] rounded-[30px] flex mt-[30px]">
          <div className="  flex items-center justify-center  w-[50%]">
            <div className="h-[400px] w-[500px] overflow-hidden ">
              <p className="text-[32px] font-[700] leading-tight">
                Privacy at home is more important than ever. That’s why your
                Home app data is stored in a way that Apple can’t read it. Your
                accessories are controlled by your Apple devices instead of the
                cloud, and communication is encrypted end to end.
              </p>
            </div>
          </div>
          <div className="  w-[50%]"> </div>
        </div>
      </section>

      <section className="px-[100px] pb-[50px]">
        <p className="text-[64px] font-[700]"> Home school.</p>
        <div className="mt-[30px] grid grid-cols-3 gap-[30px]">
          {Homeschooldata.map((item, ind) => {
            return (
              <div
                key={ind}
                className="hover:scale-105 duration-1000 cursor-pointer h-[300px] bg-[#fff] rounded-[30px] p-[30px] justify-between flex flex-col"
              >
                <p className="text-[32px] font-[600] leading-tight">
                  {item.title}
                </p>

                <a className="text-[#2997ff] text-[24px] font-[600]">
                  Learn More
                </a>
              </div>
            );
          })}
        </div>
      </section>
      <section className=" px-[100px] mt-[30px] flex gap-[30px] py-[100px] ">
        <div className="h-[700px] w-[50%]  rounded-[40px]">
          <div
            onClick={() => {
              setFilpCard(!filpCard);
            }}
            className="flip-card  h-full"
          >
            <div className={`flip-card-inner ${filpCard ? "flip" : null}  `}>
              <div className="flip-card-front bg-[#fff] rounded-[40px] p-[30px]  overflow-hidden">
                <div className=" h-full w-full flex items-center justify-center">
                  <p className="text-[84px] text-center font-[500]">
                    Click to Flip
                  </p>
                </div>
              </div>
              <div class="flip-card-back bg-green-500 rounded-[40px] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1595327656903-2f54e37ce09b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[700px] w-[50%] bg-[#fff] rounded-[40px]"></div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
