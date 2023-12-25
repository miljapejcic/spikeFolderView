import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FolderViewComponent } from '../folder-view/folder-view.component';
import { MatModule } from '../shared/modules/mat.module';

@NgModule({
  imports: [CommonModule, MatModule],
  declarations: [FolderViewComponent],
  exports: [FolderViewComponent],
})
export class FolderViewModule {}
