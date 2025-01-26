import React from "react";
import { Link } from "react-router-dom";
const RoleTitle = () => {

    const titleData = [
        {
            id: 1,
            number: "01.",
            description: "SHE Department, Fire and Emergency Section GNPOWER Dinginin Mariveles, Bataan, Philippines.",
            title: "Fire and Emergency Officer",
            bullets: [
                "• Assist SHE Manager on fire and safety",
                "• Respond to Fire alarms/emergency and other related situation required",
                "• Fire protection Inspection, Testing and Maintenance",
                "• Conduct Fire trainings and Drills",
                "• Inspect and test fire safety appliance",
                "• Ground incident ERT commander"
            ],
            icon: ``,
            link: "/"
        },
        {
            id: 2,
            number: "02.",
            title: "LDRRM Assistant.",
            description: "Operation and Warning Division Provincial Disaster Risk Reduction Management Office",
            bullets: [
                "• Assist SHE Manager on fire and safety",
                "• Respond to Fire alarms/emergency and other related situation required",
                "• Fire protection Inspection, Testing and Maintenance",
                "• Conduct Fire trainings and Drills",
                "• Inspect and test fire safety appliance",
                "• Ground incident ERT commander"
            ],
            icon: ``,
            link: "/"
        },


    ];

    const skills = [
        {
            id: 1,
            number: "",
            title: "June 26, 2023 – Present",
        },
        {
            id: 2,
            number: "",
            title: "April 01, 2022 – Oct 15, 2022",
        },
    ];

    return (
        <section className="services-crev section-padding" data-scroll-index="1">
            <div className="container desktop:px-40">
                <div className="sec-head mb-4">
                    <h6 className="sub-title text-primary-red mb-25 font-bold text-xl">My Specialization</h6>
                    <div className="pt-25 bord-thin-top d-flex align-items-center">
                        <h2 className="fw-600 text-u ls1 font-bold text-3xl wide:text-5xl">
                            My Journey as <span className="fw-200"> AFP </span>
                        </h2>
                        {/* <div className="ml-auto">
                            <Link to="/" className="go-more">
                                <span className="text">View all Services</span>
                                <span className="icon ti-arrow-top-right"></span>
                            </Link>
                        </div> */}
                    </div>
                </div>
                <div className="flex flex-col laptop:flex-row gap-4">

                    <div className="grid grid-cols-1 gap-4 w-full laptop:w-[60%]">
                        {titleData.map((role) => (
                            <div key={role.id} className="h-fit flex">
                                <div className="relative item-box shadow-md rounded-lg flex flex-col w-full">
                                    <span className="text-2xl font-bold text-white w-fit absolute right-10 hidden phone:block">{role.number}</span>
                                    <div className="flex flex-col">

                                        <div className="px-2 text-primary-red">
                                            <h5 className="text-2xl wide:text-4xl font-bold">{role.title}</h5>
                                        </div>
                                    </div>
                                    <div className="mt-2 flex-grow ps-2">
                                        <p className="text-white">{role.description}</p>
                                    </div>

                                    <div className="mt-4 flex-grow flex-col">
                                        <span className="block font-bold ps-2 text-xl">Descriptions</span>
                                        {role.bullets.map((info) => (
                                            <span className="ps-2">{info}</span>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="border w-1 bg-white relative hidden laptop:block">
                        <i className="fa-solid fa-circle absolute top-10 -left-2"></i>
                        <i className="fa-solid fa-circle absolute top-[55%] -left-2"></i>
                        {/* <i className="fa-solid fa-circle absolute top-[24%] -left-2"></i> */}
                        {/* <i className="fa-solid fa-circle absolute top-[38%] -left-2"></i> */}
                        {/* <i className="fa-solid fa-circle absolute top-[40%] -left-2"></i> */}
                        {/* <i className="fa-solid fa-circle absolute top-[57%] -left-2"></i> */}
                        {/* <i className="fa-solid fa-circle absolute top-[73%] -left-2"></i> */}
                        {/* <i className="fa-solid fa-circle absolute top-[75%] -left-2"></i> */}
                        {/* <i className="fa-solid fa-circle absolute top-[92%] -left-2"></i> */}
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {skills.map((role) => (
                            <div key={role.id} className="h-fit flex">
                                <div className="relative item-box shadow-md rounded-lg flex flex-col w-full">
                                    <span className="text-2xl font-bold text-white w-fit absolute right-10 hidden phone:block">{role.number}</span>
                                    <div className="flex flex-col">

                                        <div className="px-2 text-primary-red">
                                            <h5 className="text-2xl wide:text-4xl font-bold">{role.title}</h5>
                                        </div>
                                    </div>
                                    {/* <div className="mt-4 flex-grow">
                                        <p className="text-white">{role.description}</p>
                                    </div>

                                    <div className="mt-4 flex-grow flex-col">
                                        <span className="block font-bold">Descriptions</span>
                                        {role.bullets.map((info) => (
                                            <span className="ps-2">{info}</span>
                                        ))}
                                    </div> */}

                                </div>
                            </div>
                        ))}



                    </div>
                </div>

            </div>
        </section>
    )
}

export default RoleTitle