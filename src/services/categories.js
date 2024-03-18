export const getCategories = async(resource) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}`);
    const anime = await response.json();
    return anime;
}
