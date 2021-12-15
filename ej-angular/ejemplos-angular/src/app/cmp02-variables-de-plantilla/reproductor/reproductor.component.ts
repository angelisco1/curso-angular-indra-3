import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {

  @ViewChild('video') videoElem!: ElementRef;
  currentVolume: number = 0
  currentTime: number = 0
  duration: number = 0

  constructor() {}

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // console.log(this.videoElem)
    this.videoElem.nativeElement.volume = this.currentVolume / 100
    this.videoElem.nativeElement.play()
    // console.log(this.videoElem.nativeElement.duration)
  }

  setDuration() {
    console.log(this.videoElem.nativeElement.duration)
    this.duration = this.videoElem.nativeElement.duration
    // console.log(this.duration)
  }

  // getDuration(video: HTMLVideoElement): number {
  //   return video.duration || 0
  //   // return this.videoElem?.nativeElement.duration || 0
  // }

  actualizarProgreso(event: any): void {
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
