import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
  githubLink?: string;
  color: string;
}

function ProjectCard({
  title,
  description,
  image,
  link,
  githubLink,
  color,
}: ProjectCardProps) {
  let cardStyles = "";
  let buttonStyles = "";
  let githubButtonStyles = "";
  switch (color) {
    case "primary":
      cardStyles = "border-l-[0.5rem] border-l-primary";
      buttonStyles =
        "bg-primary text-primary-foreground hover:bg-primary relative after:rounded-[var(--radius)] after:shadow-[0_0_1rem_hsl(var(--primary))] after:opacity-0 after:transition-opacity after:duration-200 after:content-[''] after:absolute after:h-full after:w-full hover:after:opacity-100";
      githubButtonStyles =
        "hover:bg-primary/30 relative after:rounded-[var(--radius)] after:shadow-[0_0_1rem_hsl(var(--primary))] after:opacity-0 after:transition-opacity after:duration-200 after:content-[''] after:absolute after:h-full after:w-full hover:after:opacity-100";
      break;
    case "secondary":
      cardStyles = "border-l-[0.5rem] border-l-secondary";
      buttonStyles =
        "bg-secondary text-secondary-foreground hover:bg-secondary relative after:rounded-[var(--radius)] after:shadow-[0_0_1rem_hsl(var(--secondary))] after:opacity-0 after:transition-opacity after:duration-200 after:content-[''] after:absolute after:h-full after:w-full hover:after:opacity-100";
      githubButtonStyles =
        "hover:bg-secondary/50 relative after:rounded-[var(--radius)] after:shadow-[0_0_1rem_hsl(var(--secondary))] after:opacity-0 after:transition-opacity after:duration-200 after:content-[''] after:absolute after:h-full after:w-full hover:after:opacity-100";
      break;
    case "accent":
      cardStyles = "border-l-[0.5rem] border-l-accent";
      buttonStyles =
        "bg-accent text-accent-foreground hover:bg-accent relative after:rounded-[var(--radius)] after:shadow-[0_0_1rem_hsl(var(--accent))] after:opacity-0 after:transition-opacity after:duration-200 after:content-[''] after:absolute after:h-full after:w-full hover:after:opacity-100";
      githubButtonStyles =
        "hover:bg-accent/50 relative after:rounded-[var(--radius)] after:shadow-[0_0_1rem_hsl(var(--accent))] after:opacity-0 after:transition-opacity after:duration-200 after:content-[''] after:absolute after:h-full after:w-full hover:after:opacity-100";
      break;
  }
  return (
    <Card className={cardStyles}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image src={image} alt={"Image of " + title} />
      </CardContent>
      <CardFooter className="flex flex-row gap-4 justify-between items-center flex-wrap">
        <Link href={link} passHref>
          <Button variant="default" size="sm" className={buttonStyles}>
            View Project
          </Button>
        </Link>
        {githubLink !== undefined ? (
          <Link href={githubLink} passHref>
            <Button variant="outline" size="sm" className={githubButtonStyles}>
              View on GitHub
            </Button>
          </Link>
        ) : null}
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
