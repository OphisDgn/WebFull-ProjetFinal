from models import db, CarModel
from flask import Flask, jsonify, abort, request, redirect
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://admin:admin@db:3306/lesson'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)
CORS(app)

@app.before_first_request
def create_table():
    db.create_all()

@app.route("/flask/cars", methods=["GET"])
def getAllCars():
    cars = CarModel.query.all()
    return jsonify({"cars": cars})


@app.route("/flask/create", methods=['POST'])
def create():
    name = request.json['name']
    price = request.json['price']
    image = request.json['image']
    description = request.json['description']
    model = request.json['model']
    car = CarModel(name=name, price=price, image=image, description=description, model=model)
    db.session.add(car)
    db.session.commit()
    return jsonify(car.getCar())


@app.route("/flask/update/<int:id>", methods=['POST'])
def update(id):
    name = request.json['name']
    price = request.json['price']
    image = request.json['image']
    description = request.json['description']
    model = request.json['model']
    db.session.query(CarModel).filter(CarModel.id == id).update(
    {'name':name, 'price':price, 'image':image, 'description': description, 'model': model}, synchronize_session="fetch")
    db.session.commit()
    car = CarModel.query.filter_by(id=id).first()
    return jsonify(car.getCar())


@app.route('/flask/delete/<int:id>', methods= ['GET', 'POST'])
def delete(id):
    car = CarModel.query.filter_by(id=id).first()
    if request.method == 'POST':
        if car:
            db.session.delete(car)
            db.session.commit()
            return redirect('/flask/cars')
        else: 
            return f"Aucune voiture n'existe avec cet id {id}"
    else:
        abort(404)


app.run(host='localhost', port=5000)
