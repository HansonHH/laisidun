import React, { Component } from 'react'
import { HashRouter as Router, Route, Link } from "react-router-dom"
import { Compass, Home as HomeIcon, Settings } from 'react-feather'

import Home from './Home'
import Service from "./Service"
import AboutUs from "./AboutUs"
import Contact from "./Contact"

export default class Header extends Component {
    constructor(props) {
        super(props)
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
                                    <img className="logo-default" src="https://ipfs.infura.io/ipfs/QmeMn3ArrUcS6ALqFVHCC7wZBP9YsXi1pFHD3ZQb8xPJQD" alt="logo" />
                                    <img className="logo-inverse" src="https://ipfs.infura.io/ipfs/QmdMpSAUDhTibnwHxaTeoGprmBrFw46k6Z3CPtuh4n1An3" alt="logo" />
                                </Link>
                            </div>
                            
                            <div className="topbar-right">
                                <ul className="topbar-nav nav" style={{paddingRight: 10}}>
                                    <li className="nav-item"><Link to="/" className="nav-link"><HomeIcon size={12}/> 主页</Link></li>
                                    <li className="nav-item"><Link to="/service" className="nav-link"><Compass size={12}/> 服务领域</Link></li>
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
                    </div>
                </div>
            </Router>
       )
    }
}
