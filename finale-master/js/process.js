// <video width="320" height="240" controls>
//   <source src="movie.mp4" type="video/mp4">
//   <source src="movie.ogg" type="video/ogg">
//   Your browser does not support the video tag.
// </video>

let process = {
	menu:function(){
	let source_vid = '#';
		let content = <div>
		    <iframe src={source_vid} width="100%" height='200px'/>
			<audio id="audio_song">
				<source src="audio/song.mp3" type="audio/mp3" />
			</audio>
			<center>
				<h2><a href='front.jsx' onClick={process.page1}>front</a></h2>
				<h2><a href='sound.jsx' onClick={process.page2}>sound</a></h2>
				<h2><a href='cat.jsx' onClick={process.page3}>cat</a></h2>
				<h2><a href='camel.jsx' onClick={process.page4}>camel</a></h2>
				<h2><a href='chicken.jsx' onClick={process.page5}>chicken</a></h2>
				<h2><a href='cow.jsx' onClick={process.page6}>Cow</a></h2>
				<h2><a href='elephant.jsx' onClick={process.page7}>elephant</a></h2>
				<h2><a href='frog.jsx' onClick={process.page8}>frog</a></h2>
				<h2><a href='hawk.jsx' onClick={process.page9}>hawk</a></h2>
				<h2><a href='horse.jsx' onClick={process.page10}>horse</a></h2>
				<h2><a href='lion' onClick={process.page11}>lion</a></h2>
				<h2><a href='monkey.jsx' onClick={process.page12}>monkey</a></h2>
				<h2><a href='pig.jsx' onClick={process.page13}>pig</a></h2>
				<h2><a href='raccoon.jsx' onClick={process.page14}>raccoon</a></h2>
				<h2><a href='rooster.jsx' onClick={process.page15}>rooster</a></h2>
				<h2><a href='snake.jsx' onClick={process.page16}>snake</a></h2>
				<h2><a href='credit.jsx' onClick={process.page17}>credit</a></h2>
			</center>
		</div>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	page1:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				this is page 1<br/><a href='front.jsx' onClick={process.front}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},
	page2:function(){
		process.audio('audio_sound').play();
		let content = <div>
				this is page 2<br/><a href='sound.jsx' onClick={process.sound}>back</a>
			</div>;

			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_sound').pause();
	},
	page3:function(){
		process.audio('audio_cat').play();
		let content = <div>
				this is page 3<br/><a href='cat.jsx' onClick={process.cat}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_cat').pause();
	},
	page4:function(){
		process.audio('audio_camel').play();
		let content = <div>
				this is page 4<br/><a href='camel.jsx' onClick={process.camel}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_camel').pause();
	},
	page5:function(){
		process.audio('audio_chicken').play();
		let content = <div>
				this is page 5<br/><a href='chicken.jsx' onClick={process.chicken}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_chicken').pause();
	},
	page6:function(){
		process.audio('audio_Cow').play();
		let content = <div>
				this is page 6<br/><a href='cow.jsx' onClick={process.cow}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_Cow').pause();
	},
	page7:function(){
		process.audio('audio_elephant').play();
		let content = <div>
				this is page 7<br/><a href='elephant.jsx' onClick={process.elephant}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_elephant').pause();
	},
	page8:function(){
		process.audio('audio_frog').play();
		let content = <div>
				this is page 8<br/><a href='frog.jsx' onClick={process.frog}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_frog').pause();

	},
	page9:function(){
		process.audio('audio_hawk').play();
		let content = <div>
				this is page 9<br/><a href='hawk.jsx' onClick={process.hawk}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_hawk').pause();

	},
	page10:function(){
		process.audio('audio_horse').play();
		let content = <div>
				this is page 10<br/><a href='horse.jsx' onClick={process.horse}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_horse').pause();

	},
	page11:function(){
		process.audio('audio_lion').play();
		let content = <div>
				this is page 11<br/><a href='lion.jsx' onClick={process.lion}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_lion').pause();

	},
	page12:function(){
		process.audio('audio_monkey').play();
		let content = <div>
				this is page 12<br/><a href='monkey.jsx' onClick={process.monkey}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_monkey').pause();

	},
	page13:function(){
		process.audio('audio_pig').play();
		let content = <div>
				this is page 13<br/><a href='pig.jsx' onClick={process.pig}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_pig').pause();

	},
	page14:function(){
		process.audio('audio_raccoon').play();
		let content = <div>
				this is page 14<br/><a href='raccoon.jsx' onClick={process.raccoon}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_raccoon').pause();

	},
	page15:function(){
		process.audio('audio_rooster').play();
		let content = <div>
				this is page 15<br/><a href='rooster.jsx' onClick={process.rooster}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_rooster').pause();

	},
	page16:function(){
		process.audio('audio_snake').play();
		let content = <div>
				this is page 16<br/><a href='snake.jsx' onClick={process.snake}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_snake').pause();

	},
	page17:function(){
		let content = <div>
				this is page 17<br/><a href='credit.jsx' onClick={process.credit}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	loading:function(){
		let content = <div>

					<div className="progressbar-infinite color-multi"></div>
					<audio id="audio">
						<source src="audio/song.mp3" type="audio/mp3" />                                                                                                                                                 
					</audio>
					<div align='center'><br /> <br /> <br/> <br/> <br/> <br/> <br/><br /> <br/> <br /> <br/>
						<img src='img/psu.png' width='150px' /><br /><br />                                                                                                                                                                                                                                                                          
						<center>Loading...</center>
					</div>
				</div>;
		ReactDOM.render(content,document.getElementById('root'));
		
	},
	audio:function(audio){
		let _audio = document.getElementById(audio);
		return _audio;
	},
	replayAudio:function(audio){
		process.audio(audio).addEventListener('ended',function(){
			process.audio('audio').pause();
			process.audio(audio).play();
		})
	}
}

let counting = 0;
process.loading();
setTimeout(function(){
	process.audio('audio').pause();
	process.menu();
},5000);