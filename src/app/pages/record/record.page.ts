import { Component, OnInit } from '@angular/core';
import { State } from '../../models/state.enum';
import { AttackOutcome } from '../../models/attack-outcome.enum';
import { Match } from '../../models/match.interface';

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
  private match: Match;
  State = State; // this allows the enum to be accessible from the template page

  constructor(
    // TODO: Inject PassService
  ) {
    // this.currentState = State.SELECT_MATCH;
    this.currentState = State.ROTATION; // TODO: Switch this to select match once matches are implemented
    this.rotation = 1;
    this.playerName = "";
    this.passRating = 0;
    this.attackOutcome = AttackOutcome.ATTEMPT;
  }

  ngOnInit() {

  }

  private changeState() {
    switch (this.currentState) {
      case State.SELECT_MATCH:
        this.currentState = State.ROTATION;
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
    console.log("Rotation selected: " + rotation);
    this.changeState();
  }

  private selectPlayer(player) {
    this.playerName = player;
    this.changeState();
  }

  private selectPassRating(rating) {
    this.passRating = rating;
    this.changeState();
  }

  private selectAttackOutcome(outcome) {
    this.attackOutcome = outcome;
    this.submitPlay();
    this.changeState();
  }

  private submitPlay() {
    // TODO: Save "play" to datastore
    // Or maybe write to a local db so that you can reduce DB calls
  }

  private finishMatch(){
    // TODO: Save Match somewhere, probably to datastore
    this.currentState = State.SELECT_MATCH;
  }

}
