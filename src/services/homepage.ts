import { IHeroPostRes } from "@/types/homepage";

const HomePageService = {
  HandlePost: async (title: string, buttonUrl: string, image: File) => {
    const formData = new FormData();

    formData.append("title", title);
    formData.append("buttonUrl", buttonUrl);
    formData.append("image", image);

    const res = await fetch("/api/platform/homepage/hero-ui", {
      method: "POST",
      credentials: "include",
      body: formData,
    });

    const data = (await res.json()) as IHeroPostRes;

    return data;
  },
};

export default HomePageService;
