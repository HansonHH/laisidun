import React, { Component } from 'react'
import 'react-toastify/dist/ReactToastify.min.css'
//import {Map, Marker, NavigationControl, InfoWindow} from 'react-bmap'

export default class Contact extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        var addScript = document.createElement('script')
        addScript.setAttribute('src', 'http://api.map.baidu.com/api?v=2.0&ak=1XjLLEhZhQNUzd93EjU5nOGQ')
        document.getElementsByTagName("head")[0].appendChild(addScript)

    }

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
                            <div className="row gap-y align-items-center mb-90">
                                <div className="col-12 col-md-5 text-center text-md-left">
                                    <h3 className="fw-300">联系我们</h3>
                                    <p>地址: 四川省成都市武侯区人民南路四段19号威斯顿联邦大厦18楼1811号</p>
                                    <p>联系电话: 18117894668</p>
                                    <p>传真: 028-86529882</p>
                                    <p>工作时间: 周一至周五 9:00至17:30</p>
                                </div>
                                {/*
                                <div className="col-12 col-md-6 offset-md-1 text-center hidden-sm-down">
                                    <Map center={{lng: 104.073952, lat: 30.630551}} zoom="18">
                                        <Marker position={{lng: 104.073952, lat: 30.630551}} />
                                        <NavigationControl /> 
                                        <InfoWindow position={{lng: 104.073952, lat: 30.630551}} title="成都莱斯顿出国服务有限公司" text="四川省成都市武侯区人民南路四段19号威斯顿联邦大厦18楼1811号"/>
                                    </Map>
                                </div>
                                */}
                            </div>
                        </div>
                    </section>
                </main>

            </div>
        )
    }
}