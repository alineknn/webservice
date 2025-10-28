

import BlogLanding from "@/components/BlogLanding";
import LatestBlog from "@/components/LatestBlog";
import TariffBanner from "@/components/TariffBanner";

// Optional SEO for the blog landing page.
// If you already manage metadata elsewhere, you can remove this block.
export const metadata = {
  title: "Блог WebService",
  description: "Последние новости, обновления и советы по хостингу и VPS/VDS.",
};

export default function BlogPage() {
  return (
    <>
    <BlogLanding></BlogLanding>
    <TariffBanner></TariffBanner>
    <LatestBlog></LatestBlog>
    </>
  );
}