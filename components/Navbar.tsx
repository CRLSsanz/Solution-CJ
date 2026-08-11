"use client";
import { Montserrat_Alternates, Oswald, Wallpoet } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/*const bag3 = "https://github.com/CRLSsanz/trade/blob/main/panal1.jpg?raw=true";
const bag0 =
  "https://r4.wallpaperflare.com/wallpaper/583/42/546/blue-lines-digital-art-abstract-wallpaper-29e0087dd13a4dcb6657089fd0c1869d.jpg"; */
const f1 =
  "https://r4.wallpaperflare.com/wallpaper/510/682/484/abstract-hexagon-wallpaper-38f67d08c0007c68604cf15ea8c2c44a.jpg";
//"https://r4.wallpaperflare.com/wallpaper/681/554/339/abstract-planet-space-purple-wallpaper-6970a84df14a9dbb16f7683f30a186ad.jpg";
//"https://r4.wallpaperflare.com/wallpaper/580/191/825/space-planet-abstract-space-art-wallpaper-8b76cc7df351ff090594eba99d9c7c80.jpg";
//"https://r4.wallpaperflare.com/wallpaper/853/586/450/universe-abstract-cube-gradient-wallpaper-6920483dc13a7d2b3657880f4071d63d.jpg";
//"https://c0.wallpaperflare.com/path/91/628/867/adolescent-beautiful-brunette-buy-2475da7e0a113381084dbb5becb8962a.jpg";

const oswald = Oswald({
  weight: ["400"],
  style: "normal",
  variable: "--font-Montserrat",
  subsets: ["latin"],
});

const logotipe = Wallpoet({
  weight: ["400"],
  style: "normal",
  variable: "--font-Oswald",
  subsets: ["latin"],
});

