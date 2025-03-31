import { cn } from "@/lib/utils";

export const AnimatedLink = ({
  text,
  link,
}: {
  text: string;
  link: string;
}) => {
  return (
    <a href={link} className="group">
      <span
        className={cn(
          `bg-left-bottom bg-gradient-to-r bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out`,
          "from-gray-900 to-gray-900 dark:from-gray-100 dark:to-gray-100",
          "pb-1"
        )}
      >
        {text}
      </span>
    </a>
  );
};
