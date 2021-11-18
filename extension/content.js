window.onload = function() {
    function insert_HTML(item_code){
	var simple_URL = 'https://www.amazon.co.jp/dp/' + item_code + '/';
	var line_element = document.getElementsByClassName('a-icon-share-line')[0].parentElement;
	var span_element = document.createElement('span');
	span_element.classList.add('a-letter-space');
	var new_element = document.createElement('input');
	new_element.type='button';
	new_element.value='リンクをコピー';
	new_element.id='link_button';
	
	line_element.after(span_element);
	span_element.after(new_element);
	
	document.getElementById('link_button').onclick = () => {
	    navigator.clipboard.writeText(simple_URL);
	};
    };
  
    if(location.hostname == "www.amazon.co.jp"){
	if(location.pathname.match(/^(\/[^/]+)?\/dp\/([^/]+)/)) {
	    var item_code = RegExp.$2;
	    insert_HTML(item_code);
	}
	else if(location.pathname.match(/^\/gp\/product\/([^/]+)/)) {
	    var item_code = RegExp.$1;
	    insert_HTML(item_code);
	}
    }
};
