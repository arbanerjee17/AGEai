🎮 AGEai – AI Face Age Detection Web App

🧠 Overview

AGEai is a real-time web-based application that uses Artificial Intelligence to detect human faces through a webcam and estimate their approximate age instantly.

The system uses pre-trained deep learning models running directly in the browser, making it fast, interactive, and easy to deploy without any backend.

🚀 Features
🎥 Real-time webcam access
👤 Detects multiple faces simultaneously
🟩 Draws green bounding boxes around faces
🔢 Displays approximate age beside each face
⚡ Runs entirely in the browser (no server required)
🌐 Works using TensorFlow.js + Face API
🛠️ Technologies Used
      HTML5
      CSS3
      JavaScript
      TensorFlow.js
      face-api.js

📁 Project Structure
AGEai/
│
├── index.html
├── style.css
├── script.js
└── models/
     ├── tiny_face_detector_model-weights_manifest.json
     ├── tiny_face_detector_model-shard1
     ├── age_gender_model-weights_manifest.json
     ├── age_gender_model-shard1
     ├── ssd_mobilenetv1_model-weights_manifest.json
     └── ssd_mobilenetv1_model-shard1
