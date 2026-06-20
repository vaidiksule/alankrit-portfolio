import { siteContent, getSectionFolderUrl } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VideoFrame } from "@/components/ui/VideoFrame";

export function WorkGrid() {
  const { portfolioSections } = siteContent;

  return (
    <section id="work" className="bg-surface-elevated px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected Work"
          description="Featured edits from each category. Play the preview inline, or open the full folder on Google Drive."
        />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
          {portfolioSections.map((section, i) => (
            <VideoFrame
              key={section.id}
              title={section.label}
              href={getSectionFolderUrl(section)}
              previewFileId={section.previewFileId}
              thumbnailFallback={section.thumbnailFallback}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
