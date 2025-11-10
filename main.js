// ==================================================================================
// CONFIGURACIÓN E INICIALIZACIÓN DE EMAILJS
// CLAVES PROPORCIONADAS POR EL USUARIO:
// Public Key: YAkuF9V74QA6VplVW
// Service ID: service_z5lhusm
// Template ID: template_61e3pb5
// ==================================================================================
emailjs.init("YAkuF9V74QA6VplVW"); 

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  25,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
// Posición inicial de la cámara
const DEFAULT_CAMERA_Z = 24; 
camera.position.set(0, 0, DEFAULT_CAMERA_Z); 
camera.lookAt(0, 0, 0); 

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("webgl"),
  antialias: true,
  alpha: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; 

// Orbit Controls (Permite arrastrar la escena en touch)
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.target.set(0, 0, 0); 
controls.update(); 

const radii = [
  1, 0.6, 0.8, 0.4, 0.9, 0.7, 0.9, 0.3, 0.2, 0.5, 0.6, 0.4, 0.5, 0.6, 0.7, 0.3, 0.4, 0.8, 0.7, 0.5, 0.4, 0.6, 0.35, 0.38, 0.9,
  0.3, 0.6, 0.4, 0.2, 0.35, 0.5, 0.15, 0.2, 0.25, 0.4, 0.8, 0.76, 0.8, 1, 0.8, 0.7, 0.8, 0.3, 0.5, 0.6, 0.55, 0.42, 0.75, 0.66, 0.6, 0.7, 0.5, 0.6, 0.35, 0.35, 0.35, 0.8, 0.6, 0.7, 0.8, 0.4, 0.89, 0.3,
  0.3, 0.6, 0.4, 0.2, 0.52, 0.5, 0.15, 0.2, 0.25, 0.4, 0.8, 0.76, 0.8, 1, 0.8, 0.7, 0.8, 0.3, 0.5, 0.6, 0.8, 0.7, 0.75, 0.66, 0.6, 0.7, 0.5, 0.6, 0.35, 0.35, 0.35, 0.8, 0.6, 0.7, 0.8, 0.4, 0.89, 0.3
];
const positions = [
  { x: 0, y: 0, z: 0 }, { x: 1.2, y: 0.9, z: -0.5 }, { x: 1.8, y: -0.3, z: 0 }, { x: -1, y: -1, z: 0 }, { x: -1, y: 1.62, z: 0 }, { x: -1.65, y: 0, z: -0.4 }, { x: -2.13, y: -1.54, z: -0.4 }, { x: 0.8, y: 0.94, z: 0.3 }, { x: 0.5, y: -1, z: 1.2 }, { x: -0.16, y: -1.2, z: 0.9 }, { x: 1.5, y: 1.2, z: 0.8 }, { x: 0.5, y: -1.58, z: 1.4 }, { x: -1.5, y: 1, z: 1.15 }, { x: -1.5, y: -1.5, z: 0.99 }, { x: -1.5, y: -1.5, z: -1.9 }, { x: 1.85, y: 0.8, z: 0.05 }, { x: 1.5, y: -1.2, z: -0.75 }, { x: 0.9, y: -1.62, z: 0.22 }, { x: 0.45, y: 2, z: 0.65 }, { x: 2.5, y: 1.22, z: -0.2 }, { x: 2.35, y: 0.7, z: 0.55 }, { x: -1.8, y: -0.35, z: 0.85 }, { x: -1.02, y: 0.2, z: 0.9 }, { x: 0.2, y: 1, z: 1 }, { x: -2.88, y: 0.7, z: 1 },
  { x: 0, y: 0, z: 0 }, { x: 1.2, y: 0.9, z: -0.5 }, { x: 1.8, y: -0.3, z: 0 }, { x: -1, y: -1, z: 0 }, { x: -1, y: 1.62, z: 0 }, { x: -1.65, y: 0, z: -0.4 }, { x: -2.13, y: -1.54, z: -0.4 }, { x: 0.8, y: 0.94, z: 0.3 }, { x: 0.5, y: -1, z: 1.2 }, { x: -0.16, y: -1.2, z: 0.9 }, { x: 1.5, y: 1.2, z: 0.8 }, { x: 0.5, y: -1.58, z: 1.4 }, { x: -1.5, y: 1, z: 1.15 }, { x: -1.5, y: -1.5, z: 0.99 }, { x: -1.5, y: -1.5, z: -1.9 }, { x: 1.85, y: 0.8, z: 0.05 }, { x: 1.5, y: -1.2, z: -0.75 }, { x: 0.9, y: -1.62, z: 0.22 }, { x: 0.45, y: 2, z: 0.65 }, { x: 2.5, y: 1.22, z: -0.2 }, { x: 2.35, y: 0.7, z: 0.55 }, { x: -1.8, y: -0.35, z: 0.85 }, { x: -1.02, y: 0.2, z: 0.9 }, { x: 0.2, y: 1, z: 1 }, { x: -2.88, y: 0.7, z: 1 },
  { x: 0, y: 0, z: 0 }, { x: 1.2, y: 0.9, z: -0.5 }, { x: 1.8, y: -0.3, z: 0 }, { x: -1, y: -1, z: 0 }, { x: -1, y: 1.62, z: 0 }, { x: -1.65, y: 0, z: -0.4 }, { x: -2.13, y: -1.54, z: -0.4 }, { x: 0.8, y: 0.94, z: 0.3 }, { x: 0.5, y: -1, z: 1.2 }, { x: -0.16, y: -1.2, z: 0.9 }, { x: 1.5, y: 1.2, z: 0.8 }, { x: 0.5, y: -1.58, z: 1.4 }, { x: -1.5, y: 1, z: 1.15 }, { x: -1.5, y: -1.5, z: 0.99 }, { x: -1.5, y: -1.5, z: -1.9 }, { x: 1.85, y: 0.8, z: 0.05 }, { x: 1.5, y: -1.2, z: -0.75 }, { x: 0.9, y: -1.62, z: 0.22 }, { x: 0.45, y: 2, z: 0.65 }, { x: 2.5, y: 1.22, z: -0.2 }, { x: 2.35, y: 0.7, z: 0.55 }, { x: -1.8, y: -0.35, z: 0.85 }, { x: -1.02, y: 0.2, z: 0.9 }, { x: 0.2, y: 1, z: 1 }, { x: -2.88, y: 0.7, z: 1 }
];

