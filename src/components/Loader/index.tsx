import { useContext } from "react";
import { MovieContext } from "../../context/movieContext";
import "./index.css";

const Spinner = () => {
  const {loading} = useContext(MovieContext);
  return (loading &&
    <div className="loading-background">
      <div className="loading-container">
        <div className="loading-spinner">
          <div className="loading-spinner-inner" />
        </div>
        <div className="loading-title">Loading ...</div>
      </div>
    </div>
  );
};

export default Spinner;
