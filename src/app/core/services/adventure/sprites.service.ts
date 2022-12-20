import { Injectable } from '@angular/core';
import { IIMage } from '../../../shared/models/interfaces/image.interface';

@Injectable({
  providedIn: 'root',
})
export class SpritesService {
  public spriteChart;
  public playerSprites;
  public platformSprites;
  public decorSprites;
  public gemSprites;
  public enemySprites;
  public bgSprites;
  public uiSprites;

  // tslint:disable-next-line:no-any
  public getSprites = (levelNr: string): Promise<any> => {
    return Promise.all([
      this.loadPlayerSprites(),
      this.loadBackgroundSprites(levelNr),
      this.loadPlatformSprites(levelNr),
      this.loadDecorSprites(),
      this.loadGemSprites(levelNr),
      this.loadEnemySprites(),
      this.loadUISprites(),
    ]).then(() => {
      this.spriteChart = {
        ...this.playerSprites,
        ...this.bgSprites,
        ...this.platformSprites,
        ...this.decorSprites,
        ...this.gemSprites,
        ...this.enemySprites,
        ...this.uiSprites,
      };
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

          { name: 'player/ldmg1', width: 100, height: 100 },
          { name: 'player/rdmg1', width: 100, height: 100 },
        ].map((spr) => this.loadSprite(spr.name, spr.width, spr.height))
      ).then((values) => {
        this.playerSprites = Object.assign({}, ...values.map((s) => ({ [s.name.split('/').join('')]: s.image })));
        resolve();
      });
    });
  };

  public loadPlatformSprites = (level: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      Promise.all(
        [
          { name: 'ground/level' + level + '/ground-bottom-full', width: 100, height: 100 },
          { name: 'ground/level' + level + '/ground-bottom-left', width: 100, height: 100 },
          { name: 'ground/level' + level + '/ground-bottom-left-corner', width: 100, height: 100 },
          { name: 'ground/level' + level + '/ground-bottom-right', width: 100, height: 100 },
          { name: 'ground/level' + level + '/ground-bottom-right-corner', width: 100, height: 100 },
          { name: 'ground/level' + level + '/ground-bottom-small', width: 100, height: 100 },

          { name: 'ground/level' + level + '/ground-middle-full', width: 100, height: 100 },
          { name: 'ground/level' + level + '/ground-middle-full-corner-l', width: 100, height: 100 },
          { name: 'ground/level' + level + '/ground-middle-full-corner-r', width: 100, height: 100 },
          { name: 'ground/level' + level + '/ground-middle-left', width: 100, height: 100 },
          { name: 'ground/level' + level + '/ground-middle-left-corner', width: 100, height: 100 },
          { name: 'ground/level' + level + '/ground-middle-right', width: 100, height: 100 },
          { name: 'ground/level' + level + '/ground-middle-right-corner', width: 100, height: 100 },
          { name: 'ground/level' + level + '/ground-middle-small', width: 100, height: 100 },

          { name: 'ground/level' + level + '/ground-thin-full', width: 100, height: 100 },
          { name: 'ground/level' + level + '/ground-thin-left', width: 100, height: 100 },
          { name: 'ground/level' + level + '/ground-thin-right', width: 100, height: 100 },
          { name: 'ground/level' + level + '/ground-thin-small', width: 100, height: 100 },

          { name: 'ground/level' + level + '/ground-upper-full', width: 100, height: 100 },
          { name: 'ground/level' + level + '/ground-upper-left', width: 100, height: 100 },
          { name: 'ground/level' + level + '/ground-upper-left-corner', width: 100, height: 100 },
          { name: 'ground/level' + level + '/ground-upper-right', width: 100, height: 100 },
          { name: 'ground/level' + level + '/ground-upper-right-corner', width: 100, height: 100 },
          { name: 'ground/level' + level + '/ground-upper-small', width: 100, height: 100 },

          { name: 'ground/level' + level + '/ground-z-front-right', width: 100, height: 100 },
          { name: 'ground/level' + level + '/ground-z-front-small', width: 100, height: 100 },
          { name: 'ground/level' + level + '/ground-z-front-left', width: 100, height: 100 },
          { name: 'ground/level' + level + '/ground-z-front-full', width: 100, height: 100 },
          { name: 'ground/level' + level + '/ground-z-back-left', width: 100, height: 100 },
          { name: 'ground/level' + level + '/ground-z-back-right', width: 100, height: 100 },
          { name: 'ground/level' + level + '/ground-z-filler', width: 100, height: 100 },
          { name: 'ground/level' + level + '/ground-z-filler-small', width: 100, height: 100 },

          { name: 'platform/level' + level + '/platform-full', width: 100, height: 100 },
          { name: 'platform/level' + level + '/platform-left', width: 100, height: 100 },
          { name: 'platform/level' + level + '/platform-right', width: 100, height: 100 },
          { name: 'platform/level' + level + '/platform-small', width: 100, height: 100 },
          { name: 'platform/level' + level + '/red-platform-full', width: 100, height: 100 },
          { name: 'platform/level' + level + '/red-platform-left', width: 100, height: 100 },
          { name: 'platform/level' + level + '/red-platform-right', width: 100, height: 100 },
          { name: 'platform/level' + level + '/red-platform-small', width: 100, height: 100 },

          { name: 'jumpzones/sprites/jumpzoneavailable1', width: 100, height: 100 },
          { name: 'jumpzones/sprites/jumpzoneavailable2', width: 100, height: 100 },
          { name: 'jumpzones/sprites/jumpzoneavailable3', width: 100, height: 100 },
          { name: 'jumpzones/sprites/jumpzoneavailable4', width: 100, height: 100 },
          { name: 'jumpzones/sprites/jumpzoneavailable5', width: 100, height: 100 },
          { name: 'jumpzones/sprites/jumpzoneready1', width: 100, height: 100 },
          { name: 'jumpzones/sprites/jumpzoneready2', width: 100, height: 100 },
          { name: 'jumpzones/sprites/jumpzoneready3', width: 100, height: 100 },
          { name: 'jumpzones/sprites/jumpzoneready4', width: 100, height: 100 },
          { name: 'jumpzones/sprites/jumpzoneready5', width: 100, height: 100 },
          { name: 'jumpzones/sprites/jumpzoneunavailable1', width: 100, height: 100 },
          { name: 'jumpzones/sprites/jumpzoneunavailable2', width: 100, height: 100 },
          { name: 'jumpzones/sprites/jumpzoneunavailable3', width: 100, height: 100 },
          { name: 'jumpzones/sprites/jumpzoneunavailable4', width: 100, height: 100 },
          { name: 'jumpzones/sprites/jumpzoneunavailable5', width: 100, height: 100 },

          { name: 'jumpzones/sprites/jumpzonesingleavailable1', width: 100, height: 100 },
          { name: 'jumpzones/sprites/jumpzonesingleavailable2', width: 100, height: 100 },
          { name: 'jumpzones/sprites/jumpzonesingleavailable3', width: 100, height: 100 },
          { name: 'jumpzones/sprites/jumpzonesingleavailable4', width: 100, height: 100 },
          { name: 'jumpzones/sprites/jumpzonesingleavailable5', width: 100, height: 100 },
          { name: 'jumpzones/sprites/jumpzonesingleready1', width: 100, height: 100 },
          { name: 'jumpzones/sprites/jumpzonesingleready2', width: 100, height: 100 },
          { name: 'jumpzones/sprites/jumpzonesingleready3', width: 100, height: 100 },
          { name: 'jumpzones/sprites/jumpzonesingleready4', width: 100, height: 100 },
          { name: 'jumpzones/sprites/jumpzonesingleready5', width: 100, height: 100 },
          { name: 'jumpzones/sprites/jumpzonesingleunavailable1', width: 100, height: 100 },
          { name: 'jumpzones/sprites/jumpzonesingleunavailable2', width: 100, height: 100 },
          { name: 'jumpzones/sprites/jumpzonesingleunavailable3', width: 100, height: 100 },
          { name: 'jumpzones/sprites/jumpzonesingleunavailable4', width: 100, height: 100 },
          { name: 'jumpzones/sprites/jumpzonesingleunavailable5', width: 100, height: 100 },
        ].map((spr) => this.loadSprite(spr.name, spr.width, spr.height))
      ).then((values) => {
        this.platformSprites = Object.assign({}, ...values.map((s) => ({ [s.name.split('/')[2]]: s.image })));
        resolve();
      });
    });
  };

  public loadDecorSprites = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      Promise.all(
        [
          { name: 'misc/Finish', width: 100, height: 100 },
          { name: 'distantdecor/tree1', width: 100, height: 200 },
          { name: 'distantdecor/cloud1', width: 100, height: 100 },
          { name: 'distantdecor/cloud2', width: 300, height: 200 },
          { name: 'distantdecor/cloud3', width: 300, height: 200 },
          { name: 'distantdecor/portal1', width: 100, height: 100 },
          { name: 'distantdecor/portal2', width: 100, height: 100 },
          { name: 'distantdecor/portal3', width: 100, height: 100 },
          { name: 'distantdecor/portal4', width: 100, height: 100 },
          { name: 'distantdecor/arrowsr1', width: 300, height: 100 },
          { name: 'distantdecor/arrowsr2', width: 300, height: 100 },
          { name: 'distantdecor/arrowsr3', width: 300, height: 100 },
        ].map((spr) => this.loadSprite(spr.name, spr.width, spr.height))
      ).then((values) => {
        this.decorSprites = Object.assign({}, ...values.map((s) => ({ [s.name.split('/')[1]]: s.image })));
        resolve();
      });
    });
  };

  public loadGemSprites = (level: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      Promise.all(
        [
          { name: 'gems/level' + level + '/Col1', width: 100, height: 100 },
          { name: 'gems/level' + level + '/Col2', width: 100, height: 100 },
          { name: 'gems/level' + level + '/Col3', width: 100, height: 100 },
          { name: 'gems/level' + level + '/Col4', width: 100, height: 100 },
          { name: 'gems/level' + level + '/Col5', width: 100, height: 100 },
          { name: 'gems/level' + level + '/Col6', width: 100, height: 100 },
          { name: 'gems/level' + level + '/Col7', width: 100, height: 100 },
          { name: 'gems/level' + level + '/Col8', width: 100, height: 100 },
          { name: 'gems/level' + level + '/CollectableA1', width: 100, height: 100 },
          { name: 'gems/level' + level + '/CollectableA2', width: 100, height: 100 },
          { name: 'gems/level' + level + '/CollectableA3', width: 100, height: 100 },
          { name: 'gems/level' + level + '/CollectableA4', width: 100, height: 100 },
          { name: 'gems/level' + level + '/CollectableA5', width: 100, height: 100 },
          { name: 'gems/level' + level + '/CollectableA6', width: 100, height: 100 },
          { name: 'gems/level' + level + '/CollectableA7', width: 100, height: 100 },
          { name: 'gems/level' + level + '/CollectableA8', width: 100, height: 100 },
          { name: 'gems/level' + level + '/CollectableB1', width: 100, height: 100 },
          { name: 'gems/level' + level + '/CollectableB2', width: 100, height: 100 },
          { name: 'gems/level' + level + '/CollectableB3', width: 100, height: 100 },
          { name: 'gems/level' + level + '/CollectableB4', width: 100, height: 100 },
          { name: 'gems/level' + level + '/CollectableB5', width: 100, height: 100 },
          { name: 'gems/level' + level + '/CollectableB6', width: 100, height: 100 },
          { name: 'gems/level' + level + '/CollectableB7', width: 100, height: 100 },
          { name: 'gems/level' + level + '/CollectableB8', width: 100, height: 100 },
          { name: 'gems/level' + level + '/CollectableC1', width: 100, height: 100 },
          { name: 'gems/level' + level + '/CollectableC2', width: 100, height: 100 },
          { name: 'gems/level' + level + '/CollectableC3', width: 100, height: 100 },
          { name: 'gems/level' + level + '/CollectableC4', width: 100, height: 100 },
          { name: 'gems/level' + level + '/CollectableC5', width: 100, height: 100 },
          { name: 'gems/level' + level + '/CollectableC6', width: 100, height: 100 },
          { name: 'gems/level' + level + '/CollectableC7', width: 100, height: 100 },
          { name: 'gems/level' + level + '/CollectableC8', width: 100, height: 100 },
        ].map((spr) => this.loadSprite(spr.name, spr.width, spr.height))
      ).then((values) => {
        this.gemSprites = Object.assign({}, ...values.map((s) => ({ [s.name.split('/')[2]]: s.image })));
        resolve();
      });
    });
  };

  public loadEnemySprites = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      Promise.all(
        [
          { name: 'enemy/pigldead1', width: 100, height: 100 },
          { name: 'enemy/pigrdead1', width: 100, height: 100 },
          { name: 'enemy/pigl1', width: 100, height: 100 },
          { name: 'enemy/pigl2', width: 100, height: 100 },
          { name: 'enemy/pigl3', width: 100, height: 100 },
          { name: 'enemy/pigl4', width: 100, height: 100 },
          { name: 'enemy/pigr1', width: 100, height: 100 },
          { name: 'enemy/pigr2', width: 100, height: 100 },
          { name: 'enemy/pigr3', width: 100, height: 100 },
          { name: 'enemy/pigr4', width: 100, height: 100 },

          { name: 'enemy/owlldead1', width: 100, height: 100 },
          { name: 'enemy/owlrdead1', width: 100, height: 100 },
          { name: 'enemy/owll1', width: 100, height: 100 },
          { name: 'enemy/owll2', width: 100, height: 100 },
          { name: 'enemy/owll3', width: 100, height: 100 },
          { name: 'enemy/owll4', width: 100, height: 100 },
          { name: 'enemy/owlr1', width: 100, height: 100 },
          { name: 'enemy/owlr2', width: 100, height: 100 },
          { name: 'enemy/owlr3', width: 100, height: 100 },
          { name: 'enemy/owlr4', width: 100, height: 100 },

          { name: 'enemy/bearldead1', width: 100, height: 100 },
          { name: 'enemy/bearrdead1', width: 100, height: 100 },
          { name: 'enemy/bearl1', width: 100, height: 100 },
          { name: 'enemy/bearl2', width: 100, height: 100 },
          { name: 'enemy/bearl3', width: 100, height: 100 },
          { name: 'enemy/bearl4', width: 100, height: 100 },
          { name: 'enemy/bearl5', width: 100, height: 100 },
          { name: 'enemy/bearl6', width: 100, height: 100 },
          { name: 'enemy/bearr1', width: 100, height: 100 },
          { name: 'enemy/bearr2', width: 100, height: 100 },
          { name: 'enemy/bearr3', width: 100, height: 100 },
          { name: 'enemy/bearr4', width: 100, height: 100 },
          { name: 'enemy/bearr5', width: 100, height: 100 },
          { name: 'enemy/bearr6', width: 100, height: 100 },

          { name: 'enemy/wolfldead1', width: 100, height: 100 },
          { name: 'enemy/wolfrdead1', width: 100, height: 100 },
          { name: 'enemy/wolfl1', width: 100, height: 100 },
          { name: 'enemy/wolfl2', width: 100, height: 100 },
          { name: 'enemy/wolfl3', width: 100, height: 100 },
          { name: 'enemy/wolfl4', width: 100, height: 100 },
          { name: 'enemy/wolfl5', width: 100, height: 100 },
          { name: 'enemy/wolfr1', width: 100, height: 100 },
          { name: 'enemy/wolfr2', width: 100, height: 100 },
          { name: 'enemy/wolfr3', width: 100, height: 100 },
          { name: 'enemy/wolfr4', width: 100, height: 100 },
          { name: 'enemy/wolfr5', width: 100, height: 100 },
        ].map((spr) => this.loadSprite(spr.name, spr.width, spr.height))
      ).then((values) => {
        this.enemySprites = Object.assign({}, ...values.map((s) => ({ [s.name.split('/')[1]]: s.image })));
        resolve();
      });
    });
  };

  public loadUISprites = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      Promise.all(
        [
          { name: 'UI/HPBar', width: 100, height: 100 },
          { name: 'UI/WalkGuide1', width: 200, height: 150 },
          { name: 'UI/WalkGuide2', width: 200, height: 150 },
          { name: 'UI/JumpGuide1', width: 200, height: 150 },
          { name: 'UI/JumpGuide2', width: 200, height: 150 },
          { name: 'UI/GapGuide1', width: 200, height: 150 },
          { name: 'UI/GapGuide2', width: 200, height: 150 },
          { name: 'UI/EnemyGuide1', width: 200, height: 150 },
          { name: 'UI/EnemyGuide2', width: 200, height: 150 },
          { name: 'UI/JumpKillGuide1', width: 200, height: 150 },
          { name: 'UI/JumpKillGuide2', width: 200, height: 150 },
          { name: 'UI/JumpKillGuide3', width: 200, height: 150 },
          { name: 'UI/PunchGuide1', width: 200, height: 150 },
          { name: 'UI/PunchGuide2', width: 200, height: 150 },
          { name: 'UI/Darkness', width: 600, height: 400 },
        ].map((spr) => this.loadSprite(spr.name, spr.width, spr.height))
      ).then((values) => {
        this.uiSprites = Object.assign({}, ...values.map((s) => ({ [s.name.split('/')[1]]: s.image })));
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
