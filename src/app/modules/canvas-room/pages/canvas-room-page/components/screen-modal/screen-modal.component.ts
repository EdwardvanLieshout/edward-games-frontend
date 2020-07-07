import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Self, Optional } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MapService } from '../../../../../../core/services/map.service';
import { PassageTypeEnum } from '../../../../../../shared/models/enums/passageType.enum';
import { IScreen } from '../../../../../../shared/models/interfaces/screen.interface';
import { Router } from '@angular/router';
import { OnDestroyService } from '../../../../../../core/services/on-destroy.service';

@Component({
  selector: 'app-screen-modal',
  templateUrl: './screen-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [OnDestroyService],
})
export class ScreenModalComponent implements OnInit {
  public events: Observable<PassageTypeEnum>;
  public passage: PassageTypeEnum = PassageTypeEnum.NONE;
  public passageTypeEnum = PassageTypeEnum;

  public infoDictionary = {
    None: {
      title: '',
      content: '',
      route: 'author/about',
    },
    'About the author': {
      title: 'About the author',
      content: 'Click proceed to find out more about Edward van Lieshout.',
      route: 'author/about',
    },
    'Work experience': {
      title: 'Work experience',
      // tslint:disable-next-line:quotemark
      content: "Click proceed to read about Edward's work experience.",
      route: 'author/experience',
    },
    Media: {
      title: 'Media',
      content: 'Click proceed to go to the media page.',
      route: 'author/media',
    },
    'Contact the author': {
      title: 'Contact the author',
      content: 'Would you like to contact Edward van Lieshout? Click proceed and fill in the form.',
      route: 'author/contact',
    },
  };

  public info: IScreen = this.infoDictionary['None'];

  constructor(
    public mapService: MapService,
    public ref: ChangeDetectorRef,
    public router: Router,
    @Self()
    @Optional()
    private onDestroyService: OnDestroyService
  ) {}

  public ngOnInit(): void {
    this.events = this.mapService.getPassageEvents();
    this.events.pipe(takeUntil(this.onDestroyService)).subscribe((p) => this.updatePassage(p));
  }

  public updatePassage = (passage: PassageTypeEnum): void => {
    this.passage = passage;
    this.info = this.infoDictionary[this.passage];
    this.ref.markForCheck();
  };

  public close = (): void => {
    this.passage = PassageTypeEnum.NONE;
  };

  public proceed = (): void => {
    this.router.navigate([this.info.route]);
  };
}
