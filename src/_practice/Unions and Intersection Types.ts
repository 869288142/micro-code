// 联合类型
/**
 * Takes a string and adds "padding" to the left.
 * If 'padding' is a string, then 'padding' is appended to the left side.
 * If 'padding' is a number, then that number of spaces is added to the left side.
 */
function padLeft(value: string, padding: string | number) {
    // ...
}

const indentedString = padLeft('Hello world', true);

// 类型别名
type NetworkLoadingState = {
    state: 'loading';
};

type NetworkFailedState = {
    state: 'failed';
    code: number;
};

type NetworkSuccessState = {
    state: 'success';
    response: {
        title: string;
        duration: number;
        summary: string;
    };
};

// Create a type which represents only one of the above types
// but you aren't sure which it is yet.
type NetworkState =
    | NetworkLoadingState
    | NetworkFailedState
    | NetworkSuccessState;
const state: NetworkState = {
    state: 'failed',
    code: 0,
};

// 交叉类型，用于minix情况
interface ErrorHandling {
    success: boolean;
    error?: { message: string };
}

interface ArtworksData {
    artworks: { title: string }[];
}

interface ArtistsData {
    artists: { name: string }[];
}

// These interfaces are composed to have
// consistent error handling, and their own data.

type ArtworksResponse = ArtworksData & ErrorHandling;
type ArtistsResponse = ArtistsData & ErrorHandling;

const handleArtistsResponse = (response: ArtistsResponse) => {
    if (response.error) {
        console.error(response.error.message);
        return;
    }

    console.log(response.artists);
};
