import { render } from "@testing-library/react";
import Movie from "../../../components/Movie";

describe("Counter component", () => {
  test("Mock movie with image", () => {
    const mockMovie = {
      adult: false,
      backdrop_path: "",
      genre_ids: [0],
      id: 1,
      original_language: "es",
      original_title: "Original title",
      overview: "",
      popularity: 0,
      poster_path: "path.jpeg",
      release_date: "2022/12/12",
      title: "Original title",
      video: false,
      vote_average: 0,
      vote_count: 0,
    };
    const { getByTestId } = render(<Movie movie={mockMovie} />);
    const image = getByTestId("image");
    expect(image.getAttribute("src")).toBe(
      "https://image.tmdb.org/t/p/w300/path.jpeg"
    );
    const title = getByTestId("title");
    expect(title.textContent).toBe("Original title");
    const releaseDate = getByTestId("release-date");
    expect(releaseDate.textContent).toBe("2022");
  });
  it("Mock movie with no Image", () => {
    const mockMovie = {
      adult: false,
      backdrop_path: "",
      genre_ids: [0],
      id: 1,
      original_language: "es",
      original_title: "Original title",
      overview: "",
      popularity: 0,
      poster_path: "",
      release_date: "2022/12/12",
      title: "Original title",
      video: false,
      vote_average: 0,
      vote_count: 0,
    };
    const { getByTestId } = render(<Movie movie={mockMovie} />);
    const noImage = getByTestId("no-image");
    expect(noImage.textContent).toBe("Imagen no disponible");
    const title = getByTestId("title");
    expect(title.textContent).toBe("Original title");
    const releaseDate = getByTestId("release-date");
    expect(releaseDate.textContent).toBe("2022");
  });
});
