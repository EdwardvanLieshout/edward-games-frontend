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
  public SCREEN_HEIGHT = 400;

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
  private tick;

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
    this.ctx = this.canvas.nativeElement.getContext('2d');
    if (typeof Worker !== 'undefined') {
      const path = (this.worker = new Worker('./room-view.worker', { type: 'module' }));
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
      ].map((str) => this.loadTexture(str))
    ).then((values) => {
      this.textures = values;
      this.showCanvas = true;
      this.ref.markForCheck();
      this.onResize();
      this.ctx.clearRect(0, 0, this.SCREEN_WIDTH, this.SCREEN_HEIGHT);
      this.performTick();
    });
  }

  @HostListener('window:beforeunload')
  public async ngOnDestroy(): Promise<void> {
    cancelAnimationFrame(this.tick);
  }

  public performTick = (): void => {
    if (this.rotatingRight) {
      this.rotateRight();
    }
    if (this.rotatingLeft) {
      this.rotateLeft();
    }
    if (this.movingForward) {
      this.moveForward();
    }
    if (this.movingBackward) {
      this.moveBackward();
    }
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
    this.animationCounter = (this.animationCounter + 1) % 4;
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
      animationCounter: this.animationCounter,
      timestamp: new Date(),
    });
  };

  private handleWorkerMessage = (data): void => {
    this.ctx.putImageData(data.imageData, 0, 0);
    this.tick = requestAnimationFrame(this.performTick);
  };

  private moveForward = (): void => {
    this.mapService.moveForward();
  };

  private moveBackward = (): void => {
    this.mapService.moveBackward();
  };

  private rotateRight = (): void => {
    this.mapService.rotateRight();
  };

  private rotateLeft = (): void => {
    this.mapService.rotateLeft();
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
