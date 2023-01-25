import React from "react";

function Header() {
  return (
    <div className="flex flex-col gap-4 px-3">
      <h2 className=" text-black text-3xl font-bold">Welcome Back </h2>
      <button
        type="button"
        className="bg-btnPrimary w-auto text-white capitalize font-semibold rounded text-sm px-4 py-1 flex justify-center items-center gap-3"
      >
        <svg
          width="12"
          height="13"
          viewBox="0 0 12 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 12H11M7.5625 2.33333L9.75 4.33333M1.9375 8.33333L8.09967 1.53079C8.76316 0.82307 9.83889 0.823069 10.5024 1.53079C11.1659 2.23851 11.1659 3.38596 10.5024 4.09368L4.125 10.6667L1 11.6667L1.9375 8.33333Z"
            stroke="white"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Add New
      </button>
      <button
        type="button"
        className="bg-slate-100 shadow-lg w-auto text-fontPrimary capitalize font-semibold rounded text-sm px-4 py-1 flex justify-center items-center gap-3"
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.50004 1C11.0899 1.00002 14 3.91017 14 7.5C14 11.0898 11.0899 14 7.5 14C3.91015 14 1 11.0898 1 7.5C1 3.91015 3.91017 0.999978 7.50004 1ZM7.50004 1L7.5 7.50002M7.5 7.50002L3.03125 11.9688M7.5 7.50002L3.03125 3.03128"
            stroke="#1C1C1C"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        View Charts
      </button>
    </div>
  );
}

export default Header;
