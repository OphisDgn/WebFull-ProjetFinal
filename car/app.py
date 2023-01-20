from models import db, CarModel
from flask import Flask, jsonify, abort, render_template, request, redirect
import json

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://admin:admin@db:3306/lesson'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

@app.before_first_request
def create_table():
    db.create_all()

@app.route("/", methods=["GET"])
def getAllCars():
    cars = CarModel.query.all()
    return jsonify({"cars": cars})


@app.route("/create", methods=['POST'])
def create():
    name = request.json['name']
    price = request.json['price']
    image = request.json['image']
    car = CarModel(name=name, price=price, image=image)
    db.session.add(car)
    db.session.commit()
    return jsonify(car.getCar())


@app.route("/update/<int:id>", methods=['POST'])
def update(id):
    name = request.json['name']
    price = request.json['price']
    image = request.json['image']
    db.session.query(CarModel).filter(CarModel.id == id).update(
    {'name':name, 'price':price, 'image':image}, synchronize_session="fetch")
    db.session.commit()
    car = CarModel.query.filter_by(id=id).first()
    return jsonify(car.getCar())


@app.route('/delete/<int:id>', methods= ['GET', 'POST'])
def delete(id):
    car = CarModel.query.filter_by(id=id).first()
    if request.method == 'POST':
        if car:
            db.session.delete(car)
            db.session.commit()
            return redirect('/')
        else: 
            return f"Aucune voiture n'existe avec cet id {id}"
    else:
        abort(404)


app.run(host='localhost', port=5000)