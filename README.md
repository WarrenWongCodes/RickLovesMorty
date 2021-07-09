<h1 align="center" style="font-size: 2.7rem;">Rick Loves Morty
</h1>

<h2 align="center" style="font-size: 1.5rem;">A MERN stack passion project utilizing the Rick and Morty API to give die hard fans a place to stay in the know.<br><br>
  <img src="./client/assets/site-overview.gif" width="800" alt="site overview gif">
  <br></h2>

## Table of Contents

- [Overview](#Overview)
- [Installation](#Installation)
- [Technologies Used](#Technologies-Used)
- [Routes](#Routes)
- [Features](#Features)
- [Contributors](#Contributors)

## Overview

- 100% accessibility via Google Chrome Lighthouse
- RESTful endpoints built using Rick and Morty API
- Character cards implemented using Material-UI and SASS
- Search for your favorite characters, by status, gender, species, name or type
- Favorite characters persisted with MongoDB
- Utilize React Router DOM to implement navigation bar, minimizing rendering
- Implement pagination using Material-UI component and optimized corresponding endpoints with Redis cache

## Installation

```
npm install

npm start

npm build
```

![readme dependency logos](client/assets/readme-logo.png 'readme dependency logos')

## Technologies Used

- [React](https://reactjs.org/)
- [SASS](https://sass-lang.com/)
- [Material-UI](https://material-ui.com/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Redis](https://redis.io/)
- [Rick&MortyAPI](https://rickandmortyapi.com/)

## Routes

| Request Type | Endpoint    | Returns                                                                                                                                                   | Status |
| ------------ | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| GET          | /characters | An object containing an info property with count, pages, next, and previous page info and a results property, an array containing all characters details. | 200    |
| GET          | /favorites  | An array of objects containing user's favorite characters' details.                                                                                       | 200    |
| GET          | /filter     | Requires a category and query as query parameters to filter for specific character data, an object with a info and results property.                      | 200    |
| GET          | /episodes   | An object containing an info property with count, pages, next, and previous page info and a results property, an array containing all episodes details.   | 200    |
| POST         | /character  | An object containing character details. Id, name, status, species, type, gender, origin, location, image, episode, url.                                   | 201    |
| DELETE       | /character  | An object containing a name property matching the character to be deleted.                                                                                | 200    |

## Features

### Navigation Bar

![Navigation Bar](client/assets/navigation.png 'Search bar feature')

### Search

![Search Bar](client/assets/search.png 'Search bar feature')

### Pagination

![Pagination](client/assets/pagination.png 'pagination feature')

### Favorites

![favorite characters](client/assets/favorites.png 'favorite characters feature')

## Contributors

<table>
  <tr>
    <td align="center"><a href="https://github.com/WarrenWongCodes"><img src="https://avatars.githubusercontent.com/u/8570718?v=3?s=100" width="100px;" alt=""/><br /><sub><b>Warren Wong</b></sub></a><br /></td>
  </tr>
</table>
