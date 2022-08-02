export default class Collapse {
  constructor(container) {
    this.container = container;
    this.opened = false;
  }

  init() {
    const btn = this.container.querySelector('.collapse_container__button');
    btn.addEventListener('click', () => this.onCollapse());
  }

  onCollapse() {
    const block = this.container.querySelector('.collapse_container__block');
    if (!this.opened) {
      block.style.height = `${block.scrollHeight}px`;
    } else {
      block.style.height = 0;
    }
    this.opened = !this.opened;
  }
}
