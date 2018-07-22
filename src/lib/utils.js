import { toast } from 'react-toastify'

export function bytesToSize(bytes) {
    let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    if (bytes === 0) return '0 Byte'
    let i = parseInt( Math.floor(Math.log(bytes) / Math.log(1024)), 10 )
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i]
}

export function shotToast(type, msg, duration = 3000, position = 'top-center') {
    toast[type](msg, {
        position: position,
        autoClose: duration,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        draggablePercent: 60
    })
}

export function convertTime(miliseconds) {
    const d = new Date(miliseconds)
    return `${d.toLocaleString()}`
}