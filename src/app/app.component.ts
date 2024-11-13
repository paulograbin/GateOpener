import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CondyService} from "./services/condy.service";
import {Acionamento} from "./models/acionamento";
import {NameService} from "./services/name.service";
import {PingService} from "./services/ping.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  backendOnline = false;


  title = 'gate';
  nome = "";

  acionamentos: Acionamento[] = []

  constructor(
              private pingService: PingService,
              private condyService: CondyService,
              private nameService: NameService) {

    this.pingService.callHome().subscribe(
      data => {
        console.log('data', data)
        this.backendOnline = true
      }
    )

    this.condyService.fetchAcionamentos().subscribe(
      data => {
        this.acionamentos = data;
        console.log(this.acionamentos);
      }
    )

    this.nameService.callHome().subscribe(data => {
        console.log('home ', JSON.stringify(data));
        this.nome = data.name;
      }
    );
  }

  trigger(id: number) {
    this.condyService.triggerAcionamento(id).subscribe(data => {
      console.log(data);
    });
  }
}
