
function HomePageMain() {

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

    return (
        <div className="home-main w-full h-full">
            <div className="home-body w-full h-full">
                <div className="home-content w-full h-full flex flex-row justify-center items-center">

                </div>
            </div>
        </div>
    )
}

export default HomePageMain;