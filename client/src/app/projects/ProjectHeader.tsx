import React, { useState } from "react";
import Header from "../conponents/Header";

type Props = {
  activeTab: string;
  isModalNewTaskOpen: boolean;
};

const ProjectHeader = ({ activeTab, isModalNewTaskOpen }: Props) => {
    const [isModalNewProjectOpen, setIsModalNewProjectOpen] = useState(false)
    return <div className="px-4 xl:px-6">
        <div className="pb-6 pt-6 lg:pb-4 lg:pt-8">
            <Header />
      </div>
  </div>;
};

export default ProjectHeader;
