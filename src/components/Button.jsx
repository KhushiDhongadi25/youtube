import React from "react";

const Button = ({ name }) => {
  return (
    <button className="bg-gray-100 m-2 px-4 py-2 rounded-lg">{name}</button>
  );
};

export default Button;
