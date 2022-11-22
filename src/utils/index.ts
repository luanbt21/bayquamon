import { browser } from '$app/environment'

// e.g. /en/blog/article-1 => /de/blog/article-1
export const replaceLocaleInUrl = (path: string, locale: string): string => {
	const [, , ...rest] = path.split('/')
	return `/${[locale, ...rest].join('/')}`
}

export const getUserId = () => {
	if (browser) {
		return document.cookie
			.split('; ')
			.find((row) => row.startsWith('userId='))
			?.split('=')[1]
	}
}

export const fileListToUrl = (fileList?: FileList) => {
	if (!fileList) return []
	const urls = []
	for (const file of fileList) {
		urls.push(URL.createObjectURL(file))
	}
	return urls
}

/** Return space repetition time in mini seconds */
export const calculateSpaceTime = (level: number) => {
	const weight = 10 * 60 * 1000
	if (level > 1) {
		return (level - 1 + level) * weight
	}
	return 2 * weight
}
