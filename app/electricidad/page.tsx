import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <main className="w-full flex justify-center bg-cover bg-fixed bg-[50%] bg-[url('https://img.freepik.com/vector-gratis/fondo-abstracto-borroso_1107-166.jpg')] min-h-screen">
      <section className="w-full flex flex-col items-center md:pt-16">
        <div className="w-full md:w-[1280] bg-amber-50">
          <Header></Header>
        </div>

        <div className="w-full md:w-[1280] flex flex-row bg-amber-50 p-5 md:p-10">
          <div className="w-full md:w-3/4">
            <section className="w-full md:pr-10 flex flex-col">
              <div className="relative w-full h-80 md:h-[600] mb-5">
                <Image
                  src={`/images/electri1.jpg`} //"/images/electricidad.jpg"
                  alt="Amigurumi"
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

              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
                <div className="relative w-full h-50 md:h-80">
                  <Image
                    src={`/images/electri2.jpg`} //"/images/electricidad.jpg"
                    alt="Amigurumi"
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
                <div className="relative w-full h-50 md:h-80">
                  <Image
                    src={`/images/electri3.jpg`} //"/images/electricidad.jpg"
                    alt="Amigurumi"
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
                <div className="relative w-full h-50 md:h-80">
                  <Image
                    src={`/images/electri4.jpg`} //"/images/electricidad.jpg"
                    alt="Amigurumi"
                    fill
                    sizes=""
                    //width={250}
                    //height={200}
                    style={{
                      objectFit: "cover", // cover, contain, none
                      objectPosition: "50% 50%",
                    }}
                  />
                  <h1 className="absolute w-full bottom-0 bg-gray-900/80  px-5 py-2 md:p-5 text-xs md:text-base font-bold">Albañilleria</h1>
                </div>
              </div>
            </section>
          </div>
          <div className="hidden md:block w-1/4">
            <Navigation></Navigation>
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;