const material = new THREE.MeshStandardMaterial({
  color: "#6D0000", 
  emissive: 0x000000, 
  metalness: 0.1, 
  roughness: 0.5 
});

const group = new THREE.Group();
const spheres = [];

positions.forEach((pos, index) => {
  const radius = radii[index];
  const geometry = new THREE.SphereGeometry(radius, 64, 64);
  const sphere = new THREE.Mesh(geometry, material);
  sphere.position.set(pos.x, pos.y, pos.z); 
  sphere.userData = { originalPosition: { ...pos }, radius };
  sphere.castShadow = true;
  sphere.receiveShadow = true;
  spheres.push(sphere);
  group.add(sphere);
});

scene.add(group);
// Ajustado a 0 para centrar en el eje X
group.position.x = 0; 

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const spotLight = new THREE.SpotLight(0xffffff, 0.52);
spotLight.position.set(14, 24, 30);
spotLight.castShadow = true;

scene.add(spotLight);

const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.2);
directionalLight1.position.set(0, -4, 0);
scene.add(directionalLight1);

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const tempVector = new THREE.Vector3();
const forces = new Map(); 

// --- PARÁMETROS DE ANIMACIÓN ---
const initY = -50; // Aparecer desde más abajo
const revolutionRadius = 4; 
const revolutionDuration = 2; 
const breathingAmplitude = 0.1; 
const breathingSpeed = 0.002; 
// --------------------------------------------

// Initialize spheres below screen
spheres.forEach((sphere, i) => {
  sphere.position.y = initY;
});

