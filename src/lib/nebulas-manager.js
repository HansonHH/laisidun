const NebPay = require('nebpay.js')

const DEBUG = false

export default class NebulasManager {
    constructor() {

        this.nebPay = new NebPay()

        if (DEBUG) {
            this.dappAddress = 'n1gge6HLmw3XFddz7G5nkh428KHHn4bdepZ'
            this.blockchainQueryUrl = NebPay.config.testnetUrl
        } else {
            this.dappAddress = 'n228kiqhGS6bUERd2eAf1puzJniUbc3Cy7P'
            this.blockchainQueryUrl = NebPay.config.mainnetUrl
        }

        this.nebPay.queryPayInfo = this.nebPay.queryPayInfo.bind(this)
    }

    async callByWallet(value, fn, args) {
        return new Promise((resolve, reject) => {
            const serialNumber = this.nebPay.call(this.dappAddress, value, fn, args, {
                callback: this.blockchainQueryUrl,
                listener: (response) => {
                    if (JSON.stringify(response).match(/Error.*/)) {
                        reject(JSON.stringify(response))
                    } else {
                        let queryInterval = setInterval(() => {
                            this.nebPay.queryPayInfo(serialNumber)
                                .then((response) => {
                                    console.log("tx result: " + response)
                                    const respObject = JSON.parse(response)
                                    if (respObject.code === 1) {
                                        clearInterval(queryInterval)
                                        queryInterval = undefined
                                        reject(respObject.msg)
                                    }
                                    if (respObject.code === 0) {
                                        console.log('transaction is successful', respObject)
                                        clearInterval(queryInterval)
                                        queryInterval = undefined
                                        resolve(respObject)
                                    }
                                })
                                .catch((err) => {
                                    reject(err)
                                })
                        }, 5000)
                    }
                }
            })
        })
    }

    async callByWalletSimulate(value, fn, args) {
        return new Promise((resolve, reject) => {
            this.nebPay.simulateCall(this.dappAddress, value, fn, args, {
                listener: (response) => {
                    if (response.execute_err === 'insufficient balance' || response.execute_err === '') {
                        resolve(response)
                    } else {
                        reject(JSON.stringify(response))
                    }
                }
            })
        })
    }

	async saveFileInfo(fileInfo) {
        console.log('save file info on blockchain', JSON.stringify(fileInfo))
        const args = "[\"" + fileInfo.hash + "\",\"" + fileInfo.fileName + "\",\"" + fileInfo.fileSize + "\",\"" + fileInfo.gateway + "\",\"" + fileInfo.url + "\",\"" + fileInfo.date + "\",\"" + fileInfo.isPublic + "\",\"" + fileInfo.price + "\"]"
        
        return this.callByWallet(0, 'saveFile', args)
            .then((response) => {
                if (response.msg === 'success') {
                    return Promise.resolve(response)
                } else {
                    return Promise.reject(response)
                }
            })
    }

    async getFiles(offset, limit, byUser = false) {
        console.log(`get stored files on blockchain`)
        const args = "[" + offset + "," + limit + "," + byUser + "]"
        return this.callByWalletSimulate(0, 'getFiles', args)
    }

    async search(input) {
        console.log(`get file stored files on blockchain`)
        const args = "[\"" + input + "\", 0, -1]"
        return this.callByWalletSimulate(0, 'search', args)
    }

    async setVisibility(key, isPublic) {
        console.log(`set file ${key} visibility as ${isPublic}`)
        const args = "[\"" + key + "\",\"" + isPublic + "\"]"

        return this.callByWallet(0, 'setVisibility', args)
            .then((response) => {
                if (response.msg === 'success') {
                    return Promise.resolve(response)
                } else {
                    return Promise.reject(response)
                }
            })
    }

    async saveReport(key, fileKey, reason, date) {
        console.log(`report file ${key} ${fileKey} `)
        const args = "[\"" + key + "\",\"" + fileKey + "\",\"" + reason + "\",\"" + date + "\"]"

        return this.callByWallet(0, 'saveReport', args)
            .then((response) => {
                if (response.msg === 'success') {
                    return Promise.resolve(response)
                } else {
                    return Promise.reject(response)
                }
            })
    }

    async banFile(key) {
        console.log(`ban file ${key}`)
        const args = "[\"" + key + "\"]"
        return this.callByWallet(0, 'banFile', args)
            .then((response) => {
                if (response.msg === 'success') {
                    return Promise.resolve(response)
                } else {
                    return Promise.reject(response)
                }
            })
    }

    async ifNotExists(hash) {
        console.log(`check if file (hash: ${hash}) exists on blockchain`)
        const args = "[\"" + hash + "\"]"
        return this.callByWalletSimulate(0, 'getFile', args)
    }

    async payTips(uploader) {
        console.log('pay tips to uploader', uploader)
        return new Promise((resolve, reject) => {
            const serialNumber = this.nebPay.pay(uploader, 1, {
                callback: this.blockchainQueryUrl,
                listener: (response) => {
                    if (JSON.stringify(response).match(/Error.*/)) {
                        reject(JSON.stringify(response))
                    } else {
                        let queryInterval = setInterval(() => {
                            this.nebPay.queryPayInfo(serialNumber)
                                .then((response) => {
                                    console.log("tx result: " + response)
                                    const respObject = JSON.parse(response)
                                    if (respObject.code === 1) {
                                        clearInterval(queryInterval)
                                        queryInterval = undefined
                                        reject(respObject.msg)
                                    }
                                    if (respObject.code === 0) {
                                        console.log('transaction is successful', respObject)
                                        clearInterval(queryInterval)
                                        queryInterval = undefined
                                        resolve(respObject)
                                    }
                                })
                                .catch((err) => {
                                    reject(err)
                                })
                        }, 5000)
                    }
                }
            })
        })
    }
}
