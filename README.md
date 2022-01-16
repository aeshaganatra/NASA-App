## NASA-app

to run project it's require to generate AUTH key from NASA site\
website: https://api.nasa.gov/

### Prerequisite to run in local
* node 1.14
* NASA auth key

```
# to build
:$ cd nasa-app
:$ npm install

# create .env file in root and save AUTH key
> REACT_APP_NASA_API_KEY=auth-key

# to start server
:$ npm start

# open browser -> localhost:3000
```

### Prerequisite to run in docker

* docker & docker compose
```
# export your auth key in terminal
:$ export REACT_APP_NASA_API_KEY=auth-key

# run docker compose to create build
:$ docker-compose up --build
```