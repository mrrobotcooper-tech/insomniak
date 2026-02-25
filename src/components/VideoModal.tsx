"use client"

type Props = {
  video: any
  onClose: () => void
}

export default function VideoModal({ video, onClose }: Props) {
  const videoId = video.youtubeUrl.split("v=")[1]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <div className="relative w-[90%] md:w-[70%]">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-3xl"
        >
          ✕
        </button>
        <div className="relative w-full pb-[56.25%] rounded-lg overflow-hidden bg-black">
        <iframe
          className="w-full aspect-video rounded-xl"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          allowFullScreen
        />
        </div>
      </div>
    </div>
  )
}