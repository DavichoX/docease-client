import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function HomeView({ viewMode }) {
    const [documents, setDocuments] = useState([]);
    const [selectedDocument, setSelectedDocument] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchRecentDocuments = async () => {
        const controller = new AbortController();
        try {
            const response = await fetch(`http://localhost:8000/documents/recent`, { signal: controller.signal });
            if (!response.ok) {
                throw new Error("Failed to get documents");
            }
            const data = await response.json();
            if (Array.isArray(data)) {
                setDocuments(data);
            } else {
                throw new Error("Invalid data format");
            }
        } catch (err) {
            if (err.name !== "AbortError") {
                setError(err.message);
            }
        } finally {
            setLoading(false);
        }
        return () => controller.abort();
    };

    useEffect(() => {
        fetchRecentDocuments();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <p className="text-gray-500">Loading documents...</p>
            </div>
        );
    }
    if (error) {
        return (
            <div className="flex justify-center items-center h-64">
                <p className="text-gray-500">Error: {error}</p>
            </div>
        );
    }

    const workflows = [
        { id: 1, title: "Workflow 1", creator: "User A", created_at: "2025-03-25", status: "In Progress" },
        { id: 2, title: "Workflow 2", creator: "User B", created_at: "2025-03-24", status: "Completed" },
    ];

    const renderDocuments = () => {
            return (
                <div className="flex gap-4 justify-center items-center  ">
                    {documents.map((doc) => (
                        <motion.li
                            key={doc.id}
                            className="list-none"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div
                                className={`aproject bg-white border border-gray-200 w-60 rounded-lg p-4 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 flex flex-col items-center `}
                                onClick={() => setSelectedDocument(doc)}
                            >
                                <a href={`/${doc.id}`} className="flex flex-col items-center ">
                                    <div className="doc-logo mb-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 48 48"
                                            width="40px"
                                            height="40px"
                                        >
                                            <path
                                                fill="#50e6ff"
                                                d="M39,16v25c0,1.105-0.895,2-2,2H11c-1.105,0-2-0.895-2-2V7c0-1.105,0.895-2,2-2h17l3,8L39,16z"
                                            />
                                            <linearGradient
                                                id="VWJODR~F49S8JZXNLPMJka"
                                                x1="28.529"
                                                x2="33.6"
                                                y1="2761.471"
                                                y2="2756.4"
                                                gradientTransform="translate(0 -2746)"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop offset="0" stopColor="#3079d6" />
                                                <stop offset="1" stopColor="#297cd2" />
                                            </linearGradient>
                                            <path
                                                fill="url(#VWJODR~F49S8JZXNLPMJka)"
                                                d="M28,5v9c0,1.105,0.895,2,2,2h9L28,5z"
                                            />
                                            <path
                                                fill="#057093"
                                                d="M32.5,24h-17c-0.276,0-0.5-0.224-0.5-0.5v-1c0-0.276,0.224-0.5,0.5-0.5h17c0.276,0,0.5,0.224,0.5,0.5v1C33,23.776,32.776,24,32.5,24z"
                                            />
                                            <path
                                                fill="#057093"
                                                d="M30.5,28h-15c-0.276,0-0.5-0.224-0.5-0.5v-1c0-0.276,0.224-0.5,0.5-0.5h15c0.276,0,0.5,0.224,0.5,0.5v1C31,27.776,30.776,28,30.5,28z"
                                            />
                                            <path
                                                fill="#057093"
                                                d="M32.5,32h-17c-0.276,0-0.5-0.224-0.5-0.5v-1c0-0.276,0.224-0.5,0.5-0.5h17c0.276,0,0.5,0.224,0.5,0.5v1C33,31.776,32.776,32,32.5,32z"
                                            />
                                            <path
                                                fill="#057093"
                                                d="M30.5,36h-15c-0.276,0-0.5-0.224-0.5-0.5v-1c0-0.276,0.224-0.5,0.5-0.5h15c0.276,0,0.5,0.224,0.5,0.5v1C31,35.776,30.776,36,30.5,36z"
                                            />
                                        </svg>
                                    </div>
                                    <div className="doc-metadata text-center">
                                        <h2 className="doc-title text-sm font-semibold text-gray-800 mb-1">{doc.title}</h2>
                                        <span className="doc-creator block text-xs text-gray-600">Creator: {doc.creator}</span>
                                        <span className="doc-created_at block text-xs text-gray-600">Created: {doc.created_at}</span>
                                        <span className="doc-status block text-xs text-gray-600">Status: {doc.status}</span>
                                        <span className="doc-assigned block text-xs text-gray-600">Assigned: {doc.assigned}</span>
                                    </div>
                                </a>
                            </div>
                        </motion.li>
                    ))}
                </div>
            );
    };

    return (
        <div className="content-wrapper h-full p-6 bg-gray-100 flex">
            {/* Recent Documents (Main Area) */}
            <div className="w-7/12">
                <div className="recent-displayer bg-white p-4 hover:shadow-md hover:scale-102 transition-all duration-200 h-80 rounded-lg overflow-x-hidden shadow-sm border border-gray-200 hover:cursor-grab">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Documents</h2>
                    {renderDocuments()}
                </div>
            </div>

            {/* Recent Workflows (Sidebar) */}
            <div className="w-5/12 ml-6">
                <div className="recent-displayer bg-white p-2 hover:shadow-md hover:scale-102 transition-all duration-200 h-80 rounded-lg shadow-sm border border-gray-200 hover:cursor-grab">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Workflows</h2>
                    <div className="recent-workflows space-y-4">
                        {workflows.map((workflow) => (
                            <motion.div
                                key={workflow.id}
                                className="bg-white hover:cursor-pointer border border-gray-200 rounded-lg p-4 h-30 shadow-sm hover:shadow-md hover:scale-102 hover:pointer transition-all duration-200 flex flex-col"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <a href={`/${workflow.id}`} className="flex flex-row items-center">
                                    <div className="doc-logo mb-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 48 48"
                                            width="40px"
                                            height="40px"
                                        >
                                            <path
                                                fill="#50e6ff"
                                                d="M39,16v25c0,1.105-0.895,2-2,2H11c-1.105,0-2-0.895-2-2V7c0-1.105,0.895-2,2-2h17l3,8L39,16z"
                                            />
                                            <linearGradient
                                                id="VWJODR~F49S8JZXNLPMJka"
                                                x1="28.529"
                                                x2="33.6"
                                                y1="2761.471"
                                                y2="2756.4"
                                                gradientTransform="translate(0 -2746)"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop offset="0" stopColor="#3079d6" />
                                                <stop offset="1" stopColor="#297cd2" />
                                            </linearGradient>
                                            <path
                                                fill="url(#VWJODR~F49S8JZXNLPMJka)"
                                                d="M28,5v9c0,1.105,0.895,2,2,2h9L28,5z"
                                            />
                                            <path
                                                fill="#057093"
                                                d="M32.5,24h-17c-0.276,0-0.5-0.224-0.5-0.5v-1c0-0.276,0.224-0.5,0.5-0.5h17c0.276,0,0.5,0.224,0.5,0.5v1C33,23.776,32.776,24,32.5,24z"
                                            />
                                            <path
                                                fill="#057093"
                                                d="M30.5,28h-15c-0.276,0-0.5-0.224-0.5-0.5v-1c0-0.276,0.224-0.5,0.5-0.5h15c0.276,0,0.5,0.224,0.5,0.5v1C31,27.776,30.776,28,30.5,28z"
                                            />
                                            <path
                                                fill="#057093"
                                                d="M32.5,32h-17c-0.276,0-0.5-0.224-0.5-0.5v-1c0-0.276,0.224-0.5,0.5-0.5h17c0.276,0,0.5,0.224,0.5,0.5v1C33,31.776,32.776,32,32.5,32z"
                                            />
                                            <path
                                                fill="#057093"
                                                d="M30.5,36h-15c-0.276,0-0.5-0.224-0.5-0.5v-1c0-0.276,0.224-0.5,0.5-0.5h15c0.276,0,0.5,0.224,0.5,0.5v1C31,35.776,30.776,36,30.5,36z"
                                            />
                                        </svg>
                                    </div>
                                    <div className="doc-metadata ">
                                        <h2 className="doc-title text-sm font-semibold text-gray-800 mb-1">{workflow.title}</h2>
                                        <span className="doc-creator block text-xs text-gray-600">Creator: {workflow.creator}</span>
                                        <span className="doc-created_at block text-xs text-gray-600">Created: {workflow.created_at}</span>
                                        <span className="doc-status block text-xs text-gray-600">Status: {workflow.status}</span>
                                    </div>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Detail Panel */}
            <AnimatePresence>
                {selectedDocument && (
                    <motion.div
                        className="fixed top-0 right-0 w-1/3 h-full bg-white shadow-lg p-6"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">{selectedDocument.title}</h2>
                        <p className="text-sm text-gray-600">Creator: {selectedDocument.creator}</p>
                        <p className="text-sm text-gray-600">Created: {selectedDocument.created_at}</p>
                        <p className="text-sm text-gray-600">Status: {selectedDocument.status}</p>
                        <p className="text-sm text-gray-600">Assigned: {selectedDocument.assigned}</p>
                        <button
                            onClick={() => setSelectedDocument(null)}
                            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                        >
                            Close
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default HomeView;