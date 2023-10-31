// "use client";
// import Chat from "./components/chat";
import Navbar from "./components/navbar";
import { useState } from "react";

export default function Home() {
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);

  const handleOpenChatbox = () => {
    if (isChatboxOpen) {
      setIsChatboxOpen(false);
    } else {
      setIsChatboxOpen(true);
    }
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="upper-body p-4" style={{ backgroundColor: "#d8e7ec"}}>
        <div className="main-body flex m-24">
          <div className="home-body flex-1">
            <div className="content text-6xl font-bold mr-52 text-red-800">
              LifeNudge: Your Lifestyle Coach
            </div>
            <div className="sub-cotent text-black mr-52 mt-8">
            At LifeNudge, we believe that every individual has the power to lead a fulfilling 
            and balanced life. We're here to guide and support you on your journey to unlock your true potential,
             achieve your goals, and find harmony in all aspects of your life.
            </div>
            <div className="home-body-get-staeted mt-8">
              <a href="/chat-with-AI"><button className="button bg-orange-400 hover:bg-orange-600 text-white font-bold p-4 px-8 rounded-xl">
                Get Start
              </button>
              </a>
            </div>
          </div>
          <div className="body-img">
            <img className="nav-logo h-96 rounded-full" src="/img/home-gif.gif" />
          </div>
        </div>
      </div>

      <OurServices />
      <Tutorial />
      <Footer />


      {/* CHatbot Button  */}
      <div className="flex flex-col justify-center items-center">
        <button
          className="fixed bottom-0 right-0 mb-4 mr-4 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300"
          onClick={handleOpenChatbox}
        >
          Chat with Expert
        </button>
        {isChatboxOpen && <Chat />}
      </div>
    </main>
  );
}




const OurServices = () => {
  return (
    <div className="our-services bg-white p-8">
      <div className="service-upper text-4xl font-bold p-8 mx-8">
        Our Services
      </div>

      <div>
        <link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />
        {/* ====== Cards Section Start */}
          <div className="container">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                <div className="bg-gray-100 rounded-lg overflow-hidden mb-10 text-center">
                  <img src="/img/community.png" alt="image" className="h-60 w-full p-12" />
                  <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                    <h3>
                      <a href="/" className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        ">
                        Community Forum
                      </a>
                    </h3>
                    <p className="text-base text-justify text-body-color leading-relaxed mb-7">
                    Our forum provides a platform for discussing and connecting with others. Join us to connect, share, and learn. Explore diverse topics, get advice, and be part of a supportive network dedicated to personal growth and well-being.
                   </p>
                    <a href="/community" className="
                     inline-block
                     py-2
                     px-7
                     border border-[#000000]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-orange-500 hover:bg-orange-500 hover:text-white
                     transition
                     ">
                      View
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                <div className="bg-gray-100 rounded-lg overflow-hidden mb-10">
                <img src="/img/tips.png" alt="image" className="h-60 w-full p-4" />
                  <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                    <h3>
                      <a href="/" className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        ">
                        Life-Consultancy Tips
                      </a>
                    </h3>
                    <p className="text-base text-justify text-body-color leading-relaxed mb-7">
                    Effective life consultancy hinges on active listening, empathy, and a holistic approach. Collaborate on clear, achievable goals with personalized strategies, maintain confidentiality, and celebrate achievements.
                    </p>
                    <a href="/tip" className="
                     inline-block
                     py-2
                     px-7
                     border border-[#000000]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-orange-500 hover:bg-orange-500 hover:text-white
                     transition
                     ">
                      View
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                <div className="bg-gray-100 rounded-lg overflow-hidden mb-10">
                <img src="/img/report.png" alt="image" className="h-70 w-full p-4" />
                  <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                    <h3>
                      <a href="/" className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        ">
                        Talk to an advisor
                      </a>
                    </h3>
                    <p className="text-base text-body-color text-justify leading-relaxed mb-7">
                    Connect with our dedicated life consultancy advisor for tailored guidance and support. Whether you seek assistance in health, career, or personal growth, our advisor is here to help you navigate life's challenges and achieve your goals.
                    </p>
                    <a href="/report" className="
                     inline-block
                     py-2
                     px-7
                     border border-[#000000]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-orange-500 hover:bg-orange-500 hover:text-white
                     transition
                     ">
                      Talk
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* ====== Cards Section End */}
      </div>
    </div>

  );
};



const Tutorial = () => {
  return(
    <div className="tutorial bg-gray-200 p-8">
      <div className="tutorial-upper text-4xl font-bold mx-16 mt-8">
        Tutorials
      </div>
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16 mb-8">
  <div className="relative z-10 max-w-screen-xl px-4 sm:py-24 mx-auto sm:px-6 lg:px-8">
    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-justify font-medium text-lg sm:ml-auto">
    Our life consultancy tips are designed to empower individuals by offering valuable insights, strategies, 
    and support in various aspects of life. Whether it's improving health, nurturing relationships, 
    advancing your career, or fostering personal growth, our tips provide actionable advice to help you overcome obstacles, 
    make informed decisions, and work towards your goals. We understand that life can be complex, and our guidance is tailored to your unique circumstances, e
    nabling you to lead a more balanced, fulfilling life. With our tips, you'll gain the tools and knowledge to make positive changes and achieve the life you a
    spire to.
    </div>
  </div>
  <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-20 h-full ">
    <div className="relative z-20 video rounded-2xl">
      <iframe className="rounded-2xl" width="560" height="315" src="https://www.youtube.com/embed/9MazN_6wdqI?si=9cR_qC1Ni4kyWFC_?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
</aside>
      
    </div>
  );
};

const Footer = () => {
  return(
    <div className="footer">
      <div>
        {/* <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" /> */}
        <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />
        <footer className="relative pt-8 pb-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap text-left lg:text-left">
              <div className="w-full lg:w-6/12 px-4">
                <h4 className="text-3xl fonat-semibold text-blueGray-700">Lets keep in touch!</h4>
                <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                  Find us on any of these platforms, we respond 1-2 business days.
                </h5>
                <div className="mt-6 lg:mb-0 mb-6">
                  <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                    <i className="fab fa-twitter" /></button><button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                    <i className="fab fa-facebook-square" /></button><button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                    <i className="fab fa-dribbble" /></button><button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                    <i className="fab fa-github" />
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="flex flex-wrap items-top mb-6">
                  <div className="w-full lg:w-4/12 px-4 ml-auto">
                    <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                    <ul className="list-unstyled">
                      <li>
                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/presentation?ref=njs-profile">About Us</a>
                      </li>
                      <li>
                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">Blog</a>
                      </li>
                      <li>
                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">Github</a>
                      </li>
                      <li>
                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Free Products</a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
                    <ul className="list-unstyled">
                      <li>
                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT License</a>
                      </li>
                      <li>
                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
                      </li>
                      <li>
                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
                      </li>
                      <li>
                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-6 border-blueGray-300" />
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                <div className="text-sm text-blueGray-500 font-semibold py-1">
                  Copyright © <span id="get-current-year">2021</span><a href="/" className="text-blueGray-500 hover:text-gray-800" target="_blank"> ULTRA SAFE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};