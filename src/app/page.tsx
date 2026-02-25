"use client"

import { useEffect, useState } from "react"
import VideoCard from "@/components/VideoCard"
import VideoModal from "@/components/VideoModal"
import Image from "next/image"

export default function Home() {
  const [videos, setVideos] = useState([])
  const [selected, setSelected] = useState<any>(null)

  useEffect(() => {
    fetch("/api/videos")
      .then(res => res.json())
      .then(data => setVideos(data))
  }, [])

  return (
    <main className="relative z-10 px-6 md:px-12 pt-6 pb-10">

      {/* LOGO */}
      <div className="flex justify-center mb-4">
        <Image
          src="/logo-insomniak.png"
          alt="Insomniak Logo"
          width={500}
          height={500}
          className="w-[460px] md:w-[520px] drop-shadow-[0_0_30px_#00F5FF]"
        />
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-6">
        {videos.map((video: any) => (
          <VideoCard
            key={video.id}
            video={video}
            onClick={() => setSelected(video)}
          />
        ))}
      </div>

      {selected && (
        <VideoModal
          video={selected}
          onClose={() => setSelected(null)}
        />
      )}

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/549XXXXXXXXXX"
        target="_blank"
        className="fixed bottom-6 right-6 bg-gradient-to-r from-cyan-400 to-pink-500 p-4 rounded-full shadow-[0_0_20px_#00F5FF] hover:scale-110 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          width="28"
          height="28"
        >
          <path d="M12.04 2C6.55 2 2.04 6.5 2.04 12c0 1.98.58 3.82 1.57 5.38L2 22l4.76-1.56A9.94 9.94 0 0012.04 22c5.49 0 10-4.5 10-10S17.53 2 12.04 2zm0 18.18c-1.7 0-3.3-.45-4.69-1.24l-.34-.2-2.83.93.93-2.76-.22-.36A8.08 8.08 0 014 12c0-4.44 3.6-8.04 8.04-8.04S20.08 7.56 20.08 12s-3.6 8.18-8.04 8.18zm4.44-6.13c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.42-1.34-1.66-.14-.24-.02-.36.1-.48.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.42-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.64.58.26 1.04.42 1.4.54.58.18 1.1.16 1.52.1.46-.06 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
        </svg>
      </a>

    </main>
  )
}