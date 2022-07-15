const area = document.querySelector(".area");
const empty = document.querySelectorAll(".empty");
const drag = document.querySelector(".drag");

drag.addEventListener("touchmove", dragMove);
drag.addEventListener('touchend', dragDrop);
let itemAppend;

function dragMove(event) {
  event.preventDefault();
  let touch = event.targetTouches[0];

  drag.style.left = `${touch.pageX - area.offsetLeft - drag.offsetWidth / 2}px`;
  drag.style.top = `${touch.pageY - area.offsetTop - drag.offsetHeight / 2}px`;

  empty.forEach((item) => {
    if (
      drag.getBoundingClientRect().right - (drag.offsetWidth / 2) > item.getBoundingClientRect().left &&
      drag.getBoundingClientRect().left + (drag.offsetWidth / 2) < item.getBoundingClientRect().right &&
      drag.getBoundingClientRect().top + (drag.offsetHeight / 2) < item.getBoundingClientRect().bottom &&
      drag.getBoundingClientRect().bottom - (drag.offsetHeight / 2) > item.getBoundingClientRect().top
    ) {
      item.classList.add("active");
      itemAppend = item;
    } else {
      item.classList.remove('active');
    }
  });
}

function dragDrop () {
  //Проверка на наличие класса
  if(itemAppend.classList.contains('active')) {
    itemAppend.append(this);
    this.style.top = `${itemAppend.offsetTop}px`;
    this.style.left = `${itemAppend.offsetLeft}px`;
  } else {
    this.style.top = `${itemAppend.offsetTop}px`;
    this.style.left = `${itemAppend.offsetLeft}px`;
  }
  
}


