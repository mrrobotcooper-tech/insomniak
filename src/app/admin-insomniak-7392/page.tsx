"use client"

import { useEffect, useState } from "react"

export default function Admin() {
  const [videos, setVideos] = useState<any[]>([])
  const [form, setForm] = useState({
    title: "",
    youtubeUrl: "",
    tecnica: "",
    idealPara: "",
    colores: ""
  })

  // 🔥 Placeholders personalizados
  const placeholders: Record<string, string> = {
    title: "Título",
    youtubeUrl: "Url Youtube",
    tecnica: "Técnica",
    idealPara: "Ideal Para",
    colores: "Colores"
  }

  const loadVideos = () => {
    fetch("/api/videos")
      .then(res => res.json())
      .then(data => setVideos(data))
  }

  useEffect(() => {
    loadVideos()
  }, [])

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    await fetch("/api/videos", {
      method: "POST",
      body: JSON.stringify(form)
    })
    setForm({
      title: "",
      youtubeUrl: "",
      tecnica: "",
      idealPara: "",
      colores: ""
    })
    loadVideos()
  }

  const handleDelete = async (id: string) => {
    await fetch("/api/videos", {
      method: "DELETE",
      body: JSON.stringify({ id })
    })
    loadVideos()
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl mb-6 text-cyan-400">
        Admin Insomniak
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4 mb-10">
        {Object.keys(form).map(key => (
          <input
            key={key}
            placeholder={placeholders[key]}
            value={(form as any)[key]}
            onChange={e =>
              setForm({ ...form, [key]: e.target.value })
            }
            className="w-full p-2 bg-gray-900 border border-gray-700 rounded 
                       focus:border-cyan-400 
                       focus:shadow-[0_0_10px_#00F5FF] 
                       outline-none transition-all"
          />
        ))}

        <button
          type="submit"
          className="bg-cyan-500 px-4 py-2 rounded 
                     hover:bg-cyan-400 
                     transition-all"
        >
          Agregar Video
        </button>
      </form>

      {videos.map((video: any) => (
        <div
          key={video.id}
          className="flex justify-between mb-2 border-b border-gray-800 pb-2"
        >
          <span>{video.title}</span>
          <button
            onClick={() => handleDelete(video.id)}
            className="text-red-500 hover:text-red-400 transition-all"
          >
            Eliminar
          </button>
        </div>
      ))}
    </div>
  )
}