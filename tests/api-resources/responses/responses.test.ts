// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource responses', () => {
  test('create: only required params', async () => {
    const responsePromise = client.responses.create({ input: 'string', model: 'gpt-4o' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.responses.create({
      input: 'string',
      model: 'gpt-4o',
      background: true,
      include: ['file_search_call.results'],
      instructions: 'instructions',
      max_output_tokens: 0,
      metadata: { foo: 'string' },
      parallel_tool_calls: true,
      previous_response_id: 'previous_response_id',
      prompt: { id: 'id', variables: { foo: 'string' }, version: 'version' },
      reasoning: { effort: 'low', generate_summary: 'auto', summary: 'auto' },
      service_tier: 'auto',
      store: true,
      stream: false,
      temperature: 1,
      text: { format: { type: 'text' } },
      tool_choice: 'none',
      tools: [
        {
          name: 'name',
          parameters: { foo: 'bar' },
          strict: true,
          type: 'function',
          description: 'description',
        },
      ],
      top_p: 1,
      truncation: 'auto',
      user: 'user-1234',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.responses.retrieve('resp_677efb5139a88190b512bc3fef8e535d');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.responses.retrieve(
        'resp_677efb5139a88190b512bc3fef8e535d',
        { include: ['file_search_call.results'], starting_after: 0, stream: false },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OpenAI.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.responses.delete('resp_677efb5139a88190b512bc3fef8e535d');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('cancel', async () => {
    const responsePromise = client.responses.cancel('resp_677efb5139a88190b512bc3fef8e535d');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
