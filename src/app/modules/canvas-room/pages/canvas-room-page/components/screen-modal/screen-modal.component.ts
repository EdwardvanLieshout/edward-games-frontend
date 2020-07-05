import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MapService } from '../../../../../../core/services/map.service';
import { PassageTypeEnum } from '../../../../../../shared/models/enums/passageType.enum';
import { IScreen } from '../../../../../../shared/models/interfaces/screen.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen-modal',
  templateUrl: './screen-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScreenModalComponent implements OnInit {
  private eventsSubscription: Subscription;

  public events: Observable<PassageTypeEnum>;
  public passage: PassageTypeEnum = PassageTypeEnum.NONE;
  public passageTypeEnum = PassageTypeEnum;

  public infoDictionary = {
    None: {
      title: '',
      content: '',
    },
    'About the author': {
      title: 'About the author',
      content: 'Click proceed to find out more about Edward van Lieshout.',
    },
    'Work experience': {
      title: 'Work experience',
      content: "Click proceed to read about Edward's work experience.",
    },
    Media: {
      title: 'Media',
      content: 'Click proceed to go to the media page.',
    },
    'Contact the author': {
      title: 'Contact the author',
      content:
        'Would you like to contact Edward van Lieshout? Click proceed and fill in the form.',
    },
  };

  public info: IScreen = this.infoDictionary['None'];

  constructor(
    public mapService: MapService,
    public ref: ChangeDetectorRef,
    public router: Router
  ) {}

  public ngOnInit(): void {
    this.events = this.mapService.getPassageEvents();
    this.eventsSubscription = this.events.subscribe((p) =>
      this.updatePassage(p)
    );
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
    this.router.navigate(['author/about']);
  };
}
