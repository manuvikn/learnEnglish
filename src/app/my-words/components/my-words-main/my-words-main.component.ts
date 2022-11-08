import { Component, OnInit } from '@angular/core';
import { WordList } from 'src/app/models/word-list';
import { MyWordsMainService } from '../../services/my-words-main.service';

@Component({
    selector: 'my-words-main',
    templateUrl: './my-words-main.component.html',
    styleUrls: ['./my-words-main.component.scss']
})
export class MyWordsMainComponent implements OnInit {

    wordList: WordList;

    constructor(private myWordsMainService: MyWordsMainService) {}

    ngOnInit(): void {
        
        this.getWordList();

    }

    getWordList(): void {

        this.myWordsMainService.getWordListJSON()
            .subscribe((wordList: WordList) => {

                this.wordList = wordList
                this.myWordsMainService.setWordList(this.wordList);
                console.log(this.wordList);

            });

    }

}