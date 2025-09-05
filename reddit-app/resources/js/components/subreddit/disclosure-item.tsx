import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';

export const DisclosureItem = ({ header, description, number }: { header: string; description: string; number: string }) => {
    return (
        <Disclosure>
            <DisclosureButton className="my-3 flex w-full flex-row items-center gap-2 text-sm text-gray-500 dark:text-gray-300">
                <div className="px-2.5">{number}</div>
                <div className="grow">
                    <p className="line-clamp-1 text-start">{header}</p>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-4 font-bold text-gray-950"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </DisclosureButton>
            <DisclosurePanel>
                <p className="ml-8 text-sm text-gray-500 dark:text-gray-300">{description}</p>
            </DisclosurePanel>
        </Disclosure>
    );
};
