import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { Compass, Home as HomeIcon, Settings } from 'react-feather'

import Home from './Home'
import Service from "./Service"
import AboutUs from "./AboutUs"
import Contact from "./Contact"
import Migration from "./Migration"
import Article from "./Article"

import * as Data from '../lib/data'

export default class Main extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        var addScript = document.createElement('script')
        addScript.setAttribute('src', 'https://ipfs.infura.io/ipfs/QmRtanxtWHLjcgesSJ6fJbVTHSMZqpBaVSUMEMXmzMZdH8')
        document.getElementsByTagName("head")[0].appendChild(addScript)
        addScript = document.createElement('script')
        addScript.setAttribute('src', 'https://ipfs.infura.io/ipfs/QmYPSjMYmTHpqv1qzY5zbQkZKsh6rSSbT3vuJtpnrTwbG4')
        document.getElementsByTagName("head")[0].appendChild(addScript)
        addScript.setAttribute('src', 'https://unpkg.com/aos@next/dist/aos.js')
        document.getElementsByTagName("head")[0].appendChild(addScript)
    }

    render() {
        return (
            <Router>
                <div>
                    <nav className="topbar topbar-inverse topbar-expand-md topbar-sticky">
                        <div className="container">
                            
                            <div className="topbar-left">
                                <button className="topbar-toggler">☰</button>
                                <Link className="topbar-brand" to="/">
                                    <img className="logo-default" src="https://ipfs.infura.io/ipfs/QmPXcq3BxThhPRtL9E3KeePJi1fGMvXa5rLS9iqeUZYiE9" alt="logo" />
                                    <img className="logo-inverse" src="https://ipfs.infura.io/ipfs/QmVZ8C5Ln2GZhMoBuWTnpJ5DvrhAzDPVm2WtwVfPXMGzff" alt="logo" />
                                </Link>
                            </div>
                            
                            <div className="topbar-right">
                                <ul className="topbar-nav nav" style={{paddingRight: 10}}>
                                    <li className="nav-item"><Link to="/" className="nav-link"><HomeIcon size={12}/> 主页</Link></li>
                                    <li className="nav-item"><Link to="/service" className="nav-link"><Compass size={12}/> 服务领域</Link></li>
                                    <li className="nav-item"><Link to="/migration" className="nav-link"><Settings size={12}/> L1移民专栏</Link></li>
                                    <li className="nav-item"><Link to="/about-us" className="nav-link"><Settings size={12}/> 关于我们</Link></li>
                                    <li className="nav-item"><Link to="/contact" className="nav-link"><Settings size={12}/> 联系我们</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    
                    <div style={{ marginTop: "0px" }}> 
                        <Route
                            key="0"
                            path="/"
                            exact={true}
                            render={ () => 
                                <div>
                                    <Home />
                                </div> 
                            }  
                        />
                        <Route
                            key="1"
                            path="/service"
                            exact={true}
                            render={ () => 
                                <div>
                                    <Service />
                                </div>
                            }  
                        />
                        <Route
                            key="2"
                            path="/about-us"
                            exact={true}
                            render={ () => 
                                <div>
                                    <AboutUs />
                                </div>
                            }  
                        />
                        <Route
                            key="3"
                            path="/contact"
                            exact={true}
                            render={ () => 
                                <div>
                                    <Contact />
                                </div>
                            }  
                        />
                        <Route
                            key="4"
                            path="/migration"
                            exact={true}
                            render={ ({ match }) => 
                                <div>
                                    <Migration />
                                </div>
                            }  
                        />
                        <Route
                            //key="5"
                            path="/article/1/:id"
                            render={ ({ match }) =>  {
                                    const index = parseInt(match.params.id)
                                    return (
                                        <div>
                                            <Article  category={Data.L1Visa.category} title={Data.L1Visa.articles[index].title} content={Data.L1Visa.articles[index].content} />
                                        </div>
                                    )
                                }
                            }  
                        />
                        <Route
                            //key="5"
                            path="/article/2/:id"
                            render={ ({ match }) =>  {
                                    const index = parseInt(match.params.id)
                                    return (
                                        <div>
                                            <Article  category={Data.Priority.category} title={Data.Priority.articles[index].title} content={Data.Priority.articles[index].content} />
                                        </div>
                                    )
                                }
                            }  
                        />
                    </div>
                </div>
            </Router>
       )
    }
}
