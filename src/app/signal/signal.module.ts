import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalComponent } from './signal.component';

const routes: Routes = [
    {
        path: '',
        component: SignalComponent
    }
];

@NgModule({
    declarations: [
        SignalComponent
    ],
    imports: [
        RouterModule.forChild(routes)
    ],
    providers: [],
    bootstrap: []
  })
  export class SignalModule { }
