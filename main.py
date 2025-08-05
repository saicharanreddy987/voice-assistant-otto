from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def home():
    return "Voice Assistant UNAH is Active."

if __name__ == '__main__':
    app.run(debug=True)
