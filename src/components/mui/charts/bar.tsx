"use client"

import type { AxisConfig, ChartsGridProps, BarSeriesType } from "@mui/x-charts"
import type { AxisScaleConfig, ChartsXAxisProps, ChartsYAxisProps } from "@mui/x-charts/internals"
import { BarChart } from "@mui/x-charts/BarChart"
import type { MakeOptional } from "@mui/x-date-pickers/internals"
import { Box } from "@mui/material"

interface BarChartComponentProps {
    yAxisData?: MakeOptional<AxisConfig<keyof AxisScaleConfig, unknown, ChartsYAxisProps>, "id">[]
    xAxisData?: MakeOptional<AxisConfig<keyof AxisScaleConfig, unknown, ChartsXAxisProps>, "id">[]
    seriesData: MakeOptional<BarSeriesType, "type">[]
    width?: number
    height?: number
    grid?: Pick<ChartsGridProps, "horizontal" | "vertical">
    layout?: "horizontal" | "vertical"
}

const BarChartComponent = ({ yAxisData, xAxisData, seriesData, width, height, grid, layout }: BarChartComponentProps) => {
    return (
        <Box sx={{ width: '100%' }}>
            <BarChart
                yAxis={yAxisData}
                xAxis={xAxisData}
                series={seriesData}
                width={width}
                height={height}
                grid={grid}
                layout={layout}
            />
        </Box>
    )
}

export default BarChartComponent