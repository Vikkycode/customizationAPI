
# Customization API Documentation

## Overview

The Customization API provides a simple yet powerful interface for developers to integrate customizable visual expressions into their frontend applications. With this API, users can tailor the appearance of the application according to their preferences, enhancing the overall user experience.

## Features

- **Background Color:** Set the background color of the application.
- **Font Family:** Choose the font family for text elements.
- **Font Size:** Adjust the font size of text elements.

## Getting Started

To integrate the Customization API into your frontend application, follow these steps:

1. **Include the Script:** Add the provided JavaScript file (`customizationAPI.js`) to your project.

2. **Initialize the API:** Optionally, initialize the Customization API to apply default settings.

```html
<script src="customizationAPI.js"></script>
<script>
  CustomizationAPI.init(); // Optionally initialize with default settings
</script>
```

3. **Add User Interface Elements:** Create HTML elements to serve as controls for user interaction. For example:

```html
<label for="colorPicker">Choose background color:</label>
<input type="color" id="colorPicker">

<label for="fontFamily">Choose font family:</label>
<select id="fontFamily">
  <option value="Arial, sans-serif">Arial</option>
  <option value="Times New Roman, serif">Times New Roman</option>
  <option value="Courier New, monospace">Courier New</option>
</select>

<label for="fontSize">Choose font size:</label>
<input type="number" id="fontSize" min="12" max="24" value="16">
```

4. **Event Handling**: Add event listeners to the HTML elements to detect user interaction. Call the corresponding methods of the `CustomizationAPI` object to apply the desired customization.

```html
<script>
  document.getElementById('colorPicker').addEventListener('input', (event) => {
    CustomizationAPI.setBackgroundColor(event.target.value);
  });

  document.getElementById('fontFamily').addEventListener('change', (event) => {
    CustomizationAPI.setFontFamily(event.target.value);
  });

  document.getElementById('fontSize').addEventListener('input', (event) => {
    CustomizationAPI.setFontSize(event.target.value);
  });
</script>
```

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Customization Example</title>
  <script src="customizationAPI.js"></script>
</head>
<body>
  <h1>Customization Example</h1>
  
  <label for="colorPicker">Choose background color:</label>
  <input type="color" id="colorPicker">

  <label for="fontFamily">Choose font family:</label>
  <select id="fontFamily">
    <option value="Arial, sans-serif">Arial</option>
    <option value="Times New Roman, serif">Times New Roman</option>
    <option value="Courier New, monospace">Courier New</option>
  </select>

  <label for="fontSize">Choose font size:</label>
  <input type="number" id="fontSize" min="12" max="24" value="16">

  <script>
    CustomizationAPI.init();

    document.getElementById('colorPicker').addEventListener('input', (event) => {
      CustomizationAPI.setBackgroundColor(event.target.value);
    });

    document.getElementById('fontFamily').addEventListener('change', (event) => {
      CustomizationAPI.setFontFamily(event.target.value);
    });

    document.getElementById('fontSize').addEventListener('input', (event) => {
      CustomizationAPI.setFontSize(event.target.value);
    });
  </script>
</body>
</html>
```
