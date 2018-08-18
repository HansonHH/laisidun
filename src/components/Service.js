import React, { Component } from 'react'
import 'react-toastify/dist/ReactToastify.min.css'

export default class Service extends Component {
    constructor(props) {
        super(props)
    }
    /*
    render() {
        return (
            <div>
                <header className="header header-inverse" data-overlay={1} style={{backgroundImage: 'url(https://flinkhub.com/assets/img/bg-laptop.jpg)'}}>
                    <div className="container-wide text-center">
                        <div className="row">
                            <div className="col-12 col-lg-8 offset-lg-2">
                                <p className="fs-35">联系我们</p>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="main-content">
                    
                    <section className="section"> 
                        <div className="container">
                            <header className="section-header">
                                <h3>- 服务领域 -</h3>
                            </header>
                        </div>
                    </section>

                    <section className="section">
                        <div className="container">
                            <div className="row gap-y align-items-center mb-90">
                                <div className="col-12 col-md-5 text-center text-md-left">
                                    <h3 className="fw-300">企业文化咨询</h3>
                                    <p>企业文化调研、建设方案、系统设计与规划企业文化手册、视觉系统、行为系统</p>
                                </div>
                                <div className="col-12 col-md-6 offset-md-1 text-center hidden-sm-down">
                                    <img src="http://10956973.s61i.faiusr.com/4/AD0IreGcBRAEGAAgncOkvgUoyIiHjwMwpQE4pQE.png" alt="..."></img>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row gap-y align-items-center mb-90">
                                <div className="col-12 col-md-6 text-center hidden-sm-down">
                                    <img src="http://10956973.s61i.faiusr.com/4/AD0IreGcBRAEGAAgmsOkvgUosJnGlwIwpQE4pQE.png" alt="..."></img>
                                </div>
                                <div className="col-12 col-md-5 offset-md-1 text-center text-md-left">
                                    <h3 className="fw-300">企业运营管理</h3>
                                    <p>企业实地走访、调研运营管理根基、企业上市</p>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row gap-y align-items-center mb-90">
                                <div className="col-12 col-md-5 text-center text-md-left">
                                    <h3 className="fw-300">人力资源管理</h3>
                                    <p>人力资源整体战略定位与规划，建立全面系统、操作性强的人力资源管理体系</p>
                                </div>
                                <div className="col-12 col-md-6 offset-md-1 text-center hidden-sm-down">
                                    <img src="http://10956973.s61i.faiusr.com/4/AD0IreGcBRAEGAAgn8OkvgUoiKf20wEwpQE4pQE.png" alt="..."></img>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row gap-y align-items-center mb-90">
                                <div className="col-12 col-md-6 text-center hidden-sm-down">
                                    <img src="http://10956973.s61i.faiusr.com/4/AD0IreGcBRAEGAAgosOkvgUoxeDRFjClATilAQ.png" alt="..."></img>
                                </div>
                                <div className="col-12 col-md-5 offset-md-1 text-center text-md-left">
                                    <h3 className="fw-300">企业管理培训服务</h3>
                                    <p>为企业的中高层领导人和管理人员</p>
                                    <p>提供企业切实可行的培训和培训方案</p>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row gap-y align-items-center mb-90">
                                <div className="col-12 col-md-5 text-center text-md-left">
                                    <h3 className="fw-300">项目推广及管理</h3>
                                    <p>为企业的中高层领导人和管理人员</p>
                                    <p>提供企业切实可行的培训和培训方案</p>
                                </div>
                                <div className="col-12 col-md-6 offset-md-1 text-center hidden-sm-down">
                                    <img src="http://10956973.s61i.faiusr.com/4/AD0IreGcBRAEGAAgpMOkvgUo8IbakAIwpQE4pQE.png" alt="..."></img>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row gap-y align-items-center mb-90">
                                <div className="col-12 col-md-6 text-center hidden-sm-down">
                                    <img src="http://10956973.s61i.faiusr.com/4/AD0IreGcBRAEGAAgpsOkvgUowZLr3QQwpQE4pQE.png" alt="..."></img>
                                </div>
                                <div className="col-12 col-md-5 offset-md-1 text-center text-md-left">
                                    <h3 className="fw-300">其他国际化业务咨询</h3>
                                    <p>为有国际发展寻求或考虑国际业务发展的企业量身定做解决方案，一站式服</p>
                                </div>
                            </div>
                        </div>
                    </section>

                </main>

            </div>
        )
    }
    */

    render() {
        return (
            <div>
                <header className="header header-inverse" data-overlay={1} style={{backgroundImage: 'url(https://flinkhub.com/assets/img/bg-laptop.jpg)'}}>
                    <div className="container-wide text-center">
                        <div className="row">
                            <div className="col-12 col-lg-8 offset-lg-2">
                                <p className="fs-35">服务领域</p>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="main-content">
                    
                    <section className="section">
                        <div className="container">
                            <header className="section-header">
                                <h3>- 服务领域 -</h3>
                            </header>
                            <br></br>
                            <div className="row" style={{textAlign: "center"}}>
                                <div className="col-lg-4">
                                    <img className="rounded-circle" src="http://10956973.s61i.faiusr.com/4/AD0IreGcBRAEGAAgncOkvgUoyIiHjwMwpQE4pQE.png" alt="Generic placeholder image"></img>
                                    <br></br><br></br>
                                    <h3>跨国高管移民</h3>
                                </div>
                                <div className="col-lg-4">
                                    <img className="rounded-circle" src="http://10956973.s61i.faiusr.com/4/AD0IreGcBRAEGAAgmsOkvgUosJnGlwIwpQE4pQE.png" alt="Generic placeholder image"></img>
                                    <br></br><br></br>
                                    <h3>出国定居、探亲、访友</h3>
                                </div>
                                <div className="col-lg-4">
                                    <img className="rounded-circle" src="http://10956973.s61i.faiusr.com/4/AD0IreGcBRAEGAAgn8OkvgUoiKf20wEwpQE4pQE.png" alt="Generic placeholder image"></img>
                                    <br></br><br></br>
                                    <h3>财产继承和其它非公务活动提供信息介绍</h3>
                                </div>
                            </div>
                            <br></br>

                            <div className="row" style={{textAlign: "center"}}>
                                <div className="col-lg-4">
                                    <img className="rounded-circle" src="http://10956973.s61i.faiusr.com/4/AD0IreGcBRAEGAAgosOkvgUoxeDRFjClATilAQ.png" alt="Generic placeholder image"></img>
                                    <br></br><br></br>
                                    <h3>法律咨询</h3>
                                </div>
                                <div className="col-lg-4">
                                    <img className="rounded-circle" src="http://10956973.s61i.faiusr.com/4/AD0IreGcBRAEGAAgpMOkvgUo8IbakAIwpQE4pQE.png" alt="Generic placeholder image"></img>
                                    <br></br><br></br>
                                    <h3>商务信息咨询翻译服务</h3>
                                </div>
                                <div className="col-lg-4">
                                    <img className="rounded-circle" src="http://10956973.s61i.faiusr.com/4/AD0IreGcBRAEGAAgpsOkvgUowZLr3QQwpQE4pQE.png" alt="Generic placeholder image"></img>
                                    <br></br><br></br>
                                    <h3>岀国留学咨询，岀入境旅游服务</h3>
                                </div>
                            </div>

                        </div>
                    </section>


                </main>

            </div>
        )
    }
}