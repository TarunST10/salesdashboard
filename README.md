# Sales Dashboard — Next.js 15 Frontend Assessment

A production-ready sales analytics dashboard built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Recharts**, following the **Atomic Design** structural principle.

## Live Demo
> Add your Vercel URL here after deploying

## Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 15 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Recharts | Chart components |
| Lucide React | Icons |
| clsx | Conditional classNames |

---

## Project Structure (Atomic Design)

```
sales-dashboard/
├── app/
│   ├── layout.tsx              # Root layout (fonts, global styles)
│   ├── page.tsx                # Redirects → /dashboard
│   ├── globals.css             # Tailwind base styles
│   ├── api/
│   │   └── sales/route.ts      # REST API endpoint for sales data
│   └── dashboard/
│       ├── layout.tsx          # Dashboard shell (Sidebar + Topbar)
│       ├── page.tsx            # Main dashboard page (client, year filter)
│       ├── products/page.tsx
│       ├── reports/page.tsx
│       └── settings/page.tsx
│
├── components/
│   ├── Sidebar.tsx             # Navigation sidebar
│   ├── Topbar.tsx              # Top header bar
│   ├── ui/                     # Atomic UI components
│   │   ├── MetricCard.tsx      # KPI summary card
│   │   └── FilterBar.tsx       # Year filter toggle
│   ├── charts/                 # Chart components (Recharts)
│   │   ├── RevenueBarChart.tsx # Monthly revenue bar chart
│   │   └── RevenueTrendChart.tsx # Revenue vs target line chart
│   └── tables/
│       └── SalesTable.tsx      # Sales by category table
│
├── lib/
│   └── salesData.ts            # TypeScript types + mock sales data
│
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/sales-dashboard.git
cd sales-dashboard
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it will redirect to `/dashboard`.

### 4. Build for production

```bash
npm run build
npm start
```

---

## Features

- **KPI Cards** — Total revenue, orders, avg order value, conversion rate for each year
- **Bar Chart** — Monthly revenue comparison (2022 / 2023 / 2024) using Recharts
- **Line Chart** — Revenue trend vs target using Recharts
- **Data Table** — Sales by category with growth, status badges, and share bars
- **Year Filter** — Toggle between 2022, 2023, 2024 to update all components
- **REST API** — `/api/sales?year=2024` returns structured JSON
- **Responsive Layout** — Sidebar + main content area
- **TypeScript** — Fully typed data models and component props

---

## Deploying to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and click **New Project**
3. Import your GitHub repository
4. Click **Deploy** — Vercel auto-detects Next.js, no config needed

---

## Data Source

Mock sales data is defined in `lib/salesData.ts`. The data is structured to represent realistic e-commerce sales across Electronics, Apparel, Home & Garden, Sports, and Books categories for 2022–2024.

For real data, replace with a Kaggle CSV (e.g. [Sample Sales Data](https://www.kaggle.com/datasets/kyanyoga/sample-sales-data)) parsed via `papaparse`.

---

## API Reference

### `GET /api/sales?year=2024`

Returns sales data for the specified year.

**Response:**
```json
{
  "year": "2024",
  "kpi": {
    "totalRevenue": "$2.84M",
    "revenueChange": "+18.3% YoY",
    ...
  },
  "monthly": [...],
  "categories": [...]
}
```
