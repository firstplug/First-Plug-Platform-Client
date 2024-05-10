"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { saveAs } from "file-saver";
import Image from "next/image";
import { Button } from "../ui/button";
import { DownloadIcon } from "@/common";
export function DownloadStock() {
  const downloadTemplate = async () => {
    try {
      const filePath = "/excel/stock.xlsm";
      const response = await fetch(filePath);
      const blob = await response.blob();
      saveAs(blob, "stock.xlsm");
    } catch (error) {
      console.error("Error al descargar el archivo:", error);
    }
  };
  return (
    <Dialog>
      <DialogTrigger>
        <div className="bg- p-1 rounded-md px-4">
          <span className="font-bold text-blue">Download Template 🗃️</span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl   ">Atención 🫸</DialogTitle>
          <DialogTitle className="text-lg">
            Antes de abrir el archivo excel, se deben habilitar ✅ el uso de
            macros.
          </DialogTitle>
          <DialogDescription className="text-md   ">
            <div className="flex flex-col gap-4">
              <p className="text-lg font-medium">
                Para poder hacer uso de las macros siga los siguientes pasos
              </p>

              <ol className="pl-8 h-full text-lg">
                <li className="list-item list-decimal">
                  {" "}
                  Ir a la ubiacion 📂 del archivo
                </li>
                <li className="list-item list-decimal">
                  Clcik derecho sobre el archivo descargado {"( "}
                  <span className="font-medium"> 🗃️ stock.xlsm</span>
                  {" )"}
                </li>
                <li className="list-item list-decimal">
                  Abrir <span className="font-medium">properties 📃</span>{" "}
                </li>
                <li className="list-item list-decimal gap-2 ">
                  En la parte inferior figura un mensaje de{" "}
                  <span className="font-medium">Security:</span> se debe
                  presionar <span className="font-medium"> Unblock</span>
                  <Popover>
                    <PopoverTrigger className="text-blue underline mx-2">
                      Ver imagen
                    </PopoverTrigger>
                    <PopoverContent
                      className="bg-white"
                      side="right"
                      align="center"
                    >
                      <div className="relative h-[500px] w-[30vw] bg-white   flex justify-center m-auto ">
                        <Image
                          src={"/excelProperties.jpg"}
                          alt="stock firstplug"
                          fill
                          objectFit="contain"
                        />
                      </div>
                      .
                    </PopoverContent>
                  </Popover>
                </li>
              </ol>
              <Button
                className="rounded-md p-1 bg-blue text-white "
                onClick={downloadTemplate}
              >
                <div className="text-xs flex items-center">
                  <DownloadIcon />
                  <p>Download Template</p>
                </div>
              </Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
