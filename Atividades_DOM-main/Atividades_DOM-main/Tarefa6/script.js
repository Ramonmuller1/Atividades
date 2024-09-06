document.getElementById('changeClassesButton').addEventListener('click', function() {
    var boxes = document.querySelectorAll('.color-box');
    boxes[0].classList.toggle('box1');
    boxes[0].classList.toggle('box2');
    boxes[1].classList.toggle('box1');
    boxes[1].classList.toggle('box3');
    boxes[2].classList.toggle('box2');
    boxes[2].classList.toggle('box3');
});