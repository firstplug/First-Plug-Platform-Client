"use client";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import { AddStockCard, Button, CustomLink, DownloadIcon } from "@/common";
import Papa from "papaparse";
import { useStore } from "@/models";
import {
  CSVTeamplates,
  CsvInfo,
  Product,
  TeamMember,
  csvSquema,
} from "@/types";
import { CsvServices } from "@/services";
import { saveAs } from "file-saver";
const EMPTY_FILE_INFO: CsvInfo = {
  title: "",
  file: "",
  currentDate: "",
} as const;

export const LoadStock = function () {
  const [csvInfo, setCsvInfo] = useState(EMPTY_FILE_INFO);
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const {
    aside: { type },
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
        const prdoucts = parsedData.map((product) => ({
          ...product,
          stock: parseInt(product.stock),
        }));

        const { success, data } = csvSquema.safeParse({ prdoucts });

        if (success) {
          await CsvServices.bulkCreateProducts(data.prdoucts);

          clearCsvData();
          // TODO: add pretty alert
          return alert("csv Loaded succesfully");
        } else {
          throw new Error("error en el tipo de archivo");
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
          // TODO: add pretty alert
          return alert("csv Loaded succesfully");
        } else {
          throw new Error("Error en el tipo de archivos");
        }
      }
    } catch (error) {
      alert(error.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

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

  const onFileChangeHandler = (csvFile: File) => {
    setCsvFile(csvFile);

    Papa.parse(csvFile, {
      skipEmptyLines: true,
      header: true,
      complete: function () {
        const { name, size } = csvFile;
        setCsvInfo({
          title: name,
          file: `${(size / 1024).toFixed(2)}kb`,
          currentDate: new Date().toLocaleString(),
        });
      },
    });
  };

  const handleAttachFileClick = () => {
    if (csvFile) {
      Papa.parse(csvFile, {
        skipEmptyLines: true,
        header: true,
        complete: function (results: { data: Product[] | TeamMember[] }) {
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
            <div>
              <Button
                variant="text"
                className="rounded-md p-1"
                size="small"
                onClick={downloadTemplate}
              >
                <div className="text-xs flex items-center">
                  <DownloadIcon />
                  <p>Download Template</p>
                </div>
              </Button>
            </div>
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
