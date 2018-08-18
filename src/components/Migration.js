import React, { Component } from 'react'
import 'react-toastify/dist/ReactToastify.min.css'
import { Link } from "react-router-dom"
import * as Data from '../lib/data'
import { File, Info, Hash, MoreHorizontal, Calendar, Book, User, Share2, DollarSign, Music, Youtube, FileText, Image, Heart, ArrowUp, AlertOctagon } from 'react-feather'

export default class Migration extends Component {
    constructor(props) {
        super(props)

        this.state = {
            category: Data.L1Visa.category,
			articles: Data.L1Visa.articles
		}
    }

    componentDidMount() {
        this.state.articles = []
        this.state.articles.push(...Data.L1Visa.articles)
		this.setState({ articles: this.state.articles })
	}

    chooseTag(tag) {
        console.log('tag is ', tag)
        switch (tag) {
            case 0:
                this.loadData(Data.L1Visa)
                break
            case 1:
                this.loadData(Data.Priority)
                break
        }
    }

    loadData(data) {
        this.state.category = data.category
        this.state.articles = []
        this.state.articles.push(...data.articles)
		this.setState({ articles: this.state.articles })
    }

    render() {
        return (
            <div>
                <header className="header header-inverse" data-overlay={1} style={{backgroundImage: 'url(https://www.wallpaperup.com/uploads/wallpapers/2014/03/23/306770/672440de14d1f0ae906191b3b7528dc2.jpg)'}}>
                    <div className="container-wide text-center">
                        <div className="row">
                            <div className="col-12 col-lg-8 offset-lg-2">
                                <p className="fs-35">L1移民专栏</p>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="container text-center" style={{ marginTop: "10px" }}>
					<button type="button" className="btn btn-primary" onClick={() => this.chooseTag(0)}>L1签证</button>&nbsp;
					<button type="button" className="btn btn-secondary" onClick={() => this.chooseTag(1)}>第一类优先移民</button>&nbsp;
					<button type="button" className="btn btn-success" onClick={() => this.chooseTag(2)}>移民体验</button>&nbsp;
					<button type="button" className="btn btn-danger" onClick={() => this.chooseTag(3)}>移民常识</button>&nbsp;
					<button type="button" className="btn btn-warning" onClick={() => this.chooseTag(4)}>美国生活</button>&nbsp;
					<button type="button" className="btn btn-info" onClick={() => this.chooseTag(5)}>美国报税</button>
				</div>

                <div className="container">
					<div className="row" style={{ marginTop: "10px" }}>
                        
                        <main role="main" class="col-md-12 ml-sm-auto col-lg-12 px-4">
                            <h4>{this.state.category}</h4>
                            {this.state.articles.map((article) => {
                                return (
                                    <Link to={article.link} className="nav-link" target="_blank">{article.title}</Link>
                                )
                            })}
                        </main>
					</div>
                </div>

            </div>
        )
    }
}