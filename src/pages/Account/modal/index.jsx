/* eslint-disable react/prop-types */
import { Typography } from "@/components/ui/Typography";
import { TYPOGRAPHY_VARIANTS } from "@/components/ui/Typography/typography.const";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import DepositTypeOptions from "../DepositTypeOptions";

const TransactionModal = ({
  isOpen,
  onClose,
  headerTitle,
  onSubmit,
  amount,
  onAmountChange,
  transactionMethod,
  onTransactionMethodChange,
  remarks,
  onRemarksChange,
  isSubmitDisabled,
  maxAmount,
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-slate-200 p-6 text-left align-middle shadow-xl transition-all flex flex-col gap-3">
                  <Typography variant={TYPOGRAPHY_VARIANTS.CARD_TITLE} >
                    {headerTitle}
                  </Typography>
                  <form onSubmit={onSubmit}>
                    <div className="flex flex-col gap-3">
                      <div>
                        <label htmlFor="amount">Amount:</label>
                        <input
                          type="number"
                          id="amount"
                          max={maxAmount}
                          value={amount}
                          onChange={onAmountChange}
                          placeholder="Enter deposit amount"
                          required
                          className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="depositType">{headerTitle} type:</label>
                        <DepositTypeOptions type={transactionMethod} onChange={onTransactionMethodChange} />
                      </div>
                      <div>
                        <label htmlFor="remarks">Remarks:</label>
                        <textarea
                          id="remarks"
                          value={remarks}
                          onChange={onRemarksChange}
                          placeholder="Add remarks (optional)"
                          className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
                        />
                      </div>
                      <button disabled={isSubmitDisabled} type="submit" className="bg-sky-600 p-3 font-bold rounded text-white disabled:bg-slate-300">Submit Deposit</button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
  )
}

export default TransactionModal;