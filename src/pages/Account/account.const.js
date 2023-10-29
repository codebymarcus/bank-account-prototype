export const DEPOSIT_TYPES = {
  cash: {
    name: 'Cash',
    value: 'cash'
  },
  bank_transfer: {
    name: 'Bank Transfer',
    value: 'bank_transfer'
  },
  online_banking: {
    name: 'Online banking',
    value: 'online_banking'
  },
  check: {
    name: 'Check',
    value: 'check'
  }
};

export const TRANSACTION_TYPES = Object.freeze({
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
})