"use client"

import type React from "react"
import { PieChart, type PieChartProps } from "@mui/x-charts/PieChart"
import type { PieSeriesType, PieValueType } from "@mui/x-charts/models"
import { MakeOptional } from "@mui/x-charts/internals"


interface PieChartComponentProps {
    series: MakeOptional<PieSeriesType<MakeOptional<PieValueType, "id">>, "type">[]
    width?: number
    height?: number
    margin?: PieChartProps["margin"]
    slotProps?: PieChartProps["slotProps"]
    colors?: string[]
}

const PieChartComponent: React.FC<PieChartComponentProps> = ({
    series,
    width,
    height,
    margin,
    slotProps,
    colors,
}) => {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <PieChart series={series} width={width} height={height} margin={margin} slotProps={slotProps} colors={colors} />
        </div>
    )
}

export default PieChartComponent

