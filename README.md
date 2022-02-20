# purple-cow

### How to run
The project has been designed to run in a docker container. With docker installed and running, execute the following command:

```
source runcow <PORT>
```

An optional port number may be specified. By defualt, port 3000 is used.

Once the docker image is created and the container is running, go to `http://localhost:<PORT>` to run the app.

Be sure to use either port 3000 or the port you specified on install.

### Implementation details
The project was created using angular. This allowed for the use of components to create a separatioon of concerns in the application.

There are 3 components present:
- The main app component handles business logic and storage of counter.
- The counter component is used to control display of the count variable
- The counter-update compnent displays a button that can be used to hit the count API. It emits an event when the button is clicked.

The application is built and runs behind an nginx server.

### Future changes
- Use loaders on the page when the initial count is queried and when it is updated in case the endpoint hits take a long time.
- Improve error reporting beyond the simple alert that is used now
- Allow for custom text on the update button
- Allow for custom text in the counter component
