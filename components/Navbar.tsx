"use client";
import { Montserrat_Alternates, Oswald } from "next/font/google";
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

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const list = [
    {
      id: "01",
      title: "Electricidad",
      text: "Brindamos servicios de electricidad desde instalaciones domiciliarias hasta proyectos comerciales. Incorporamos la tecnología en tu residencia mediante la domótica.",
      link: "+ info servicio electrico",
      link2: "electricidad",
      ima: "electricidad.jpg",
    },
    {
      id: "02",
      title: "camara de vigilancia",
      text: "Transforma tus espacios, ampliacion y remodelacion de oficinas, casas, departamentos. Tendencia actual en decoracion de interiores.",
      link: "+ info servicio drywall",
      link2: "drywall",
      ima: "drywall.jpg",
    },
    {
      id: "03",
      title: "Melamina",
      text: "Diseño y fabricación de muebles en melamina. Mantenimiento y remodelacion para sus espacios u oficina, armado de closet y mas.",
      link: "+ info servicio melamina",
      link2: "melamina",
      ima: "melamina.jpg",
    },
    {
      id: "04",
      title: "Pintura",
      subtitle: "Interior y Exterior",
      text: "Ofrecemos soluciones personalizadas para cualquier necesidad de pintura para mejorar la apariencia de tu vivienda o darle un nuevo look a tu oficina.",
      link: "+ info servicio pintura",
      link2: "pintura",
      ima: "pintura.jpg",
    },
    {
      id: "05",
      title: "instalacion de ract tv ",
      subtitle: "Instalacion de Tanques",
      text: "Servicio de gasfiteria en general ofrecemos inspección, reparación e instalación de sanitarios y tuberias en cualquier ambiente de su vivienda o negocio.",
      link: "+ info servicio gasfiteria",
      link2: "gasfiteria",
      ima: "gasfiteria.jpg",
    },
    {
      id: "06",
      title: "Vigilancia",
      subtitle: "Camaras de Seguridad",
      text: "Cuida lo que mas quieres desde cualquier lugar remoto con un sistema profesional de video vigilancia de alta calidad para tu hogar o negocio.",
      link: "+ info servicio vigilancia",
      link2: "camara",
      ima: "camara.jpg",
    },
    {
      id: "07",
      title: "Electricidad",
      text: "Brindamos servicios de electricidad desde instalaciones domiciliarias hasta proyectos comerciales. Incorporamos la tecnología en tu residencia mediante la domótica.",
      link: "+ info servicio electrico",
      link2: "electricidad",
      ima: "electricidad.jpg",
    },
    {
      id: "08",
      title: "Drywall",
      text: "Transforma tus espacios, ampliacion y remodelacion de oficinas, casas, departamentos. Tendencia actual en decoracion de interiores.",
      link: "+ info servicio drywall",
      link2: "drywall",
      ima: "drywall.jpg",
    },
  ];
  const list2 = [
    {
      id: "01",
      title: "Electricidad",
      text: "Brindamos servicios de electricidad desde instalaciones domiciliarias hasta proyectos comerciales. Incorporamos la tecnología en tu residencia mediante la domótica.",
      link: "+ info servicio electrico",
      link2: "electricidad",
      ima: "electricidad.jpg",
    },
    {
      id: "02",
      title: "Drywall",
      text: "Transforma tus espacios, ampliacion y remodelacion de oficinas, casas, departamentos. Tendencia actual en decoracion de interiores.",
      link: "+ info servicio drywall",
      link2: "drywall",
      ima: "drywall.jpg",
    },
    {
      id: "03",
      title: "Melamina",
      text: "Diseño y fabricación de muebles en melamina. Mantenimiento y remodelacion para sus espacios u oficina, armado de closet y mas.",
      link: "+ info servicio melamina",
      link2: "melamina",
      ima: "melamina.jpg",
    },
    {
      id: "04",
      title: "camara de vigilancia",
      subtitle: "Interior y Exterior",
      text: "Ofrecemos soluciones personalizadas para cualquier necesidad de pintura para mejorar la apariencia de tu vivienda o darle un nuevo look a tu oficina.",
      link: "+ info servicio pintura",
      link2: "camaras",
      ima: "Xpintura.jpg",
    },
  ];

  return (
    <section className={` ${oswald.className} antialiased `}>
      <div className="w-full">
        <nav className="fixed right-0 z-30 h-14 p-2 text-gray-700 lg:h-full flex flex-col justify-center items-center Xbg-transparent bg-[#ccd0cf77] rounded-bl-md ">
          <button
            onClick={() => setNavbar(!navbar)}
            className="z-50XX w-12 lg:w-14 h-14 rounded-full active:bg-none active:bg-transparent active:animate-ping focus:outline-none flex justify-center items-center"
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
            </div>
          </button>
          <h1 className="hidden lg:block mt-2">MENU</h1>
          <Link
            hidden
            href="/formulario"
            className="w-16 h-16 text-purple-700 bg-gray-50 text-2xl rounded-full uppercase font-medium flex shadow-lg shadow-purple-300"
          >
            <span className="active:animate-ping m-auto">$</span>
          </Link>
        </nav>

        {/** FONDO NEGRO */}
        <div
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
          className={`fixed z-50 text-white bg-[#222222ee] h-full w-6/6 min-hHH-[400px] Xtransform Xtransition-all Xduration-200 flex flex-col rounded-b-md text-center
        ${
          navbar
            ? " opacity-100 pointer-events-auto right-0 duration-1000"
            : "opacity-100 pointer-events-none -right-6/6 duration-initial"
        }`}
        >
          <div className="flex flex-row">
            <div className="lg:w-20"></div>
            <div className="w-full -mr-20 lg:mr-0">
              {/** TITLE-1 */}
              <div className="p-4">
                <span className="py-4 text-green-100 tracking-[5px] text-sm lg:text-base font-bold uppercase">
                  Nuestros{" "}
                  <span className="text-yellow-300/60 ">servicios</span>
                </span>
              </div>
              {/** LIST-1 */}
              <div className="Xlg:w-[1800px] lg:w-full lg:m-auto text-gray-100 p-0 lg:py-16 grid grid-cols-4 lg:grid-cols-8 lg:gap-1">
                {list.map((item, index) => (
                  <li
                    key={index}
                    className="w-full h-50 lg:h-70 p-3 Xbg-gradient-to-r from-green-500/20 to-transparent hover:font-bold"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(255,255,255,0.2)), url(/images/${item.ima})`,
                      backgroundSize: "cover",
                      //backgroundAttachment: "fixed",
                      backgroundPosition: "50%",
                    }}
                  >
                    {" "}
                    <Link
                      href={`#${item.link2}`}
                      className="flex flex-row items-center text-2xl"
                      onClick={() => setNavbar(!navbar)}
                    >
                      <h1 className="text-[10px] lg:text-base text-left uppercase tracking-widest">
                        {item.title}
                      </h1>
                    </Link>
                  </li>
                ))}
              </div>

              {/** TITLE-2 */}
              <li className="flex flex-col items-center justify-center border-b py-5 border-gray-700 text-center">
                <img hidden src="logo" width="50px" />
                <span className="pt-1 text-green-100 tracking-[5px] text-sm lg:text-base font-bold uppercase">
                  our <span className="text-yellow-300/60 ">projects</span>
                </span>
              </li>
              {/** LIST-2 */}
              <div className="Xlg:w-[1800px] lg:w-full lg:m-auto text-gray-100 p-0 lg:py-16 grid grid-cols-4 lg:grid-cols-5 lg:gap-4">
                {list2.map((item, index) => (
                  <li
                    key={index}
                    className="w-full h-50 p-3 Xbg-gradient-to-r from-green-500/20 to-transparent hover:font-bold"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(255,255,255,0.2)), url(/images/${item.ima})`,
                      backgroundSize: "cover",
                      //backgroundAttachment: "fixed",
                      backgroundPosition: "50%",
                    }}
                  >
                    {" "}
                    <Link
                      href={`#${item.link2}`}
                      className="flex flex-row items-center text-2xl"
                      onClick={() => setNavbar(!navbar)}
                    >
                      <h1 className="text-xs lg:text-base uppercase tracking-widest">
                        {item.title}
                      </h1>
                    </Link>
                  </li>
                ))}
              </div>

              {/** LINEA */}
              <p className="w-8 border-t-2 animate__animated animate__bounceInRight animate__slower animate__infinite"></p>
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
              <span className="text-sm uppercase hidden lg:block">close</span>
            </li>
          </div>
          <div></div>
        </ul>
      </div>
    </section>
  );
};
