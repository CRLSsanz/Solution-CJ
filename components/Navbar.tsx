"use client";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <section>
      <div className="w-full">
        <nav className="fixed right-0 z-30 h-[768px] p-2 m-auto lg:h-full flex justify-between items-center Xbg-transparent bg-[#ccd0cf77]">
          <button
            onClick={() => setNavbar(!navbar)}
            className="z-50XX w-14 h-14 text-gray-700 Xbg-gray-50 rounded-full active:bg-none active:bg-transparent active:animate-ping focus:outline-none flex justify-center items-center"
          >
            {navbar ? (
              <h1 className="text-3xl">hola</h1>
            ) : (
              <div className="flex flex-col items-center">
                <svg
                  width="30px"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="matrix(1, 0, 0, 1, 0, 0)"
                >
                  <path d="M2 5.99519C2 5.44556 2.44556 5 2.99519 5H11.0048C11.5544 5 12 5.44556 12 5.99519C12 6.54482 11.5544 6.99039 11.0048 6.99039H2.99519C2.44556 6.99039 2 6.54482 2 5.99519Z" />
                  <path d="M2 11.9998C2 11.4501 2.44556 11.0046 2.99519 11.0046H21.0048C21.5544 11.0046 22 11.4501 22 11.9998C22 12.5494 21.5544 12.9949 21.0048 12.9949H2.99519C2.44556 12.9949 2 12.5494 2 11.9998Z" />
                  <path d="M2.99519 17.0096C2.44556 17.0096 2 17.4552 2 18.0048C2 18.5544 2.44556 19 2.99519 19H15.0048C15.5544 19 16 18.5544 16 18.0048C16 17.4552 15.5544 17.0096 15.0048 17.0096H2.99519Z" />
                </svg>
                <h1>MENU</h1>
              </div>
            )}
          </button>
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
          className={`fixed z-50 text-white bg-[#222222ee] h-full w-5/6 min-hHH-[400px] transform transition-all duration-1000 flex flex-col rounded-b-md text-center
        ${
          navbar
            ? " opacity-100 pointer-events-auto right-0"
            : "opacity-0 pointer-events-none -right-5/6"
        }`}
        >
          {/** TITLE */}
          <li className="flex flex-col items-center justify-center mx-3 border-b py-3 border-gray-700 text-center">
            <img src="logo" width="50px" />
            <span className="pt-1 text-green-100 tracking-widest text-xs font-medium uppercase">
              Income & Expenses
            </span>
          </li>
          {/** LIST */}
          <div className="lg:w-[768px] lg:m-auto text-gray-100 p-12 lg:py-16 grid grid-cols-1 lg:grid-cols-4 gap-4">
            <li className="w-full py-3 bg-gradient-to-r from-purple-600/20 to-transparent hover:font-bold">
              <Link
                href="#melamina"
                className=" flex flex-row items-center text-3xl"
                onClick={() => setNavbar(!navbar)}
              >
                <p className="text-sm">#melamina</p>
              </Link>
            </li>

            <li className="w-full py-3 bg-gradient-to-r from-green-500/20 to-transparent hover:font-bold">
              <Link
                href="#domotica"
                className="flex flex-row items-center text-2xl"
                onClick={() => setNavbar(!navbar)}
              >
                <h1 className="text-sm">Domotica</h1>
              </Link>
            </li>

            <li className="w-full py-3 bg-gradient-to-r from-pink-400/20 to-transparent hover:font-bold">
              <Link
                href="#camaras"
                className="flex flex-row items-center text-2xl"
                onClick={() => setNavbar(!navbar)}
              >
                <div hidden className="ml-4 w-7 h-7 border rounded-full text-base flex justify-center items-center">
                  $
                </div>
                <p className="ml-5 text-sm">Camaras de vigilancia</p>
              </Link>
            </li>

            <li className="w-full py-3 bg-gradient-to-r from-cyan-600/20 to-transparent hover:font-bold">
              <Link
                href="#"
                className="flex flex-row items-center text-2xl"
                onClick={() => setNavbar(!navbar)}
              >
                <h1 className="text-sm">Transactions</h1>
              </Link>
            </li>
          </div>
          {/** BOTON CERRAR */}
          <li className="fixed bottom-12 right-[45%] mb-6 lg:mb-12 flex justify-center">
            <button
              onClick={() => setNavbar(!navbar)}
              className="w-8 h-8 text-purple-300 rounded-full active:bg-none bg-gray-800 active:animate-ping focus:outline-none flex justify-center items-center shadow-md shadow-purple-300"
            >
              {navbar ? (
                <svg
                  width="20px"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z" />
                </svg>
              ) : (
                <span className="text-xl">hola</span>
              )}
            </button>
          </li>
          {/** LINEA */}
          <p className="w-8 border-t-2 animate__animated animate__bounceInRight animate__slower animate__infinite"></p>
          <li className="py-9 text-gray-200 text-xs border-t border-gray-700 text-center">
            Copyright <span className="font-numero font-light">@ 2023</span>{" "}
            Inc. All rights reserved.{" "}
          </li>
        </ul>
      </div>
    </section>
  );
};
