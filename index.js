function TrangChu() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function phukien() {
  window.scrollTo({ top: window.innerHeight * 2.04, behavior: 'smooth' });
}
function openMobile() {
  window.scrollTo({ top: window.innerHeight * 0.42, behavior: 'smooth' });
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
  localStorage.setItem('gioHang', JSON.stringify(gioHang));
  
  // Chuyển hướng sang trang thanh toán
  window.location.href = 'cart.html';
}

function dangnhap(){
  window.location.href='g.html';
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
function closeGiohang(event) {
  event.stopPropagation(); // Ngăn chặn sự kiện từ việc lan ra các phần tử khác
  var giohangback = document.getElementById('giohangback');
  giohangback.classList.remove('open'); // Đóng giỏ hàng
}

function iphone(){
  window.location.href='iphone-16-pro-max.html';
}

function samsung(){
  window.location.href='samsung-galaxy-s24-ultra.html'
}

function samsungzf(){
  window.location.href='samsung-galaxy-z-fold-6.html'
}

function redmagic(){
  window.location.href='nubia-red-magic-9s-pro-plus.html'
}

function sony(){
  window.location.href='sony-xperia-1-VI.html'
}

function aquos(){
  window.location.href='sharp-aquos-r8-pro.html'
}

function oppo(){
  window.location.href='oppo-find-x7-ultra.html'
}

function google(){
  window.location.href='google-pixel-9-pro-xl.html'
}

const products = [
  {
    name: "iPhone 16 Pro Max 512GB",
    price: "46.990.000₫",
    image: "https://clickbuy.com.vn/uploads/product-variant/2_52507.png",
    link: "iphone-16-pro-max.html",
  },
  {
    name: "Samsung Galaxy S24 Ultra",
    price: "31.900.000₫",
    image: "https://clickbuy.com.vn/uploads/pro/samsung-galaxy-s24-ultra-1tb_197561.jpg",
    link: "samsung-galaxy-s24-ultra.html"
  },
  {
    name: "ZTE Nubia Red Magic 9S Pro+",
    price: "21.790.000₫",
    image: "https://fdn2.gsmarena.com/vv/pics/zte/zte-nubia-red-magic-9-pro-plus-1.jpg",
    link: "nubia-red-magic-9s-pro-plus.html"
  },
  {
    name: "ㅤSony Xperia 1 VIㅤ5G",
    price: "31.490.000₫",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8SEBANEA8NDw8NDw8QDg0NDQ8NDg0NFREWFhURFRUYHSggGBolHRUVITEhJSkrLi4uFyAzODMtNygtLisBCgoKDg0OFQ8PFS0dFR0rKystLS0rKy0rKystKy0rNy4rLS0tLTE3Ky0tODg4Ny0yMDAtKyswLS0tKystKzcrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQIFBgMEBwj/xABMEAABAwIBBgYOBgcIAwAAAAABAAIDBBEhBQcSMUFxMjVRYbHwBhMXIlRzdIGEkZOhs9FTcpKUtNIWI0JSssHCCDM0Q4Oi4fEUFSX/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EAB0RAQEBAAMBAQEBAAAAAAAAAAABAgMRMRMhQRL/2gAMAwEAAhEDEQA/AO4oQhAj3AAuOAAuTyBcy7IM5Mum6OjYwMYS3t8g0tMg2Ja3a3nv6xirf2e1LosnVUjDZzWNAI2Xka3+a4cG4AAbAAApRZjnCyp9ND92b8005xcqfSw/d2qj5TyxHGTG0GWQYOsQ1jDyXsblRkWWn374YHYfmiOkHORlT6SH2DEw5y8qfSQ+wYqfHMHDSH/IPIkcgtxznZU+kh9gxMOdDKn0kXsGfJU9yxuQXPuo5V+ki9iz5JvdSyr9JF7CP5KllNKC9UucnLEsjIo5IS+R2i28MYG8m2AAxJ5lqZTz01cZMULxUluDqh0cUcb3DX2tgbfR5ycVW8myFoqXDBzaKq0TtaTHo3HmJVWp6Fha0m9yATjyhWfqa1M+r53cMqckX2WflS93DKnJF9mP8qpbclxcjvtLK3JEPI77RTpn65XJ+ejKwa2QtjDXkhrtGOxI1jgpndtyodsTd7GEH1MVVGRodXf25NM2TxkKDkd9sqdn0iz92rKv0lP7IfkSd2rKv0kHsm/kVb/9DByP+2Uf+hg5H/bKdr9IsTs9mVR+1Ed0cYHvYk7tuVeWP7EX5FXDkKDkf9spjsiw8jvtFO0+kWXu2ZW/ej9nD+RIc9mVv3o/Zw/kVWdkiHkd9orE7JcXI77SvSfXLoOQM91aJW/+SI5IyQHNLGMsOZzQLHeCF3rJWUYqiGOpiOlHM3SaTgRsII2EG4POF48qKFga4i9wCdfIF6PzHyl2SWAm+jNIBu0WO6XFOm87mvF/QhCNBCEIBCEIKznJ4rq/qx/GYuI1cxYwuGsNdo8x0TYrtucviqr+rF8Zi4fX8Ab/AOkqVFNhF9e25J5cVmrabQOjcEEXBF7FuxwviFlqMnyNOk1jnRk4EXFjyXWePJ73f3n6ph4bi9r5nt/dY0ajzmw6EVnybcAX/bjY/pF/cttxWJrgZHEANAYxrWjU1gwa0bgAE9xUQxxWMp7isZQIU0pSkKDaoeDU+R1H8IUFR8Bn1W9CnKPg1PkdR/CFBUR7xv1W9C1ly5fI3owtmMLBEtuMJXKRkY1ZWtQwLM1qxWujAxBas4agtWV6armrE9q3HNWB7VYnTSeFryBbkgWpKukYsaFZwH/Vd0L0HmM4qHj3/DjXnysPeu+q7oXoLMXxSPKH/DjVrtw+V0NCEKOwQhCAQhCCr5zeKqv6sXxmLh+UOCN/9JXcM53FNX9WL48a4ZlR1mX5Cf4HKVGKu7LCKUUAjY4NIOmMCLG/rUHHlBrnN02luibgh1xe1sVHxWLhpGwJGk62lYE4m21ZqykLLnSa9mGjIw4Oa4XGGw21jYkkipqHhu+qOkrI5amTybNJ2xN9VzZbTlEY3JhT3JhQIUiCkQbFJwanySf+EKAond63cOhT1LwajySfoCrdI/AbgtZc+TxMwlbsSj6dykIVK5yNuMLYaFhiC2mNXOtyANQWrKGoLVntems8LXkC3HtWrKFqJY05VpTFbkyj6hy6RixoVru9duPQvQ2YrikeUP8AhxrzlVvwO4r0bmK4pHlEnw41qunF5XQ0IQo6hCEIBCEIKtnP4pq/qw/HjXDsocFv1v6Su4Z0eKazdD8eNcNrz3rfrf0lSitVWT3h12DSadQGscyzx5PleW9ucI422wDmOkI5GtG3ndYb9Sl2zRNaNNlzfFxeW4cmvcsPbo3ElgFsMA69sPmp2snZmleQ2AaAxoa0amtGAb5gAnOWNnDP1R0lZHIyYUwp6a9AxIlKagz03BqPJZ+gKqU79StdMe9qPJZugKmsK3lNTuJ2kkUvTlVyjlU9RvWdOUiVhC24wtWBb8TVyrchQ1BaszWoLVlrppyBakwUhK1aE61GbEdUFRNXIpKseoGslXXLFalQ/WvSuYrikeUSfDjXmSQr03mK4pHlEnw41quuZ1HQ0IQo0EIQgEIQgqGdeXRyVUC1+2GFu79a11/9q4hXu70Hkdf/AGldqzvcVy+Mi/iXEq9t2bsTutY+4qUVs6czxYOcXu0Y4wCSSdQAG1ObTOaX27ySEOJF9ZabOaef5JjJCywxa9jrh7SQbW1grPNVGQxxxxNa7QEbWxizpXYAEjlw6VU/e27TSaRDv3mNPvKzlYaWLRu0EODAGaQxa5w4RHKL3WYrIaUwpxTSgaU1KU1Bmg4M/k03QFTgrhBwZ/J5egKoNC3krNC6xU9k6bUq+1b9BNY2V1Pxz/q40ilIWqGyZJeysFMxeeukh7WIcxbbIkPiWGukXM1RdWpqpYoDKclrrWWbEHlCbWoGZ9yt2vmubLQcvTmOf9YyvSuYSo0smyR2t2qpON+FpQxleanL0d/Z/wD8DUeUs/DxqadI6ihCFFCEIQCEIQUrO/xXL4yH+JcXcV2/OuwHJFUSLlvaC3mPb2C/qJXDSVKjBLSxOwcwG2qx0SErWMaC2ONsekNFzm4vc3aC7XbmT3FMKgxhoGA1BIU4ppQMKaU4ppQMKanFNKDJDwZ/J5egKpsCtcPBm8nl6AqtGMAt5TRzQs0YTGNW3Cxarl6nMiT4gFXnJ0VwFz2iaQQQujdi7w8AbV59x3wlYqVEtIp+npMEtRSYaln/AC32o+UYrAqi5bnxICv3ZQ8MBG1c5rWkkkrWIxtCShYHBb0zFqvavRHDxruC9Gf2f/8AA1HlLPw8a86vGB3L0rmHjaMllwADn1L9I7XWijA9ymnXLoyEIWWghCEAhCEFSzrcUVm6D8RGuFXXdc6/E9Zug/ERrhF1KAphTimlRDSmFOKxvkAw28liUAUwodKOXVicDhv5EwyDVfEWuN6BSmFLpjVz21HWkKB8XBm8RL0BVqMYDcFZYuDN4iToCrMb8BuC3hnbZjatuFq0WShbMVQFazE1RtVt7Hp+1va7ZtCpFNWtG0KcoMrMFsQuddZXc8mgPY1wxBCMogMYXHAAKodgfZXF21tI97QJiGxEnASHU3z9KXs97K4RK6kY8HtJIlIIt2wa2ebbzqKq3ZDUdscXbNgVRrG61JV+VmHaFB1Na07VYlsakwWpI1ZpagLWfKF0jlWKQYHcV6UzE8VekSfDjXmqR+B3FelcxPFXpEnw4001h0RCELLYQhCAQhCCo52OJ6zdB+JjXCF3fOxxPWej/iY1we6lQFNKUppUDSsUsYOvoB6VlKYUGIxDEYgEAEX1gCya6Ma+e45utllKaUGMtFydpFkFKU0op8fBm8RJ0BVdjMArPHwZfEydCrLDgNy3hnR4jCyNiCYHLI1y1XNkbAFlbThNY9bVJGXuDBt9y5atdMyLPm57G21FWyWUXgpnNkcMbSSNN2s3XxO621OzkdjjYKt80Q/UVT3SAbI5XG72brkkb7bFbuxdrYImsbhhjzlO7Jmtnicx2OGHMVw+ldf8Rx51OFidAFvVkZY4sOz3hab3rvm1y1JGB0QWMxhZXOWMuXWObE9mBXpjMTxV6RJ8ONeaHnA7l6XzE8VekSfDjU06ZdEQhCy0EIQgEIQgqOdnies9H/ExLgy7xna4nrPR/wATEuCqVCppSlNKgQphTimlA0ppSlNKBCmFOKaUDo+DL4mToVXaVaI+DL4mToVWat4KyAp7SsQWRi3XOtiIXVnyDTBtnHWoPJ8OIKtFCLALzctdeOLLTT2CKmouFp05ROV53ZW8v0wddw1qryi2CulcLgqrZQhxJXo4q48kRpKYSnOWMr0xyhHFemsxPFXpEnw415kcvTeYnir0iT4cazp0joiEIWVCEIQCEIQVDO1xPWej/iYlwRd7zt8T1no/4mJcDUqUqaUpTSVEIU0pSU0oppTSnFMKBCmlKUhRTo+DL4mToVWarRHwZfEydCrDVvCU4LYgZcrCwKQpI1rVc6k6CPUp+kaouij1KdpIl5N13y3adqKhq2qeJFREuTav1bVA18etWerjUFWx611xWNKxOyxWsVJVcaj3hevN/HCMbl6bzE8VekSfDjXmRy9N5ieKvSJPhxqadI6IhCFlQhCEAhCEFPzt8TVno/4mJcDXfM7fE1Z6P+JiXAgpUpSmlBTSoAppQU0oAppSlNKBCmlKU0op7ODL4mToVZYFZY+DL4mToVcjC6YSs0TVK0bFoQNUzRR9ebr0hTdc56lqGPUp2kZqUZRM69fOpqlb167149eu+W/Tsw68iKhi2IG9fWidvX1KNIGrZrUFXR61ZapvXruUJWs69fMrn1nSq1kaipmqfrY+vN16FDTtXsxXC+tF4XprMTxV6RJ8ONeZ5BrXpjMTxV6RJ8ONXTpHREIQsqEIQgEIQgo+eZxGSZQCReWAHnHbAbHzgepcIXe88MQdkepdcjtbqdwttJnY2x+0VwNShSmlKU0qIQppSlIUCFNKUppRSFNKUpCgfHwZfEydCr0I1KwR8GXxMnQoOnGrcFvDG/G7Ss683XpU5Qs1e7f/AN9CiqNvXo3cqnaJur3c+wb9qzyVjKWo2deRTNK3V151F0vXoUvTfPk5Lbl5K9ESUAwHXYPeiduHXnT4uvLrA3ol6+sjejSHqm6/P81DVjOvKpyo+XJu3KJqh19yZZquVzNfv3/99KgqlnXr1wVlrW6/fzbDu2KBrG9dnPv5V6uOvPpETDWvRH9n8n/wagXNhUtsL4D9RGvPVQNe4r0bmFpw3Jr5ATeWpNwbWGjFGBZdNN48dJQhCy2EIQgEIQgp+d3ias9H/ExLz8vQOdw//GrPR/xMS8+qVAUhKCkKgQpCgpALoEKaU/RTdHr50UwpCnEJhQPj4Mvin9Ch6ZuA3fyx5uhTMRwk8TJ0KLoxgOYY276wHKNnrC3ljfiSpG4jl2cuPJt1chKnKMfO3uF/+QFEUjfkSLFukdeOA95UzS7Ds1jksNVsOgLntjKWptnTu68qlaXZz23m59Z96iYPfbz4qVpdducYbTYcm31rz13iUiPu2cnfcmz1BEx9+zl773+orHCcBzBuHJd3Js810TOwPOHefHk2+eyNNCq28194sfWPcoqp29O/ryqUqtduc4bRcfu7PWoqf328+CRmoisHzt7jb/gFQdW3E8u3XfDl26uWyn6radms8ljgb4dIULVt9WoE2DdIascR7wvRhw0g6luB3fyw1YdK9H5ieKvSJPhxrzrWDA84Nr97cHkG31lei8xXFQ8ok+HGuum+Px0NCELLYQhCAQhCCoZ2mF2R6wAXNoD5hUxk+4Lz3deqspUUc8MtPKLxzsdG8A2Oi4WNjsPOuCZfzb5RppHNihfVQ3/VzQDSJbsDmDvmnzW51KKeUhU2exDKfgFZ93l+ST9EMqeAVn3eT5IiDKQqc/Q/KngFZ93k+ST9DsqeAVn3eX5KKgrpCVOnsNyp4BWfd5fkk/Q3KngFZ93l+SogSmqf/QzKngFX93l+SQ9heVPAKv2Ev5VBCxapPFP6FE01TGA3ScDa2FiSLahiLD1FXJnYblUG4oKv7vL+VaFTm5ykSSyirGg/smmkIG42WolnaOgylCLEyAkDXZ+kCdffW6AFJQ5cpR/mjYL6Eow32uVhGbbK3gdV92k+SO5rlbwKqP8AoSD+SlnaTMiUh7JKMa5gMfopberRW9B2WUAwNQAO+P8AczObf6uiq73Nsq+A1XsZPypTm2yr4FVexk/KsfONLYzszydhep1Blv1U7hhrt3nepX9meTsbVOvTv+qnaMdV+875VHub5V8Bq/YyflR3N8q+A1fsZPyp84vaxT9llAbgVAI70/3MzW3+rorRm7JKM6pr4/RS29WiozubZV8BqvYyflSdzbKvgNV7GT8qfOIzTZcpT/mjaL6Epw9Vwo6fKUJuRIAba7SaRI1d9a/rBW33NsreBVQ/0JD/ACQM2uVvA6r7vJ8luTpm5iCqamMh2i4C98LEE31i4Fj6gvR2YxhGSRf9qokI3aDB0grkWQM0mVJpWtfA6GO40pKgdqY0bTok6TtwGPKNa9Hdj+R4qOmio4r6ELbaRsHPeSS55ttJJPnV7WTpIoQhFCEIQCEIQCEIQCEIQCQpUIBIUIQCEIQKhCEAhCEAEIQgEIQgEIQgEIQgEIQgEIQgEIQg/9k=",
    link:"sony-xperia-1-VI.html"
  },

  {
    name: "Sharp AQUOS R8 Pro",
    price: "29.466.000₫",
    image: "https://d2tfhz5takygeh.cloudfront.net/contents/img/products/SH51D/SH51D_Black_XL.jpg",
    link:"sharp-aquos-r8-pro.html"
  },

  {
    name: "Oppo Find X7 Ultra 5G Plus",
    price: "24.490.000₫",
    image: "https://cdn.mobilecity.vn/mobilecity-vn/images/2024/01/w300/oppo-find-x7-ultra-xanh.jpg.webp",
    link:"oppo-find-x7-ultra.html"
  },
  
  {
    name: "Google Pixel 9 Pro XL",
    price: "31.990.000₫",
    image: "https://www.didongmy.com/vnt_upload/product/08_2024/thumbs/(600x600)_google_pixel_9_pro_xl_5g_trang_didongmy_thumb_600x600_1.jpg",
    link:"google-pixel-9-pro-xl.html"
  },

  {
    name: "Nokia 105 4G Pro 32GB 1450mAh",
    price:"680.000₫",
    image: "https://cdn.tgdd.vn/Products/Images/42/311033/nokia-105-4g-den-thumb-600x600.jpg",
    link:"oppo-find-x7-ultra.html"
  },
  {
    name: "Xiaomi Black Shark 3 5G",
    price: "4.550.000₫",
    image: "https://cdn.mobilecity.vn/mobilecity-vn/images/2023/04/w300/xiaomi-black-shark-3-xam.jpg.webp",
    link:"oppo-find-x7-ultra.html"
  },
  {
    name: "Samsung Galaxy Z Fold 6 5G",
    price:"33.699.000₫",
    image: "data:image/jpeg;base64,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",
    link:"oppo-find-x7-ultra.html"
  },
  {
    name: "",
    price: "",
    image:"",
    link:"oppo-find-x7-ultra.html"
  },
  {
    name: "",
    price: "",
    image:"",
    link:"oppo-find-x7-ultra.html"
  },
  {
    name: "",
    price: "",
    image:"",
    link:"oppo-find-x7-ultra.html"
  },
  {
    name: "ZTE Nubia Red Magic 9S Pro+",
    price: "21.790.000₫",
    image: "data:image/jpeg;base64,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",
    link: "nubia-red-magic-9s-pro-plus.html"
  },
  {
    name: "Samsung Galaxy Z Flip 6 5G",
    price: "26.990.000₫",
    image: "https://cdn.ringkevietnam.com/wp-content/uploads/2024/07/op-lung-samsung-galaxy-z-flip-6-ringke-fusion-magnetic-03-600x600.jpg",
    
  },
  
  
  {
    name: "iPhone 16 Pro Max 512GB",
    price: "46.990.000₫",
    image: "https://clickbuy.com.vn/uploads/product-variant/2_52507.png",
    link: "iphone-16-pro-max.html",
  },
];

document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search');
  const productList = document.querySelector('.product-list');

  searchInput.addEventListener('input', function() {
    searchProducts(this.value);
  });
});

