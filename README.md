# explosion.js
こいつは、ありとあらゆるサイトを爆発させるために作られました。  
ブックマークレットなので、いつでもサイトをぶっ壊せます。  
イライラした時のストレス発散に、  
誰かをびっくりさせたい時、  
何となく、  
どんなシチュエーションでも使えるでしょう。  
  
## How to Use?
↓をブックマークのURLとしたブックマークレットとしてお使いください。  

	javascript:(function(){if(!console||!console.log)console={log:function(){}};var s=document.createElement('script');s.type='text/javascript';s.src='https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';document.body.appendChild(s);if(window.THREE==null||window.THREE.DOMRenderer==null){s=document.createElement('script');s.type='text/javascript';s.onload=b;s.src='https://raw.github.com/mrdoob/three.js/r49/build/Three.js';document.body.appendChild(s)}else{b()}function b(){var $=jQuery.noConflict(true),isInitialized=false,camera=new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,1,10000),scene=new THREE.Scene(),stage=new THREE.Object3D(),renderer=new THREE.DOMRenderer(),controls=null,clock=new THREE.Clock(),windowWidth=window.innerWidth,windowHeight=window.innerHeight,windowHalfWidth=windowWidth>>1,windowHalfHeigth=windowHeight>>1,max=70,count=0,body=$('body').css('overflow','hidden');body.children().fadeOut(1000,init);function init(){if(isInitialized)return;isInitialized=true;scene.add(stage);scene.add(camera);renderer.setSize(window.innerWidth,window.innerHeight);camera.position.z=windowWidth*10;document.body.appendChild(renderer.domElement);body.find('img').each(toThreeJs);if(count<max)body.find('a').each(toThreeJs);if(count<max)body.find('span').each(toThreeJs);if(count<max)body.find('p').each(toThreeJs);requestAnimationFrame(explosion)}function toThreeJs(){if(count>=max)return;var p=new THREE.Particle(new THREE.ParticleDOMMaterial($(this).css('position','absolute').appendTo('body').get(0)));p.position.set(Math.random()*windowWidth-windowHalfWidth,Math.random()*windowHeight-windowHalfHeigth,Math.random()*windowWidth-windowHalfWidth);stage.add(p);count++}function explosion(){stage.rotation.y+=0.005;camera.position.z+=(windowHalfWidth-camera.position.z)*0.3;renderer.render(scene,camera);if(Math.abs(windowHalfWidth-camera.position.z)<0.1){body.css('cursor','move');controls=new THREE.TrackballControls(camera);requestAnimationFrame(waft)}else{requestAnimationFrame(explosion)}}function waft(){stage.rotation.y+=0.005;controls.update(clock.getDelta());renderer.render(scene,camera);requestAnimationFrame(waft)}}})();
  
## Changelog
* _2012.08.09_ - とりあえずアップ。

## Credits
@kaminaly

