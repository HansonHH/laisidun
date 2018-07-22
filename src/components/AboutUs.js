import React, { Component } from 'react'
import 'react-toastify/dist/ReactToastify.min.css'

export default class AboutUs extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <header className="header header-inverse" data-overlay={1} style={{backgroundImage: 'url(https://flinkhub.com/assets/img/lisfh.jpg)'}}>
                    <div className="container-wide text-center">
                        <div className="row">
                            <div className="col-12 col-lg-8 offset-lg-2">
                                <p className="fs-35">关于我们</p>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="main-content">

                    <section className="section">
                        <div className="container">
                            <div className="row gap-y align-items-center mb-90">
                                <div className="col-12 col-md-5 text-center text-md-left">
                                    <h3 className="fw-300">关于我们</h3>
                                    <p>成都莱斯顿出国服务有限公司成立於中国四川省成都市，註冊资金人民币捌佰万元整，是专注于为中国和美国企业提供企业管理服务，涵盖企业运营管理（含企业上市）、企业文化咨询、企业人事、人力资源管理、项目推广及管理等服务。</p>
                                    <p>凭借对中国本土环境的透彻理解，加上跨国的专业平台背景支持，我们能为客户提供具有前瞻性、创造性、针对性和易实施的企业管理咨询解决方案。</p>
                                    <p>接美国企业和资深律师事务所、会计师事务所官方授权与委托，本公司全权代表美国多家涉及法律、教育、投资、工贸的企业，承接部分惠及中国企业和个人的定制服务项目，负责项目在中国市场的落地和推广，为有需求的客户提供专业的服务，更希望助力相关行业在中国地区的发展。</p>
                                </div>
                                <div className="col-12 col-md-6 offset-md-1 text-center hidden-sm-down">
                                    <img src="https://flinkhub.com/assets/img/connect.png" alt="..."></img>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section">
                        <div className="container">
                            <div className="row gap-y align-items-center mb-90">
                                <div className="col-12 col-md-6 text-center hidden-sm-down">
                                    <img src="https://flinkhub.com/assets/img/welcome.png" style={{width: '75%'}} alt="..."></img>
                                </div>
                                <div className="col-12 col-md-5 offset-md-1 text-center text-md-left">
                                    <h3 className="fw-300">成立故事</h3>
                                    <p>莱斯顿的成功设立，并不是简单地诞生了一项集团公司新业务，而是为新时代的企业在管理和发展的道路上添砖加瓦，为不同领域的企业和领导者提供真正科学和可持续的解决方案。</p>
                                    <p>我们见证了很多中国企业朝气蓬勃、欣欣向荣的历史，也目睹了短小精悍的创业公司如何用科学的idea和无可挑剔的服务，为自己在市场中赢得了地位。</p>
                                    <p>我们时刻体会着这样的差异，却又在这样这样的差异中鞭策自己，不断地更新升级企业管理解决方案。吃老本，行老路，终究要被淹没在历史的洪流中。</p>
                                    <p>有好产品，却要面对“养在深闺人未识”的境，品牌人人识，无奈资金链断裂，遭遇停工、裁员，营销效果好，利润却寥寥无几，让人“心如刀割”。在创办企业和管理企业这条路上，小聪明永远胜不了大智慧，修修补补、敲敲打打也换不来系统性管理的严谨和游刃有余。</p>
                                    <p>指导美资企业近半个世纪的企业管理智慧，现由桑瑞斯企业管理咨询正式推向中国市场。</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section">
                        <div className="container">
                            <header className="section-header">
                                <h3>- 办公区域 -</h3>
                            </header>

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
                                        <div className="carousel-item">
                                            <img className="d-block w-3500" src="http://11687707.s21i.faiusr.com/2/ABUIABACGAAgufzKwAUonPKt5QcwsAk45gU.jpg" alt="Fifth slide"></img>
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