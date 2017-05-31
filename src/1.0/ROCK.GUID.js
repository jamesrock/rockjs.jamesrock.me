(function() {

	var 
	chars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
	chars = chars.reverse(),
	charsCount = chars.length;
	
	var GuidCharCollection = ROCK.defineClass("PRIVATE", "STATIC", "GuidCharCollection", ROCK.createClass(ROCK.Collection, function GuidCharCollection() {
		
		while(charsCount--) {
			this.append(chars[charsCount]);
		};
		
	}));
	
	var GUID = ROCK.defineClass("PUBLIC", "STATIC", "GUID", ROCK.createClass(Object, function GUID() {}));
	GUID.setProp("length", 10);
	GUID.setProp("chars", GuidCharCollection);
	GUID.setProp("get", function() {
			
		var
		_return = this.chars.getRandom(0, 50),
		lengthOf = (this.length-1);
		
		while(lengthOf--) {
		
			_return += this.chars.getRandom();
		
		};
		
		return _return;
		
	});
	
})();