import React, { useState } from "react";
// import "../index.css";

const colors = [
  {
    name: "Red",
    value: "#771d1d",
  },
  {
    name: "Green",
    value: "#2b771d",
  },
  {
    name: "Blue",
    value: "#1d2477",
  },
  {
    name: "Violet",
    value: "#4c1d77",
  },
  {
    name: "Black",
    value: "#292929",
  },
  {
    name: "Yellow",
    value: "#76771d",
  },
];
const BackgroundChanger = () => {
  const [color, setColor] = useState();

  return (
    <div
      style={{
        backgroundColor: color,
      }}
    >
      <div className="flex flex-col justify-end w-screen h-screen">
        <div className="flex item-center justify-center py5 bg-slate-200">
          <div className="flex gap-4 px-4 py-3 rounded-md shadow-lg bg-slate-200 shadow-black">
            {colors.map((value) => {
              return (
                <button
                  key={value.value}
                  onClick={() => {
                    setColor(value.value);
                  }}
                  className="w-20 p-2 text-white rounded-lg"
                  style={{ background: value.value }}
                  type="button"
                >
                  {value.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundChanger;
