from flask import Flask, render_template

app = Flask(__name__)

# Главная страница
@app.route('/')
def home():
    return render_template('index.html')

# API endpoint (если нужно)
@app.route('/api/data')
def get_data():
    return {'message': 'Данные с бэкенда!'}

# Пример API с параметром
@app.route('/api/user/<username>')
def get_user(username):
    return {'username': username, 'id': 123}

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)