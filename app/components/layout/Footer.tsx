import Image from "next/image"
import Logo from "/public/logo.png"
import Link from "next/link"



const Footer = () => {
  return (
    <footer className="bg-black text-white mt-20 py-12">
      <div className="container mx-auto text-white flex justify-between">
    {/* logo */}
    <Link href="/"><Image src={Logo} alt="Logo" />Panaverse DAO</Link>
    
      Copyright &copy; 2023. All rights reserved.
      
      </div>
    </footer>
  )
}

export default Footer