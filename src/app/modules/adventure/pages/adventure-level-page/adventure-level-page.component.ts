import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpritesService } from '../../../../core/services/adventure/sprites.service';
import { CameraService } from '../../../../core/services/adventure/camera.service';
import { ILevel } from '../../../../shared/models/interfaces/level.interface';
import { LevelService } from '../../../../core/services/adventure/level.service';
import { PlayerService } from '../../../../core/services/adventure/player.service';

@Component({
  selector: 'app-adventure-level-page',
  templateUrl: './adventure-level-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdventureLevelPageComponent implements OnInit {
  public levelNr: string;
  public SCREEN_WIDTH = 800;
  public SCREEN_HEIGHT = 500;
  public showCanvas = false;
  // tslint:disable-next-line:no-any
  public spriteChart: any;

  @ViewChild('canvas', { static: true })
  public canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;
  private level: ILevel;

  private tick;

  constructor(
    private route: ActivatedRoute,
    private sprites: SpritesService,
    private cameraService: CameraService,
    private levelService: LevelService,
    private playerService: PlayerService,
    private ref: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.levelNr = this.route.snapshot.paramMap.get('levelNr');
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.level = this.levelService.getLevel1();
    this.sprites.getSprites(this.levelNr).then((res) => {
      this.spriteChart = res;
      this.tick = setInterval(() => this.performTick(), 35);
      this.showCanvas = true;
      this.ref.detectChanges();
    });
  }

  public performTick = (): void => {
    this.playerService.updatePlayer(this.level);
    this.refreshCanvas();
  };

  public refreshCanvas = (): void => {
    const drawCommands = this.cameraService.getDrawCommands(this.level, this.spriteChart);
    for (const dc of drawCommands) {
      if (dc.alpha) {
        this.ctx.globalAlpha = dc.alpha;
      }
      this.ctx.drawImage(dc.img, dc.x, dc.y, dc.w, dc.h);
      this.ctx.globalAlpha = 1;
    }
  };
}