// --- FUNCIÓN DE CARGA INICIAL (ROTACIÓN CIRCULAR) ---
function initLoadingAnimation() {
  spheres.forEach((sphere, i) => {
    const delay = i * 0.02;

    gsap
      .timeline()
      // Primera mitad de la rotación (Bottom to Top, +Z)
      .to(sphere.position, {
        duration: revolutionDuration / 2,
        y: revolutionRadius,
        ease: "power1.out",
        onUpdate: function () {
          const progress = this.progress();
          sphere.position.z =
            sphere.userData.originalPosition.z +
            Math.sin(progress * Math.PI) * revolutionRadius;
        },
        delay: delay
      })
      // Segunda mitad de la rotación (Top to Final Position, -Z)
      .to(sphere.position, {
        duration: revolutionDuration / 2,
        y: initY / 5,
        ease: "power1.out",
        onUpdate: function () {
          const progress = this.progress();
          sphere.position.z =
            sphere.userData.originalPosition.z -
            Math.sin(progress * Math.PI) * revolutionRadius;
        }
      })
      // Regresa a la posición final (Original Position)
      .to(sphere.position, {
        duration: 0.6, 
        x: sphere.userData.originalPosition.x,
        y: sphere.userData.originalPosition.y,
        z: sphere.userData.originalPosition.z,
        ease: "power1.out"
      });
  });
}
// ---------------------------------------------------

window.addEventListener("load", initLoadingAnimation);

// Manejo de elementos de texto
const hiddenElements = document.querySelectorAll(".hide-text");
const main_txt = document.querySelector(".main-txt");

// REFERENCIAS DOM
const melMortisButton = document.getElementById('mel-mortis-button');
const subscriptionForm = document.getElementById('subscription-form');
const submissionFormElement = document.getElementById('submission-form');
const successMessage = document.getElementById('success-message'); // Mensaje de éxito
const successText = document.getElementById('success-text');       // Título del éxito


// Inicialización de la bandera de carga
let loadingComplete = false;
setTimeout(() => {
  loadingComplete = true;
  // Solo muestra los elementos visibles al inicio
  hiddenElements.forEach((el) => {
    el.style.opacity = "1"; 
  });
}, (revolutionDuration + 1) * 1000); 

gsap.to(main_txt, {
    duration: 2.5, 
    opacity: 0,
    ease: "power2.inOut"
});


// LÓGICA DE INTERACCIÓN PRINCIPAL (Mel Mortis Click)
function handleMelMortisClick(event) {
    event.preventDefault(); 
    
    // Bloquea si la carga no ha terminado
    if (!loadingComplete) {
        return; 
    }

    // 1. Desvanecer Mel Mortis
    gsap.to(melMortisButton, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
        onComplete: () => {
            melMortisButton.style.display = 'none';
        }
    });

    // 2. Aparecer Formulario de Suscripción
    gsap.fromTo(subscriptionForm, 
        { 
            opacity: 0, 
            scale: 0.95, 
            display: 'block' 
        },
        {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            delay: 0.2, 
            ease: "power2.out"
        }
    );
}

// Añadir el listener de click al botón Mel Mortis
if (melMortisButton) {
    melMortisButton.addEventListener('click', handleMelMortisClick);
    melMortisButton.addEventListener('touchstart', handleMelMortisClick, { passive: false });
}

// ==================================================================================
// ⭐ FUNCIÓN DE ENVÍO DE EMAIL CON EMAILJS ⭐
// ==================================================================================

if (submissionFormElement) {
    const SERVICE_ID = 'service_z5lhusm';
    const TEMPLATE_ID = 'template_61e3pb5';
    
    submissionFormElement.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        const userName = this.querySelector('input[name="user_name"]').value;
        const userEmail = this.querySelector('input[name="user_email"]').value;

        if (!userName || !userEmail) {
            alert("Por favor, introduce tu nombre y correo.");
            return;
        }

        const templateParams = {
            user_name: userName, 
            user_email: userEmail, 
            from_name: "Casa Mortis",
            reply_to: userEmail,
        };

        // 1. Desvanecer el formulario antes de enviar el email
        gsap.to(subscriptionForm, { 
            opacity: 0, 
            duration: 0.4, 
            ease: "power2.inOut",
            onComplete: () => {
                submissionForm.style.display = 'none';
            }
        });


        // 2. Enviar el correo usando EmailJS
        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
            .then(function(response) {
                console.log('Correo enviado con éxito!', response.status, response.text);
                
                // --- LÓGICA DE REEMPLAZO Y ÉXITO ---
                
                // Actualiza el texto con el nombre del usuario
                successText.innerHTML = `¡Confirmación enviada a ${userName}!`;
                
                // Muestra el mensaje de éxito
                gsap.fromTo(successMessage, 
                    { 
                        opacity: 0, 
                        scale: 0.95, 
                        display: 'block' 
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.5,
                        delay: 0.2, 
                        ease: "power2.out"
                    }
                );
                
                this.reset();
                // ------------------------------------

            }.bind(this), function(error) { 
                console.error('Fallo al enviar el correo:', error);
                alert('Error al enviar la confirmación. Inténtalo de nuevo.');
                
                // Revertir la opacidad del formulario si falla el envío
                gsap.to(subscriptionForm, { opacity: 1, duration: 0.5, onStart: () => {
                     subscriptionForm.style.display = 'block';
                }});
            });
    });
}

