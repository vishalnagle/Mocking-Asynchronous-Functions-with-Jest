const fetchData = () => {
    return Promise.resolve({ title: "a new pizza" });
}

const _fetchData = fetchData;
export { _fetchData as fetchData };

const loadTitle = async () => {
    try {
        const extractedData = await fetchData();
        if (!extractedData || !extractedData.title) {
            throw new Error("Invalid data structure");
        }
        const title = extractedData.title;
        const transformedTitle = title.toUpperCase();
        return transformedTitle;
    } catch (error) {
        console.error("Error loading title:", error);
    }
}

const printTitle = async () => {
    try {
        const title = await loadTitle();
        if (title) {
            console.log(title);
        }
    } catch (error) {
        console.error("Error printing title:", error);
    }
}

export { loadTitle, printTitle };
