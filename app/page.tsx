import Image from "next/image"
import { FileText, Github, ExternalLink } from "lucide-react"
import VideoCard from "@/components/video-card"
import ComparisonCard from "@/components/comparison-card"
import { Button } from "@/components/ui/button"


export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-16 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Voice-TO-Avatar</h1>
        <h2 className="text-xl md:text-2xl mb-8">
          Realistic Talking Portrait Generation via Coherent Motion Synthesis
        </h2>

        {/* Authors */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-6">
          <div className="flex items-center">
            <a href="#" className="text-blue-400 hover:underline">
              Mengchao Wang<sup>1*</sup>
            </a>
          </div>
          <div className="flex items-center">
            <a href="#" className="text-blue-400 hover:underline">
              Qiang Wang<sup>1*</sup>
            </a>
          </div>
          <div className="flex items-center">
            <a href="#" className="text-blue-400 hover:underline">
              Fan Jiang<sup>1†</sup>
            </a>
          </div>
        </div>

        {/* Affiliations */}
        <div className="mb-6">
          <p>
            <sup>1</sup>AMAP, Alibaba Group
          </p>
          <p>
            <sup>2</sup>Beijing University of Posts and Telecommunications
          </p>
        </div>

        {/* Notes */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-8">
          <p>
            <sup>*</sup>Equal contribution
          </p>
          <p>
            <sup>†</sup>Project lead
          </p>
          <p>
            <sup>‡</sup>Corresponding author
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button variant="outline" className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Paper
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <ExternalLink className="w-4 h-4" />
            arXiv
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Github className="w-4 h-4" />
            Code
          </Button>
        </div>
      </section>

      {/* Description Section */}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <p className="text-sm md:text-base leading-relaxed">
          Creating a realistic animatable avatar from a single static portrait remains challenging. Existing approaches
          often struggle to capture subtle facial expressions, the associated global body movements, and the dynamic
          background. To address these limitations, we propose a novel framework that leverages a pretrained video
          diffusion transformer model to generate high-fidelity, coherent talking portraits with controllable motion
          dynamics. At the core of our work is a dual-stage audio-visual alignment strategy. In the first stage, we
          employ a clip-level training scheme to establish coherent global motion by aligning audio-driven dynamics
          across the entire scene, including the reference portrait, contextual objects, and background. In the second
          stage, we refine lip movements at the frame level using a lip-tracing mask, ensuring precise synchronization
          with audio signals. To preserve identity without compromising motion flexibility, we replace the commonly used
          reference network with a facial-focused cross-attention module that effectively maintains facial consistency
          throughout the video. Furthermore, we integrate a motion intensity modulation module that explicitly controls
          expression and body motion intensity, enabling controllable manipulation of portrait movements beyond mere lip
          motion. Extensive experimental results show that our proposed approach achieves higher quality with better
          realism, coherence, motion intensity, and identity preservation.
        </p>
      </section>

      {/* Comparison Section */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex justify-center">
          <div className="relative w-full max-w-3xl aspect-video">
            <iframe
              src="https://www.youtube.com/embed/L8iBGuuJKlE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-md w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Generated Videos Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold mb-6">Generated Videos</h2>
        <p className="mb-8">
          FantasyTalking can generate highly realistic lip synchronization, ensuring that the character's mouth
          movements match the audio. Supports various styles of avatars, whether realistic or cartoon, and can generate
          high-quality conversation videos.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <VideoCard
            thumbnailSrc="/thumbnail/1n.png"
            videoSrc="/videos/1.mp4"
            duration="0:09"
            currentTime="0:00"
          />
          <VideoCard
            thumbnailSrc="/thumbnail/2n.png"
            videoSrc="/videos/2.mp4"
            duration="0:09"
            currentTime="0:00"
          />
          <VideoCard
            thumbnailSrc="/thumbnail/3n.png"
            videoSrc="/videos/3.mp4"
            duration="0:09"
            currentTime="0:00"
          />
          <VideoCard
            thumbnailSrc="/thumbnail/4n.png"
            videoSrc="/videos/4.mp4"
            duration="0:05"
            currentTime="0:00"
          />
          <VideoCard
            thumbnailSrc="/thumbnail/5n.png"
            videoSrc="/videos/5.mp4"
            duration="0:05"
            currentTime="0:00"
          />
          <VideoCard
            thumbnailSrc="/thumbnail/99.png"
            videoSrc="/videos/9.mp4"
            duration="0:09"
            currentTime="0:00"
          />
        </div>
      </section>

      {/* Realistic Talking Videos Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold mb-6">Realistic Talking Videos</h2>
        <p className="mb-8">
          FantasyTalking supports the generation of realistic talking videos with various body ranges and orientations,
          including close-up portraits, half-body, full-body, as well as front-facing and side-facing poses.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <VideoCard
            thumbnailSrc="/thumbnail/111.png"
            videoSrc="/videos/11.mp4"
            duration="0:05"
            currentTime="0:00"
          />
          <VideoCard
            thumbnailSrc="/thumbnail/133.png"
            videoSrc="/videos/13.mp4"
            duration="0:05"
            currentTime="0:00"
          />
          <VideoCard
            thumbnailSrc="/thumbnail/155.png"
            videoSrc="/videos/15.mp4"
            duration="0:02"
            currentTime="0:00"
          />
          <VideoCard
            thumbnailSrc="/thumbnail/17n.png?v=1"
            videoSrc="/videos/17.mp4"
            duration="0:07"
            currentTime="0:00"
          />
          <VideoCard
            thumbnailSrc="/thumbnail/19n.png"
            videoSrc="/videos/19.mp4"
            duration="0:05"
            currentTime="0:00"
          />
          <VideoCard
            thumbnailSrc="/thumbnail/20n.png"
            videoSrc="/videos/20.mp4"
            duration="0:05"
            currentTime="0:00"
          />
        </div>
      </section>

      {/* Diverse Character Styles Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold mb-6">Diverse Character Styles</h2>
        <p className="mb-8">
          FantasyTalking can animate characters and animals in various styles, generating dynamic, expressive, and
          naturally realistic stylized videos.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <VideoCard
            thumbnailSrc="/thumbnail/24n.png"
            videoSrc="/videos/24.mp4"
            duration="0:02"
            currentTime="0:00"
          />
          <VideoCard
            thumbnailSrc="/thumbnail/30n.png"
            videoSrc="/videos/30.mp4"
            duration="0:05"
            currentTime="0:00"
          />
          <VideoCard
            thumbnailSrc="/thumbnail/38n.png"
            videoSrc="/videos/38.mp4"
            duration="0:05"
            currentTime="0:00"
          />
          <VideoCard
            thumbnailSrc="/thumbnail/35n.png"
            videoSrc="/videos/35.mp4"
            duration="0:05"
            currentTime="0:00"
          />
          <VideoCard
            thumbnailSrc="/thumbnail/27n.png"
            videoSrc="/videos/27.mp4"
            duration="0:04"
            currentTime="0:00"
          />
          <VideoCard
            thumbnailSrc="/thumbnail/34n.png"
            videoSrc="/videos/34.mp4"
            duration="0:05"
            currentTime="0:00"
          />
        </div>
      </section>

      {/* Comparison with closed-source methods */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold mb-6">Comparison with closed-source methods</h2>
        <p className="mb-8">
          We compared the performance of our FantasyTalking model with OmniHuman-1, the current SOTA method for
          multimodality- conditioned human video generation.
        </p>

        <div className="space-y-8">
          <ComparisonCard
            referenceImage="/api/placeholder?height=300&width=300"
            omniHumanImage="/api/placeholder?height=300&width=300"
            fantasyTalkingImage="/api/placeholder?height=300&width=300"
          />

          <ComparisonCard
            referenceImage="/api/placeholder?height=300&width=300"
            omniHumanImage="/api/placeholder?height=300&width=300"
            fantasyTalkingImage="/api/placeholder?height=300&width=300"
            fantasyTalkingImage2="/api/placeholder?height=300&width=300"
          />

          <ComparisonCard
            originalImage="/api/placeholder?height=300&width=300"
            omniHumanImage="/api/placeholder?height=300&width=300"
            fantasyTalkingImage="/api/placeholder?height=300&width=300"
            isOriginal={true}
          />
        </div>
      </section>
    </main>
  )
}