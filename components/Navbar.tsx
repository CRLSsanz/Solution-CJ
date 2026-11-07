"use client";
import {
  Audiowide,
  Manrope,
  Montserrat_Alternates,
  Orbitron,
  Oswald,
  Wallpoet,
} from "next/font/google";
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

const oswald = Orbitron({
  weight: ["700"],
  style: "normal",
  variable: "--font-Montserrat",
  subsets: ["latin"],
});

const logotipe = Manrope({
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
        <nav className="w-full z-30 h-16 px-2 text-gray-300 flex justify-center items-center bg-black/40 backdrop-blur-2xl border-b border-gray-600">
          <div className="w-[1320] flex flex-row justify-between items-center">
            <div className=" flex flex-row justify-between items-center">
              <div className="hidden relative w-9 h-9 m-1 mr-3">
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
                  className={` ${oswald.className} w-full text-2xl tracking-widest `}
                >
                  SGJ
                </div>
                <div className="hidden fam-title -mt-1 text-[10px] font-semibold tracking-wider">
                  ·Soluciones Generales
                </div>
              </div>
            </div>

            <div className="hidden lg:flex flex-row items-center gap-4 uppercase text-xs font-semibold tracking-widest whitespace-nowrap">
              <div>
                <Link href="/" className="p-2 hover:border-b border-teal-500">
                  Inicio
                </Link>
              </div>
              <div>
                <Link
                  href="/about"
                  className="p-2 hover:border-b border-teal-500"
                >
                  Quienes Somos
                </Link>
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
                <Link
                  href="../contact"
                  className="p-2 hover:border-b border-teal-500"
                  onClick={() => setNavbar(!navbar)}
                >
                  Contactenos
                </Link>
              </div>
              <div></div>
              <div className="w-full">
                <Link
                  href="https://api.whatsapp.com/send?phone=+51939065454&text=Hola, estoy interesado en cotizar un proyecto."
                  className="px-10 py-2.5 bg-teal-600/90 hover:bg-teal-500 flex flex-row items-center justify-center gap-x-2 animate-bounce2"
                >
                  <span className="">
                    <svg
                      fill="#ffffff"
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path d="m15.271 13.21c.578.185 1.078.416 1.543.7l-.031-.018c.529.235.986.51 1.403.833l-.015-.011c.02.061.032.13.032.203 0 .011 0 .021-.001.032v-.001c-.015.429-.11.832-.271 1.199l.008-.021c-.231.463-.616.82-1.087 1.01l-.014.005c-.459.243-1.001.393-1.576.411h-.006c-1.1-.146-2.094-.484-2.988-.982l.043.022c-1.022-.468-1.895-1.083-2.636-1.829l-.001-.001c-.824-.857-1.579-1.795-2.248-2.794l-.047-.074c-.636-.829-1.041-1.866-1.1-2.995l-.001-.013v-.124c.032-.975.468-1.843 1.144-2.447l.003-.003c.207-.206.491-.335.805-.341h.001c.101.003.198.011.292.025l-.013-.002c.087.013.188.021.292.023h.003c.019-.002.04-.003.062-.003.13 0 .251.039.352.105l-.002-.001c.107.118.189.261.238.418l.002.008q.124.31.512 1.364c.135.314.267.701.373 1.099l.014.063c-.076.361-.268.668-.533.889l-.003.002q-.535.566-.535.72c.004.088.034.168.081.234l-.001-.001c.405.829.936 1.533 1.576 2.119l.005.005c.675.609 1.446 1.132 2.282 1.54l.059.026c.097.063.213.103.339.109h.002q.233 0 .838-.752t.804-.752zm-3.147 8.216h.022c1.357 0 2.647-.285 3.814-.799l-.061.024c2.356-.994 4.193-2.831 5.163-5.124l.024-.063c.49-1.113.775-2.411.775-3.775s-.285-2.662-.799-3.837l.024.062c-.994-2.356-2.831-4.193-5.124-5.163l-.063-.024c-1.113-.49-2.411-.775-3.775-.775s-2.662.285-3.837.799l.062-.024c-2.356.994-4.193 2.831-5.163 5.124l-.024.063c-.49 1.117-.775 2.419-.775 3.787 0 2.141.698 4.12 1.879 5.72l-.019-.026-1.225 3.613 3.752-1.194c1.49 1.01 3.327 1.612 5.305 1.612h.047zm0-21.426h.033c1.628 0 3.176.342 4.575.959l-.073-.029c2.825 1.197 5.028 3.4 6.196 6.149l.029.076c.588 1.337.93 2.896.93 4.535s-.342 3.198-.959 4.609l.029-.074c-1.197 2.825-3.4 5.028-6.149 6.196l-.076.029c-1.327.588-2.875.93-4.503.93-.011 0-.023 0-.034 0h.002c-.016 0-.034 0-.053 0-2.059 0-3.992-.541-5.664-1.488l.057.03-6.465 2.078 2.109-6.279c-1.051-1.714-1.674-3.789-1.674-6.01 0-1.646.342-3.212.959-4.631l-.029.075c1.197-2.825 3.4-5.028 6.149-6.196l.076-.029c1.327-.588 2.875-.93 4.503-.93h.033-.002z"></path>
                      </g>
                    </svg>
                  </span>
                  <span>Whatsapp</span>
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
                  className="hidden"
                  width="64px"
                  height="64px"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M16 5H0V4h16v1zm0 8H0v-1h16v1zm0-4.008H0V8h16v.992z"></path>
                  </g>
                </svg>

                <svg
                  className="hidden"
                  width="40px"
                  height="40px"
                  viewBox="0 0 24.00 24.00"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="matrix(-1, 0, 0, 1, 0, 0)"
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
                      d="M3.5 7.5H20.5"
                      stroke="#fff"
                      strokeLinecap="square"
                    ></path>{" "}
                    <path
                      d="M3.5 12H17.5"
                      stroke="#fff"
                      strokeLinecap="square"
                    ></path>{" "}
                    <path
                      d="M3.5 16.5H20.5"
                      stroke="#fff"
                      strokeLinecap="square"
                    ></path>{" "}
                  </g>
                </svg>

                <svg
                  fill="#ffffff"
                  width="30px"
                  height="30px"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="matrix(-1, 0, 0, 1, 0, 0)"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title></title>{" "}
                    <g data-name="menu " id="menu_">
                      {" "}
                      <path d="M29,6H3A1,1,0,0,0,3,8H29a1,1,0,0,0,0-2Z"></path>
                      <path d="M3,17H16a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Z"></path>
                      <path d="M25,24H3a1,1,0,0,0,0,2H25a1,1,0,0,0,0-2Z"></path>
                    </g>{" "}
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
              <div className="py-5 lg:py-10">
                <span className=" text-green-100 tracking-[3px] text-sm lg:text-base font-bold uppercase">
                  Nuestros{" "}
                  <span className="text-teal-500 Xtext-yellow-300/60 ">
                    servicios
                  </span>
                </span>
              </div>
              {/** LIST-1 */}
              <div className="Xlg:w-[1800px] lg:w-full lg:m-auto text-gray-100 grid grid-cols-4 lg:grid-cols-8 lg:gap-1 gap-y-1">
                {list.map((item, index) => (
                  <Link
                    key={index}
                    href={`../#${item.link}`}
                    onClick={() => setNavbar(!navbar)}
                  >
                    <div
                      key={index}
                      className="w-full h-40 lg:h-70 Xbg-gradient-to-r"
                      style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.0), rgba(255,255,255,0.0)), url(/images/${item.link}/bar.jpg)`,
                        backgroundSize: "cover",
                        //backgroundAttachment: "fixed",
                        backgroundPosition: "50%",
                      }}
                    >
                      {" "}
                      <div className="flex flex-row items-center text-2xl">
                        <h1 className="w-full bg-black/60 hover:bg-black/90 hover:font-semibold p-2 text-[10px] lg:text-base text-left uppercase -tracking-wide font-semibold">
                          {item.title}
                        </h1>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/** MENU */}
              <div className="flex flex-col items-center font-semibold justify-center text-center my-5">
                <Link href="/" className="p-2">
                  Home
                </Link>
                <Link
                  href="/about"
                  className="w-full p-2 border-t border-b border-gray-700"
                  onClick={() => setNavbar(!navbar)}
                >
                  Quienes Somos
                </Link>
                <Link
                  href="/contact"
                  className="p-2"
                  onClick={() => setNavbar(!navbar)}
                >
                  Contact
                </Link>
              </div>

              {/** LIST-2 */}
              <div className="Xlg:w-[1800px] lg:w-full lg:m-auto text-gray-100 grid grid-cols-4 lg:grid-cols-5 lg:gap-4">
                {list2.map((item, index) => (
                  <li
                    key={index}
                    className="w-full h-40 Xbg-gradient-to-r from-green-500/50 to-transparent hover:font-bold"
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
                      <h6 className="w-full bg-black/60 hover:bg-black/90 hover:font-semibold p-2 text-[10px] lg:text-base text-left uppercase tracking-wide font-semibold">
                        {item.title}
                      </h6>
                    </Link>
                  </li>
                ))}
              </div>
              {/** TITLE-2 */}
              <li className="flex flex-col items-center justify-center Xborder-t border-gray-700 text-center">
                <span className="py-5 lg:py-10 text-green-100 tracking-[3px] text-sm lg:text-base font-bold uppercase">
                  Reformas y{" "}
                  <span className="text-teal-500 "> Mantenimiento </span>{" "}
                </span>
              </li>

              {/** LINEA */}
              <div className="hidden">
                <p className="w-8 border-t-2 animate__animated animate__bounceInRight animate__slower animate__infinite"></p>
              </div>
            </div>

            {/** BOTON CERRAR */}
            <li className="w-14 ml-5 lg:ml-0 lg:w-20 h-16 lg:h-svh flex flex-col justify-center items-center">
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
              <span
                className="text-[13px] uppercase hidden lg:block cursor-pointer"
                onClick={() => setNavbar(!navbar)}
              >
                close
              </span>
            </li>
          </div>
        </ul>
      </div>
    </section>
  );
};
