interface IProps {
  imageURL: string;
  alt: string;
  className?: string;
}

export default function Image({ imageURL, alt, className }: IProps) {
  return <img className={className} src={imageURL} alt={alt} />;
}
