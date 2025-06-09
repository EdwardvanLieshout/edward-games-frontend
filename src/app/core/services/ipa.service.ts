import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToWords } from 'to-words';

@Injectable({
  providedIn: 'root',
})
export class IpaService {
  private ipaDict = {};
  private ipaBackup = {};
  private toWords: ToWords;

  constructor(private http: HttpClient) {
    this.toWords = new ToWords({
      localeCode: 'en-GB',
      converterOptions: {
        currency: false,
        ignoreDecimal: false,
        ignoreZeroCurrency: false,
        doNotAddOnly: false,
      },
    });
    this.http.get('../../../../../assets/data/ipa.txt', { responseType: 'text' }).subscribe((res) => {
      const dictArr = res.split(/\r?\n/).forEach((row) => {
        const rowSplit = row.split('/');
        this.ipaDict[rowSplit[0].replace('/t', '').trim()] = rowSplit[1];
      });
    });
    this.http.get('../../../../../assets/data/ipa2.txt', { responseType: 'text' }).subscribe((res) => {
      const dictArr = res.split(/\r?\n/).forEach((row) => {
        const rowSplit = row.split('/');
        this.ipaBackup[rowSplit[0].replace('/t', '').trim()] = rowSplit[1];
      });
    });
  }

  public translateWord = (word: string): string => {
    if (word.match(/\d+/)?.length > 0) {
      word = word.replace(/(\d+)/g, ' $1 ');
      word = word
        .split(' ')
        .map((val) => {
          if (val.match(/\d+/)?.length > 0) {
            return this.translateNumberToWords(val);
          } else {
            return val;
          }
        })
        .join(' ');
    }
    const wordsToTranslate = word.split(/\s+/);
    const result = wordsToTranslate
      .filter((w) => w !== '')
      .map((w) => {
        let res = this.ipaDict[w.toLowerCase()];
        if (!res) {
          res = this.ipaBackup[w.toLowerCase()];
        }
        if (!res) {
          return 'UNKNOWN';
        }
        return res;
      })
      .join(' ');
    return result.trim();
  };

  translateNumberToWords(num: string): string {
    return this.toWords.convert(+num);
  }
}
