{
	"name": "ROCK.HTTP",
	"inherits": "ROCK.Object",
	"type": "STATIC",
	"src": "http://js.jamesrock.me/ROCK/6.0/ROCK.HTTP.js",
	"desc": "For executing HTTP requests.",
	"props": [
		{
			"name": "new HTTP.GET(url)",
			"params": [
				{
					"name": "url",
					"desc": "URL to request.",
					"type": "String"
				}
			],
			"desc": "Creates an instance of HTTP.GET.",
			"returns": "HTTP.GET"
		},
		{
			"name": "new HTTP.POST(url)",
			"params": [
				{
					"name": "url",
					"desc": "URL to request.",
					"type": "String"
				}
			],
			"desc": "Creates an instance of HTTP.POST.",
			"returns": "HTTP.POST"
		},
		{
			"name": "send()",
			"params": [],
			"desc": "Invokes the HTTP request.",
			"returns": "Object"
		},
		{
			"name": "abort()",
			"params": [],
			"desc": "Cancels the HTTP request.",
			"returns": "Object"
		},
		{
			"name": "setParam(key, value)",
			"params": [
				{
					"name": "key",
					"desc": "",
					"type": "String"
				},
				{
					"name": "value",
					"desc": "",
					"type": "String"
				}
			],
			"desc": "Sets a parameter to be sent along with the request.",
			"returns": "Object"
		},
		{
			"name": "setHeader(key, value)",
			"params": [
				{
					"name": "key",
					"desc": "",
					"type": "String"
				},
				{
					"name": "value",
					"desc": "",
					"type": "String"
				}
			],
			"desc": "Sets a header to be sent along with the request.",
			"returns": "Object"
		}
	]
}