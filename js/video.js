const video = document.getElementById('video')

//webcam
const startVideo = () => {
    navigator.getUserMedia({
        video: { }
    },
        stream => video.srcObject = stream,
            err => console.error(err)
    )
}

startVideo()
