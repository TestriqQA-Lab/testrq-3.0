import React from 'react';
import parse, { HTMLReactParserOptions } from 'html-react-parser';
import Image from 'next/image';

interface CustomImageRendererProps {
  content: string;
}


interface ElementWithAttribs {
  type: 'tag';
  name: string;
  attribs: {
    [key: string]: string | undefined;
    src?: string;
    alt?: string;
    width?: string;
    height?: string;
    onmouseover?: string;
    onmouseout?: string;
  };
}

const CustomImageRenderer: React.FC<CustomImageRendererProps> = ({ content }) => {
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      // Fix for: Invalid event handler property `onmouseover`/`onmouseout`
      // We check for 'attribs' in domNode
      if (domNode.type === 'tag' && 'attribs' in domNode) {
        const element = domNode as unknown as ElementWithAttribs;
        const { attribs } = element;
        if (attribs.onmouseover) delete attribs.onmouseover;
        if (attribs.onmouseout) delete attribs.onmouseout;
      }

      if (domNode.type === 'tag' && (domNode as unknown as ElementWithAttribs).name === 'img') {
        const { src, alt, width, height } = (domNode as unknown as ElementWithAttribs).attribs;

        if (!src) return undefined;

        return (
          <Image
            src={src}
            alt={alt || ''}
            width={parseInt(width || '800', 10)} // Provide a default width if not specified
            height={parseInt(height || '400', 10)} // Provide a default height if not specified
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
