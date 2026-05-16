import axios from "axios";

const API_URL =
  "http://localhost:5000/api/projects";

export const createProject = async (
  projectData: any,
  token: string
) => {

  const response = await axios.post(
    API_URL,
    projectData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const getProjects = async (
  token: string
) => {

  const response = await axios.get(
    API_URL,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};