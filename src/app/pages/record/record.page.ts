import { Component, OnInit } from '@angular/core';
import { State } from '../../models/state.enum';
import { AttackOutcome } from '../../models/attack-outcome.enum';
import { Match } from '../../models/match.interface';
import { Player } from '../../models/player.interface';

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
  private players: Player[];
  // private libero: string;
  // private middles: string[];
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

    this.match = { id: "0", matchNumber: 0, opponent: "Test U" } as Match;
    this.players = [
                    {name: "Danny", jerseyNumber: 1},
                    {name: "Ben", jerseyNumber: 20},
                    {name: "Jake C", jerseyNumber: 12},
                    {name: "Austin", jerseyNumber: 3},
                    {name: "Spencer", jerseyNumber: 18},
                    {name: "Jake S", jerseyNumber: 17},
                    {name: "Kalvin", jerseyNumber: 8}
                  ];
    // TODO: Figure out how to do this with libero switching and stuff
    // Maybe this below?
    // this.libero = "Danny";
    // this.middles = ["Spencer", "Sirny"];
    // Might just use a list right now and make it dumb
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
    // TODO: Fix player list because it looks stupid with the text all centered
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

  private substitutePlayer(player){
    // TODO: Substitute the player
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
