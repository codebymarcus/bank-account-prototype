import { TRANSACTION_TYPES } from "../account.const";

export const calculateBalance = (total, amount, transactionType) => {
  if (transactionType === TRANSACTION_TYPES.DEPOSIT) {
    return total + amount;
  }

  if (transactionType === TRANSACTION_TYPES.WITHDRAW) {
    return total - amount;
  }
}