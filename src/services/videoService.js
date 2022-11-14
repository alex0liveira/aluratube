import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://gehkplgpoluiletoknko.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdlaGtwbGdwb2x1aWxldG9rbmtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzODg1MzAsImV4cCI6MTk4Mzk2NDUzMH0.YAg8FwVk0sXkSXBPcbM2gEmSjwtMrlr3B_f1g7BfRwo";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                .select("*");
        }
    }
}