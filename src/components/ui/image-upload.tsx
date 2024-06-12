"use client"

import { useEffect, useState } from "react"
import { Button } from "./button"
import { ImagePlus, Trash } from "lucide-react"
import Image from "next/image"
import { CldUploadWidget } from 'next-cloudinary';

interface ImageUploadProps {
  disabled?: boolean
  onChange: (value: string) => void
  onRemove: (value: string) => void
  value: string[]
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  disabled,
  onChange,
  onRemove,
  value
}) => {
  const [isMounted, setIsMounted] = useState(false)
  const onUpload = (result: any) => {
    onChange(result.info.secure_url)
  }
  useEffect(() => {
    setIsMounted(true)
  }, [])
  console.log(isMounted)
  if (!isMounted) return null

  return (
    <>
      <div className="mb-4">
        {
          value.map(url => (
            <div key={url} className="relative w-[200px] h-[200px] rounded-md overflow-hidden">
              <div className="z-10 absolute top-2 right-2">
                <Button type="button" variant="destructive" size='icon' onClick={() => onRemove(url)}>
                  <Trash className="w-4 h-4" />
                </Button>
              </div>
              <Image
                className="object-cover"
                alt="image"
                width={200}
                height={200}
                src={url}
              />
            </div>
          ))
        }
        <CldUploadWidget onUpload={onUpload} uploadPreset="g2sqdoff">
          {({ open }) => {
            const onClick = () => {
              open()
            }
            return (
              <Button variant='secondary' disabled={disabled} type="button" onClick={onClick}>
                <ImagePlus className="w-4 h-4 mr-2" />
                Upload an image
              </Button>
            );
          }}
        </CldUploadWidget>
      </div>

    </>
  )
}

export default ImageUpload
