from flask import Flask, render_template

app = Flask(__name__, static_url_path='', static_folder='dist')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/<string:page>/<int:i>')
def pages(page, i):
    return render_template(f'/pages/{page}{i}.html')
