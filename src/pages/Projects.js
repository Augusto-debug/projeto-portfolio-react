import { useState, useEffect } from 'react';
import List from '../components/List';
import Link from '../components/Link';
import './Projects.css';

function Projects({userName}) {

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetcProjects = async () => {
            const data = await fetch(`https://api.github.com/users/${userName}/repos`)
            const result = await data.json();

            if (result) {
                setProjects(result);
                setLoading(false);
            }
        }
        fetcProjects();
    }, [userName]);

  return (
    <div className='Projects-container'>
        <h2>Projects</h2>
        {loading ? (
            <span>loading...</span>
    ) : (
        <div>
            <List items={projects.map((project) => ({
                field: project.name,
                value: <Link url={project.html_url} title={project.html_url} />
            }))}  />
        </div>
    )}
    </div>
  )
}

export default Projects;