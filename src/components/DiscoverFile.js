import React, { Component } from 'react'
import { File, Info, Hash, MoreHorizontal, Calendar, Book, User, Share2, Link, DollarSign, Music, Youtube, FileText, Image, Heart, ArrowUp, AlertOctagon } from 'react-feather'
import * as utils from '../lib/utils'
import { localization } from '../lib/localization'
import { Digital } from 'react-activity'
import 'react-activity/dist/react-activity.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
const QRCode = require('qrcode.react')

export default class DiscoverFile extends Component {
    constructor(props) {
        super(props)
        
        this.ipfsClient = this.props.ipfsClient
		this.nebulasClient = this.props.nebulasClient

		this.state = {
			files: [],
			indicator_size: 48,
			indicator_speed: 1,
			indicator_color: '#4CABEF',
			indicator_animating: false,
			infoModal: {
				title: '',
				filaName: '',
				hash: '',
				uploader: ''
			},
			qrCodeModal: {
				link: '',
			},
			reportFile: undefined
		}
		this.handleKeyPressDown = this.handleKeyPressDown.bind(this)
		this.search = this.search.bind(this)
		this.reportClick = this.reportClick.bind(this)
	}

	componentDidMount() {
		setTimeout(() => {
			if (typeof(webExtensionWallet) === 'undefined') {
				utils.shotToast('warn', localization.notificationInstallWalletWarn, 30000)
			}
		}, 3000)
		this.getFiles()
	}

	handleKeyPressDown(e) {
		if (e.key === 'Enter') {
			this.search()
		}
	}

	async showInfo(file) {
		this.setState({
			infoModal: {
				title: 'Info',
				fileName: file.fileName,
				hash: file.hash,
				uploader: file.uploader
			}
		})
	}

	async showQRCode(file) {
		this.setState({
			qrCodeModal: {
				link: file.url
			}
		})
	}

	async payTips(file) {
		this.setState({ indicator_animating: true })
		try {
			const response = await this.nebulasClient.payTips(file.uploader)
			console.log(`successfully paid tips to uploader: ${JSON.stringify(response)}`)
			utils.shotToast('info', localization.notificationPayTipsSuccess)
		} catch (error) {
			utils.shotToast('error', localization.notificationPayTipsFailure)
			console.log('failed to pay tips', error)
		}
		this.setState({ indicator_animating: false })
	}

	async setReportFile(file) {
		this.setState({ reportFile: file })
	}

	async reportClick() {
		const reason = document.getElementById('reportFormControlTextarea').value
		if (!reason) {
			utils.shotToast('warn', localization.notificationReportFileEmptyReason)
		} else {
			try {
				const reportFile = this.state.reportFile
				const response = await this.nebulasClient.saveReport(Date.now() + reportFile.key, reportFile.key, reason, Date.now())
				utils.shotToast('info', localization.notificationReportFileSuccess)
				this.setState({ reportFile: undefined })
			} catch (error) {
				utils.shotToast('error', localization.notificationReportFileFailure)
				console.log('failed to reprt file', error)
			}
		}
	}

	async getFiles() {
		this.setState({ indicator_animating: true })
		try {
			this.state.files = []
			const response = await this.nebulasClient.getFiles(0, -1)
			let files = JSON.parse(response.result)

			if (files.length) {
				console.log(`successfully got user's files info from blockchain`, response)
				files = files.slice(Math.max(files.length - 20, 0))
				files = this.convertFiles(files)
				this.state.files.push(...files)
				this.setState({ files: this.state.files })
				utils.shotToast('info', localization.notificationFetchFilesSuccess)
			} else {
				utils.shotToast('warn', localization.notificationFetchFilesWarn)
				console.log(`no result found on blockchain`)
			}
	
		} catch (error) {
			utils.shotToast('error', localization.notificationFetchFilesFailure)
			console.log(`failed to get user's files info on blockchain`, error)
		}
		this.setState({ indicator_animating: false })
	}

	convertFiles(files) {
		return files.map((file) => {
			return {
				key: file.key,
				fileName: file.fileName,
				fileSize: parseInt(file.fileSize, 10),
				hash: file.key,
				gateway: file.gateway,
				url: file.url,
				date: parseInt(file.date, 10),
				uploader: file.uploader,
				isPublic: file.isPublic
			}
		})
	}

