import { headers } from "next/headers";

export function dbfetch(
    input: URL | RequestInfo,
    init?: RequestInit | undefined
): Promise<Response> {
    const finalHeaders = {
        ...init?.headers,
        "Content-Type": "application/json",
    };
    const finalInit = {
        ...init,
        headers: finalHeaders,
    };
    return fetch(input, finalInit);
}
export function dbfetch_private(
    input: URL | RequestInfo,
    init?: RequestInit | undefined
): Promise<Response> {
    const finalHeaders = {
        ...init?.headers,
        "Content-Type": "application/json",
        "X-API-Key": "",
    };
    const finalInit = {
        ...init,
        headers: finalHeaders,
    };
    return fetch(input, finalInit);
}
