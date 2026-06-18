import { siteContent } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VideoFrame } from "@/components/ui/VideoFrame";

export function WorkGrid() {
  const { projects } = siteContent;

  return (
    <section id="work" className="bg-surface-elevated px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected Work"
          description="A curated selection of edits across brand, fashion, fitness, and longform content. Links will connect to Instagram and Google Drive."
        />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
          {projects.map((project, i) => (
            <VideoFrame
              key={project.id}
              title={project.title}
              category={project.category}
              thumbnail={project.thumbnail}
              href={project.videoUrl}
              timecode={project.timecode}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
