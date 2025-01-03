import classNames from "../../classNames.ts";
import useIntersectionObserver from "../../hooks/useIntersectionObserver.ts";
import { useMemo } from "react";

type NavbarItemProps = {
  index: number,
  label: string,
  active?: boolean,
  colors?: {
    normal: string,
    active: string
  }
};

const NavbarItem = (props: NavbarItemProps) => {
  const { index, label, active } = props;

  // Handle default colors
  let { colors } = props;
  if (!colors) {
    colors = {
      normal: "text-neutral-content",
      active: "text-white"
    }
  }

  // Render NavbarItem component
  return (
    <div className="text-2xl hover:cursor-pointer relative pt-3 group">
      <div className={classNames(
        "text-sm absolute top-0 right-0",
        `group-hover:${colors?.active} group-hover:font-bold`,
        active ? `${colors?.active} font-semibold` : colors?.normal
      )}>
        {index < 10 ? '0' + index : index}
      </div>
      <div className={classNames(
        "group-hover:font-bold tracking-tight leading-[120%]",
        `group-hover:${colors?.active}`,
        active ? `${colors?.active} font-bold` : colors?.normal
      )}>
        {label}
      </div>
    </div>
  );
}

export default function DesktopNavbar() {
  const navbarItems = [
    {
      index: 1,
      label: "about",
      active: true
    },
    {
      index: 2,
      label: "expertise"
    },
    {
      index: 3,
      label: "experience"
    },
    {
      index: 4,
      label: "project"
    },
    {
      index: 5,
      label: "contact"
    }
  ];

  // Handle active section (text colors)
  const sections = [
    "about",
    "expertise",
    "experience",
    "project",
    "contact"
  ];
  const activeSection = useIntersectionObserver(sections);
  const textColors = useMemo(() => {
    console.log(activeSection);
    switch (activeSection) {
      case "expertise":
        return {
          normal: "text-black",
          active: "text-black"
        }
      default:
        return {
          normal: "text-neutral-content",
          active: "text-white"
        }
    }
  }, [ activeSection ]);

  return (
    <nav className={`fixed w-full hidden md:flex justify-center z-20 top-0 left-0 pt-20`}>
      <div className="items-center justify-between w-full flex md:w-auto md:order-1 space-x-12">
        {navbarItems.map((item) => (
          <NavbarItem
            key={item.index}
            colors={textColors}
            {...item}
          />
        ))}
      </div>
    </nav>
  )
}
