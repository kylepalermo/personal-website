import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  color: string;
}

function ProjectCard({
  title,
  description,
  image,
  link,
  color,
}: ProjectCardProps) {
  let cardStyles = "";
  let buttonStyles = "";
  switch (color) {
    case "primary":
      cardStyles = "border-l-[0.5rem] border-l-primary";
      buttonStyles = "bg-primary text-primary-foreground hover:bg-primary relative after:rounded-[var(--radius)] after:shadow-[0_0_1rem_hsl(var(--primary))] after:opacity-0 after:transition-opacity after:duration-200 after:content-[''] after:absolute after:h-full after:w-full hover:after:opacity-100";
      break;
    case "secondary":
      cardStyles = "border-l-[0.5rem] border-l-secondary";
      buttonStyles = "bg-secondary text-secondary-foreground hover:bg-secondary relative after:rounded-[var(--radius)] after:shadow-[0_0_1rem_hsl(var(--secondary))] after:opacity-0 after:transition-opacity after:duration-200 after:content-[''] after:absolute after:h-full after:w-full hover:after:opacity-100";
      break;
    case "accent":
      cardStyles = "border-l-[0.5rem] border-l-accent";
      buttonStyles = "bg-accent text-accent-foreground hover:bg-accent relative after:rounded-[var(--radius)] after:shadow-[0_0_1rem_hsl(var(--accent))] after:opacity-0 after:transition-opacity after:duration-200 after:content-[''] after:absolute after:h-full after:w-full hover:after:opacity-100";
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
      <CardFooter>
        <Link href={link} passHref>
          <Button variant="default" size="sm" className={buttonStyles}>
            View Project
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
