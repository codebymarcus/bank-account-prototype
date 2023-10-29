/* eslint-disable react/prop-types */
import { Typography } from "@/components/ui/Typography";
import { TYPOGRAPHY_VARIANTS } from "@/components/ui/Typography/typography.const";
import AddGoalButton from "./AddGoalButton";
import { useAtomValue } from "jotai";
import { goalsAtom } from "./atoms/goals.atom";
import GoalCard from "./GoalCard";

const Goals = () => {
  const goals = useAtomValue(goalsAtom);

  return (
    <div className="flex flex-col p-3">
      <div className="p-3 flex flex-row justify-between items-start">
        <div>
          <Typography variant={TYPOGRAPHY_VARIANTS.HEADER} className={"text-white"}>Goals</Typography>
          <Typography variant={TYPOGRAPHY_VARIANTS.BODY} className={"text-white"}>
            Set your goals and track your progress
          </Typography>
        </div>
        <AddGoalButton />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {goals.length > 0 && goals.map((goal) => <GoalCard key={goal.id} goal={goal} />)}
      </div>
    </div>
  )
}


export default Goals;