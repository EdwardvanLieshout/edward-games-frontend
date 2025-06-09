import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup } from '@angular/forms';
import { IpaService } from '../../../../core/services/ipa.service';
import { PreparserService } from '../../../../core/services/preparser.service';

@Component({
  selector: 'app-catgpt-page',
  templateUrl: './catgpt-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatgptPageComponent implements OnInit {
  public form: UntypedFormGroup;

  constructor(private fb: FormBuilder, private ipaService: IpaService, private preparserService: PreparserService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      text: '',
    });
  }

  submitForm(): void {
    let str = this.form.controls.text.value;
    str = this.preparserService.convertSpecialChars(str);
    str = this.preparserService.convertAccentVowels(str);
    str = str.split(' ').map((word) => {
      return word.replace(/[^a-zA-Z0-9' -]/g, '');
    });
    console.log(str);
    console.log(str.map(this.ipaService.translateWord).join(' '));
  }
}
