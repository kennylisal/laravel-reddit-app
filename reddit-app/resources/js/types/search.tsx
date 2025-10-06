interface SearchObject {
    name: string;
    slug: string;
    image: string;
    members_num: number;
}
interface SearchResults {
    results: SearchObject[];
    length: number;
}
export type { SearchObject, SearchResults };
