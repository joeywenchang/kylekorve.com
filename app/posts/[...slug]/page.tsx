import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"

import { Metadata } from "next"
import { Mdx } from "@/components/mdx-components"
import { customDate, timeAgo } from "@/lib/time"

export const revalidate = 60

interface PostProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/")
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }))
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  return (
    <article className="py-6 prose dark:prose-invert">
      <h1 className="mb-2 text-3xl md:text-4xl">{post.title}</h1>
      {post.description && (
        <p className="mt-0 text-slate-700 dark:text-slate-200">
          {post.description}
        </p>
      )}
      {post.date && (
        <p className="mt-0 text-slate-700 dark:text-slate-200">
          {customDate(new Date(post.date))}
          {` (${timeAgo(new Date(post.date))})`}
        </p>
      )}
      <hr className="my-4" />
      <Mdx code={post.body.code} />
    </article>
  )
}
