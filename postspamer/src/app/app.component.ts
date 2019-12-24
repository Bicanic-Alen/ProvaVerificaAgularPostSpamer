import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles = new Array<string>() ;

  spam(txt: HTMLInputElement, times: HTMLInputElement): boolean {
    console.log(`Adding article title: ${txt.value} and link: ${times.value}`);
    let cont = Number (times.value)

    for(let i:number =0; i< cont; i++)
    {
      this.articles.push( i + " "+txt.value);
    }

    return false;
  }

}
