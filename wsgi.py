from website.app import create_app
import website.config as config

import os

config_object = eval(os.environ['FLASK_APP_CONFIG'])
app = create_app(config_object)

if __name__ == "__main__":
    app.run()
