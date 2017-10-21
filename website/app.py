from flask import Flask, render_template

def create_app(config):
    app = Flask(
        config.APP_NAME,
        template_folder="website/templates"
    )

    app.config.from_object(config)
    app.static_folder = config.STATIC_FOLDER

    app = register_routes(app)

    return app

def register_routes(app):
    @app.route('/')
    def index():
        return render_template('index.html')

    return app

if __name__ == "__main__" :
    app = create_app(config.DevelopmentConfig)

    app.run()
