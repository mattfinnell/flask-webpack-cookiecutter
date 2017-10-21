import os

class Config(object):
    APP_NAME = "TEST APPLICATION"
    STATIC_FOLDER = 'website/static'
    DEBUG = True

    DEVELOPMENT = False

class DevelopmentConfig(Config):
    DEVELOPMENT = False
