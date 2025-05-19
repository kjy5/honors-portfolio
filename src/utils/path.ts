export function withBasePath(path: string): string {
	return `${import.meta.env.BASE_URL}/${path}`;
}

export function withArtifactPath(path: string): string {
	return withBasePath(`artifacts/${path}`);
}
