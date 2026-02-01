
import { groq } from 'next-sanity';

// Query for fetching all posts
export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  excerpt,
  publishedAt,
  _updatedAt,
  "author": author->{name, slug, image, bio},
  "categories": categories[]->{title, slug, colorTheme, icon, description},
  "tags": tags[]->{title, slug}
}`;

// Query for fetching a single post by slug
export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  mainImage,
  excerpt,
  body,
  publishedAt,
  _updatedAt,
  "author": author->{name, slug, image, bio},
  "categories": categories[]->{title, slug, colorTheme, icon, description},
  "tags": tags[]->{title, slug},
  seo
}`;

// Query for fetching all posts slugs (for static paths)
export const postSlugsQuery = groq`*[_type == "post" && defined(slug.current)][].slug.current`;

// Query for fetching categories
export const categoriesQuery = groq`*[_type == "category"] {
  title,
  slug,
  description,
  colorTheme,
  icon,
  "count": count(*[_type == "post" && references(^._id)])
}`;

// Query for fetching single category details
export const categoryBySlugQuery = groq`*[_type == "category" && slug.current == $slug][0] {
  title,
  slug,
  description,
  colorTheme,
  icon,
  "count": count(*[_type == "post" && references(^._id)])
}`;

// Query for fetching posts by category
export const postsByCategoryQuery = groq`*[_type == "post" && $categorySlug in categories[]->slug.current] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  excerpt,
  publishedAt,
  _updatedAt,
  "author": author->{name, slug, image, bio},
  "categories": categories[]->{title, slug, colorTheme, icon, description},
  "tags": tags[]->{title, slug}
}`;

// Query for fetching tags
export const tagsQuery = groq`*[_type == "tag"] {
  title,
  slug,
  "count": count(*[_type == "post" && references(^._id)])
}`;

// Query for fetching posts by tag
export const postsByTagQuery = groq`*[_type == "post" && $tagSlug in tags[]->slug.current] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  excerpt,
  publishedAt,
  _updatedAt,
  "author": author->{name, slug, image, bio},
  "categories": categories[]->{title, slug, colorTheme, icon, description},
  "tags": tags[]->{title, slug}
}`;

// Query for searching posts
export const searchPostsQuery = groq`*[_type == "post" && (
  title match $searchTerm + "*" || 
  excerpt match $searchTerm + "*" ||
  pt::text(body) match $searchTerm + "*"
)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  excerpt,
  publishedAt,
  _updatedAt,
  "author": author->{name, slug, image, bio},
  "categories": categories[]->{title, slug, colorTheme, icon, description},
  "tags": tags[]->{title, slug}
}`;
