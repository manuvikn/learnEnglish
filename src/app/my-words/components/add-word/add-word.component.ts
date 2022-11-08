import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { WordItem } from 'src/app/models/word-item';
import { MyWordsMainService } from '../../services/my-words-main.service';

@Component({
    selector: 'add-word',
    templateUrl: './add-word.component.html',
    styleUrls: ['./add-word.component.scss']
})
export class AddWordComponent implements OnInit {

    addWordForm: FormGroup;

    constructor(private fb: FormBuilder,
                private myWordsMainService: MyWordsMainService,
                private router: Router) {}

    ngOnInit(): void {
        
        this.addWordForm = this.fb.group({
            'word': this.fb.control('', [Validators.required]),
            'spanish-meaning': this.fb.control('', [Validators.required]),
            'stay-here': this.fb.control(false)
        });
    
    }

    addNewWord(): void {

        const newWord: WordItem = this.addWordForm.value;
        this.myWordsMainService.postWordJSON( newWord )
            .subscribe((_newWord: WordItem) => {

                const {'stay-here': stayHere} = this.addWordForm.value;
                if (!stayHere) {
                    this.router.navigate(['']);
                } else {
                    this.addWordForm.reset({
                        'word': '',
                        'spanish-meaning': '',
                        'stay-here': true
                    });
                }
                
            });

    }

}