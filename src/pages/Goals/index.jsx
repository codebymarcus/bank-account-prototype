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
    <div className="flex flex-col p-5">
      <div className="p-3 flex flex-row justify-between items-start">
        <div>
          <Typography variant={TYPOGRAPHY_VARIANTS.HEADER} className={"text-white"}>Goals</Typography>
          <Typography variant={TYPOGRAPHY_VARIANTS.BODY} className={"text-white"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, eum!</Typography>
        </div>
        <AddGoalButton />
      </div>
      <div className="flex flex-row gap-2">
        {goals.length > 0 && goals.map((goal) => <GoalCard key={goal.id} goal={goal} />)}
      </div>
    </div>
  )
}


export default Goals;