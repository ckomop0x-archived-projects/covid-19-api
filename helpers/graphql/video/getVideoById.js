import { videos } from "../../../data/videos";

export const getVideoById = id =>
  new Promise(resolve => {
    const [video] = videos.filter(video => video.id === id);

    resolve(video);
  });
