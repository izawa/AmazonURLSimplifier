window.onload = function() {
    function insert_HTML(item_code){
	var simple_URL = 'https://www.amazon.co.jp/dp/' + item_code + '/';
	var title = document.getElementById('productTitle').innerText;
	simple_URL = title + "\n" + simple_URL;

	var cart_element = document.getElementById('add-to-wishlist-button-group');
	
        var hr_element = document.createElement('hr');
	hr_element.className = 'a-spacing-mini a-spacing-top-mini a-divider-normal';
	var span_element = document.createElement('span');
	span_element.classList.add('a-letter-space');
	
	var new_element = document.createElement('input');
	new_element.type='button';
	new_element.value='リンクをコピー';
	new_element.id='link_button';

	cart_element.after(hr_element);
	hr_element.after(span_element);
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
