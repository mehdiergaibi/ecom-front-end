import { BsArrowRight } from "react-icons/bs";

function Hero() {
  return (
    <div className="container">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
        <div className="xl:col-span-2 xl:row-start-1 xl:row-end-[-1] relative">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://img.freepik.com/free-photo/handsome-confident-hipster-modelsexy-unshaven-man-dressed-summer-stylish-green-hoodie-jeans-clothes-fashion-male-with-curly-hairstyle-posing-studio-isolated-blue_158538-26586.jpg"
          />
          <div className="absolute max-w-[470] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
            <p className="text-2xl hidden sm:block">
              100% Hight Quality Clothes
            </p>
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold">
              Find Your <br /> Perfect Fit
            </h2>
            <p className="text-gray-500 text-xl pt-4 sm:pt-8">Starting At</p>
            <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-4 sm:pb-8">
              $2.99
            </div>
            <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
              Shop Now, Shine Later <BsArrowRight />
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            className="h-full w-full object-cover rounded-lg"
            src="https://www.shutterstock.com/image-photo/high-fashion-afroamerican-model-black-600nw-1638120652.jpg"
            alt=""
          />
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold">Dress to <br /> Impress, <br/> Every Time</h2>
            <p className="text-gray-500 text-xl pt-4">Starting at</p>
            <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-8">
                $4.99
            </div>
            <div className="bg-accent hover:bg-accentDark text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] cursor-pointer">
            Step Into Style <BsArrowRight />
            </div>
          </div>

        </div>
        <div className="relative">
          <img
            className="h-full w-full object-cover rounded-lg"
            src="https://media.istockphoto.com/id/465136322/photo/cool-young-boy-posing.jpg?s=612x612&w=0&k=20&c=TfHd040_OZ1BVHDBt63EGkrOaOJeqOJw2VNdd2UIzos="
            alt=""
          />
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold">Discover the <br/> Latest Trends</h2>
            <p className="text-gray-500 text-xl pt-4">Starting at</p>
            <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-8">
                $1.99
            </div>
            <div className="bg-accent hover:bg-accentDark text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] cursor-pointer">
            Style Starts Here <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
