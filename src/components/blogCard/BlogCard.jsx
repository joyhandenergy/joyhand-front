"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PiClock, PiArrowRight } from "react-icons/pi";
import "../../app/blog/blog.css";

const BlogCard = ({ post, priority = false }) => {
  const { title, slug, excerpt, image, readTime } = post;

  return (
    <article className="blog-card">
      <Link href={`/blog/${slug}`} className="blog-card__link">
        <div className="blog-card__image-wrapper">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="blog-card__image"
            priority={priority}
          />
          <span className="blog-card__read-time">
            <PiClock className="blog-card__clock-icon" />
            {readTime}
          </span>
        </div>

        <div className="blog-card__content">
          <div className="blog-card__category">{post.category || "Energy Technology"}</div>
          <h3 className="blog-card__title">{title}</h3>
          <div className="blog-card__excerpt">
            <p>{excerpt}</p>
          </div>
        </div>

        <div className="blog-card__footer">
          <span className="blog-card__cta">
            Read Article <PiArrowRight className="blog-card__cta-icon" />
          </span>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;