import { Injectable } from '@angular/core';
import { IIMage } from '../../../shared/models/interfaces/image.interface';

@Injectable({
  providedIn: 'root',
})
export class SpritesService {
  public spriteChart;
  public playerSprites;
  public platformSprites;
  public bgSprites;

  // tslint:disable-next-line:no-any
  public getSprites = (levelNr: string): Promise<any> => {
    return Promise.all([
      this.loadPlayerSprites(),
      this.loadBackgroundSprites(levelNr),
      this.loadPlatformSprites(),
    ]).then(() => {
      this.spriteChart = { ...this.playerSprites, ...this.bgSprites, ...this.platformSprites };
      return this.spriteChart;
    });
  };

  public loadBackgroundSprites = (levelNr: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      Promise.all(
        [
          { name: 'bg/bg' + levelNr, width: 600, height: 400 },
          { name: 'bg/bg' + levelNr + 'fade', width: 600, height: 400 },
        ].map((spr) => this.loadSprite(spr.name, spr.width, spr.height))
      ).then((values) => {
        this.bgSprites = Object.assign(
          {},
          ...values.map((s) => ({
            [s.name.substring(3).split(levelNr)[0] + s.name.substring(3).split(levelNr)[1]]: s.image,
          }))
        );
        resolve();
      });
    });
  };

  public loadPlayerSprites = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      Promise.all(
        [
          { name: 'player/l1', width: 100, height: 100 },
          { name: 'player/l2', width: 100, height: 100 },
          { name: 'player/l3', width: 100, height: 100 },
          { name: 'player/l4', width: 100, height: 100 },
          { name: 'player/l5', width: 100, height: 100 },
          { name: 'player/l6', width: 100, height: 100 },
          { name: 'player/l7', width: 100, height: 100 },
          { name: 'player/l8', width: 100, height: 100 },
          { name: 'player/r1', width: 100, height: 100 },
          { name: 'player/r2', width: 100, height: 100 },
          { name: 'player/r3', width: 100, height: 100 },
          { name: 'player/r4', width: 100, height: 100 },
          { name: 'player/r5', width: 100, height: 100 },
          { name: 'player/r6', width: 100, height: 100 },
          { name: 'player/r7', width: 100, height: 100 },
          { name: 'player/r8', width: 100, height: 100 },

          { name: 'player/lp1', width: 100, height: 100 },
          { name: 'player/lp2', width: 100, height: 100 },
          { name: 'player/lp3', width: 100, height: 100 },
          { name: 'player/lp4', width: 100, height: 100 },
          { name: 'player/rp1', width: 100, height: 100 },
          { name: 'player/rp2', width: 100, height: 100 },
          { name: 'player/rp3', width: 100, height: 100 },
          { name: 'player/rp4', width: 100, height: 100 },

          { name: 'player/lj1', width: 100, height: 100 },
          { name: 'player/lj2', width: 100, height: 100 },
          { name: 'player/lj3', width: 100, height: 100 },
          { name: 'player/lj4', width: 100, height: 100 },
          { name: 'player/rj1', width: 100, height: 100 },
          { name: 'player/rj2', width: 100, height: 100 },
          { name: 'player/rj3', width: 100, height: 100 },
          { name: 'player/rj4', width: 100, height: 100 },

          { name: 'player/lm1', width: 100, height: 100 },
          { name: 'player/lm2', width: 100, height: 100 },
          { name: 'player/lm3', width: 100, height: 100 },
          { name: 'player/lm4', width: 100, height: 100 },
          { name: 'player/lm5', width: 100, height: 100 },
          { name: 'player/lm6', width: 100, height: 100 },
          { name: 'player/lm7', width: 100, height: 100 },
          { name: 'player/lm8', width: 100, height: 100 },
          { name: 'player/rm1', width: 100, height: 100 },
          { name: 'player/rm2', width: 100, height: 100 },
          { name: 'player/rm3', width: 100, height: 100 },
          { name: 'player/rm4', width: 100, height: 100 },
          { name: 'player/rm5', width: 100, height: 100 },
          { name: 'player/rm6', width: 100, height: 100 },
          { name: 'player/rm7', width: 100, height: 100 },
          { name: 'player/rm8', width: 100, height: 100 },

          { name: 'player/lf1', width: 100, height: 100 },
          { name: 'player/lf2', width: 100, height: 100 },
          { name: 'player/rf1', width: 100, height: 100 },
          { name: 'player/rf2', width: 100, height: 100 },
        ].map((spr) => this.loadSprite(spr.name, spr.width, spr.height))
      ).then((values) => {
        this.playerSprites = Object.assign({}, ...values.map((s) => ({ [s.name.split('/').join('')]: s.image })));
        resolve();
      });
    });
  };

  public loadPlatformSprites = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      Promise.all(
        [
          { name: 'ground/ground-bottom-full', width: 100, height: 100 },
          { name: 'ground/ground-bottom-left', width: 100, height: 100 },
          { name: 'ground/ground-bottom-left-corner', width: 100, height: 100 },
          { name: 'ground/ground-bottom-right', width: 100, height: 100 },
          { name: 'ground/ground-bottom-right-corner', width: 100, height: 100 },
          { name: 'ground/ground-bottom-small', width: 100, height: 100 },

          { name: 'ground/ground-middle-full', width: 100, height: 100 },
          { name: 'ground/ground-middle-full-corner-l', width: 100, height: 100 },
          { name: 'ground/ground-middle-full-corner-r', width: 100, height: 100 },
          { name: 'ground/ground-middle-left', width: 100, height: 100 },
          { name: 'ground/ground-middle-left-corner', width: 100, height: 100 },
          { name: 'ground/ground-middle-right', width: 100, height: 100 },
          { name: 'ground/ground-middle-right-corner', width: 100, height: 100 },
          { name: 'ground/ground-middle-small', width: 100, height: 100 },

          { name: 'ground/ground-thin-full', width: 100, height: 100 },
          { name: 'ground/ground-thin-left', width: 100, height: 100 },
          { name: 'ground/ground-thin-right', width: 100, height: 100 },
          { name: 'ground/ground-thin-small', width: 100, height: 100 },

          { name: 'ground/ground-upper-full', width: 100, height: 100 },
          { name: 'ground/ground-upper-left', width: 100, height: 100 },
          { name: 'ground/ground-upper-left-corner', width: 100, height: 100 },
          { name: 'ground/ground-upper-right', width: 100, height: 100 },
          { name: 'ground/ground-upper-right-corner', width: 100, height: 100 },
          { name: 'ground/ground-upper-small', width: 100, height: 100 },

          { name: 'platform/platform-full', width: 100, height: 100 },
          { name: 'platform/platform-left', width: 100, height: 100 },
          { name: 'platform/platform-right', width: 100, height: 100 },
          { name: 'platform/platform-small', width: 100, height: 100 },
          { name: 'platform/red-platform-full', width: 100, height: 100 },
          { name: 'platform/red-platform-left', width: 100, height: 100 },
          { name: 'platform/red-platform-right', width: 100, height: 100 },
          { name: 'platform/red-platform-small', width: 100, height: 100 },
        ].map((spr) => this.loadSprite(spr.name, spr.width, spr.height))
      ).then((values) => {
        this.platformSprites = Object.assign({}, ...values.map((s) => ({ [s.name.split('/')[1]]: s.image })));
        resolve();
      });
    });
  };

  private loadSprite = (name: string, width: number, height: number): Promise<IIMage> => {
    const image = new Image(width, height);
    image.src = `../../../../assets/images/adventure/${name}.png`;
    return new Promise((resolve, reject) => {
      image.onload = () => {
        resolve({ image: image, name: name });
      };
    });
  };
}
