# flask-webpack cookiecutter

![Imgur](https://i.imgur.com/MqM2KLG.png)

Builds the skeleton of a flask+webpack app.

- automatically constructs application skeleton
- automatically builds python-flask dependencies
- automatically builds node-webpack dependencies
- automatically sets up a fresh virtualenv environment
- automatically sets up a fresh git repository

Was immediately featured as an *Interesting Project* in the [Python Weekly Newsletter!](http://mailchi.mp/pythonweekly/python-weekly-issue-318?e=99f5ef4e2f).

## Installation
```
git clone https://github.com/mattfinnell/flask-webpack-cookiecutter <dirname>

cd <dirname>

sh setup.sh
```

This project assumes that you have the following usual suspects already installed
- [`git`](https://git-scm.com/) (...given)
- A python environment with [`python3`](https://docs.python.org/3/whatsnew/3.6.html), [`pip`](https://pip.pypa.io/en/stable/), and [`autoenv`](https://github.com/kennethreitz/autoenv).
- A node environment with the [`node`](https://nodejs.org/en/) runtime and [`yarn`](https://yarnpkg.com/en/).

Everything else *literally* builds from there.

## Running
```
# Start webpack-dev-server
yarn start

# Start python flask server
python3 wsgi.py
```

## Dev vs Production Configurations

Environments can easily be changing between by these environment variables.
The build tool defaults to `DevelopmentConfig`.

```
# .env possiblities

export FLASK_APP_CONFIG="config.DevelopmentConfig" # DEFAULT
export FLASK_APP_CONFIG="config.TestingConfig"
export FLASK_APP_CONFIG="config.StagingConfig"
export FLASK_APP_CONFIG="config.ProductionConfig"
```

### Development
Run `yarn start` and `python3 wsgi.py` as separate processes for they are both servers.
- **Webpack-dev-server** will *serve* files at `localhost:8080/static/build`
- **Flask** will run at `localhost:5000`
- Flask will *request* for css, js, and other assets at `localhost:8080/static/build`

### Non-Development
Set `FLASK_APP_CONFIG` to anything other than `config.DevelopmentConfig` then run `yarn build` (instead of start) and `python3 wsgi.py`.
- **Webpack** will build and place all files into `/website/static/build/`.
- **Flask** will run at `localhost:5000`
- Flask will *serve* css, js and other assets from `localhost:5000/static/build`

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

## Todo

- Fix the `FLASK_APP_CONFIG` issue.
- Add celery into the mix
- Create a better opening page
