"use client";
import { Layout } from "@/common";
import { Card, TeamHomeCard, StockCard } from "@/components";
import { ShopIcon } from "@/common/Icons";
import { useRouter } from "next/navigation";


export default function DataDashboard() {
    const router = useRouter();

    return (
      <Layout className="flex flex-col gap-4 w-[98%]">
        <Card className="flex-1 h-1/2">
          <TeamHomeCard/>
        </Card>
  
        <div className="flex-1 h-1/2 grid grid-cols-2 gap-4">
          <Card
            Title="My Stock"
            titleButton="Shop Now"
            onClick={() => {
              router.push("/shop");
            }}
            icon={<ShopIcon />}
          >
            <StockCard className="my-4" />
          </Card>
  
          <Card
            Title="Notifications"
            imageBottom="/alert.svg"
            icon={<ShopIcon />}
            paragraph="You dont't have any orders."
            className="h-full"
          />
        </div>
      </Layout>)
}
