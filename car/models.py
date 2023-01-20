from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class CarModel(db.Model):
    __tablename__ = "cars"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    price = db.Column(db.Float, nullable=False)
    image = db.Column(db.String(500), nullable=True)

    def __repr__(self):
        return f"{self.id}:{self.name}"

    def getCar(self):
        return f"id: {self.id}, name: {self.name}, price: {self.price}, image: {self.image}"

    def __init__(self, name, price, image):
        self.name = name
        self.price = price
        self.image = image
