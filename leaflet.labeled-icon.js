/*
 * L.LabeledIcon is a L.Icon which wraps over another L.Icon, and adds a label to it.
 */

L.LabeledIcon = L.Icon.extend({
    options: {
        html: '',
        className: 'leaflet-labeled-icon',
        margin: 5,   // Pixels from the icon image
        icon: false, // An instance of L.Icon
        align: 'right' // Position of the label relative to the icon, 'left' or 'right'.
    },

    createIcon: function (oldIcon) {
        var div = (oldIcon && oldIcon.tagName === 'DIV') ? oldIcon : document.createElement('div'),
            options = this.options;

        var label = document.createElement('label');
            
        if ( typeof options.html === 'string' ) {
            label.innerHTML = options.html !== false ? options.html : '';
        } else {
            label.appendChild(options.html);
        }
        div.style.position = 'relative';
        label.style.position = 'absolute';
        label.style.display  = 'block';
        label.className      = options.align;

        // Label position will be relative to the icon's anchor pixel.
        /// FIXME: think whether the vertical alignment should line up with the icon,
        ///   with the anchor, or with something else.
        /// Using some CSS like top: calc(-[offset]px - 50%) should work in theory.
        var iconSize   = options.icon.options.iconSize;
        var iconAnchor = options.icon.options.iconAnchor;
        if (options.align === 'left') {
            label.style.right = (iconAnchor[0] + options.margin) + 'px';
            label.style.top   = (-iconAnchor[1]) + 'px'; // Topline of icon
        } else {    // 'right'
            label.style.left = (iconSize[0] - iconAnchor[0] + options.margin) + 'px';
            label.style.top   = (-iconAnchor[1]) + 'px'; // Topline of icon
        }

        if (options.icon) {
            div.appendChild(options.icon.createIcon());
        }
        
        div.appendChild(label);
        this._setIconStyles(div, 'icon');

        return div;
    },
    
    createShadow: function (oldIcon) {
        return this.options.icon.createShadow(oldIcon);
    }
});

L.labeledIcon = function (options) {
    return new L.LabeledIcon(options);
};
