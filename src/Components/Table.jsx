import { useState } from "react";
import Navbar from "./Navbar";

const projectsData = [
  {
    id: 1,
    title: "Online travel app design",
    description:
      "User interface and user experience design for online travel application",
    status: "CLOSED",
    category: {
      id: 1,
      title: "UI/UX",
      englishTitle: "design-ui/ux",
    },
    budget: 10000,
    tags: ["Ui/UX", "Figma"],
    deadline: "2023-12-23T12:55:48.740Z",
    createdAt: "2023-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  {
    id: 2,
    title: "E-commerce website development",
    description: "A complete e-commerce site with an admin panel",
    status: "OPEN",
    category: {
      id: 2,
      title: "Web programming",
      englishTitle: "web development",
    },
    budget: 50000,
    tags: ["React", "Nodejs", "online shop"],
    deadline: "2023-12-23T12:55:48.740Z",
    createdAt: "2023-09-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  {
    id: 3,
    title: "Creat Cover For Example",
    description: "A complete Cover for my web for example",
    status: "OPEN",
    category: {
      id: 3,
      title: "Desgin",
      englishTitle: "Creator-Cover",
    },
    budget: 100000,
    tags: ["Design", "Photoshop"],
    deadline: "2023-12-23T12:55:48.740Z",
    createdAt: "2025-09-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
];

function Table() {
  const [projects, setProjects] = useState(projectsData);

  const handleSort = (sortType) => {
    const sortedProjects = [...projects].sort((a, b) => {
      if (sortType === "oldest") {
        return new Date(a.createdAt) - new Date(b.createdAt);
      } else if (sortType === "newest") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
      return 0;
    });

    setProjects(sortedProjects);
  };

  const handleFilter = (category) => {
    if (category === "") {
      setProjects(projectsData);
    } else {
      const filteredProjects = projectsData.filter((project) =>
        project.tags.includes(category),
      );
      setProjects(filteredProjects);
    }
  };

  const handleStatusFilter = (status) => {
    if (status === "ALL") {
      setProjects(projectsData);
    } else {
      const filteredProjects = projectsData.filter(
        (project) => project.status === status,
      );
      setProjects(filteredProjects);
    }
  };
  return (
    <div className="table-container">
      <Navbar
        onFilter={handleFilter}
        onSort={handleSort}
        onStatusFilter={handleStatusFilter}
      />
      <div className="sm:rounded-lg relative overflow-x-auto shadow-md">
        <table className="rtl:text-right dark:text-neutral-400 text-neutral-500 w-full text-sm text-left">
          <thead className="bg-neutral-50 dark:bg-neutral-700 dark:text-neutral-400 text-neutral-700 text-xs uppercase">
            <tr>
              <th scope="col" className="w-fit px-6 py-4">
                Num
              </th>
              <th scope="col" className="w-fit px-2 py-4">
                Project title
              </th>
              <th scope="col" className="w-fit px-2 py-4">
                Budget
              </th>
              <th scope="col" className="w-fit px-2 py-4">
                Deadline
              </th>
              <th scope="col" className="w-fit px-2 py-4">
                Status
              </th>
              <th scope="col" className="w-fit px-2 py-4">
                Category
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr
                key={project.id}
                className="dark:bg-neutral-800 dark:border-neutral-700 border-neutral-200 bg-white border-b"
              >
                <th
                  scope="row"
                  className="whitespace-nowrap dark:text-white text-neutral-900 w-fit px-9 py-4 font-medium"
                >
                  {project.id}
                </th>
                <th
                  scope="row"
                  className="whitespace-nowrap dark:text-white text-neutral-900 w-fit px-2 py-4 font-medium"
                >
                  {project.title}
                </th>
                <td className="w-fit px-2 py-4">{project.budget}</td>
                <td className="w-fit px-2 py-4">
                  {new Date(project.deadline).toLocaleDateString()}
                </td>
                <td className="w-fit px-2 py-4">{project.status}</td>
                <td className="w-fit px-2 py-4">{project.category.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
