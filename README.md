# flask-webpack cookiecutter
Builds the skeleton of a tiny flask+webpack app.

- automatically constructs application skeleton
- automatically builds python-flask dependencies
- automatically builds node-webpack dependencies
- automatically sets up a fresh virtualenv environment
- automatically sets up a fresh git repository

## Installation
```
git clone https://github.com/mattfinnell/flask-webpack-cookiecutter <dirname>

cd <dirname>

sh setup.sh 
```

## Running
```
# Start webpack-dev-server
yarn start 

# Start python flask server
python3 wsgi.py 
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
