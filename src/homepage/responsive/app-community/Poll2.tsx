import React from "react";
import Avatar from "../../../assets/Avatar.png";
import { FcPieChart } from "react-icons/fc";
import { AiOutlineDelete } from "react-icons/ai";

const deleteBtnIcon = {
  color: "white",
  fontSize: "19px",
};

function Poll2() {
  return (
    <div className="poll1 flex flex-col ml-5 mr-5 border h-fit bg-white rounded-md">
      <div className=" userChart flex justify-between items-center">
        <div className="User flex mt-5 ml-5 relative">
          <img
            src={Avatar}
            alt="Profile 1"
            className="w-10 h-10 rounded-full mr-2 border-2 border-blue-500"
          />
          <h5 className="text-sm">
            <span className="bottom-1 left-8 absolute w-3 h-3 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
            Ted <br />
            <h4>21 Jul</h4>
          </h5>
        </div>
        <FcPieChart className="mr-5 mt-5 w-10 h-10" />
      </div>
      <p className="mt-5 ml-5 font-light text-[15px] md:text-[17px]">
        here is the new menus for this lunch. <br />
        Please vote for 3 food options.
      </p>
      <div className="food-menu grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mr-5 ml-5 gap-4 mt-5 text-gray-800">
        <div className="text-[15px] font-sans font-bold border border-neutral-300 shadow px-5 py-3 rounded-xl ">
          Somlor Korko
        </div>
        <div className="text-[15px] font-sans font-bold border border-neutral-300 shadow px-5 py-3 rounded-xl">
          Kangkep Boak
        </div>
        <div className="text-[15px] font-sans font-bold border border-neutral-300 shadow px-5 py-3 rounded-xl">
          Khmer Curry
        </div>
        <div className="text-[15px] font-sans font-bold border border-neutral-300 shadow px-5 py-3 rounded-xl">
          Fried Chicken
        </div>
      </div>
      <div className="progress-bar mt-7 ml-5 mr-5">
        <div className="mb-1 text-base font-medium dark:text-white flex justify-between items-center">
          <h1 className="text-[12px] md:text-[15px]">Solor Korko</h1>
          <h1 className="text-[12px] text-sky-500 md:text-[15px]">80%</h1>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2 mb-4 dark:bg-gray-100">
          <div className="w-3/4 bg-sky-500 h-full rounded-full dark:bg-blue-500"></div>
        </div>
        <div className="mb-1 text-base font-medium dark:text-white flex justify-between items-center">
          <h1 className="text-[12px] md:text-[15px]">Kangkep Boak</h1>
          <h1 className="text-[12px] text-sky-500 md:text-[15px]">70%</h1>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2 mb-4 dark:bg-gray-100">
          <div className="w-2/3 bg-sky-500 h-full rounded-full dark:bg-blue-500"></div>
        </div>
        <div className="mb-1 text-base font-medium dark:text-white flex justify-between items-center">
          <h1 className="text-[12px] md:text-[15px]">Khmer Curry</h1>
          <h1 className="text-[12px] text-sky-500 md:text-[15px]">60%</h1>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2 mb-4 dark:bg-gray-100">
          <div className="w-3/5 bg-sky-500 h-full rounded-full dark:bg-blue-500"></div>
        </div>
        <div className="mb-1 text-base font-medium dark:text-white flex justify-between items-center">
          <h1 className="text-[12px] md:text-[15px]">Fried Chicken</h1>
          <h1 className="text-[12px] text-sky-500 md:text-[15px]">50%</h1>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2 mb-4 dark:bg-gray-100">
          <div className="w-1/2 bg-sky-500 h-full rounded-full dark:bg-blue-500"></div>
        </div>
      </div>
      <div className="btn-delete flex justify-end items-center mb-5 mr-5">
        <button className="bg-red-500 text-white font-sans  text-[13px] py-2 px-2 rounded-full flex items-center gap-x-1 w-fit lg:text-[17px] lg:px-3">
          <AiOutlineDelete style={deleteBtnIcon} />
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
}

export default Poll2;