	async chooseTag(tag) {
		try {
			this.state.files = []
			let files = []
			let response
			switch (tag) {
				case 0:
					response = await this.getFiles()
					break
				case 1:
					this.setState({ indicator_animating: true })
					response = await this.nebulasClient.search('.jpg')
					files = this.convertFiles(JSON.parse(response.result))
					response = await this.nebulasClient.search('.jpeg')
					files.push(...this.convertFiles(JSON.parse(response.result)))
					response = await this.nebulasClient.search('.png')
					files.push(...this.convertFiles(JSON.parse(response.result)))
					response = await this.nebulasClient.search('.gif')
					files.push(...this.convertFiles(JSON.parse(response.result)))
					if (files.length) {
						this.state.files.push(...files)
						this.setState({ files: this.state.files })
						utils.shotToast('info', localization.notificationFetchFilesSuccess)
					} else {
						utils.shotToast('warn', localization.notificationFetchFilesWarn)
						console.log(`no result found on blockchain`)
					}
					this.setState({ indicator_animating: false })
					break
				case 2:
					this.setState({ indicator_animating: true })
					response = await this.nebulasClient.search('.pdf')
					files = this.convertFiles(JSON.parse(response.result))
					response = await this.nebulasClient.search('.txt')
					files.push(...this.convertFiles(JSON.parse(response.result)))
					response = await this.nebulasClient.search('.ppt')
					files.push(...this.convertFiles(JSON.parse(response.result)))
					if (files.length) {
						this.state.files.push(...files)
						this.setState({ files: this.state.files })
						utils.shotToast('info', localization.notificationFetchFilesSuccess)
					} else {
						utils.shotToast('warn', localization.notificationFetchFilesWarn)
						console.log(`no result found on blockchain`)
					}
					this.setState({ indicator_animating: false })
					break
				case 3:
					this.setState({ indicator_animating: true })
					response = await this.nebulasClient.search('.mp4')
					files = this.convertFiles(JSON.parse(response.result))
					response = await this.nebulasClient.search('.mov')
					files.push(...this.convertFiles(JSON.parse(response.result)))
					if (files.length) {
						this.state.files.push(...files)
						this.setState({ files: this.state.files })
						utils.shotToast('info', localization.notificationFetchFilesSuccess)
					} else {
						utils.shotToast('warn', localization.notificationFetchFilesWarn)
						console.log(`no result found on blockchain`)
					}
					this.setState({ indicator_animating: false })
					break
				case 4:
					this.setState({ indicator_animating: true })
					response = await this.nebulasClient.search('.mp3')
					files = this.convertFiles(JSON.parse(response.result))
					response = await this.nebulasClient.search('.aac')
					files.push(...this.convertFiles(JSON.parse(response.result)))
					if (files.length) {
						this.state.files.push(...files)
						this.setState({ files: this.state.files })
						utils.shotToast('info', localization.notificationFetchFilesSuccess)
					} else {
						utils.shotToast('warn', localization.notificationFetchFilesWarn)
						console.log(`no result found on blockchain`)
					}
					this.setState({ indicator_animating: false })
					break
				case 5:
					this.setState({ indicator_animating: true })
					response = await this.nebulasClient.search('nebulas')
					files = this.convertFiles(JSON.parse(response.result))
					if (files.length) {
						this.state.files.push(...files)
						this.setState({ files: this.state.files })
						utils.shotToast('info', localization.notificationFetchFilesSuccess)
					} else {
						utils.shotToast('warn', localization.notificationFetchFilesWarn)
						console.log(`no result found on blockchain`)
					}
					this.setState({ indicator_animating: false })
					break
			}
		} catch (error) {
			utils.shotToast('error', localization.notificationFetchFilesFailure)
			console.log(`failed to get user's files info on blockchain`, error)
		}
	}


    async search() {
		const input = document.getElementById('search_file').value
		if (input) {
			this.setState({ indicator_animating: true })
			try {
				this.state.files = []
				const response = await this.nebulasClient.search(input)
				const files = JSON.parse(response.result)
	
				if (files.length) {
					console.log(`successfully got file from blockchain`, response)
					files.forEach((file, index) => {
						const f = {
							key: index,
							fileName: file.fileName,
							fileSize: parseInt(file.fileSize, 10),
							hash: file.key,
							uploader: file.uploader,
							gateway: file.gateway,
							url: file.url,
							date: parseInt(file.date, 10)
						}
						this.state.files.push(f)
					})
					this.setState({ files: this.state.files })
					utils.shotToast('info', localization.notificationFetchFilesSuccess)
				} else {
					utils.shotToast('warn', localization.notificationFetchFilesWarn)
					console.log(`no result found on blockchain`)
				}
	
			} catch (error) {
				utils.shotToast('error', localization.notificationFetchFilesFailure)
				console.log(`failed to get user's files info on blockchain`, error)
			}
			this.setState({ indicator_animating: false })
		} else {
			this.getFiles()
		}
	}

