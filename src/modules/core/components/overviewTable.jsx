function OverviewTable() {
    /*                            <div data-testid="global-pages.home.ui.tab-container.navigation.item.assigned"
                                 id="your-work-page-tabs-2" aria-controls="your-work-page-tabs-2-tab" aria-posinset="3"
                                 aria-selected="false" aria-setsize="5" role="tab" tabIndex="-1" className="css-38t7l3">
                                <span className="_19pkidpf _2hwxidpf _otyridpf _18u0idpf _1i4qfg65 _11c82smr _1reo15vq _18m915vq _1e0ccj1k _sudp1e54 _1nmz9jpi _k48p1wq8" style="-webkit-line-clamp: 1;">
                                    Assigned to me
                                    <span className="_18u01c1a">
                                        <span className="_2rkogqwt _18zr1b66 _1e0c116y _vchhusvi _1ul91ejb _1bah1h6o _1o9zidpf _1kz6184x _bfhk1fkg _syazwwip">
                                            <span className="css-v44io0">
                                                0
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </div>*/

    /*                        <div role="tabpanel" id="your-work-page-tabs-0-tab" aria-labelledby="your-work-page-tabs-0" tabIndex="0" className="css-38t7l3">
                            <div className="_kqswh2mm _1bsb1osq _ca0qidpf _u5f3idpf _n3td12x7 _19bvidpf">
                                <div data-test-id="global-pages.home.common.ui.empty-state" className="_19pk1epz _1bsb1osq">
                                    <div className="_6rthoahv _1pfhoahv _12l21wug _ahbq1wug _y3gn1h6o _p12f1pl1">
                                        <img
                                            width="auto" height="auto" alt="" role="presentation"
                                            src="https://jira-frontend-bifrost.prod-east.frontend.public.atl-paas.net/assets/migration-logo.25f5c840.svg"
                                            className="_1e0c1ule _p12fnzqo _c71l8wry _6rth1ejb _1pfhidpf _12l21wug _ahbq1wug"
                                            style="--max-width: 300px; --max-height: 250px;"/>
                                        <div className="_19itglyw _vchhusvi _r06hglyw _85i5pxbi">
                                            <h2
                                            className="_1mouidpf _1dyz4jg8 _1p1dglyw _11c8lodh _syaz1fxt">You haven’t
                                            worked on anything yet
                                            </h2>
                                        </div>
                                        <div className="_19itglyw _vchhusvi _r06hglyw _85i51ejb">
                                            <p className="_19pkidpf _2hwxidpf _otyridpf _18u0idpf _1i4qfg65 _11c82smr _syaz1fxt">In
                                            this page, you’ll find your recently worked on issues. Get started by
                                            finding the project your team is working on.
                                            </p>
                                        </div>
                                        <div className="_1e0c1txw _4cvr1h6o _1bah1h6o _6rthu2gc _bozg1jfw">
                                            <div role="group" aria-label="Button group" className="css-1oy5iav">
                                                <a className="css-1i2jkn6" tabIndex="0" href="/jira/projects" target="_self">
                                                    <span className="css-178ag6o">View all projects</span>
                                                </a>
                                            </div>
                                            <div className="_1bsb1ejb _ahbqpxbi"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>*/
    return (
        <div className="botton-content tracking-table">
            <div className="table-container">
                <div className="table-wrapper">
                    <div className="table-content">
                        <div role="tablist" className="">
                            <div id="your-work-page-tabs-0" aria-controls="your-work-page-tabs-0-tab" aria-posinset="1" aria-selected="true" aria-setsize="5" role="tab" tabIndex="0" className="item1">
                                <span className="description">
                                    Worked on
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default OverviewTable;