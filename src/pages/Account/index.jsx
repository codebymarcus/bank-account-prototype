import { format } from 'date-fns'
import { TYPOGRAPHY_VARIANTS } from "@/components/ui/Typography/typography.const";
import { Typography } from "components/ui/Typography";
import { useAtomValue } from "jotai";
import { totalBalanceAtom, transactionHistoryListFormat } from "./atoms/account.atom";
import ActionButton from "./ActionButton";
import { TRANSACTION_TYPES } from "./account.const";
import { formatToMoney } from "@/utils/helpers";

const ROW_COLOR_CLASS = {
  [TRANSACTION_TYPES.DEPOSIT]: 'text-teal-400',
  [TRANSACTION_TYPES.WITHDRAW]: 'text-red-600',}
const Account = () => {
  const totalBalance = useAtomValue(totalBalanceAtom);
  const transactionHistory = useAtomValue(transactionHistoryListFormat);

  return (
    <div className="flex flex-col p-3 gap-3">
      <div id="accountBalance" className="">
        <div className="rounded bg-slate-900 p-2 flex flex-row justify-between items-center">
          <div className="flex flex-col gap-5">
            <Typography variant={TYPOGRAPHY_VARIANTS.CARD_TITLE} className="text-white">Account balance:</Typography>
            <Typography variant={TYPOGRAPHY_VARIANTS.HEADER} className="text-orange-300">{formatToMoney(totalBalance)}</Typography>
          </div>
          <div id="accountActionBtns" className="flex gap-3">
            <ActionButton 
              label="Deposit"
              btnClasses="bg-white"
              transactionType={TRANSACTION_TYPES.DEPOSIT} />
            <ActionButton
              label="Withdraw"
              btnClasses="bg-red-800 text-white"
              maxAmount={totalBalance}
              transactionType={TRANSACTION_TYPES.WITHDRAW}/>
          </div>
        </div>
      </div>
      <div id="accountHistory" className="py-2">
        <table className="table-auto text-white w-full">
          <thead className="text-left uppercase">
            <tr className="">
              <th className="">Transaction type</th>
              <th className="">Amount</th>
              <th className="">Deposit/Withdrawal type</th>
              <th className="">Remarks</th>
              <th className="">Remaining balance</th>
              <th className="">Created at</th>
            </tr>
          </thead>
          <tbody>
            {transactionHistory.length > 0 && transactionHistory.map((transaction) => (
              <tr key={transaction.id} className={`${ROW_COLOR_CLASS[`${transaction.transaction_type}`]}`}>
                <td>{transaction.transaction_type}</td>
                <td>{formatToMoney(transaction.amount)}</td>
                <td>{transaction.transaction_method.name}</td>
                <td>{transaction.remarks}</td>
                <td>{formatToMoney(transaction.updated_balance)}</td>
                <td>{format(new Date(transaction.created_at), 'MMM dd, yyyy hh:mm aa')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
};

export default Account;