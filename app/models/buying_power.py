from .db import db

class Buying_Power(db.Model):
    __tablename__ = 'buying_powers'

    id = db.Column(db.Integer, nullable=False, primaryKey=True)
    portfolio_id = db.Column(db.integer, db.ForeignKey('portfolios.id'), nullable=False)
    transaction_id = db.Column(db.Integer, db.ForeignKey('transactions.id'), nullable=False)
    trade_id = db.Column(db.Integer, db.ForeignKey('trades.id'), nullable=False)
    amount = db.Column(db.Float, nullable=False)
    portfolio = db.relationship('Portfolio', back_populates='buying_power', cascade='all, delete')
    trades = db.relationship('Trade', back_populates='buying_power', cascade='all, delete')
    transactions = db.relationship('Transaction', back_populates='buying_power', cascade='all, delete')

    def to_dict_buying_powers(self):
        return {
            "id": self.id,
            "portfolioId": self.portfolio_id,
            "transactionId": self.transaction_id,
            "tradeId": self.trade_id,
            "amount": self.amount
        }

    def to_dict_buying_powers_rel(self):
        return {
            "id": self.id,
            "portfolioId": self.portfolio_id,
            "transactionId": self.transaction_id,
            "tradeId": self.trade_id,
            "amount": self.amount,
            "trades":[trade.to_dict_trades() for trade in self.trades],
            "transactions":[transaction.to_dict_transactions() for transaction in self.transactions]
        }
