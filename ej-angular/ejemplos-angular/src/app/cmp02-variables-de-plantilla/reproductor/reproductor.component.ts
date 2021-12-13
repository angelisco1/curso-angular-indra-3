import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {

  @ViewChild('video') videoElem!: ElementRef;
  currentVolume: number = 0
  currentTime: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    console.log(this.videoElem)
    this.videoElem.nativeElement.volume = this.currentVolume / 100
    this.videoElem.nativeElement.play()
    setTimeout(() => {
      console.dir(this.videoElem.nativeElement)
      // console.dir(this.videoElem.nativeElement.duration)
    }, 1000)
  }

  getDuration(video: HTMLVideoElement): number {
    return video.duration
  }

  actualizarProgreso(event: any): void {
    console.log(event)
    this.currentTime = event.target.currentTime
  }

  play(video: HTMLVideoElement): void {
    video.play()
  }

  pause(video: HTMLVideoElement): void {
    video.pause()
  }

  cambiarVolumen(video: HTMLVideoElement, event: any): void {
    const volumenInput = Number(event.target.value)
    console.log(typeof(volumenInput))
    this.currentVolume = volumenInput
    video.volume = volumenInput / 100
  }

  fullScreen(video: HTMLVideoElement) {
    video.requestFullscreen()
  }

  replay(video: HTMLVideoElement): void {
    video.currentTime = 0
  }

  subirVolumen() {
    if (this.currentVolume + 10 <= 100) {
      this.videoElem.nativeElement.volume += 0.1
      this.currentVolume += 10
    } else {
      this.videoElem.nativeElement.volume = 1
      this.currentVolume = 100
    }
  }

  bajarVolumen() {
    if (this.currentVolume - 10 >= 0) {
      this.videoElem.nativeElement.volume -= 0.1
      this.currentVolume -= 10
    } else {
      this.videoElem.nativeElement.volume = 0
      this.currentVolume = 0
    }
  }
}
