import { SidebarTrigger } from '@/components/ui/sidebar';
import { type BreadcrumbItem as BreadcrumbItemType } from '@/types';
import { SearchResults } from '@/types/search';
import { useEffect, useState } from 'react';
import { Command, CommandInput } from './ui/command';

function useDebounce({ value, delay }: { value: string; delay: number }) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        if (value.length > 2) {
            const handler = setTimeout(() => {
                setDebounceValue(value);
            }, delay);
            return () => {
                clearTimeout(handler);
            };
        }
    }, [value, delay]);
    return debounceValue;
}

function CommandWithDebounce({ onDebounce }: { onDebounce: (data: SearchResults) => void }) {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce({ value: searchTerm, delay: 500 });

    useEffect(() => {
        const search = async (query: string) => {
            try {
                const response = await fetch(`/search?search=${encodeURIComponent(query)}`, {
                    method: 'GET',
                    headers: { Accept: 'application/json' },
                });

                const data: SearchResults = await response.json();
                onDebounce(data);
                // return data;
                // console.log(data);
            } catch (error) {
                console.log(error);
            }
        };
        if (debouncedSearchTerm) {
            console.log('Debounced search:', debouncedSearchTerm);
        }
        search(debouncedSearchTerm);
    }, [debouncedSearchTerm]);

    const handleInputChange = (value: string) => {
        setSearchTerm(value);
    };

    return (
        <CommandInput
            placeholder="Search by address or postcode"
            className="mr-16 block h-[48px] w-[480px] text-base text-gray-900"
            value={searchTerm}
            onValueChange={handleInputChange}
        />
    );
}

export function AppSidebarHeader({ breadcrumbs = [] }: { breadcrumbs?: BreadcrumbItemType[] }) {
    const [searchResults, setSearchResults] = useState<SearchResults | null>(null);
    const onDebounceSearch = (data: SearchResults | null) => {
        if (!data) {
            setSearchResults(null);
            return;
        }
        setSearchResults(data);
    };
    useEffect(() => {
        console.log(searchResults);
    }, [searchResults]);

    return (
        <header className="flex h-18 shrink-0 items-center gap-2 border-b-2 border-black px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-15 md:px-4">
            <div className="flex w-full items-center gap-2">
                <SidebarTrigger className="-ml-1" />
                {/* <text>{searchResults ? searchResults.length : 'xxxx'}</text> */}
                <div className="h-9 w-9 rounded-full bg-orange-600"></div>

                <div
                    id="input-container"
                    // className="mx-auto flex flex-grow items-center gap-2 rounded-full border-0 bg-gray-200 px-4 py-2 hover:bg-gray-200 focus:border-orange-500 focus:outline-none lg:w-[750px] lg:flex-grow-0"
                    className="mx-auto flex flex-grow gap-2 rounded-full border-0 focus:border-orange-500 focus:outline-none lg:w-[750px] lg:flex-grow-0"
                >
                    <div className="fixed top-4.5 flex-col">
                        <div className="flex">
                            <Command className="w-[540px] rounded-lg border bg-gray-100 shadow-md hover:bg-gray-200" shouldFilter={true}>
                                <CommandWithDebounce onDebounce={onDebounceSearch} />

                                {/* <CommandInput
                                    placeholder="Search by address or postcode"
                                    className="mr-16 block h-[48px] w-[480px] text-base text-gray-900"
                                /> */}
                                {/* <CommandList className="bg-white">
                                    <CommandEmpty>No results found.</CommandEmpty>
                                    <CommandGroup>
                                        <CommandItem>Halo</CommandItem>
                                        <CommandItem>Halo1</CommandItem>
                                        <CommandItem>Halo2</CommandItem>
                                    </CommandGroup>
                                    <CommandSeparator />
                                </CommandList> */}
                            </Command>
                        </div>
                    </div>
                </div>

                <GuestHeaderAction />
            </div>
        </header>
    );
}

function GuestHeaderAction() {
    return (
        <div className="ml-auto flex items-center space-x-4">
            <button className="rounded-full bg-orange-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-blue-600">Log In</button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
            </svg>
        </div>
    );
}
