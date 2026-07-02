import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "hrtw38s2mc9a",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" });
      const projects = response.items.map((item) => {
        const {image , title , url} = item.fields
        const id = item.sys.id
        const img = image?.fields?.file?.url
        return {id , title , url , img}
      })
      setProjects(projects)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
    }
  };

  useEffect(() => {
    const fetchProjectsData = async () => {
      await getData();
    };
    fetchProjectsData();
  }, []);

  return {isLoading , projects}
};
