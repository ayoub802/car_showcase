'use client';

import React, { ReactNode, useEffect, useRef, useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { motion, useCycle } from 'framer-motion';

import { useTranslation } from "react-i18next";
import { ArrowDown, ArrowDown2 } from 'iconsax-react';


interface SideNavItem  {
    title: string;
    path: string;
    icon?: JSX.Element;
    submenu?: boolean;
    subMenuItems?: SideNavItem[];
  };
  
  
  

type MenuItemWithSubMenuProps = {
    item: SideNavItem;
    toggleOpen: () => void;
};

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
    transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
    },
}),
closed: {
    clipPath: 'circle(0px at 100% 0)',
    transition: {
        type: 'spring',
      stiffness: 400,
      damping: 40,
    },
},
};

const HeaderMobile = () => {
    const [t, i18n] = useTranslation("global");
    const pathname = usePathname();
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    const [isOpen, toggleOpen] = useCycle(false, true);

    const SIDENAV_ITEMS: SideNavItem[] = [
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
    return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      className={`fixed inset-0 z-50 w-full lg:hidden ${
        isOpen ? '' : 'pointer-events-none'
      }`}
      ref={containerRef}
    >
      <motion.div
        className="absolute inset-0 right-0 w-full bg-white"
        variants={sidebar}
      />
      
      <motion.ul
        variants={variants}
        className="absolute grid w-full gap-3 px-10 py-16"
      >
        {SIDENAV_ITEMS.map((item, idx) => {
          const isLastItem = idx === SIDENAV_ITEMS.length - 1; // Check if it's the last item

          return (
            <div key={idx}>
              {item.submenu ? (
                <MenuItemWithSubMenu item={item} toggleOpen={toggleOpen} />
              ) : (
                <MenuItem>
                  <Link
                    href={item.path}
                    onClick={() => toggleOpen()}
                    className={`flex w-full text-[16px] ${
                      item.path === pathname ? 'font-bold' : ''
                    }`}
                  >
                    {item.title}
                  </Link>
                </MenuItem>
              )}

              {!isLastItem && (
                <>
                  <MenuItem className="my-3 h-px w-full bg-gray-300" />
                </>
              )}
            </div>
          );
        })}
      </motion.ul>
      <MenuToggle toggle={toggleOpen} isOpen={isOpen}/>
    </motion.nav>
  );
};

export default HeaderMobile;

const MenuToggle = ({ toggle, isOpen }: { toggle: any, isOpen: any }) => (
    <>
    {
        !isOpen
        ?
        <>
        <button
          onClick={toggle}
          className="pointer-events-auto absolute md:right-28 right-24 md:top-[32px] top-[30px] z-30"
        >
        <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
            variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
            }}
        />
        <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
                closed: {
                    opacity: 1
                },
            open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
        />
        <Path
            variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
            }}
        />
        </svg>
        </button>

        </>
        :
        <button
            onClick={toggle}
            className="pointer-events-auto absolute right-4 top-[14px] z-30"
        >
            <svg width="23" height="23" viewBox="0 0 23 23">
            <PathClose
                variants={{
                closed: { d: 'M 2 2.5 L 20 2.5' },
                open: { d: 'M 3 16.5 L 17 2.5' },
                }}
            />
            <PathClose
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: {
                        opacity: 1
                    },
                open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
            />
            <PathClose
                variants={{
                closed: { d: 'M 2 16.346 L 20 16.346' },
                open: { d: 'M 3 2.5 L 17 16.346' },
                }}
            />
            </svg>

        </button>

    }
    </>
);

const MenuToggleClose = ({ toggle }: { toggle: any }) => (
  <button
    onClick={toggle}
    className="pointer-events-auto absolute right-4 top-[14px]"
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <PathClose
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <PathClose
        
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <PathClose
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </button>
);

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="#fff"
    strokeLinecap="round"
    {...props}
  />
);
const PathClose = (props: any) => (
  <motion.path
    fill="#000"
    strokeWidth="2"
    stroke="#000"
    strokeLinecap="round"
    {...props}
  />
);

const MenuItem = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <motion.li variants={MenuItemVariants} className={className}>
      {children}
    </motion.li>
  );
};

const MenuItemWithSubMenu: React.FC<MenuItemWithSubMenuProps> = ({
  item,
  toggleOpen,
}) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <>
      <MenuItem>
        <button
          className="flex w-full text-[16px]"
          onClick={() => setSubMenuOpen(!subMenuOpen)}
        >
          <div className="flex flex-row justify-between w-full items-center">
            <span
              className={`${pathname.includes(item.path) ? 'font-bold' : ''}`}
            >
              {item.title}
            </span>

            <ArrowDown2 
              size={12}
              color='#000'
            />
          </div>
        </button>
      </MenuItem>
      <div className="mt-2 ml-2 flex flex-col space-y-2 transition-all duration-75">
        {subMenuOpen && (
          <>
            {item.subMenuItems?.map((subItem, subIdx) => {
              return (
                <MenuItem key={subIdx}>
                  <Link
                    href={subItem.path}
                    onClick={() => toggleOpen()}
                    className={` ${
                      subItem.path === pathname ? 'font-bold' : ''
                    }`}
                  >
                    {subItem.title}
                  </Link>
                </MenuItem>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

const MenuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      duration: 0.02,
    },
  },
};

const variants = {
  open: {
    transition: { staggerChildren: 0.02, delayChildren: 0.15 },
  },
  closed: {
    transition: { staggerChildren: 0.01, staggerDirection: -1 },
  },
};

const useDimensions = (ref: any) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return dimensions.current;
};