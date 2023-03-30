"use client";
import Link from "next/link";
import Button from "../shared/Button";
import Wrapper from "../shared/Wrapper";
import { AiOutlineRight } from "react-icons/ai";
import QuarterBox from "../shared/QuarterBox";
import spimage1 from "/public/spimage1.png";
import spimage2 from "/public/spimage2.png";
import spimage3 from "/public/spimage3.png";
import spimage4 from "/public/spimage4.png";
import spimage5 from "/public/spimage5.png";
import spimage6 from "/public/spimage6.png";
import Image from "next/image";
import { useState } from "react";

export const programsData = [
  {
    slug: "wmd",
    header: "Web 3.0 (Blockchain) and Metaverse Specialization",
    description:
      "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    image: spimage1,
    quarters: [
      {
        header: "Quarter IV",
        description:
          "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
        number: 4,
      },
      {
        header: "Quarter V",
        description:
          "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
        number: 5,
      },
    ],
  },
  {
    slug: "ai",
    header: "Artificial Intelligence (AI) and Deep Learning Specialization",
    description:
      "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
    image: spimage2,
    quarters: [
      {
        header: "Quarter IV",
        description:
          "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
        number: 4,
      },
      {
        header: "Quarter V",
        description: "AI-361: Deep Learning and MLOps",
        number: 5,
      },
    ],
  },
  {
    slug: "cnc",
    header: "Cloud-Native Computing Specialization",
    description:
      "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
    image: spimage3,
    quarters: [
      {
        header: "Quarter IV",
        description:
          "CN-351: Certified Kubernetes Application Developer (CKAD)",
        number: 4,
      },
      {
        header: "Quarter V",
        description:
          "CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
        number: 5,
      },
    ],
  },
  {
    slug: "ac",
    header: "Ambient Computing and IoT Specialization",
    description:
      "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
    image: spimage4,
    quarters: [
      {
        header: "Quarter IV",
        description:
          "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
        number: 4,
      },
      {
        header: "Quarter V",
        description: "AC-361: Embedded Programming using C and Rust",
        number: 5,
      },
    ],
  },
  {
    slug: "bio",
    header: "Genomics and Bioinformatics Specialization",
    description:
      "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
    image: spimage5,
    quarters: [
      {
        header: "Quarter IV",
        description: "Bio-351: Python for Biologists",
        number: 4,
      },
      {
        header: "Quarter V",
        description: "Bio-361: Bioinformatics with Python",
        number: 5,
      },
    ],
  },
  {
    slug: "npa",
    header: "Network Programmability and Automation Specialization",
    description:
      "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
    image: spimage6,
    quarters: [
      {
        header: "Quarter IV",
        description: "NPA-351: CCNA 200-301 Certification",
        number: 4,
      },
      {
        header: "Quarter V",
        description: "NPA-361: Network Programmability and Automation",
        number: 5,
      },
    ],
  },
];
const SpecializedTracks = () => {
  const [selectedItem, setSelectedItem] = useState("wmd");
  const selectedItemData = programsData.find(
    (item) => item.slug === selectedItem
  );

  return (
    <section>
      <Wrapper>
        {/* Header */}
        <div>
          <h2 className="text-2xl sm:text-4xl font-bold mt-3 max-w-[640px]">
            Specialized Tracks:
          </h2>
          <p className="mt-4 text-md text-[#4A5B5C] max-w-screen-sm">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each:{" "}
          </p>
        </div>
        <div className="mt-10 flex flex-col-reverse lg:flex-row gap-x-6 gap-y-8">
          {/* Content left */}
          <div className="shadow-xl sticky top-28 self-start basis-8/12 rounded-xl border border-[#00616C] py-8 px-8">
            <h4 className="text-[#00616C] font-semibold text-lg mt-4">
              Specialized Program
            </h4>
            <h2 className="text-2xl sm:text-4xl font-bold mt-3 max-w-[640px]">
              {selectedItemData?.header}
            </h2>
            <p className="mt-4 text-[20px] text-[#4A5B5C]">
              {selectedItemData?.description}
            </p>
            <div className="flex">
              <Link
                href="/"
                className="flex items-center justify-center gap-x-2 font-bold text-[#00616C] mt-4 underline"
              >
                Learn More <AiOutlineRight />
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              {selectedItemData?.quarters.map((item) => {
                return (
                  <>
                    <QuarterBox
                      key={item.number}
                      description={item.description}
                      header={item.header}
                      number={item.number}
                      haveBorder={false}
                    />
                  </>
                );
              })}
            </div>
          </div>
          {/* content Right */}
          <div className="px-4 space-y-4 py-6 basis-4/12 flex-1">
            {programsData.map((item, index) => (
              <div
                onClick={() => setSelectedItem(item.slug)}
                key={item.slug}
                className="flex gap-x-4 items-center cursor-pointer"
              >
                <div className="flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.header}
                    className={"h-20 w-36 object-cover rounded-md"}
                  />
                </div>
                <div>
                  <h4 className="text-primary font-medium">
                    Specialized Program
                  </h4>
                  <h3 className="text-xl font-semibold">{item.header}</h3>
                </div>
              </div>
            ))}

            {/* underline */}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SpecializedTracks;
