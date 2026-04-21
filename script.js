const video = document.getElementById("video");

// Start camera
navigator.mediaDevices.getUserMedia({ video: true })
.then(stream => {
    video.srcObject = stream;
})
.catch(err => {
    console.error("Camera error:", err);
});

// Wait for video to load
video.addEventListener('loadedmetadata', async () => {

    await faceapi.nets.tinyFaceDetector.loadFromUri('./models');
    await faceapi.nets.ageGenderNet.loadFromUri('./models');

    document.getElementById("result").innerText = "AI Loaded!";

    startDetection();
});

function startDetection() {

    const canvas = faceapi.createCanvasFromMedia(video);
    document.querySelector(".video-container").append(canvas);

    const displaySize = {
        width: video.videoWidth,
        height: video.videoHeight
    };

    faceapi.matchDimensions(canvas, displaySize);

    setInterval(async () => {

        const detections = await faceapi
            .detectAllFaces(
                video,
                new faceapi.TinyFaceDetectorOptions({
                    inputSize: 512,      // 🔥 higher = detects smaller/far faces
                    scoreThreshold: 0.3  // 🔥 lower = more sensitive
                })
            )
            .withAgeAndGender();

        const resized = faceapi.resizeResults(detections, displaySize);

        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        resized.forEach(det => {

            const { age } = det;
            const box = det.detection.box;

            // Green box
            ctx.strokeStyle = "lime";
            ctx.lineWidth = 2;
            ctx.strokeRect(box.x, box.y, box.width, box.height);

            // Age text beside face
            ctx.fillStyle = "lime";
            ctx.font = "14px Arial";
            ctx.fillText(`Age: ${Math.round(age)}`, box.x + box.width + 5, box.y + 15);

        });

    }, 120); // slight delay for performance balance
} 
