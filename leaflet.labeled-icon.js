/*
 * L.LabeledIcon is a L.Icon which wraps over another L.Icon, and adds a label to it.
 */

L.LabeledIcon = L.DivIcon.extend({
    options: {
        html: '',
        className: 'leaflet-labeled-icon',
        margin: 2,   // Pixels from the icon image
        icon: false // An instance of L.Icon
    },

    createIcon: function (oldIcon) {
        var div = (oldIcon && oldIcon.tagName === 'DIV') ? oldIcon : document.createElement('div'),
            options = this.options;

        var label = document.createElement('label');
            
        label.innerHTML = options.html !== false ? options.html : '';
        div.style.position = 'relative';
        label.style.position = 'absolute';
        label.style.display  = 'block';
        
        // Label position will be relative to the icon's anchor pixel.
        label.style.left = options.icon.options.iconSize[0] / 2 + options.margin + 'px';
        /// FIXME: think whether the vertical alignment should line up with the icon,
        ///   with the anchor, or with something else.
        label.style.top  = - options.icon.options.iconSize[1] + 'px';

        div.appendChild(label);
        if (options.icon) {
            div.appendChild(options.icon.createIcon());
        }
        
        this._setIconStyles(div, 'icon');

        return div;
    },
    
    createShadow: function (oldIcon) {
        /// FIXME: Doesn't correctly apply the shadow anchoring coordinates
        /// Probably a scope problem.
        return this.options.icon.createShadow(oldIcon);
    }
});

L.labeledIcon = function (options) {
    return new L.LabeledIcon(options);
};
