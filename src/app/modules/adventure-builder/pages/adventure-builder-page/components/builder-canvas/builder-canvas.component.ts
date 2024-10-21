import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Optional,
  Self,
  ViewChild,
} from '@angular/core';
import { BuilderCameraService } from '../../../../../../core/services/adventure-builder/builder-camera.service';
import { BuilderLevelService } from '../../../../../../core/services/adventure-builder/builder-level.service';
import { SelectedEntityService } from '../../../../../../core/services/adventure-builder/selected-entity.service';
import { SpritesService } from '../../../../../../core/services/adventure/sprites.service';
import { OnDestroyService } from '../../../../../../core/services/on-destroy.service';
import { ILevel } from '../../../../../../shared/models/interfaces/level.interface';

@Component({
  selector: 'app-builder-canvas',
  templateUrl: './builder-canvas.component.html',
})
export class BuilderCanvasComponent implements OnInit {
  public levelNr = '1';
  public SCREEN_WIDTH = 800;
  public SCREEN_HEIGHT = 500;
  public showCanvas = false;
  // tslint:disable-next-line:no-any
  public spriteChart: any;
  public x: number;
  public y: number;

  @Input()
  public level: ILevel;

  private tick;

  @ViewChild('canvas', { static: true })
  public canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;

  constructor(
    private sprites: SpritesService,
    private selectedEntity: SelectedEntityService,
    public cameraService: BuilderCameraService,
    private ref: ChangeDetectorRef,
    @Self()
    @Optional()
    private onDestroyService: OnDestroyService
  ) {}

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.sprites.getSprites(this.levelNr).then((res) => {
      this.spriteChart = res;
      this.tick = setInterval(() => this.performTick(), 35);
      this.showCanvas = true;
      this.ref.detectChanges();
    });
  }

  @HostListener('window:beforeunload')
  public async ngOnDestroy(): Promise<void> {
    clearInterval(this.tick);
  }

  public performTick = (): void => {
    // update model
    this.refreshCanvas();
  };

  public refreshCanvas = (): void => {
    const drawCommands = this.cameraService.getDrawCommands(this.level, this.spriteChart);
    this.x = this.cameraService.camera.x;
    this.y = this.cameraService.camera.y;
    if (this.cameraService.moving) {
      this.ref.detectChanges();
    }
    for (const dc of drawCommands) {
      if (dc.alpha) {
        this.ctx.globalAlpha = dc.alpha;
      }
      this.ctx.drawImage(dc.img, dc.x, dc.y, dc.w, dc.h);
      this.ctx.globalAlpha = 1;
    }
    this.ctx.beginPath();
    this.ctx.lineWidth = 4;
    this.ctx.strokeStyle = 'chartreuse';
    const selectedEntity =
      this.level.backLayer.find((entity) => entity.id === this.selectedEntity.selectedId) ??
      this.level.centerLayer.find((entity) => entity.id === this.selectedEntity.selectedId) ??
      this.level.frontLayer.find((entity) => entity.id === this.selectedEntity.selectedId) ??
      this.level.skyLineLayer.find((entity) => entity.id === this.selectedEntity.selectedId);
    if (selectedEntity) {
      this.ctx.rect(
        this.cameraService.offsetX(this.cameraService.camera, selectedEntity.x, selectedEntity.distance),
        this.cameraService.offsetY(this.cameraService.camera, selectedEntity.y, selectedEntity.distance),
        selectedEntity.w / selectedEntity.distance,
        selectedEntity.h / selectedEntity.distance
      );
      this.ctx.stroke();
    }
  };
}
