Webcam.set({
    width: 310,
    height: 300,
    image_format:'png',
    png_quality: 90,
    constrains : {
        facingMode: "enviornment"}
});

Webcam.attach("camera");

function take_snapshot(){
    Webcam.snap(function(Datauri){
       document.getElementById("results").innerHTML = '<img id="snapshot" src="'+Datauri+'"/>';
    });
}

classifier = ml5.imageClassifier('MobileNet', ModelLoaded)

function ModelLoaded(){
    console.log("ModelLoaded");
}

function check(){
    img = document.getElementById("snapshot");
    classifier.classify(img,gotResult);
}

function gotResult(error, result){
    if (error){
        console.error(error)
    }
    else{
        console.log(result)
        document.getElementById("prediction").innerHTML = result[0].label;
    }
}