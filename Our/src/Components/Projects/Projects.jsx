import React, { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import axios from 'axios';
import { Document, Page, pdfjs } from 'react-pdf';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchProjects() {
    setIsLoading(true);
    try {
      const response = await axios.get('http://localhost:5555/projectwarehouse/');
      setProjects(response.data.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <>
          <SearchBar />

      <div className="container py-2">
        <h2>Our Projects</h2>
        <div className="row">
          {projects.map((project) => (
            <div key={project._id} className="col-md-3">
              <div className="project py-3 px-2">
                <Document file={project.pdf}>
                  <Page pageNumber={1} width={80} />
                </Document>
                <h3 className="h5">{project.ProjectName}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <ProjectsCards/> */}
    </>
  );
}
