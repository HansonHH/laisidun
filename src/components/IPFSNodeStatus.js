import React, { Component } from 'react'
import * as utils from '../lib/utils'
import { localization } from '../lib/localization'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

export default class IPFSNodeStatus extends Component {
    constructor(props) {
        super(props)

        this.ipfsClient = this.props.ipfsClient
        this.state = {
            protocol: this.props.ipfsConfig.protocol,
            host: this.props.ipfsConfig.host,
            port: this.props.ipfsConfig.port,
            status: this.props.ipfsConfig.status
        }

        this.healthCheckClick = this.healthCheckClick.bind(this)
        this.changeNodeClick = this.changeNodeClick.bind(this)
    }

    healthCheck() {
        this.ipfsClient.nodeHealthCheck(this.state.protocol, this.state.host, this.state.port)
                .then(data => this.setState({status: 'success'}))
                .catch(err => {
                    if (err.response) {
                        if (err.response.status === 400) {
                            this.setState({status: 'success'})
                            utils.shotToast('success', localization.notificationCheckNodeSuccess)
                        } else {
                            this.setState({status: 'danger'})
                            utils.shotToast('error', localization.notificationCheckNodeFailure)
                        }
                    } else {
                        this.setState({status: 'danger'})
                        utils.shotToast('error', localization.notificationCheckNodeFailure)
                    }
                })
    }

    componentDidMount() {
        if (this.state.status !== 'success') {
            this.healthCheck()
        }
    }

    healthCheckClick(e) {
        e.preventDefault()
        this.setState({status: 'info'})
        this.healthCheck()
    }

    changeNodeClick(e) {
        e.preventDefault()
        const host = document.getElementById('host-name').value
        const protocol = document.getElementById('protocol-name').value
        const port = document.getElementById('port-name').value
        this.setState({
            protocol,
            host,
            port,
            status: 'info'  
        }, () => {
            this.props.updateIPFSClientConfig(this.state.host, this.state.port, this.state.protocol)
            this.healthCheck()
        })
    }

    render() {
        return (
            <div>
                <ToastContainer />
                <header className="header header-inverse" data-overlay={4} style={{backgroundImage: 'url(https://ipfs.infura.io/ipfs/QmUc1YUYsdZdnzN9RyfjG6qK1zi8yG3PMLfgb8cnmTYe1X)'}}>
                    <div className="container-wide text-center">
                        <div className="row">
                            <div className="col-12 col-lg-8 offset-lg-2">
                                <h1>{localization.settingsPageHeaderTitle}</h1>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="main-content">
                    <section className="section" style={{backgroundColor: '#e4e7ea'}}>
                        <div className="container">
                            <div className="row gap-y text-center">
                                <div className="col-12 col-md-12">
                                    <div className="pricing-1">
                                        <p className="plan-name">{localization.settingsCardTitle}</p>
                                        <h2 className="price">{this.state.status === 'success' ? localization.settingsCardStatusSuccess : localization.settingsCardStatusFailure}</h2>
                                        {localization.settingsCardNodeHost}: {this.state.host}<br />
                                        {localization.settingsCardNodeProtocol}: {this.state.protocol}<br />
                                        {localization.settingsCardNodePort}: {this.state.port}<br />
                                        <p className="text-center py-3">
                                            <a className="btn btn-primary" onClick={this.healthCheckClick}>{localization.settingsCardCheckNodeButton}</a>&nbsp;
                                            <a className="btn btn-warning" data-toggle="modal" data-target="#exampleModal">{localization.settingsCardChangeNodeButton}</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle">{localization.nodeModalTitle}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="input-group input-group-sm mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="inputGroup-sizing-default">{localization.nodeModalHost}</span>
                                        </div>
                                        <input type="text" className="form-control" id="host-name" defaultValue={this.state.host}></input>
                                    </div>
                                    <div className="input-group input-group-sm mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="inputGroup-sizing-default">{localization.nodeModalPort}</span>
                                        </div>
                                        <input type="text" className="form-control" id="port-name" defaultValue={this.state.port}></input>
                                    </div>
                                    <div className="input-group input-group-sm mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="inputGroup-sizing-default">{localization.nodeModalProtocol}</span>
                                        </div>
                                        <input type="text" className="form-control" id="protocol-name" defaultValue={this.state.protocol}></input>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary btn-sm" data-dismiss="modal">{localization.nodeModalCloseButton}</button>
                                <button type="button" className="btn btn-primary btn-sm" data-dismiss="modal" onClick={this.changeNodeClick}>{localization.nodeModalSaveButton}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
