import { renderHook } from "@testing-library/react";
import { useApi } from "../../../hooks";

describe("Axios", () => {
  test("Check connection with api", async () => {
    const { result } = renderHook(() => useApi());
    const { getMovies } = result.current;
    const response = await getMovies("", 1);
    expect(response.status).toBe(200);
    expect(response.data.results).toStrictEqual([]);
    expect(response.data["total_results"]).toBe(0);
    expect(response.data["total_pages"]).toBe(1);
    expect(response.data["page"]).toBe(1);
  });
  test("Check specific movie", async () => {
    const { result } = renderHook(() => useApi());
    const { getMovies } = result.current;
    const response = await getMovies("Shrek Forever After", 1);
    expect(response.status).toBe(200);
    expect(response.data.results).not.toStrictEqual([]);
    expect(response.data["total_results"]).toBe(1);
    expect(response.data["total_pages"]).toBe(1);
    expect(response.data["page"]).toBe(1);
  });
  test("No movie", async () => {
    const { result } = renderHook(() => useApi());
    const { getMovies } = result.current;
    const response = await getMovies("Title not from movie", 1);
    expect(response.status).toBe(200);
    expect(response.data.results).toStrictEqual([]);
    expect(response.data["total_results"]).toBe(0);
    expect(response.data["total_pages"]).toBe(1);
    expect(response.data["page"]).toBe(1);
  });
  test("Check specific movie with no more than 1 page", async () => {
    const { result } = renderHook(() => useApi());
    const { getMovies } = result.current;
    const response = await getMovies("Title not from movie", 2);
    expect(response.status).toBe(200);
    expect(response.data.results).toStrictEqual([]);
    expect(response.data["total_results"]).toBe(0);
    expect(response.data["total_pages"]).toBe(1);
    expect(response.data["page"]).toBe(2);
  });
});
