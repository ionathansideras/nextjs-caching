import Messages from "@/components/messages";
import { getMessages } from "@/lib/messages";
import { unstable_noStore } from "next/cache";

// settings for file cache configuration
// export const revalidate = 5;
// export const dynamic = "force-dynamic";

export default async function MessagesPage() {
    const messages = await getMessages();

    if (!messages || messages.length === 0) {
        return <p>No messages found</p>;
    }

    return <Messages messages={messages} />;
}
