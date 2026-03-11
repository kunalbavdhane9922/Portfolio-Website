import { useParams, Navigate } from 'react-router-dom';
import { projects } from '../data/projects';
import CaseStudyLayout from '../components/CaseStudyLayout';

export default function CaseStudy() {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return <Navigate to="/projects" replace />;
    }

    return <CaseStudyLayout project={project} />;
}
