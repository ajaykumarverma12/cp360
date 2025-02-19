"use client"
import type { ReactNode } from "react"
import { Card, CardContent, Grid2 as Grid } from "@mui/material"
interface ChartCardProps {
    size?: number
    children: ReactNode
}

const ChartCard: React.FC<ChartCardProps> = ({ size, children }) => {
  
    return (
        <Grid size={size}>
            <Card>
                <CardContent>
                    <div className="flex flex-col items-center justify-between">
                        <div className="flex-grow">{children}</div>
                    </div>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default ChartCard