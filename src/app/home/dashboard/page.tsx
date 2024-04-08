"use client";
import { observer } from "mobx-react-lite";
import { useStore } from "@/models";
import {
  AddIcon,
  CustomLink,
  EmptyDashboardCard,
  PageLayout,
  ShopIcon,
} from "@/common";
import { Card, StockCard, TeamHomeCard } from "@/components";

export default observer(function Dashboard() {
  const {
    members: { members },
    products: { products },
  } = useStore();

  return (
    <PageLayout>
      <div className="flex flex-col gap-4 w-full h-full max-h-full  ">
        <section className="flex-grow max-h-1/2 h-1/2 ">
          {members.length ? (
            <TeamHomeCard />
          ) : (
            <EmptyDashboardCard type="members" />
          )}
        </section>
        <section className="grid grid-cols-2 gap-4  max-h-1/2 h-1/2  ">
          {products.length ? (
            <Card
              Title="My Stock"
              titleButton="Shop Now"
              icon={<CustomLink href="/shop" />}
            >
              <StockCard />
            </Card>
          ) : (
            <EmptyDashboardCard type="stock" />
          )}
          <Card
            Title="Notifications"
            imageBottom="/alert.svg"
            icon={<ShopIcon />}
            paragraph="You dont't have any orders."
            className="h-full"
          />
        </section>
      </div>
    </PageLayout>
  );
});
