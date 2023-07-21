import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"

export default function Page() {
  return (
    <div>
      <div className="my-8 justify-between flex items-center">
        <h2 className="font-bold text-5xl tracking-tighter">Posts</h2>
      </div>

      <div className="prose dark:prose-invert">
        {allPosts.map((post) => (
          <article key={post._id}>
            <Link href={post.slug}>
              <h2>{post.title}</h2>
            </Link>
            {post.description && <p>{post.description}</p>}
          </article>
        ))}
      </div>
    </div>
  )
}
