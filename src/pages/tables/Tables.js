import React from "react";
import Topbar from "../../components/topbar/Topbar";
import AuthorTable from "../../components/author-table/AuthorTable";
import ProjectsTable from "../../components/projects-table/ProjectsTable";
import Footer from "../../components/footer/Footer";

export default function Tables() {
  return (
    <div>
      <Topbar title="Tables" />
      <AuthorTable />
      <ProjectsTable />
      <Footer />
    </div>
  );
}
