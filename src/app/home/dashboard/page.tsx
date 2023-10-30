import Layout from "@/common/Layout";
import Card from "@/components/Card";
import { ShopIcon, AddIcon } from "@/common/Icons";
import CustomLink from "@/common/CustomLink";

export default function Dashboard() {
  return (
    <Layout>
      <div className="flex flex-col gap-4 w-full h-full">
        <section className="flex-1 h-full">
          <CustomLink href="/home/dashboard/data">
            <Card
              Title="My Team"
              titleButton="Add Team Member"
              imageBottom="/girl.svg"
              altImage="My Team"
              icon={<AddIcon />}
              paragraph="You haven't loaded any employees yet."
              className="h-full"
            />
          </CustomLink>
        </section>
        <section className="flex-1 grid grid-cols-2 gap-4">
          <CustomLink href="/shop">
            <Card
              Title="My Stock"
              titleButton="Shop Now"
              imageBottom="/office.svg"
              altImage="My Stock"
              icon={<ShopIcon />}
              paragraph="You dont't have any items."
              className="h-full"
            />
          </CustomLink>
          <CustomLink href="/shop">
            <Card
              Title={"Notifications"}
              titleButton="Shop Now"
              imageBottom="/alert.svg"
              altImage="Notifications"
              icon={<ShopIcon />}
              paragraph="You dont't have any orders."
              className="h-full"
            />
          </CustomLink>
        </section>
      </div>
    </Layout>
  );
}
