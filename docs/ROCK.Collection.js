{
	"name": "ROCK.Collection",
	"inherits": "ROCK.Array",
	"type": "DYNAMIC",
	"src": "http://js.jamesrock.me/ROCK/6.0/ROCK.Collection.js",
	"desc": "An extension of Array, with additional convenience methods.",
	"props": [
		{
			"name": "new ROCK.Collection()",
			"params": [],
			"desc": "Constructor.",
			"returns": "Collection"
		},
		{
			"name": "append(object)",
			"params": [
				{
					"name": "object",
					"desc": "Object to be appened.",
					"type": "Object"
				}
			],
			"desc": "Adds an object to the end of a Collection.",
			"returns": "Object"
		},
		{
			"name": "prepend(object)",
			"params": [
				{
					"name": "object",
					"desc": "Object to be prepended.",
					"type": "Object"
				}
			],
			"desc": "Adds an object to the beginning of a Collection.",
			"returns": "Object"
		},
		{
			"name": "getItemByKeyValue(key, value)",
			"params": [
				{
					"name": "key",
					"desc": "",
					"type": "String"
				},
				{
					"name": "value",
					"desc": "",
					"type": "Object"
				}
			],
			"desc": "Retrieves an Object which matches the supplied key and value.",
			"returns": "Object"
		},
		{
			"name": "getItemsByKeyValue(key, value)",
			"params": [
				{
					"name": "key",
					"desc": "",
					"type": "String"
				},
				{
					"name": "value",
					"desc": "",
					"type": "Object"
				}
			],
			"desc": "Retrieves a Collection of Objects which match the supplied key and value.",
			"returns": "Collection"
		},
		{
			"name": "exists(object)",
			"params": [
				{
					"name": "object",
					"desc": "",
					"type": "Object"
				}
			],
			"desc": "Checks whether an Object exists within the Collection.",
			"returns": "Boolean"
		},
		{
			"name": "filter(callback)",
			"params": [
				{
					"name": "callback",
					"desc": "To be called on interation of each item. If this function returns 'true'; the corresponding item would be filtered into the output Collection.",
					"type": "Function"
				}
			],
			"desc": "",
			"returns": "Collection"
		},
		{
			"name": "query(callback)",
			"params": [
				{
					"name": "callback",
					"desc": "To be called on interation of each item. If this function returns 'true'; the corresponding item would be returned as part of the output Collection.",
					"type": "Function"
				}
			],
			"desc": "",
			"returns": "Collection"
		},
		{
			"name": "each(callback)",
			"params": [
				{
					"name": "callback",
					"desc": "Called upon iteration of each item. Receives two arguments, the object being iterated and the index of the current interration.",
					"type": "Function"
				}
			],
			"desc": "",
			"returns": "Collection"
		},
		{
			"name": "random()",
			"params": [],
			"desc": "Retrieves a random Object from the Collection.",
			"returns": "Object"
		},
		{
			"name": "remove(object)",
			"params": [
				{
					"name": "object",
					"desc": "",
					"type": "Object"
				}
			],
			"desc": "",
			"returns": "Void"
		},
		{
			"name": "removeAt(index)",
			"params": [
				{
					"name": "index",
					"desc": "",
					"type": "Number"
				}
			],
			"desc": "",
			"returns": "Void"
		},
		{
			"name": "addAt(object, index)",
			"params": [
				{
					"name": "object",
					"desc": "",
					"type": "Object"
				},
				{
					"name": "index",
					"desc": "",
					"type": "Number"
				}
			],
			"desc": "",
			"returns": "Void"
		},
		{
			"name": "first()",
			"params": [],
			"desc": "Retrieves the first item in the Collection.",
			"returns": "Object"
		},
		{
			"name": "last()",
			"params": [],
			"desc": "Retrieves the last item in the Collection.",
			"returns": "Object"
		},
		{
			"name": "swap(indexA, indexB)",
			"params": [
				{
					"name": "indexA",
					"desc": "Target index.",
					"type": "Number"
				},
				{
					"name": "indexB",
					"desc": "New index.",
					"type": "Number"
				}
			],
			"desc": "Assigns object at indexB to indexA and vice versa.",
			"returns": "Void"
		}
	]
}