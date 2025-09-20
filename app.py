from flask import Flask, render_template ,request, jsonify

# Inicialización de Flask
app = Flask(__name__)

# Rutas
@app.route('/')
def index():
    return render_template('index.html')

@app.route("/productos")
def productos():
    return render_template("productos.html")

@app.route('/contact')
def contactanos():
    return render_template('contactanos.html')

@app.route('/nosotros')
def nosotros():
    return render_template('nosotros.html')

# Ejecutar servidor
if __name__ == '__main__':
    app.run(debug=True)
