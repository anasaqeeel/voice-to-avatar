import Image from "next/image"

interface ComparisonCardProps {
  referenceImage?: string
  originalImage?: string
  omniHumanImage: string
  fantasyTalkingImage: string
  fantasyTalkingImage2?: string
  isOriginal?: boolean
}

export default function ComparisonCard({
  referenceImage,
  originalImage,
  omniHumanImage,
  fantasyTalkingImage,
  fantasyTalkingImage2,
  isOriginal = false,
}: ComparisonCardProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {referenceImage && (
        <div className="relative">
          <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 text-xs rounded">Reference Image</div>
          <Image
            src={referenceImage || "/api/placeholder?height=300&width=300"}
            alt="Reference image"
            width={300}
            height={300}
            className="object-cover rounded"
          />
        </div>
      )}

      {originalImage && (
        <div className="relative">
          <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 text-xs rounded">Original</div>
          <Image
            src={originalImage || "/api/placeholder?height=300&width=300"}
            alt="Original image"
            width={300}
            height={300}
            className="object-cover rounded"
          />
        </div>
      )}

      <div className="relative">
        <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 text-xs rounded">OmniHuman-1</div>
        <Image
          src={omniHumanImage || "/api/placeholder?height=300&width=300"}
          alt="OmniHuman-1 result"
          width={300}
          height={300}
          className="object-cover rounded"
        />
      </div>

      <div className="relative">
        <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 text-xs rounded">FantasyTalking</div>
        <Image
          src={fantasyTalkingImage || "/api/placeholder?height=300&width=300"}
          alt="FantasyTalking result"
          width={300}
          height={300}
          className="object-cover rounded"
        />
      </div>

      {fantasyTalkingImage2 && (
        <div className="relative">
          <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 text-xs rounded">FantasyTalking</div>
          <Image
            src={fantasyTalkingImage2 || "/api/placeholder?height=300&width=300"}
            alt="FantasyTalking result 2"
            width={300}
            height={300}
            className="object-cover rounded"
          />
        </div>
      )}
    </div>
  )
}
