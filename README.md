# Leaflet.LabeledIcon
A Leaflet icon which wraps around another L.Icon and provides a HTML label next to it.


# Usage



    // Create an instance of L.Icon (or a subclass)
    var originalIcon = new L.Icon();
    
    // Wrap it up and add a label
    var labeledIcon = new L.LabeledIcon({html:'Foobar!', icon: originalIcon});
    
    // Now you can use it wherever you would use a L.Icon
    var marker = L.marker(coordinages,{icon:icon});



