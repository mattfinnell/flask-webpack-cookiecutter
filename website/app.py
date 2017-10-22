# Flask framework
from flask import Flask, Blueprint, render_template

# Werkzeug utilities
from werkzeug.utils import find_modules, import_string

# Project specific utilities
import website.utils as utils


def create_app(config):
    """
    Flask application factory, Development, Test, Staging, and Production
    configs may engage / disengage different application features.
    """
    # Create unconfigured flask application
    app = Flask(
        config.APP_NAME,
        template_folder="website/templates"
    )

    # Configure flask application
    app.config.from_object(config)
    app.static_folder = config.STATIC_FOLDER

    # register functions are like set-methods for blueprints, databases, etc.
    registration_functions = [
        register_blueprints,
        register_error_pages,
        # register_database,
        # register_context_processors,
    ]

    # attach blueprints, databases, plugins, etc to application context
    for r in registration_functions:
        r(app)

    return app


def register_blueprints(app):
    """
    Will find all blueprints within website.views and update them to the app
    """
    view_modules = map(import_string, find_modules("website.views"))

    for view_module in view_modules:
        blueprints = utils.get_classes_of_type(
            view_module,
            Blueprint
        )

        for blueprint in blueprints:
            app.register_blueprint(blueprint)


def register_error_pages(app):
    """
    Handle all errors mentioned by the "Digital Ocean common http error codes"
    webpage. All errors get stylized by the same errorpage jinja template.

    A list of HTTP statuses can be found at https://httpstatuses.com/
    """
    class Error(object):
        def __init__(self, error_code, error_title):
            self.code = error_code
            self.title = error_title

    @app.errorhandler(400)
    def bad_request(e):
        error = Error(400, "Bad Request")
        return render_template("errorpage.html", data=error), 400

    @app.errorhandler(401)
    def unauthorized(e):
        error = Error(401, "Unauthorized")
        return render_template("errorpage.html", data=error), 401

    @app.errorhandler(403)
    def forbidden(e):
        error = Error(403, "Forbidden")
        return render_template("errorpage.html", data=error), 403

    @app.errorhandler(404)
    def page_not_found(e):
        error = Error(404, "Page Not Found")
        return render_template('errorpage.html', error=error), 404

    @app.errorhandler(418)
    def teapot(e):  # This is hillarious
        error = Error(418, "I'm a Teapot")
        return render_template('errorpage.html'), 418

    @app.errorhandler(500)
    def server_error(e):
        error = Error(500, "Internal Server Error")
        return render_template("errorpage.html", data=error), 500

    @app.errorhandler(502)
    def bad_gateway(e):
        error = Error(502, "Bad Gateway")
        return render_template("errorpage.html", data=error), 502

    @app.errorhandler(503)
    def gateway_timeout(e):
        error = Error(503, "Gateway Timeout")
        return render_template("errorpage.html", data=error), 503
