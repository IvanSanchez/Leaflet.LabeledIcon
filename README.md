# Leaflet.LabeledIcon
A Leaflet icon which wraps around another L.Icon and provides a HTML label next to it.


# Usage

    // Create an instance of L.Icon (or a subclass)
    var originalIcon = new L.Icon();
    
    // Wrap it up and add a label
    var labeledIcon = new L.LabeledIcon({html:'Foobar!', icon: originalIcon});
    
    // Now you can use it wherever you would use a L.Icon
    var marker = L.marker(coordinages,{icon:icon});


# Options


    var labeledIcon = new L.LabeledIcon({
        html: '<strong>Foobar!</strong>',   // Label contents
        className: 'leaflet-labeled-icon',  // Optional CSS class name
        margin: 5,     // Margin from the image ot the label, in pixels
        icon: false,   // An instance of L.Icon
        align: 'right' // Position of the label relative to the icon, 'left' or 'right'.    
    })

The only required options are `icon` and `html`, the rest are optional.