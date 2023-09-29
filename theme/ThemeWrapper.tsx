'use client'
import { ThemeProvider } from "@mui/material"
import { createTheme } from '@mui/material/styles';
import { ReactNode } from "react"

const ThemeWrapper = ({ children }: { children: ReactNode }) => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#fcb800',
            },
            secondary: {
                main: '#f4f4f4'
            }
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: 0
                    }
                }
            },
            MuiSelect: {
                styleOverrides: {
                    root: {
                        borderRadius: 0
                    }
                }
            },
        }
    });

    return (
        <>
            <ThemeProvider theme={theme} >
                {children}
            </ThemeProvider>
        </>
    )
}

export default ThemeWrapper