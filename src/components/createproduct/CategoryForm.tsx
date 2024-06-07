"use client";
import { useFormContext, Controller } from "react-hook-form";
import { DropdownInputProductForm } from "../AddProduct/DropDownProductForm";
import { InputProductForm } from "../AddProduct/InputProductForm";
import { Category, Location } from "@/types";
import { observer } from "mobx-react-lite";

interface CategoryFormProps {
  categories: Category[];
  locations: Location[];
  members: { email: string; fullName: string }[];
  handleCategoryChange: (value: string) => void;
  handleAssignedMemberChange: (value: string) => void;
}

const CategoryForm: React.FC<CategoryFormProps> = ({
  categories,
  locations,
  members,
  handleCategoryChange,
  handleAssignedMemberChange,
}) => {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext();
  const assignedMember = watch("assignedMember");

  return (
    <div>
      <Controller
        name="category"
        control={control}
        render={({ field }) => (
          <div>
            <DropdownInputProductForm
              title="Category*"
              name="category"
              placeholder="Select a Category"
              options={categories}
              selectedOption={field.value}
              onChange={(value) => {
                field.onChange(value);
                handleCategoryChange(value);
              }}
            />
            {errors.category && (
              <span className="text-red-500">
                {errors.category.message as any}
              </span>
            )}
          </div>
        )}
      />

      <Controller
        name="assignedMember"
        control={control}
        render={({ field }) => (
          <div>
            <DropdownInputProductForm
              title="Assigned Member*"
              name="assignedMember"
              placeholder="Select A Member"
              options={["None", ...members.map((member) => member.fullName)]}
              selectedOption={field.value}
              onChange={(value) => {
                field.onChange(value);
                handleAssignedMemberChange(value);
              }}
            />
            {errors.assignedMember && (
              <span className="text-red-500">
                {errors.assignedMember.message as any}
              </span>
            )}
          </div>
        )}
      />

      {assignedMember === "None" || assignedMember === "" ? (
        <Controller
          name="location"
          control={control}
          defaultValue={undefined}
          render={({ field }) => (
            <div>
              <DropdownInputProductForm
                title="Location*"
                name="location"
                placeholder="Select Location"
                options={["Our office", "FP warehouse"]}
                selectedOption={field.value}
                onChange={field.onChange}
              />
              {errors.location && (
                <span className="text-red-500">
                  {errors.location.message as any}
                </span>
              )}
            </div>
          )}
        />
      ) : assignedMember ? (
        <Controller
          name="location"
          control={control}
          render={({ field }) => (
            <div>
              <InputProductForm
                title="Location*"
                type="text"
                name="location"
                placeholder="Select Location"
                value="Employee"
                readOnly
                className="cursor-not-allowed"
                onChange={field.onChange}
              />
              {errors.location && (
                <span className="text-red-500">
                  {errors.location.message as any}
                </span>
              )}
            </div>
          )}
        />
      ) : (
        <Controller
          name="location"
          control={control}
          render={({ field }) => (
            <div>
              <DropdownInputProductForm
                title="Location*"
                name="location"
                placeholder="Select Location"
                options={["Our office", "FP warehouse"]}
                selectedOption={field.value}
                onChange={field.onChange}
              />
              {errors.location && (
                <span className="text-red-500">
                  {errors.location.message as any}
                </span>
              )}
            </div>
          )}
        />
      )}

      <Controller
        name="acquisitionDate"
        control={control}
        render={({ field }) => (
          <InputProductForm
            title="Acquisition Date"
            name="acquisitionDate"
            type="date"
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="serialNumber"
        control={control}
        render={({ field }) => (
          <InputProductForm
            title="Serial Number"
            name="serialNumber"
            value={field.value}
            placeholder="Serial Number"
            onChange={field.onChange}
          />
        )}
      />
    </div>
  );
};

export default observer(CategoryForm);
