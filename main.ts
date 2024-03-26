import { config } from './config.js';

const URL = 'URL';

interface Message {
	role: 'system' | 'user' | 'assistant';
	content: string;
}

interface Completion {
	Content: string | null;
	TokenUsage: number | undefined;
}

interface ConnectorResponse {
	Completions: Completion[];
	ModelType: string;
}

interface ApiResponse {
	response: string;
}

const mapToResponse = (
	outputs: ApiResponse[],
	model: string,
): ConnectorResponse => {
	return {
		Completions: outputs.map((output) => ({
			Content: output.response,
			TokenUsage: undefined,
		})),
		ModelType: model,
	};
};

async function main(
	model: string,
	prompts: string[],
	properties: Record<string, unknown>,
	settings: Record<string, unknown>,
): Promise<ConnectorResponse> {
	const messageHistory: Message[] = [];
	const outputs: ApiResponse[] = [];

	const { prompt, ...restProperties } = properties;
	const systemPrompt = (prompt ||
		config.properties.find((prop) => prop.id === 'prompt')?.value) as string;

	try {
		for (const prompt of prompts) {
			messageHistory.push({ role: 'user', content: prompt });

			const response = await fetch(settings?.[URL] as string, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					model: model,
					system_prompt: systemPrompt,
					messages: messageHistory,
					properties: restProperties,
				}),
			});

			const data: { response: string } = await response.json();

			const assistantResponse = data.response;

			messageHistory.push({ role: 'assistant', content: assistantResponse });

			outputs.push(data);
		}

		return mapToResponse(outputs, model);
	} catch (error) {
		console.error('Error in main function:', error);
		throw error;
	}
}

export { main, config };
