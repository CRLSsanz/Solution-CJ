import { Navbar } from "@/components/Navbar";
import React from "react";

const fondoHome =
  //"https://corpbps.com/wp-content/uploads/2022/12/Servicios-Generales.jpg";
  // "https://decorexpro.com/images/article/orig/2017/12/odnokomnatnaya-kvartira-v-stile-loft-primery-oformleniya-1.jpg";
  "https://joseph.cl/assets/img/heroes/hero-remodelaciones-desktop-1920.jpg";

const page = () => {
  return (
    <section className="w-full">
      <div className="w-full fixed z-50 top-0">
        <Navbar />
      </div>
      <div className="">
        <div
          className="h-[600] bg-[#141414] text-gray-300 flex items-center justify-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${fondoHome})`,
            backgroundSize: "cover",
            //backgroundAttachment: "fixed",
            backgroundPosition: "70%",
          }}
        >
          <div className="w-[1000]">
            <div className="text-7xl">Quienes <br /> Somos</div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row">
        <div
          className="w-1/2 bg-[#141414] text-gray-300 flex items-center justify-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url("https://iax.com.pe/image/servicios4.jpeg")`,
            backgroundSize: "cover",
            //backgroundAttachment: "fixed",
            backgroundPosition: "70%",
          }}
        >
          <div className=""> </div>
        </div>
        <div className="w-1/2 text-gray-600 p-20">
          <h1 className="lg:text-lg md:text-3xl text-amber-300">Por que elegirnos</h1>
          <p className=" w-[500] my-5 text-justify">
            FABRISERVICIOS EIRL. Es una empresa dedicada a brindar soluciones en
            el rubro de construcción, Electricidad, Pintura, Gasfiteria,
            Mantenimiento, enchapado de mayolica y porcelanato, Melamine y
            servicios generales, así mismo realizamos Asesorias, tenemos un
            equipo calificado que esta conformado por profesionales y técnicos
            especialistas de distintas especialidades, altamente capacitados y
            con amplia experiencia, nuestro personal de dirección y operativo
            cuenta con mas de 5 años de solida experiencia
          </p>
          <ul className="list-disc list-inside flex flex-col gap-1">
            <li>Servicio de Remodelación y Refacciones</li>
            <li>Servicio de Electricidad</li>
            <li>Servicio de Carpinteria en Melamina</li>
            <li>Servicio de Gasfiteria</li>
            <li>Servicio de Pintura en general</li>
            <li>Servicio de Drywall</li>
          </ul>
        </div>
      </div>
      <div className="w-full flex flex-row">
        <div className="w-1/2 text-gray-600 flex justify-end text-left py-20">
          <div className="w-[500] ">
            <h1>Nuestros Valores</h1>
            <ul className="list-disc list-inside flex flex-col gap-1 mt-5">
              <li>RESPONSABILIDAD</li>
              <li>DISCIPLINA</li>
              <li>INTEGRIDAD</li>
              <li>PERSEVERANCIA</li>
              <li>RESPETO</li>
              <li>HONESTIDAD</li>
              <li>CALIDAD</li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 bg-[#141414]">
          <div className="p-20">
            <h1>Nuestra misión</h1>
            <p className="w-[500] text-justify my-5">
              Somos una empresa innovadora diseñada para brindar soluciones
              integrales a nuestros clientes. Empleamos el mejor talento humano
              y tecnologico con el fin de suministrar servicios de calidad a los
              clientes y creemos firmemente en que el desarrollo y crecimiento
              de los colaboradores es el indicador mas importante de crecimiento
              de nuestro compañía.
            </p>
            <h1>Nuestra visión</h1>
            <p className="w-[500] text-justify my-5">
              Ser la compañía que más contribuya a brindar soluciones integrales
              a empresas, caracterizada por ser oportuna, innovadora, flexible y
              brindar servicios de alta calidad, que permite el desarrollo y
              crecimiento de nuestros clientes y colaboradores.
            </p>
          </div>
        </div>
      </div>
      <div
        className="h-[500] bg-[#141414] text-gray-300 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,1)), url("https://corpbps.com/wp-content/uploads/2022/12/Servicios-Generales.jpg")`,
          backgroundSize: "cover",
          //backgroundAttachment: "fixed",
          backgroundPosition: "50% 50%",
        }}
      >
        <div className="w-[1200]">
          <div className="flex flex-row gap-12 ">
            <div className="w-1/4 flex flex-col items-center text-center gap-5">
              <svg
                width="54px"
                height="54px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
                    d="M3 3V21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M21 21H3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M7 16L12.25 10.75L15.75 14.25L21 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>            
              <h2>Innovación</h2>
              <p className="leading-7">
                Contamos con capacitaciones constantes, incorporando tecnologías
                y procesos para una mejor flexibilidad en cada trabajo.
              </p>
            </div>
            <div className="w-1/4 flex flex-col items-center text-center gap-5">
              <svg
                fill="currentColor"
                width="54px"
                height="54px"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M 21 3.03125 L 20.34375 3.75 C 18.875 5.367188 17.664063 6.089844 16.65625 6.5625 C 15.648438 7.035156 14.800781 7.175781 13.96875 7.8125 C 13.082031 8.492188 11.792969 9.796875 11.25 12.125 C 10.085938 12.378906 9.234375 12.824219 8.5625 13.40625 C 7.898438 13.980469 7.398438 14.632813 6.78125 15.34375 C 6.777344 15.351563 6.785156 15.367188 6.78125 15.375 C 5.898438 16.390625 5.125 17.484375 3.625 18.0625 L 3 18.3125 L 3 29 L 22.0625 29 C 23.15625 28.941406 23.914063 28.183594 24.375 27.4375 C 24.835938 26.691406 25.089844 25.882813 25.21875 25.21875 C 25.550781 23.527344 26.15625 18.65625 26.15625 18.65625 L 26.1875 18.5625 L 26.1875 18.46875 C 26.15625 17.792969 25.878906 17.21875 25.53125 16.6875 L 26.65625 13.34375 L 28.4375 10.65625 L 28.9375 9.9375 L 28.28125 9.34375 L 21.71875 3.65625 Z M 21.0625 5.78125 L 26.28125 10.3125 L 24.90625 12.34375 L 24.8125 12.4375 L 24.78125 12.59375 L 23.875 15.28125 C 23.402344 15.085938 22.914063 14.949219 22.375 14.96875 L 22.3125 14.96875 L 16 15 L 15 15 L 15 18.875 C 14.859375 19.964844 14.253906 20.386719 13.5 20.6875 C 13.25 20.789063 13.21875 20.734375 13 20.78125 L 13 14.96875 C 12.835938 11.261719 14.15625 10.195313 15.1875 9.40625 C 15.472656 9.1875 16.308594 8.933594 17.5 8.375 C 18.496094 7.90625 19.734375 7.066406 21.0625 5.78125 Z M 11.0625 14.375 C 11.058594 14.601563 10.988281 14.761719 11 15 C 11 15.011719 11 15.019531 11 15.03125 L 11 23 L 12 23 C 12 23 13.070313 22.988281 14.21875 22.53125 C 15.367188 22.074219 16.753906 21.003906 17 19.125 L 17 17 L 22.375 16.96875 L 22.40625 16.96875 C 23.328125 16.917969 24.09375 17.617188 24.15625 18.53125 C 24.152344 18.546875 24.105469 18.917969 24.09375 19 L 20 19 L 20 21 L 23.84375 21 C 23.738281 21.773438 23.640625 22.257813 23.53125 23 L 20 23 L 20 25 L 23.21875 25 C 23.113281 25.445313 22.902344 25.976563 22.65625 26.375 C 22.382813 26.820313 22.148438 26.988281 21.9375 27 L 5 27 L 5 19.53125 C 6.621094 18.671875 7.628906 17.433594 8.28125 16.6875 C 8.957031 15.914063 9.421875 15.328125 9.875 14.9375 C 10.171875 14.683594 10.636719 14.539063 11.0625 14.375 Z"></path>
                </g>
              </svg>
              
              <h2>Experiencia</h2>
              <p className="leading-7">
                Somos personas apasionadas con nuestro trabajo, carismáticos,
                flexibles y determinados a lograr tu satisfacción.
              </p>
            </div>
            <div className="w-1/4 flex flex-col items-center text-center gap-5">
              <svg
                fill="currentColor"
                width="50px"
                height="50px"
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
                  <path d="m12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12c0-6.627-5.373-12-12-12zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"></path>
                </g>
              </svg>
              <h2>Lima Metropolitana</h2>
              <p className="leading-7">
                Atención las 24 horas, los 7 días de la semana, durante los 365
                días del año sin excepción, estamos en Lima Norte.
              </p>
            </div>
            <div className="w-1/4 flex flex-col items-center text-center gap-5">
              <svg
                fill="currentColor"
                height="50px"
                width="50px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 363.715 363.715"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path d="M236.25,222.275c0.865-3.233,0.421-6.608-1.252-9.506l-26.079-45.174c-2.232-3.864-6.393-6.267-10.862-6.267 c-2.186,0-4.347,0.582-6.249,1.681l-13.595,7.85c-5.525-4.053-11.5-7.526-17.834-10.332v-15.662 c0-6.908-5.621-12.526-12.527-12.526H95.688c-6.906,0-12.525,5.618-12.525,12.526v15.661c-6.335,2.806-12.309,6.28-17.835,10.333 l-13.595-7.849c-1.902-1.099-4.064-1.68-6.25-1.68c-4.468,0-8.629,2.401-10.861,6.266L8.542,212.768 c-1.673,2.899-2.118,6.274-1.253,9.507c0.867,3.232,2.939,5.934,5.836,7.605l13.557,7.826c-0.365,3.391-0.559,6.832-0.559,10.318 c0,3.486,0.193,6.928,0.559,10.319l-13.557,7.827c-2.898,1.672-4.969,4.373-5.836,7.606c-0.865,3.231-0.42,6.608,1.253,9.505 l26.079,45.174c2.232,3.865,6.394,6.266,10.861,6.266c2.186,0,4.348-0.58,6.25-1.68l13.596-7.849 c5.525,4.052,11.5,7.526,17.834,10.332v15.661c0,3.346,1.303,6.491,3.67,8.857c2.366,2.365,5.512,3.67,8.855,3.67h52.164 c6.906,0,12.527-5.62,12.527-12.527v-15.662c6.334-2.806,12.308-6.279,17.833-10.332l13.596,7.849c1.902,1.1,4.064,1.68,6.249,1.68 c4.47,0,8.63-2.4,10.862-6.266l26.079-45.174c1.673-2.897,2.117-6.273,1.252-9.505c-0.865-3.233-2.938-5.935-5.834-7.606 l-13.557-7.828c0.365-3.391,0.558-6.833,0.558-10.319c0-3.486-0.192-6.928-0.558-10.318l13.557-7.827 C233.313,228.209,235.385,225.508,236.25,222.275z M121.77,302.423c-30.043,0-54.396-24.354-54.396-54.397 c0-30.041,24.354-54.396,54.396-54.396s54.397,24.355,54.397,54.396C176.167,278.068,151.813,302.423,121.77,302.423z"></path>{" "}
                    <path d="M167.512,93.593c-0.572,2.14-0.277,4.374,0.83,6.29l17.256,29.892c1.479,2.559,4.231,4.146,7.188,4.146 c1.447,0,2.876-0.384,4.137-1.111l9.002-5.197c3.654,2.68,7.606,4.972,11.795,6.827v10.377c0,2.214,0.861,4.295,2.428,5.861 c1.566,1.566,3.647,2.427,5.86,2.427h34.517c4.57,0,8.29-3.718,8.29-8.288v-10.377c4.188-1.856,8.14-4.148,11.794-6.828 l9.004,5.198c1.258,0.728,2.688,1.111,4.135,1.111c2.957,0,5.711-1.588,7.188-4.146l17.256-29.892 c1.108-1.916,1.402-4.15,0.83-6.29c-0.574-2.139-1.944-3.926-3.861-5.033l-8.975-5.182c0.241-2.243,0.373-4.519,0.373-6.825 c0-2.306-0.132-4.581-0.373-6.825l8.975-5.181c1.917-1.107,3.287-2.895,3.861-5.034c0.572-2.139,0.277-4.372-0.83-6.29 l-17.256-29.892c-1.477-2.558-4.23-4.147-7.188-4.147c-1.447,0-2.877,0.385-4.135,1.113l-9.004,5.198 c-3.654-2.68-7.605-4.972-11.794-6.827V8.289c0-4.57-3.72-8.289-8.29-8.289h-34.517c-4.57,0-8.288,3.719-8.288,8.289v10.378 c-4.188,1.856-8.141,4.148-11.794,6.827l-9.003-5.198c-1.261-0.729-2.689-1.113-4.137-1.113c-2.956,0-5.709,1.59-7.188,4.147 l-17.256,29.892c-1.107,1.918-1.402,4.151-0.83,6.29c0.574,2.14,1.945,3.927,3.861,5.034l8.975,5.181 c-0.241,2.243-0.373,4.519-0.373,6.825c0,2.307,0.132,4.582,0.373,6.825l-8.975,5.182 C169.457,89.667,168.086,91.454,167.512,93.593z M243.266,40.558c19.881,0,35.996,16.116,35.996,35.995 s-16.115,35.995-35.996,35.995c-19.88,0-35.995-16.116-35.995-35.995S223.386,40.558,243.266,40.558z"></path>{" "}
                    <path d="M354.003,209.477l-6.179-3.567c0.167-1.544,0.258-3.111,0.258-4.699c0-1.588-0.091-3.154-0.258-4.699l6.179-3.567 c1.319-0.762,2.263-1.992,2.657-3.465c0.395-1.473,0.191-3.01-0.57-4.33l-11.88-20.576c-1.017-1.762-2.911-2.855-4.946-2.855 c-0.996,0-1.98,0.265-2.848,0.766l-6.197,3.578c-2.516-1.845-5.236-3.423-8.119-4.7v-7.144c0-3.145-2.56-5.706-5.705-5.706h-23.76 c-3.147,0-5.706,2.561-5.706,5.706v7.144c-2.884,1.277-5.603,2.855-8.119,4.7l-6.198-3.578c-0.866-0.501-1.851-0.766-2.847-0.766 c-2.035,0-3.931,1.093-4.946,2.855L252.94,185.15c-0.764,1.32-0.967,2.857-0.572,4.33c0.396,1.473,1.339,2.703,2.658,3.465 l6.18,3.567c-0.167,1.544-0.258,3.11-0.258,4.698c0,1.588,0.091,3.154,0.258,4.698l-6.18,3.567 c-1.319,0.761-2.263,1.99-2.658,3.464c-0.395,1.473-0.191,3.011,0.572,4.33l11.879,20.576c1.016,1.762,2.911,2.855,4.946,2.855 c0.996,0,1.98-0.266,2.847-0.766l6.198-3.578c2.516,1.845,5.235,3.422,8.119,4.7v7.144c0,1.523,0.593,2.957,1.671,4.034 c1.078,1.079,2.512,1.672,4.035,1.672h23.76c3.145,0,5.705-2.56,5.705-5.706v-7.144c2.883-1.277,5.604-2.855,8.119-4.7l6.197,3.578 c0.867,0.5,1.852,0.766,2.848,0.766c2.035,0,3.93-1.093,4.946-2.855l11.88-20.576c0.762-1.319,0.965-2.857,0.57-4.33 C356.266,211.467,355.322,210.237,354.003,209.477z M304.515,225.989c-13.686,0-24.778-11.095-24.778-24.778 c0-13.685,11.092-24.779,24.778-24.779c13.685,0,24.777,11.095,24.777,24.779C329.292,214.895,318.199,225.989,304.515,225.989z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              <h2>Logística</h2>
              <p className="leading-7">
                Brindamos capacidad logística para dar soporte, asesoría, atenciones de
                emergencia y servicios post venta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
