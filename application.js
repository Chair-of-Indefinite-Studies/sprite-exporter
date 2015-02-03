(function(sprite){
	var model = new sprite.editor.Model(20, 30);

	var canvas = document.getElementById('pixel-editor');
	var view = new sprite.editor.View(model, canvas);
	var controller = sprite.editor.controllerFor(model, view, canvas);

	canvas.addEventListener('mousedown', controller.startDrawing.bind(controller));
	canvas.addEventListener('mouseup', controller.stopDrawing.bind(controller));

    var exporter = new sprite.Exporter();

    var link = document.getElementById('download')
    link.download = 'image.json';
    function updateHref(){
        link.href = window.URL.createObjectURL(new Blob([
            JSON.stringify(exporter.export(model))
        ], { 'type': 'application/json' }));
    }
    updateHref();
    model.on('paint', updateHref);
})(sprite);
