import { useTranslation } from "react-i18next";


interface SideNavItem  {
    title: string;
    path: string;
    icon?: JSX.Element;
    submenu?: boolean;
    subMenuItems?: SideNavItem[];
  };
  const [t, i18n] = useTranslation("global");

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: t('Accueil'),
    path: '/',
  },
  {
    title: 'FUSIOCOAT®',
    path: '/FUSIOCOAT®',
    submenu: true,
    subMenuItems: [
      { title: t('Automobile'), path: '/Automobile' },
      { title: t('Aéronautique'), path: '/Aeronautique' },
      { title: 'Marine', path: '/Marine' },
    ],
  },
  {
    title: t('En savoir plus'),
    path: '/En savoir plus',
    submenu: true,
    subMenuItems: [
      { title: t('Qu’est ce qu’un revêtement céramique ?'), path: '/Cermic' },
      { title: t('Les revêtements céramiques Fusiocoat'), path: '/Revetements' },
      { title: t('Comment appliquer Fusiocoat ?'), path: '/Applique' },
    ],
  },
  {
    title: t('Boutique'),
    path: '/Boutique',
  },
  {
    title: t('Devenir Revendeur'),
    path: '/Partenaire',
  },
  {
    title: t('Contact'),
    path: '/Contact',
  },
];