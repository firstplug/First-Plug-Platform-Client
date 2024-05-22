"use client";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import { AddStockCard, Button } from "@/common";
import Papa from "papaparse";
import { useStore } from "@/models";
import {
  CsvInfo,
  CsvProduct,
  PrdouctModelZod,
  Product,
  TeamMember,
  csvFileSquema,
  csvProductModel,
  csvSquema,
} from "@/types";
import { CsvServices, ProductServices } from "@/services";
import { isProductCompleted, parseProduct } from "@/utils";
import { useToast } from "./ui/use-toast";
import { DownloadStock } from "./Download";
const EMPTY_FILE_INFO: CsvInfo = {
  title: "",
  file: "",
  currentDate: "",
} as const;

export const LoadAside = function () {
  const [csvInfo, setCsvInfo] = useState(EMPTY_FILE_INFO);
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const {
    aside: { type, setAside },
    products: { setTable },
  } = useStore();

  const clearCsvData = () => {
    setCsvInfo(EMPTY_FILE_INFO);
    setCsvFile(null);
  };

  const { title, file, currentDate } = csvInfo;

  const postCsvToDatabase = async (parsedData) => {
    setIsLoading(true);
    try {
      if (type === "LoadStock") {
        const filteredData = parsedData.filter((prod) => prod["category*"]);
        const prdoucts = filteredData.map((product) => ({
          ...product,
          acquisitionDate: product.acquisitionDate
            ? new Date(product.acquisitionDate).toISOString()
            : product.acquisitionDate,
        }));

        const parsedProducts: PrdouctModelZod = prdoucts.map((product) =>
          parseProduct(product)
        );

        const { success, data } = csvSquema.safeParse({
          prdoucts: parsedProducts,
        });

        if (success) {
          await CsvServices.bulkCreateProducts(data.prdoucts);
          const prodcuts = await ProductServices.getTableFormat();
          setTable(prodcuts);
          clearCsvData();
          setAside(undefined);
          return toast({
            title: "The file has been correctly uploaded.   ✅ ",
            variant: "success",
            duration: 1500,
          });
        } else {
          toast({
            title:
              "The uploaded file is not correct. Please verify it and try again.  ",
            variant: "destructive",
            duration: 1500,
          });
        }
      }

      if (type === "LoadMembers") {
        const members = parsedData.map((member) => {
          return {
            ...member,
            dateOfBirth: new Date(member.dateOfBirth).toISOString(),
            joiningDate: new Date(member.joiningDate).toISOString(),
            teams: member.teams.split(","),
          };
        });
        const { success, data } = csvSquema.safeParse({ members });

        if (success) {
          await CsvServices.bulkCreateTeams(data.members);

          clearCsvData();
          return toast({
            title: "The file has been correctly uploaded.   ✅ ",
            variant: "success",
            duration: 1500,
          });
        } else {
          toast({
            title:
              "The uploaded file is not correct. Please verify it and try again.  ",
            variant: "destructive",
            duration: 1500,
          });
        }
      }
    } catch (error) {
      return toast({
        title:
          "The uploaded file is not correct. Please verify it and try again.  ",
        variant: "destructive",
        duration: 1500,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const onFileChangeHandler = (csvFile: File) => {
    Papa.parse(csvFile, {
      skipEmptyLines: true,
      header: true,
      complete: function (results) {
        const fileData: CsvProduct[] = results.data.filter((p) =>
          isProductCompleted(p)
        );
        const { name, size } = csvFile;
        const { success } = csvFileSquema.safeParse(fileData);

        if (success) {
          setCsvFile(csvFile);
          setCsvInfo({
            title: name,
            file: `${(size / 1024).toFixed(2)}kb`,
            currentDate: new Date().toLocaleString(),
          });
        } else {
          setCsvFile(null);
          toast({
            title:
              "The uploaded file is not correct. Please verify it and try again.  ",
            variant: "destructive",
            duration: 1500,
          });
        }
      },
    });
  };

  const handleAttachFileClick = () => {
    if (csvFile) {
      Papa.parse(csvFile, {
        skipEmptyLines: true,
        header: true,
        complete: function (results) {
          const { name, size } = csvFile;
          setCsvInfo({
            title: name,
            file: `${(size / 1024).toFixed(2)}kb`,
            currentDate: new Date().toLocaleString(),
          });
          postCsvToDatabase(results.data);
        },
      });
    }
  };

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const csvFile = event.target.files[0];
      onFileChangeHandler(csvFile);
    }
  };

  return (
    <div className="drop-area">
      <div className="flex flex-col gap-6">
        <div className=" flex flex-col gap-2 justify-center items-start p-4 rounded-md border-dashed border-2 font-inter  ">
          <div className="relative h-20 aspect-square ">
            <Image alt="folder icon" src="/svg/folder.svg" fill />
          </div>
          <p>Select a CSV file from your PC</p>
          <section className="flex  gap-2 items-center justify-between w-full">
            <div>
              <label
                htmlFor="csvFileSelector"
                className="cursor-pointer text-blue-500"
              >
                <h2 className="text-blue font-lg font-bold font-sans">
                  Select a File
                </h2>
              </label>
              <input
                type="file"
                id="csvFileSelector"
                accept=".csv"
                className="hidden"
                onChange={handleFileSelect}
              />
            </div>

            <DownloadStock />
          </section>
        </div>
        {csvInfo.title && (
          <AddStockCard
            title={title}
            file={file}
            currentDate={currentDate}
            onDeleteClick={clearCsvData}
            isLoading={isLoading}
          />
        )}
      </div>
      <div className="fixed bottom-5 w-[85%] flex">
        <Button
          disabled={csvFile === null}
          variant="primary"
          body="Upload File"
          size="big"
          className="p-3 rounded-md w-full"
          onClick={() => {
            handleAttachFileClick();
          }}
        />
      </div>
    </div>
  );
};
