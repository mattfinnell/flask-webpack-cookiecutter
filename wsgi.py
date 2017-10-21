from website.app import create_app
import website.config as config

app = create_app(config.DevelopmentConfig)

if __name__ == "__main__" :
    app.run()
