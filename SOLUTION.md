Your Solution Documentation
===========================

I have choosen to use the existing boilerplate code for the solution, with node 10 and react 16.7 in the UI and node 10 and typescript on the backend. I choose to work on with these as from our conversation I infered pre-react hooks version of react is used for the UI in the team and I wanted to demostrate my knowledge in those versions.

For the design I choose to use Material UI in the frontend.

To start, use docker compose, the code doesnt work as of now out of docker.

## What more could be done:
1. UI design is very preliminary right now, it has to be improved. Also, the color palette of the sample given isn't implemented. That has to be done as well.
2. On the backend, the code folder structure is very simple currently, I would like to split of database code into service and model code to handle the data more like a object.
3. The UI list can have pagination and have search and filter features which makes it much easier to read through things.
4. Depending on expected load on the app, caching or read-only slaves for db can be implemented.
5. Unit tests and integration tests for the UI and server components have to be added.
6. For icons, use better svg's the version of material-ui I used which is compatible with react 16.7, doesnt have good documentation and I dint pick the right svg's. Would improve on this.
7. Additional features like adding comments, updating job details, rating users, marking job completed can be implemented as well.
8. Better error handling and recovery on mysql connection.
9. Make the db persistent. It isnt rightnow (which helped with my testing)
10. Add the url's and db connection and other params as environmental variables.


