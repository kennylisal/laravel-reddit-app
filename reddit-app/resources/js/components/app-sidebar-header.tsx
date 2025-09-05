import { SidebarTrigger } from '@/components/ui/sidebar';
import { type BreadcrumbItem as BreadcrumbItemType } from '@/types';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from './ui/command';

export function AppSidebarHeader({ breadcrumbs = [] }: { breadcrumbs?: BreadcrumbItemType[] }) {
    return (
        <header className="flex h-15 shrink-0 items-center gap-2 border-b-2 border-black px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-15 md:px-4">
            <div className="flex w-full items-center gap-2">
                <SidebarTrigger className="-ml-1" />
                <div className="h-9 w-9 rounded-full bg-orange-600"></div>
                {/* <div
                    id="input-container"
                    className="mx-auto flex flex-grow items-center gap-2 rounded-full border-0 bg-gray-200 px-4 py-2 hover:bg-gray-200 focus:border-orange-500 focus:outline-none lg:w-[750px] lg:flex-grow-0"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                    </svg>

                    <input type="text" placeholder="Search Reddit" className="flex-grow border-0 outline-none" />
                </div> */}
                <div
                    id="input-container"
                    className="mx-auto flex flex-grow items-center gap-2 rounded-full border-0 bg-gray-200 px-4 py-2 hover:bg-gray-200 focus:border-orange-500 focus:outline-none lg:w-[750px] lg:flex-grow-0"
                >
                    <div className="relative flex flex-col items-center justify-center">
                        <div className="mt-8 flex justify-center">
                            <Command className="w-[540px] rounded-lg border bg-white shadow-md" shouldFilter={false}>
                                <CommandInput
                                    placeholder="Search by address or postcode"
                                    className="-mr-16 block h-[48px] w-[480px] text-base text-gray-900"
                                />

                                <CommandList>
                                    <CommandEmpty>No results found.</CommandEmpty>
                                    <CommandGroup>
                                        <CommandItem>Halo</CommandItem>
                                    </CommandGroup>
                                    <CommandSeparator />
                                </CommandList>
                            </Command>
                            <button
                                type="button"
                                className="bg-roofone-green-primary mt-[0.75px] -ml-48 h-[48px] w-48 rounded-r-lg px-4 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                            >
                                Calculate rating
                            </button>
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

// <Command>
//     <CommandInput placeholder="Type a command or search..." />
//     <CommandList>
//         <CommandEmpty>No results found.</CommandEmpty>
//         <CommandGroup heading="Suggestions">
//             <CommandItem>Calendar</CommandItem>
//             <CommandItem>Search Emoji</CommandItem>
//             <CommandItem>Calculator</CommandItem>
//         </CommandGroup>
//         <CommandSeparator />
//         <CommandGroup heading="Settings">
//             <CommandItem>Profile</CommandItem>
//             <CommandItem>Billing</CommandItem>
//             <CommandItem>Settings</CommandItem>
//         </CommandGroup>
//     </CommandList>
// </Command>
