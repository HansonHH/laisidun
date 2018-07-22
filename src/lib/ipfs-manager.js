import * as http from 'axios'
const ipfsAPI = require('ipfs-api')

export default class IPFSManager {
    constructor() {
        this.ipfs = ipfsAPI({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })
    }

    updateConfig(host, port, protocol) {
        this.ipfs = ipfsAPI({ host, port, protocol })
    }

    nodeHealthCheck(protocol, host, port) {
       	return http.get(`${protocol}://${host}:${port}/api/v0/add?stream-channels=true`)
    }

    display (hash) {
        this.ipfs.cat(hash, (err, data) => {
            if (err) {
                console.error('ipfs display error', err) 
            }
        })
    }

    async saveToIpfs (reader) {
        const buffer = Buffer.from(reader.result)
        return this.ipfs.add(buffer)
    }

    getFromIpfs (ipfsHash) {
        this.ipfs.get(ipfsHash, (err, data) => {
            if (err) { 
                console.error('ipfs get error', err) 
            }
        })
    }
}
