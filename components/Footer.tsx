"use client";

import Link from "next/link";
import { useState } from "react";

function Footer() {
  const [time, setTime] = useState(0);

  setTimeout(() => {
    setTime(time + 1);
  }, 1000);

  return (
    <div className="px-5 sm:px-20 md:px-5 lg:px-20 xl:px-32 2xl:px-56 pb-20">
      <div className="hidden Mmd:flex md:justify-center px-14 mb-10">
        <div className="md:w-[700px] flex flex-col md:flex-row justify-evenly text-center bg-gradient-to-br from-teal-500 to-blue-500/80 rounded-tl-[80px] rounded-br-[80px] rounded-bl-2xl rounded-tr-[40px] py-10 -mt-44 shadow-md">
          <div className="mb-10">
            <h1 className="text-5xl fam-number font-thin">37</h1>
            <h4 className="italic">Projects Delivere!</h4>
          </div>
          <div className="mb-10">
            <h1 className="text-5xl fam-number font-thin">5</h1>
            <h4 className="italic">Years Experience</h4>
          </div>
          <div className="mb-10">
            <h1 className="text-5xl fam-number font-thin">{time}</h1>
            <h4 className="italic">Seconds on this site!</h4>
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-10">
        <a href="#sectionHome" className="p-2 text-white animate-bounce">
          <svg
            stroke="currentColor"
            fill="currentColor"
            viewBox="0 0 511.74 511.74"
            height="1.5em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M508.788,371.087L263.455,125.753c-4.16-4.16-10.88-4.16-15.04,0L2.975,371.087c-4.053,4.267-3.947,10.987,0.213,15.04 c4.16,3.947,10.667,3.947,14.827,0l237.867-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213 C512.734,381.753,512.734,375.247,508.788,371.087z"></path>
          </svg>
        </a>
      </div>

      <div className="text-gray-400 flex flex-col md:flex-row justify-between">
        <div className="md:w-1/3 mb-5">
          <h1 className="text-gray-100 fam-logo font-bold tracking-wider text-2xl mb-5">
            REFORMAS C<span className="text-cyan-500">&</span>J
          </h1>
          <p className="md:leading-loose">
            Detras de Servicios Generales
            <span className="font-semibold"> C&J </span> hay un equipo de
            <span className="font-semibold"> profesionales </span>
            con años de experiencia con trabajo
            <span className="font-semibold"> honesto </span> y de
            <span className="font-semibold"> calidad</span>. Tenemos todo lo que
            tu
            <span className="font-semibold"> proyecto</span> necesita.
            <br /> Todo
            <span className="font-semibold"> Lima Norte </span>.
          </p>
          <p className="hidden Mmd:leading-loose">
            Soy un desarrollador creativo independiente. Realizo diseños de
            interacción hasta sistemas de diseño escalables, aplicaciones de una
            sola página y algo más experimental. Ayudo a personas increíbles a
            crear proyectos web ambiciosos pero accesibles: cuanto más salvajes,
            mejor.
          </p>
        </div>

        <div className="mb-5">
          <h2 className="text-gray-200 text-2xl mb-5">Navegate</h2>
          <h4 className="leading-loose">
            <Link
              href={`/`}
              className="py-5 bg-teal-500X hover:font-bold hover:-ml-1"
            >
              Home
            </Link>
            <br />
            <Link
              href={`/mayolica`}
              className="py-5 bg-teal-500X hover:font-bold hover:-ml-1"
            >
              Mayolicas
            </Link>
            <br />
            <Link
              href={`/metales`}
              className="py-5 bg-teal-500X hover:font-bold hover:-ml-1"
            >
              Metales
            </Link>
            <br />
            <Link
              href={`/racktv`}
              className="py-5 bg-teal-500X hover:font-bold hover:-ml-1"
            >
              Rack TV
            </Link>
          </h4>
        </div>

        <div className="mb-5">
          <h2 className="text-gray-200 text-2xl mb-5">Contact</h2>
          <div className="mb-5 leading-loose">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="inline-block w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <span className=" ml-3">reformacyj@gmail.com</span>
            <br />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="inline-block w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <span className="fam-number ml-3">01 939 065 454</span> <br />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="inline-block w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
              />
            </svg>
            <span className="fam-number ml-3">+51 939 065 454</span>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-gray-200 text-2xl mb-5">Follow</h2>

          {/** SVG SOCIAL */}
          <div className="flex flex-wrap md:flex-col lg:flex-row JJjustify-center mb-10">
            <div className="bg-transparent border border-gray-500 rounded-full w-8 h-8 flex mr-2 md:mb-2">
              <svg
                className="m-auto"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fillRule="nonzero"
                    d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="bg-transparent border border-gray-500 rounded-full w-8 h-8 flex mr-2 md:mb-2">
              <svg
                className="m-auto"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1.2em"
                width="1.2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"></path>
                </g>
              </svg>
            </div>
            <div className="bg-transparent border border-gray-500 rounded-full w-8 h-8 flex mr-2 md:mb-2">
              <svg
                className="m-auto"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="M28,6.937c-0.957,0.425 -1.985,0.711 -3.064,0.84c1.102,-0.66 1.947,-1.705 2.345,-2.951c-1.03,0.611 -2.172,1.055 -3.388,1.295c-0.973,-1.037 -2.359,-1.685 -3.893,-1.685c-2.946,0 -5.334,2.389 -5.334,5.334c0,0.418 0.048,0.826 0.138,1.215c-4.433,-0.222 -8.363,-2.346 -10.995,-5.574c-0.458,0.788 -0.721,1.704 -0.721,2.683c0,1.85 0.941,3.483 2.372,4.439c-0.874,-0.028 -1.697,-0.268 -2.416,-0.667c0,0.023 0,0.044 0,0.067c0,2.585 1.838,4.741 4.279,5.23c-0.447,0.122 -0.919,0.187 -1.406,0.187c-0.343,0 -0.678,-0.034 -1.003,-0.095c0.679,2.119 2.649,3.662 4.983,3.705c-1.825,1.431 -4.125,2.284 -6.625,2.284c-0.43,0 -0.855,-0.025 -1.273,-0.075c2.361,1.513 5.164,2.396 8.177,2.396c9.812,0 15.176,-8.128 15.176,-15.177c0,-0.231 -0.005,-0.461 -0.015,-0.69c1.043,-0.753 1.948,-1.692 2.663,-2.761z"></path>
                </g>
              </svg>
            </div>
            {/** prueba */}
            <div className="bg-transparent border border-gray-500 rounded-full w-8 h-8 flex mr-0">
              <svg
                className="m-auto"
                fill="currentColor"
                viewBox="-337 273 123.5 256"
                height="1rem"
                width="1rem"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M-260.9,327.8c0-10.3,9.2-14,19.5-14c10.3,0,21.3,3.2,21.3,3.2l6.6-39.2c0,0-14-4.8-47.4-4.8c-20.5,0-32.4,7.8-41.1,19.3 c-8.2,10.9-8.5,28.4-8.5,39.7v25.7H-337V396h26.5v133h49.6V396h39.3l2.9-38.3h-42.2V327.8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/** COPYRIGHT */}
    </div>
  );
}

export default Footer;
