import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatToolbarModule, MatInputModule, MatCardModule} from "@angular/material";

@NgModule({
    imports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule],
    exports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule],
})
export class CustomMaterialModule { }