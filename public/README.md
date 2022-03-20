Reacting to APIs
We're gonna be building a web application that is going to display all animated movies made by Studio Ghibli. Think of this as a mini-version of IMDB (https://www.imdb.com/)! It's just dedicated to all things Studio Ghibli rather than all movies ever. In this lab assignment, your primary objective is to request data from a third-party API, handle the response, and then display the data in the browser with React. We're gonna be using this free REST API that catalogues every resource you could ever need to know about the Studio Ghibli films. Take a minute to scroll through the documentation of the website to familiarize yourself with the data and see if you can determine what endpoints are exposed in the API.

Instructions
Head to the REST API https://ghibliapi.herokuapp.com/ and in particular, pay attention to the two endpoints we're going to be using: /films and /people in this lab. When exploring the endpoints, examine the properties each film or person has. This way when we eventually fetch this data in React, set it to state, and map through it, you'll have a good idea of the properties you'll be displaying.

Explore the films endpoint: https://ghibliapi.herokuapp.com/films
Explore the people endpoint: https://ghibliapi.herokuapp.com/people
Before we begin fetching data, let's set up our app with a conditional render. You'll want a home page that shows one button at first that says Load Films. Have this button change the conditional render when clicked. The eventual goal will be to render a list of Film data when the Film button is clicked.

From here, task is to retrieve all films from the Ghibli REST API, and then parse the response to display a "card" for each film. You will need to use the fetch() method in order to do this, and you should invoke fetch when the component is mounted to the application via a useEffect and set to state with a useState hook.

Remember the films data should only display when the Load Films button is clicked!
Consider styling your card at this point so that it is easier to read. Bootstrap v4/v5 should make this pretty easy for you. At a minimum, you should display the film title and description, but you may use as many properties as you want.

The next task is to add another button next to Load Films that says Load People. This button, when clicked, should trigger a different conditional render. We'll be using this new conditional render to retreive and display people data from the Ghibli REST API.

Finally repeat the same process froim step 3 that you did for films with this people endpoint. At a minimum, you should display the person's name, age, gender, and a link to that particular person's JSON response that will open in a new tab, but you may use as many properties as you want.

 

Closing Remarks
And that's all for this lab! The great thing about APIs, though, is that they give you creative freedom to use the data as much as you see fit, so if you have another idea of how to manipulate this data and display it for your "users", then go right ahead! We're looking forward to seeing what you create.