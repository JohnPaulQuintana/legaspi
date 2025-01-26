import React from "react";
import { Link } from "react-router-dom";
const Resume = ({openModal}) => {
    const timelineData = [
        {
          icon: "fas fa-chalkboard", // Font Awesome icon class
          title: "Public Service Continuity Planning",
          company: "",
          date: "06-09 June 2022 | 25 Hours",
          description:
            "Office of Civil Defense Region 3 | OCD ID: 21-265282",
        },
        {
          icon: "fas fa-chalkboard", // Font Awesome icon class
          title: "Rapid Damage Assessment and Need Analysis",
          company: "",
          date: "20 - 25 June 2022 | 31 Hours",
          description:
            "Office of Civil Defense Region 3 | OCD ID: 21-265282",
        },
        {
          icon: "fas fa-chalkboard", // Font Awesome icon class
          title: "International Certificate in Fire safety and Risk Management",
          company: "Fire safety practical application",
          date: "August 08, 2018",
          description:
            "NEBOSH | National Examination Board in Occupational Safety and Health England, United Kingdom | SQA Ref: U542 04",
        },
        
    ]
    return (
        <section className="services-crev section-padding resume" data-scroll-index="1">
            <div className="container desktop:px-40">
                <div className="sec-head mb-4">
                    <h6 className="sub-title text-primary-red mb-25 font-bold text-xl">Training</h6>
                    <div className="pt-25 bord-thin-top d-flex align-items-center">
                        <h2 className="fw-600 text-u ls1 font-bold text-xl phone:text-3xl wide:text-5xl">
                            My Training <span className="fw-200"></span>
                        </h2>
                        <div className="ml-auto">
                            <a href="#" 
                                onClick={(e) => {
                                    e.preventDefault()
                                    openModal("/assets/resume/Guillermo-Resume-2024.docx", "video")
                                }}
                                className="go-more text-primary-red flex">
                                <span className="text flex gap-1"><span className="hidden phone:block">Download</span> Resume</span>
                                <span className="icon ti-arrow-top-right"></span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 laptop:grid-cols-2 gap-6">

                    <div className="rounded-md overflow-hidden">
                        <img
                            src="https://mgb.gov.ph/images/Photos_-_Articles/MGBEA_First_Aid_2022/SC1_.jpg"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="timeline">
                    {timelineData.map((item, index) => (

                        <div key={index} className="p-2 border-l-2 flex gap-3 relative">
                            <span className="absolute -left-2 top-4"><i className="fa-solid fa-circle"></i></span>
                            <span className="ps-2">
                                <i className={`${item.icon} text-2xl border p-1 rounded-md hidden tablet:block`}></i>
                            </span>
                            <div className="flex flex-col gap-2">
                                <span className="font-bold text-2xl text-primary-red">{item.title}</span>
                                <span className="text-xl">{item.company}</span>
                                <span className="text-sm">{item.date}</span>
                                <span className="text-sm">{item.description}</span>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume