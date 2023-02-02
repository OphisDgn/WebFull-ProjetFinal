from flask_sqlalchemy import SQLAlchemy
from dataclasses import dataclass

db = SQLAlchemy()

@dataclass
class CarModel(db.Model):
    __tablename__ = "cars"

    id:id = db.Column(db.Integer, primary_key=True)
    name:str = db.Column(db.String(50), nullable=False)
    price:float = db.Column(db.Float, nullable=False)
    image:str = db.Column(db.String(1000), nullable=True)
    description:str = db.Column(db.String(6000), nullable=True)
    model:str = db.Column(db.String(250), nullable=False)

    def __repr__(self):
        return f"{self.id}:{self.name}"

    def getCar(self):
        return f"id: {self.id}, name: {self.name}, price: {self.price}, image: {self.image}, description: {self.description}, model: {self.model}"

    def __init__(self, name, price, image, description, model):
        super().__init__()
        self.name = name
        self.price = price
        self.image = image
        self.description = description
        self.model = model
