/* eslint-disable array-callback-return */
import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface TransactionDTO {
  type: 'income' | 'outcome';
  value: number;
  title: string;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  // eslint-disable-next-line class-methods-use-this
  public getBalance(): Balance {
    const balance = {
      income: 4200,
      outcome: 1500,
      total: 2700,
    };

    return balance;
  }

  public create({ title, value, type }: TransactionDTO): Transaction {
    const transaction = new Transaction({ title, value, type });

    if (type === 'outcome' && value > 2700) throw Error('erro');

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
