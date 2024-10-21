import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  OnDestroy,
  HostListener,
} from '@angular/core';
import * as THREE from 'three-full';

@Component({
  selector: 'app-about-author-page',
  templateUrl: './about-author-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutAuthorPageComponent implements OnInit, OnDestroy {
  public loading = true;
  public moving = false;

  @ViewChild('canvasContainer', { static: true })
  public container: ElementRef<HTMLDivElement>;

  private scene;
  private camera;
  private renderer;
  private loader;
  private controls;
  private edward;
  private tick;

  constructor(public ref: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, 150 / 150, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(150, 150);
    this.container.nativeElement.appendChild(this.renderer.domElement);
    const light = new THREE.AmbientLight(0xffffff);
    this.scene.add(light);
    this.loader = new THREE.GLTFLoader();
    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.loader.load('../../../../assets/models/scene.gltf', (obj) => {
      this.edward = obj.scene;
      this.scene.add(this.edward);
      this.camera.position.z = 7;
      this.edward.rotation.x -= 1.5;
      this.edward.position.set(0, -7, 0);
      this.controls.target = new THREE.Vector3(0, 0, 0);
      this.controls.autoRotate = true;
      this.controls.autoRotateSpeed = 20;
      this.animate();
      this.loading = false;
      this.ref.markForCheck();
    });
  }

  @HostListener('window:beforeunload')
  public async ngOnDestroy(): Promise<void> {
    cancelAnimationFrame(this.tick);
    this.scene.dispose();
    this.controls.dispose();
    this.renderer.dispose();
  }

  public animate = (): void => {
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
    this.tick = requestAnimationFrame(this.animate);
  };

  public startMove = (): void => {
    this.moving = true;
  };

  public stopMove = (): void => {
    this.moving = false;
  };

  public calculateAge = (): number => {
    const birthDate = new Date(1995, 4, 16, 0, 0, 0);
    const ageDifMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}
