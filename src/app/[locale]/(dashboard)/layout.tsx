'use client'

import * as React from 'react';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import { IconButton, Stack } from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NotificationsIcon from '@mui/icons-material/Notifications';

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale,useTranslations } from "next-intl";

const languages = [
    { code: "en", label: "English" },
    { code: "fr", label: "Français" },
    { code: "de", label: "Deutsch" },
  ];
function ToolbarActions({ onLanguageChange }: { onLanguageChange: (lang: string) => void }) {


    const [menuOpen, setMenuOpen] = useState(false);
    const [langDropdown, setLangDropdown] = useState(false);
    const currentLocale = useLocale();
    const pathname = usePathname();
    const router = useRouter();

    const changeLanguage = (locale: string) => {
        const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`);
        router.push(newPath);
      };
    return (
        <Stack direction="row" className="flex items-center gap-2">
                        <div className="relative">
              <button
                onClick={() => setLangDropdown(!langDropdown)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                {languages.find((l) => l.code === currentLocale)?.label}
                {/* <ChevronDown size={16} /> */}
              </button>

              {langDropdown && (
                <div className="absolute right-0 mt-2 text-rose-800 bg-white shadow-lg rounded-lg py-2 w-36">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={` px-4 py-2 text-sm w-full text-left ${
                        currentLocale === lang.code ? "font-bold" : ""
                      } hover:bg-gray-500`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <NotificationsIcon sx={{ color: "#4f2d7f" }} />
            <MoreVertIcon sx={{ color: "#4f2d7f" }} />
            <PersonIcon sx={{ color: "#4f2d7f" }} />

        </Stack>
    );
}

function SidebarFooter({ isCollapsed, onToggle }: { isCollapsed: boolean; onToggle: () => void }) {
    return (
        <div className={`absolute w-full h-16 bottom-20`}>
            <IconButton
                className={`fixed ${isCollapsed ? "left-[47.5px]" : "left-[270px]"} w-[56px] h-[56px] !text-white !bg-[#B9ABCC] !shadow-[4px_4px_4px_0px_#00000040]`}
                aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                onClick={onToggle}
                sx={{
                    transition: 'left 300ms ease-in-out',
                }}
            >
                <ArrowForwardIos
                    sx={{
                        transform: isCollapsed ? "rotate(0deg)" : "rotate(180deg)",
                        transition: "transform 300ms ease-in-out",
                    }}
                />
            </IconButton>
        </div>
    );
}

export default function DashboardPagesLayout(props: { children: React.ReactNode }) {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(true);

  

    const toggleSidebar = () => {
        setIsSidebarCollapsed((prev) => !prev);
    };

    return (
        <DashboardLayout
            disableCollapsibleSidebar
            defaultSidebarCollapsed
            sidebarExpandedWidth={isSidebarCollapsed ? 77 : 300}
            slotProps={{
                sidebarFooter: {
                    mini: isSidebarCollapsed
                }
            }}
            slots={{
                sidebarFooter: () => <SidebarFooter isCollapsed={isSidebarCollapsed} onToggle={toggleSidebar} />,
                toolbarActions: () => <ToolbarActions  />,
            }}
        >
            <PageContainer
                className='flex-1 flex flex-col h-full justify-between !p-0 w-full !max-w-none'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100vh',
                    maxWidth: 'none',
                    backgroundColor:'	#F5F5F5',
                    margin: 0,
                    flex: 1,
                    overflow: 'scroll',
                    '& .MuiStack-root': {
                        margin: 0,
                        '& > div:first-of-type': {
                            display: 'none',
                        },
                    }
                }}
                breadcrumbs={undefined}
            >
                <div className="flex-1 w-full !mt-[15px] !max-h-[calc(100vh-(45px+0.55rem+64px))] p-4">
                    {props.children}
                </div>
            </PageContainer>
        </DashboardLayout>
    );
}
