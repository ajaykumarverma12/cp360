'use client'

import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import { Branding, type Navigation } from '@toolpad/core/AppProvider';
import { NextAppProvider } from '@toolpad/core/nextjs'
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import HomeIcon from '@mui/icons-material/Home';
export default function DashboardLayoutNavigationActions({ children }: { children: React.ReactNode }) {
    const BRANDING: Branding = {
        title: '',
        logo:""
            
    }

    const Theme = createTheme(
        {
            direction: "ltr",
            cssVariables: {
                colorSchemeSelector: 'data-toolpad-color-scheme',
            },
            palette: {
                primary: {
                    main: '#4F2D7F',
                },
                secondary: {
                    main: '#00A7B5'
                }
            },
            breakpoints: {
                values: {
                    xs: 0,
                    sm: 600,
                    md: 600,
                    lg: 1200,
                    xl: 1536,
                },
            },
            typography: {
                fontSize: 14,
                button: {
                    fontSize: 14,
                    textTransform: "none"
                },
                body1: {
                    fontSize: 14
                },
                h6: {
                    fontSize: 16,
                },
                fontFamily: "inherit, sans-serif",
            },
        },
    );

    const cacheLtr = createCache({
        key: 'mui',
    });

    const Main_Navigation: Navigation = [
        {
            segment: '',
            title:"Dashboard",
            icon: <HomeIcon />,
        },
        {
            segment: 'client-management',
            title: "Client",
            icon:<SupervisorAccountIcon />,
        },
    ]

    return (
        <CacheProvider value={cacheLtr}>

            <NextAppProvider
                navigation={Main_Navigation}
                theme={Theme}
                branding={BRANDING}
            >
                {children}
            </NextAppProvider>
        </CacheProvider>
    );
}