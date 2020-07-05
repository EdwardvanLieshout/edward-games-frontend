import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
import * as THREE from 'three-full';

@Component({
  selector: 'app-about-author-page',
  templateUrl: './about-author-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutAuthorPageComponent implements OnInit {
  private scene;
  private camera;
  private renderer;
  private loader;
  private controls;

  private i = 0;

  private edward;

  public loading = true;

  @ViewChild('canvasContainer', { static: true })
  public container: ElementRef<HTMLDivElement>;

  constructor(public ref: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, 150 / 150, 0.1, 1000);

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(150, 150);
    this.container.nativeElement.appendChild(this.renderer.domElement);
    var geometry = new THREE.BoxGeometry();
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var light = new THREE.AmbientLight(0xffffff); // soft white light
    this.scene.add(light);
    this.loader = new THREE.GLTFLoader();
    this.controls = new THREE.OrbitControls(
      this.camera,
      this.renderer.domElement
    );
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

  public animate = (): void => {
    // this.edward.rotation.z = (this.edward.rotation.z + 0.02) % 6.25;
    // if (this.edward.rotation.z > 1.5 && this.edward.rotation.z <= 4.5 ) {
    //   this.edward.rotation.z = (this.edward.rotation.z + 0.1) % 6.25;
    // }
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.animate);
  };
}
