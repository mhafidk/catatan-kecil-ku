class SearchState {
	query = $state("");

	reset() {
		this.query = "";
	}
}

export const searchState = new SearchState();
