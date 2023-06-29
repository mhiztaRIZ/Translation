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
  const apiKey = '01842b06-41ec-4f56-a0e9-f9d1344606c3';
  const endpoint = `https://igboapi.com/api/v1/`;

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
