#!/bin/bash

venvDir=".${PWD##*/}"
currentPath=$PWD
environmentActivation="$currentPath/$venvDir/bin/activate"

# [ VIRTUALENV ] Create Python Virtual Environment
python3 -m venv $venvDir

# [ VIRTUALENV ] Set Environment Command to .env file for Autoenv
echo "source $environmentActivation" > .env 

# [ PYTHON ] install python flask and friends
pip install -r requirements.txt

# [ NODE ] install webpack and friends
yarn install

# [ NODE ] Run a webpack production build
yarn build

# [ CLEANUP ]
rm -rf LICENSE README.md setup.sh .git

# [ GIT ] Add vitualenv directory and .env to .gitignore
echo "# Python virtualenv stuff" > .gitignore
echo "$venvDir"$ >> .gitignore
echo ".env\n" >> .gitignore

# [ GIT ] Add python and node specific files to .gitignore
curl https://raw.githubusercontent.com/github/gitignore/master/Python.gitignore >> .gitignore
curl https://raw.githubusercontent.com/github/gitignore/master/Node.gitignore >> .gitignore

# [ GIT ] Initialize git repository
git init
