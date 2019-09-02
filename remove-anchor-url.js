// First attempt

function removeUrlAnchor(url) {
  var anchor = '#'
  var indexOfAnchor = url.indexOf(anchor)
  if (indexOfAnchor === -1) {
    return url
  } else {
    return url.slice(0, indexOfAnchor)
  }
}

// Second attempt

function removeUrlAnchor (url){
  newUrl = url.split('#')
   return newUrl[0]
  }