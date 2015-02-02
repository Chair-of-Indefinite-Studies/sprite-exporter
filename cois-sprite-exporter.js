;(function(sprite, undefined){
    var Exporter = sprite.Exporter = function(){};
    Exporter.prototype.export = function(model){
        var palette = [];
        var pixels = {}
        model.forEachPixel(function(x, y, color){
            if (!pixels[color]) {
                palette.push(color);
                pixels[color] = [];
            }
            pixels[color].push([x, y]);
        });
        return {
            columns: model.columns,
            rows: model.rows,
            palette: palette,
            pixels: palette.map(function(color){ return pixels[color]; })
        }
    };
})(window.sprite = window.sprite || {})
