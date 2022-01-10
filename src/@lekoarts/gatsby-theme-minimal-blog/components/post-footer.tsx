import * as React from "react";
import { Disqus } from "gatsby-plugin-disqus";

type PostFooterProps = {
  post: {
    slug: string;
    title: string;
    date: string;
    tags?: {
      name: string;
      slug: string;
    }[];
    description?: string;
    canonicalUrl?: string;
    body: string;
    excerpt: string;
    timeToRead?: number;
    banner?: {
      childImageSharp: {
        resize: {
          src: string;
        };
      };
    };
  };
};

const PostFooter = ({ post }: PostFooterProps) => {
  let disqusConfig = {
    url: `${post.canonicalUrl}`,
    identifier: post.slug,
    title: post.title,
  };
  return (
    <>
      <Disqus config={disqusConfig} />
    </>
  );
};

export default PostFooter;
