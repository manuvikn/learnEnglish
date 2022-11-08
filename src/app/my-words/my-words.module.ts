import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AddWordComponent } from "./components/add-word/add-word.component";
import { MyWordsMainComponent } from "./components/my-words-main/my-words-main.component";
import { PracticeVocabularyComponent } from "./components/practice-vocabulary/practice-vocabulary.component";
import { MyWordsRoutingModule } from "./my-words-routing.module";

@NgModule({
    imports: [
        CommonModule,
        MyWordsRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [],
    declarations: [
        MyWordsMainComponent,
        AddWordComponent,
        PracticeVocabularyComponent
    ],
    providers: []
})
export class MyWordsModule {}