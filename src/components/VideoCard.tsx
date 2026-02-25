"use client"

type Props = {
  video: any
  onClick: () => void
}

export default function VideoCard({ video, onClick }: Props) {
  const videoId = video.youtubeUrl.split("v=")[1]

  return (
    <div
      onClick={onClick}
      className="bg-transparent/10 backdrop-blur-sm p-4 rounded-xl cursor-pointer hover:scale-105 transition-all border border-gray-800 hover:shadow-[0_0_20px_#00F5FF]"
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        className="rounded-lg"
      />
      <h2 className="text-xl mt-3 text-cyan-400">{video.title}</h2>
      <p className="text-sm text-gray-400 mt-2">
        <strong>Técnica:</strong> {video.tecnica}
      </p>
      <p className="text-sm text-gray-400">
        <strong>Ideal para:</strong> {video.idealPara}
      </p>
      <p className="text-sm text-gray-400">
        <strong>Colores:</strong> {video.colores}
      </p>
    </div>
  )
}