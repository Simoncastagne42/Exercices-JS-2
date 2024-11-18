const test = document.querySelector("#image1");

test.addEventListener("mouseenter", handleMouseEnterOnDiv);

function handleMouseEnterOnDiv() {
  test.src = "./images/image1_2.jpg";
}

test.addEventListener("mouseleave", handleMouseLeaveOnDiv);

function handleMouseLeaveOnDiv() {
  test.src = "./images/image1.jpg";
}

