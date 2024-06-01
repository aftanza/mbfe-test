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
        "X-API-Key":
            "5kabLpHY9R6w6pfhqYp68YSnkYy5z0RxN8W6rQL1k8DcmWkwn8q3jJzb9PL736hhA7tBx0nxE1Z70V3VFcGEaCYyH87pZPL1ziX02nVxVPYKxVfwHDkkw4VnYTantX8zKkayRRhdLgRqcpYrFbuUHQYnPcHDeWw2gXkdnNDrNrqntDAw7YA23ejavp9HFi8RHK8VfJUq1VXKUCmjCxi6vrLzuV6f7mCjYyZZqzfgr1rGTTZXZ9G3TX5M9kpPQyJy",
    };
    const finalInit = {
        ...init,
        headers: finalHeaders,
    };
    return fetch(input, finalInit);
}
