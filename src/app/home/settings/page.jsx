import Image from "next/image";
import Card from "@/components/Card";
import Group from "../../../../public/svg/Group 133544.svg";

import Input from "@/common/Input";
import Layout from "@/common/Layout";
import CustomLink from "@/common/CustomLink";
import Button from "@/common/Button";
import { VisaIcon } from "@/common/Icons";

export default function page() {
  return (
    <Layout className="flex flex-col gap-6 overflow-auto pb-16">
      <div className="flex w-full gap-6">
        <Card Title="User" className="w-1/2 flex flex-col gap-5 px-8">
          <div className="flex gap-8">
            <div className="flex ">
              <Image src={Group} alt="empty image" height={180} width={180} />
            </div>

            <div className="w-3/4 flex flex-col gap-4">
              <Input title="Company Name" placeholder="Company Name" />
              <Input
                title="Contact Phone Number"
                placeholder="+54 11 11111111"
              />
            </div>
          </div>
        </Card>

        <Card Title="Access" className="w-1/2 flex flex-col gap-5">
          <Input title="Email Address" placeholder="user@workemail.com" />
          <div className="flex items-end justify-between">
            <Input className="w-3/4" title="Password" type="password" />
            <CustomLink href="#">Change Password</CustomLink>
          </div>
        </Card>
      </div>

      <Card
        Title="Billing Information"
        className="flex flex-col gap-4 px-8 pb-8"
      >
        <div className="flex gap-4">
          <div className="w-1/4 flex flex-col gap-4">
            <Input title="Country" />
            <Input title="Apparment, Suite, etc." />
          </div>
          <div className="w-1/4 flex flex-col gap-4">
            <Input title="City" />
            <Input title="Address" />
          </div>
          <Input title="State" className="w-1/4" />
          <Input title="Zip Code" className="w-1/4" />
        </div>
      </Card>

      <div className="flex gap-6">
        <Card
          Title="Plan"
          className="w-1/2 flex flex-col px-8 gap-4"
          titleButton={<CustomLink href="#">Upgrade plan</CustomLink>}
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <p className="font-bold text-md">Basic Plan</p>
                <span className="text-sm">Active</span>
              </div>
              <p className="font-medium text-md text-dark-grey">
                Our most popular plan for small teams
              </p>
            </div>
            <div className="flex flex-col items-end">
              <span className="font-bold text-xl">$23200</span>
              <p className="text-sm font-inter">per month</p>
            </div>
          </div>
        </Card>

        <Card
          Title="Payment Method"
          className="w-1/2 flex flex-col gap-4 px-8 pb-8"
          titleButton="edit"
        >
          <div className="flex items-center gap-2">
            <div className="border p-2 border-grey rounded-md">
              <VisaIcon />
            </div>
            <p>Visa ending in 2376</p>
            <div className="w-[1px] h-6 bg-border"></div>
            <p>Expires 12/27</p>
          </div>
        </Card>
      </div>

      <section className="absolute bottom-0 left-[259px] right-0 h-[88px] flex items-center justify-end bg-white shadow-lg">
        <Button
          body="Cancel"
          variant="secondary"
          className="mr-[20px] w-[200px] h-[40px] rounded-lg"
        />
        <Button
          body="Save"
          variant="primary"
          className="mr-[39px] w-[200px] h-[40px] rounded-lg"
        />
      </section>
    </Layout>
  );
}
