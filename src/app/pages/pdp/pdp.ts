import { Component, OnInit } from '@angular/core';
import { Footer } from "../../components/footer/footer/footer";
import { HeaderAlt } from "../../components/header/header-alt/header-alt";

@Component({
  selector: 'app-pdp',
  imports: [Footer, HeaderAlt],
  templateUrl: './pdp.html',
  styleUrl: './pdp.css',
  standalone: true,
})
export class Pdp implements OnInit {
  public appearsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show-ap');

        entry.target.classList.remove('hidden-ap');
      }

      else {
        entry.target.classList.add('hidden-ap');

        entry.target.classList.remove('show-ap');
      }
    });
  });

  public appearsElements!: NodeListOf<Element>;

  ngOnInit() {
    this.appearsElements = document.querySelectorAll('.hidden-ap');
    this.appearsElements.forEach((el) => {
      this.appearsObserver.observe(el);
    });
  }
}
