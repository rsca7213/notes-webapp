import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavbarComponent } from './components/navbar/navbar.component'
import { ErrorModalComponent } from './components/error-modal/error-modal.component'

@NgModule({
  declarations: [NavbarComponent, ErrorModalComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, ErrorModalComponent]
})
export class SharedModule {}
