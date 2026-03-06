import React from "react";

function Header() {
  return (
    <section className="w-full">
      <div className="flex flex-col">
        <div className="bg-gray-900 p-6">
          <ul className="flex flex-row gap-x-4">
            <li>HOME</li>
            <li>SERVICIOS</li>
            <li>ACERCA DE</li>
            <li>CONTACTO</li>
            <li>REDES SOCIALES</li>
          </ul>
        </div>

        <div className="bg-amber-400 p-16 flex flex-row justify-between ">
          <div className="flex flex-row gap-3">
            <div className="flex bg-gray-200 text-amber-600 rounded-full w-16 h-16">
              <svg
                className="m-auto"
                width="2rem"
                height="2rem"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="#4a5565"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.773 3.485l-.78-.184-2.108 2.096-1.194-1.216 2.056-2.157-.18-.792a4.42 4.42 0 0 0-1.347-.228 3.64 3.64 0 0 0-1.457.28 3.824 3.824 0 0 0-1.186.84 3.736 3.736 0 0 0-.875 1.265 3.938 3.938 0 0 0 0 2.966 335.341 335.341 0 0 0-6.173 6.234c-.21.275-.31.618-.284.963a1.403 1.403 0 0 0 .464.967c.124.135.272.247.437.328.17.075.353.118.538.127.316-.006.619-.126.854-.337 1.548-1.457 4.514-4.45 6.199-6.204.457.194.948.294 1.444.293a3.736 3.736 0 0 0 2.677-1.133 3.885 3.885 0 0 0 1.111-2.73 4.211 4.211 0 0 0-.196-1.378zM2.933 13.928a.31.31 0 0 1-.135.07.437.437 0 0 1-.149 0 .346.346 0 0 1-.144-.057.336.336 0 0 1-.114-.11c-.14-.143-.271-.415-.14-.568 1.37-1.457 4.191-4.305 5.955-6.046.1.132.21.258.328.376.118.123.245.237.38.341-1.706 1.75-4.488 4.564-5.98 5.994zm11.118-9.065c.002.765-.296 1.5-.832 2.048a2.861 2.861 0 0 1-4.007 0 2.992 2.992 0 0 1-.635-3.137A2.748 2.748 0 0 1 10.14 2.18a2.76 2.76 0 0 1 1.072-.214h.254L9.649 3.839v.696l1.895 1.886h.66l1.847-1.816v.258zM3.24 6.688h1.531l.705.717.678-.674-.665-.678V6.01l.057-1.649-.22-.437-2.86-1.882-.591.066-.831.849-.066.599 1.838 2.918.424.215zm-.945-3.632L4.609 4.58 4.57 5.703H3.494L2.002 3.341l.293-.285zm7.105 6.96l.674-.673 3.106 3.185a1.479 1.479 0 0 1 0 2.039 1.404 1.404 0 0 1-1.549.315 1.31 1.31 0 0 1-.437-.315l-3.142-3.203.679-.678 3.132 3.194a.402.402 0 0 0 .153.105.477.477 0 0 0 .359 0 .403.403 0 0 0 .153-.105.436.436 0 0 0 .1-.153.525.525 0 0 0 .036-.184.547.547 0 0 0-.035-.184.436.436 0 0 0-.1-.153L9.4 10.016z"
                />
              </svg>
            </div>
            <div className="text-3xl font-semibold uppercase">
              <h1>Servicios</h1>
              <h1 className="text-gray-600 -mt-1">en General</h1>
            </div>
          </div>

          <div className="text-gray-600">
            <div className="flex flex-row justify-center items-center gap-2">
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
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              <span className="text-2xl font-extralight fam-number">
                939 065 454
              </span>
              <span className="bg-gray-800 px-10 py-3 text-amber-200">
                {" "}
                WhatsApp
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
