import { BillingForm, CompanyForm, AccessForm } from "@/components";
import { Button } from "@/common";
import { Form } from "@/components/ui/form";
import { useStore } from "@/models";
import { UserZod, UserZodSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="h-full flex flex-col gap-2"
      >
        <div className="flex flex-col gap-4  h-[90%] max-h-[90%] overflow-y-auto">
          <div className="flex w-full gap-4 ">
            <CompanyForm form={form} />
            <AccessForm form={form} />
          </div>
          <BillingForm form={form} />
        </div>

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
