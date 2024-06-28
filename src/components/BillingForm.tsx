"use client";
import { observer } from "mobx-react-lite";
import { FormInput, Card } from "./";
import { fields } from "./AddMember/JSON/shipmentdata.json";
import { useStore } from "@/models";
import { BarLoader } from "./Loader/BarLoader";
interface Props {
  handleInput: (prop: string, value: unknown) => void;
}
export var BillingForm = observer(function BillingForm({ handleInput }: Props) {
  const {
    user: { user },
  } = useStore();

  return user ? (
    <section className="w-full flex flex-col gap-5  border rounded-md p-4  ">
      <h2 className="text-xl font-montserrat font-bold text-black">
        Billing Inofrmation
      </h2>
      <div className="grid grid-cols-4 gap-4">
        <FormInput
          type="options"
          options={fields[0].options}
          prop="country"
          placeholder="Country"
          handleInput={handleInput}
          value={user.country}
          title="Country"
        />
        <FormInput
          placeholder="Apparment, Suite, etc."
          title="Apparment, Suite, etc."
          type="text"
          prop="appartment"
          value={user.apartment}
          handleInput={handleInput}
        />
        <FormInput
          placeholder="City"
          title="City"
          type="text"
          prop="city"
          value={user.city}
          handleInput={handleInput}
        />
        <FormInput
          placeholder="Address"
          title="Address"
          type="text"
          prop="address"
          value={user.address}
          handleInput={handleInput}
        />
        <FormInput
          placeholder="State"
          title="State"
          type="text"
          prop="state"
          value={user.state}
          handleInput={handleInput}
        />
        <FormInput
          placeholder="zip code"
          title="Zip Code"
          type="text"
          prop="zipCode"
          value={user.zipCode}
          handleInput={handleInput}
        />
      </div>
    </section>
  ) : (
    <BarLoader />
  );
});
