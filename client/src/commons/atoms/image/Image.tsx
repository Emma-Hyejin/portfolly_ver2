import { ImageContainer, FeatherImage } from '@/commons/atoms/image/Image.styled';

interface ImageProps {
  src: string | undefined;
  url?: string;
  shape?: string;
  size: number;
}  

export default function Image({ src, url, shape, size }: ImageProps) {
  //const typeSrc = typeof src === "string" ? src : undefined;
  return (
    <ImageContainer shape={shape} size={size}>
      <a href={url}>
        <FeatherImage src={src} shape={shape} size={size} />
      </a>
    </ImageContainer>
  )
}