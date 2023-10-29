/* eslint-disable react/prop-types */
import { useMemo, useState } from 'react'
import { Typography } from '@/components/ui/Typography'
import { TYPOGRAPHY_VARIANTS } from '@/components/ui/Typography/typography.const'
import { formatToMoney } from '@/utils/helpers'
import CircularProgressBar from '@/components/ui/CircularProgressBar'
import { useAtomValue, useSetAtom } from 'jotai'
import { totalBalanceAtom, updateTransationHistoryAtom } from '../Account/atoms/account.atom'
import clsx from 'clsx'
import { TrophyIcon } from '@heroicons/react/20/solid'
import { DEPOSIT_TYPES, TRANSACTION_TYPES } from '../Account/account.const'
import { deleteGoalAtom } from './atoms/goals.atom'

const GoalCard = ({ goal }) => {
  const totalBalance = useAtomValue(totalBalanceAtom);
  const withdrawGoal = useSetAtom(updateTransationHistoryAtom);
  const [isWithdrawEnabled, setIsWithdrawEnabled] = useState(false);
  const deleteGoal = useSetAtom(deleteGoalAtom);

  const percentage = useMemo(() => {

    if (totalBalance) {
      const percentage = (totalBalance / goal.amount) * 100;
      return percentage > 100 ? 100 : Math.round(percentage);
    }

    return 0;
    
  }, [totalBalance, goal]);

  const handleWrapperMouseOver = () => {
    if (percentage >= 100) {
      setIsWithdrawEnabled(true);
    }
  }

  const handleWithdrawClick = () => {
    withdrawGoal({
      amount: goal.amount,
      remarks: `${goal.name} goal completed`,
      transaction_method: DEPOSIT_TYPES['cash'],
      transaction_type: TRANSACTION_TYPES.WITHDRAW,
    });
    
    deleteGoal(goal.id);
  }

  return (
    <div
      onMouseOut={() => setIsWithdrawEnabled(false)}
      onMouseOver={handleWrapperMouseOver}
      className={clsx(
        'goal-card relative rounded-lg overflow-hidden w-1/3 h-[200px] flex flex-row justify-between p-3 ',
        percentage < 100 ? 'bg-amber-500' : 'bg-green-500 text-slate-800'
      )}>
      {isWithdrawEnabled && (
        <>
          <div className="absolute inset-0 bg-black/80 z-10" />
          <div className='absolute inset-0 flex items-center justify-center z-20'>
            <button onClick={handleWithdrawClick} className='bg-white py-2 px-5 rounded tracking-wider'>
              <Typography variant={TYPOGRAPHY_VARIANTS.CARD_TITLE}>Withdraw</Typography>
            </button>
          </div>
        </>
      )}
      {percentage >= 100 && (
        <div id="goalAchieved" className="w-20 h-20 absolute -left-5 -bottom-5 flex items-center justify-center bg-white rounded-full">
          <TrophyIcon className="h-10 text-orange-400"/>
        </div>
      )}
      <div className="flex flex-col gap-3">
        <Typography variant={TYPOGRAPHY_VARIANTS.CARD_TITLE}>
          {goal.name}
        </Typography>
        <Typography variant={TYPOGRAPHY_VARIANTS.HEADER}>{formatToMoney(goal.amount)}</Typography>
        <Typography variant={TYPOGRAPHY_VARIANTS.BODY} className="font-bold text-white opacity-50">Account Balance: {formatToMoney(totalBalance)}</Typography>
      </div>
      <CircularProgressBar percentage={percentage} />
    </div>
  )
}

GoalCard.propTypes = {}

export default GoalCard