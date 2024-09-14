import { project_metadata_collection } from "@/lib/project-metadata";
import ProjectCard from "./project-card";

type ProjectListProps = {};

const ProjectList: React.FC<ProjectListProps> = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {Object.values(project_metadata_collection).map((post) => {
        console.log(post);
        return <ProjectCard key={post.slug} {...post} />;
      })}
    </div>
  );
};

export default ProjectList;
