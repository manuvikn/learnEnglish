import { Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

const ROUTES: Routes = [
    {
        path: 'my-words',
        loadChildren: () => import('./my-words/my-words.module').then(m => m.MyWordsModule)
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'my-words'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {}