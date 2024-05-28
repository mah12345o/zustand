
'use client'
import Link from "next/link"
import { RxDashboard } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { BsArrowRightSquare } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import useBookStore from "@/store/page";


const Sidebar = () => {
  const [text ,setSideText] = useState(true)
  const toggleSidebar = useBookStore((state) => state.toggleSidebar);
  const linkArry = ["dashboard","user","Order","setting"]

  function reduceSidebar() {
    setSideText(!text)
    toggleSidebar();
  }

  return (
    <div className="p-6 pt-[70px] bg-white text-black fixed flex flex-col h-full ">
      <Button onClick={reduceSidebar} className="p-3 h-8 absolute right-6 top-8 " variant="outline"><BsArrowRightSquare /></Button>
      {linkArry?.map((el,index)=>
        <Link className="py-1 px-2 rounded  flex justify-start items-center capitalize my-[5px] border-[2px]" href={el}>
          {index==0 && <RxDashboard />}
          {index==1 && <FaUserCircle />}
          {index==2 && <FaShoppingCart />}
          {index==3 && <IoSettings />}
          &nbsp;{text && el}</Link>
      )}
    </div>
  )
}

export default Sidebar
