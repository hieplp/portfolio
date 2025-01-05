import type {IconType} from "react-icons";
import {FaFacebook, FaGithub, FaGoogle, FaLinkedin, FaPhone, FaSkype} from "react-icons/fa";
import {create} from "zustand/react";

export type SocialItemType = {
  id: string,
  label: string,
  icon: IconType,
  link: string,
  hoverColor?: string
}

export type SocialStoreState = {
  items: SocialItemType[],
  aboutItems: SocialItemType[]
}

export type SocialStoreAction = {}

export const SOCIAL_MAP = {
  GITHUB: {
    id: "Github",
    label: "github.com/hieplp",
    link: "https://github.com/hieplp",
    icon: FaGithub,
  },
  GMAIL: {
    id: "Gmail",
    label: "hiepphuocly@gmail.com",
    link: "mailto:hiepphuocly@gmail.com",
    icon: FaGoogle,
  },
  FACEBOOK: {
    id: "Facebook",
    label: "facebook.com/hieplp99",
    link: "https://www.facebook.com/hieplp99",
    icon: FaFacebook,
  },
  SKYPE: {
    id: "Skype",
    label: "hiep ly (hiepphuocly@gmail.com)",
    link: "hiepphuocly@gmail.com",
    icon: FaSkype,
  },
  PHONE: {
    id: "Phone",
    label: "(+84) 033 545 2591",
    link: "",
    icon: FaPhone,
    hoverColor: "text-green-500"
  },
  LINKEDIN: {
    id: "Linkedin",
    label: "linkedin.com/Hiep Ly",
    link: "https://www.linkedin.com/in/hiep-ly-563a231a2",
    icon: FaLinkedin,
  },
};

const SOCIAL_ITEMS: SocialItemType[] = Object.values(SOCIAL_MAP);

const initialState: SocialStoreState = {
  items: SOCIAL_ITEMS,
  aboutItems: [
    SOCIAL_MAP.GITHUB,
    SOCIAL_MAP.GMAIL,
    SOCIAL_MAP.FACEBOOK,
    SOCIAL_MAP.LINKEDIN
  ]
};

export const useSocialStore = create<SocialStoreState & SocialStoreAction>((_) => ({
  ...initialState,
}));
