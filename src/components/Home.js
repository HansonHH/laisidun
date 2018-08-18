import React, { Component } from 'react'

import { Link } from "react-router-dom"
import 'react-html5video/dist/styles.css'
import 'react-vertical-timeline-component/style.min.css'
import $ from 'jquery'
window.jQuery = $
window.$ = $
global.jQuery = $


export default class Home extends Component {
    constructor(props) {
		super(props)
		this.state = {
			value: null
		}
    }

    /*
    componentDidMount() {
        var addScript = document.createElement('script')
        addScript.setAttribute('src', 'https://ipfs.infura.io/ipfs/QmRtanxtWHLjcgesSJ6fJbVTHSMZqpBaVSUMEMXmzMZdH8')
        document.getElementsByTagName("head")[0].appendChild(addScript)
        addScript = document.createElement('script')
        addScript.setAttribute('src', 'https://ipfs.infura.io/ipfs/QmXoBPxrtJpyThCJTUWFzu9GPsjSrZMDgxTD8yT34E89wK')
        document.getElementsByTagName("head")[0].appendChild(addScript)
    }
    */

    render() {
        return (
            <div>
                <header className="header fadeout header-inverse pb-0 h-fullscreen" data-overlay={5} style={{backgroundImage: 'url(https://canadianimmigrationexperts.ca/wp-content/uploads/usa-city.jpg)'}}>
                    <div className="container-wide">
                        <div className="row h-full align-items-center text-center text-lg-center" style={{}}>
                            <div className="col-md-12" style={{margin: '0 auto', display: 'block'}}>
                                <h1 className="fw-300" style={{fontSize: '3.5rem'}}>成都莱斯顿出国服务有限公司</h1>
                                <br />
                                
                                <p className="lead mx-auto text-center fs-28 hidden-sm-down">
                                    <span style={{marginLeft: '1%'}}></span>
                                    <span className="text-default" data-type="IPFAS is a distributed file system powered by IPFS and Nebulas, IPFAS makes file sharing faster and more open" />
                                </p>
                                
                                <br />
                                <a className="btn btn-lg btn-primary" href="#cr" data-scrollto="cr">了解更多</a>
                            </div>
                            <div className="col-12 align-self-end text-center pb-30">
                                <a className="scroll-down-2 scroll-down-inverse" href="#cr" data-scrollto="cr"><span /></a>
                            </div>
                        </div>
                    </div>
                </header>
                
                <main className="main-content">

                    <section className="section p-0 bb-1" id="cr">
                        <div className="container-wide">
                            <div className="row no-gap">
                                <div id="outer-frame" style={{width: '105%'}}>

                                    <div id="page-content">
                                        <div className="animate guide-pane" style={{position: 'relative', float: 'left'}}>
                                            <div style={{backgroundColor: '#0facf3', position: 'relative', backgroundSize: 'cover'}} className="guide-pane__inner animate__item guide-header guide-header--business">
                                                <header className="guide-header__content">
                                                    <h1 className="t-pageTitle u-white">专业</h1>
                                                    <h2 className="u-white">美商集团旗下顶级律师团队</h2>
                                                    <h2 className="u-white">为您提供法律服务</h2>
                                                </header>
                                            </div>
                                            <div style={{backgroundColor: '#e4e7ea', position: 'relative', backgroundSize: 'cover'}} className="guide-pane__inner animate__item guide-header guide-header--business">
                                                <header className="guide-header__content">
                                                    <h1 className="t-pageTitle">专业流程</h1>
                                                    <h2>美商集团严格遵照合同流程</h2>
                                                    <h2>满足您的期望</h2>
                                                </header>
                                            </div>
                                        </div>
                                        <div className="animate guide-pane guide-pane--right" style={{position: 'relative', float: 'left'}}>
                                            <div style={{backgroundColor: '#e4e7ea', position: 'relative', backgroundSize: 'cover'}} className="guide-pane__inner animate__item guide-header guide-header--admin">
                                                <header className="guide-header__content">
                                                    <h1 className="t-pageTitle">专业</h1>
                                                    <h2>美商集团旗下金牌会计师团队</h2>
                                                    <h2>您的专业财务管家</h2>
                                                </header>
                                            </div>
                                            <div style={{backgroundColor: '#0facf3', position: 'relative', backgroundSize: 'cover'}} className="guide-pane__inner animate__item guide-header guide-header--admin">
                                                <header className="guide-header__content">
                                                    <h1 className="t-pageTitle u-white">专业服务</h1>
                                                    <h2 className="u-white">7*24小时全天候响应服务</h2>
                                                    <h2 className="u-white">客户满意度98%以上</h2>
                                                </header>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section" id="cr2"> 
                        <div className="container">
                            <header className="section-header">
                                <h3>- 关于我们 -</h3>
                            </header>
                            <div>
                                <p>成都莱斯顿出国服务有限公司成立于四川省成都市，注册资金人民币捌佰万元整，是独立法人企业。公司专注于为中国有意愿移民的公民合法、快速、安全地办理美国移民手续。</p>
                                <p>成都莱斯顿出国服务有限公司，系美国商务集团在中国西部谁一授权负责开展企业家、个人、全家移民定居美国及个人资产合法移动与保护，购置美国房产、地产及管理、国际项目投资与管理，开办独资企业（公司）等业务。并授权成都莱斯顿岀国服务有限公司有权以“ABSG”成都联络处的名义举行谈判并签署有关合作的意向协议。</p>
                                <div className="partner">
                                    <button className="btn btn-lg btn-success"><Link to="/about-us" style={{color:'#ffffff'}}> 查看更多</Link></button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section">
                        <div className="container">

                            <div className="col-10 offset-1 text-center">
                                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                        {/*<li data-target="#carouselExampleIndicators" data-slide-to="4"></li>*/}
                                    </ol>
                                    
                                    <div className="carousel-inner" role="listbox" style={{width:"100%", height: "500px !important"}}>
                                        <div className="carousel-item active">
                                            <img className="d-block w-3500" src="http://11687707.s21i.faiusr.com/2/ABUIABACGAAgjf3KwAUo2MKUiwUwoAY41wQ.jpg" alt="First slide"></img>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-3500" src="http://11687707.s21i.faiusr.com/2/ABUIABACGAAgof3KwAUo5O615gQwoAY42AQ.jpg" alt="Second slide"></img>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-3500" src="http://11687707.s21i.faiusr.com/2/ABUIABACGAAgnv3KwAUozJ2CggUwoAY41wQ.jpg" alt="Third slide"></img>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-3500" src="http://11687707.s21i.faiusr.com/2/ABUIABACGAAgpP3KwAUo9v-HkwQwoAY42AQ.jpg" alt="Fourth slide"></img>
                                        </div>
                                        {/*
                                        <div className="carousel-item active">
                                            <img className="d-block w-3500" src="https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200" alt="First slide"></img>
                                        </div>
                                        */}
                                    </div>

                                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </section>

                </main>
            </div>   
        )
    }

}
