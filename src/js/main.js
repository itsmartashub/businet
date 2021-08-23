window.onload = function () {
	// resize header and show scroll to top btn
	window.addEventListener("scroll", resizeHeaderShowBtn)
}

// ========================= HEADER RESIZE AND SHOW/HIDE SCROLL TO TOP BTN
const resizeHeaderShowBtn = (e) => {
	if (
		document.body.scrollTop > 50 ||
		document.documentElement.scrollTop > 50
	) {
		document.querySelector("#menu").classList.add("small")
		document
			.querySelector(".scrollToTop")
			.classList.add("scrollToTop--shown")
	} else {
		document.querySelector("#menu").classList.remove("small")
		document
			.querySelector(".scrollToTop")
			.classList.remove("scrollToTop--shown")
	}

	e.preventDefault()
}
