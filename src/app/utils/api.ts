import { Api } from "../service/axios";

export interface Podcast {
  _id: string;
  name: string;
  slug: string;
  url: string;
  user: string;
  duration: number;
  createdAt: string;
  updatedAt: string;
}

interface GetAllPodcasts {
  data: Podcast[]
  message: string
}
export const getAllPodcasts = async () => {
  try {
    const res = await Api.get<GetAllPodcasts>(`/api/podcasts`);

    return res.data;
  } catch (error: any) {
    throw new Error(error ?? "Something went wrong");
  }
};
