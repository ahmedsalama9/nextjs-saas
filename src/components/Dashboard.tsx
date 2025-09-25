import React from "react";
import UploadBtn from "./Upload";
import {
  FileText,
  FileImage,
  FileArchive,
  File,
  Download,
  Trash2,
  Eye, 
} from "lucide-react";

function DashboardCo() {
  const files = [
    {
      id: "1",
      name: "resume.pdf",
      url: "/uploads/resume.pdf",
      uploadStatus: "SUCCESS",
      size: "120 KB",
      updatedAt: "2025-09-21",
    },
    {
      id: "2",
      name: "report.docx",
      url: "/uploads/report.docx",
      uploadStatus: "PENDING",
      size: "450 KB",
      updatedAt: "2025-09-20",
    },
    {
      id: "3",
      name: "design.png",
      url: "/uploads/design.png",
      uploadStatus: "SUCCESS",
      size: "2.1 MB",
      updatedAt: "2025-09-19",
    },
    {
      id: "4",
      name: "archive.zip",
      url: "/uploads/archive.zip",
      uploadStatus: "SUCCESS",
      size: "5.6 MB",
      updatedAt: "2025-09-18",
    },
    {
      id: "5",
      name: "presentation.pptx",
      url: "/uploads/presentation.pptx",
      uploadStatus: "SUCCESS",
      size: "3.2 MB",
      updatedAt: "2025-09-17",
    },
    {
      id: "6",
      name: "spreadsheet.xlsx",
      url: "/uploads/spreadsheet.xlsx",
      uploadStatus: "FAILED",
      size: "780 KB",
      updatedAt: "2025-09-16",
    },
  ];

  const getFileIcon = (filename: string) => {
    const ext = filename.split(".").pop()?.toLowerCase();
    switch (ext) {
      case "pdf":
        return <FileText className="w-10 h-10 text-red-500" />;
      case "docx":
      case "doc":
        return <FileText className="w-10 h-10 text-blue-500" />;
      case "png":
      case "jpg":
      case "jpeg":
        return <FileImage className="w-10 h-10 text-green-500" />;
      case "zip":
      case "rar":
        return <FileArchive className="w-10 h-10 text-yellow-500" />;
      case "pptx":
        return <FileText className="w-10 h-10 text-orange-500" />;
      case "xlsx":
        return <FileText className="w-10 h-10 text-emerald-500" />;
      default:
        return <File className="w-10 h-10 text-gray-500" />;
    }
  };

  return (
    <main className="mx-auto max-w-7xl md:p-10">

      <div className="mt-8 flex flex-row items-center justify-between p-10">
        <h1 className="font-bold text-4xl">My Files</h1>
        <UploadBtn />
      </div>

  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
        {files.map((file) => (
          <div
            key={file.id}
            className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg rounded-2xl p-6 flex flex-col justify-between hover:scale-105 hover:shadow-purple-500/50 transition-transform duration-300"
          >
      
            <div className="flex items-center gap-4">
              {getFileIcon(file.name)}
              <div>
                <p className="font-semibold text-lg text-[var(--dark)]">
                  {file.name}
                </p>
                <p className="text-sm text-zinc-200">Size: {file.size}</p>
              </div>
            </div>

       
            <div className="mt-4 text-sm text-gray-400">
              <p>
                Status:{" "}
                <span className="font-medium text-[var(--general)]">
                  {file.uploadStatus}
                </span>
              </p>
              <p>Updated: {file.updatedAt}</p>
            </div>

            {/* Actions */}
            <div className="mt-5 flex justify-between">
              <a
                href={file.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--general)] hover:bg-purple-700 text-white transition"
              >
                <Download className="w-4 h-4" /> Download
              </a>
              <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--dark)] hover:bg-indigo-700 text-white transition">
                <Eye className="w-4 h-4" /> View
              </button>
              <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white transition">
                <Trash2 className="w-4 h-4" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default DashboardCo;
