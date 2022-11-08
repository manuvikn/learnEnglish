import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WordList } from 'src/app/models/word-list';
import { WordItem } from 'src/app/models/word-item';

@Injectable({
    providedIn: 'root'
})
export class MyWordsMainService {

    private wordList: WordList;

    constructor(private httpClient: HttpClient) {}

    getWordListJSON(): Observable<WordList> {

        return this.httpClient.get<WordList>('http://localhost:3000/my-words');

    }

    getWordList(): WordList {

        return this.wordList;

    }

    setWordList( wordList: WordList ): void {

        this.wordList = wordList;

    }

    postWordJSON(newWord: WordItem): Observable<any> {

        return this.httpClient.post<any>('http://localhost:3000/my-words', newWord);

    }

}