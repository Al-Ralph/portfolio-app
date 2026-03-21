import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-three-scene',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './three-scene.component.html',
  styleUrl: './three-scene.component.scss'
})
export class ThreeSceneComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvasContainer', { static: false }) canvasContainer!: ElementRef;
  
  private scene: any;
  private camera: any;
  private renderer: any;
  private particles: any;
  private animationId!: number;
  private mouseX = 0;
  private mouseY = 0;

  async ngAfterViewInit(): Promise<void> {
    try {
      const THREE = await import('three');
      await this.initThreeScene(THREE);
      this.animate(THREE);
      this.setupScrollAnimation();
    } catch (error) {
      console.error('Error loading Three.js:', error);
    }
  }

  private async initThreeScene(THREE: any): Promise<void> {
    const container = this.canvasContainer.nativeElement;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    this.scene = new THREE.Scene();

    // Camera
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 1000;

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(this.renderer.domElement);

    // Create particles
    const geometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 2000;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0x667eea,
      size: 2,
      transparent: true,
      opacity: 0.6
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);

    // Mouse movement
    const mouseMoveHandler = (event: MouseEvent) => {
      this.mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    // Window resize
    const resizeHandler = () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      this.camera.aspect = newWidth / newHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('mousemove', mouseMoveHandler);
    window.addEventListener('resize', resizeHandler);
  }

  private animate(THREE: any): void {
    const animateLoop = () => {
      this.animationId = requestAnimationFrame(animateLoop);

      // Rotate particles
      if (this.particles) {
        this.particles.rotation.x += 0.0005;
        this.particles.rotation.y += 0.001;

        // Mouse interaction
        this.particles.rotation.y += this.mouseX * 0.0001;
        this.particles.rotation.x += this.mouseY * 0.0001;
      }

      if (this.renderer && this.scene && this.camera) {
        this.renderer.render(this.scene, this.camera);
      }
    };
    animateLoop();
  }

  private setupScrollAnimation(): void {
    let lastScrollY = window.scrollY;

    const scrollHandler = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;

      if (this.particles) {
        // Rotate based on scroll
        this.particles.rotation.z += scrollDelta * 0.0001;
      }

      if (this.camera) {
        // Move camera based on scroll
        this.camera.position.z = 1000 + currentScrollY * 0.5;
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', scrollHandler);
  }

  ngOnDestroy(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.renderer) {
      this.renderer.dispose();
    }
  }
}
