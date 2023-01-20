from flask_sqlalchemy import SQLAlchemy
from dataclasses import dataclass

db = SQLAlchemy()

@dataclass
class CarModel(db.Model):
    __tablename__ = "cars"

    id:id = db.Column(db.Integer, primary_key=True)
    name:str = db.Column(db.String(50), nullable=False)
    price:int = db.Column(db.Float, nullable=False)
    image:str = db.Column(db.String(1000), nullable=True)

    def __repr__(self):
        return f"{self.id}:{self.name}"

    def getCar(self):
        return f"id: {self.id}, name: {self.name}, price: {self.price}, image: {self.image}"

    def __init__(self, name, price, image):
        super().__init__()
        self.name = name
        self.price = price
        self.image = image
