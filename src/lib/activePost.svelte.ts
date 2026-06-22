import type { Post } from "./types";

class ActivePostState {
	post = $state<Post | null>(null);
}

export const activePostState = new ActivePostState();
