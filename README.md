#Vue.js+PWA on Flask backend

> Python3, Vue-cli 3.0, node.js 8

Demo: https://flask-vue-pwa.herokuapp.com

###Features:
- Front-end: Vue.js
- Back-end: Flask
- PWA ready: support install app; offline view
- read to deploy to Heroku

###How to use
1. git clone https://github.com/kevinqqnj/flask-vue-pwa.git

2. cd flask-vue-pwa

3. python3 -m venv venv

4. Linux: source venv/bin/activate
Windows: venv\Scripts\activate

5. pip install Flask

6. flask run
Open browser: http://localhost:5000 to view

###Build
- develop your front-end pages in `/src`
- preview: `npm run serve`
- build: `npm run build`
- copy all files in `/dist` to Flask `/static`
- copy `index.html` to Flask `/templates`
- ready to deploy

###Advanced
1. modification of Flask template
- Flask need to set app parameter `static_url_path` to ''. 
This is due to PWA `manifest.json` and `service-worker.js` etc. files required to be accessed in / root url. 
Set to '' empty, means when client requesting files in root url: `http://my.site/manifest.json`, Flask will search in default static directory (i.e. `/static`).
If not set `static_url_path`, client requesting url is: `http://my.site/static/manifest.json`
```
# app.py
app = Flask(__name__, static_url_path='')
```
2. Vue CLI 3.0 vue.config.js
You need to manually create `/vue.config.js` if need special configurtions

3. service-worker.js
Add your customized registerRoute, strategies in `/src/service-worker.js`.
Including 'offline.html' and '404.html'
- Click 'Article ?', will return customized `404` page
- disconnect network, click 'Article 1', will return customized `offline` page
