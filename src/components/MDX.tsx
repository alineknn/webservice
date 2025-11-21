import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

// Typography components matching the design spec
const H2 = (props: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h2
    {...props}
    className={[
      "font-['Helvetica']",
      "text-[44px] leading-[1.2]",
      "mt-10 mb-4",
      props.className || "",
    ].join(" ")}
  />
);

const H3 = (props: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3
    {...props}
    className={[
      "font-['Helvetica']",
      "text-[36px] leading-[1.25]",
      "mt-8 mb-3",
      props.className || "",
    ].join(" ")}
  />
);

const H4 = (props: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h4
    {...props}
    className={[
      "font-['Helvetica']",
      "text-[28px] leading-[1.28]",
      "mt-6 mb-2.5",
      props.className || "",
    ].join(" ")}
  />
);

const H5 = (props: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h5
    {...props}
    className={[
      "font-['Helvetica']",
      "text-[22px] leading-[1.3]",
      "mt-5 mb-2",
      props.className || "",
    ].join(" ")}
  />
);

const H6 = (props: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h6
    {...props}
    className={[
      "font-['Helvetica']",
      "text-[22px] leading-[1.35]",
      "mt-5 mb-2",
      props.className || "",
    ].join(" ")}
  />
);

const P = (props: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p
    {...props}
    className={[
      "font-['Avenir Next']",
      "text-[22px] leading-[1.6]",
      "my-4",
      props.className || "",
    ].join(" ")}
  />
);

const Strong = (props: React.HTMLAttributes<HTMLElement>) => (
  <strong {...props} className={["font-semibold", props.className || ""].join(" ")} />
);

const Em = (props: React.HTMLAttributes<HTMLElement>) => (
  <em {...props} className={["italic", props.className || ""].join(" ")} />
);

const UL = (props: React.HTMLAttributes<HTMLUListElement>) => (
  <ul
    {...props}
    className={[
      "list-disc pl-6 my-4",
      "font-['Avenir Next'] text-[22px] leading-[1.6]",
      "space-y-2",
      props.className || "",
    ].join(" ")}
  />
);

const OL = (props: React.HTMLAttributes<HTMLOListElement>) => (
  <ol
    {...props}
    className={[
      "list-decimal pl-6 my-4",
      "font-['Avenir Next'] text-[22px] leading-[1.6]",
      "space-y-2",
      props.className || "",
    ].join(" ")}
  />
);

const LI = (props: React.LiHTMLAttributes<HTMLLIElement>) => (
  <li {...props} className={["marker:text-black/70", props.className || ""].join(" ")} />
);

const Quote = (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
  <blockquote
    {...props}
    className={[
      "border-l-4 border-black/15 bg-black/5",
      "px-5 py-4 my-6 rounded-md",
      "font-['Avenir Next'] text-[22px] leading-[1.6] italic",
      props.className || "",
    ].join(" ")}
  />
);

const HR = (props: React.HTMLAttributes<HTMLHRElement>) => (
  <hr {...props} className={["my-8 border-black/10", props.className || ""].join(" ")} />
);

const A = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a
    {...props}
    className={[
      "underline underline-offset-2 decoration-black/30 hover:decoration-black",
      "font-['Avenir Next']",
      props.className || "",
    ].join(" ")}
  />
);

const Img = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  // Use plain <img> to work seamlessly inside MDXRemote RSC
  <img
    {...props}
    className={["rounded-md mx-auto my-6 w-full max-w-full h-auto", props.className || ""].join(" ")}
    loading={props.loading || "lazy"}
    alt={props.alt || ""}
  />
);

// Components mapping for MDXRemote
const components = {
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: P,
  strong: Strong,
  em: Em,
  ul: UL,
  ol: OL,
  li: LI,
  blockquote: Quote,
  hr: HR,
  a: A,
  img: Img,
};

export function MDX({ source }: { source: string }) {
  return (
    <div className="mx-auto w-full max-w-[768px] px-4 text-left">
      <MDXRemote
        source={source}
        options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        components={components}
      />
    </div>
  );
}