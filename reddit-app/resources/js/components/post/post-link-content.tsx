export default function PostLinkContent({ data }: { data: string }) {
    return (
        <>
            <a
                href="https://example.com"
                target="_blank"
                className="my-2 flex items-center overflow-hidden rounded-lg border border-gray-200 transition hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
            >
                <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center bg-gray-100 dark:bg-gray-800">
                    <img src={data} alt="preview" className="h-full w-full object-cover" />
                </div>

                <div className="flex-1 p-3">
                    <p className="truncate text-sm text-gray-900 dark:text-gray-100">example.com</p>
                    <p className="mt-1 line-clamp-2 text-xs text-gray-500 dark:text-gray-400">
                        This is a short description or preview text of the website. If it’s too long, it gets truncated.
                    </p>
                </div>
            </a>
        </>
    );
}
