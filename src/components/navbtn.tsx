import { Button } from "@/components/ui/button";

export default function NavBtn({ name, target }: { name: string, target: string }) {
  return (
    <Button asChild>
      <button className="hover:bg-gray-100 rounded-none" aria-label={`Scroll to ${target}`} onClick={() => document.getElementById(target)?.scrollIntoView()}>{name}</button>
    </Button>
  );
}
