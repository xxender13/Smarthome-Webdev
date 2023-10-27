# Smarthome-Webdev
Html CSS Js

Overview
This is a simple dashboard web app with a login system and sample dashboard page. It allows users to:

Register a new account
Log in with username and password
View and interact with dashboard elements
The app uses HTML, CSS, and JavaScript on the front-end. User data is stored client-side using localStorage.

HTML Structure
index.html - Main dashboard page displayed after login
login.html - Login page with registration form
<div> elements used to structure page content
<input> elements for form fields
Reusable components like sidenav
Some key elements:

<div class="container"> - Flexbox container for overall layout
<div class="login-container"> - Centers login form
.rooms, .levels, .devices - Dashboard content sections
<input id="username"> - Login username field
.register - Hidden registration form
CSS Styles
styles.css - Contains all stylesheet rules

Some key styles:

body, html - 100% height for full page content
.container - Flexbox row layout
.sidenav, .content - Sidebar and main content panels
Media queries - Stack sidenav and content on small screens
Colors, fonts, spacing - Branding and visual polish
Reusable styles for:

Form inputs
Buttons
Tiles
Toggle switches
Flexbox for layout and alignment. responsive media queries.

JavaScript
script.js

Uses JavaScript to:

Toggle between login and registration
Validate form input
Show error messages
Store user data in localStorage
Check credentials on login
Display dashboard content
Key concepts:

DOM selection - document.getElementById
Event listeners - click, change
localStorage API for client-side data
Conditionals for logic and validation
Functions for reusability
This covers the basics of using JavaScript to add interactivity and build client-side apps.

