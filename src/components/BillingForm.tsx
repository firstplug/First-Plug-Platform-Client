import { FormInput, Card } from "./";
// import fields from "./AddMember/JSON/shipmentdata.json";
interface Props {
  handleInput: (prop: string, value: unknown) => void;
}
export const BillingForm = function ({ handleInput }: Props) {
  return (
    <section className="w-full flex flex-col gap-5  border rounded-md p-4  ">
      <h2 className="text-xl font-montserrat font-bold text-black">
        Billing Inofrmation
      </h2>
      <div className="grid grid-cols-4 gap-4">
        <FormInput
          type="options"
          options={[]}
          prop="country"
          placeholder="Country"
          handleInput={handleInput}
          title="Country"
        />
        <FormInput
          placeholder="Apparment, Suite, etc."
          title="Apparment, Suite, etc."
          type="text"
          prop="appartment"
          handleInput={handleInput}
        />
        <FormInput
          placeholder="City"
          title="City"
          type="text"
          prop="city"
          handleInput={handleInput}
        />
        <FormInput
          placeholder="Address"
          title="Address"
          type="text"
          prop="address"
          handleInput={handleInput}
        />
        <FormInput
          placeholder="State"
          title="State"
          type="text"
          prop="state"
          handleInput={handleInput}
        />
        <FormInput
          placeholder="zip code"
          title="Zip Code"
          type="text"
          prop="zipCode"
          handleInput={handleInput}
        />
      </div>
    </section>
  );
};
