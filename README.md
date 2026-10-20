# 🚀 Scroll & Fetch

A JavaScript project that loads posts dynamically as the user scrolls down the page. It demonstrates API fetching, throttling, pagination, DOM manipulation, and loading states.

## ✨ Features

- **Infinite Scrolling:** Loads more posts when the user reaches the bottom of the page.
- **Fetch API:** Retrieves posts from JSONPlaceholder.
- **Pagination:** Loads 5 posts per request using `_start` and `_limit`.
- **Throttling:** Limits how frequently the scroll callback executes.
- **Duplicate Request Prevention:** Uses `isFetching` to prevent overlapping API requests.
- **Loading Indicator:** Displays a loading message while data is being fetched.
- **Error Handling:** Handles failed API requests using `.catch()`.
- **End-of-Data Message:** Displays a message after all 100 posts have been loaded.
- **Dynamic DOM Manipulation:** Creates post cards using JavaScript.

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- Fetch API
- JSONPlaceholder API

## ⚙️ How It Works

1. The project detects when the user reaches the bottom of the page.
2. A throttled function controls how frequently the loading function executes.
3. The Fetch API requests 5 posts at a time.
4. JavaScript creates and displays cards dynamically.
5. A loading indicator appears while the request is in progress.
6. The pagination value increases after successful processing.
7. After all 100 posts are loaded, an end-of-data message is displayed.

## ▶️ How to Run

1. Clone or download this repository.
2. Open the HTML file in your browser.
3. Scroll down to load more posts.

An internet connection is required to fetch data from the API.

## 📚 What I Learned

- Working with Fetch API and Promises
- Handling asynchronous JavaScript
- Understanding throttling
- Implementing pagination
- Detecting scroll position
- Manipulating the DOM dynamically
- Managing loading states and API errors

## 🎯 Project Goal

The goal of this project was to understand how dynamic content loading works and practise core JavaScript concepts through a practical project.

---

Built with 💙 while learning JavaScript.
