'use client'

import * as React from 'react';
import { Grid2 as Grid, useTheme } from '@mui/material';
import LabelValueCard from '@/components/dashboard/label_value_card';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ReceiptIcon from '@mui/icons-material/Receipt';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import WalletIcon from '@mui/icons-material/Wallet';
import PaymentsIcon from '@mui/icons-material/Payments';
import Image from 'next/image';
import { Chart } from "react-google-charts";
import ChartCard from '@/components/dashboard/chart_card';
import BarChartComponent from '@/components/mui/charts/bar';
import PieChartComponent from '@/components/mui/charts/pie';
import fedex from "../../../public/images/fedex.png"
import keka from "../../../public/images/keka.jpg";
import google from "../../../public/images/google.jpg";
import zoho from "../../../public/images/zoho.jpg";
import RightDrawer from '@/components/dashboard/add_client';
import { useTranslations } from 'next-intl';


export const data = [
  ["Country", "Popularity"],
  ["Germany", 200],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["RU", 700],
];
export default function Home() {

  const t = useTranslations('Dashboard');
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme()
  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };
  const pieData = [
    {
      data: [
        { id: 2, value: 20, label: t('overdue') },
        { id: 0, value: 10, label: t('paid') },
        { id: 1, value: 15, label: t('unpaid') },
      ],
      innerRadius: 100,
    }
  ];
  const graphData = [
    { value: 10 }, { value: 30 }, { value: 20 },
    { value: 40 }, { value: 25 }, { value: 50 }
  ]

  const ReceiptIconLabel = [
    { value: 10 }, { value: 50 }, { value: 20 }, { value: 40 },
    { value: 70 }, { value: 10 }, { value: 80 }, { value: 90 }
  ]
  const LeaderboardIconData = [
    { value: 50 }, { value: 10 }, { value: 30 }, { value: 10 },
    { value: 10 }, { value: 90 }, { value: 60 }, { value: 90 }
  ]

  const WalletIconData = [
    { value: 10 }, { value: 20 }, { value: 40 }, { value: 80 },
    { value: 20 }, { value: 40 }, { value: 80 }, { value: 40 }
  ]
  const PaymentsIconData = [
    { value: 10 }, { value: 30 }, { value: 30 }, { value: 60 },
    { value: 30 }, { value: 10 }, { value: 60 }, { value: 20 }
  ]

  const clients = [
    { name: t('fedex'), status: t('active'), balance: "$12,987,000", logo: fedex },
    { name: t('google'), status: t('inactive'), balance: "$12,987,000", logo: google },
    { name: t('zoho'), status: t('active'), balance: "$12,987,000", logo: zoho },
    { name:t('keka'), status: t('active'), balance: "$12,987,000", logo: keka },
  ];

  return (
    <>
      <Grid container spacing={2}>
        <Grid size={{ xs: 2.4 }}>
          <LabelValueCard
            color={'#FFFFFF'}
            number={30}
            label={t('totalClients')}
            IconComponent={PeopleAltIcon}
            graphData={graphData}
            percentage={+12}
          />
        </Grid>

        <Grid size={{ xs: 2.4 }}>
          <LabelValueCard color={'#FFFFFF'} number={65} label={t('totalInvoices')} IconComponent={ReceiptIcon} graphData={ReceiptIconLabel}
            percentage={-12} />
        </Grid>

        <Grid size={{ xs: 2.4 }}>
          <LabelValueCard color={'#FFFFFF'} number={"$7500"} label={t('totalRevenue')} IconComponent={LeaderboardIcon} graphData={LeaderboardIconData}
            percentage={+12} />
        </Grid>

        <Grid size={{ xs: 2.4 }}>
          <LabelValueCard color={'#FFFFFF'} number={"$1200"} label={t('unpaid')} IconComponent={WalletIcon} graphData={WalletIconData}
            percentage={+12} />
        </Grid>

        <Grid size={{ xs: 2.4 }}>
          <LabelValueCard color={'#FFFFFF'} number={"$2210"} label={t('overdue')} IconComponent={PaymentsIcon} graphData={PaymentsIconData}
            percentage={-12} />
        </Grid>



        <ChartCard size={{ xs: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <p style={{ fontSize: "16px", color: "#666" }}>{t('totalRevenue')}</p>
              <h2 style={{ fontSize: "24px", fontWeight: "bold", margin: 0 }}>$17,500</h2>
            </div>
            <select style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ddd" }}>
              <option>Monthly</option>
              <option>Yearly</option>
            </select>
          </div>

          <BarChartComponent
            layout="vertical"
            xAxisData={[
              {
                data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                scaleType: "band" as const,
              },
            ]}
            yAxisData={[
              {
                disableLine: true,
                disableTicks: true,
                disableLabels: true,
              },
            ]}
            seriesData={[
              {
                data: [5000, 7000, 6500, 8000, 9000, 12000, 6000, 5000, 8500, 9200, 8800, 10000],
                color: theme.palette.primary.main,
              },
            ]}
            width={900}
            height={300}
            grid={{ horizontal: false, vertical: false }}
            tooltip={{ show: true, formatter: (value) => `$${value}` }}
            showToolbar={false}
          />


        </ChartCard>

        <ChartCard size={{ xs: 4 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <p style={{ fontSize: "16px", color: "#666" }}>{t('invoiceStatus')}</p>
            </div>
            <select style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ddd" }}>
              <option>{t('all')}</option>
              <option>{t('paid')}</option>
              <option>{t('unpaid')}</option>
              <option>{t('overdue')}</option>

            </select>
          </div>
          <PieChartComponent
            series={pieData}
            width={400}
            height={324}
            colors={['#FF6384', '#36A2EB', '#FFCE56']}
            slotProps={{
              legend: {
                direction: 'row',
                position: { vertical: 'bottom', horizontal: 'middle' },
                padding: 9,
              },
            }}
          />
        </ChartCard>

        <Grid size={{ xs: 6 }}>
          <div className="mx-auto bg-white shadow-md rounded-lg p-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{t('clients')}</h2>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm" onClick={toggleDrawer(true)}>
                {t('addClient')}
              </button>
            </div>
            <div className="space-y-4">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b pb-3 last:border-none"
                >
                  <div className="flex items-center space-x-4">
                    <Image src={client.logo} alt={client.name} width={40} height={40} className="rounded-full" />
                    <div>
                      <p className="font-medium"> {t('name')}: {client.name}</p>
                      <p className={`text-sm ${client.status === "Active" ? "text-green-500" : "text-red-500"}`}>
                        {t('clientStatus')}: {client.status}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{client.balance}</p>
                    <p className="text-gray-500 text-sm">{t('outstandingBalance')}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Grid>

        <Grid size={{ xs: 6 }}>
          <div className="mx-auto bg-white shadow-md rounded-lg">
            <div>
              <h2 className="text-xl font-semibold pt-2 pl-2">{t('clientGeography')}</h2>
              <Chart
                chartEvents={[
                  {
                    eventName: "select",
                    callback: ({ chartWrapper }) => {
                      const chart = chartWrapper.getChart();
                      const selection = chart.getSelection();
                      if (selection.length === 0) return;
                      const region = data[selection[0].row + 1];
                      console.log("Selected : " + region);
                    },
                  },
                ]}
                chartType="GeoChart"
                width="100%"
                height="300px"
                data={data}
                options={{
                  colorAxis: { colors: ["#D6C7E8", "#4f2d7f"] },
                  backgroundColor: "transparent",
                  datalessRegionColor: "#f5f5f5",
                  defaultColor: "#4f2d7f",
                }}
              />

            </div>

          </div>
        </Grid>
        <RightDrawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />

      </Grid>
    </>
  )
}

