const err = {
	message: "Request failed with status code 422",
	name: "AxiosError",
	stack:
		"AxiosError: Request failed with status code 422\n    at settle (webpack-internal:///./node_modules/axios/lib/core/settle.js:24:12)\n    at XMLHttpRequest.onloadend (webpack-internal:///./node_modules/axios/lib/adapters/xhr.js:117:66)",
	config: {
		transitional: {
			silentJSONParsing: true,
			forcedJSONParsing: true,
			clarifyTimeoutError: false,
		},
		adapter: ["xhr", "http"],
		transformRequest: [null],
		transformResponse: [null],
		timeout: 0,
		xsrfCookieName: "XSRF-TOKEN",
		xsrfHeaderName: "X-XSRF-TOKEN",
		maxContentLength: -1,
		maxBodyLength: -1,
		env: {},
		headers: {
			Accept: "application/json, text/plain, */*",
			"Content-Type": "application/json",
		},
		method: "post",
		url: "http://localhost:4000/api/v1/users/register",
		data: '{"email":"austinhwangkr@gmail.com","password":"passw","name":"황겸이테스트2"}',
	},
	code: "ERR_BAD_REQUEST",
	status: 422,
};
