javascript: (function() {
    var elements = document.getElementsByClassName('lister-item mode-advanced');
    var candidates = new Array();
    for (var i = 0; i < elements.length; i++) {
        var myVar = elements[i].getElementsByClassName('genre')[0].innerText;
        if (myVar.includes('Animation') || myVar.includes('Musical')) {
            candidates.push(i)
        }
    }
    for (var i = candidates.length - 1; i >= 0; i--) {
        elements[candidates[i]].remove();
    }
})();