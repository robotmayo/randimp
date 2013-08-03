var Stack = function(args){
	var _list = [];
	var _length = 0;
	var _stack = {};
	_stack.length = function() {return _length;}
	_stack.add = function(item){
		_length++;
		_list[_length] = item;
	}
	_stack.remove = function(){
		_length--;
		return _list.pop();
	}
	_stack.contains = function(item){
		for(var i = 0; i < _length; i++){
			if(_list[i] === item) return true;
		}
		return false;
	}
	_stack.addAll = function(items){
		var len = items.length;
		for(var i = 0; i < len; i++){
			_stack.add(items[i]);
		}
	}
	if(args){
		var len = 0;
		var i = 0;
		if(Object.prototype.toString.call(args) === "[object Array]"){
			len = args.length;
			for(i = 0; i < len; i++){
				_stack.add(args[i]);
			}
		}else{
			len = arguments.length;
			for(var i = 0; i < len; i++){
				_stack.add(arguments[i]);
			}
		}
		
	}
	return _stack;
}