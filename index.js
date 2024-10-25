function TrangChu() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function phukien() {
  window.scrollTo({ top: 1500, behavior: 'smooth' });
}
function openMobile() {
  window.scrollTo({ top: 305, behavior: 'smooth' });
}
function iphone(){
    window.location.href='iphone-16-pro-max.html';
}
function dangki(){
  window.location.href='f.html';
}
function opentintuc(){
  window.location.href='https://www.gsmarena.com/news.php3';
}
function openmap(){
  window.location.href='https://maps.app.goo.gl/tjvYsDkBkCpiRWJn7';
}
function openThanhToan(){
  window.location.href='cart.html';
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
    name: "ZTE Nubia Red Magic 9S Pro+",
    price: "21.790.000đ",
    image: "https://fdn2.gsmarena.com/vv/pics/zte/zte-nubia-red-magic-9-pro-plus-1.jpg",
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

let gioHang = []; // Khởi tạo giỏ hàng

function addToCart(sanPham) {
  let quantity = 1;
  const uniqueId = `product-${gioHang.length + 1}`;

  const productHTML = `
    <div class="pr" id="${uniqueId}">
      <div class="product-item1">
        <img src="${sanPham.image}" alt="${sanPham.name}" width="100px">
        <div class="flextext1">
          <h3>${sanPham.name}</h3>
          <p>Giá: ${sanPham.price.toLocaleString('vi-VN')}đ</p>
        </div>
      </div>
      <div class="pr">SỐ LƯỢNG SẢN PHẨM</div>
      <div class="quantity-controls">
        <button id="decrease-${uniqueId}" class="quantity-btn">-</button>
        <label id="quantityLabel-${uniqueId}">${quantity}</label>
        <button id="increase-${uniqueId}" class="quantity-btn">+</button>
      </div>
      <div class="pr1">GIÁ: <span id="total-price-${uniqueId}">${sanPham.price.toLocaleString('vi-VN')}</span>đ</div>
      <button id="remove-${uniqueId}" class="remove-btn">Xóa</button>
    </div>
  `;

  document.getElementById('openGiohang').innerHTML += productHTML;

  function updatePrice() {
    const totalPrice = sanPham.price * quantity;
    document.getElementById(`total-price-${uniqueId}`).textContent = totalPrice.toLocaleString('vi-VN');
    document.getElementById(`quantityLabel-${uniqueId}`).textContent = quantity;
  }

  document.getElementById(`increase-${uniqueId}`).addEventListener('click', function () {
    quantity++;
    updatePrice();
  });

  document.getElementById(`decrease-${uniqueId}`).addEventListener('click', function () {
    if (quantity > 1) {
      quantity--;
      updatePrice();
    }
  });

  document.getElementById(`remove-${uniqueId}`).addEventListener('click', function () {
    document.getElementById(uniqueId).remove();
    gioHang = gioHang.filter(item => item.name !== sanPham.name); // Xóa sản phẩm khỏi giỏ hàng
    updateTotalCartValue(); // Cập nhật tổng giá trị giỏ hàng
  });

  gioHang.push({ ...sanPham, quantity });
  updatePrice();
  updateTotalCartValue(); // Cập nhật tổng giá trị giỏ hàng
}

function updateTotalCartValue() {
  const total = gioHang.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  document.getElementById('totalCartValue').textContent = total.toLocaleString('vi-VN') + 'đ';
}

function buttonClick1(event) {
  event.stopPropagation();
  alert('Đã thêm vào giỏ hàng');
  
  const sanPham = {
    name: "iPhone 16 Pro Max",
    price: 46990000,
    image: "https://clickbuy.com.vn/uploads/product-variant/2_52507.png",
    link: "iphone-16-pro-max.html",
  };

  addToCart(sanPham); // Thêm sản phẩm vào giỏ hàng
}

function buttonClick2(event) {
  event.stopPropagation();
  alert('Đã thêm vào giỏ hàng');
  
  const sanPham = {
    name: "Samsung Galaxy S24 Ultra",
    price: 31990000,
    image: "https://clickbuy.com.vn/uploads/pro/samsung-galaxy-s24-ultra-1tb_197561.jpg",
    link: "samsung-galaxy-s24-ultra.html"
  };

  addToCart(sanPham); // Thêm sản phẩm vào giỏ hàng
}


function buttonClick3(event) {
  event.stopPropagation();
  alert('Đã thêm vào giỏ hàng');
  
  const sanPham = {
    name: "ZTE Nubia Red Magic 9S Pro+",
    price: 21790000,
    image: "https://fdn2.gsmarena.com/vv/pics/zte/zte-nubia-red-magic-9-pro-plus-1.jpg",
    link: "nubia-red-magic-9s-pro-plus.html"
  };

  addToCart(sanPham); // Thêm sản phẩm vào giỏ hàng
}
function buttonClick4(event) {
  event.stopPropagation();
  alert('Đã thêm vào giỏ hàng');
  
  const sanPham = {
    name: "Sony Xperia 1 VI",
    price: 31490000,
    image: "https://store.sony.com.vn/cdn/shop/files/3075_Primary_image_black-1200_e5ecdfb3-1b15-4d3d-9961-4830c88d625a_400x.jpg?v=1728619178",
    link:"sony-xperia-1-VI.html"
  };

  addToCart(sanPham); // Thêm sản phẩm vào giỏ hàng
}
function buttonClick5(event) {
  event.stopPropagation();
  alert('Đã thêm vào giỏ hàng');
  
  const sanPham = {
    name: "Oppo Find X7 Ultra 5G",
    price: 24490000,
    image: "https://cdn.mobilecity.vn/mobilecity-vn/images/2024/01/w300/oppo-find-x7-ultra-xanh.jpg.webp",
    link:"oppo-find-x7-ultra.html"
  };

  addToCart(sanPham); // Thêm sản phẩm vào giỏ hàng
}

function updateTotalCartValue() {
  const total = gioHang.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  document.getElementById('totalCartValue').textContent = total.toLocaleString('vi-VN') + 'đ';

  const totalQuantity = gioHang.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById('cartQuantity').textContent = totalQuantity; // Phần tử hiển thị tổng số lượng
}

