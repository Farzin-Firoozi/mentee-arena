import React, { forwardRef, useRef, useState } from "react";
import { SearchIcon } from "./icons/icons";
import { ISearchInput } from "./types/Input.interface";

export const StandardInput: React.FC<ISearchInput> = ({
  value,
  onChange,
  placeholder,
  //   ref,
}) => {
  return (
    <div className="flex w-2/4">
      <input
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        // ref={ref}
        type="text"
        name="Search"
        className=" px-5 border outline-none bg-slate-50 rounded-tl-md rounded-bl-md  border-s-slate-300 w-full h-12"
      />
      <button className=" bg-cyan-600 flex items-center justify-center w-12 h-12 rounded-tr-md rounded-br-md">
        <SearchIcon />
      </button>
    </div>
  );
};
