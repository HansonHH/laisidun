import React, { Component } from 'react'
import 'react-toastify/dist/ReactToastify.min.css'

export default class Article extends Component {
    constructor(props) {
        super(props)

        this.category = this.props.category
        this.title = this.props.title
        this.content = this.props.content
    }

    createMarkup() {
        return {__html: this.content}
    }

    render() {
        return (
            <div>
                <header className="header header-inverse" data-overlay={1} style={{backgroundImage: 'url(https://c1.staticflickr.com/4/3858/14325899679_179347cec0_b.jpg)'}}>
                    <div className="container-wide text-center">
                        <div className="row">
                            <div className="col-12 col-lg-8 offset-lg-2">
                                <p className="fs-35">{this.category}</p>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="main-content">
                    <section className="section">
                        <div className="container">
                            <div className="row gap-y align-items-center mb-90">
                                <div className="col-12 col-md-12 text-center text-md-left">
                                    <h3 className="fw-300 text-center">{this.title}</h3>
                                    <div dangerouslySetInnerHTML={this.createMarkup()}></div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

            </div>
        )
    }
}