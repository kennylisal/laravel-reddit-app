import { SubredditPageInfoType } from '@/types/reddit-post';
import { capitalizeFirstLetter } from '@/utils/word-manipulation';

export const InfoDescription = (subredditInfo: SubredditPageInfoType) => {
    const subredditBirthDay = `Created ${new Date(subredditInfo.created_at).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    })}`;
    return (
        <>
            <div className="p-4">
                <div className="col-span-2 rounded-md">
                    <p className="text-sm font-[1000] text-gray-800">{subredditInfo.description_header}</p>
                    <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-300">{subredditInfo.description}</p>
                </div>
                <div className="my-2 flex flex-col gap-1">
                    <div className="flex flex-row items-end gap-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="size-5 text-gray-500"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z"
                            />
                        </svg>
                        <span className="text-[13px] text-gray-500 dark:text-gray-300">{subredditBirthDay}</span>
                    </div>
                    <div className="flex flex-row gap-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="size-5 text-gray-500"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                            />
                        </svg>

                        <span className="text-[14px] text-gray-500 dark:text-gray-300">{capitalizeFirstLetter(subredditInfo.type)}</span>
                    </div>
                </div>
                <div className="item flex flex-row justify-start gap-4">
                    <div className="h-10 flex-1">
                        <p className="text-sm font-[1000] text-black">4.9M</p>
                        <p className="text-[12px] leading-relaxed font-[400] text-gray-500 dark:text-gray-300">Members</p>
                    </div>
                    <div className="h-10 flex-1">
                        <p className="text-sm font-[1000] text-black">4.9M</p>
                        <div className="flex flex-row items-center gap-1">
                            <div className="inline-block h-2 w-2 rounded-full bg-green-600"></div>
                            <p className="text-[12px] leading-relaxed font-[400] text-gray-500 dark:text-gray-300">Online</p>
                        </div>
                    </div>
                    <div className="h-10 flex-1">
                        <p className="text-sm font-[1000] text-black">4.9M</p>
                        <p className="text-[12px] leading-relaxed font-[400] text-gray-500 dark:text-gray-300">Rank by size</p>
                    </div>
                </div>
            </div>
            <span className="flex items-center">
                <span className="h-px flex-1 bg-gray-300"></span>
            </span>
        </>
    );
};
