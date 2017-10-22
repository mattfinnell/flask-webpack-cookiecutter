#!/bin/bash

# Setup python virtual env
venvDir=".${PWD##*/}"
currentPath=$PWD
environmentActivation="$currentPath/$venvDir/bin/activate"

# Create Python Virtual Environment
python3 -m venv $venvDir

# Set Environment Command to .env file for Autoenv
echo "source $environmentActivation" > .env 

# Install python dependencies (Flask and friends)
pip install -r requirements.txt

# Install node dependencies (Webpack and friends)
yarn install
