"use client";
import { observer } from "mobx-react-lite";
import { useStore } from "@/models";
import {
  AddIcon,
  ChevronRight,
  CustomLink,
  NotificationIcon,
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
            <Card
              Title="My Team"
              titleButton="Add Team Member"
              imageBottom="/girl.svg"
              altImage="My Team"
              icon={<AddIcon />}
              paragraph="You haven't loaded any employees yet."
              className="h-full"
            />
          )}
        </section>
        <section className="grid grid-cols-2 gap-4  max-h-1/2 h-1/2  ">
          {products.length ? (
            <Card Title="My Stock" titleButton="Shop Now" icon={<ShopIcon />}>
              <StockCard />
            </Card>
          ) : (
            <Card
              Title="My Stock"
              titleButton="Shop Now"
              imageBottom="/office.svg"
              altImage="My Stock"
              icon={<ShopIcon />}
              paragraph="You dont't have any items."
              className="h-full"
            />
          )}
          <Card Title="Notifications">
            <section className="  h-full flex flex-col justify-center items-center">
              <h1 className="flex  items-center font-montserrat text-2xl font-bold text-black  gap-2">
                Coming Soon!
                <NotificationIcon />
              </h1>
              <p className="font-inter text-sm text-dark-grey mb-[1.5rem] mt-[1rem]">
                We`re excited to reveal that the Firstplug notifications are
                coming soon!
              </p>
            </section>
          </Card>
        </section>
      </div>
    </PageLayout>
  );
});
