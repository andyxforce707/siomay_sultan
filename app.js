// gallery
const gallery = [
  {
    id: 0,
    gambar: 'gallery/siomay1.jpg',
  },
  {
    id: 2,
    gambar: 'gallery/siomay2.jpg',
  },
  {
    id: 3,
    gambar: 'gallery/siomay3.jpg',
  },
  {
    id: 4,
    gambar: 'gallery/siomay4.jpg',
  },
  {
    id: 5,
    gambar: 'gallery/siomay5.jpg',
  },
  {
    id: 6,
    gambar: 'gallery/siomay6.jpg',
  },
  {
    id: 7,
    gambar: 'gallery/siomay7.jpg',
  },
  {
    id: 8,
    gambar: 'gallery/siomay8.jpg',
  },
  {
    id: 9,
    gambar: 'gallery/siomay9.jpg',
  },
  {
    id: 10,
    gambar: 'gallery/siomay10.jpg',
  },
  {
    id: 11,
    gambar: 'gallery/siomay11.jpg',
  },
  {
    id: 12,
    gambar: 'gallery/siomay12.jpg',
  },
  {
    id: 13,
    gambar: 'gallery/siomay13.jpg',
  },
  {
    id: 14,
    gambar: 'gallery/siomay14.jpg',
  },
  {
    id: 15,
    gambar: 'gallery/siomay15.jpg',
  },
  {
    id: 16,
    gambar: 'gallery/siomay16.jpg',
  },
  {
    id: 17,
    gambar: 'gallery/siomay17.jpg',
  },
  {
    id: 18,
    gambar: 'gallery/siomay18.jpg',
  },
  {
    id: 19,
    gambar: 'gallery/siomay19.jpg',
  },
  {
    id: 20,
    gambar: 'gallery/siomay20.jpg',
  },
  {
    id: 21,
    gambar: 'gallery/siomay21.jpg',
  },
  {
    id: 22,
    gambar: 'gallery/siomay22.jpg',
  },
  {
    id: 23,
    gambar: 'gallery/siomay23.jpg',
  },
  {
    id: 24,
    gambar: 'gallery/siomay24.jpg',
  },
  {
    id: 25,
    gambar: 'gallery/siomaygoreng1.jpg',
  },
  {
    id: 26,
    gambar: 'gallery/siomaygoreng2.jpg',
  },
  {
    id: 27,
    gambar: 'gallery/siomaygoreng3.jpg',
  },
];

// menu
const menu = [
  {
    id: 0,
    nama: 'Siomay Sultan Original',
    harga: 10000,
    gambar: 'gallery/siomay15.jpg',
    keterangan: 'Siomay Sultan Original, berisi Siomay, Tahu Merah, Tahu Putih, Pare, Kol dan Kentang yg di banjiri saus kacang yg khas sehingga menciptakan rasa Siomay yg super enak.',
  },
  {
    id: 1,
    nama: 'Siomay Goreng Sultan',
    harga: 13000,
    gambar: 'gallery/siomaygoreng1.jpg',
    keterangan: 'Siomay Goreng Sultan, berisi Siomay, Tahu Merah, Tahu Putih, Pare, Kol dan Kentang yg di Goreng, selanjutnya di banjiri saus kacang yg khas sehingga menciptakan rasa Siomay yg super enak.',
  },
  {
    id: 2,
    nama: 'Siomay Sultan Lengkap',
    harga: 13000,
    gambar: 'gallery/siomay14.jpg',
    keterangan: 'Siomay Goreng Sultan, berisi Siomay, Tahu Merah, Tahu Putih, Pare, Kol dan Kentang yg di Goreng + Telor, selanjutnya di banjiri saus kacang yg khas sehingga menciptakan rasa Siomay yg super enak.',
  },
  {
    id: 3,
    nama: 'Siomay Goreng Sultan Lengkap',
    harga: 16000,
    gambar: 'gallery/siomaygoreng1.jpg',
    keterangan: 'Siomay Goreng Sultan, berisi Siomay, Telor, Tahu Merah, Tahu Putih, Pare, Kol dan Kentang yg di Goreng, selanjutnya di banjiri saus kacang yg khas sehingga menciptakan rasa Siomay yg super enak.',
  },
];

// banner
const banner = [
  'bg/siomaybg1.jpg',
  'bg/siomaybg2.jpg',
  'bg/siomaybg3.jpg',
  'bg/siomaybg4.jpg',
  'bg/siomaybg5.jpg',
  'bg/siomaybg6.jpg',
  'bg/siomaybg7.jpg',
  'bg/siomaybg8.jpg',
  'bg/siomaybg9.jpg',
  'bg/siomaybg10.jpg',
  'bg/siomaybg11.jpg',
  'bg/siomaybg12.jpg',
];

