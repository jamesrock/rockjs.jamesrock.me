(function() {
	
	/*
		
		handle 'defined by' and 'show/hide inherited properties'
		separate events, methods and properties
		show inheritance chain

	*/

	$("code[src]").code();

	var
	outputNode = document.getElementById("exampleScriptOutput");

	// classSelect.addEventListener("change", classSelectChangeHandler);

	// classSelectChangeHandler();

	$("[data-role=\"class\"]").each(function() {

		var 
		$this = $(this),
		className = $this.attr("data-class-name"),
		value = className,
		docsOutputNode = $this.find("[data-class-role=\"docs\"]"),
		docReq = new ROCK.HTTP.GET(["/docs/", value, ".js"].join(""), function(response) {

			docsOutputNode.empty();

			var 
			json = JSON.parse(response),
			methods = json.props,
			props = json.props,
			docNode = ROCK.JQUERY.createNode("div").appendTo(docsOutputNode),
			docNameNode = ROCK.JQUERY.createNode("div").html(json.name).attr("title", "Name").appendTo(docNode),
			// docTypeNode = ROCK.JQUERY.createNode("div").html(json.type).attr("title", "Type").appendTo(docNode),
			docInheritsNode = ROCK.JQUERY.createNode("div").html(json.inherits).attr("title", "Inherits").appendTo(docNode),
			docSrcNode = ROCK.JQUERY.createNode("div").appendTo(docNode),
			docSrcAnchorNode = ROCK.JQUERY.createNode("a").html(json.src).attr("href", json.src).attr("target", "_blank").appendTo(docSrcNode),
			docDescNode = ROCK.JQUERY.createNode("div").html(json.desc).appendTo(docNode),
			docMethodsNode = ROCK.JQUERY.createNode("div").appendTo(docNode).attr("data-role", "methods"),
			docPropsNode = ROCK.JQUERY.createNode("div").appendTo(docNode).attr("data-role", "props");

			for(var i=0;i<methods.length;i++) {

				var 
				method = methods[i],
				params = method.params,
				methodNode = ROCK.JQUERY.createNode("div").appendTo(docMethodsNode).attr("data-role", "method"),
				methodNameNode = ROCK.JQUERY.createNode("div").html(method.name + ":" + method.returns).appendTo(methodNode),
				methodParamsNode = ROCK.JQUERY.createNode("div").appendTo(methodNode).attr("data-role", "params"),
				methodDescNode = ROCK.JQUERY.createNode("div").html(method.desc).appendTo(methodNode);

				for(var p=0;p<params.length;p++) {

					var 
					param = params[p],
					paramNode = ROCK.JQUERY.createNode("div").appendTo(methodParamsNode).attr("data-role", "param"),
					paramNameNode = ROCK.JQUERY.createNode("div").html(param.name + ":" + param.type).appendTo(paramNode),
					paramDescNode = ROCK.JQUERY.createNode("div").html(param.desc).appendTo(paramNode);
					
				};

			};

		});

		docReq.send();

	});

})();