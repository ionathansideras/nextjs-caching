import Messages from "@/components/messages";
import { unstable_noStore } from "next/cache";

// settings for file cache configuration
// export const revalidate = 5;
// export const dynamic = "force-dynamic";

export default async function MessagesPage() {
    // this will disable the cache for this request
    // unstable_noStore();
    // we add a tag so we revalidate the cache for this tag when we create a new message
    const response = await fetch("http://localhost:8080/messages", {
        next: {
            tags: ["msg"],
        },
    });
    const messages = await response.json();

    if (!messages || messages.length === 0) {
        return <p>No messages found</p>;
    }

    return <Messages messages={messages} />;
}
