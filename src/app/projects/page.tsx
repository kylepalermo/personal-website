import ProjectCard from "@/components/ProjectCard";
import nextImage from "../../../public/next.svg";
import connectFourImage from "../../../public/connect-four.png";

export default function Projects() {
  return (
    <main className="flex flex-col gap-4 p-4">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold w-fit relative before:content-[''] before:absolute before:w-full before:h-2 before:bottom-0 before:left-0 before:bg-primary/50 before:z-[-1]">
        Projects
      </h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <ProjectCard
          title="Connect Four"
          description="A simple connect four game app built with JavaFX. Includes multiple levels of custom AI. Saves have been disabled for the online version."
          image={connectFourImage}
          link="http://connectfour.kylepalermo.net"
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
