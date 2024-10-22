import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup } from '@angular/forms';
import { IpaService } from '../../../../core/services/ipa.service';

@Component({
  selector: 'app-catgpt-page',
  templateUrl: './catgpt-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatgptPageComponent implements OnInit {
  public form: UntypedFormGroup;

  constructor(private fb: FormBuilder, private ipaService: IpaService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      text: '',
    });
  }

  submitForm(): void {
    const str = this.form.controls.text.value.split(' ').map((word) => word.replace(/[^a-zA-Z0-9' -]/g, ''));
    console.log(str);
    console.log(str.map(this.ipaService.translateWord).join(' '));
  }
}
