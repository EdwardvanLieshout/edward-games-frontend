import { Component, Input, OnInit } from '@angular/core';
import { SelectedEntityService } from '../../../../../../core/services/adventure-builder/selected-entity.service';
import { ILevel } from '../../../../../../shared/models/interfaces/level.interface';

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
})
export class EntityListComponent implements OnInit {
  @Input()
  public level: ILevel;

  public showPlayer = false;
  public showEnemies = false;
  public showGround = false;

  constructor(public selectedEntityService: SelectedEntityService) {}

  ngOnInit(): void {}

  public setSelected = (id: string): void => {
    if (this.selectedEntityService.selectedId === id) {
      this.selectedEntityService.selectedId = '';
      return;
    }
    this.selectedEntityService.selectedId = id;
  };

  public toggleShowPlayer = (): void => {
    this.showPlayer = !this.showPlayer;
  };

  public toggleShowEnemies = (): void => {
    this.showEnemies = !this.showEnemies;
  };

  public toggleShowGround = (): void => {
    this.showGround = !this.showGround;
  };
}
