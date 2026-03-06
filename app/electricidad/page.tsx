import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <main className="w-full flex justify-center bg-cover bg-fixed bg-[50%] bg-[url('https://img.freepik.com/vector-gratis/fondo-abstracto-borroso_1107-166.jpg')] min-h-screen">
      <section className="flex flex-col items-center pt-16">
        <div className="w-[1280] bg-amber-50">
          <Header></Header>
        </div>

        <div className="w-[1280] flex flex-row bg-amber-50 p-10">
          <div className="w-3/4">
            <section className="w-full pr-10 flex flex-col">
              <div className="relative w-full h-[600] mb-8">
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
              <div className="flex flex-row gap-8">
                <div className="relative w-full h-80">
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
                <div className="relative w-full h-80">
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
                <div className="relative w-full h-80">
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
                  <h1 className="absolute w-full bottom-0 bg-gray-900/80 p-5 font-bold">Albañilleria</h1>
                </div>
              </div>
            </section>
          </div>
          <div className="w-1/4">
            <Navigation></Navigation>
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;
