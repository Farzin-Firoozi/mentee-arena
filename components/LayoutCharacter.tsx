import React, { ReactNode } from "react";

function LayoutCharacter({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-2 mx-auto gap-5  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  items-center justify-between md:gap-7 w-full ">
      {children}
    </div>
  );
}

export default LayoutCharacter;
