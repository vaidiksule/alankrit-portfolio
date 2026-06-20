import type { PortfolioSection } from "./types";

export function driveFolderUrl(folderId: string): string {
  return `https://drive.google.com/drive/folders/${folderId}`;
}

export function driveFolderEmbedUrl(folderId: string): string {
  return `https://drive.google.com/embeddedfolderview?id=${folderId}#grid`;
}

export function driveFilePreviewUrl(fileId: string): string {
  return `https://drive.google.com/file/d/${fileId}/preview`;
}

export function driveFileViewUrl(fileId: string): string {
  return `https://drive.google.com/file/d/${fileId}/view`;
}

export function driveThumbnailUrl(fileId: string, size = "w1000"): string {
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=${size}`;
}

export function getSectionThumbnail(section: PortfolioSection): string {
  if (section.previewFileId) {
    return driveThumbnailUrl(section.previewFileId);
  }
  return section.thumbnailFallback;
}
