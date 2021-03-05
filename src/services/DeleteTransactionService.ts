import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import TransactionsRepository from '../repositories/TransactionsRepository';

interface Request {
  id: string;
}
class DeleteTransactionService {
  public async execute({ id }: Request): Promise<void> {
    const transactions = getCustomRepository(TransactionsRepository);

    const transaction = await transactions.findOne({
      where: { id },
    });

    if (!transaction) {
      throw new AppError('Transaction does not Exist', 204);
    }
    if (transaction.id === id) {
      await transactions.remove(transaction);
    }
  }
}

export default DeleteTransactionService;
