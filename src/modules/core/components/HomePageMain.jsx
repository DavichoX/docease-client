import {useEffect, useState} from "react";
import ProjectCard from "./projectCard.jsx";
function HomePageMain() {
    /*
    * <div className="aproject shadow-md shadow-gray-800 w-60 p-8 bg-white  border-2 border-teal-800 flex flex-col justify-center items-center rounded-lg">
                                <a href="/{project-id}" className="flex flex-col justify-center items-center">
                                    <div className="doc-logo">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="50px"
                                             height="50px">
                                            <path fill="#50e6ff"
                                                  d="M39,16v25c0,1.105-0.895,2-2,2H11c-1.105,0-2-0.895-2-2V7c0-1.105,0.895-2,2-2h17l3,8L39,16z"/>
                                            <linearGradient id="VWJODR~F49S8JZXNLPMJka" x1="28.529" x2="33.6"
                                                            y1="2761.471"
                                                            y2="2756.4" gradientTransform="translate(0 -2746)"
                                                            gradientUnits="userSpaceOnUse">
                                                <stop offset="0" stop-color="#3079d6"/>
                                                <stop offset="1" stop-color="#297cd2"/>
                                            </linearGradient>
                                            <path fill="url(#VWJODR~F49S8JZXNLPMJka)"
                                                  d="M28,5v9c0,1.105,0.895,2,2,2h9L28,5z"/>
                                            <path fill="#057093"
                                                  d="M32.5,24h-17c-0.276,0-0.5-0.224-0.5-0.5v-1c0-0.276,0.224-0.5,0.5-0.5h17c0.276,0,0.5,0.224,0.5,0.5	v1C33,23.776,32.776,24,32.5,24z"/>
                                            <path fill="#057093"
                                                  d="M30.5,28h-15c-0.276,0-0.5-0.224-0.5-0.5v-1c0-0.276,0.224-0.5,0.5-0.5h15c0.276,0,0.5,0.224,0.5,0.5	v1C31,27.776,30.776,28,30.5,28z"/>
                                            <path fill="#057093"
                                                  d="M32.5,32h-17c-0.276,0-0.5-0.224-0.5-0.5v-1c0-0.276,0.224-0.5,0.5-0.5h17c0.276,0,0.5,0.224,0.5,0.5	v1C33,31.776,32.776,32,32.5,32z"/>
                                            <path fill="#057093"
                                                  d="M30.5,36h-15c-0.276,0-0.5-0.224-0.5-0.5v-1c0-0.276,0.224-0.5,0.5-0.5h15c0.276,0,0.5,0.224,0.5,0.5	v1C31,35.776,30.776,36,30.5,36z"/>
                                        </svg>
                                    </div>
                                    <div className="doc-metadata text-gray-900">
                                        <h2 className="doc-title">Some Title</h2>
                                        <span className="doc-creator block text-xs"> creator: David Rengifo</span>
                                        <span className="doc-crated_at block text-xs"> created: February 04, 2025</span>
                                        <span className="doc-status block text-xs"> status: No Edited</span>
                                        <span className="doc-assigned block text-xs">assigned: someone</span>
                                    </div>
                                </a>
                            </div>*/
    function NewUserStartingPoint(){
        return (
            <div className="welcome-new-user-section flex flex-col justify-center items-center">
                <div className="welcome">
                    <h1 className="text-white">
                        Welcome to DocEase!!
                    </h1>
                </div>
                <div className="h-20"></div>
                <button className="create bg-teal-800 block text-white">
                    Create Document
                </button>
            </div>
        )
    }
    /*
        function RecentProjectsSummary(){
        const [projects, setProjects] = useState([]);
        useEffect(() => {
            fetch('/recent-projects')
                .then(res => res.json())
                .then(data => setProjects(data))
                .then(error => console.log(error));
        })
        return (

        )
    }
     */
    const projectData = {
        id: "123",
        title: "Some Title",
        creator: "David Rengifo",
        created_at: "February 04, 2025",
        status: "No Edited",
        assigned: "someone"
    }

    return (
        <div className="home-main w-[100%] h-full bg-gray-100 overflow-y-auto">
            <div className="home-body w-full h-full bg-green-100">
                <div className="home-content w-full h-full  flex flex-row justify-center items-center">
                    <div className="top-content recent-summary absolute w-[97%] top-0 py-10 flex flex-col">
                        <div className="indicator text-start px-15">
                            <h3 className="text-gray-900"> Recent Projects </h3>
                        </div>
                        <div className="recent-projects mt-5 flex gap-30 px-50 py-10">
                            <ProjectCard projectData={projectData} />
                        </div>
                        <hr/>
                    </div>
                    <div className="botton-content tracking-table">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePageMain;