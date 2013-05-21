$(document).ready(function(e) {
    //$(document.body).css("font-family", $(document.body).css("font-family").replace("Arial", "Calibri"));
    $(document).children().each(updateFont);
	function updateFont() {
        var $this = $(this);
        if ($this.css("font-family").toLowerCase().indexOf("helvetica, arial") == 0 
		    || $this.css("font-family").toLowerCase().indexOf("helvetica,arial") == 0 
			|| $this.css("font-family").toLowerCase().indexOf("arial") == 0 
			|| $this.css("font-family").toLowerCase().indexOf("\"arial") == 0 
			|| $this.css("font-family").toLowerCase().indexOf("\"helvetica\", \"arial") == 0
			|| $this.css("font-family").toLowerCase().indexOf("\"helvetica\",\"arial") == 0) {
			$this.css("font-family", "Calibri");
			var fontSizeString = $this.css("font-size");
			var fontSize = parseFloat(fontSizeString);
			if(fontSize == 0)
			    $this.css("font-size", "1em");
			else if(fontSizeString.indexOf("px") != -1)
			    $this.css("font-size", (fontSize + 1).toString() + "px");
			else if(fontSizeString.indexOf("em") != -1)
			    $this.css("font-size", (fontSize + .1).toString() + "em");
        }
        $this.children().each(updateFont);
    }
	
	//$(".chatmsg").keyup(encool);
	$(document).keyup(function(event) {
	    //alert(event.which);
		encool(event);
	});
	
	var modify = true;
	var music = false;
	var _rustify = false;
	var caret_pos = 0;
	 
	function encool(e) {
        if(e.keyCode == 66 && e.ctrlKey == true) {
		    modify = !modify;
		}
		else if(e.keyCode == 66 && e.altKey == true) {
		    _rustify = !_rustify;
		}
		else if(e.keyCode == 77 && e.ctrlKey == true) {
		    music = !music;
		}
		else if(e.ctrlKey == true || e.altKey == true || e.shiftKey == true)
		    return;
		
		if(modify == false || typeof modify == "undefined") return;
		
		var _changedString = '';
		caret_pos = $("textarea.chatmsg").caret().start;
		if(modify == true && _rustify == false)
		    _changedString = change($("textarea.chatmsg").val());
		else _changedString = rustify($("textarea.chatmsg").val());
		//document['f']['original']['value']);
        //document['f']['encooled']['value'] = _changedString;
		
		if(music == true) {
		    _changedString = "♫♪" + _changedString + "♫♪";
			music = false;
		}
		$("textarea.chatmsg").val(_changedString);
		$("textarea.chatmsg").caret(caret_pos, caret_pos);
    }
    var normal = 'abcdefghijklmnopqrstuvwxyz';
    var changed = '\u1D00\u0299\u1D04\u1D05\u1D07\u0493\u0262\u029C\u026A\u1D0A\u1D0B\u029F\u1D0D\u0274\u1D0F\u1D18\u01EB\u0280s\u1D1B\u1D1C\u1D20\u1D21xy\u1D22'; //\u028F\u1D22';
    
    function change(_text) {
	    if(_text == null || _text == '' || typeof _text == "undefined") return;
        var _newString = '';
        var _textString = _text;
        //var _0xbbe2x9 = location['href'];
        for (i = 0; i < _textString.length; i++) {
            var _char = _textString.charAt(i);
            var _counter = 0;
            for ( ; (_counter < normal.length) && (_char != normal.charAt(_counter)); _counter++) {}
            if (_counter < normal.length) {
                _newString += changed.charAt(_counter);
            } else {
                _newString += _char;
            }
        }
        //if (_0xbbe2x9['search']('fsymbols.com/') == -1) {
        //    _0xbbe2x7 += '\x0D\x0A\x0D\x0A' + 'Visit http://fsymbols.com/generators/ for more ^.^ fun.';
        //};
        return _newString;
    }
	
	var rustify_normal=  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ 3";
    
    var rustify_changed= "a\u042ccd\u0454fg\u043d\u0457j\u043al\u043c\u0438\u043epq\u0491\u20b4\u0442\u0446v\u0448\u0436\u0443zABCD\u0404FGH\u0407J\u041aLM\u0418\u041eP\u0424\u042f\u20b4T\u0426V\u0428\u0416\u0423Z \u0417";
    
    var rustify_changed2="a\u0432cd\u0451fg\u043d\u0457j\u043al\u043c\u043f\u043epq\u044f$\u0442\u0446v\u0449\u0436\u0443z\u0414\u0411CD\u0401FGH\u0407J\u041aLM\u0419\u041eP\u0424\u042f$T\u0426V\u0429\u0416\u0423Z \u0417";
    
    function rustify(inpuT)
    {
     var s = "";
     var n = inpuT;
    
     for(i=1; i<n.length; i++)
     {
       var c=n.charAt(i-1)+n.charAt(i);
    
       if(c=="io")
       {
        s+='\u044e'
        i++;
       }
       else
       if(c=="IO")
       {
        s+='\u042e'
        i++;
       }
       else
       if(c=="bi")
       {
        s+='\u044b'
        i++;
       }
       else
       if(c=="BI")
       {
        s+='\u042b'
        i++;
       }
       else
        s+=n.charAt(i-1);
     }
    
     if(n.charAt( n.length-2 )+n.charAt( n.length-1 ) != 'io'  &&  n.charAt( n.length-2 )+n.charAt( n.length-1 ) != 'IO'  &&  n.charAt( n.length-2 )+n.charAt( n.length-1 ) != 'bi'  &&  n.charAt( n.length-2 )+n.charAt( n.length-1 ) != 'BI')
       s+=n.charAt( n.length-1 );
     n=s;
     s="";
    
     for(i=0; i<n.length; i++)
     {
       var c=n.charAt(i);
       var j=0;
       for(; (j<rustify_normal.length)&&(c!=rustify_normal.charAt(j)); j++);
       if (j<rustify_normal.length)  
         if(Math.random()>0.5)
           s+=rustify_changed.charAt(j);
          else
           s+=rustify_changed2.charAt(j);
        else 
         {
          /* checking lowercase is bullshit
          c = c.toLowerCase();
    
          for(j=0; (j<rustify_normal.length)&&(c!=rustify_normal.charAt(j)); j++);
           if (j<rustify_normal.length)  
             {
              if(Math.random()>0.5)
                s+=rustify_changed.charAt(j);
               else
                s+=rustify_changed2.charAt(j);
             }
            else 
           */
             s+=c;
         }
    
     }
    
     return s;
    }
});