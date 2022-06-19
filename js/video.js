export const video = document.getElementById('video')

//webcam
export const startVideo = () => {
    navigator.getUserMedia({
        video: { }
    },
        stream => video.srcObject = stream,
            err => console.error(err)
    )
}


startVideo()