// ==================================================================================
// LÓGICA DE INTERACCIÓN 3D RESTANTE
// ==================================================================================

// Las siguientes variables y lógica fueron eliminadas: mouse_effect, circle, circle-follow, xTo, yTo, xFollow, yFollow.

/**
 * FUNCIÓN UNIFICADA para manejar Mouse y Touch (Interacción 3D)
 */
function onPointerMove(event) {
  if (!loadingComplete) return;

  let clientX, clientY;

  if (event.touches) {
    if (event.touches.length === 0) return;
    clientX = event.touches[0].clientX;
    clientY = event.touches[0].clientY;
  } else {
    clientX = event.clientX;
    clientY = event.clientY;
  }
  
  // Lógica de Raycasting (Interacción con esferas)
  mouse.x = (clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(spheres);

  if (intersects.length > 0) {
    const hoveredSphere = intersects[0].object;
    const force = new THREE.Vector3();
    force
      .subVectors(intersects[0].point, hoveredSphere.position)
      .normalize()
      .multiplyScalar(0.2); 
    forces.set(hoveredSphere.uuid, force);
  }
}

// Detección de colisiones
function handleCollisions() {
  for (let i = 0; i < spheres.length; i++) {
    const sphereA = spheres[i];
    const radiusA = sphereA.userData.radius;

    for (let j = i + 1; j < spheres.length; j++) {
      const sphereB = spheres[j];
      const radiusB = sphereB.userData.radius;

      const distance = sphereA.position.distanceTo(sphereB.position);
      const minDistance = (radiusA + radiusB) * 1.2; 

      if (distance < minDistance) {
        tempVector.subVectors(sphereB.position, sphereA.position);
        tempVector.normalize();

        const pushStrength = (minDistance - distance) * 0.4;
        sphereA.position.sub(tempVector.clone().multiplyScalar(pushStrength));
        sphereB.position.add(tempVector.clone().multiplyScalar(pushStrength));
      }
    }
  }
}

function animate() {
  requestAnimationFrame(animate);

  if (loadingComplete) {
    // --- ANIMACIÓN DE BUCLE (Breathing Animation) ---
    const time = Date.now() * breathingSpeed;
    spheres.forEach((sphere, i) => {
      const offset = i * 0.2;
      const breathingY = Math.sin(time + offset) * breathingAmplitude;
      const breathingZ = Math.cos(time + offset) * breathingAmplitude * 0.5;

      const force = forces.get(sphere.uuid);
      if (force) {
        sphere.position.add(force);
        force.multiplyScalar(0.95);

        if (force.length() < 0.01) {
          forces.delete(sphere.uuid);
        }
      }

      // Regresa a la posición original con el offset de respiración
      const originalPos = sphere.userData.originalPosition;
      tempVector.set(
        originalPos.x,
        originalPos.y + breathingY,
        originalPos.z + breathingZ
      );
      sphere.position.lerp(tempVector, 0.018);
    });
    // ----------------------------------------------------

    handleCollisions();
  }

  controls.update();
  renderer.render(scene, camera);
}

window.addEventListener("mousemove", onPointerMove);
window.addEventListener("touchmove", onPointerMove, { passive: true }); 
window.addEventListener("touchstart", onPointerMove, { passive: true });

function updateCameraPosition() {
    const aspect = window.innerWidth / window.innerHeight;
    let targetZ = DEFAULT_CAMERA_Z / Math.min(aspect, 1.25); 
    const minZ = (window.innerWidth < 768) ? 25 : 18; // Ajuste para móviles
    targetZ = Math.max(targetZ, minZ); 

    gsap.to(camera.position, {
        duration: 0.5,
        z: targetZ,
        onUpdate: () => {
            camera.updateProjectionMatrix();
        }
    });
}

window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    updateCameraPosition();
});

updateCameraPosition(); 
animate();