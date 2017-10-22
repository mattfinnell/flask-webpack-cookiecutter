# flask-webpack cookiecutter
Builds the skeleton of a tiny flask app with webpack. I have had to create this structure by hand so many times when debugging and testing features, I finally decided to make a tool that builds it all for me so that I can move on with fixing things.

## Installation
```
git clone https://github.com/mattfinnell/flask-webpack-cookiecutter <dirname>

cd <dirname>

sh setup.sh # Just sets up the python virtualenv, grapbs dependencies, and runs a prod build
```

## Running
```
python3 wsgi.py # Starts flask server
yarn start      # Starts webpack-dev-server
```

## Node scripts

Run webpack-dev-server
```
yarn start 
```

Run a webpack production build
```
yarn build
```

Continuously run production builds for *exp*erimentation, used for fine tuning `webpack.prod.js`
```
yarn exp 
```
