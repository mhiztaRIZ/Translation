document.getElementById("translateBtn").addEventListener("click", function() {
  const sourceText = document.getElementById("sourceText").value;
  const targetLanguage = document.getElementById("targetLanguage").value;

  translateText(sourceText, targetLanguage)
    .then(function(translationResult) {
      document.getElementById("translationResult").innerText = translationResult;
    })
    .catch(function(error) {
      console.error("Translation error:", error);
    });
});

function translateText(text, targetLanguage) {
  // Replace 'YOUR_API_KEY' with your actual API key
  const apiKey = 'YOUR_API_KEY';
  const endpoint = `https://translation-api.example.com/translate?apiKey=${apiKey}`;

  const requestData = {
    text: text,
    targetLanguage: targetLanguage
  };

  return fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(requestData)
  })
    .then(function(response) {
      if (!response.ok) {
        throw new Error("Translation request failed.");
      }
      return response.json();
    })
    .then(function(data) {
      return data.translation;
    });
}
