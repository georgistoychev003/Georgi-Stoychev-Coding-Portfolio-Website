import { useState, useEffect } from 'react';

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  homepage: string;
  language: string;
  updated_at: string;
}

const projectOrder = [
  'return-management-system',
  'internet-technology',
  'auction-site',
  '3d-print-scheduler',
  'trackmanager',
  'trimtime-beaty-business-portfolio'  // Updated to match exact repo name
];

export function useGitHubProjects() {
  const [projects, setProjects] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch('https://api.github.com/users/georgistoychev003/repos');
        if (!response.ok) throw new Error('Failed to fetch projects');
        const data = await response.json();
        
        // Filter out forks
        const filteredProjects = data.filter((repo: GitHubRepo) => !repo.fork);
        
        // Sort projects based on the custom order
        const sortedProjects = [...filteredProjects].sort((a: GitHubRepo, b: GitHubRepo) => {
          const indexA = projectOrder.indexOf(a.name.toLowerCase());
          const indexB = projectOrder.indexOf(b.name.toLowerCase());
          
          // If both projects are in the order list, sort by their position
          if (indexA !== -1 && indexB !== -1) {
            return indexA - indexB;
          }
          
          // If only one project is in the order list, prioritize it
          if (indexA !== -1) return -1;
          if (indexB !== -1) return 1;
          
          // For projects not in the order list, sort by update date
          return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
        });
        
        setProjects(sortedProjects);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch projects');
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return { projects, loading, error };
}