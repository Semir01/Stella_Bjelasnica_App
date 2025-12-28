import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-rezervation-modal',
  standalone: true,
  imports: [],
  templateUrl: './rezervation-modal.html',
  styleUrl: './rezervation-modal.scss',
})

export class RezervationModal {
  @Output() close = new EventEmitter<void>();

  closeModal(){
    this.close.emit();
  }
}
