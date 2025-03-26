import { BsHouse, BsDiagram3, BsBarChart, BsPlus, BsFileEarmark } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function MainNavigation() {
    return (
        <nav className="navbar w-64 min-h-full bg-gray-800 bg-opacity-80 backdrop-blur-md text-white shadow-lg overflow-y-auto sticky top-0">
            <div className="w-full px-4 py-6">
                <div className="navbar-header">
                    <ul role="list" className="navbar-menu space-y-2">
                        <li role="listItem" className="nav-item">
                            <div role="presentation">
                                <Link to={"/"} className="nav-link">
                                    <span className="flex items-center p-3 hover:bg-gray-700 hover:scale-105 rounded-lg transition-all duration-200">
                                        <span className="item-icon mr-3">
                                            <BsHouse size={20} />
                                        </span>
                                        <div className="item-text">
                                            <span className="text-container">
                                                <span className="text-sm font-medium">Home</span>
                                            </span>
                                        </div>
                                    </span>
                                </Link>
                            </div>

                            <div role="presentation">
                                <a href="" className="nav-link">
                                    <span className="flex items-center p-3 hover:bg-gray-700 hover:scale-105 rounded-lg transition-all duration-200">
                                        <span className="item-icon mr-3">
                                            <BsFileEarmark size={20} />
                                        </span>
                                        <div className="item-text">
                                            <span className="text-container">
                                                <span className="text-sm font-medium">Documents</span>
                                            </span>
                                        </div>
                                    </span>
                                </a>
                            </div>

                            <div role="presentation">
                                <a href="" className="nav-link">
                                    <span className="flex items-center p-3 hover:bg-gray-700 hover:scale-105 rounded-lg transition-all duration-200">
                                        <span className="item-icon mr-3">
                                            <BsDiagram3 size={20} />
                                        </span>
                                        <div className="item-text">
                                            <span className="text-container">
                                                <span className="text-sm font-medium">Workflows</span>
                                            </span>
                                        </div>
                                    </span>
                                </a>
                            </div>

                            <div role="presentation">
                                <a href="" className="nav-link">
                                    <span className="flex items-center p-3 hover:bg-gray-700 hover:scale-105 rounded-lg transition-all duration-200">
                                        <span className="item-icon mr-3">
                                            <BsBarChart size={20} />
                                        </span>
                                        <div className="item-text">
                                            <span className="text-container">
                                                <span className="text-sm font-medium">Dashboards</span>
                                            </span>
                                        </div>
                                    </span>
                                </a>
                            </div>

                            <div role="presentation">
                                <a href="" className="nav-link">
                                    <span className="flex items-center p-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-lg transition-all duration-200">
                                        <span className="item-icon mr-3">
                                            <BsPlus size={20} />
                                        </span>
                                        <div className="item-text">
                                            <span className="text-container">
                                                <span className="text-sm font-medium">Create</span>
                                            </span>
                                        </div>
                                    </span>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default MainNavigation;