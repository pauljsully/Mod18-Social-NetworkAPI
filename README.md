# Mod18-Social-NetworkAPI


## Table of Contents
- [Introduction](#introduction)
- [Acceptance Criteria](#acceptance-criteria)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

As A social media startup, I want an API for my social network that uses a NoSQL database in order to handle large amounts of unstructured data.

### Acceptance Criteria

    GIVEN a social network API
    WHEN I enter the command to invoke the application
    THEN my server is started and the Mongoose models are synced to the MongoDB database
    WHEN I open API GET routes in Insomnia for users and thoughts
    THEN the data for each of these routes is displayed in a formatted JSON
    WHEN I test API POST, PUT, and DELETE routes in Insomnia
    THEN I am able to successfully create, update, and delete users and thoughts in my database
    WHEN I test API POST and DELETE routes in Insomnia
    THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Getting Started

### Prerequisites

Node.js: Ensure Node.js is installed on your system. Download Node.js
Mongoose: `npm i mongoose`

### Installation


1. Install dependencies:
```
npm install
```
2. Configure your database settings in config/connection.js.

3. Run the application:
```
npm start

```
4. Open insomnia

GET "http://localhost:3001/api/users/"


## Usage

GITHUB link: (https://github.com/pauljsully/Mod18-Social-NetworkAPI.git)

## License

[MIT License](https://opensource.org/licenses/MIT).
