import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  HostListener,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { TextureTypeEnum } from '../../../../../../shared/models/enums/textureType.enum';
import { TileTypeEnum } from '../../../../../../shared/models/enums/tileType.enum';
import { MapService } from '../../../../../../core/services/map.service';

@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomViewComponent implements OnInit, OnDestroy {
  public SCREEN_WIDTH = 600;
  public SCREEN_HEIGHT = 350;

  public readonly TEXTURE_WIDTH = 64;
  public readonly TEXTURE_HEIGHT = 64;

  public showCanvas = false;

  public rotatingLeft: boolean;
  public rotatingRight: boolean;
  public movingForward: boolean;
  public movingBackward: boolean;

  public tileEnum = TileTypeEnum;
  public texEnum = TextureTypeEnum;

  @ViewChild('canvas', { static: true })
  public canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;
  private data: ImageData;

  private textures: ImageData[];

  private animationCounter = 0;
  private slowAnimationCounter = 0;
  private tick;

  private tickStart: Date;
  private tickEnd: Date;

  private worker: Worker;

  constructor(public mapService: MapService, private ref: ChangeDetectorRef) {}

  @HostListener('window:resize', ['$event'])
  public onResize(): void {
    this.SCREEN_WIDTH = this.canvas.nativeElement.width;
    this.SCREEN_HEIGHT = this.canvas.nativeElement.height;
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.data = this.ctx.createImageData(this.SCREEN_WIDTH, this.SCREEN_HEIGHT);
  }

  public ngOnInit(): void {
    this.ref.detach();
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ref.detectChanges();
    if (typeof Worker !== 'undefined') {
      const path = (this.worker = new Worker(new URL('./room-view.worker', import.meta.url), { type: 'module' }));
      this.worker.onmessage = ({ data }) => {
        this.handleWorkerMessage(data);
      };
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
    Promise.all(
      [
        'grid',
        'wood',
        'plain',
        'brickwall',
        'sky',
        'hills',
        'grass',
        'brickwall-tv1',
        'brickwall-tv2',
        'brickwall-tv3',
        'brickwall-tv4',
        'brickwall-tv1-selected',
        'brickwall-tv2-selected',
        'brickwall-tv3-selected',
        'brickwall-tv4-selected',
        'portal1',
        'portal2',
        'portal3',
        'portal4',
        'grid-info',
        'hitech',
        'discored1',
        'discored2',
        'discored3',
        'discored4',
        'discoblue1',
        'discoblue2',
        'discoblue3',
        'discoblue4',
        'discomulti1',
        'discomulti2',
        'discomulti3',
        'discomulti4',
        'discogreen1',
        'discogreen2',
        'discogreen3',
        'discogreen4',
        'discopurple1',
        'discopurple2',
        'discopurple3',
        'discopurple4',
        'stonewall',
      ].map((str) => this.loadTexture(str))
    ).then((values) => {
      this.textures = values;
      this.onResize();
      this.ctx.clearRect(0, 0, this.SCREEN_WIDTH, this.SCREEN_HEIGHT);
      this.performTick();
    });
  }

  @HostListener('window:beforeunload')
  public async ngOnDestroy(): Promise<void> {
    this.worker.terminate();
    cancelAnimationFrame(this.tick);
  }

  public performTick = (): void => {
    this.calculateRays();
  };

  public startRotateRight = (): void => {
    if (!this.rotatingRight) {
      this.rotatingRight = true;
    }
  };

  public cancelRotateRight = (): void => {
    this.rotatingRight = false;
  };

  public startRotateLeft = (): void => {
    if (!this.rotatingLeft) {
      this.rotatingLeft = true;
    }
  };

  public cancelRotateLeft = (): void => {
    this.rotatingLeft = false;
  };

  public startMoveForward = (): void => {
    if (!this.movingForward) {
      this.movingForward = true;
    }
  };

  public cancelMoveForward = (): void => {
    this.movingForward = false;
  };

  public startMoveBackward = (): void => {
    if (!this.movingBackward) {
      this.movingBackward = true;
    }
  };

  public cancelMoveBackward = (): void => {
    this.movingBackward = false;
  };

  public calculateRays = (): void => {
    let speedModifier = 1;
    if (this.tickEnd && this.tickStart) {
      speedModifier = (this.tickEnd.getTime() - this.tickStart.getTime()) / 60;
    }
    this.animationCounter = (this.animationCounter + 1 * speedModifier) % 4;
    this.slowAnimationCounter = (this.slowAnimationCounter + 1 * speedModifier) % 16;
    this.tickStart = new Date();
    this.worker.postMessage({
      dirX: this.mapService.getDirX(),
      dirY: this.mapService.getDirY(),
      planeX: this.mapService.getPlaneX(),
      planeY: this.mapService.getPlaneY(),
      posX: this.mapService.getPosX(),
      posY: this.mapService.getPosY(),
      map: this.mapService.getMap(),
      screen_width: this.SCREEN_WIDTH,
      screen_height: this.SCREEN_HEIGHT,
      texture_width: this.TEXTURE_WIDTH,
      texture_height: this.TEXTURE_HEIGHT,
      textures: this.textures,
      imageData: this.data,
      animationCounter: Math.trunc(this.animationCounter),
      slowAnimationCounter: Math.trunc(this.slowAnimationCounter),
      timestamp: new Date(),
    });
  };

  private handleWorkerMessage = (data): void => {
    this.ctx.putImageData(data.imageData, 0, 0);
    this.showCanvas = true;
    this.ref.detectChanges();
    this.tickEnd = new Date();
    if (this.rotatingRight) {
      this.mapService.rotateRight(this.tickStart, this.tickEnd);
    }
    if (this.rotatingLeft) {
      this.mapService.rotateLeft(this.tickStart, this.tickEnd);
    }
    if (this.movingForward) {
      this.mapService.moveForward(this.tickStart, this.tickEnd);
    }
    if (this.movingBackward) {
      this.mapService.moveBackward(this.tickStart, this.tickEnd);
    }
    this.tick = requestAnimationFrame(this.performTick);
  };

  private loadTexture = (name: string): Promise<ImageData> => {
    const image = new Image(this.TEXTURE_WIDTH, this.TEXTURE_HEIGHT);
    image.src = `../../../../assets/textures/${name}.png`;
    return new Promise((resolve, reject) => {
      image.onload = () => {
        this.ctx.drawImage(image, 0, 0);
        resolve(this.ctx.getImageData(0, 0, this.TEXTURE_WIDTH, this.TEXTURE_HEIGHT));
      };
    });
  };
}
