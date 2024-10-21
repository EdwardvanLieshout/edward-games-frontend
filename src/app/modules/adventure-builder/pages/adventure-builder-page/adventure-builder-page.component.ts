import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Optional,
  Self,
  ViewChild,
} from '@angular/core';
import { BuilderCameraService } from '../../../../core/services/adventure-builder/builder-camera.service';
import { BuilderLevelService } from '../../../../core/services/adventure-builder/builder-level.service';
import { SpritesService } from '../../../../core/services/adventure/sprites.service';
import { OnDestroyService } from '../../../../core/services/on-destroy.service';
import { ILevel } from '../../../../shared/models/interfaces/level.interface';

@Component({
  selector: 'app-adventure-builder-page',
  templateUrl: './adventure-builder-page.component.html',
})
export class AdventureBuilderPageComponent implements OnInit {
  public level: ILevel;

  constructor(private levelService: BuilderLevelService) {}

  ngOnInit(): void {
    this.level = this.levelService.getLevel();
  }
}
