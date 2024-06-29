import { Button, LoaderSpinner } from "@/common";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useStore } from "@/models";
import {
  SETTINGS_ARRAY_KEYS,
  SettingsFormConfig,
  SettingsFormKeys,
  UserZod,
  UserZodSchema,
} from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormReturn, useForm } from "react-hook-form";

function SubForm({
  pepe,
  form,
}: {
  pepe: SettingsFormKeys;
  form: UseFormReturn;
}) {
  console.log({ pepe });
  const data = SettingsFormConfig[pepe];
  return (
    <FormField
      control={form.control}
      name={data?.name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{data?.label}</FormLabel>
          <FormControl>
            <Input placeholder={data?.placeholder} {...field} />
          </FormControl>
          <FormDescription>{data?.error}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default function SettingsForm() {
  const {
    user: { user },
  } = useStore();
  const form = useForm<UserZod>({
    resolver: zodResolver(UserZodSchema),
    defaultValues: {
      ...user,
    },
  });
  const onSubmit = (values: UserZod) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {SETTINGS_ARRAY_KEYS.map((k) => (
          <SubForm pepe={k} form={form} />
        ))}

        <section className="flex h-[10%] py-6 items-center justify-end border-t">
          <Button
            body="Cancel"
            variant="secondary"
            className="mr-[20px] w-[200px] h-[40px] rounded-lg"
          />
          <Button
            variant="primary"
            className="mr-[39px] w-[200px] h-[40px] rounded-lg"
            type="submit"
          >
            save
          </Button>
        </section>
      </form>
    </Form>
  );
}
