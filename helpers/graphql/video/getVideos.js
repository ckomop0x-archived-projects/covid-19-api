import { videos } from "../../../data/videos";

export const getVideos = () => new Promise(resolve => resolve(videos));
