import {} from "react-router-dom";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img src="./public/vector-home.jpg" alt="image" />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Reacting with Purpose, Building with Passion
            </h2>
            <p className="mt-6 text-gray-600">
              I am <bold className="font-bold text-lg">Harsh Ninave,</bold> a 19-year-old Frontend
              Developer in India, skilled in crafting impactful websites. I want to pivot my career
              toward DevOps and backend development to broaden my professional expertise. I believe
              in mixing creativity with technical skills to make awesome online experiences
            </p>
            <p className="mt-4 text-gray-600">
              React is not about making things easier; It is about making things predictable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
