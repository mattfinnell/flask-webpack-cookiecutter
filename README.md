# flask-webpack cookiecutter

Builds the skeleton of a tiny flask application that uses webpack for asset management.

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

[webpack]: https://cdn.iconscout.com/public/images/icon/free/png-128/webpack-logo-brand-development-tools-34ef036744ce5d4d-128x128.png "Webpack Module Bundler"

[flask]: http://axisj.com/assets/images/sticker-flask.png "Flask Web Framework"
