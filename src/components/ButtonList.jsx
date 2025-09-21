import React, { useRef } from "react";
import Button from "./Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "ACD",
  "ABCD",
  "AVDS",
  "Travel",
  "News",
  "Education",
  "Comedy",
  "Movies",
  "Science",
  "Technology",
  "Health",
  "Fitness",
  "Business",
];

const ButtonList = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative flex items-center w-screen bg-white">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-md shadow-md rounded-full p-2 hover:bg-gray-200"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Scrollable List */}
      <div
        ref={scrollRef}
        className="flex overflow-x-hidden whitespace-nowrap space-x-2 scrollbar-hide px-10 py-2 w-full"
      >
        {categories.map((category, index) => (
          <Button key={index} name={category} />
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-md shadow-md rounded-full p-2 hover:bg-gray-200"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default ButtonList;
