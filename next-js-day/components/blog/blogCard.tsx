import Image from "next/image";
import Link from "next/link";

type BlogCardProps = {
  title: string;
  excerpt: string;
  image: string;
  slug: string;
};

export default function BlogCard({
  title,
  excerpt,
  image,
  slug,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <article className="flex w-full max-w-[800px] gap-6 bg-white p-6 rounded-xl">
        {/* Image */}
        <Image
          src={image}
          alt={title}
          width={320}
          height={200}
          className="rounded-lg object-cover"
        />

        {/* Content */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {title}
            </h3>
            <p className="text-sm text-gray-600">{excerpt}</p>
          </div>

          <span className="text-xs text-gray-400 mt-4">
            John Doe • 12 Jan 2024
          </span>
        </div>
      </article>
    </Link>
  );
}
