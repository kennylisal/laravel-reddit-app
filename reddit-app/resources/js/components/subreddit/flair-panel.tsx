import { SubredditPageInfoType } from '@/types/reddit-post';
import { capitalizeAllLetter } from '@/utils/word-manipulation';

export const flairPanel = (subredditInfo: SubredditPageInfoType) => {
    const flairItems = subredditInfo.flairs.map((e) => (
        <div className="inline-block rounded-full bg-gray-950 px-2.5 py-1.5 text-xs font-medium text-white">{e.name}</div>
    ));
    return (
        <div className="p-4">
            <p className="text-[12px] leading-relaxed font-[500] text-gray-500 dark:text-gray-300">
                R/{capitalizeAllLetter(subredditInfo.name)} RULES
            </p>
            <div className="mt-4 flex flex-wrap gap-2">{...flairItems}</div>
        </div>
    );
};
