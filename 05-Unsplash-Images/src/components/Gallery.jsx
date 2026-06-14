import { useQuery } from "@tanstack/react-query";
import { getAllPhotos } from "../utils/http";
import { useGlobalSearchContext } from "../context/searchContext";

const Gallery = () => {
  const { searchTerm } = useGlobalSearchContext();
  const {
    data: resData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["images" , {
      searchTerm 
    }],
    queryFn: () => getAllPhotos(searchTerm),
  });

  if (isLoading) {
    return (
      <section className="text-container">
        <h4>Loading...</h4>
      </section>
    );
  }
  if (isError) {
    return (
      <section className="text-container">
        <h4>There was an error...</h4>
      </section>
    );
  }

  const images = resData.data.results;
  if (!images.length) {
    return (
      <section className="text-container">
        <h4>No results found...</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {images.map((image) => {
        const url = image?.urls?.regular;
        const { id, alt_description } = image;
        return <img key={id} src={url} alt={alt_description} className="img" />;
      })}
    </section>
  );
};

export default Gallery;
