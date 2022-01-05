🔎 This is an app where you can create a board and track your progress on the project by adding tasks and dragging them to the fixed "Backlog", "To Do", "In Progress" and "Done" columns.

The boards you view or create are saved in localstorage and reflected in the "your history pages" section on the homepage so that they are not forgotten.

#### :rocket: The project is on heroku: [Live App](https://kanban-board-application.herokuapp.com/)

Technologies and Tools I use:

:ballot_box_with_check: Back-end: Node.js => express

:ballot_box_with_check: Front-end: Vue.js

:ballot_box_with_check: Database: MongoDB

## Development setup

Clone the repository

```
cd desktop
git clone https://github.com/mavisalli/Kanban_Board-Vue-Express.git
```

Then open the project in ide and follow below commands:

Create environment file (.env) for your config information of your MongoDB and change its content like below.

```
PORT= 3000
MONGO_DB_URI=<YOUR-MONGO-DB-URI>
```

Install dependencies and run app server with development mode

```sh
npm install
npm run app
```

Install dependencies & serve frontend for development build

```sh
cd client
npm install
npm run serve
```

To run server and client with one command, first install the concurrently package globally

```sh
npm i -g concurrently
npm run dev
```

Navigate to http://localhost:8080, if you're seeing information page, everything is OK!

### Postman Collection

https://www.postman.com/mavibaris/workspace/public/collection/16085875-281bd3c3-960a-4f59-a981-6ce6d66124f2
