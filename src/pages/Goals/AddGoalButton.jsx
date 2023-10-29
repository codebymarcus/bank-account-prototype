import { Typography } from "@/components/ui/Typography";
import { TYPOGRAPHY_VARIANTS } from "@/components/ui/Typography/typography.const";
import { TrophyIcon } from "@heroicons/react/20/solid";
import AddGoalModal from "./modal";
import { useState } from "react";

const AddGoalButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAddGoalClick = () => {
    setIsOpen(true);
  }

  return (
    <>
      <button onClick={handleAddGoalClick} className="goal-card flex items-center gap-3 justify-center p-4 bg-cyan-500 rounded">
        <TrophyIcon className="h-6 text-orange-400"/>
        <Typography variant={TYPOGRAPHY_VARIANTS.CARD_TITLE} className={"text-white"}>
          Add Goal
        </Typography>
      </button>
      <AddGoalModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}

export default AddGoalButton;