(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1024,
	height: 1024,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: []
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#23253F").ss(6,1).p("AKVAAQAAAagdATQgcAUgpAAIxlAAQgpAAgcgUQgdgTAAgaQAAgZAdgTQAcgUApAAIRlAAQApAAAcAUQAdASAAAag");
	this.shape.setTransform(66.2,19.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F4F4").s().p("AoyBAQgpABgcgUQgdgSAAgbQAAgaAdgSQAcgUApABIRlAAQApgBAcAUQAdASAAAaQAAAbgdASQgcAUgpgBg");
	this.shape_1.setTransform(66.2,19.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#23253F").ss(6,1).p("AFiAAQAAAagPATQgPAUgWAAIpbAAQgVAAgQgUQgPgTAAgaQAAgaAPgSQAPgUAWAAIJbAAQAWAAAPAUQAPASAAAag");
	this.shape_2.setTransform(60.1,6.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2F4F4").s().p("AktBBQgVgBgQgSQgPgUAAgaQAAgaAPgTQAPgTAWAAIJbAAQAWAAAPATQAPATAAAaQAAAagPAUQgPASgWABg");
	this.shape_3.setTransform(60.1,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,138.4,32);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#23253F").ss(6,1).p("AG9AAQAAAagTATQgUAUgaAAIr3AAQgaAAgUgUQgTgTAAgaQAAgZATgTQAUgUAaAAIL3AAQAaAAAUAUQATATAAAZg");
	this.shape.setTransform(44.5,73.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F4F4").s().p("Al6BAQgbAAgUgTQgTgTAAgaQAAgaATgSQAUgUAbABIL2AAQAagBATAUQAUASgBAaQABAagUATQgTATgaAAg");
	this.shape_1.setTransform(44.5,73.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#23253F").ss(6,1).p("AF/AAQAAAfgSAWQgTAWgaAAIp/AAQgaAAgTgWQgSgWAAgfQAAgfASgWQATgVAaAAIJ/AAQAaAAATAVQASAXAAAeg");
	this.shape_2.setTransform(155.8,54.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2F4F4").s().p("Ak/BKQgbABgSgWQgTgVAAggQAAgfATgVQASgWAbAAIJ+AAQAbAAASAWQAUAVAAAfQAAAggUAVQgSAWgbgBg");
	this.shape_3.setTransform(155.8,54.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#23253F").ss(6,1).p("AHRAAQAAAegXAXQgVAWgfAAIsLAAQgfAAgWgWQgWgXAAgeQAAgdAWgXQAWgWAfAAIMLAAQAfAAAVAWQAXAXAAAdg");
	this.shape_4.setTransform(112.5,39.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2F4F4").s().p("AmFBKQgeABgXgWQgWgXABgeQgBgdAWgXQAXgVAeAAIMLAAQAeAAAXAVQAVAXABAdQgBAegVAXQgXAWgegBg");
	this.shape_5.setTransform(112.5,39.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#23253F").ss(6,1).p("AHRAAQAAAegWAXQgWAWgfAAIsLAAQgfAAgWgWQgWgXAAgeQAAgdAWgWQAWgXAfAAIMLAAQAfAAAWAXQAWAWAAAdg");
	this.shape_6.setTransform(68.5,23.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2F4F4").s().p("AmFBLQgeAAgXgXQgVgVAAgfQAAgdAVgXQAXgVAegBIMLAAQAeABAXAVQAVAXAAAdQAAAfgVAVQgXAXgeAAg");
	this.shape_7.setTransform(68.5,23.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#23253F").ss(6,1).p("AFMAAQAAAggRAXQgQAZgXAAIonAAQgXAAgRgZQgQgXAAggQAAgfAQgYQARgYAXAAIInAAQAXAAAQAYQARAYAAAfg");
	this.shape_8.setTransform(150.6,24);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F2F4F4").s().p("AkTBQQgXAAgRgZQgQgXAAggQAAggAQgXQARgYAXAAIInAAQAXAAAQAYQARAYAAAfQAAAggRAXQgQAZgXAAg");
	this.shape_9.setTransform(150.6,24);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#23253F").ss(6,1).p("AHRAAQAAAegXAWQgVAXgfAAIsLAAQgfAAgWgXQgWgWAAgeQAAgdAWgWQAWgXAfAAIMLAAQAfAAAVAXQAXAWAAAdg");
	this.shape_10.setTransform(112.5,7.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F2F4F4").s().p("AmFBLQgeAAgXgXQgWgVABgfQgBgeAWgVQAXgXAeAAIMLAAQAeAAAXAXQAVAVABAeQgBAfgVAVQgXAXgeAAg");
	this.shape_11.setTransform(112.5,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,200.2,86);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#23253F").ss(6,1).p("AFiAAQAAAbgPAVQgQAWgVAAIpbAAQgVAAgQgWQgPgVAAgbQAAgaAPgVQAQgWAVAAIJbAAQAVAAAQAWQAPAVAAAag");
	this.shape.setTransform(62.5,36);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F4F4").s().p("AktBFQgVABgQgWQgPgVAAgbQAAgaAPgVQAQgVAVAAIJbAAQAVAAAQAVQAPAVAAAaQAAAbgPAVQgQAWgVgBg");
	this.shape_1.setTransform(62.5,36);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#23253F").ss(6,1).p("AOvAIQAAAagpASQgoASg7AAI5FAAQg7AAgogSQgpgSAAgaQAAgbApgYQArgaA4AAIZFAAQA4AAArAaQApAYAAAbg");
	this.shape_2.setTransform(94.3,22);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2F4F4").s().p("AsiBGQg7gBgogRQgpgSAAgaQAAgbApgYQArgaA4AAIZFAAQA4AAArAaQApAYAAAbQAAAagpASQgoARg7ABg");
	this.shape_3.setTransform(94.3,22);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#23253F").ss(6,1).p("AJMAEQAAAagaAUQgZAUgkAAIvpAAQgkAAgagUQgZgUAAgaQAAgbAZgWQAbgYAjAAIPpAAQAjAAAaAYQAaAWAAAbg");
	this.shape_4.setTransform(85.9,7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2F4F4").s().p("An0BGQgkAAgZgUQgagTAAgbQAAgbAagWQAagXAjgBIPpAAQAjABAbAXQAZAWAAAbQAAAbgZATQgaAUgkAAg");
	this.shape_5.setTransform(85.9,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-19.8,194.7,65.8);


// stage content:
(lib.illustrationExapmle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Clouds_2
	this.instance = new lib.Символ3();
	this.instance.setTransform(288.2,224.6,1,1,0,0,0,66.2,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:312.6},0).wait(1).to({x:337},0).wait(1).to({x:361.4},0).wait(1).to({x:385.9},0).wait(1).to({x:399.4},0).wait(1).to({x:413},0).wait(1).to({x:426.6},0).wait(1).to({x:440.1},0).wait(1).to({x:453.7},0).wait(1).to({x:467.3},0).wait(1).to({x:454},0).wait(1).to({x:440.8},0).wait(1).to({x:427.6},0).wait(1).to({x:414.4},0).wait(1).to({x:401.2},0).wait(1).to({x:388},0).wait(1).to({x:374.8},0).wait(1).to({x:361.6},0).wait(1).to({x:348.4},0).wait(1).to({x:335.2},0).wait(4));

	// Clouds_1
	this.instance_1 = new lib.Символ2();
	this.instance_1.setTransform(535.7,133,1,1,0,0,0,97,40);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:97.1,x:523.3},0).wait(1).to({x:510.8},0).wait(1).to({x:498.3},0).wait(1).to({x:485.9},0).wait(1).to({x:473.4},0).wait(1).to({x:460.9},0).wait(1).to({x:448.5},0).wait(1).to({x:464.6},0).wait(1).to({x:480.8},0).wait(1).to({x:496.9},0).wait(1).to({x:513.1},0).wait(1).to({x:529.3},0).wait(1).to({x:545.4},0).wait(1).to({x:561.6},0).wait(1).to({x:577.7},0).wait(1).to({x:593.9},0).wait(1).to({x:582.8},0).wait(1).to({x:571.6},0).wait(1).to({x:560.5},0).wait(1).to({x:549.4},0).wait(1).to({x:538.2},0).wait(1).to({x:527.1},0).wait(1).to({x:516},0).wait(1));

	// Clouds_0
	this.instance_2 = new lib.Символ1();
	this.instance_2.setTransform(743.3,224.7,1,1,0,0,0,94.3,13.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regY:21.5,x:750.7,y:233.1},0).wait(1).to({x:758.1},0).wait(1).to({x:765.5},0).wait(1).to({x:772.8},0).wait(1).to({x:780.2},0).wait(1).to({x:787.6},0).wait(1).to({x:795},0).wait(1).to({x:802.4},0).wait(1).to({x:809.8},0).wait(1).to({x:798.2},0).wait(1).to({x:786.6},0).wait(1).to({x:775},0).wait(1).to({x:763.5},0).wait(1).to({x:751.9},0).wait(1).to({x:740.3},0).wait(1).to({x:728.8},0).wait(1).to({x:717.2},0).wait(1).to({x:705.6},0).wait(1).to({x:694},0).wait(1).to({x:682.5},0).wait(1).to({x:670.9},0).wait(3));

	// text_moving_3
	this.text = new cjs.Text("FC", "70px 'Swis721 Blk BT'", "#23253F");
	this.text.lineHeight = 98;
	this.text.lineWidth = 114;
	this.text.setTransform(604.4,1026);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(9).to({_off:false},0).wait(1).to({y:1000.3},0).wait(1).to({y:974.6},0).wait(1).to({y:948.9},0).wait(1).to({y:923.3},0).wait(1).to({y:897.6},0).wait(1).to({y:871.9},0).wait(1).to({y:846.2},0).wait(1).to({y:820.5},0).wait(7));

	// text_moving_2
	this.text_1 = new cjs.Text("MY", "70px 'Swis721 Blk BT'", "#23253F");
	this.text_1.lineHeight = 98;
	this.text_1.lineWidth = 149;
	this.text_1.setTransform(473.2,820.5);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(1).to({x:474.5,y:855.7},0).wait(1).to({y:816.5},0).wait(1).to({x:467,y:815.9},0).wait(1).to({x:459.5,y:815.2},0).wait(1).to({x:452,y:814.6},0).wait(1).to({x:459.6,y:816},0).wait(1).to({x:467.2,y:817.5},0).wait(1).to({x:474.8,y:819},0).wait(1).to({x:482.5,y:820.5},0).wait(1).to({y:822.5},0).wait(1).to({y:824.4},0).wait(1).to({y:826.4},0).wait(1).to({y:828.4},0).wait(1).to({x:480.5,y:820.5},0).wait(10));

	// text_moving_1
	this.text_2 = new cjs.Text("BLR", "70px 'Swis721 Blk BT'", "#23253F");
	this.text_2.lineHeight = 98;
	this.text_2.lineWidth = 170;
	this.text_2.setTransform(318,367.3);

	this.timeline.addTween(cjs.Tween.get(this.text_2).wait(1).to({x:314.7,y:394.7},0).wait(1).to({x:311.3,y:422.1},0).wait(1).to({x:308,y:449.5},0).wait(1).to({x:304.7,y:476.9},0).wait(1).to({x:306.7,y:534.1},0).wait(1).to({x:308.8,y:591.4},0).wait(1).to({x:310.8,y:648.7},0).wait(1).to({x:312.9,y:706},0).wait(1).to({x:314.9,y:763.2},0).wait(1).to({x:317,y:820.5},0).wait(14));

	// rectangles
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#23253F").ss(6,1,1).p("AAAhKIAACV");
	this.shape.setTransform(608,482.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#23253F").ss(6,1,1).p("ABBAAQAAAbgTATQgTATgbAAQgaAAgTgTQgTgTAAgbQAAgZATgUQATgTAaAAQAbAAATATQATAUAAAZg");
	this.shape_1.setTransform(609,496.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B4E842").s().p("AgtAuQgTgTAAgbQAAgZATgUQAUgTAZAAQAbAAATATQATAUAAAZQAAAbgTATQgTATgbAAQgZAAgUgTg");
	this.shape_2.setTransform(609,496.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#23253F").ss(4,1,1).p("AAAizIAAFn");
	this.shape_3.setTransform(748,419);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#23253F").ss(6,1,1).p("AooEfIRRo9IAAI9g");
	this.shape_4.setTransform(734.6,408.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3BB2DB").s().p("AopEfIRTo9IAAI9g");
	this.shape_5.setTransform(734.6,408.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#23253F").ss(6,1,1).p("AVpo3MgqMAUSIhIiTMArXgUig");
	this.shape_6.setTransform(653.7,404.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DD7C3A").s().p("A1rJIMArXgUiIgDCjMgqMAUSg");
	this.shape_7.setTransform(653.7,404.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#23253F").ss(6,1,1).p("ASDBkMgkFAAAIAAjHMAkFAAAg");
	this.shape_8.setTransform(676.5,571);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DD7C3A").s().p("AyCBkIAAjHMAkFAAAIAADHg");
	this.shape_9.setTransform(676.5,571);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#23253F").ss(4,0,1).p("AAAiGIAAEN");
	this.shape_10.setTransform(639,532.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#23253F").ss(4,0,1).p("AAAiGIAAEN");
	this.shape_11.setTransform(625,532.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#23253F").ss(4,0,1).p("AAAiGIAAEN");
	this.shape_12.setTransform(613,532.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#23253F").ss(4,0,1).p("AAAiGIAAEN");
	this.shape_13.setTransform(600,532.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#23253F").ss(4,0,1).p("AAAiGIAAEN");
	this.shape_14.setTransform(586,532.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#23253F").ss(4,0,1).p("AkIAAIIRAA");
	this.shape_15.setTransform(734.5,520);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#23253F").ss(4,0,1).p("AkIAAIIRAA");
	this.shape_16.setTransform(734.5,498);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#23253F").ss(4,1,1).p("AAAlEIAAKJ");
	this.shape_17.setTransform(733,506.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#23253F").ss(6,1,1).p("AkIlEIIRAAIAAKJIoRAAg");
	this.shape_18.setTransform(733.5,506.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3BB2DB").s().p("AkIFFIAAqIIIQAAIAAKIg");
	this.shape_19.setTransform(733.5,506.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#23253F").ss(6,1,1).p("AGfGpIs9AAIAAtRIM9AAg");
	this.shape_20.setTransform(732.5,506.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#DD7C3A").s().p("AmdGpIAAtQIM8AAIAANQg");
	this.shape_21.setTransform(732.5,506.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#23253F").ss(6,1,1).p("AoCBGIQFAAIAAiLIwFAAg");
	this.shape_22.setTransform(612.5,554);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DD7C3A").s().p("AoCBFIAAiJIQFAAIAACJg");
	this.shape_23.setTransform(612.5,554);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#23253F").ss(6,1,1).p("AIDAyIwFAAIAAhjIQFAAg");
	this.shape_24.setTransform(612.5,516);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#DD7C3A").s().p("AoCAyIAAhiIQFAAIAABig");
	this.shape_25.setTransform(612.5,516);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#23253F").ss(6,1,1).p("AIDA8IwFAAIAAh3IQFAAg");
	this.shape_26.setTransform(612.5,469);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#DD7C3A").s().p("AoCA8IAAh3IQFAAIAAB3g");
	this.shape_27.setTransform(612.5,469);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#23253F").ss(6,1,1).p("ABBGkIiBAAIAAtHICBAAg");
	this.shape_28.setTransform(657.5,505);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#DD7C3A").s().p("AhAGkIAAtHICBAAIAANHg");
	this.shape_29.setTransform(657.5,505);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#23253F").ss(6,1,1).p("ABBnpIiBAAIAAPTICBAAg");
	this.shape_30.setTransform(567.5,512);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#DD7C3A").s().p("AhAHpIAAvSICBAAIAAPSg");
	this.shape_31.setTransform(567.5,512);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(24));

	// house
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#23253F").ss(6,1,1).p("A2HDBQAMijCbhuQCThrC5AAMAitAAAQAXAAAygHQAmgCAAAbIAAFmQrEADrEACQ2IAEABgFg");
	this.shape_32.setTransform(648.3,600.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#60A563").s().p("A2HDBQAMijCbhuQCThrC5AAMAitAAAQAXAAAygHQAmgCAAAbIAAFmI2IAFIueACQnqAAABgDg");
	this.shape_33.setTransform(648.3,600.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#23253F").ss(6,1,1).p("AR+RLIzsAAIgGvUIwJAAMAj7gTBg");
	this.shape_34.setTransform(674.9,450.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#5E3520").s().p("AhuRLIgGvUIwJAAMAj7gTBMAAAAiVg");
	this.shape_35.setTransform(674.9,450.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]}).wait(24));

	// waterFall
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#23253F").ss(6,1,1).p("ABLCHQAAAfgWAVQgWAXgfAAQgeAAgWgXQgWgVAAgfIAAkNQAAgfAWgVQAWgXAeAAQAfAAAWAXQAWAVAAAfg");
	this.shape_36.setTransform(307.5,730);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B8F2FF").s().p("AgzC7QgXgWAAgfIAAkMQAAgeAXgXQAVgVAeAAQAeAAAXAVQAVAXABAeIAAEMQgBAfgVAWQgXAXgegBQgeABgVgXg");
	this.shape_37.setTransform(307.5,730);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#23253F").ss(6,1,1).p("ABLBQQAAAfgWAVQgWAXgfAAQgeAAgWgXQgWgVAAgfIAAifQAAgfAWgVQAWgXAeAAQAfAAAWAXQAWAVAAAfg");
	this.shape_38.setTransform(261.5,748.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#99E9FF").s().p("AgzCEQgXgVAAgfIAAieQAAggAXgVQAVgXAeAAQAfAAAVAXQAXAVAAAgIAACeQAAAfgXAVQgVAXgfAAQgeAAgVgXg");
	this.shape_39.setTransform(261.5,748.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#23253F").ss(6,1,1).p("ABLDhQAAAfgWAVQgWAXgfAAQgeAAgWgXQgWgVAAgfIAAnBQAAgfAWgVQAWgXAeAAQAfAAAWAXQAWAVAAAfg");
	this.shape_40.setTransform(292.5,681);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#3BB2DB").s().p("Ag0EWQgWgXABgeIAAnAQgBggAWgVQAXgXAdAAQAeAAAXAXQAWAVgBAgIAAHAQABAegWAXQgXAVgeABQgdgBgXgVg");
	this.shape_41.setTransform(292.5,681);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#23253F").ss(6,1,1).p("ABLCvQAAAfgWAVQgWAXgfAAQgeAAgWgXQgWgVAAgfIAAldQAAgfAWgVQAWgXAeAAQAfAAAWAXQAWAVAAAfg");
	this.shape_42.setTransform(277.5,687);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#AEE6F4").s().p("Ag0DkQgVgXgBgeIAAlcQABgfAVgWQAXgXAdABQAfgBAVAXQAXAWAAAfIAAFcQAAAegXAXQgVAVgfAAQgdAAgXgVg");
	this.shape_43.setTransform(277.5,687);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#23253F").ss(6,1,1).p("ABLFFQAAAfgWAVQgWAXgfAAQgeAAgWgXQgWgVAAgfIAAqJQAAgfAWgVQAWgXAeAAQAfAAAWAXQAWAVAAAfg");
	this.shape_44.setTransform(277.5,592);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#3BB2DB").s().p("Ag0F6QgVgXgBgeIAAqIQABggAVgVQAXgXAdAAQAfAAAVAXQAXAVAAAgIAAKIQAAAegXAXQgVAVgfAAQgdAAgXgVg");
	this.shape_45.setTransform(277.5,592);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#23253F").ss(6,1,1).p("ABLBfQAAAfgWAVQgWAXgfAAQgeAAgWgXQgWgVAAgfIAAi9QAAgfAWgVQAWgXAeAAQAfAAAWAXQAWAVAAAfg");
	this.shape_46.setTransform(307.5,646);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#3BB2DB").s().p("AgzCTQgXgVAAggIAAi8QAAgeAXgXQAVgVAeAAQAeAAAXAVQAVAXABAeIAAC8QgBAggVAVQgXAXgeAAQgeAAgVgXg");
	this.shape_47.setTransform(307.5,646);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#23253F").ss(6,1,1).p("ABLBLQAAAfgWAVQgWAXgfAAQgeAAgWgXQgWgVAAgfIAAiVQAAgfAWgVQAWgXAeAAQAfAAAWAXQAWAVAAAfg");
	this.shape_48.setTransform(307.5,577);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#3BB2DB").s().p("AgzB/QgXgVAAggIAAiTQAAggAXgVQAVgXAeAAQAeAAAXAXQAVAVABAgIAACTQgBAggVAVQgXAXgeAAQgeAAgVgXg");
	this.shape_49.setTransform(307.5,577);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#23253F").ss(6,1,1).p("ABQEzQAAAmgTAXQgTAZgiAAQgjAAgZgZQgbgZAAgkIAAplQAAgkAbgZQAZgZAjAAQAiAAATAZQATAXAAAmg");
	this.shape_50.setTransform(308,486.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#2E80A0").s().p("Ag1FwQgagZAAgkIAAplQAAgkAagZQAagZAiAAQAjAAATAZQASAXAAAmIAAJlQAAAmgSAXQgTAZgjAAQgiAAgagZg");
	this.shape_51.setTransform(308,486.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#23253F").ss(6,1,1).p("ABLCWQAAAfgWAVQgWAXgfAAQgeAAgWgXQgWgVAAgfIAAkrQAAgfAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAfg");
	this.shape_52.setTransform(292.5,514.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#3BB2DB").s().p("Ag0DKQgWgVABggIAAkqQgBgeAWgXQAXgWAdABQAegBAXAWQAWAXgBAeIAAEqQABAggWAVQgXAXgeAAQgdAAgXgXg");
	this.shape_53.setTransform(292.5,514.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#23253F").ss(6,1,1).p("ABLCRQAAAfgWAVQgWAXgfAAQgeAAgWgXQgWgVAAgfIAAkhQAAgfAWgVQAWgXAeAAQAfAAAWAXQAWAVAAAfg");
	this.shape_54.setTransform(292.5,597);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#3BB2DB").s().p("Ag0DFQgWgVABggIAAkgQgBgeAWgXQAXgVAdAAQAeAAAXAVQAWAXgBAeIAAEgQABAggWAVQgXAXgeAAQgdAAgXgXg");
	this.shape_55.setTransform(292.5,597);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#23253F").ss(6,1,1).p("ABLEJQAAAfgWAVQgWAXgfAAQgeAAgWgXQgWgVAAgfIAAoRQAAgfAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAfg");
	this.shape_56.setTransform(277.5,492);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#3BB2DB").s().p("Ag0E9QgVgWgBgfIAAoQQABgeAVgXQAXgVAdAAQAfAAAVAVQAXAXAAAeIAAIQQAAAfgXAWQgVAXgfgBQgdABgXgXg");
	this.shape_57.setTransform(277.5,492);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#23253F").ss(6,1,1).p("ABLBGQAAAfgWAVQgXAXgeAAQgdAAgXgXQgWgVAAgfIAAiLQAAgfAWgVQAXgXAdAAQAeAAAXAXQAWAVAAAfg");
	this.shape_58.setTransform(245.5,664.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#3BB2DB").s().p("AgzB6QgXgWAAgfIAAiJQAAggAXgVQAVgXAeAAQAeAAAXAXQAVAVAAAgIAACJQAAAfgVAWQgXAXgegBQgeABgVgXg");
	this.shape_59.setTransform(245.5,664.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#23253F").ss(6,1,1).p("ABLGBQAAAfgWAVQgWAXgfAAQgeAAgWgXQgWgVAAgfIAAsBQAAgfAWgVQAWgXAeAAQAfAAAWAXQAWAVAAAfg");
	this.shape_60.setTransform(261.5,623);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#85CDE0").s().p("AgzG2QgXgXAAgeIAAsBQAAgfAXgVQAVgXAeAAQAfAAAVAXQAXAVAAAfIAAMBQAAAegXAXQgVAVgfAAQgeAAgVgVg");
	this.shape_61.setTransform(261.5,623);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#23253F").ss(6,1,1).p("ABLDrQAAAfgWAVQgXAXgeAAQgdAAgXgXQgWgVAAgfIAAnVQAAgfAWgWQAXgWAdAAQAeAAAXAWQAWAWAAAfg");
	this.shape_62.setTransform(245.5,518);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#1F6B7F").s().p("AgzEgQgXgXAAgeIAAnVQAAgfAXgVQAVgXAeAAQAeAAAXAXQAVAVAAAfIAAHVQAAAegVAXQgXAVgeABQgegBgVgVg");
	this.shape_63.setTransform(245.5,518);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#23253F").ss(6,1,1).p("ABLCMQAAAfgWAVQgXAXgeAAQgdAAgXgXQgWgVAAgfIAAkXQAAgfAWgVQAXgXAdAAQAeAAAXAXQAWAVAAAfg");
	this.shape_64.setTransform(229.5,721.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#91D6E8").s().p("Ag0DAQgWgWABgfIAAkWQgBgeAWgXQAXgVAdAAQAeAAAXAVQAWAXgBAeIAAEWQABAfgWAWQgXAXgeAAQgdAAgXgXg");
	this.shape_65.setTransform(229.5,721.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#23253F").ss(6,1,1).p("ABLBVQAAAfgWAVQgXAXgeAAQgdAAgXgXQgWgVAAgfIAAipQAAgfAWgVQAXgXAdAAQAeAAAXAXQAWAVAAAfg");
	this.shape_66.setTransform(230.5,622);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#3BB2DB").s().p("Ag0CJQgVgVAAgfIAAioQAAggAVgVQAXgXAdAAQAeAAAXAXQAWAVgBAgIAACoQABAfgWAVQgXAXgeAAQgdAAgXgXg");
	this.shape_67.setTransform(230.5,622);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#23253F").ss(6,1,1).p("ABLC0QAAAfgWAVQgXAXgeAAQgdAAgXgXQgWgVAAgfIAAlnQAAgfAWgVQAXgXAdAAQAeAAAXAXQAWAVAAAfg");
	this.shape_68.setTransform(230.5,552.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#1F6B7F").s().p("Ag0DpQgVgXAAgeIAAlmQAAgfAVgWQAXgXAdABQAegBAXAXQAWAWgBAfIAAFmQABAegWAXQgXAVgeAAQgdAAgXgVg");
	this.shape_69.setTransform(230.5,552.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#23253F").ss(6,1,1).p("ABLCRQAAAfgWAWQgXAWgeAAQgdAAgXgWQgWgWAAgfIAAkhQAAgfAWgWQAXgWAdAAQAeAAAXAWQAWAWAAAfg");
	this.shape_70.setTransform(230.5,485);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#3BB2DB").s().p("Ag0DGQgVgXAAgeIAAkgQAAggAVgVQAXgXAdAAQAeAAAXAXQAWAVgBAgIAAEgQABAegWAXQgXAWgegBQgdABgXgWg");
	this.shape_71.setTransform(230.5,485);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#23253F").ss(6,1,1).p("ABQTaQAAArgPAcQgRAggeAAIgBAAQggAAgfggQghghAAgmMAAAgnEQAAglAigZQAdgXAhgBIABAAQAfABAQAXQAPAVAAApg");
	this.shape_72.setTransform(308,566.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#5FBFD6").s().p("AARVBQgfgBgggfQghghAAglMAAAgnFQABglAggZQAegXAhgBIABAAQAfABAPAXQAQAWgBAoMAAAAnFQAAAqgOAcQgQAfgfABg");
	this.shape_73.setTransform(308,566.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#23253F").ss(6,1,1).p("ABLRYQAAAngNAWQgOAbgeAAIgCAAQgfAAgdgbQgegbAAgiMAAAgi6QAAghAfgWQAcgVAfgBIACAAQA5ABAABMg");
	this.shape_74.setTransform(292.5,551);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#3BB2DB").s().p("AARSwQggAAgdgbQgdgbAAgiMAAAgi6QgBghAfgWQAcgVAgAAIAAAAQA5AAAABMMAAAAi6QAAAngMAWQgPAbgeAAg");
	this.shape_75.setTransform(292.5,551);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#23253F").ss(6,1,1).p("ABLV7QAAAvgQAcQgQAgggAAIAAAAQgfAAgbggQgbgfAAgsMAAAgr9QAAgqAcgdQAagbAfgBIAAAAQAfABAQAbQARAaAAAtg");
	this.shape_76.setTransform(277.5,582);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#015E77").s().p("AALXlQggAAgagfQgbgfAAgrMAAAgr9QAAgrAcgdQAagbAfAAIABAAQAeAAARAbQAQAaAAAuMAAAAr9QAAAugQAcQgRAfgeAAg");
	this.shape_77.setTransform(277.5,582);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#23253F").ss(6,1,1).p("ABQTfQAAApgTAeQgUAggeAAIgBAAQgfAAgdggQgdggAAgnMAAAgnMQAAglAegaQAbgYAggBIABAAQAfABATAYQATAXAAAog");
	this.shape_78.setTransform(262,566);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#16ABD3").s().p("AAJVGQgegBgdgfQgdghAAgmMAAAgnMQABglAdgaQAbgYAfAAIABAAQAgAAATAYQASAYABAnMAAAAnMQAAApgTAeQgTAfggABg");
	this.shape_79.setTransform(262,566);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#23253F").ss(6,1,1).p("ABQUqQAAAsgQAcQgSAfgfAAIgBAAQggAAgegfQgfggAAgoMAAAgpdQAAgnAggbQAdgaAggBIABAAQAfABARAaQARAYAAAqg");
	this.shape_80.setTransform(246,573.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#9CECFF").s().p("AAOWRQgfAAgegfQgfgggBgoMAAAgpdQAAgnAggbQAdgaAgAAIABAAQAfAAARAaQAQAYAAAqMAAAApdQABAsgRAcQgRAfgfAAg");
	this.shape_81.setTransform(246,573.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#23253F").ss(6,1,1).p("ABLSnQAAAqgPAdQgQAhgeAAIgBAAQgeAAgcghQgdgiAAglMAAAglhQAAgkAdgZQAbgWAfgBIABAAQAeABAQAWQAPAWAAAng");
	this.shape_82.setTransform(230.5,560.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#75BACC").s().p("AANUPQgegBgcggQgcgiAAglMAAAglhQgBgkAdgZQAbgWAfAAIABAAQAeAAAQAWQAOAWAAAnMAAAAlhQAAAqgNAdQgRAggeABg");
	this.shape_83.setTransform(230.5,560.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#23253F").ss(6,1,1).p("AUAAAQAAAggaAYQgaAYglAAMglMAAAQglAAgbgYQgagYAAggQAAgfAagYQAbgYAlAAMAlMAAAQAlAAAaAYQAaAYAAAfg");
	this.shape_84.setTransform(352.4,438);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#06C5F9").s().p("AymBQQglAAgagYQgagYAAggQAAgfAagYQAagYAlABMAlNAAAQAkgBAbAYQAaAYAAAfQAAAggaAYQgbAYgkAAg");
	this.shape_85.setTransform(352.4,438);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]}).wait(24));

	// woods
	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#23253F").ss(6,1).p("Ah3C2IB3k2IB4E2g");
	this.shape_86.setTransform(523.3,544.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#385C60").s().p("Ah2CbIB2k1IB3E1g");
	this.shape_87.setTransform(523.3,547.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#23253F").ss(6,1).p("Ah3C2IB3k2IB4E2g");
	this.shape_88.setTransform(523.3,563.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#385C60").s().p("Ah2CbIB2k1IB3E1g");
	this.shape_89.setTransform(523.3,566.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#23253F").ss(6,1).p("Ah3C2IB3k2IB4E2g");
	this.shape_90.setTransform(523.3,581.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#385C60").s().p("Ah2CbIB2k1IB3E1g");
	this.shape_91.setTransform(523.3,584.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#23253F").ss(6,1).p("AiGDKICGleICHFeg");
	this.shape_92.setTransform(389.4,533.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#385C60").s().p("AiGCvICGldICHFdg");
	this.shape_93.setTransform(389.4,536.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#23253F").ss(6,1).p("AiGDKICGleICHFeg");
	this.shape_94.setTransform(389.4,554.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#385C60").s().p("AiGCvICGldICHFdg");
	this.shape_95.setTransform(389.4,557.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#23253F").ss(6,1).p("AiGDKICGleICHFeg");
	this.shape_96.setTransform(389.4,575.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#385C60").s().p("AiGCvICGldICHFdg");
	this.shape_97.setTransform(389.4,578.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#23253F").ss(6,1).p("AhZCQIBZjpIBaDpg");
	this.shape_98.setTransform(423.5,482.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#385C60").s().p("AhZB1IBZjpIBaDpg");
	this.shape_99.setTransform(423.5,485.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#23253F").ss(6,1).p("AhZCQIBZjpIBaDpg");
	this.shape_100.setTransform(423.5,495.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#385C60").s().p("AhZB1IBZjpIBaDpg");
	this.shape_101.setTransform(423.5,498.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#23253F").ss(6,1).p("AhZCQIBZjpIBaDpg");
	this.shape_102.setTransform(423.5,510.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#385C60").s().p("AhZB1IBZjpIBaDpg");
	this.shape_103.setTransform(423.5,513.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#23253F").ss(6,1).p("AhdCVIBdjzIBeDzg");
	this.shape_104.setTransform(451.7,534);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#385C60").s().p("AhdB6IBdjzIBeDzg");
	this.shape_105.setTransform(451.7,536.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#23253F").ss(6,1).p("AhdCVIBdjzIBeDzg");
	this.shape_106.setTransform(451.7,549);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#385C60").s().p("AhdB6IBdjzIBeDzg");
	this.shape_107.setTransform(451.7,551.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#23253F").ss(6,1).p("AhdCVIBdjzIBeDzg");
	this.shape_108.setTransform(451.7,563);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#385C60").s().p("AhdB6IBdjzIBeDzg");
	this.shape_109.setTransform(451.7,565.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#23253F").ss(6,1).p("AixECICxnOICyHOg");
	this.shape_110.setTransform(485.6,533.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#385C60").s().p("AixDnICxnNICyHNg");
	this.shape_111.setTransform(485.6,535.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#23253F").ss(6,1).p("AixECICxnOICyHOg");
	this.shape_112.setTransform(485.6,561.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#385C60").s().p("AixDnICxnNICyHNg");
	this.shape_113.setTransform(485.6,563.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#23253F").ss(6,1).p("AixECICxnOICyHOg");
	this.shape_114.setTransform(485.6,587.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#385C60").s().p("AixDnICxnNICyHNg");
	this.shape_115.setTransform(485.6,589.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86}]}).wait(24));

	// Grounds
	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#23253F").ss(6,1,1).p("EgiDAAAMBEHAAA");
	this.shape_116.setTransform(558,772);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#23253F").ss(6,1,1).p("AK5E9QhrBMiOBMQkcCYisAAQioAAkViOQhWgthYg1IhFgtIKlu8g");
	this.shape_117.setTransform(605.9,329.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#DCEBEF").s().p("AnFHfQhWgthYg1IhFgtIKlu8ILMOpQhrBMiOBMQkcCYisAAQioAAkViOg");
	this.shape_118.setTransform(605.9,329.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#23253F").ss(6,1,1).p("AJ3F8QhfBWiABXQkACrimAAQicAAj1iXQhNgvhNg4Ig8gvIJXx6g");
	this.shape_119.setTransform(345.7,284.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#DCEBEF").s().p("AmgI+QhMgwhNg5Ig9gvIJYx5IKVRPQhfBWiABXQkACrimAAQicAAj2iWg");
	this.shape_120.setTransform(345.7,284.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#23253F").ss(6,1,1).p("ATZHVQAAA2ATCOQAFB0g/AAMgl2AAAQgZAAgJh0QgFhAAAiEQAAj+BjjnQBejgCuitQCtitDghfQDohjD/AAQD8AADpBjQDgBfCtCtQCuCtBeDgQBjDnAAD+g");
	this.shape_121.setTransform(436.5,542.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#62A063").s().p("AzEMNQgZAAgJh0QgFhAAAiEQAAj+BjjnQBejgCuitQCtitDghfQDohjD/AAQD8AADpBjQDgBfCtCtQCuCtBeDgQBjDnAAD+QAAA2ATCOQAFB0g/AAg");
	this.shape_122.setTransform(436.5,542.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#23253F").ss(6,1,1).p("EgiNAbiMAnbg3DMAdAAl6IgIQ4g");
	this.shape_123.setTransform(570.4,445.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#9A9B9B").s().p("AFO7hMAdAAl6IgIQ4MhETAARg");
	this.shape_124.setTransform(570.4,445.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#23253F").ss(6,1,1).p("AzeQtMASmgjkMAUXAiBMgm1ADug");
	this.shape_125.setTransform(348.3,332.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#50465B").s().p("AzeQtMASmgjkMAUXAiBMgm1ADug");
	this.shape_126.setTransform(348.3,332.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#23253F").ss(6,1,1).p("Av2G8IP2z5IP3T5IrnF9IlZAFg");
	this.shape_127.setTransform(480.5,355.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#28778C").s().p("Av1G8IP1z5IP2T5IrlF9IlaAFg");
	this.shape_128.setTransform(480.5,355.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#23253F").ss(6,1,1).p("Av1J9IP1z5IP3T5g");
	this.shape_129.setTransform(531.3,360.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#1D5963").s().p("Av1J9IP1z5IP2T5g");
	this.shape_130.setTransform(531.3,360.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116}]}).wait(24));

	// bg
	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#23253F").ss(6,1,1).p("EAsYAOOMhYvAAAIAA8bMBYvAAAg");
	this.shape_131.setTransform(506,531);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#44824B").s().p("EgsWAONIAA8ZMBYuAAAIAAcZg");
	this.shape_132.setTransform(506,531);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_132},{t:this.shape_131}]}).wait(24));

	// sky
	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#23253F").ss(6,1,1).p("EAsYAMlMhYvAAAIAA5JMBYvAAAg");
	this.shape_133.setTransform(506,409.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#71D0EA").s().p("EgsWAMkIAA5HMBYuAAAIAAZHg");
	this.shape_134.setTransform(506,409.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_134},{t:this.shape_133}]}).wait(24));

	// background
	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#23253F").ss(6,1,1).p("Ay5AAMAlzAAA");
	this.shape_135.setTransform(510,752);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#23253F").ss(6,1,1).p("AJJFPIyRAAIAAqdISRAAg");
	this.shape_136.setTransform(510.5,698.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#314F51").s().p("ApIFOIAAqbISQAAIAAKbg");
	this.shape_137.setTransform(510.5,698.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#23253F").ss(6,1,1).p("AS6BEQAAA2gnAnQgnAng2AAMghrAAAQg3AAgmgnQgngnAAg2IAAiHQAAg3AngmQAmgnA3AAMAhrAAAQA2AAAnAnQAnAmAAA3g");
	this.shape_138.setTransform(510,752);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#385C60").s().p("Aw1DIQg3AAgmgnQgngmAAg3IAAiHQAAg3AngmQAmgnA3AAMAhrAAAQA2AAAnAnQAmAmAAA3IAACHQAAA3gmAmQgnAng2AAg");
	this.shape_139.setTransform(510,752);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#23253F").ss(6,1,1).p("EgsXgW4MBYvAAAMAAAAtxMhYvAAAg");
	this.shape_140.setTransform(506,475.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#23253F").ss(6,1,1).p("EAyjAU8QAADjihChQiiCijjAAMhT5AAAQjkAAihiiQihihAAjjMAAAgp3QAAjkChigQChiiDkAAMBT5AAAQDjAACiCiQChCgAADkg");
	this.shape_141.setTransform(506.5,475);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#385C60").s().p("Egp8AdiQjkAAihihQihiiAAjjMAAAgp3QAAjkChigQChihDkAAMBT4AAAQDkAAChChQChCgAADkMAAAAp3QAADjihCiQihChjkAAg");
	this.shape_142.setTransform(506.5,475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135}]}).wait(24));

	// bgCOLOR
	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#23253F").ss(8).p("EBQABQAMif/AAAMAAAif/MCf/AAAg");
	this.shape_143.setTransform(512,512);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#3BB2DB").s().p("EhP/BQAMAAAif/MCf/AAAMAAACf/g");
	this.shape_144.setTransform(512,512);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_144},{t:this.shape_143}]}).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(508,508,1032,1032);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;