import { redirect } from "next/navigation";

import { addMessage } from "@/lib/messages";
import { revalidatePath, revalidateTag } from "next/cache";

export default function NewMessagePage() {
    async function createMessage(formData) {
        "use server";

        const message = formData.get("message");
        addMessage(message);
        // clear the cache for the messages page so we can see the new message
        // revalidatePath("/messages");
        // clears the cache for all the "msg" tags that are set on some fetch requests
        revalidateTag("msg");
        redirect("/messages");
    }

    return (
        <>
            <h2>New Message</h2>
            <form action={createMessage}>
                <p className="form-control">
                    <label htmlFor="message">Your Message</label>
                    <textarea id="message" name="message" required rows="5" />
                </p>

                <p className="form-actions">
                    <button type="submit">Send</button>
                </p>
            </form>
        </>
    );
}
