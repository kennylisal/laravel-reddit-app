import BasePost from '@/components/post/base-post';
import PostImageContent from '@/components/post/post-image-content';
import PostLinkContent from '@/components/post/post-link-content';
import PostTextContent from '@/components/post/post-text-content';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import subreddit from '@/routes/subreddit';
import { type BreadcrumbItem } from '@/types';
import { MainPostDataType } from '@/types/reddit-post';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

function contentGenerator(datas: MainPostDataType[]) {
    return datas.map((data) => {
        let mainContent = <></>;
        if (data.content_type === 'image') {
            mainContent = <PostImageContent data={data.image} />;
        } else if (data.content_type === 'link') {
            mainContent = <PostLinkContent data={data.content} />;
        } else {
            mainContent = <PostTextContent data={data.content} />;
        }
        const postOwner = (
            <>
                <div className="mr-2 h-6 w-6 overflow-hidden rounded-full bg-gray-300">
                    <img src={data.subreddit.image} alt="Profile" className="h-full w-full object-cover" />
                </div>
                <Link href={subreddit.index(data.subreddit.slug)}>
                    <span className="text-[13px] font-bold hover:text-blue-700">r/{data.subreddit.slug}</span>
                </Link>
            </>
        );
        return <BasePost data={data} postContent={mainContent} postOwner={postOwner} key={data.slug} />;
    });
}

export default function MainPage({ data: datas }: { message: string; data: MainPostDataType[] }) {
    const content = contentGenerator(datas);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="container mx-auto flex h-full max-w-4xl flex-row items-stretch gap-2 overflow-auto rounded-xl px-4 py-4">
                <div className="h-full w-full overflow-auto" id="first">
                    {...content}
                    <div className="py-4 text-center text-gray-500">Loading more posts... (Infinite Scroll)</div>
                </div>
                <div className="hidden h-fit w-80 overflow-auto bg-gray-100 p-4 lg:block">
                    <div className="col-span-2 rounded-md">
                        <h2 className="mb-2 text-lg font-bold">Popular Communities</h2>
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <div className="mr-2 h-8 w-8 rounded-full bg-gray-300"></div>
                                <div>
                                    <a href="#" className="font-medium text-blue-500 hover:underline">
                                        r/popular1
                                    </a>
                                    <p className="text-sm text-gray-600">1.2M members</p>
                                </div>
                            </li>
                            <li className="flex items-center">
                                <div className="mr-2 h-8 w-8 rounded-full bg-gray-300"></div>
                                <div>
                                    <a href="#" className="font-medium text-blue-500 hover:underline">
                                        r/popular2
                                    </a>
                                    <p className="text-sm text-gray-600">900K members</p>
                                </div>
                            </li>
                            <li className="flex items-center">
                                <div className="mr-2 h-8 w-8 rounded-full bg-gray-300"></div>
                                <div>
                                    <a href="#" className="font-medium text-blue-500 hover:underline">
                                        r/popular3
                                    </a>
                                    <p className="text-sm text-gray-600">750K members</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

//https://picsum.photos/id/237/200/200
{
    /* <div className="rounded-md bg-white p-4 shadow-md hover:bg-gray-100">
                        <div className="mb-2 flex items-center text-sm text-gray-600">
                            <div className="mr-2 h-6 w-6 overflow-hidden rounded-full bg-gray-300">
                                <img src="https://picsum.photos/id/237/200/200" alt="Profile" className="h-full w-full object-cover" />
                            </div>
                            <span>r/memes • u/user1 • 2h ago</span>
                        </div>
                        <h3 className="mb-2 text-lg font-bold">Victory at all costs. March of Giants is a new free-to-play 4v4 War MOBA</h3>
                        <div className="mb-2 h-48 w-full rounded-md bg-gray-200"></div>
                        <div className="flex items-center space-x-4 rounded-md text-sm text-gray-600">
                            <VoteButton numberOfVotes={0} />
                            <CommentButton numberOfComment={0} />
                            <ShareButton />
                        </div>
                    </div>
                    <span className="flex items-center">
                        <span className="h-px flex-1 bg-gray-300"></span>
                    </span>
                    <div className="rounded-md bg-white p-4 shadow-md">
                        <div className="mb-2 flex items-center text-sm text-gray-600">
                            <div className="mr-2 h-6 w-6 rounded-full bg-gray-300"></div>
                            <span>r/antiwork • u/user2 • 5h ago</span>
                        </div>
                        <h3 className="mb-2 text-lg font-bold">Got laid off then poached their biggest client. Oops.</h3>
                        <p className="mb-4 text-gray-700">Longer post content preview about the story...</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span className="flex items-center">↑ 16K ↓</span>
                            <span>429 Comments</span>
                            <span>Share</span>
                        </div>
                    </div> */
}
