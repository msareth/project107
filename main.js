//https://teachablemachine.withgoogle.com/models/VQxXE9kul/

function startClassification() {
  navigator.mediaDevices.getUserMedia({ audio: true })
  classifier = ml5.soundClassifier(
    'https://teachablemachine.withgoogle.com/models/VQxXE9kul/model.jsom',
    modelReady,
  )
}

function modelReady() {
  classifier.classify(gotResults)
}
