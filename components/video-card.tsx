"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { Play, Pause, Volume2, VolumeX, Maximize2, MoreVertical } from "lucide-react"

interface VideoCardProps {
  thumbnailSrc: string
  videoSrc?: string
  duration: string
  currentTime: string
}

export default function VideoCard({ thumbnailSrc, videoSrc, duration, currentTime }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTimeDisplay, setCurrentTimeDisplay] = useState(currentTime)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100
      setProgress(progress)

      // Format current time as mm:ss
      const minutes = Math.floor(videoRef.current.currentTime / 60)
      const seconds = Math.floor(videoRef.current.currentTime % 60)
      setCurrentTimeDisplay(`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`)
    }
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const progressBar = e.currentTarget
      const clickPosition = e.clientX - progressBar.getBoundingClientRect().left
      const progressBarWidth = progressBar.clientWidth
      const seekTime = (clickPosition / progressBarWidth) * videoRef.current.duration

      videoRef.current.currentTime = seekTime
    }
  }

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        videoRef.current.requestFullscreen()
      }
    }
  }

  return (
    <div className="relative rounded-md overflow-hidden bg-neutral-900">
      <div className="relative aspect-video">
        {videoSrc ? (
          <video
            ref={videoRef}
            src={videoSrc}
            poster={thumbnailSrc}
            className="w-full h-full object-cover"
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => setIsPlaying(false)}
            muted={isMuted}
          />
        ) : (
          <Image
            src={thumbnailSrc || "/api/placeholder?height=400&width=400"}
            alt="Video thumbnail"
            fill
            className="object-cover"
          />
        )}

        {/* Video Controls Overlay */}
        <div className="absolute inset-0 flex flex-col justify-between p-2 bg-gradient-to-t from-black/70 to-transparent hover:from-black/50">
          {/* Top Controls */}
          <div className="flex justify-end">
            {isPlaying ? (
              <button
                className="w-8 h-8 flex items-center justify-center bg-black/50 rounded-full"
                onClick={togglePlay}
              >
                <Pause className="w-4 h-4" />
              </button>
            ) : (
              <button
                className="w-8 h-8 flex items-center justify-center bg-black/50 rounded-full"
                onClick={togglePlay}
              >
                <Play className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Bottom Controls */}
          <div className="space-y-2">
            {/* Progress Bar */}
            <div className="w-full h-1 bg-white/30 rounded-full cursor-pointer" onClick={handleProgressClick}>
              <div className="h-full bg-white rounded-full" style={{ width: `${progress}%` }}></div>
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {isPlaying ? (
                  <button className="w-8 h-8 flex items-center justify-center" onClick={togglePlay}>
                    <Pause className="w-4 h-4" />
                  </button>
                ) : (
                  <button className="w-8 h-8 flex items-center justify-center" onClick={togglePlay}>
                    <Play className="w-4 h-4" />
                  </button>
                )}

                <span className="text-xs">
                  {currentTimeDisplay} / {duration}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button className="w-8 h-8 flex items-center justify-center" onClick={toggleMute}>
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>

                <button className="w-8 h-8 flex items-center justify-center" onClick={handleFullscreen}>
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
