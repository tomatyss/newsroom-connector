export const config = {
	connectorName: 'Newsroom Connector',
	models: ['gpt-4o', 'gpt-4-turbo', 'gpt-3.5-turbo', 'claude-3-haiku-20240307'],
	properties: [
		{
			id: 'prompt',
			name: 'System Prompt',
			value:
				"Answer the user's questions based on the below context:\n\n{context}",
			type: 'string',
		},
		{
			id: 'max_tokens',
			name: 'Max Tokens',
			value: 2048,
			type: 'number',
		},
		{
			id: 'temperature',
			name: 'Temperature',
			value: 0,
			type: 'number',
		},
		{
			id: 'top_p',
			name: 'Top P',
			value: 1,
			type: 'number',
		},
		{
			id: 'top_k',
			name: 'Top K',
			value: 0,
			type: 'number',
		},
		{
			id: 'frequency_penalty',
			name: 'Frequency Penalty',
			value: 0.5,
			type: 'number',
		},
		{
			id: 'presence_penalty',
			name: 'Presence Penalty',
			value: 0.5,
			type: 'number',
		},
	],
	settings: [
		{
			id: 'URL',
			name: 'URL',
			value: '',
			type: 'string',
		},
	],
	description: '',
	author: 'tomatyss',
	iconBase64:
		'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuNjY2NjcgMy4zMzMzNUM0LjY2NjY3IDEuODYwNTkgNS44NjA1NyAwLjY2NjY4NyA3LjMzMzMzIDAuNjY2Njg3QzguODA2MDcgMC42NjY2ODcgMTAgMS44NjA1OSAxMCAzLjMzMzM1SDEyQzEyLjM2ODIgMy4zMzMzNSAxMi42NjY3IDMuNjMxODMgMTIuNjY2NyA0LjAwMDAyVjYuMDAwMDJDMTQuMTM5NCA2LjAwMDAyIDE1LjMzMzMgNy4xOTM5NSAxNS4zMzMzIDguNjY2NjlDMTUuMzMzMyAxMC4xMzk0IDE0LjEzOTQgMTEuMzMzNCAxMi42NjY3IDExLjMzMzRWMTMuMzMzNEMxMi42NjY3IDEzLjcwMTYgMTIuMzY4MiAxNCAxMiAxNEgyLjY2NjY3QzIuMjk4NDggMTQgMiAxMy43MDE2IDIgMTMuMzMzNFY0LjAwMDAyQzIgMy42MzE4MyAyLjI5ODQ4IDMuMzMzMzUgMi42NjY2NyAzLjMzMzM1SDQuNjY2NjdaTTcuMzMzMzMgMi4wMDAwMkM2LjU5Njk1IDIuMDAwMDIgNiAyLjU5Njk3IDYgMy4zMzMzNUM2IDMuNDkwMzggNi4wMjY4NyAzLjYzOTcgNi4wNzU3IDMuNzc3ODVDNi4xNDc4MSAzLjk4MTkgNi4xMTY0MSA0LjIwODI1IDUuOTkxNDUgNC4zODQ5NUM1Ljg2NjQ5IDQuNTYxNjQgNS42NjM1NSA0LjY2NjY5IDUuNDQ3MTQgNC42NjY2OUgzLjMzMzMzVjEyLjY2NjdIMTEuMzMzM1YxMC41NTI5QzExLjMzMzMgMTAuMzM2NSAxMS40Mzg0IDEwLjEzMzYgMTEuNjE1MSAxMC4wMDg2QzExLjc5MTggOS44ODM2MiAxMi4wMTgxIDkuODUyMjIgMTIuMjIyMSA5LjkyNDM1QzEyLjM2MDMgOS45NzMxNSAxMi41MDk3IDEwIDEyLjY2NjcgMTBDMTMuNDAzMSAxMCAxNCA5LjQwMzA5IDE0IDguNjY2NjlDMTQgNy45MzAyOSAxMy40MDMxIDcuMzMzMzUgMTIuNjY2NyA3LjMzMzM1QzEyLjUwOTcgNy4zMzMzNSAxMi4zNjAzIDcuMzYwMjIgMTIuMjIyMSA3LjQwOTAyQzEyLjAxODEgNy40ODExNSAxMS43OTE4IDcuNDQ5NzUgMTEuNjE1MSA3LjMyNDgyQzExLjQzODQgNy4xOTk4MiAxMS4zMzMzIDYuOTk2ODkgMTEuMzMzMyA2Ljc4MDQ5VjQuNjY2NjlIOS4yMTk1M0M5LjAwMzEzIDQuNjY2NjkgOC44MDAyIDQuNTYxNjQgOC42NzUyIDQuMzg0OTVDOC41NTAyNyA0LjIwODI1IDguNTE4ODcgMy45ODE5IDguNTkxIDMuNzc3ODVDOC42Mzk4IDMuNjM5NyA4LjY2NjY3IDMuNDkwMzkgOC42NjY2NyAzLjMzMzM1QzguNjY2NjcgMi41OTY5NyA4LjA2OTczIDIuMDAwMDIgNy4zMzMzMyAyLjAwMDAyWiIgZmlsbD0iIzZGNzM3QSIvPgo8L3N2Zz4K',
};
