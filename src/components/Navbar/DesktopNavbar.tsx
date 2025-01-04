import classNames from "../../classNames.ts";
import useDesktopNavbar from "../../hooks/useDesktopNavbar.ts";
import {NavbarItemType} from "../../stores/navbar.store.ts";

type NavbarItemProps = {
  active?: boolean,
  scrollTo: (id: string) => void
} & NavbarItemType;

const NavbarItem = (props: NavbarItemProps) => {
  const {
    index,
    id,
    label,
    active,
    scrollTo
  } = props;

  // Handle default colors
  let {colors} = props;
  if (!colors) {
    colors = {
      normal: "text-neutral-content",
      active: "text-white"
    }
  }

  // Render NavbarItem component
  return (
    <div
      className="text-2xl hover:cursor-pointer relative pt-3 group"
      onClick={() => scrollTo(id)}
    >
      <p className={classNames(
        "text-sm absolute top-0 right-0",
        `group-hover:${colors?.active} group-hover:font-bold`,
        active ? `${colors?.active} font-semibold` : colors?.normal
      )}>
        {index < 10 ? '0' + index : index}
      </p>
      <p className={classNames(
        "group-hover:font-bold tracking-tight leading-[120%]",
        `group-hover:${colors?.active}`,
        active ? `${colors?.active} font-bold bold-animation` : colors?.normal
      )}>
        {label}
      </p>
    </div>
  );
}

export default function DesktopNavbar() {

  const {items, current, scrollTo} = useDesktopNavbar();

  return (
    <nav className={`fixed w-full hidden md:flex justify-center z-20 top-0 left-0 pt-20`}>
      <div className="items-center justify-between w-full flex md:w-auto md:order-1 space-x-12">
        {items.map((item) => (
          <NavbarItem
            {...item}
            key={item.index}
            colors={current.colors}
            active={current.id === item.id}
            scrollTo={scrollTo}
          />
        ))}
      </div>
    </nav>
  )
}
