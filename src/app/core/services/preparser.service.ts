import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PreparserService {
  constructor() {}

  public convertSpecialChars(text: string): string {
    text = text.replace(/@/g, ' at sign ');
    text = text.replace(/#/g, ' hashtag ');
    text = text.replace(/\$/g, ' dollar ');
    text = text.replace(/%/g, ' percent ');
    text = text.replace(/€/g, ' euro ');
    text = text.replace(/&/g, ' and ');
    text = text.replace(/_/g, ' underscore ');
    text = text.replace(/\+/g, ' plus ');
    text = text.replace(/=/g, ' equals ');
    text = text.replace(/\//g, ' slash ');
    text = text.replace(/\|/g, ' vertical line ');
    text = text.replace(/\\/g, ' backslash ');
    text = text.replace(/(\d+)-(\d+)/g, '$1 to $2');
    text = text.replace(/( |\)|\(|\;|\.|\,)([a-zA-Z])-([a-zA-Z])( |\)|\(|\;|\.|\,)/g, '$1$2 to $3$4');
    text = text.replace(/([a-zA-Z0-9])\.([a-zA-Z0-9])/g, '$1 dot $2');
    text = text.replace(/°C( |\)|\(|\;|\.|\,)/g, ' degrees celsius ');
    text = text.replace(/°F( |\)|\(|\;|\.|\,)/g, ' degrees fahrenheit ');
    text = text.replace(/°/g, ' degrees ');
    text = text.replace(/¢/g, ' cent ');
    text = text.replace(/£/g, ' pound ');
    text = text.replace(/¥/g, ' yen ');
    text = text.replace(/§/g, ' section ');
    text = text.replace(/©/g, ' copyright ');
    text = text.replace(/®/g, ' registered trademark ');
    text = text.replace(/±/g, ' plus minus ');
    text = text.replace(/¼/g, ' one quatre ');
    text = text.replace(/½/g, ' one half ');
    text = text.replace(/¾/g, ' three quatre ');
    text = text.replace(/÷/g, ' divided by ');
    text = text.replace(/,/g, ' ');
    return text;
  }

  public convertAccentVowels(text: string): string {
    text = text.replace(/(é|è|ê|ë|É|È|Ê|Ë)/g, 'e');
    text = text.replace(/(á|à|â|ä|Á|À|Â|Ä)/g, 'a');
    text = text.replace(/(ú|ù|û|ü|Ú|Ù|Û|Ü)/g, 'u');
    text = text.replace(/(í|ì|î|ï|Í|Ì|Î|Ï)/g, 'i');
    text = text.replace(/(ó|ò|ô|ö|Ó|Ò|Ô|Ö)/g, 'o');
    text = text.replace(/(ý|ÿ)/g, 'y');
    return text;
  }
}
