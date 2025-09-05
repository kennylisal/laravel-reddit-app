export interface MainPostDataType {
    comment_num: number;
    like_num: number;
    title: string;
    content: string;
    content_type: 'image' | 'text' | 'link';
    image: string;
    slug: string;
    postAge: string;
    subreddit: {
        id: number;
        slug: string;
        image: string;
    };
}

export interface SubredditPageInfoType {
    description: string;
    created_at: Date;
    type: string;
    description_header: string;
    name: string;
    rules: {
        header: string;
        description: string;
    }[];
    flairs: {
        name: string;
        id: number;
    }[];
}

export interface SubredditPostDataType {
    author: {
        image: string;
        slug: string;
    };
    comment_num: number;
    like_num: number;
    title: string;
    content: string;
    content_type: 'image' | 'text' | 'link';
    image: string;
    slug: string;
    postAge: string;
}

export interface BasePostDataType {
    postAge: string;
    title: string;
    like_num: number;
    comment_num: number;
}
