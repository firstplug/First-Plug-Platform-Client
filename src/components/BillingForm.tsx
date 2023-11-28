import { FormInput, Card } from "./";
interface Props {
  handleInput: (prop: string, value: string) => void;
}
export const BillingForm = function ({ handleInput }: Props) {
  return (
    <Card Title="Billing Information" className="flex flex-col gap-4 px-8 pb-8">
      <div className="flex gap-4">
        <div className="w-1/4 flex flex-col gap-4">
          <FormInput
            type="text"
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
        </div>
        <div className="w-1/4 flex flex-col gap-4">
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
        </div>
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
    </Card>
  );
};
