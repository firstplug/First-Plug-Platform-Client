import Layout from "@/common/Layout";
import Card from "@/components/Card";
import { ShopIcon } from "@/common/Icons";
import TeamCard from "@/components/TeamCard";
import StockCard from "@/components/StockCard";

export default function DashboardData() {
  return (
    <Layout className="flex flex-col gap-4 w-[98%]">
      <Card className="flex-1 h-1/2">
        <TeamCard />
      </Card>

      <div className="flex-1 h-1/2 grid grid-cols-2 gap-4">
        <Card Title="My Stock" titleButton="Shop Now" icon={<ShopIcon />}>
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
    </Layout>
  );
}
