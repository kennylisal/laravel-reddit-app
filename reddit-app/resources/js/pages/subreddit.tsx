import BasePost from '@/components/post/base-post';
import PostImageContent from '@/components/post/post-image-content';
import PostLinkContent from '@/components/post/post-link-content';
import PostTextContent from '@/components/post/post-text-content';
import { DisclosurePanel } from '@/components/subreddit/disclosure-panel';
import { flairPanel } from '@/components/subreddit/flair-panel';
import { InfoDescription } from '@/components/subreddit/info-description';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { BreadcrumbItem } from '@/types';
import { SubredditPageInfoType, SubredditPostDataType } from '@/types/reddit-post';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

function contentGenerator(posts: SubredditPostDataType[]) {
    return posts.map((post) => {
        let mainContent = <></>;
        if (post.content_type === 'image') {
            mainContent = <PostImageContent data={post.image} />;
        } else if (post.content_type === 'link') {
            mainContent = <PostLinkContent data={post.content} />;
        } else {
            mainContent = <PostTextContent data={post.content} />;
        }
        const postOwner = (
            <>
                <div className="mr-2 h-6 w-6 overflow-hidden rounded-full bg-gray-300">
                    <img src={post.author.image} alt="Profile" className="h-full w-full object-cover" />
                </div>
                <Link>
                    <span className="text-[13px] font-bold hover:text-blue-700">u/{post.author.slug}</span>
                </Link>
            </>
        );
        return <BasePost data={post} postContent={mainContent} postOwner={postOwner} key={post.slug} />;
    });
}

export default function SubredditPage({ posts, subredditInfo }: { subredditInfo: SubredditPageInfoType; posts: { data: SubredditPostDataType[] } }) {
    const content = contentGenerator(posts.data);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="container mx-auto flex h-full max-w-5xl flex-row items-stretch gap-2 overflow-auto rounded-xl px-4 py-4">
                <div className="h-full w-full overflow-auto" id="first">
                    {...content}
                    <div className="py-4 text-center text-gray-500">Loading more posts... (Infinite Scroll)</div>
                </div>
                <div className="hidden h-fit w-100 overflow-x-clip overflow-y-auto rounded-sm bg-gray-100 lg:block">
                    {InfoDescription(subredditInfo)}
                    {DisclosurePanel(subredditInfo)}
                    {flairPanel(subredditInfo)}
                </div>
            </div>
        </AppLayout>
    );
}
