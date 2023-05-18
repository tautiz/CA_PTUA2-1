from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS
import os
from datetime import datetime

basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'portfolio.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
ma = Marshmallow(app)


# DB object
class Portfolio(db.Model):
    __tablename__ = 'portfolio'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column("Title", db.String)
    img = db.Column("Image", db.String)
    categories = db.Column("Categories", db.String)
    created_at = db.Column("Created At", db.DateTime, default=datetime.utcnow)
    updated_at = db.Column("Updated At", db.DateTime, onupdate=datetime.utcnow)
    deleted_at = db.Column("Deleted At", db.DateTime)


# Portfolio schema
class PortfolioSchema(ma.Schema):
    class Meta:
        fields = ('id', 'title', 'img', 'categories', 'created_at', 'updated_at', 'deleted_at')


portfolio_schema = PortfolioSchema()
portfolios_schema = PortfolioSchema(many=True)


# Sukurti naują portfolio įrašą
@app.route('/portfolio', methods=['POST'])
def add_portfolio():
    db.create_all()
    title = request.json['title']
    img = request.json['img']
    categories = request.json['categories']
    new_portfolio = Portfolio(title=title, img=img, categories=categories)
    db.session.add(new_portfolio)
    db.session.commit()
    return portfolio_schema.jsonify(new_portfolio)


# Gauti visus portfolio įrašus
@app.route('/portfolio', methods=['GET'])
def get_all_portfolios():
    all_portfolios = Portfolio.query.all()
    result = portfolios_schema.dump(all_portfolios)
    return jsonify(result)


# Gražiną specifinį portfolio įrašą
@app.route('/portfolio/<id>', methods=['GET'])
def get_portfolio(id):
    portfolio = Portfolio.query.get(id)
    return portfolio_schema.jsonify(portfolio)


# Atnaujina specifinį portfolio įrašą
@app.route('/portfolio/<id>', methods=['PUT'])
def update_portfolio(id):
    portfolio = Portfolio.query.get(id)
    portfolio.title = request.json['title']
    portfolio.img = request.json['img']
    portfolio.categories = request.json['categories']
    db.session.commit()
    return portfolio_schema.jsonify(portfolio)


# Pašalina poertfolio įraša, tačiau nepilnai, o tik pažymėdamas jį
@app.route('/portfolio/<id>', methods=['DELETE'])
def delete_portfolio(id):
    portfolio = Portfolio.query.get(id)
    portfolio.deleted_at = datetime.utcnow()
    db.session.commit()
    return portfolio_schema.jsonify(portfolio)


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=81, debug=True)
    db.create_all()
