"use client"

import { Typography } from "@mui/material"
import type React from "react"
import { SvgIconComponent } from "@mui/icons-material"
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

interface DynamicCardProps {
    color: string
    number: number
    label: string
    IconComponent: SvgIconComponent
    graphData: { value: number }[]
    percentage: number
}

const LabelValueCard: React.FC<DynamicCardProps> = ({ number, label, IconComponent, graphData, percentage }) => {
    const isPositive = percentage >= 0

    return (
        <div className="relative w-full h-[96px] rounded-lg shadow-md p-4 flex items-center bg-white">
            <div className="w-10 h-10 bg-[#F5F5F5] rounded-full flex items-center justify-center">
                <IconComponent fontSize="small" color="primary" />
            </div>
            <div className="flex flex-1 items-center justify-between pl-3">
                <div>
                    <Typography variant="body2" color="gray">{label}</Typography>
                    <Typography fontSize={24} fontWeight="bold" color="#4f2d7f">{number}</Typography>
                </div>
                <div className="flex flex-col items-center">
                    <ResponsiveContainer width={50} height={30}>
                        <LineChart data={graphData}>
                            <XAxis hide />
                            <YAxis hide />
                            <Tooltip cursor={false} />
                            <Line type="linear" dataKey="value" stroke={isPositive ? "#4f2d7f" : "#F44336"} strokeWidth={2} dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
                    <div className="flex items-center mt-1">
                        <Typography fontSize={12} color={isPositive ? "#4f2d7f" : "red"}>
                            {percentage}%
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LabelValueCard
