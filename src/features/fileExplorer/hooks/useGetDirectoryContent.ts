import { useEffect, useState } from "react";

export default function useGetDirectoryContent(location: string) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    // check if data already exists in the store.
  });

  return [data, loading];
}
