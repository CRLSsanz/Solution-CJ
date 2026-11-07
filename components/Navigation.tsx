import Link from "next/link";
import React, { useState } from "react";

export const Navigation = () => {
  const [navbar, setNavbar] = useState(false);

  const list = [
    {
      id: "01",
      title: "Camaras de vigilancia",
      link: "camaras",
    },
    {
      id: "02",
      title: "Cerrajeria",
      link: "cerrajeria",
    },
    {
      id: "03",
      title: "Domotica",
      link: "domotica",
    },
    {
      id: "04",
      title: "Drywall",
      link: "drywall",
    },
    {
      id: "05",
      title: "Electricidad",
      link: "electricidad",
    },
    {
      id: "06",
      title: "Gasfiteria",
      link: "gasfiteria",
    },
    {
      id: "07",
      title: "Melamina",
      link: "melamina",
    },
    {
      id: "08",
      title: "Pintura",
      link: "pintura",
    },
    {
      id: "07",
      title: "Enchapado mayolica",
      link: "mayolica",
    },
    {
      id: "09",
      title: "Metalica",
      link: "metalica",
    },
    {
      id: "10",
      title: "Instalacion de Rack, Alarmas, Muebles, Cuadros",
      link: "general",
    },
  ];

  return (
    <div className="fixed bottom-1/2 right-0 Xbg-gray-500 hover:bg-emerald-500">
      <div onClick={() => setNavbar(!navbar)} className=" flex items-center">
        {/** BUTTON WHATSAPP */}
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          transform="rotate(90)"
          stroke="#fff"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z"
              fill="#fff"
            ></path>{" "}
            <path
              d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
              fill="#fff"
            ></path>{" "}
            <path
              d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z"
              fill="#fff"
            ></path>{" "}
          </g>
        </svg>
      </div>

      <div
        className={`fixed top-0 z-50 text-white bg-[#222222fe] flex flex-col justify-between h-full w-80 Xtransform Xtransition-all Xduration-200 rounded-b-md text-center
        ${
          navbar
            ? " opacity-100 pointer-events-auto right-0 duration-500"
            : "opacity-100 pointer-events-none -right-6/6 duration-initial"
        }`}
      >
        <div> </div>
        <div className="w-full p-5">
          {list.map((item, index) => (
            <Link
              key={index}
              href={`../#${item.link}`}
              onClick={() => setNavbar(!navbar)}
            >
              <div
                key={index}
                className="flex flex-row justify-end gap-x-2 py-2"
              >
                <h1 className=""> {item.title} </h1>
                <div className="bg-gray-50 rounded-full h-1.5 w-1.5 my-auto"></div>
              </div>
            </Link>
          ))}
        </div>
        {/** BOTON CERRAR */}
        <li className="w-full flex flex-col items-end p-5">
          <button
            onClick={() => setNavbar(!navbar)}
            className="w-10 h-10 lg:m-2 text-gray-200 active:bg-none cursor-pointer lg:hover:rotate-90 lg:hover:scale-105 transition-transform duration-500 active:rotate-90 active:scale-75 lg:active:animate-ping focus:outline-none flex justify-center items-center"
          >
            {navbar ? (
              <svg
                width="20px"
                height="20px"
                viewBox="0 -0.5 21 21"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>close [#1511]</title> <desc>Created with Sketch.</desc>{" "}
                  <defs> </defs>{" "}
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    {" "}
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-419.000000, -240.000000)"
                      fill="currentColor"
                    >
                      {" "}
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        {" "}
                        <polygon
                          id="close-[#1511]"
                          points="375.0183 90 384 98.554 382.48065 100 373.5 91.446 364.5183 100 363 98.554 371.98065 90 363 81.446 364.5183 80 373.5 88.554 382.48065 80 384 81.446"
                        >
                          {" "}
                        </polygon>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            ) : (
              <span className="text-xl"></span>
            )}
          </button>
          <span
            className="text-[13px] uppercase hidden lg:block cursor-pointer"
            onClick={() => setNavbar(!navbar)}
          >
            close
          </span>
        </li>
      </div>
    </div>
  );
};
