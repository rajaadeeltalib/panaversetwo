import Link from "next/link"
import Image from "next/image"
import Logo from "/public/logo.png"
import Wrapper from "../shared/Wrapper"


const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white">
    <Wrapper>
    <div className="flex justify-between items-center py-6  ">
      <div><Image src={Logo} alt="Panaverse Logo"/></div>
      <div className="flex space-x-8 font-semibold">
      <Link href="/">Home</Link>
      <Link href="/courses">Courses</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/videos">Videos</Link>
      </div>
    </div>
    </Wrapper>
    </header>
  )
}

export default Header