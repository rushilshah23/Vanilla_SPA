from flask import Flask, send_from_directory
import os

app = Flask(__name__, static_folder='frontend/static')

# Serve static files
@app.route('/static/<path:path>')
def serve_static(path):
    return send_from_directory(os.path.join(app.static_folder), path)

# Handle all other routes by serving index.html
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return send_from_directory('frontend', 'index.html')

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 7000))
    app.run(host='0.0.0.0', port=port)
