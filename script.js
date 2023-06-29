document.addEventListener("DOMContentLoaded", function() {
    var translateButton = document.getElementById("translateButton");
    translateButton.addEventListener("click", translateText);
});

function translateText() {
    var sourceText = document.getElementById("sourceText").value;

    if (sourceText !== "") {
        var xhr = new XMLHttpRequest();
        var url = "translate.php";
        var params = "text=" + encodeURIComponent(sourceText);

        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                displayTranslation(response.translation);
            }
        };

        xhr.send(params);
    }
}

function displayTranslation(translation) {
    var translationResult = document.getElementById("translationResult");
    translationResult.innerText = "Translation: " + translation;
}