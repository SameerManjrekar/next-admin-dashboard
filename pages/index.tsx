import Head from "next/head";

import Header from "@/components/Header";
import TopCards from "@/components/TopCards";
import BarChart from "@/components/BarChart";
import RecentOrders from "@/components/RecentOrders";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sameer Next js Sidebar Project</title>
        <meta
          name="description"
          content="This is a sample reponssive sidebar layput"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-100 min-h-screen">
        <Header />
        <TopCards />
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 p-4">
          <BarChart />
          <RecentOrders />
        </div>
      </main>
    </>
  );
}
