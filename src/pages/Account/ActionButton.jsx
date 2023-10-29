/* eslint-disable react/prop-types */
import { useSetAtom } from "jotai";
import { useMemo, useState } from "react"
import {  updateTransationHistoryAtom } from "./atoms/account.atom";
import { DEPOSIT_TYPES } from "./account.const";
import TransactionModal from "./modal";
import clsx from "clsx";

const ActionButton = ({
  btnClasses = '',
  label = '',
  maxAmount = null,
  transactionType,
}) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState(0);
  const [remarks, setRemarks] = useState("");
  const [transactionMethod, setTransactionMethod] = useState(DEPOSIT_TYPES['cash']);
  const setTransaction = useSetAtom(updateTransationHistoryAtom);

  const isSubmitDisabled = useMemo(() => parseInt(amount) === 0, [amount])
  const resetStates = () => {
    setAmount(0);
    setRemarks("");
    setIsOpen(false);
  }

  const handleDepositClick = () => {
    setIsOpen(true);
  }

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  }

  const handleRemarksChange = (e) => {
    setRemarks(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTransaction({
      amount: parseFloat(amount),
      remarks,
      transaction_method: transactionMethod,
      transaction_type: transactionType,
    })
    resetStates();
  }
  
  return (
    <>
      <button onClick={handleDepositClick} className={clsx('p-3 font-bold rounded', btnClasses)}>{label}</button>
      <TransactionModal
        isOpen={isOpen}
        maxAmount={maxAmount}
        onClose={() => setIsOpen(false)}
        headerTitle={label}
        onSubmit={handleSubmit}
        amount={amount}
        onAmountChange={handleAmountChange}
        transactionMethod={transactionMethod}
        onTransactionMethodChange={val => setTransactionMethod(DEPOSIT_TYPES[val])}
        remarks={remarks}
        onRemarksChange={handleRemarksChange}
        isSubmitDisabled={isSubmitDisabled} />
    </>
  )
}

export default ActionButton