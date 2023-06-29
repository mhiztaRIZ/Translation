<?php
if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["text"])) {
    // API endpoint URL
    $url = "https://igboapi.com/api/v1/";

    // API key (replace with your own key)
    $apiKey = "01842b06-41ec-4f56-a0e9-f9d1344606c3";

    // Text to translate
    $text = $_POST["text"];

    // Target language
    $targetLanguage = "ig"; // Translate to IGBO

    // Create an array with the request parameters
    $params = [
        "key" => $apiKey,
        "text" => $text,
        "target" => $targetLanguage
    ];

    // Build the URL with the query parameters
    $requestUrl = $url . "?" . http_build_query($params);

    // Make the GET request to the API
    $response = file_get_contents($requestUrl);

    // Check for errors
    if ($response === false) {
        $error = error_get_last();
        echo json_encode(["error" => $error["message"]]);
    } else {
        // Decode the JSON response
        $responseData = json_decode($response, true);

        // Extract the translated text from the response
        $translation = $responseData["translation"];

        // Send the translation as JSON response
        echo json_encode(["translation" => $translation]);
    }
}
?>