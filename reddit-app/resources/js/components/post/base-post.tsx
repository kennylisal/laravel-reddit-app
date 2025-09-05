import { JSX } from 'react';
import CommentButton from './comment-button';

import { BasePostDataType } from '@/types/reddit-post';
import ShareButton from './share-button';
import VoteButton from './vote-button';
export default function BasePost({ data, postContent, postOwner }: { data: BasePostDataType; postOwner: JSX.Element; postContent: JSX.Element }) {
    return (
        <>
            <div className="rounded-md bg-white px-4 py-2 hover:bg-gray-100">
                <div className="mb-2 flex items-center text-sm text-gray-600">
                    {postOwner}
                    <span className="text-[13px]">&nbsp;• {data.postAge}</span>
                </div>
                <h3 className="text-xl font-bold">{data.title}</h3>
                {postContent}
                <div className="flex items-center space-x-4 rounded-md text-sm text-gray-600">
                    <VoteButton numberOfVotes={data.like_num} />
                    <CommentButton numberOfComment={data.comment_num} />
                    <ShareButton />
                </div>
            </div>
            <span className="my-2 flex items-center">
                <span className="h-px flex-1 bg-gray-300"></span>
            </span>
        </>
    );
}