function searchProducts(searchTerm) {
  const productList = document.querySelector('.product-list');
  productList.innerHTML = ""; // Xóa danh sách sản phẩm hiện có

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filteredProducts.length > 0) {
    filteredProducts.forEach((product, index) => {
      const productHTML = `
        <div class="animation">  
          <div class="product-item" data-index="${index}">
            <img src="${product.image}" alt="${product.name}" width="150px">
            <h3>${product.name}</h3>
            <p>Giá: ${product.price}</p>
            
            <button  onclick="addToCart({ name: '${product.name}', price: ${product.price.replace(/\D/g, '')}, image: '${product.image}', link: '${product.link}' })">Thêm vào giỏ hàng</button>
           
          </div>  
        </div>
      `;
      productList.innerHTML += productHTML;
    });

    document.querySelectorAll('.product-item').forEach((item, index) => {
      item.onclick = function(event) {
        if (event.target.tagName.toLowerCase() !== 'button') {
          const productLink = filteredProducts[index].link;
          window.location.href = productLink;
        }
      };
    });
  } else {
    productList.innerHTML = "<p>Không tìm thấy sản phẩm.</p>";
  }
}

// Hàm thêm sản phẩm vào giỏ hàng và hiển thị thông báo
function addToCart(product) {
  // Thêm sản phẩm vào giỏ hàng (mã giỏ hàng của bạn)
  
  showAddToCartMessage();
}


