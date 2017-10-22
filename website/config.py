import os


class Config(object):
    APP_NAME = "TEST APPLICATION"
    STATIC_FOLDER = 'website/static'
    DEBUG = True

    DEVELOPMENT = False
    TESTING = False
    STAGING = False
    PRODUCTION = False


class DevelopmentConfig(Config):
    DEVELOPMENT = True


class TestingConfig(Config):
    TESTING = True


class StagingConfig(Config):
    STAGING = True


class ProductionConfig(Config):
    PRODUCTION = True
    DEBUG = False
