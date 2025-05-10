"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, Pause, Volume2, VolumeX, Maximize2, MoreVertical } from "lucide-react"

interface VideoCardProps {
  thumbnailSrc: string
  duration: string
  currentTime: string
}

export default function VideoCard({ thumbnailSrc, duration, currentTime }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  return (
    <div className="relative rounded-md overflow-hidden bg-neutral-900">
      <div className="relative aspect-video">
        <Image
          src={thumbnailSrc || "/api/placeholder?height=400&width=400"}
          alt="Video thumbnail"
          fill
          className="object-cover"
        />

        {/* Video Controls Overlay */}
        <div className="absolute inset-0 flex flex-col justify-between p-2">
          {/* Top Controls */}
          <div className="flex justify-end">
            {isPlaying ? (
              <button
                className="w-8 h-8 flex items-center justify-center bg-black/50 rounded-full"
                onClick={() => setIsPlaying(false)}
              >
                <Pause className="w-4 h-4" />
              </button>
            ) : (
              <button
                className="w-8 h-8 flex items-center justify-center bg-black/50 rounded-full"
                onClick={() => setIsPlaying(true)}
              >
                <Play className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Bottom Controls */}
          <div className="space-y-2">
            {/* Progress Bar */}
            <div className="w-full h-1 bg-white/30 rounded-full">
              <div className="h-full bg-white rounded-full" style={{ width: isPlaying ? "50%" : "0%" }}></div>
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {isPlaying ? (
                  <button className="w-8 h-8 flex items-center justify-center" onClick={() => setIsPlaying(false)}>
                    <Pause className="w-4 h-4" />
                  </button>
                ) : (
                  <button className="w-8 h-8 flex items-center justify-center" onClick={() => setIsPlaying(true)}>
                    <Play className="w-4 h-4" />
                  </button>
                )}

                <span className="text-xs">
                  {currentTime} / {duration}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button className="w-8 h-8 flex items-center justify-center" onClick={() => setIsMuted(!isMuted)}>
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>

                <button className="w-8 h-8 flex items-center justify-center">
                  <Maximize2 className="w-4 h-4" />
                </button>

                <button className="w-8 h-8 flex items-center justify-center">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
