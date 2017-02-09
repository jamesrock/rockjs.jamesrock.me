{
	"name": "ROCK",
	"inherits": "Object",
	"type": "STATIC",
	"src": "http://js.jamesrock.me/ROCK/6.0/ROCK.js",
	"desc": "Defines the ROCK namespace and provides the core extendable objects.",
	"props": [
		{
			"name": "ROCK.Object.extend(prototype)",
			"params": [
				{
					"name": "prototype",
					"desc": "An Object containing the Class's constructor method and other properties and methods",
					"type": "Object"
				}
			],
			"desc": "Creates a Class which inherits from ROCK.Object.",
			"returns": "Class"
		},
		{
			"name": "ROCK.Array.extend(prototype)",
			"params": [
				{
					"name": "prototype",
					"desc": "An Object containing the Class's constructor method and other properties and methods",
					"type": "Object"
				}
			],
			"desc": "Creates a Class which inherits from ROCK.Array.",
			"returns": "Class"
		}
	]
}