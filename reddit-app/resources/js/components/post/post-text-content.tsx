export default function PostTextContent({ data }: { data: string }) {
    return <p className="my-2 line-clamp-6 text-sm leading-relaxed text-gray-700 dark:text-gray-300">{data}</p>;
}
