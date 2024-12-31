"use client";

import Image from "next/image";
import Link from "next/link";
import { carData } from "@/data/content";

export function CardDemo() {
  return (
    <div className="grid w-full max-w-[1300px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 p-6 mx-auto transform group-hover:scale-105 transition duration-200">
      {carData.map((item) => {
        return (
          <div
            key={item.id} // <-- key prop is here
            className="border mb-9 rounded-lg bg-gray-100 group cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <div className="relative group">
              <div className="flex flex-row items-center space-x-4 z-10 relative">
                <Image
                  height={200}
                  width={800}
                  alt="Avatar"
                  src={item.img}
                  className="w-full h-44 object-cover rounded-t-lg"
                />
              </div>
              <div className="text-content mt-4">
                <h1 className="text-xl font-semibold mb-2">{item.title}</h1>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Link href={`/blogpage/${item.id}`}>
                  <button className="px-4 py-2 bg-gray-200 hover:bg-gray-500 text-gray-700 rounded-lg shadow-sm font-medium text-base transition duration-200 ease-in-out">
                    View Recipe
                  </button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
