describe('sprite', function(){
    it('should be present', function(){
        expect(sprite).toBeDefined();
    });

    it('should sport an Exporter', function(){
        expect(sprite.Exporter).toBeDefined();
    });

    describe('Exporter', function(){
        var exporter;

        beforeEach(function(){
            exporter = new sprite.Exporter();
        });

        it('should be created', function(){
            expect(exporter).toBeDefined();
        });

        it('should have an export method', function(){
            expect(exporter.export).toBeDefined();
            expect(typeof exporter.export).toBe("function");
        });

        describe('#export', function(){
            var model;

            beforeEach(function(){
                model = new sprite.editor.Model(5, 4);
                model.changeBrushColor('black');
                model.paintPixel(0,0);
                model.paintPixel(4,0);
                model.changeBrushColor('red');
                model.paintPixel(0, 3);
                model.paintPixel(2, 2);
                model.paintPixel(4, 3);
            });

            it('should hold the number of columns', function(){
                var result = exporter.export(model);

                expect(result.columns).toBe(5);
            });

            it('should hold the number of rows', function(){
                var result = exporter.export(model);

                expect(result.rows).toBe(4);
            });

            it('should hold the palette', function(){
                var result = exporter.export(model);

                var palette = result.palette;

                expect(typeof palette).toBe('object');
                expect(palette.length).toBe(2);
                expect(palette).toContain('black');
                expect(palette).toContain('red');
            });

            it('should hold the pixels', function(){
                var result = exporter.export(model);
                var palette = result.palette;

                var pixels = result.pixels;

                var blackIndex = palette.indexOf('black');
                var black = pixels[blackIndex];
                expect(typeof black).toBe('object');
                expect(black.length).toBe(2);
                expect(black).toContain([0,0]);
                expect(black).toContain([4,0]);

                var redIndex = palette.indexOf('red');
                var red = pixels[redIndex];
                expect(typeof red).toBe('object');
                expect(red.length).toBe(3);
                expect(red).toContain([0,3]);
                expect(red).toContain([2,2]);
                expect(red).toContain([4,3]);
            });
        });
    });
});
