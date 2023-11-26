"use client";

import toast from "react-hot-toast";

import { UploadDropzone } from "@/lib/uploadthing";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import { z } from "zod";

interface FileUploadProps {
  onChange: (url?: string) => void;
  endpoint: keyof typeof ourFileRouter;
}

const formSchema = z.object({
  imageUrl: z.string().min(1, {
    message: "Image is required"
  }),
});

export const FileUpload = ({ onChange, endpoint }: FileUploadProps) => {
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        console.log("client upload");
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        console.log("upload error", error?.message);
        toast.error(`${error?.message}`);
      }}
    />
  );
};
