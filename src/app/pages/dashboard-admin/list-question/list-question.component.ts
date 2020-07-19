import {Component, EventEmitter, Input, OnInit, Output, ViewChild, ElementRef} from '@angular/core';
import {Question} from '../../../models/question';
import {Reponse} from '../../../models/reponse';
import {StgService} from '../../../appl/stg.service';
import {Categorie} from '../../../models/categorie';

@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.css']
})
export class ListQuestionComponent implements OnInit {
  questions: Question[] = new Array(0);

  constructor(private stgService: StgService) { }

  @Input() listeDeQuestion: Question[] = new Array(0);
  @Input() categorieChoisi2: Categorie;
  @Output('getQuestiondeCategorie') getQuestiondeCategorie: EventEmitter<any> = new EventEmitter();
  @ViewChild('closeModRepModal') closeModRepModal: ElementRef;
  @ViewChild('closeDelRepModal') closeDelRepModal: ElementRef;
  @ViewChild('closeModQuestModal') closeModQuestModal: ElementRef;
  @ViewChild('closeSupQuestModal') closeSupQuestModal: ElementRef;

  updateReponse: Reponse = null;
  questionModel: Question;

  ngOnInit(): void {
  }

  getQuestionParCategorie(){
    return false;
  }

  modReponse() {
    this.updateReponse.question_associee = this.questionModel;
    this.stgService.modifReponse2(this.updateReponse).subscribe(
      res => {
        this.getQuestiondeCategorie.emit();
        this.closeModRepModal.nativeElement.click();
      },
      err => {
        alert('error saving reponse');
      }
    );
  }

  supprimerReponse(repo: Reponse) {
    this.stgService.deleteReponse(repo.idReponse).subscribe(
      res => {
        this.getQuestiondeCategorie.emit();
        this.closeDelRepModal.nativeElement.click();
      },
      err => {
        alert('error deletx rep');
      }
    );
  }

  recup(repo: Reponse) {
    this.updateReponse = repo;
    console.log(this.updateReponse);
  }

  modQuestion() {
    console.log(this.questionModel);
    this.questionModel.categorie = this.categorieChoisi2;
    this.stgService.modifQuestion(this.questionModel).subscribe(
      res => {
        this.getQuestiondeCategorie.emit();
        this.closeModQuestModal.nativeElement.click();
      },
      err => {
        alert('error saving questions');
      }
    );
  }

  recupQuestion(question: Question) {
    this.questionModel = question;
  }

  supprimerQuestion(question: Question) {
    this.stgService.deleteQuestion(question.idQuestion).subscribe(
      res => {
        this.closeSupQuestModal.nativeElement.click();
        this.getQuestiondeCategorie.emit();

      },
      err => {
        alert('error deletx');
      }
    );
  }
  /*
  * import { ViewChild, ElementRef} from '@angular/core';
      @ViewChild('closeAddExpenseModal') closeAddExpenseModal: ElementRef;
      this.closeAddExpenseModal.nativeElement.click();*/
}
