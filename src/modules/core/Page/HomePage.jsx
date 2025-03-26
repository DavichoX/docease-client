import { useState } from "react";
import MainNavigation from "../components/MainNavigation.jsx";
import HomeView from "../components/Home.jsx";
import MainHeader from "../components/MainHeader.jsx";

function HomePage() {
    const [viewMode, setViewMode] = useState("list");

    const handleViewChange = (mode) => {
        setViewMode(mode);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <MainHeader onViewChange={handleViewChange} />
            <div className="flex flex-1">
                <MainNavigation />
                <main className="flex-1 bg-gray-50">
                    <HomeView viewMode={viewMode} />
                </main>
            </div>
        </div>
    );
}

export default HomePage;