export const Navbar = () => {
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
  ];
  const list2 = [
    {
      id: "01",
      title: "Enchapado mayolica",
      link: "mayolica",
    },
    {
      id: "02",
      title: "Metalica",
      link: "metalica",
    },
    {
      id: "03",
      title: "Instalacion de Rack, Alarmas, Muebles, Cuadros",
      link: "general",
    },
  ];

  return (
    <section className={` `}>
      <div className="w-full">
        <nav className="w-full z-30 h-16 p-2 text-gray-300 flex justify-center items-center bg-black/40 backdrop-blur-2xl">
          <div className="w-[1440] flex flex-row justify-between items-center">
            <div className=" flex flex-row justify-between items-center">
              <div className="relative w-10 h-10 m-1 mr-3">
                <Image
                  src={`/images/sgj.png`} //"/images/electricidad.jpg"
                  alt="02"
                  fill
                  sizes=""
                  //width={250}
                  //height={200}
                  style={{
                    objectFit: "cover", // cover, contain, none
                    objectPosition: "50% 50%",
                  }}
                />
              </div>
              <div>
                <div
                  className={` fam-title w-full flex justify-center font-extrabold text-2xl tracking-widest`}
                >
                  GRUPO SGJ
                </div>
                <div className="fam-title uppercase -mt-1 text-xs font-semibold tracking-wide">
                  soluciones generales
                </div>
              </div>
            </div>

            <div className="hidden lg:flex flex-row gap-4 uppercase text-sm font-semibold tracking-widest whitespace-nowrap">
              <div>
                <Link href="/" className="p-2 hover:border-b border-teal-500">Home</Link>
              </div>
              <div>
                <Link href="/about" className="p-2 hover:border-b border-teal-500">Quienes Somos</Link>
              </div>
              <div
                onClick={() => setNavbar(!navbar)}
                className="cursor-pointer"
              >
                <span className="p-2 hover:border-b border-teal-500">
                  Servicios Profesionales
                  </span>
              </div>
              <div>
                <Link href="/contact" className="p-2 hover:border-b border-teal-500">Contactenos</Link>
              </div> 
              <div></div>
              <div className="w-full">
                <Link
                  href="/"
                  className="px-10 py-2 border-b border border-gray-400/50 bg-gray-800/50 uppercase hover:border-teal-500"
                >
                  Cotizar Projecto
                </Link>
              </div>
            </div>

            <button
              onClick={() => setNavbar(!navbar)}
              className="lg:hidden Xlg:block z-50X w-12 lg:w-14 h-14 rounded-full active:bg-none active:bg-transparent active:animate-ping focus:outline-none flex justify-center items-center"
            >
              <div className="flex flex-col items-center">
                <svg
                  className="hidden"
                  width="30px"
                  height="30px"
                  fill="currentColor"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 290 290"
                >
                  <g>
                    <rect y="220" width="70" height="70" />
                    <rect y="110" width="0" height="0" />
                    <rect width="70" height="70" />
                    <rect x="110" y="220" width="70" height="70" />
                    <rect x="110" y="110" width="70" height="70" />
                    <rect x="110" width="70" height="70" />
                    <rect x="220" y="220" width="0" height="0" />
                    <rect x="220" y="110" width="70" height="70" />
                    <rect x="220" width="70" height="70" />
                  </g>
                </svg>
                <svg
                  width="35px"
                  height="35px"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0H24V24H0z" />
                    <path d="M11.189 13.157L12.57 21 4 21c-.552 0-1-.448-1-1v-5.398l8.189-1.445zM20 3c.552 0 1 .448 1 1v16c0 .552-.448 1-1 1h-5.398L11.428 3H20zM9.397 3l1.444 8.188L3 12.57 3 4c0-.552.448-1 1-1h5.397z" />
                  </g>
                </svg>
                <h1 className="hidden Xlg:block mt-2">MENU</h1>
              </div>
            </button>
            <Link
              hidden
              href="/formulario"
              className="w-16 h-16 text-purple-700 bg-gray-50 text-2xl rounded-full uppercase font-medium flex shadow-lg shadow-purple-300"
            >
              <span className="active:animate-ping m-auto">$</span>
            </Link>
          </div>
        </nav>

        {/** FONDO NEGRO */}
        <div
          hidden
          className={`fixed z-40 top-0 w-full h-screen bg-gray-500/50 ${
            navbar
              ? " opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {" "}
        </div>
        {/** MENU  */}
        <ul
          className={`fixed top-0 z-50 text-white bg-[#222222fe] h-full w-6/6 Xtransform Xtransition-all Xduration-200 flex flex-col rounded-b-md text-center
        ${
          navbar
            ? " opacity-100 pointer-events-auto right-0 duration-500"
            : "opacity-100 pointer-events-none -right-6/6 duration-initial"
        }`}
        >
          <div className="flex flex-row">
            <div className="lg:w-20"></div>
            <div className="w-full -mr-20 lg:mr-0">
              {/** TITLE-1 */}
              <div className="pt-10">
                <span className=" text-green-100 tracking-[3px] text-sm lg:text-base font-bold uppercase">
                  Nuestros{" "}
                  <span className="text-teal-500 Xtext-yellow-300/60 ">
                    servicios
                  </span>
                </span>
              </div>
              {/** LIST-1 */}
              <div className="Xlg:w-[1800px] lg:w-full lg:m-auto text-gray-100 p-0 lg:py-16 grid grid-cols-4 lg:grid-cols-8 lg:gap-1">
                {list.map((item, index) => (
                  <li
                    key={index}
                    className="w-full h-50 lg:h-70 Xbg-gradient-to-r"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.0), rgba(255,255,255,0.0)), url(/images/${item.link}/bar.jpg)`,
                      backgroundSize: "cover",
                      //backgroundAttachment: "fixed",
                      backgroundPosition: "50%",
                    }}
                  >
                    {" "}
                    <Link
                      href={`../#${item.link}`} 
                      className="flex flex-row items-center text-2xl"
                      onClick={() => setNavbar(!navbar)}
                    >
                      <h6 className="w-full bg-black/60 hover:bg-black/90 hover:font-semibold p-3 text-[10px] lg:text-base text-left uppercase -tracking-wide font-semibold">
                        {item.title}
                      </h6>
                    </Link>
                  </li>
                ))}
              </div>

              {/** TITLE-2 */}
              <li className="flex flex-col items-center justify-center border-t pt-10 mb-5 border-gray-700 text-center">
                <img hidden src="logo" width="50px" />
                <span className=" text-green-100 tracking-[3px] text-sm lg:text-base font-bold uppercase">
                  Reformas <span className="text-teal-500 "> Mantenimiento </span>  Decoración
                </span>
              </li>
              {/** LIST-2 */}
              <div className="Xlg:w-[1800px] lg:w-full lg:m-auto text-gray-100 p-0 lg:py-5 grid grid-cols-4 lg:grid-cols-5 lg:gap-4">
                {list2.map((item, index) => (
                  <li
                    key={index}
                    className="w-full h-50 Xbg-gradient-to-r from-green-500/50 to-transparent hover:font-bold"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(255,255,255,0.2)), url(/images/${item.link}/bar.jpg)`,
                      backgroundSize: "cover",
                      //backgroundAttachment: "fixed",
                      backgroundPosition: "50%",
                    }}
                  >
                    {" "}
                    <Link
                      href={`../#${item.link}`}
                      className="flex flex-row items-center text-2xl"
                      onClick={() => setNavbar(!navbar)}
                    >
                      <h6 className="w-full bg-black/60 hover:bg-black/90 hover:font-semibold p-3 text-[10px] lg:text-base text-left uppercase tracking-wide font-semibold">
                        {item.title}
                      </h6>
                    </Link>
                  </li>
                ))}
              </div>

              {/** LINEA */}
              <div className="hidden">
                <p className="w-8 border-t-2 animate__animated animate__bounceInRight animate__slower animate__infinite"></p>
              </div>
            </div>

            {/** BOTON CERRAR */}
            <li className="w-14 ml-5 lg:ml-0 lg:w-20 h-16 lg:h-svh flex flex-col justify-center items-center">
              <button
                onClick={() => setNavbar(!navbar)}
                className="w-10 h-10 lg:m-2 text-gray-200 active:bg-none lg:hover:rotate-90 lg:hover:scale-75 transition-transform duration-500 active:rotate-90 active:scale-75 lg:active:animate-ping focus:outline-none flex justify-center items-center"
              >
                {navbar ? (
                  <svg
                    width="25px"
                    height="25px"
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
                      <title>close [#1511]</title>{" "}
                      <desc>Created with Sketch.</desc> <defs> </defs>{" "}
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
              <span className="text-[13px] uppercase hidden lg:block">close</span>
            </li>
          </div>
        </ul>
      </div>
    </section>
  );
};
