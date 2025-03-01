import Image from 'next/image'

export default function StaticMap() {
  return (
    <div className="relative w-full h-full">
      <Image
        src="/images/campus-map.png"
        alt="성균관대학교 자연과학캠퍼스 학생회관 위치"
        fill
        className="object-cover rounded-2xl"
      />
    </div>
  )
} 