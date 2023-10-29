import { atom } from "jotai";
import { atomWithStorage } from 'jotai/utils';
import { defaultTransactionHistory } from "./default-values";
import { calculateBalance } from "../utils";
import { generateUUID } from "@/utils/helpers";

export const transactionHistoryAtom = atomWithStorage('transactionHistory', defaultTransactionHistory);

export const totalBalanceAtom = atom(get => {
  const transactionHistory = get(transactionHistoryAtom);

  if (transactionHistory.length === 0) {
    return 0;
  }

  return transactionHistory[transactionHistory.length - 1].updated_balance;

});

export const transactionHistoryListFormat = atom(get => [...get(transactionHistoryAtom)].reverse());

export const updateTransationHistoryAtom = atom(
  null,
  (get, set, newTransaction) => {
    const lastTransaction = get(transactionHistoryAtom)[get(transactionHistoryAtom).length - 1];

    const floatTotal = parseFloat(lastTransaction ? lastTransaction.updated_balance : 0);
    const floatAmount = parseFloat(newTransaction.amount);

    set(transactionHistoryAtom, [...get(transactionHistoryAtom), {
      ...newTransaction,
      id: generateUUID(),
      updated_balance: calculateBalance(
        floatTotal,
        floatAmount,
        newTransaction.transaction_type
      ),
      created_at: new Date(),
    }]);
  }
)
