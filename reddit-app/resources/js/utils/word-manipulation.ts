export function capitalizeFirstLetter(str: string): string {
    if (!str) return str; // Handle empty string
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function capitalizeAllLetter(str: string): string {
    if (!str) return str;
    let res = '';
    Array.from({ length: str.length }).map((_, i) => {
        res += str.charAt(i).toUpperCase();
    });
    return res;
}
