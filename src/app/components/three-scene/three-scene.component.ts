import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, ViewChild, inject } from '@angular/core';
import type { BufferGeometry, PerspectiveCamera, Points, PointsMaterial, Scene, WebGLRenderer } from 'three';

const PARTICLE_COUNT = 2000;
const MAX_PIXEL_RATIO = 2;

@Component({
  selector: 'app-three-scene',
  templateUrl: './three-scene.component.html',
  styleUrl: './three-scene.component.scss'
})
export class ThreeSceneComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvasContainer', { static: false }) canvasContainer!: ElementRef<HTMLDivElement>;

  private zone = inject(NgZone);

  private scene?: Scene;
  private camera?: PerspectiveCamera;
  private renderer?: WebGLRenderer;
  private geometry?: BufferGeometry;
  private material?: PointsMaterial;
  private particles?: Points;
  private animationId?: number;
  private destroyed = false;
  private mouseX = 0;
  private mouseY = 0;
  private lastScrollY = 0;

  private readonly onMouseMove = (event: MouseEvent) => {
    this.mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  private readonly onResize = () => {
    if (!this.camera || !this.renderer) {
      return;
    }
    const container = this.canvasContainer.nativeElement;
    this.camera.aspect = container.clientWidth / container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(container.clientWidth, container.clientHeight);
  };

  private readonly onScroll = () => {
    const currentScrollY = window.scrollY;
    if (this.particles) {
      this.particles.rotation.z += (currentScrollY - this.lastScrollY) * 0.0001;
    }
    if (this.camera) {
      this.camera.position.z = 1000 + currentScrollY * 0.5;
    }
    this.lastScrollY = currentScrollY;
  };

  async ngAfterViewInit(): Promise<void> {
    // Respect users who asked for less motion: skip the animated background entirely.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    try {
      const THREE = await import('three');
      if (this.destroyed) {
        return;
      }
      // Animation and listeners never touch Angular state, so keep them out of change detection.
      this.zone.runOutsideAngular(() => {
        this.initScene(THREE);
        this.animate();
      });
    } catch (error) {
      console.error('Error loading Three.js:', error);
    }
  }

  private initScene(THREE: typeof import('three')): void {
    const container = this.canvasContainer.nativeElement;
    const width = container.clientWidth;
    const height = container.clientHeight;

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 1000;

    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, MAX_PIXEL_RATIO));
    container.appendChild(this.renderer.domElement);

    const positions = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < positions.length; i++) {
      positions[i] = (Math.random() - 0.5) * 2000;
    }

    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    this.material = new THREE.PointsMaterial({
      color: 0x667eea,
      size: 2,
      transparent: true,
      opacity: 0.6
    });

    this.particles = new THREE.Points(this.geometry, this.material);
    this.scene.add(this.particles);

    this.lastScrollY = window.scrollY;
    window.addEventListener('mousemove', this.onMouseMove, { passive: true });
    window.addEventListener('resize', this.onResize);
    window.addEventListener('scroll', this.onScroll, { passive: true });
  }

  private animate(): void {
    const loop = () => {
      this.animationId = requestAnimationFrame(loop);

      if (this.particles) {
        this.particles.rotation.x += 0.0005 + this.mouseY * 0.0001;
        this.particles.rotation.y += 0.001 + this.mouseX * 0.0001;
      }

      if (this.renderer && this.scene && this.camera) {
        this.renderer.render(this.scene, this.camera);
      }
    };
    loop();
  }

  ngOnDestroy(): void {
    this.destroyed = true;
    if (this.animationId !== undefined) {
      cancelAnimationFrame(this.animationId);
    }
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('scroll', this.onScroll);
    this.geometry?.dispose();
    this.material?.dispose();
    this.renderer?.dispose();
    this.renderer?.domElement.remove();
  }
}
