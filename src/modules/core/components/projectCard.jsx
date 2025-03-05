const ProjectCard = ({ project }) => {
    return (
        <div className="aproject shadow-md shadow-gray-800 w-60 p-8 bg-white border-2 border-teal-800 flex flex-col justify-center items-center rounded-lg">
            <a href={`/${project.id}`} className="flex flex-col justify-center items-center">
                <div className="doc-logo">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="50px" height="50px">
                        <path fill="#50e6ff" d="M39,16v25c0,1.105-0.895,2-2,2H11c-1.105,0-2-0.895-2-2V7c0-1.105,0.895-2,2-2h17l3,8L39,16z"/>
                        <linearGradient id="VWJODR~F49S8JZXNLPMJka" x1="28.529" x2="33.6" y1="2761.471" y2="2756.4" gradientTransform="translate(0 -2746)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#3079d6"/>
                            <stop offset="1" stopColor="#297cd2"/>
                        </linearGradient>
                        <path fill="url(#VWJODR~F49S8JZXNLPMJka)" d="M28,5v9c0,1.105,0.895,2,2,2h9L28,5z"/>
                        <path fill="#057093" d="M32.5,24h-17c-0.276,0-0.5-0.224-0.5-0.5v-1c0-0.276,0.224-0.5,0.5-0.5h17c0.276,0,0.5,0.224,0.5,0.5v1C33,23.776,32.776,24,32.5,24z"/>
                        <path fill="#057093" d="M30.5,28h-15c-0.276,0-0.5-0.224-0.5-0.5v-1c0-0.276,0.224-0.5,0.5-0.5h15c0.276,0,0.5,0.224,0.5,0.5v1C31,27.776,30.776,28,30.5,28z"/>
                        <path fill="#057093" d="M32.5,32h-17c-0.276,0-0.5-0.224-0.5-0.5v-1c0-0.276,0.224-0.5,0.5-0.5h17c0.276,0,0.5,0.224,0.5,0.5v1C33,31.776,32.776,32,32.5,32z"/>
                        <path fill="#057093" d="M30.5,36h-15c-0.276,0-0.5-0.224-0.5-0.5v-1c0-0.276,0.224-0.5,0.5-0.5h15c0.276,0,0.5,0.224,0.5,0.5v1C31,35.776,30.776,36,30.5,36z"/>
                    </svg>
                </div>
                <div className="doc-metadata text-gray-900">
                    <h2 className="doc-title">{project.title}</h2>
                    <span className="doc-creator block text-xs">creator: {project.creator}</span>
                    <span className="doc-created_at block text-xs">created: {project.created_at}</span>
                    <span className="doc-status block text-xs">status: {project.status}</span>
                    <span className="doc-assigned block text-xs">assigned: {project.assigned}</span>
                </div>
            </a>
        </div>
    );
};

export default ProjectCard;