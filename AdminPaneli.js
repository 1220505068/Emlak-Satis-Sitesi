const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});


// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})

function openNot(){
	document.getElementById("not").style.display = "block";
	}

function closeNot() {
  document.getElementById("not").style.display = "none";
}

function mesaj() {
    var mulkTur = document.querySelector('.Mülk select').value;
    var ilanAdi = document.getElementById('isim').value;
    var ilanAdresi = document.getElementById('adres').value;
    var ilanMetrekare = document.getElementById('alan').value;
    var detaylar = document.getElementById('id').value;

    if (mulkTur == "0" || ilanAdi === "" || ilanAdresi === "" || ilanMetrekare === "" || detaylar === "") {
      alert("Lütfen tüm alanları eksiksiz doldurun.");
    } else {
      alert("Mülk Başarıyla Eklenmiştir!");
    }
  }




const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('siyah');
	} else {
		document.body.classList.remove('siyah');
	}
})

