import Button from "../shared/Button";
import QuarterBox from "../shared/QuarterBox";
import Wrapper from "../shared/Wrapper";

const CoreTrackData =[
  {
  header: "Quarter I",
  description: "CS-101: Object-Oriented Programming using TypeScript",
  number: 1
},
{
  header: "Quarter II",
  description: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
  number: 2
},
{
  header: "Quarter III",
  description: "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
  number: 3
},
]
const CoreTracks = () => {
  return (
    <section className="mt-16 lg:mt-28">
      <Wrapper>
        {/* contect */}
        <div className="max-w-screen-md">
          <h4 className="text-[#00616C] font-semibold text-lg mt-4">
            Program of Studies
          </h4>
          <h2 className="text-2xl sm:text-4xl font-bold mt-3 max-w-[640px]">
            Core Courses
            <br />
            (Common in All Specializations):
          </h2>
          <p className="mt-4 text-md text-[#4A5B5C]">
            Every participant of the program will start by completing the <br />{" "}
            following three core courses:
          </p>
          <div className="mt-9">
            <Button title={"Learn"} subTitle={"More"} />
          </div>
        </div>
        {/* boxes */}
        <div className="my-20 flex flex-col gap-y-5 md:flex-row gap-x-5 max-w-screen">

{
  CoreTrackData.map((item, i) => {
    return (
      <QuarterBox description={item.description} header={item.header} number={i + 1} haveBorder ={true} key={i}/>
      
    )
  })
}       
          
        </div>
      </Wrapper>
    </section>
  );
};

export default CoreTracks;
