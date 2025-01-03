import { useParams } from "react-router";

interface RouteParams {
  category?: string;
}

export function useRouteParams(): RouteParams {
  const { category } = useParams();

  return { category };
}
