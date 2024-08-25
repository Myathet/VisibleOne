import { SideMenu } from "@/types/menu";

export const DRAWER_WIDTH = 270;

export const PLAYLIST_MENU_ITEM: SideMenu[] = [
  {
    type: 'item',
    label: 'Workout Mix',
    icon: 'streamline:play-list-5',
    href: ''
  },
  {
    type: 'item',
    label: 'XD 4 Life',
    icon: 'streamline:play-list-5',
    href: ''
  },
]

export const SIDE_MENU_ITEM: SideMenu[] = [
  {
    type: 'item',
    label: 'Home',
    icon: 'material-symbols:garage-home-outline-rounded',
    href: 'home'
  },
  {
    type: 'item',
    label: 'Songs',
    icon: 'arcticons:guitar-songs',
    href: ''
  },
  {
    type: 'item',
    label: 'PlayLists',
    icon: 'mingcute:playlist-2-fill',
    href: ''
  },
  {
    type: 'item',
    label: 'Just For You',
    icon: 'material-symbols:user-attributes',
    href: ''
  },
  {
    type: 'item',
    label: 'Top Chart',
    icon: 'fe:line-chart',
    href: ''
  },
];