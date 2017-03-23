var xhr = new XMLHttpRequest(); //Create XMLHttpRequest Object
var button

xhr.onload = function () {
	if (xhr.status === 200) { //if server is ok
		responseObject = JSON.parse(xhr.responseText)

		//build up string with new content
		var newContent = ''
		for (var i = 0; i < responseObject.artists.length; i++) {
			newContent += '<div>'
			newContent += '<img src="' + responseObject.artists[i].work + '" '
			newContent += 'alt ="' + responseObject.artists[i].title + '">'
			newContent += '<p><strong>' + responseObject.artists[i].name + '</strong><br>'  
			newContent += responseObject.artists[i].title + '<br><span>'
			newContent += responseObject.artists[i].medium + '</span></p>'
			newContent += '</div>'
		}

		document.querySelector('#content').innerHTML = newContent
	}
}

xhr.open('GET', 'data-2.json')
	xhr.send()

button = document.querySelector('.show')
button.addEventListener('click', function () {
	xhr.open('GET', 'data.json')
	xhr.send()
})

