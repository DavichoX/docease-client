import {Link} from 'react-router-dom'
import './NavStyles.css'

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

function HomeWPNav() {

            return (
            <header className="docease-navigation ">
                <nav className="banner nav-bar">
                    <div className="left-menu">
                        <div className="navigation-home-logo">
                            <span className="logo">
                                <Link to="/">Docease</Link>
                            </span>
                        </div>
                        <div className="nav-items">
                            <Item
                                clase1={"listitem home-button-wrapper"}
                                clase2={"home-button-container item-container"}
                                clase3={"home-button"}
                                clase4={"presentation"}
                                presentation={"Home"}
                                link={""}
                            />
                            <Item
                                clase1={"listitem recent-button-wrapper"}
                                clase2={"recent-button-container item-container"}
                                clase3={"recent-button"}
                                clase4={"presentation"}
                                presentation={"Recent"}
                                link={"recent"}
                            />
                            <Item
                                clase1={"listitem templates-button-wrapper"}
                                clase2={"templates-button-container item-container"}
                                clase3={"templates-button"}
                                clase4={"presentation"}
                                presentation={"Templates"}
                                link={"templates"}
                            />
                            <Item
                                clase1={"listitem create-button-wrapper"}
                                clase2={"create-button-container item-container"}
                                clase3={"create-button"}
                                clase4={"presentation"}
                                presentation={"Create"}
                                link={"create"}
                            />
                        </div>
                    </div>

                    <div className="right-menu">
                        <div className="search-bar-wrapper">
                            <div className="search-bar-container">
                                <div className="search-bar">
                                    <span></span>
                                    <input type="text" placeholder="Search..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            )
}

export default HomeWPNav;