"use client";
import Image from "next/image";
import React, { ChangeEvent, DragEvent, useState } from "react";
import { Card } from ".";
import { AddStockCard, AlertCheck, Button, IconX } from "@/common";
import Papa from "papaparse";
import { useStore } from "@/models";
import axios from "axios";
import { useToast } from "./ui/use-toast";

const EMPTY_FILE_INFO: CsvInfo = {
  title: "",
  file: "",
  currentDate: "",
} as const;

type CsvInfo = {
  title: string;
  file: string;
  currentDate: string;
};

const CSVUrls = {
  MyTeam: "/api/my-team",
  MyStock: "/api/my-stock",
} as const;

type CSVUrl = keyof typeof CSVUrls;

const CSVUrlsArray: CSVUrl[] = Object.keys(CSVUrls) as CSVUrl[];

export const LoadStock = function () {
  const [csvInfo, setCsvInfo] = useState(EMPTY_FILE_INFO);
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const {
    aside: { csvContext },
  } = useStore();

  const handleDeleteCard = () => {
    setCsvInfo(EMPTY_FILE_INFO);
  };

  const { title, file, currentDate } = csvInfo;

  const postCsvToDatabase = async (parsedData: unknown) => {
    setIsLoading(true);

    try {

      const apiUrl = CSVUrls[csvContext];

      const response = await axios.post(apiUrl, parsedData)
      setIsLoading(false);
      toast({
        title: "The file has been correctly uploaded.",
        variant: "success",
        action: <AlertCheck />,
        duration: 1500,
      });

    } catch (error) {
      console.error(error);
      toast({
        title: "The file hasn’t been correctly uploaded. Please verify it and try again.",
        variant: "destructive",
        action: (
          <div className="border border-error rounded-full p-1">
            <IconX className="text-error w-3" strokeWidth={2} />
          </div>
        ),
        duration: 1500,
      });
    } finally {
      setIsLoading(false);
    }

  };

  const onFileChangeHandler = (csvFile: File) => {
    setCsvFile(csvFile);

    Papa.parse(csvFile, {
      skipEmptyLines: true, //Delete empty fields
      header: true, //Parse CSV to JSON
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
  };

  const handleAttachFileClick = () => {
    csvFile ? postCsvToDatabase(csvFile) : console.log("No CSV file selected.");
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files.length > 0) {
      const csvFile = event.dataTransfer.files[0];
      onFileChangeHandler(csvFile);
    }
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const csvFile = event.target.files[0];
      onFileChangeHandler(csvFile);
    }
  };

  return (
    <div onDrop={handleDrop} onDragOver={handleDragOver} className="drop-area">
      <div className="flex flex-col gap-6">
        <Card className="border-dashed border h-60 flex flex-col gap-4 justify-center">
          <Image
            alt="folder icon"
            src="/svg/folder.svg"
            width={84}
            height={88}
            className="mt-[-20px]"
          />
          <p>Drag and drop your CSV file here or</p>
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
        </Card>
        {csvInfo.title && (
          <AddStockCard
            title={title}
            file={file}
            currentDate={currentDate}
            onDeleteClick={handleDeleteCard}
            isLoading={isLoading}
          />
        )}
      </div>

      <div className="fixed bottom-5 w-[85%] flex">
        <Button
          variant="primary"
          body="Attach File"
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
