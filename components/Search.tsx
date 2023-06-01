import React, { useEffect, useRef, useState } from "react";
import { SearchIcon } from "./icons/icons";
import { StandardInput } from "./StandardInput";
import axios from "axios";
import { Config } from "./config";
import { ISearchInput } from "./types/Input.interface";
import { useRouter } from "next/router";

export type Ref = HTMLInputElement;

export default function Search({ query, onChange }: ISearchInput) {
  const router = useRouter();

  return (
    <div className=" w-full mx-auto  relative">
      <div className="w-full flex items-center justify-between fixed pb-7 pt-6 mx-auto container bg-white shadow-xl space-y-4">
        <div className="flex items-center justify-start  text-xl font-medium ">
          <p className="pl-5" onClick={() => router.push("/")}>
            home
          </p>
          <p className="pl-10" onClick={() => router.push("/bookmark")}>
            bookmark
          </p>
        </div>

        <div className="flex w-2/4">
          <input
            onChange={onChange}
            placeholder="Search character..."
            value={query}
            type="text"
            name="Search"
            className=" px-5 border outline-none bg-slate-50 rounded-tl-md rounded-bl-md  border-s-slate-300 w-full h-12"
          />
          <button className=" bg-cyan-600 flex items-center justify-center w-12 h-12 rounded-tr-md rounded-br-md">
            <SearchIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
