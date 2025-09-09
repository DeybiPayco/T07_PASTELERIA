from flask import Flask, render_template ,request, jsonify

#Inicializacion de mi framework flask
app = Flask(__name__)


#rutas
@app.route('/')
def index():
    return render_template ('index.html')


#ejecutar mi servidor
if __name__ == '__main__':
    app.run(debug=True)
