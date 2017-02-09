{
	"name": "ROCK.MATH",
	"inherits": "Object",
	"type": "STATIC",
	"src": "http://js.jamesrock.me/ROCK/6.0/ROCK.MATH.js",
	"desc": "For performing common math commands.",
	"props": [
		{
			"name": "random(min, max)",
			"params": [
				{
					"name": "min",
					"desc": "",
					"type": "Number"
				},
				{
					"name": "max",
					"desc": "",
					"type": "Number"
				}
			],
			"desc": "Returns a random Number between the min and max values supplied.",
			"returns": "Number"
		},
		{
			"name": "roundTo(value, accuracy)",
			"params": [
				{
					"name": "value",
					"desc": "",
					"type": "Number"
				},
				{
					"name": "accuracy",
					"desc": "",
					"type": "Number"
				}
			],
			"desc": "Rounds number to the nearest supplied accuracy.",
			"returns": "Number"
		},
		{
			"name": "floorTo(value, accuracy)",
			"params": [
				{
					"name": "value",
					"desc": "",
					"type": "Number"
				},
				{
					"name": "accuracy",
					"desc": "",
					"type": "Number"
				}
			],
			"desc": "Rounds number down to the nearest supplied accuracy.",
			"returns": "Number"
		},
		{
			"name": "ceilTo(value, accuracy)",
			"params": [
				{
					"name": "value",
					"desc": "",
					"type": "Number"
				},
				{
					"name": "accuracy",
					"desc": "",
					"type": "Number"
				}
			],
			"desc": "Rounds number up to the nearest supplied accuracy.",
			"returns": "Number"
		},
		{
			"name": "toCurrency(value)",
			"params": [
				{
					"name": "value",
					"desc": "",
					"type": "Number"
				}
			],
			"desc": "",
			"returns": "Number"
		},
		{
			"name": "getXPercentOfY(x, y)",
			"params": [
				{
					"name": "x",
					"desc": "",
					"type": "Number"
				},
				{
					"name": "y",
					"desc": "",
					"type": "Number"
				}
			],
			"desc": "",
			"returns": "Number"
		},
		{
			"name": "getXAsPercentOfY(x, y)",
			"params": [
				{
					"name": "x",
					"desc": "",
					"type": "Number"
				},
				{
					"name": "y",
					"desc": "",
					"type": "Number"
				}
			],
			"desc": "",
			"returns": "Number"
		}
	]
}