// Hàm hiển thị thông báo "Đã thêm vào giỏ hàng"
function showAddToCartMessage() {
  const messageDiv = document.createElement("div");
  messageDiv.className = "cart-message";
  messageDiv.innerText = "Đã thêm vào giỏ hàng";

  document.body.appendChild(messageDiv);

  // Ẩn thông báo sau 3 giây
  setTimeout(() => {
    messageDiv.remove();
  }, 3000);
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
          
        </div>
      </div>
      <div class="pr3">SỐ LƯỢNG</div>
      <div class="quantity-controls">
        <button id="decrease-${uniqueId}" class="quantity-btn">-</button>
        <label id="quantityLabel-${uniqueId}">${quantity}</label>
        <button id="increase-${uniqueId}" class="quantity-btn">+</button>
      </div>
      <div class="pr3">Giá: <span id="total-price-${uniqueId}">${sanPham.price.toLocaleString('vi-VN')}</span>đ</div>
      <div class="thungrac">
      <img id="remove-${uniqueId}" class="remove-btn" 
          src="https://media.istockphoto.com/id/928418914/vi/vec-to/th%C3%B9ng-r%C3%A1c-th%C3%B9ng-r%C3%A1c-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-th%C3%B9ng-r%C3%A1c.jpg?s=612x612&w=0&k=20&c=ePcbxUb_LwGfvIP_1J-65pTpIEV-gituNbXKoh2OBP4=" 
          alt="NoLoad" >

      </div>
     
    </div>
     
  
  `;


  // Thêm sản phẩm vào giỏ hàng bằng cách giữ sự kiện trước đó
  document.getElementById('openGiohang').insertAdjacentHTML('beforeend', productHTML);

  // Hàm cập nhật giá sản phẩm và số lượng
  function updatePrice() {
    const totalPrice = sanPham.price * quantity;
    document.getElementById(`total-price-${uniqueId}`).textContent = totalPrice.toLocaleString('vi-VN');
    document.getElementById(`quantityLabel-${uniqueId}`).textContent = quantity;
    updateTotalCartValue(); // Cập nhật tổng giá trị giỏ hàng
  }

  // Sự kiện khi nhấn tăng số lượng sản phẩm
  document.getElementById(`increase-${uniqueId}`).addEventListener('click', function () {
    quantity++;
    gioHang.find(item => item.name === sanPham.name).quantity = quantity;
    updatePrice();
  });

  // Sự kiện khi nhấn giảm số lượng sản phẩm
  document.getElementById(`decrease-${uniqueId}`).addEventListener('click', function () {
    if (quantity > 1) {
      quantity--;
      gioHang.find(item => item.name === sanPham.name).quantity = quantity;
      updatePrice();
    }
  });

  // Sự kiện khi nhấn xóa sản phẩm
  document.getElementById(`remove-${uniqueId}`).addEventListener('click', function () {
    document.getElementById(uniqueId).remove();
    gioHang = gioHang.filter(item => item.name !== sanPham.name); // Xóa sản phẩm khỏi giỏ hàng
    updateTotalCartValue(); // Cập nhật tổng giá trị giỏ hàng
  });

  // Thêm sản phẩm vào giỏ hàng
  gioHang.push({ ...sanPham, quantity });
  updatePrice();
  updateTotalCartValue(); // Cập nhật tổng giá trị giỏ hàng
}

function updateTotalCartValue() {
  const total = gioHang.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  document.getElementById('totalCartValue').textContent = total.toLocaleString('vi-VN') + 'đ';

  const totalQuantity = gioHang.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById('cartQuantity').textContent = totalQuantity; // Phần tử hiển thị tổng số lượng
}



function showNotification() {
  const notification = document.getElementById('notification');
  notification.style.display = 'block'; // Hiển thị thông báo
  notification.style.top = '70px'; // Trượt xuống

  setTimeout(() => {
    notification.style.top = '-100px'; // Trượt lên sau 2 giây
  }, 2000); // Đợi 2 giây
}


function buttonClickIphone(event) {
  event.stopPropagation();
  
  addToCart({
    name: "iPhone 16 Pro Max",
    price: 46990000,
    image: "https://clickbuy.com.vn/uploads/product-variant/2_52507.png",
    link: "iphone-16-pro-max.html",
  }); // Thêm sản phẩm vào giỏ hàng
  
  showNotification(); // Hiển thị thông báo
}

// Các hàm buttonClick khác tương tự
function buttonClickSamsung(event) {
  event.stopPropagation();

  addToCart({
    name: "Samsung Galaxy S24 Ultra",
    price: 31990000,
    image: "https://clickbuy.com.vn/uploads/pro/samsung-galaxy-s24-ultra-1tb_197561.jpg",
    link: "samsung-galaxy-s24-ultra.html"
  }); // Thêm sản phẩm vào giỏ hàng
  
  showNotification(); // Hiển thị thông báo
}

function buttonClickNubia(event) {
  event.stopPropagation();
  
  addToCart({
    name: "ZTE Nubia Red Magic 9S Pro+",
    price: 21790000,
    image: "https://fdn2.gsmarena.com/vv/pics/zte/zte-nubia-red-magic-9-pro-plus-1.jpg",
    link: "nubia-red-magic-9s-pro-plus.html"
  }); // Thêm sản phẩm vào giỏ hàng
  
  showNotification(); // Hiển thị thông báo
}

function buttonClickSony(event) {
  event.stopPropagation();
  
  
  addToCart({
    name: "Sony Xperia 1 VI",
    price: 31490000,
    image: "https://store.sony.com.vn/cdn/shop/files/3075_Primary_image_black-1200_e5ecdfb3-1b15-4d3d-9961-4830c88d625a_400x.jpg?v=1728619178",
    link:"sony-xperia-1-VI.html"
  });
  

  showNotification(); // Thêm sản phẩm vào giỏ hàng
}

function buttonClickAQUOS(event) {
  event.stopPropagation();
  
  
  addToCart({
    name: "Sharp AQUOS R8 Pro",
    price: 29466000,
    image: "https://d2tfhz5takygeh.cloudfront.net/contents/img/products/SH51D/SH51D_Black_XL.jpg",
    link:"sharp-aquos-r8-pro.html"
  });

  
  showNotification(); // Thêm sản phẩm vào giỏ hàng
}

function buttonClickOppo(event) {
  event.stopPropagation();

  
  addToCart({
    name: "Oppo Find X7 Ultra 5G",
    price: 24490000,
    image: "https://cdn.mobilecity.vn/mobilecity-vn/images/2024/01/w300/oppo-find-x7-ultra-xanh.jpg.webp",
    link:"oppo-find-x7-ultra.html"
  });

  
  showNotification(); // Thêm sản phẩm vào giỏ hàng
}
function buttonClickOplung(event) {
  event.stopPropagation();
 
  
  addToCart({
    name: "Ốp Lưng Iphone 16 PRO MAX SPIGEN",
    price: 630000,
    image: "data:image/jpeg;base64,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",
    
  });

 
  showNotification();// Thêm sản phẩm vào giỏ hàng
}
function buttonClickSac(event) {
  event.stopPropagation();
  showNotification();
  
  const sanPham = {
    name: "Bộ sạc nhanh Vivumax Q318c QC3.0",
    price: 169000,
    image: "https://airtrading.vn/wp-content/uploads/2024/01/10_1bd3519802b246af9405ba293021d994_master.jpghttps://product.hstatic.net/200000099153/product/ac.fc300_4163c8b0f7b74e41aa135ee78ad35ac8_master.jpg",
    
  };

  addToCart(sanPham);
  showNotification(); // Thêm sản phẩm vào giỏ hàng
}
function buttonClickXiaomi(event) {
  event.stopPropagation();
 
  
  addToCart({
    name: "Xiaomi Black Shark 3 5G",
    price: 4550000,
    image: "https://cdn.mobilecity.vn/mobilecity-vn/images/2023/04/w300/xiaomi-black-shark-3-xam.jpg.webp",
    
  });

 
  showNotification();// Thêm sản phẩm vào giỏ hàng
}
function buttonClickZF6(event) {
  event.stopPropagation();
  showNotification();
  
  const sanPham = {
    name: "Samsung Galaxy Z Fold 6 5G",
    price:33699000,
    image: "data:image/jpeg;base64,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",
    
  };

  addToCart(sanPham); 
  showNotification();// Thêm sản phẩm vào giỏ hàng
}
function buttonClickZFL6(event) {
  event.stopPropagation();
  showNotification();
  
  const sanPham = {
    name: "Samsung Galaxy Z Flip 6 5G",
    price:26990000,
    image: "https://cdn.ringkevietnam.com/wp-content/uploads/2024/07/op-lung-samsung-galaxy-z-flip-6-ringke-fusion-magnetic-03-600x600.jpg",
    
  };

  addToCart(sanPham); 
  showNotification();// Thêm sản phẩm vào giỏ hàng
}

function buttonClickNokia(event) {
  event.stopPropagation();
  showNotification();
  
  const sanPham = {
    name: "Nokia 105 4G Pro",
    price:680000,
    image: "https://cdn.tgdd.vn/Products/Images/42/311033/nokia-105-4g-den-thumb-600x600.jpg",
    
  };

  addToCart(sanPham); 
  showNotification();// Thêm sản phẩm vào giỏ hàng
}
function openThanhmenu() {
  const Thanhmenu = document.getElementById('Thanhmenu');
  Thanhmenu.classList.toggle('open');
}
function buttonClickyeuthich(event) {
  event.stopPropagation(); // Ngăn sự kiện click lan sang phần tử khác

  const icon = event.currentTarget.querySelector("k2");
  if (icon.textContent === "♡") {
      icon.textContent = "♥";
  } else {
      icon.textContent = "♡";
  }
}
function openVoucher() {
  const Voucher = document.getElementById('Voucher');
  Voucher.classList.toggle('open');
}

