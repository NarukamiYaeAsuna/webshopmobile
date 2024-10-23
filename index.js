function TrangChu() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function iphone(){
    window.location.href='iphone-16-pro-max.html';
}
function dangki(){
  window.location.href='f.html';
}
function dangnhap(){
  window.location.href='g.html';
}
function iphone(){
  window.location.href='iphone-16-pro-max.html';
}
function samsung(){
  window.location.href='samsung-galaxy-s24-ultra.html'
}
function openDangnhap(){
  
  var dangnhapback = document.getElementById('dangnhapback');
    dangnhapback.classList.toggle('open');
}
function closeDangnhap(event) {
  if (event.target.id === 'dangnhapback') {
    var dangnhapback = document.getElementById('dangnhapback');
    dangnhapback.classList.remove('open');
  }
}
function openGiohang(){
  
  var giohangback = document.getElementById('giohangback');
  giohangback.classList.toggle('open');
}
function closeGiohang(event) {
  if (event.target.id === 'giohangback') {
    var giohangback = document.getElementById('giohangback');
    giohangback.classList.remove('open');
  }
}



function redmagic(){
  window.location.href='nubia-red-magic-9s-pro-plus.html'
}

function sony(){
  window.location.href='sony-xperia-1-VI.html'
}

function oppo(){
  window.location.href='oppo-find-x7-ultra.html'
}



const products = [
  {
    name: "iPhone 16 Pro Max",
    price: "46.990.000đ",
    image: "https://clickbuy.com.vn/uploads/product-variant/2_52507.png",
    link: "iphone-16-pro-max.html"
  },
  {
    name: "Samsung Galaxy S24 Ultra",
    price: "31.990.000đ",
    image: "https://clickbuy.com.vn/uploads/pro/samsung-galaxy-s24-ultra-1tb_197561.jpg",
    link: "samsung-galaxy-s24-ultra.html"
  },
  {
    name: "ZTE Nubia Red Magic 9S Pro Plus",
    price: "21.790.000đ",
    image: "https://clickbuy.com.vn/uploads/product-variant/2_52576.jpg",
    link: "nubia-red-magic-9s-pro-plus.html"
    
  },
  {
    name: "Sony Xperia 1 VI",
    price: "31,490,000đ",
    image: "https://store.sony.com.vn/cdn/shop/files/3075_Primary_image_black-1200_e5ecdfb3-1b15-4d3d-9961-4830c88d625a_400x.jpg?v=1728619178",
    link:"sony-xperia-1-VI.html"
  },
  {
    name: "Oppo Find X7 Ultra 5G",
    price: "24,490,000₫",
    image: "https://cdn.mobilecity.vn/mobilecity-vn/images/2024/01/w300/oppo-find-x7-ultra-xanh.jpg.webp",
    link:"oppo-find-x7-ultra.html"
  }
];

document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search');
  
  
  const productList = document.querySelector('.product-list');

  
  productList.addEventListener('click', function(event) {
    if (event.target.closest('.product-item')) {
      const productItem = event.target.closest('.product-item');
      console.log('Sản phẩm được click:', productItem.querySelector('h3').textContent);
      // Thêm các hành động khác khi click vào sản phẩm tại đây
    }
  });

  searchInput.addEventListener('input', function() {
    searchProducts(this.value);
  });
});

function buttonClick(event) {
    event.stopPropagation();
    alert('Đã thêm vào giỏ hàng');
}


function searchProducts(searchTerm) {
  const productList = document.querySelector('.product-list');
  productList.innerHTML = ""; 

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filteredProducts.length > 0) {
    filteredProducts.forEach(product => {
      const productHTML = `
        <div class="animation">  
            <div class="product-item" >
              <img src="${product.image}" alt="${product.name}" width="150px">
              <h3>${product.name}</h3>
              <p>Giá: ${product.price}</p>
              <button onclick="buttonClick(event)">Thêm vào giỏ hàng</button>
            </div>  
        </div>
      `;
      productList.innerHTML += productHTML;
    });
    document.querySelectorAll('.product-item').forEach((item, index) => {
      item.onclick = function() {
          const productLink = filteredProducts[index].link;
          
          window.location.href = productLink;
      };
  });
  } else {
    productList.innerHTML = "<p>Không tìm thấy sản phẩm.</p>";
  }
}
function muaiphone(){
   window.location.href='giohang.html';
}
let gioHang = []; // Mảng để lưu trữ sản phẩm

function buttonClick1(event) {
  event.stopPropagation();
  alert('Đã thêm vào giỏ hàng');
  
  const sanPham = 
   {
      name: "iPhone 16 Pro Max",
      price: "46.990.000đ",
      image: "https://clickbuy.com.vn/uploads/product-variant/2_52507.png",
      link: "iphone-16-pro-max.html",
  };

  const productHTML = `
       
          <div class="product-item" >
              <img src="${sanPham.image}" alt="${sanPham.name}" width="150px" >
              <h3>${sanPham.name}</h3>
              <p>Giá: ${sanPham.price}</p>
              
          </div>  
      
  `;
  document.getElementById('openGiohang').innerHTML += productHTML;
  // Logic to add the productHTML to the cart goes here


      
    gioHang.push(sanPham); // Thêm sản phẩm vào giỏ hàng
    // Mở giỏ hàng khi có sản phẩm mới
    displayProducts(); // Cập nhật hiển thị giỏ hàng
}
function buttonClick2(event) {
  event.stopPropagation();
  alert('Đã thêm vào giỏ hàng');
  const sanPham = "SAMSUNG GALAXY S24 ULTRA   X1"; // Thay đổi thành thông tin sản phẩm bạn muốn thêm
  gioHang.push(sanPham); // Thêm sản phẩm vào giỏ hàng
  // Mở giỏ hàng khi có sản phẩm mới
  displayProducts(); // Cập nhật hiển thị giỏ hàng
}
function buttonClick3(event) {
  event.stopPropagation();
  alert('Đã thêm vào giỏ hàng');
  const sanPham = "NUBZTE Nubia Red Magic 9S Pro Plus       X1"; // Thay đổi thành thông tin sản phẩm bạn muốn thêm
  gioHang.push(sanPham); // Thêm sản phẩm vào giỏ hàng
  // Mở giỏ hàng khi có sản phẩm mới
  displayProducts(); // Cập nhật hiển thị giỏ hàng
}
function buttonClick4(event) {
  event.stopPropagation();
  alert('Đã thêm vào giỏ hàng');
  const sanPham = "Sony Xperia 1 VI       x1"; // Thay đổi thành thông tin sản phẩm bạn muốn thêm
  gioHang.push(sanPham); // Thêm sản phẩm vào giỏ hàng
  // Mở giỏ hàng khi có sản phẩm mới
  displayProducts(); // Cập nhật hiển thị giỏ hàng
}

function displayProducts() {
    const sanphamContainer = document.getElementById('sanphamContainer');
    sanphamContainer.innerHTML = ""; // Xóa nội dung cũ

    gioHang.forEach(sanPham => {
        const productDiv = document.createElement('div');
        productDiv.textContent = sanPham; // Hiển thị tên sản phẩm
        sanphamContainer.appendChild(productDiv);
    });
}

function openGiohang(){
    var giohangback = document.getElementById('giohangback');
    giohangback.classList.toggle('open');
}

function closeGiohang(event) {
    if (event.target.id === 'giohangback') {
        var giohangback = document.getElementById('giohangback');
        giohangback.classList.remove('open');
    }
}

