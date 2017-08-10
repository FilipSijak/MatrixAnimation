	var Alphabet = function() {
		var string = '马吾伊艾哦艾屁艾勒艾诶娜迪艾弗吉尺艾杰儿艾西吉比艾开Ｑ山モ尺匕乙∪工口ㄗ丹ち刀下ム卄ＪＫㄥㄚメ匚∨乃れ爪㊔㊚㊇㊕㊗㊝㊘㊋㊒㊓㊃㊖㊆㊈㊉㊊㊌㊍㊎㊜㊛㊅㊙㊄㊐㊏';
		var arr = string.split('');
		var random_index = RandomIndex(arr.length);
		var character = arr[random_index];

		return character;
	}

	function RandomIndex(range)
	{
		var random_index = Math.floor(Math.random() * range);

		return random_index;
	}

	var Square = function() {

		var element = document.createElement("div");

		element.style.width = 25 + "px";
		element.style.height = 25 + "px";
		element.style.backgroundColor = "black";
		element.classList.add('square');

		return element;
	};

	var Column = function() {

		var column = document.createElement("div");
		column.classList.add('column');

		return column;
	};


	var Matrix = function() {
		this.container = document.getElementById('matrix-container');
		this.width = window.innerWidth / 25;
		this.height = window.innerHeight / 25;
		this.elements = [];
	};

	Matrix.prototype.setSquare = function(x, y) {

		var square = {};
		square.element = new Square();
		square.element.innerHTML = Alphabet();
		square.position = {x: x, y: y}

		return square;
	}

	Matrix.prototype.getSquare = function(x,y) {
		return this.elements[x,y];
	}

	Matrix.prototype.squareSetClass = function(square) {

		square.classList.add('test');
		return square;
	};

	Matrix.prototype.drawMatrix = function() {

		for (var x = 0; x <= this.width; x++) {
			var column = Column();
			this.container.appendChild(column);
			this.elements[x] = [];

			for (var y = 0; y <= this.height; y++) {
				var square = this.setSquare(x,y)
				this.elements[x][y] = square;
				column.appendChild(this.elements[x][y].element);
			}
		}

	};

	var start = 0;
	Matrix.prototype.setColumnAnimation = function() {
		start++;

		if (start%40==0) {
			var random_column = RandomIndex(this.width);
			var column_elements = [];
			self.elements = this.elements;
			var timer = 3.5;
			var delay = 0;
			for (item in self.elements[random_column]) {
				delay = delay + 0.1;
				self.elements[random_column][item].element.style.animation  = "test " + timer + "s infinite";
				self.elements[random_column][item].element.style.animationDelay = delay + 's' ;		
			}

		}
		


	}

	Matrix.prototype.init = function() {
		Matrix.prototype.drawMatrix();
	};


	var mat = new Matrix();
	
	mat.drawMatrix();

	function loop()
	{
		mat.setColumnAnimation();
		window.requestAnimationFrame(loop);
	}

	loop();

