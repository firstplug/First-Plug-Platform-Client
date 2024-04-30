import { EmptyCard, EmptyCardLayout } from "@/common";
import { Navbar } from "@/components";

export default function SuccessRegister() {
  return (
    <>
      <Navbar title="logo" />

      <div className="flex flex-col justify-center items-center  h-[100vh] gap-8 mx-[40px] my-[32px] border border-boder rounded-lg shadow-md">
        <EmptyCardLayout>
          <EmptyCard type="registerok" />
        </EmptyCardLayout>
      </div>
    </>
  );
}
