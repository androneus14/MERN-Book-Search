# MERN-Book-Search

## Description

In our task this week, we are given starter code that is already fully functioning. What we needed to do was refactor the code to be a GraphQL API built with the Apollo Server instead of the functioning Google Books API.

## Table of Contents

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)

## User Story

    AS AN avid reader
    I WANT to search for new books to read
    SO THAT I can keep a list of books to purchase

## Acceptance Criteria

    GIVEN a book search engine
    WHEN I load the search engine
    THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
    WHEN I click on the Search for Books menu option
    THEN I am presented with an input field to search for books and a submit button
    WHEN I am not logged in and enter a search term in the input field and click the submit button
    THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
    WHEN I click on the Login/Signup menu option
    THEN a modal appears on the screen with a toggle between the option to log in or sign up
    WHEN the toggle is set to Signup
    THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
    WHEN the toggle is set to Login
    THEN I am presented with two inputs for an email address and a password and login button
    WHEN I enter a valid email address and create a password and click on the signup button
    THEN my user account is created and I am logged in to the site
    WHEN I enter my account’s email address and password and click on the login button
    THEN I the modal closes and I am logged in to the site
    WHEN I am logged in to the site
    THEN the menu options change to Search for Books, an option to see my saved books, and Logout
    WHEN I am logged in and enter a search term in the input field and click the submit button
    THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
    WHEN I click on the Save button on a book
    THEN that book’s information is saved to my account
    WHEN I click on the option to see my saved books
    THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
    WHEN I click on the Remove button on a book
    THEN that book is deleted from my saved books list
    WHEN I click on the Logout button
    THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button

## Installation

1. Clone the repository.
2. Run npm install through the terminal to install any missing dependencies.
3. Run npm start through terminal to access the GraphQL Sandbox.
4. Run npm run build to create the website.
5. Run npm run develop to launch the build and be redirected to localhost:3000.

## Issues

I'm not sure where I went wrong, but heroku deployed application isn't able to login/signup a new user, however the localhost functions work fine. I've tried doing heroku run npm install, start, develop, etc but nothing seems to get it working properly. The application works fine on the localhost but not heroku. I had the application working fine when I submitted it on Saturday but when I came back to it two days later, I came across these issues and I can't figure out how to resolve it.

## Links

Email: andynguyen_3@hotmail.com <br />
Github: https://github.com/androneus14 <br />
Deployed Application: https://anmern-book-search-engine.herokuapp.com/ <br />
