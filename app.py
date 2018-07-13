from flask import Flask, render_template

app = Flask(__name__, static_url_path='')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/pages/<str:page>')
def pages():
    return render_template(f'/pages/{page}')
