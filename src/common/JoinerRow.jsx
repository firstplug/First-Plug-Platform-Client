import Image from "next/image";
import photo from "../../public/employees/Photo-2.png";

export function Row({ joiner }) {
  return (
    <div className="border-b rounded-md border-border flex items-center gap-2 justify-between p-2 ">
      <div className="flex gap-2 ">
        <Image src={photo} className="w-[3rem] object-cover rounded-md" />
        <div>
          <h2 className="text-black font-bold">
            {joiner.name} {joiner.lastname}
          </h2>
          <div className="flex gap-2 justify-start">
            <span className="font-medium text-dark-grey">Joining Date:</span>
            <span className=" text-dark-grey">{joiner.date}</span>
          </div>
        </div>
      </div>
      <div>
        <span className="bg-red-200 p-[.5rem] rounded-md">
          {joiner.jobPosition}
        </span>
      </div>
    </div>
  );
}
