import { videos } from "../../../data/videos";

export const createVideo = ({ title, duration, released }) => {
  const video = {
    id: new Buffer(title, 'utf8').toString('base64'),
    title,
    duration,
    released,
  };

  videos.push(video);

  return video;
};
