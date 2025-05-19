function withBase(path: string): string {
	return `${import.meta.env.BASE_URL}/${path}`;
}

export function indexPath(path: string): string {
    return withBase(`${path}`);
}

export function artifactPath(path: string): string {
    return withBase(`artifacts/${path}`);
}
