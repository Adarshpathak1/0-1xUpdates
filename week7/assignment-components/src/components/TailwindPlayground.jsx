import React from "react";
import "../App.css";

const TailwindPlayground = () => {
  return (
    <>
      <div
        className="flex justify-between items-center"
        style={{ border: "2px solid white" }}
      >
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </div><br />
      <hr />
<br />
      <div
        class="grid grid-rows-3 grid-cols-3 gap-10"
        style={{ border: "2px solid white" }}
      >
        <div
          style={{ border: "2px solid white" }}
          class="row-span-1 col-span-1"
        >
          Item 1
        </div>
        <div
          style={{ border: "2px solid white" }}
          class="row-span-3 col-span-2"
        >
          Item 2
        </div>
        <div class="row-span-1 col-span-1">Item 3</div>
      </div>

      <div class="text-lg md:text-xl lg:text-2xl xl:text-3xl">
        Responsive Text
      </div>
      <div class="bg-blue-500 text-white p-4">
        <p class="text-lg">This is a mobile-friendly text.</p>

        <p class="lg:text-xl">This text grows larger on larger screens.</p>
      </div>
      <p class="text-green-600">This text has a green color.</p>
      <button class="bg-red-500 hover:bg-red-700">Click me</button>
    </>
  );
};

export default TailwindPlayground;
