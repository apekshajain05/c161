AFRAME.registerComponent('shooting',{

    init:function(){
        this.shootBullet()
    },

    shootBullet:function(){
        window.addEventListener('keydown',(e)=>{
            if(e.key==='z'){
                var bullet=document.createElement('a-entity')
                bullet.setAttribute('geometry',{
                    primitive:'sphere',
                    radius:0.1
                })
                bullet.setAttribute('material','color','black')
                var camera=document.querySelector('#camera')
                var pos=camera.getAttribute('position')
                bullet.setAttribute('position',{
                    x:pos.x,
                    y:pos.y,
                    z:pos.z
                })
                var cam=document.querySelector('#camera').object3D
                var direction=new THREE.Vector3()
                cam.getWorldDirection(direction)
                bullet.setAttribute('velocity',direction.multiplyScalar(-10))
               
                // bullet.setAttribute('velocity',{
                //     x:0,
                //     y:0,
                //     z:-1
                // })
                var scene=document.querySelector('#scene')
                scene.appendChild(bullet)
                camera.appendChild(bullet)
            }
        })
    }
})