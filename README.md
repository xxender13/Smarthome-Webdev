# Smarthome-Webdev

A simple web-based dashboard application with a login system and sample dashboard page, built using HTML, CSS, and JavaScript. This application allows users to:

- Register a new account
- Log in with a username and password
- View and interact with dashboard elements

User data is stored client-side using `localStorage`.

## Overview

This project uses:
- **HTML** for structure
- **CSS** for styling and layout
- **JavaScript** for functionality and interactivity

## Project Structure

### HTML Structure

- **index.html**: Main dashboard page displayed after login.
- **login.html**: Login page with a registration form.
- Key HTML elements include:
  - `<div class="container">`: Flexbox container for overall layout.
  - `<div class="login-container">`: Centers the login form.
  - `.rooms`, `.levels`, `.devices`: Sections for dashboard content.
  - `<input id="username">`: Field for entering a username during login.
  - `.register`: Hidden registration form for new users.

### CSS Styles

- **styles.css**: Main stylesheet containing all style rules.
  - `body`, `html`: Set to 100% height for full-page content.
  - `.container`: Flexbox layout for the main page.
  - `.sidenav`, `.content`: Sidebar and main content panels.
  - **Media Queries**: Responsive design that stacks sidebar and content on smaller screens.

  Reusable styles are provided for:
  - Form inputs
  - Buttons
  - Tiles
  - Toggle switches

  Flexbox is used for layout and alignment, with responsive media queries for mobile compatibility.

### JavaScript

- **script.js**: JavaScript file that powers functionality and interactivity.

  Key features include:
  - **Toggle between login and registration**: Allows switching views for new users and existing ones.
  - **Form validation**: Ensures valid input and displays error messages as needed.
  - **Data storage**: Stores user data in `localStorage` for client-side persistence.
  - **Login validation**: Checks credentials on login.
  - **Dashboard display**: Displays dashboard content after successful login.

  Key JavaScript concepts:
  - **DOM selection**: Uses `document.getElementById` to interact with elements.
  - **Event listeners**: Adds listeners for `click` and `change` events.
  - **localStorage API**: Used to store and retrieve user data on the client side.
  - **Conditionals and validation**: Logic for checking input and validating user actions.
  - **Reusable functions**: Modular functions for efficient code reuse.

This covers the essentials of using JavaScript to add interactivity and create a client-side web application.

## License

© 2024 Harshil Sharma. All rights reserved.

For inquiries, contact: [harshilsharma808@gmail.com](mailto:harshilsharma808@gmail.com)
