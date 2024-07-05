import { render } from "@testing-library/react";
import Movie from "../../../components/Movie";
import { renderHook } from "@testing-library/react";
import { useApi } from "../../../hooks";

describe("Counter component", () => {
  test("Get movie", async () => {
    const { result } = renderHook(() => useApi());
    const { getMovies } = result.current;
    const response = await getMovies("Shrek Forever After", 1);
    expect(response.status).toBe(200);
    expect(response.data.results).not.toStrictEqual([]);
    expect(response.data["total_results"]).toBe(1);
    expect(response.data["total_pages"]).toBe(1);
    expect(response.data["page"]).toBe(1);
    const { getByTestId } = render(<Movie movie={response.data.results[0]} />);
    const image = getByTestId("image");
    expect(image.getAttribute("src")).toBe(
      "https://image.tmdb.org/t/p/w300//6HrfPZtKcGmX2tUWW3cnciZTaSD.jpg"
    );
    const title = getByTestId("title");
    expect(title.textContent).toBe("Shrek Forever After");
    const releaseDate = getByTestId("release-date");
    expect(releaseDate.textContent).toBe("2010");
  });
});
