const getUrl = (url: string) => {
	const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
	return `${baseUrl}/${url}`
}

export const apiRoutes = {
	signup: getUrl("core/api/register/"),
}