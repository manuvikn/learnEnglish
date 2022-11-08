import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AddWordComponent } from "./components/add-word/add-word.component";
import { MyWordsMainComponent } from "./components/my-words-main/my-words-main.component";
import { PracticeVocabularyComponent } from "./components/practice-vocabulary/practice-vocabulary.component";

const ROUTES: Routes = [
    {
        path: '',
        component: MyWordsMainComponent
    },
    {
        path: 'add',
        component: AddWordComponent
    }, 
    {
        path: 'practice-vocabulary',
        component: PracticeVocabularyComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ],
    exports: [RouterModule]
})
export class MyWordsRoutingModule {}