// title menu dan title gallery
const titleMenu = document.getElementById('menu');
const titleGallery = document.getElementById('gallery');
titleMenu.style.display = 'none';

// nav
const navMenu = document.querySelector('.nav-menu');
const navGallery = document.querySelector('.nav-gallery');

// content
const content = document.querySelector('.content');
const dataContent = document.querySelector('.data-content');

// fungsi untuk menampilkan gallery
function tampilkanGallery(data) {
  let fragment = '';
  data.forEach((val) => {
    const { gambar } = val;
    fragment += `
            <div class="box">
                <img src="${gambar}" class="gallery-img"/>
            </div>
        `;
  });

  return fragment;
}

// fungsi untuk menampilkan menu
function tampilkanMenu(data) {
  let fragment = '';
  data.forEach((val) => {
    const { nama, gambar, harga, id } = val;
    fragment += `
            <div class="box-menu">
                <img src="${gambar}" class="menu-img"/>
                <p class="menu-title">${nama.length > 22 ? nama.substring(0, 22) + '...' : nama}</p>
                <p class="price">Rp. ${harga},-</p>
                <div class="buttons">
                    <button class="detail btn" data-id="${id}">Detail</button>
                    <button class="buy btn"><a href="https://wa.me/+6288210504453?text=Saya ingin beli ${nama},bisa share info lebih lanjut?">Beli</a></button>
                </div>
            </div>
        `;
  });

  return fragment;
}

// fungsi mengganti gambar otomatis
const logo = document.querySelector('.main-image');
function randomGambar() {
  let random = Math.random() + 0.1;
  if (random < 0.1) {
    logo.src = banner[0];
  } else if (random < 0.2) {
    logo.src = banner[1];
  } else if (random < 0.3) {
    logo.src = banner[2];
  } else if (random < 0.4) {
    logo.src = banner[3];
  } else if (random < 0.5) {
    logo.src = banner[4];
  } else if (random < 0.6) {
    logo.src = banner[5];
  } else if (random < 0.7) {
    logo.src = banner[6];
  } else if (random < 0.8) {
    logo.src = banner[7];
  } else if (random < 0.9) {
    logo.src = banner[8];
  } else if (random < 1) {
    logo.src = banner[9];
  } else {
    logo.src = banner[10];
  }
}
setInterval(() => {
  randomGambar();
}, 5000);

// preview gallery
document.addEventListener('click', function (e) {
  const imgPreview = document.querySelector('.img-preview');
  const preview = document.getElementById('preview');
  if (e.target.classList.contains('gallery-img')) {
    preview.classList.add('active');
    imgPreview.src = e.target.src;
    const close = document.querySelector('.close');
    close.addEventListener('click', function () {
      this.parentElement.classList.remove('active');
    });
  } else if (e.target.classList.contains('detail')) {
    let id = e.target.dataset.id;
    const data = menu[id];
    const { gambar, nama, harga, keterangan } = data;
    let fragment = '';
    fragment += `
        <div class="detail-box-data">
            <img src="${gambar}" class="detail-img production-image"/>
            <div>
                <p>Nama : </p><span>${nama}</span>
                <p>Harga : </p><span>Rp.${harga},-</span>
                <p>Keterangan : </p><span>${keterangan}</span>
            </div>

            <b class="close-detail-box">&cross;</b>
        </div>
        `;
    const detailBox = document.getElementById('detail-box');
    detailBox.innerHTML = fragment;
    detailBox.classList.add('active');
    const closeDetailBox = document.querySelector('.close-detail-box');
    closeDetailBox.addEventListener('click', function () {
      this.parentElement.parentElement.classList.remove('active');
    });
  }
});

// close greets
const closeGreets = document.querySelector('.close-greets');
const greets = document.querySelector('.greets');
closeGreets.addEventListener('click', function () {
  greets.style.display = 'none';
});

dataContent.innerHTML = tampilkanGallery(gallery);
// tampilkan gallery ketika tombol gallery di klik
navGallery.addEventListener('click', function () {
  this.classList.add('active');
  titleMenu.style.display = 'none';
  titleGallery.style.display = 'block';
  navMenu.classList.remove('active');
  dataContent.innerHTML = '';
  dataContent.innerHTML = tampilkanGallery(gallery);
});

// tampilkan menu ketika tombol gallery di klik
navMenu.addEventListener('click', function () {
  this.classList.add('active');
  titleMenu.style.display = 'block';
  titleGallery.style.display = 'none';
  navGallery.classList.remove('active');
  dataContent.innerHTML = '';
  dataContent.innerHTML = tampilkanMenu(menu);
});
