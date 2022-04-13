# NBA Teams

A front-end, single-page application built with React, ReactBootstrap JavaScript, and CSS that utilizes third-party data from https://www.balldontlie.io/ and allows user to explore NBA teams, players, and games. 

- Teams are displayed in the form of table & rows and are displayed in alphabetical order by city - users can toggle ascending or descending order by clicking the arrow in the city column header.

- Clicking on a row will highlight the selected team and will open a side panel that displas. detailed information of a game played by the team in season 2021.

- Using the search bar will provide a list of player search results in a separate side panel. Clicking on a player will open a modal displaying the selected player's stats.

View the deployed application here: https://www.nealgarcia.com/nba-teams

## Project Screen Shots

## Installation and Setup Instructions
Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Start Server:

`npm start`

To Visit App:

`localhost:3000/ideas`

## Reflection
This project was developed as a take-home assignment for a frontend UI developer position with the goal of the challenge being to build out a UI from a given Figma prototype. 

I developed this project during a span of four-days. The strict rules of the challenge included using React as the framework, optional use of ReactBootstrap package to create the layout, and free-range to create components best suited to my solution.

Though it was optional, I chose to learn and use ReactBootstrap for styling and layout. This was my first time using ReactBootstrap components, and I found it easy to use with its components and existing stylesheets. However, I wasn't able to modify some of the predefined styles of the `Table` component, for example: `border-radius`, and spacing between rows not seeming to work.

Extra credits included implementing search and sort, as well as writing unit test cases with Cypress. I was able to implement search and sort, however, writing unit test cases in Cypress is planned for the next iteration.