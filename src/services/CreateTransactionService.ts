// import AppError from '../errors/AppError';
import { getCustomRepository } from 'typeorm';
import Transaction from '../models/Transaction';
import TransactionsRepository from '../repositories/TransactionsRepository';

interface Request {
  title: string;
  type: 'income' | 'outcome';
  value: number;
  category: string;
}

class CreateTransactionService {
  public async execute({ title, type, value }: Request): Promise<Transaction> {
    const transactions = getCustomRepository(TransactionsRepository);

    const transaction = transactions.create({
      title,
      type,
      value,
    });

    await transactions.save(transaction);
    return transaction;
  }
}

export default CreateTransactionService;
