import { SubredditPageInfoType } from '@/types/reddit-post';
import { capitalizeAllLetter } from '@/utils/word-manipulation';
import { DisclosureItem } from './disclosure-item';

export const DisclosurePanel = (subredditInfo: SubredditPageInfoType) => {
    const disclosures = SubredditDisclosureGenerator(subredditInfo.rules);
    return (
        <>
            <div className="px-4 py-3">
                <p className="text-[12px] leading-relaxed font-[500] text-gray-500 dark:text-gray-300">
                    R/{capitalizeAllLetter(subredditInfo.name)} RULES
                </p>
                {...disclosures}
            </div>
            <span className="flex items-center">
                <span className="h-px flex-1 bg-gray-300"></span>
            </span>
        </>
    );
};

function SubredditDisclosureGenerator(
    data: {
        header: string;
        description: string;
    }[],
) {
    return data.map((e, i) => <DisclosureItem description={e.description} header={e.header} number={`${i + 1}`} />);
}
