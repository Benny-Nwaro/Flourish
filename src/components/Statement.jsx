import React from 'react'


export default function Statement() {
  return (
    <main className="flex justify-center items-center px-16 py-20 bg-white max-md:px-5">
      <div className="mt-24 w-full max-w-[1110px] max-md:mt-10 max-md:max-w-full">
        <article className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[54%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3eaf8a7f25a3fa28bf3628f9a6dc5df301029f3d09b9118d13a3925bc25f29b?apiKey=873e47fe7796454e93671642132d9742&"
              alt="Statement of Faith"
              className="grow w-full aspect-[0.9] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-[46%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-black leading-[93%] max-md:mt-10 max-md:max-w-full">
              <p className="justify-center px-8 py-5 text-sm  tracking-normal text-emerald-500 font-serif bg-emerald-50 rounded-[65.48px] max-md:px-5 max-md:max-w-full">
                The Church with Eternity in View
              </p>
              <h1 className="mt-4 text-7xl tracking-tighter leading-[77px] max-md:max-w-full font-serif max-md:text-4xl max-md:leading-10">
                Statement of Faith
              </h1>
              <div className="mt-4 text-base tracking-normal leading-6 font-serif max-md:max-w-full">
                <p>
                  We flourish on every side because God said to us "Flourish!".{" "}
                </p>
                <p>
                  We are a city set on a hill that cannot be hid, our leaves do
                  not wither and everything we do prospers.
                </p>
                <p>
                  We are like trees planted by the rivers of water, because we
                  are a Flourishing Nation!
                </p>
              </div>
              <a
                href="#"
                className="justify-center self-start px-11 py-4 mt-8 text-xl font-serif tracking-normal text-white bg-blue-600 rounded-[58.975px] max-md:px-5"
              >
                About us
              </a>
            </div>
          </div>
        </article>
      </div>
    </main>
  )
}