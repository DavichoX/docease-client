import {Link} from 'react-router-dom'

function HomeWPNav() {
    // eslint-disable-next-line react/prop-types
    function Item({clase1, clase2, clase3, clase4, presentation, link}){
        return (
            <div className={clase1}>
                <div className={clase2}>
                    <div className={clase3}>
                        <Link to={`/${link}`}>
                                <span className={clase4}>
                                    {presentation}
                                </span>
                        </Link>
                    </div>
                </div>
            </div>

        )
    }
            return (
            <header className="docease-navigation ">
                <nav className="banner nav-bar">
                    <div className="navigation-home-logo">
                    <span className="logo">
                        <Link to="/">Docease</Link>
                    </span>
                    </div>
                    <Item
                        clase1 ={"listitem home-button-wrapper"}
                        clase2={"home-button-container"}
                        clase3={"home-button"}
                        clase4={"presentation"}
                        presentation={"Home"}
                        link={""}
                     />
                    <Item
                        clase1 ={"listitem recent-button-wrapper"}
                        clase2={"recent-button-container"}
                        clase3={"recent-button"}
                        clase4={"presentation"}
                        presentation={"Recent"}
                        link={"recent"}
                    />
                </nav>
            </header>
            )
    }

    export default HomeWPNav;