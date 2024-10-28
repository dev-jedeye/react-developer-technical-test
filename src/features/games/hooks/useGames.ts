import { Games } from "@/pages/api/games";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";

export const useGames = () => {
  const router = useRouter();
  const category = router.query.category as string | undefined;

  const { data, isLoading } = useQuery({
    queryKey: ["get-games", category],
    refetchInterval: 1000,
    queryFn: async () => {
      let url = "/api/games";

      if (category) {
        url += `?category=${category}`;
      } else {
        url += `?category=top`;
      }

      const res = await axios.get(url);
      const datas = res.data as Games[];

      return datas;
    },
  });

  const games = React.useMemo(() => {
    if (!data) return [];

    return data as Games[];
  }, [data]);

  return { games, isLoading };
};
