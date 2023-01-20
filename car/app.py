from models import db, CarModel
from flask import Flask, jsonify, render_template, request, redirect
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
    return render_template("list.html", cars = cars)


@app.route("/create", methods=['POST'])
def create():
    name = request.json['name']
    price = request.json['price']
    image = request.json['image']
    car = CarModel(name=name, price=price, image=image)
    db.session.add(car)
    db.session.commit()
    return jsonify(car.__repr__())

@app.route("/<int:id>/update", methods=['POST'])
def update(id):
    car = CarModel.query.filter_by(id=id).first()
    name = request.json['name']
    price = request.json['price']
    image = request.json['image']
    db.session.query(CarModel).filter(car.id == id).update(
    {'name':name, 'price':price, 'image':image}, synchronize_session="fetch")
    db.session.commit()
    return jsonify(car.__repr__())


app.run(host='localhost', port=5000)