import React, { Component } from 'react'
import 'react-toastify/dist/ReactToastify.min.css'

export default class AboutUs extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <header className="header header-inverse" data-overlay={1} style={{backgroundImage: 'url(https://c1.staticflickr.com/4/3858/14325899679_179347cec0_b.jpg)'}}>
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
                                    <p>成都莱斯顿出国服务有限公司成立于四川省成都市，注册资金人民币捌佰万元整，是独立法人企业。公司专注于为中国有意愿移民的公民合法、快速、安全地办理美国移民手续。</p>
                                    <p>成都莱斯顿出国服务有限公司，系美国商务集团在中国西部唯一授权负责开展企业家、个人、全家移民定居美国及个人资产合法移动与保护，购置美国房产、地产及管理、国际项目投资与管理，开办独资企业（公司）等业务。并授权成都莱斯顿岀国服务有限公司有权以“ABSG”成都联络处的名义举行谈判并签署有关合作的意向协议。</p>
                                </div>
                                <div className="col-12 col-md-6 offset-md-1 text-center hidden-sm-down">
                                    <img src="http://pic.qiantucdn.com/58pic/13/80/01/25E58PICYAc_1024.jpg" alt="..."></img>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section">
                        <div className="container">
                            <div className="row gap-y align-items-center mb-90">
                                <div className="col-12 col-md-6 text-center hidden-sm-down">
                                    <img src="http://study.com/cimages/course-image/clep-history-of-the-united-states-i-study-guide-test-prep_137696_large.jpg" style={{width: '100%'}} alt="..."></img>
                                </div>
                                <div className="col-12 col-md-5 offset-md-1 text-center text-md-left">
                                    <h3 className="fw-300">成立故事</h3>
                                    <p>成都莱斯顿的成功设立，并不是简单地诞生了一家出国服务公司，而是搭建起了中美两国民间与民间、企业与企业、国家与国家的积极向上的互通互惠的桥梁。</p>
                                    <p>莱斯顿出国服务有限公司结合美商集团20多年的移民经验，汇聚美商集团著名的律师团队、顶级移民规划师、金牌文案专家、专家级会计师事务所团队为客户定制专属的移民方案，98%以上的移民绿卡成功率。并为客户的个人资产（财产）合法地移动定制专属方案以确保合法成功。</p>
                                    <p>莱斯顿出国服务有限公司不同于市场上的中介公司，客户一经与莱斯顿签定协议，后续的流程即由美商集团旗下的律师、会计师、顶级文案专家等强大的团队进入流程中开展工作，客户如有疑虑可前往美国视察并考证。莱斯顿岀国服务有限公司的服务是透明的、工作流程也是透明的，欢迎各界人士与我们合作。</p>
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