import { Button } from "@/components/ui/button";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BounceBtn({ position, target }: { position: "top" | "bottom", target: string }) {
  return (
    <div className={`${position == "top" ? "rotate-180" : ""} maxPhoneHeight:hidden absolute ${position == "top" ? "top-0" : "bottom-0"} left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
      <Button className="animate-bounce rounded-full shadow-md" variant="secondary" asChild>
        <button aria-label={`Scroll to ${target}`} onClick={() => document.getElementById(target)?.scrollIntoView()}><FontAwesomeIcon icon={faArrowDown} /></button>
      </Button>
    </div>
  );
}
