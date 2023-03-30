import Wrapper from "@/components/shared/Wrapper"
import Image from "next/image"
import HeroImage from "/public/heroimage.png"
import Button from "../shared/Button"


const Hero = () => {
  return (
    <section>
    <Wrapper>
    <div className="flex flex-col md:flex-row items-center">
        {/* left side */}
        <div className="flex-1">
            <h4 className="text-[#00616C] font-semibold text-lg mt-4">Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
            <h1 className="text-4xl sm:text-6xl font-bold mt-3">Certified Web 3.0 and Metaverse Developer</h1>
            <p className="mt-4 text-[#4A5B5C]">A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet</p>
            <p className="mt-5 text-[#4A5B5C]">Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies</p>
            <div className="mt-9">
            <Button title={"Learn"} subTitle={"More"}/>
            </div>             
        </div>
        {/* right side */}
        <div className="flex-1">
            <Image src={HeroImage} alt="Hero Image" />
        </div>
    </div>
    </Wrapper>
    </section>
    
  )
}

export default Hero