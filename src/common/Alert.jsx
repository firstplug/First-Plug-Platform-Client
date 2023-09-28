import { IconX, AlertCheck } from "./Icons";

export default function Alert({ title, msg }) {
  return (
    <article className=" bg-white font-sans grid items-center-8 rounded-lg shadow border-2 border-ligth-grey py-6 px-4 absolute ">
      <button className="items-end absolute right-5 top-5">
        <IconX />
      </button>

      <figure className="flex flex-col items-center w-2/4 m-auto">
        <AlertCheck className=" h-20 w-20 text-success" />
        <figcaption className="text-center">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="font-thin">{msg} </p>
        </figcaption>
      </figure>
    </article>
  );
}
