import Image from "next/image";
import { carData } from "@/data/content";

interface Data {
  id: number;
  title: string;
  img: string;
  description: string;
  ingredients: string[];
  steps: string[];
}

export default async function Blogs({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  const data: Data = carData[parseInt(id) - 1];

  return (
    <main className="max-w-8xl mx-auto p-6 bg-gray-300">
      {/* Go Back Button */}
      <div className="mt-4 mb-3 animate-pulse">
        <a
          href="/"
          className="inline-block text-center justify-center px-8 py-4 text-white bg-gray-500 hover:bg-gray-600 rounded-full shadow-lg font-medium text-lg transition duration-300"
        >
          Go Back
        </a>
      </div>

      {/* Main Content */}
      <div className="max-w-[250px] md:max-w-[650px] lg:max-w-[900px] xl:max-w-[1200px] mx-auto py-10 overflow-clip">
        {/* Title */}
        <div className="font-bold text-gray-900 text-2xl md:text-4xl lg:text-5xl font-serif">
        Summary Of {data.title}
        </div>

        {/* Image */}
        <div className="my-6">
          <Image
            src={data.img}
            alt={data.title}
            width={600}
            height={600}
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>

        {/* Ingredients */}
        <div className="pt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ingredients</h2>
          <ul className="list-disc pl-5 text-gray-700">
            {data.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        {/* Steps */}
        <div className="pt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Steps</h2>
          <ol className="list-decimal pl-5 text-gray-700 space-y-2">
            {data.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">Enjoy your {data.title}</h1>
        </div>
      </div>
    </main>
  );
}
