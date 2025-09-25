import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function UploadBtn() {
  return (
    <>
      <Dialog>
        <DialogTrigger
        className="bg-[var(--dark)] text-white h-10 px-2 rounded-lg hover:bg-[var(--semiDark)] cursor-pointer "
        >Upload File</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.  <br />
              <button className="bg-zinc-200 p-2 mt-3 rounded-lg cursor-pointer">Upload Now</button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default UploadBtn;
