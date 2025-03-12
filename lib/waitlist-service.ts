import { supabase } from "./supabase-config";

export interface WaitlistEntry {
  email: string;
  createdAt: Date;
}

export async function addToWaitlist(
  email: string
): Promise<{ success: boolean; message: string }> {
  try {
    // First check if email already exists
    const { data: existingEntry } = await supabase
      .from("waitlist")
      .select("email")
      .eq("email", email)
      .single();

    if (existingEntry) {
      return {
        success: false,
        message: "You are already on the waitlist",
      };
    }

    // If email doesn't exist, insert it
    const { error } = await supabase
      .from("waitlist")
      .insert([{ email, created_at: new Date() }]);

    if (error) throw error;

    return {
      success: true,
      message: "Successfully added to waitlist",
    };
  } catch (error) {
    console.error("Error adding to waitlist:", error);
    return {
      success: false,
      message: "Failed to add to waitlist",
    };
  }
}
