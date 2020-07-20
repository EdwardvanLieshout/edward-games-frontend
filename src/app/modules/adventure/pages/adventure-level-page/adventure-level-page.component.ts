import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  HostListener,
  OnDestroy,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpritesService } from '../../../../core/services/adventure/sprites.service';
import { CameraService } from '../../../../core/services/adventure/camera.service';
import { ILevel } from '../../../../shared/models/interfaces/level.interface';
import { LevelService } from '../../../../core/services/adventure/level.service';
import { PlayerService } from '../../../../core/services/adventure/player.service';
import { EnemyService } from '../../../../core/services/adventure/enemy.service';

@Component({
  selector: 'app-adventure-level-page',
  templateUrl: './adventure-level-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdventureLevelPageComponent implements OnInit, OnDestroy {
  public levelNr: string;
  public SCREEN_WIDTH = 800;
  public SCREEN_HEIGHT = 500;
  public showCanvas = false;
  // tslint:disable-next-line:no-any
  public spriteChart: any;
  public hpBarWidth = 84;

  @ViewChild('canvas', { static: true })
  public canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;
  private level: ILevel;

  private tick;

  private time: Date;
  private timeIncrement: Date;

  private gemUIAnim: number;
  private gemAnimDelay: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sprites: SpritesService,
    private cameraService: CameraService,
    private levelService: LevelService,
    private playerService: PlayerService,
    private enemyService: EnemyService,
    private ref: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.levelNr = this.route.snapshot.paramMap.get('levelNr');
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.playerService.setUp();
    this.level = this.levelService['getLevel' + this.levelNr]();

    this.gemUIAnim = 1;
    this.gemAnimDelay = 0;
    this.sprites.getSprites(this.levelNr).then((res) => {
      this.spriteChart = res;
      this.time = new Date();
      this.timeIncrement = new Date();
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
    this.enemyService.updateEnemies(this.level);
    this.playerService.updatePlayer(this.level);
    if (this.playerService.checkDeath(this.level) || this.hpBarWidth <= 0) {
      this.router.navigate(['adventure/rip', this.levelNr]);
    }
    this.refreshCanvas();
    this.timeIncrement = new Date(this.timeIncrement.getTime() + 35);
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
    this.drawHp();
    this.drawGems();
    this.drawText();
  };

  public drawGems = (): void => {
    this.ctx.drawImage(this.spriteChart['Col' + this.gemUIAnim], -25, -25, 100, 100);
    for (const gem of this.level.player.bigGems) {
      this.ctx.drawImage(
        this.spriteChart[gem.name + this.gemUIAnim],
        -20,
        30 + this.level.player.bigGems.indexOf(gem) * 55,
        100,
        100
      );
    }
    this.gemAnimDelay++;
    if (this.gemAnimDelay >= 2) {
      this.gemAnimDelay = 0;
      this.gemUIAnim++;
      if (this.gemUIAnim > 8) {
        this.gemUIAnim = 1;
      }
    }
  };

  public drawText = (): void => {
    const timerValue = this.timeIncrement.getTime() - this.time.getTime();
    const milliseconds = timerValue % 1000;
    const seconds = Math.round((timerValue - milliseconds) / 1000) % 60;
    const minutes = Math.round(((timerValue - milliseconds) / 1000 - seconds) / 60);
    const minutesString = minutes < 100 ? ('0' + minutes).slice(-2) : minutes;
    const timestring = minutesString + ':' + ('0' + seconds).slice(-2) + ':' + ('00' + milliseconds).slice(-3);

    const amountOfGems = this.level.player.gems.length.toString();
    this.ctx.font = '40px Arial Black';
    this.ctx.lineWidth = 2;
    const gradient = this.ctx.createLinearGradient(0, 0, 0, 40);
    gradient.addColorStop(0, 'white');
    gradient.addColorStop(1.0, 'gray');
    this.ctx.fillStyle = gradient;
    this.ctx.fillText(amountOfGems, 40, 40);
    const gradient2 = this.ctx.createLinearGradient(0, 470, 0, 490);
    gradient2.addColorStop(0, 'white');
    gradient2.addColorStop(1.0, 'gray');
    this.ctx.fillStyle = gradient2;
    this.ctx.font = '30px Arial Black';
    this.ctx.fillText(timestring, 10, 490);
    this.ctx.strokeStyle = '#000000';
    this.ctx.font = '40px Arial Black';
    this.ctx.strokeText(amountOfGems, 40, 40);
    this.ctx.font = '30px Arial Black';
    this.ctx.strokeText(timestring, 10, 490);
  };

  public drawHp = (): void => {
    this.ctx.drawImage(this.spriteChart['HPBar'], 680, -20, 100, 100);
    this.ctx.fillStyle = '#FF0000';
    this.ctx.fillRect(688, 30, 84, 21);
    if (this.hpBarWidth > this.level.player.health * 21) {
      this.hpBarWidth -= 2;
      let gvalue = 2 * Math.abs(Math.round(((this.hpBarWidth - this.level.player.health * 21) / 21) * 255));
      gvalue = gvalue > 255 ? 255 : gvalue;
      let rvalue = 2 * (255 - Math.abs(Math.round(((this.hpBarWidth - this.level.player.health * 21) / 21) * 255)));
      rvalue = rvalue > 255 ? 255 : rvalue;
      this.ctx.fillStyle = 'rgb(' + rvalue + ', ' + gvalue + ', 0)';
      this.ctx.fillRect(this.level.player.health * 21 + 688, 30, 21, 21);
    }
    this.ctx.fillStyle = '#00FF00';
    this.ctx.fillRect(688, 30, this.hpBarWidth, 21);
  };
}
