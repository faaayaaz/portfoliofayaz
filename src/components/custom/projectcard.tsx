import React from "react";

export type Project = {
  id: string;
  title: string;
  description: string;
  image?: string; // 🔥 image is optional now
};

interface ProjectCardProps {
  project: Project;
  isAdmin: boolean;
  onProjectUpdate: (updatedProject: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isAdmin,
  onProjectUpdate,
}) => {
  return (
    <div className="rounded-lg shadow-lg p-4">
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded"
        />
      )}
      <h3 className="text-lg font-bold mt-2">{project.title}</h3>
      <p className="text-gray-600">{project.description}</p>
      {isAdmin && (
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => {
            const updatedProject = { ...project, title: project.title + " (Updated)" };
            onProjectUpdate(updatedProject);
          }}
        >
          Update
        </button>
      )}
    </div>
  );
};
