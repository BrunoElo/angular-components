import { Directive, ElementRef, HostListener } from '@angular/core';
import { CapitalizePipe } from '../pipes/capitalize.pipe';

@Directive({
  selector: '[appTextColorCapitalize]',
  standalone: true,
})
export class TextColorCapitalizeDirective {
  textReference = '';
  vowelLetters = ['a', 'e', 'i', 'o', 'u'];

  constructor(private text: ElementRef, private capitalize: CapitalizePipe) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.textReference = this.text.nativeElement.innerHTML;
    this.text.nativeElement.innerHTML = this.handleCapitilization();
    let firstSixLetters = this.replaceChars();
    let hexCode = this.appendZeros(firstSixLetters);
    this.changeTextColor(`#${hexCode}`);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.text.nativeElement.innerHTML = this.textReference;
    this.changeTextColor('');
  }

  handleCapitilization() {
    let isFirstLetterVowel = this.vowelLetters.includes(this.textReference[0]);
    let textLength = this.textReference.length;
    let middleLetterIndex = Math.ceil(textLength / 2) - 1;
    let textCharacters = this.textReference.split('');

    textCharacters = textCharacters.map((character, index) => {
      if ([0, middleLetterIndex, textLength - 1].includes(index)) {
        return isFirstLetterVowel
          ? this.capitalize.transform(character)
          : character;
      } else {
        return isFirstLetterVowel
          ? character
          : this.capitalize.transform(character);
      }
    });
    return textCharacters.join('');
  }

  replaceChars() {
    let firstSixTextChars = this.textReference.slice(0, 6).split('');
    firstSixTextChars = firstSixTextChars.map((char) =>
      char > 'f' ? 'f' : char
    );
    return firstSixTextChars.join('');
  }

  appendZeros(letters: string) {
    let remainingChars = 6 - letters.length;
    if (remainingChars < 6) {
      for (let i = 0; i < remainingChars; i++) {
        letters += '0';
      }
    }
    return letters;
  }

  changeTextColor(color: string) {
    this.text.nativeElement.style.color = color;
  }
}
