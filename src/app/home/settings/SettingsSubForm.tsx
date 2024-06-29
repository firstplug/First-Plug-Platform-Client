import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SettingsFormConfig, SettingsFormKeys } from "@/types";
import { UseFormReturn } from "react-hook-form";
export function SettingsSubForm({
  keyValue,
  form,
}: {
  keyValue: SettingsFormKeys;
  form: UseFormReturn;
}) {
  const data = SettingsFormConfig[keyValue];
  return (
    <FormField
      control={form.control}
      name={data?.name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{data?.label}</FormLabel>
          <FormControl>
            <Input
              placeholder={data?.placeholder}
              {...field}
              readOnly={data.readonly}
              className={`w-full  h-14 py-2 text-lg ${
                data.readonly
                  ? " rounded-xl border  text-black p-4 bg-disabled/50 select-none cursor-default  focus:outline-none"
                  : ""
              }`}
            />
          </FormControl>
          <FormDescription>{data?.subMessage}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
