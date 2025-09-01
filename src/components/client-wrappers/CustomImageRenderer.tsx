import React from 'react';
import parse, { HTMLReactParserOptions } from 'html-react-parser';
import Image from 'next/image';

interface CustomImageRendererProps {
  content: string;
}

const CustomImageRenderer: React.FC<CustomImageRendererProps> = ({ content }) => {
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode.type === 'tag' && domNode.name === 'img') {
        const { src, alt, width, height } = domNode.attribs;
        return (
          <Image
            src={src}
            alt={alt}
            width={parseInt(width, 10) || 800} // Provide a default width if not specified
            height={parseInt(height, 10) || 400} // Provide a default height if not specified
            layout="responsive" // Or "intrinsic", "fixed", "fill"
            objectFit="contain" // Or "cover", "fill", "none", "scale-down"
          />
        );
      }
      // Handle other elements if needed, otherwise return undefined to render as-is
      return undefined;
    },
  };

  return <>{parse(content, options)}</>;
};

export default CustomImageRenderer;
