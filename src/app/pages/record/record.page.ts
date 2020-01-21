import { Component, OnInit } from '@angular/core';
import { State } from '../../models/state.enum';
import { AttackOutcome } from '../../models/attack-outcome.enum';

@Component({
  selector: 'app-record',
  templateUrl: './record.page.html',
  styleUrls: ['./record.page.scss'],
})
export class RecordPage implements OnInit {

  private currentState: State;
  private rotation: number;
  private playerName: string;
  private passRating: number;
  private attackOutcome: AttackOutcome;

  constructor(
    // TODO: Inject PassService
  ) {
    this.currentState = State.ROTATION;
    this.rotation = 1;
    this.playerName = "";
    this.passRating = 0;
    this.attackOutcome = AttackOutcome.ATTEMPT;
  }

  ngOnInit() {

  }
  
  private changeState() {
    switch (this.currentState) {
      case State.ROTATION:
        this.currentState = State.RECEIVE_PLAYER;
        break;
      case State.RECEIVE_PLAYER:
        this.currentState = State.RECEIVE_RATING;
        break;
      case State.RECEIVE_RATING:
        this.currentState = State.ATTACK;
        break;
      case State.ATTACK:
        this.currentState = State.ROTATION;
        // todo: what to do after attack
        break;
      default:
        break;
    }
  }

  private selectRotation(rotation) {
    this.rotation = rotation;
  }

  private selectPlayer(player) {
    this.playerName = player;
  }

  private selectPassRating(rating) {
    this.passRating = rating;
  }

  private selectAttackOutcome(outcome) {
    this.attackOutcome = outcome;
    this.submitPlay();
  }

  private submitPlay() {
    // TODO: Save "play" to datastore
  }

}
