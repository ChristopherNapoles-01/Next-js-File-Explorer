import { toast } from "react-hot-toast"

let style = {
    background : '#1d232a',
    border : '',
    color : 'white'
}

const toastSuccess = (message : string) => {
    style.border = '2px solid #16a34a',
    toast.success(message, {style});
}

const toastError = (message : string) => {
    style.border = '2px solid #ff4b4b'
    toast.error(message, {style, duration : 2000})
}

// const toastInfo = (message : string) => {
//     toast.loading
// }

export {
    toastSuccess,
    toastError
}