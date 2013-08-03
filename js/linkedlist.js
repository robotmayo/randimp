var LinkedList = function(args){
    var _ll = {};
    var _first;
    var _last;
    var _size = 0;
    _ll.push = function(val){
        var node = new Node(val);
        if(_size === 0){
            _first = _last = node;
        }else{
            _last.next = node;
            node.prev = _last;
            _last = node;
        }
        _size++;
        return node;
    };

    _ll.pop = function(){
        var val = _last;
        _last = _last.prev;
        _size--;
        return val;
    };
    _ll.shift = function(){
        var val = _first;
        _first = _first.next;
        _size--;
        return val;
    }

    _ll.remove = function(index){
        var current = _first
        var val;
        if(index === 0){
            _size--;
            return this.shift();
        }
        if(index === _size){
            return this.pop();
        }
        while(index--){
            current = current.next;
        }
        val = current;
        // Links the broken nodes together
        current.prev.next = current.next;
        current.next.prev = current.prev;
        return val;
    };

    _ll.get = function(index){
        var current;
        if(index === 0) return _first;
        if(index === size-1) return _last;
        current = first;
        while(index--){
            current = current.next;
        }
        return current;
    }
    _ll.size = function(){return _size;}

    _ll.getFirst = function(){
        return _first;
    }
    _ll.getLast = function(){
        return _last;
    }
    _ll.arrayToList = function(arr){
        for(var i = 0; i < arr.length; i++){
            _ll.push(arr[i]);
        }
    }
    _ll.nodesAsArray = function(){
        var ret = [];
        var node = _first;
        while(node){
            ret.push(node.value);
            node = node.next;
        }
        return ret;
    }
    var Node = function(val){
        this.value = val;
        var next = {};
        var prev = {};
    };
    if(args){
        if(typeof args === "object" && args.length){
            _ll.arrayToList(args);
        }else{
            _ll.arrayToList(arguments);
        }
    }
    return _ll;
}