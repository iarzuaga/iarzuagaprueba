import React, { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../context/movieContext";
import { useApi } from "../../hooks";
import "./index.css";

const Paginator = () => {
  const { info, setInfo, setLoading, query, setError } =
    useContext(MovieContext);
  const totalPages = info["total_pages"];
  const page = info["page"];
  const [pages, setPages] = useState<number[]>([]);
  const { getMovies } = useApi();

  const getPages = () => {
    const pageList: number[] = [];
    if (totalPages < 5) {
      for (let i = 0; i < totalPages + 1; i++) {
        pageList.push(i);
      }
    } else {
      const limit = page + 4 < totalPages ? page + 4 : totalPages;
      const start = page + 4 < totalPages ? page : totalPages - 4;

      for (let i = start; i < limit + 1; i++) {
        pageList.push(i);
      }
    }

    setPages(pageList);
  };
  const handleChangePage = async (page: number) => {
    setError(false);
    setLoading(true);
    const response = await getMovies(query, page);
    if (response) {
      setLoading(false);
      setInfo(response.data);
    } else {
      setError(true);
    }
  };
  useEffect(() => {
    getPages();
  }, [page, query]);
  useEffect(() => {
    getPages();
  }, []);
  return (
    <div className="paginator">
      <button
        className="paginator-button"
        onClick={() => handleChangePage(page - 1)}
        disabled={page === 1}
      >
        {"<"}
      </button>
      {pages.map((page) => {
        return (
          <button
            key={page}
            className="paginator-button"
            onClick={() => handleChangePage(page)}
          >
            {page}
          </button>
        );
      })}
      <button
        className="paginator-button"
        onClick={() => handleChangePage(page + 1)}
        disabled={page === totalPages}
      >
        {">"}
      </button>
    </div>
  );
};

export default Paginator;
