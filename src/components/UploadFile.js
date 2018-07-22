import React, { Component } from 'react'
import { File, Info, Hash, MoreHorizontal, Calendar, Book, Shield, Share2, Link } from 'react-feather'
import * as utils from '../lib/utils'
import { localization } from '../lib/localization'
import { Digital } from 'react-activity'
import 'react-activity/dist/react-activity.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import Dropzone from 'react-dropzone'
import { toast } from 'react-toastify'
const QRCode = require('qrcode.react')

export default class UploadFile extends Component {
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
				titile: '',
				fileName: '',
				hash: ''
			},
			qrCodeModal: {
				link: '',
			},
			dropzoneActive: false
		}

		this.captureFile = this.captureFile.bind(this)
		this.getFiles = this.getFiles.bind(this)
		this.saveFileInfo = this.saveFileInfo.bind(this)
	}

	componentDidMount() {
		setTimeout(() => {
			if (typeof(webExtensionWallet) === 'undefined') {
				utils.shotToast('warn', localization.notificationInstallWalletWarn, 30000)
			}
		}, 3000)
		this.getFiles()
	}

	async getFiles() {
		this.setState({ indicator_animating: true })
		try {
			this.state.files = []
			const response = await this.nebulasClient.getFiles(0, -1, true)
			const result = JSON.parse(response.result)

			if (result.length) {
				console.log(`successfully got user's files info from blockchain`, response)
				result.forEach((file, index) => {
					const f = {
						key: index,
						fileName: file.fileName,
						fileSize: parseInt(file.fileSize, 10),
						hash: file.key,
						gateway: file.gateway,
						url: file.url,
						date: parseInt(file.date, 10),
						isPublic: file.isPublic
					}
					this.state.files.push(f)
				})
				utils.shotToast('info', localization.notificationFetchFilesSuccess)
				this.setState({ files: this.state.files })
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

	async setVisibility(fileHash, isPublic) {
		this.setState({ indicator_animating: true })
		try {
			const response = await this.nebulasClient.setVisibility(fileHash, isPublic)
			console.log(`successfully started setting file visibility file info on blockchain: ${JSON.stringify(response)}`)
			utils.shotToast('info', localization.notificationSetVisibilitySuccess, 3000)
		} catch (error) {
			console.log('failed to set file visibility on blockchain', error)
			utils.shotToast('error', localization.notificationSetVisibilityFailure, 3000)
		}
		this.setState({ indicator_animating: false })
	}

	async showInfo(file) {
		this.setState({
			infoModal: {
				title: 'Info',
				fileName: file.fileName,
				hash: file.hash
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

	async saveFileInfo(fileInfo) {
		try {
			const response = await this.nebulasClient.saveFileInfo(fileInfo)
			console.log(`successfully started storing file info on blockchain: ${JSON.stringify(response)}`)
			utils.shotToast('info', localization.notificationUploadFileSuccess)
			this.getFiles()
		} catch (error) {
			utils.shotToast('error', localization.notificationUploadFileFailure)
			console.log('failed to save file info on blockchain', error)
		}
		this.setState({ indicator_animating: false })
	}

	uploadFile(file) {
		this.setState({ indicator_animating: true })
		if (file && file.size > 100000000) {
			console.log('File is too large to upload')
			utils.shotToast('error', localization.notificationUploadFileTooLargeFailure, 10000)
			this.setState({ indicator_animating: false })
		} else {
			const uploadToastId = toast.info(file.name + ' ' + localization.notificationUploadFileInProgress , {
				position: 'bottom-right',
				autoClose: false,
				closeButton: false
			})
			
			let reader = new window.FileReader()
			reader.readAsArrayBuffer(file)
			reader.onloadend = async () => {
				console.log('finished uploading')
				try {
					const ipfsResponse = await this.ipfsClient.saveToIpfs(reader)
					toast.update(uploadToastId, {
						type: toast.TYPE.SUCCESS,
						render: file.name + ' ' + localization.notificationUploadFileDone,
						closeButton: true
					})

					const hash = ipfsResponse[0].hash + Math.floor(100000 + Math.random() * 900000)
					await this.nebulasClient.ifNotExists(hash)
						.then((response) => {
							console.log('file does not exist on blockchain', response)
							this.saveFileInfo({
								key: this.state.files.length + 1,
								fileName: file.name,
								fileSize: file.size,
								hash: hash,
								gateway: this.props.ipfsConfig.host,
								url: `${this.props.ipfsConfig.protocol}://${this.props.ipfsConfig.host}/ipfs/${ipfsResponse[0].hash}`,
								date: Date.now(),
								isPublic: true,
								price: 0
							})
						}).catch((error) => {
							utils.shotToast('warn', localization.notificationUploadFileExistWarn)
							console.log('file alread exists on blockchain or got error', error)
							this.setState({ indicator_animating: false })
						})
				} catch (error) {
					utils.shotToast('error', localization.notificationUploadFileFailure)
					console.log('error: ', error)
					this.setState({ indicator_animating: false })
				}
			}
		}
	}

	captureFile(e) {
		e.preventDefault()
		const file = e.target.files[0]
		this.uploadFile(file)
		e.target.value = ''
	}

	onDragEnter() {
		this.setState({
			dropzoneActive: true
		})
	}
	
	onDragLeave() {
		this.setState({
			dropzoneActive: false
		})
	}
	
	onDrop(files) {
		if (files.length > 1) {
			utils.shotToast('warn', localization.notificationUploadFileOneAtATimeWarn)
		} else {
			const file = files[0]
			console.log('file size: ', file.size)
			this.uploadFile(file)
		}
		this.setState({
			dropzoneActive: false
		})
	}

	render() {
		const {indicator_size, indicator_speed, indicator_color, indicator_animating, dropzoneActive} = this.state
		const overlayStyle = {
			position: 'absolute',
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			padding: '2.5em 0',
			background: 'rgba(0,0,0,0.5)',
			textAlign: 'center',
			color: '#fff',
			zIndex: 99999
		}
		return (
			<Dropzone
				disableClick
				style={{ position: "relative"}}
				onDrop={this.onDrop.bind(this)}
				onDragEnter={this.onDragEnter.bind(this)}
				onDragLeave={this.onDragLeave.bind(this)}
			>
	  		{ dropzoneActive && <div style={overlayStyle}>Drop a file...</div> }
				<div>
					<ToastContainer />
					<header className="header header-inverse" data-overlay={1} style={{backgroundImage: 'url(https://ipfs.infura.io/ipfs/QmQd8hMv7UFqgxWZxhD2BGgFeHgdERLA5ywvupLPj9pYDo)'}}>
						<div className="container-wide text-center">
							<div className="row">
								<div className="col-12 col-lg-8 offset-lg-2">
									<p className="fs-35">{localization.uploadPageHeaderTitle}</p>
									<br></br>
									<label className="btn btn-success submit-btn" >
									{localization.uploadPageHeaderButton} <input type="file" hidden onChange={this.captureFile}></input>
									</label>
									<p className="fs-20 opacity-100">{localization.uploadPageHeaderSubTitle}</p>
								</div>
							</div>
						</div>
					</header>

					<div className="container text-center" style={{ marginTop: "10px" }}>
						<Digital color={indicator_color} size={indicator_size} speed={indicator_speed} animating={indicator_animating} />
					</div>

					<div className="container text-center" style={{ marginTop: "10px" }}>
						<div className="row">
							<div className="col-12 col-lg-8 offset-lg-2">
								<button className="btn btn-primary" type="button" onClick={this.getFiles}>{localization.uploadPageShowMyFilesButton}</button>
							</div>
						</div>
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
													{ 
														file.isPublic ? 
															<button className="btn btn-danger btn-sm" type="button" onClick={() => this.setVisibility(file.hash, false)}><Shield size={12}/> {localization.makePrivateButton}</button>
														:
															<button className="btn btn-success btn-sm" type="button" onClick={() => this.setVisibility(file.hash, true)}><Share2 size={12}/> {localization.makePublicButton}</button>
													}
													<button className="btn btn-info btn-sm" onClick={() => this.showQRCode(file)} data-toggle="modal" data-target="#QRCodeModal"><Share2 size={12}/> {localization.shareButton}</button> 
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

				</div>
			</Dropzone>
		)
	}
}
