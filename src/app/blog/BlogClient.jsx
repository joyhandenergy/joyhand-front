"use client";

import { useSearchParams } from "next/navigation";
import { blogPosts } from "@/data";
import BlogCard from "@/components/blogCard/BlogCard";
import Pagination from "@/components/pagination/Pagination";

const POSTS_PER_PAGE = 3;

export default function BlogClient() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  
  const start = (page - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;
  
  const paginatedPosts = blogPosts.slice(start, end);
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);

  return (
    <>
      <div className="blog-page__results-header" style={{ marginBottom: 'var(--spacing-4)' }}>
        <p className="blog-page__results-count">
          Showing <strong>{paginatedPosts.length}</strong> of{" "}
          <strong>{blogPosts.length}</strong> articles
        </p>
      </div>

      <div className="blog-grid">
        {paginatedPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {totalPages > 1 && (
        <div style={{ marginTop: 'var(--spacing-10)', display: 'flex', justifyContent: 'center' }}>
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            baseUrl="/blog"
          />
        </div>
      )}
    </>
  );
}
