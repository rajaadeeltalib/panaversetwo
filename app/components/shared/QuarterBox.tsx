import {FC} from "react";

interface IProps {
    header: string;
    description: string;
    number: number;
    haveBorder?: boolean;
}


const QuarterBox: FC<IProps> = ({header, description, number, haveBorder=true}) => {
  return (
    <div  className={`${haveBorder && "border"} rounded-md relative w-full md:max-w-screen-md px-8 py-12 flex flex-col justify-center`}>
            <h4 className="font-bold text-lg">{header}</h4>
            <p className="mt-2 text-[#4A5B5C]">{description}</p>
            <span className=" text-gray-200 absolute -top-10 right-0 text-[150px] font-bold -z-10">{number}</span>
          </div>
  )
}

export default QuarterBox