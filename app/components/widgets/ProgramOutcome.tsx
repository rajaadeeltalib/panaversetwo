import Image from "next/image"
import Wrapper from "../shared/Wrapper"
import OutcomeImage from "/public/outcome.png"
import Icon1 from "/public/icon1.svg"

const outcomePoints =["Product Ownership", "Freelacing", "Global Marketing by DAO", "Boosting Economy"]

const ProgramOutcome = () => {
  return (
    <section className="mt-16 md:mt-28">
        <Wrapper>
        <div className="flex flex-col-reverse md:flex-row items-center gap-x-8">
        {/* Left section */}
        <div className="flex-1">
            <Image src={OutcomeImage} alt="Outcome Image" />
        </div>
        {/* Right section */}
        <div className="flex-1">
        <h2 className="font-bold text-4xl">The Outcome for Participants of the Program</h2>
        <p className="mt-4 text-slate-600 text-lg">As a graduate of this program, you will own valuable products such as Full-Stack App Templates, AR and VR Experiences, and APIs that are marketed globally by the Panaverse DAO. You will also have the opportunity to offer your services at a rate of $50 per hour, providing a path to financial stability while contributing to the growth of Pakistans software exports.</p>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-4">
        {outcomePoints.map((item, index) =>(
            <div key={index} className="flex items-center gap-x-4">
                <Image src={Icon1} alt="Icon" />
                <h3 className="font-medium text-lg">{item}</h3>
            </div>
        ))}
    </div>

        </div>
        </div>
        </Wrapper>
    </section>
  )
}

export default ProgramOutcome