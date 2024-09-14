const VideoDemo = ({ href }: { href: string }) => {
  return (
    <iframe
      src={href}
      allow="autoplay; encrypted-media"
      allowFullScreen
      className="size-full aspect-video rounded-lg border"
    ></iframe>
  );
};

export default VideoDemo;
