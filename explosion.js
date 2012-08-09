javascript:(
						function(){
							if(!console || !console.log) console={log:function(){}};
							var s=document.createElement('script');
							s.type='text/javascript';
							s.src='https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
							document.body.appendChild(s);

							if(window.THREE == null || window.THREE.DOMRenderer == null){
								s=document.createElement('script');
								s.type='text/javascript';
								s.onload=b;
								s.src='https://raw.github.com/mrdoob/three.js/r49/build/Three.js';
								document.body.appendChild(s);
							}else{
								b();
							}

							function b(){
								var $=jQuery.noConflict(true)
									, isInitialized = false
									, camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000)
									, scene = new THREE.Scene()
									, stage = new THREE.Object3D()
									, renderer = new THREE.DOMRenderer()
									, controls = null
									, clock = new THREE.Clock()
									, windowWidth = window.innerWidth
									, windowHeight = window.innerHeight
									, windowHalfWidth = windowWidth >> 1
									, windowHalfHeigth = windowHeight >> 1
									, max = 70
									, count = 0
									, body = $('body').css('overflow','hidden');
									body.children().fadeOut(1000, init);

								function init(){
									if(isInitialized) return;
									isInitialized = true;
									window.scrollTo(0,0);
									scene.add(stage);
									scene.add(camera);
									renderer.setSize(window.innerWidth, window.innerHeight);
									camera.position.z = windowWidth * 10;
									document.body.appendChild(renderer.domElement);

									body.find('img').each(toThreeJs);
									if (count < max) body.find('a').each(toThreeJs);
									if (count < max) body.find('span').each(toThreeJs);
									if (count < max) body.find('p').each(toThreeJs);

									/*
									$('<object id='externalsound' classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' codebase='http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0' width='1' height='1'><param name='movie' value='https://raw.github.com/kaminaly/explosion.js/master/explosion.swf' /><param name='allowScriptAccess' value='always' /><embed name='externalsound' src='https://raw.github.com/kaminaly/explosion.js/master/explosion.swf' width='1' height='1' allowScriptAccess='always' type='application/x-shockwave-flash' pluginspage='http://www.macromedia.com/go/getflashplayer' /></object>').appendTo('body');
									swf('externalsound').play();
									*/
									requestAnimationFrame(explosion);
								}
								
								function toThreeJs(){
									if (count >= max) return;
									var p = new THREE.Particle(new THREE.ParticleDOMMaterial($(this).css('position', 'absolute').appendTo('body').get(0)));
									p.position.set(
											Math.random() * windowWidth - windowHalfWidth,
											Math.random() * windowHeight - windowHalfHeigth, 
											Math.random() * windowWidth - windowHalfWidth
									);
									stage.add(p);
									count++;
								}
								
								/*
								function swf(str) {
									if (navigator.appName.indexOf('Microsoft') != -1) {
										return window[str];
									}else {
										return document[str];
									}
								}
								*/

								function explosion(){
									stage.rotation.y += 0.005;
									camera.position.z += (windowHalfWidth - camera.position.z) * 0.3;

									renderer.render(scene, camera);
									if(Math.abs(windowHalfWidth - camera.position.z) < 0.1){
										body.css('cursor', 'move');
										controls = new THREE.TrackballControls(camera);
										requestAnimationFrame(waft);
									}else{
										requestAnimationFrame(explosion);
									}
								}

								function waft(){
									stage.rotation.y += 0.005;
									controls.update(clock.getDelta());
									
									renderer.render(scene, camera);
									requestAnimationFrame(waft);
								}
							}
						}
)();

