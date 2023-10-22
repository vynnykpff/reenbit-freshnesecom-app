import { useEffect, useState } from "react";

export const useMatchMedia = (query: string) => {
  const media = matchMedia(query);

  const [isMedia, setIsMedia] = useState<boolean>(media.matches);

  useEffect(() => {
    const handler = () => {
      setIsMedia(media.matches);
    };

    media.addEventListener("change", handler);

    return () => media.removeEventListener("change", handler);
  });

  return isMedia;
};
