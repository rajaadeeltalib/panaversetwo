"use Client"

import { FC } from "react"

const Button:FC<{title:string, subTitle:string}> = ({title, subTitle}) => {
  return (
    <button className="bg-[#00616C] rounded-full h-[59.29px] w-[158px] text-white hover:shadow-lg hover:scale-105"><span>{title}</span> {subTitle}</button>
  )
}

export default Button