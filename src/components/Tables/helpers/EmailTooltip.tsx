import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function EmailTooltip({ email }) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={350}>
        <TooltipTrigger>
          <span className="cursor-pointer  font-semibold italic text-black ">
            {email} ⚠️
          </span>
        </TooltipTrigger>
        <TooltipContent className="bg-white">
          <p className=" font-semibold "> ❌ This email is not registered</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