    render() {
		const {indicator_size, indicator_speed, indicator_color, indicator_animating} = this.state
        return (
            <div>
				<ToastContainer />
                <header className="header header-inverse" data-overlay={1} style={{backgroundImage: 'url(https://ipfs.infura.io/ipfs/QmQ1mRvUd2jfTDuw4gmy2w4rLTakzN2CXNdef4qjeaFw2D)'}}>
                    <div className="container-wide text-center">
                        <div className="row">
                            <div className="col-12 col-lg-8 offset-lg-2">
                                <p className="fs-35">{localization.discoverPageHeaderTitle}</p>
                                <div id="search_company">
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="search_file" aria-describedby placeholder={localization.discoverPageHeaderInput} onKeyPress={this.handleKeyPressDown} />
                                    </div>
                                    <button type="button" className="btn btn-primary submit-btn" style={{margin: '0 auto', textTransform: 'none', display: 'block'}} onClick={this.search}>{localization.discoverPageHeaderButton}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

				<div className="container text-center" style={{ marginTop: "10px" }}>
					<button type="button" className="btn btn-primary" onClick={() => this.chooseTag(0)}><ArrowUp size={12}/> {localization.recentButton}</button>&nbsp;
					<button type="button" className="btn btn-secondary" onClick={() => this.chooseTag(1)}><Image size={12}/> {localization.imageButton}</button>&nbsp;
					<button type="button" className="btn btn-success" onClick={() => this.chooseTag(2)}><FileText size={12}/> {localization.docButton}</button>&nbsp;
					<button type="button" className="btn btn-danger" onClick={() => this.chooseTag(3)}><Youtube size={12}/> {localization.videoButton}</button>&nbsp;
					<button type="button" className="btn btn-warning" onClick={() => this.chooseTag(4)}><Music size={12}/> {localization.musicButton}</button>&nbsp;
					<button type="button" className="btn btn-info" onClick={() => this.chooseTag(5)}><Heart size={12}/> {localization.weLikeButton}</button>
				</div>
			
				<div className="container text-center" style={{ marginTop: "10px" }}>
					<Digital color={indicator_color} size={indicator_size} speed={indicator_speed} animating={indicator_animating} />
				</div>

                <div className="container">
					<div className="row" style={{ marginTop: "10px" }}>
						<table className="table">
							<caption>{this.state.files.length ? 'Found '+this.state.files.length+' result' : 'File list'}</caption>
							<thead>
								<tr>
									<th scope="col"><File size={14}/> {localization.fileNameTh}</th>
									<th scope="col"><Info size={14}/> {localization.fileSizeTh}</th>
									<th scope="col"><Calendar size={14}/> {localization.dateTh}</th>
									<th scope="col"><MoreHorizontal size={14}/> {localization.moreTh}</th>
								</tr>
							</thead>
							<tbody>
								{this.state.files.map((file) => {
									return (
										<tr key={file.key}>
											<td>
												<a className="short-link" target="_blank" href={file.url} data-toggle="tooltip" title={file.fileName}>{file.fileName}</a>
											</td>
											<td>{utils.bytesToSize(file.fileSize)}</td>
											<td>{utils.convertTime(file.date)}</td>
											<td>
												<button className="btn btn-light btn-sm" onClick={() => this.showInfo(file)} data-toggle="modal" data-target="#exampleModal"><Book size={12}/> {localization.infoButton}</button>
												<button className="btn btn-info btn-sm" onClick={() => this.showQRCode(file)} data-toggle="modal" data-target="#QRCodeModal"><Share2 size={12}/> {localization.shareButton}</button>
												<button className="btn btn-success btn-sm" onClick={() => this.payTips(file)}><DollarSign size={12}/> {localization.tipsButton}</button>
												<button className="btn btn-warning btn-sm" onClick={() => this.setReportFile(file)} data-toggle="modal" data-target="#reportModal"><AlertOctagon size={12}/> {localization.reportButton}</button>
											</td>
										</tr>
									)
								})}
							</tbody>
						</table>
					</div>
                </div>

				<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle">{localization.infoModalTitle}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
								<h6><File size={14}/> {localization.infoModalFileName}</h6>
                                <p>{this.state.infoModal.fileName}</p>
								<h6># {localization.infoModalHash}</h6>
                                <p>{this.state.infoModal.hash}</p>
								<h6><User size={14}/> {localization.infoModalUploader}</h6>
								<p>{this.state.infoModal.uploader}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary btn-sm" data-dismiss="modal">{localization.infoModalCloseButton}</button>
                            </div>
                        </div>
                    </div>
                </div>

				<div className="modal fade" id="QRCodeModal" tabIndex="-1" role="dialog" aria-labelledby="QRCodeModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle">{localization.shareModalTitle}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                	<span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
								<div className="text-center">
									<QRCode value={this.state.qrCodeModal.link} size={180} />
								</div>
								<h6><Link size={14}/> {localization.shareModalLink}</h6>
								<input type="text" className="form-control" value={this.state.qrCodeModal.link}></input>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary btn-sm" data-dismiss="modal">{localization.shareModalCloseButton}</button>
                            </div>
                        </div>
                    </div>
                </div>

				<div className="modal fade" id="reportModal" tabIndex="-1" role="dialog" aria-labelledby="reportModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle">{localization.reportModalTitle}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                	<span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
								<label>{localization.reportModalLabel}</label>
								<textarea className="form-control" id="reportFormControlTextarea" rows="4"></textarea>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary btn-sm" data-dismiss="modal">{localization.reportModalCloseButton}</button>
								<button type="button" className="btn btn-primary btn-sm" data-dismiss="modal" onClick={this.reportClick}>{localization.reportModalSubmitButton}</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
