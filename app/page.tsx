import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import { Badge } from "@/components/badge"
import {
  TwitterLogoIcon,
  GitHubLogoIcon,
  EnvelopeClosedIcon,
  ArrowRightIcon,
} from "@radix-ui/react-icons"
import Image from "next/image"
export default function Home() {
  return (
    <div className="mt-12">
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        {"Hi, I'm Kyle 👋"}
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`I'm a Fullstack Web Developer in `}
        <Badge href="https://www.google.com/search?q=taiwan">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="20px"
            height="12px"
          >
            <path
              fill="#fe0000"
              d="M3,12.4C9.5,10.2,15,10,21.5,11c8.2,1.3,16.3,3.2,24.5,0.4c0,8.4,0,16.7,0,25.1c-14.7,5-29.3-5-44,0	c0-4.2,0-8.4,0-12.6S3,16.6,3,12.4z"
            />
            <path
              fill="#000095"
              d="M2,11.4C8.5,9.2,15,10,21.5,11c0,4.2,0,8.4,0,12.6C15,22.5,8.5,21.8,2,24C2,19.8,2,15.6,2,11.4z"
            />
            <path
              fill="#fff"
              d="M14.2,17c0.8-0.2,1.6-0.3,2.4-0.4c-0.8-0.3-1.6-0.6-2.4-0.9c0.6-0.5,1.2-1.1,1.8-1.6c-0.8,0.1-1.6,0.3-2.4,0.4	c0.2-0.8,0.4-1.5,0.7-2.3c-0.6,0.5-1.2,1.1-1.8,1.6c-0.2-0.8-0.4-1.6-0.7-2.4c-0.2,0.8-0.4,1.6-0.7,2.4c-0.6-0.6-1.2-1.1-1.8-1.7	c0.2,0.8,0.4,1.5,0.7,2.3c-0.8-0.2-1.6-0.3-2.4-0.4c0.6,0.5,1.2,1,1.8,1.6c-0.8,0.3-1.6,0.5-2.4,0.9c0.8,0.1,1.6,0.2,2.4,0.4	c-0.6,0.6-1.2,1.2-1.8,1.9c0.8-0.3,1.6-0.6,2.4-0.8c-0.2,0.8-0.4,1.6-0.7,2.4c0.6-0.6,1.2-1.2,1.8-1.8c0.2,0.8,0.4,1.6,0.7,2.4	c0.2-0.8,0.4-1.6,0.7-2.3c0.6,0.6,1.2,1.2,1.8,1.8c-0.2-0.8-0.4-1.6-0.7-2.4c0.8,0.3,1.6,0.5,2.4,0.8C15.4,18.3,14.8,17.6,14.2,17z"
            />
            <path
              fill="#000095"
              d="M11.8,13.6c1.5,0,2.8,1.3,2.8,2.8c0,1.5-1.2,2.6-2.8,2.5c-1.5,0-2.8-1.1-2.8-2.6C9,14.9,10.2,13.6,11.8,13.6z"
            />
            <path
              fill="#fff"
              d="M11.8,13.9c1.3,0,2.4,1.2,2.4,2.5c0,1.3-1.1,2.3-2.4,2.3c-1.3,0-2.4-1-2.4-2.3C9.3,15,10.4,13.9,11.8,13.9z"
            />
            <linearGradient
              id="bN9ZyUWz4xGeUqGhZ8qQAa"
              x1="2"
              x2="46"
              y1="26"
              y2="26"
              gradientTransform="matrix(1 0 0 -1 0 50)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#fff" stop-opacity="0" />
              <stop offset=".227" stop-color="#fff" stop-opacity=".3" />
              <stop offset=".461" stop-color="#fff" stop-opacity=".008" />
              <stop offset=".468" stop-color="#fff" stop-opacity="0" />
              <stop offset=".587" stop-color="#fff" stop-opacity="0" />
              <stop offset=".794" stop-color="#fff" stop-opacity=".25" />
              <stop offset=".996" stop-color="#fff" stop-opacity="0" />
            </linearGradient>
            <path
              fill="url(#bN9ZyUWz4xGeUqGhZ8qQAa)"
              d="M2,11.4c14.7-5,29.3,5,44,0c0,8.4,0,16.7,0,25.1c-14.7,5-29.3-5-44,0C2,28.2,2,19.8,2,11.4z"
              opacity=".9"
            />
            <linearGradient
              id="bN9ZyUWz4xGeUqGhZ8qQAb"
              x1="2"
              x2="46"
              y1="26"
              y2="26"
              gradientTransform="matrix(1 0 0 -1 0 50)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".004" stop-opacity=".63" />
              <stop offset=".009" stop-color="#000102" stop-opacity=".614" />
              <stop offset=".075" stop-color="#000615" stop-opacity=".417" />
              <stop offset=".144" stop-color="#000a20" stop-opacity=".215" />
              <stop offset=".216" stop-color="#000b24" stop-opacity="0" />
              <stop offset=".361" stop-color="#000b24" stop-opacity=".018" />
              <stop offset=".419" stop-color="#000510" stop-opacity=".131" />
              <stop offset=".479" stop-color="#000104" stop-opacity=".247" />
              <stop offset=".537" stop-opacity=".36" />
              <stop offset=".604" stop-color="#000206" stop-opacity=".249" />
              <stop offset=".695" stop-color="#000718" stop-opacity=".099" />
              <stop offset=".743" stop-color="#000b24" stop-opacity=".018" />
              <stop offset=".83" stop-color="#000b24" stop-opacity=".018" />
              <stop offset=".885" stop-color="#000a1f" stop-opacity=".183" />
              <stop offset=".946" stop-color="#000612" stop-opacity=".368" />
              <stop offset="1" stop-opacity=".53" />
            </linearGradient>
            <path
              fill="url(#bN9ZyUWz4xGeUqGhZ8qQAb)"
              d="M2,11.4c14.7-5,29.3,5,44,0c0,8.4,0,16.7,0,25.1c-14.7,5-29.3-5-44,0C2,28.2,2,19.8,2,11.4z"
              opacity=".83"
            />
          </svg>
          Taiwan
        </Badge>
        {". Currently building web services with "}
        <Badge href="https://nextjs.org">
          <svg
            width="16"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-flex mr-1"
          >
            <path
              d="M5.13979 0.00296175C5.11613 0.00511197 5.04086 0.0126378 4.97312 0.0180134C3.41075 0.158853 1.94731 1.00174 1.02043 2.29725C0.504301 3.01757 0.174194 3.83466 0.0494624 4.70012C0.00537635 5.00223 0 5.09146 0 5.50108C0 5.91069 0.00537635 5.99993 0.0494624 6.30204C0.348387 8.36732 1.81828 10.1026 3.81183 10.7455C4.16882 10.8605 4.54516 10.939 4.97312 10.9863C5.13978 11.0046 5.86022 11.0046 6.02688 10.9863C6.76559 10.9046 7.3914 10.7218 8.0086 10.4068C8.10323 10.3584 8.12151 10.3455 8.1086 10.3348C8.1 10.3283 7.69677 9.78754 7.2129 9.13388L6.33333 7.94588L5.23118 6.31494C4.62473 5.41829 4.12581 4.68507 4.12151 4.68507C4.1172 4.68399 4.1129 5.40862 4.11075 6.29343C4.10753 7.84267 4.10645 7.90503 4.0871 7.94158C4.05914 7.99426 4.03763 8.01576 3.99247 8.03941C3.95806 8.05662 3.92796 8.05984 3.76559 8.05984H3.57957L3.53011 8.02866C3.49785 8.00824 3.47419 7.98136 3.45806 7.95018L3.43548 7.9018L3.43763 5.7462L3.44086 3.58953L3.47419 3.5476C3.4914 3.52502 3.52796 3.496 3.55376 3.48202C3.59785 3.46052 3.61505 3.45837 3.80108 3.45837C4.02043 3.45837 4.05699 3.46697 4.11398 3.52932C4.13011 3.54653 4.72688 4.44532 5.44086 5.52796C6.15484 6.61059 7.13118 8.08887 7.61075 8.81457L8.48172 10.1337L8.52581 10.1047C8.91613 9.85098 9.32903 9.48974 9.65591 9.11345C10.3516 8.31464 10.8 7.34059 10.9505 6.30204C10.9946 5.99993 11 5.91069 11 5.50108C11 5.09146 10.9946 5.00223 10.9505 4.70012C10.6516 2.63483 9.18172 0.899604 7.18817 0.256688C6.83656 0.142726 6.46237 0.0642427 6.04301 0.0169378C5.93978 0.00618668 5.22903 -0.00563913 5.13979 0.00296175ZM7.3914 3.32935C7.44301 3.35516 7.48495 3.40461 7.5 3.45622C7.5086 3.48417 7.51075 4.08193 7.5086 5.42905L7.50538 7.36209L7.16452 6.83959L6.82258 6.31709V4.91192C6.82258 4.00345 6.82688 3.49277 6.83333 3.46804C6.85054 3.40784 6.88817 3.36053 6.93979 3.33258C6.98387 3.31 7 3.30785 7.16882 3.30785C7.32796 3.30785 7.35591 3.31 7.3914 3.32935Z"
              fill="currentColor"
            />
          </svg>
          Next.js
        </Badge>
        {" and "}
        <Badge href="https://www.typescriptlang.org">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="16px"
            height="12px"
          >
            <rect width="36" height="36" x="6" y="6" fill="#1976d2" />
            <polygon
              fill="#fff"
              points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"
            />
            <path
              fill="#fff"
              d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"
            />
          </svg>
          Typescript
        </Badge>
        {
          ". In my free time, I do trading analysis, and sometimes write some posts. If you have any suggestions or issues. Please feel free to contact me "
        }
        <Badge href="mailto:hi@kylekorve.com">
          <EnvelopeClosedIcon className="h-3 w-3 mr-1" />
          hi@kylekorve.com
        </Badge>
        {"."}
      </p>

      <div className="my-8 justify-between flex flex-col">
        <h2 className="font-bold text-3xl tracking-tighter mb-6">Projects</h2>
        <div className="grid gap-4 relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <div className="md:p-12 p-8 pt-6 pb-24 md:pb-32 md:pt-8 dark:bg-black bg-white rounded-3xl border relative">
            <h3 className="font-semibold text-2xl mt-4">Microbrokers</h3>
            <p className=" text-lg mt-4 font-semibold ">
              An Open Source Trading Dashboard
            </p>
            <div className="flex items-center justify-between absolute inset-x-0 bottom-0 p-8 pb-6  md:p-12">
              <Link
                href="https://github.com/kylekorv3/microbrokers"
                target="_blank"
                title=""
                rel="noopener"
              >
                View Repo
              </Link>
              <Link
                href="https://microbrokers.io"
                target="_blank"
                title=""
                rel="noopener"
              >
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Link className="my-8 justify-between flex items-center" href="/posts">
        <h2 className="font-bold text-3xl tracking-tighter">Recently Posts</h2>
        <h3 className="font-semibold text-lg underline flex items-center">
          Read more
          <ArrowRightIcon className="ml-1" />
        </h3>
      </Link>
      <div className="prose dark:prose-invert">
        {allPosts.map(
          (post, index) =>
            index < 3 && (
              <article key={post._id}>
                <Link href={post.slug}>
                  <h2>{post.title}</h2>
                </Link>
                {post.description && <p>{post.description}</p>}
              </article>
            )
        )}
      </div>
      <div className="my-8">
        <h2 className="font-bold text-3xl mb-8 tracking-tighter">Links</h2>
        <div className="flex items-center gap-2">
          <Badge href="https://github.com/kylekorv3">
            <GitHubLogoIcon className="h-3 w-3 mr-1" />
            Github
          </Badge>
          <Badge href="https://twitter.com/kylekorv3">
            <TwitterLogoIcon className="h-3 w-3 mr-1" />
            Twitter
          </Badge>
          <Badge href="mailto:hi@kylekorve.com">
            <EnvelopeClosedIcon className="h-3 w-3 mr-1" />
            hi@kylekorve.com
          </Badge>
        </div>
      </div>
    </div>
  )
}
