import { useEffect, useState } from "react";
import { fetchJobs } from "../api";

const Careers = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getJobs = async () => {
      const data = await fetchJobs();
      setJobs(data);
    };
    getJobs();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-blue-900 text-center mb-6">Careers</h1>

      {jobs.length === 0 ? (
        <p className="text-center text-gray-600">No job listings available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div key={job._id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-blue-800">{job.title}</h2>
              <p className="text-gray-600">{job.location}</p>
              <p className="text-gray-500">{job.description}</p>
              <a
                href={job.applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 mt-4 inline-block hover:underline"
              >
                Apply Now →
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Careers;
