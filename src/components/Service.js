import React, { Component } from 'react'
import 'react-toastify/dist/ReactToastify.min.css'

export default class Service extends Component {
    constructor(props) {
        super(props)
    }

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