import { IconLookup } from "@fortawesome/fontawesome-svg-core";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function InputCopy({ value, icon }: { value: string, icon: IconLookup }) {
  const [displayTooltip, setDisplayTooltip] = useState(false);

  const onClick = (evt: any) => {
    setDisplayTooltip(true);
    navigator.clipboard.writeText(value).catch(() => { });
    setTimeout(() => {
      setDisplayTooltip(false);
    }, 3 * 1000);
  };

  const onUnfocus = () => setDisplayTooltip(false);

  return (
    <TooltipProvider>
      <Tooltip open={displayTooltip}>
        <TooltipTrigger asChild onClick={onClick} onBlur={onUnfocus} className="flex w-full items-center">
          <div>
            <Input onClick={(evt) => (evt.target as HTMLInputElement).select()} aria-label="Tooltip text" type="text" defaultValue={value} className="rounded-r-none border-2 border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-black/45" />
            <Button aria-label="Tooltip icon" className="rounded-l-none border-input border-2 border-l-0 pointer-events-none w-[40px]">
              <FontAwesomeIcon icon={icon} />
            </Button>
          </div>
        </TooltipTrigger>
        <TooltipContent side="bottom" align="start" arrowPadding={50}>
          <p>The text has been successfully copied</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
