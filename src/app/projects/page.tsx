import ProjectCard from "@/components/ProjectCard";
import nextImage from "../../../public/next.svg";

export default function Projects() {
  return (
    <main className="flex flex-col gap-4 p-4">
      <h1 className="text-4xl font-bold w-fit relative before:content-[''] before:absolute before:w-full before:h-2 before:bottom-0 before:left-0 before:bg-primary/50 before:z-[-1]">Projects</h1>
      <div className="flex flex-row gap-4 flex-wrap">
        <ProjectCard
          title="Project 1"
          description="Description 1"
          image={nextImage}
          link="https://www.google.com"
          color="primary"
        />
        <ProjectCard
          title="Project 2"
          description="Description 2"
          image={nextImage}
          link="https://www.google.com"
          color="secondary"
        />
        <ProjectCard
          title="Project 3"
          description="Description 3"
          image={nextImage}
          link="https://www.google.com"
          color="accent"
        />
      </div>
    </main>
  );
}
