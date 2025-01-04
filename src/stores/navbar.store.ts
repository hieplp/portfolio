import {create} from "zustand/react";

export type NavbarItemType = {
  index: number,
  id: string,
  label: string,
  colors?: {
    normal: string,
    active: string
  }
}

export type NavbarStoreState = {
  current: NavbarItemType,
  items: NavbarItemType[]
};

export type NavbarStoreAction = {
  setCurrent: (payload: NavbarItemType) => void,
  setItems: (payload: NavbarItemType[]) => void
};

const BLACK_COLOR = {
  normal: "text-black",
  active: "text-black"
};

const WHITE_COLOR = {
  normal: "text-neutral-content",
  active: "text-white"
};

const NAVBAR_ITEMS: NavbarItemType[] = [
  {
    index: 1,
    id: "about",
    label: "about",
    colors: WHITE_COLOR
  },
  {
    index: 2,
    id: "expertise",
    label: "expertise",
    colors: BLACK_COLOR
  },
  {
    index: 3,
    id: "experience",
    label: "experience",
    colors: WHITE_COLOR
  },
  {
    index: 4,
    id: "project",
    label: "project",
    colors: BLACK_COLOR
  },
  {
    index: 5,
    id: "contact",
    label: "contact",
    colors: WHITE_COLOR
  }
];

const initialState: NavbarStoreState = {
  current: NAVBAR_ITEMS[0],
  items: NAVBAR_ITEMS
}

export const useNavbarStore = create<NavbarStoreState & NavbarStoreAction>(
  (set) => ({
    ...initialState,
    setCurrent: (payload) => set(() => ({current: payload})),
    setItems: (payload) => set(() => ({items: payload}))
  })
);
