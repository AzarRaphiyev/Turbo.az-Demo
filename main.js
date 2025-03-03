const cards = document.getElementById("cards");
const searchCars = document.getElementById("searchCars");
const carsSelect = document.getElementById("carsSelect");
const showBtn = document.getElementById("showBtn");
const sidebar = document.getElementById("sidebar");
const shoppingList = document.getElementById("shoppingList");
const totalSec = document.getElementById("totalSec");
const yeniElan = document.getElementById("yeniElan");
const marka = document.getElementById("marka");
const model = document.getElementById("model");
const sekil = document.getElementById("sekil");
const reng = document.getElementById("reng");
const il = document.getElementById("il");
const mator = document.getElementById("mator");
const qiymet = document.getElementById("qiymet");
const footerNav = document.getElementById("footerNav");
const swipercard = document.getElementById("swipercard");
function swipercardprint() {
  arr
    .sort((a, b) => parseInt(a.qiymet) - parseInt(b.qiymet))
    .map(
      (item) =>
        (swipercard.innerHTML += `<div class="swiper-slide rounded">
    <div class="max-w-xs rounded-xl shadow-md dark:bg-gray-50 dark:text-gray-800">
  <img src="${item.img}" alt="" class="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500">
<div class="flex flex-col justify-between p-6 space-y-8">
<div class="space-y-2">
<h2 class="text-2xl font-semibold tracking-wide">${item.marka}-${item.model} </h2>
<h2 class="text-md font-semibold tracking-wide">${item.qiymet} AZN</h2>
</div>
</div>
</div>
   </div>
   `)
    );
}
swipercardprint();

let cardsNum = 8;

printCards();
function printCards() {
  cards.innerHTML = "";
  arr
    .filter((item) =>
      carsSelect.value ? item.marka == carsSelect.value : item
    )
    .slice(0, cardsNum)
    .forEach(
      (item) =>
        (cards.innerHTML += `<div class="max-w-xs p-4  shadow-md dark:bg-gray-50 dark:text-gray-900">
                            <img   src="${item.img}" alt="" class="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" >
                            <div class="mt-6 mb-2">
                                <h2 class="text-xl font-bold tracking-wide mb-2 "><a>${item.qiymet} Azn</a></h2>
                                <span onclick="printCarDetails(${item.id})" class=" cursor-pointer block text-xs font-medium tracking-widest uppercase dark:text-violet-600" >${item.marka}</span>
                            </div>
                            <p class="dark:text-gray-800">${item.il} il, ${item.mator} mator, ${item.reng}</p>
                          <button onclick="addBasket(${item.id})" style="background-color: #7ed321" type="button" class="hidden  py-2 px-1 mt-3 font-semibold rounded-[.5em] lg:block whitespace-nowrap text-gray-50">Səbətə at</button>
                            </div>
                            `)
    );

  searchCars.value = "";
}
function printCarDetails(id) {
  window.location.href = `http://127.0.0.1:5500/detail.htm?id=${id}`;
}
function carsSearch() {
  cards.innerHTML = "";
  arr
    .filter((item) =>
      item.marka.toLowerCase().includes(searchCars.value.toLowerCase())
    )
    .map(
      (item) =>
        (cards.innerHTML += `<div class="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
                            <img src="${item.img}" alt="" class="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500">
                            <div class="mt-6 mb-2">
                                <span class="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">${item.marka}</span>
                                <h2 class="text-xl font-semibold tracking-wide">${item.marka} ${item.model}</h2>
                            </div>
                            <p class="dark:text-gray-800">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
                            </div>`)
    );
}

let selectArr = [];
function printModels() {
  arr.map((item) => {
    !selectArr.some((i) => i == item.marka) && selectArr.push(item.marka);
  });
  selectArr.forEach(
    (item) =>
      (carsSelect.innerHTML += `<option class=" bg-red-700 text-white focus:outline-none" value="${item}">${item}</option>`)
  );
}
printModels();

function footerNavCreate() {
  selectArr.forEach(
    (item) => (footerNav.innerHTML += `<li value="${item}">${item}</li>`)
  );
}

function printAutoSalons() {
  cards.innerHTML = "";
  cards.innerHTML = `<section class="flex items-center h-full p-16  dark:text-gray-800">
	<div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div class="max-w-md text-center">
			<h2 class="mb-8 font-extrabold text-9xl dark:text-gray-400">
				Tezliklə
			</h2>
			<p class="text-2xl font-semibold md:text-3xl">Tezliklər avto salonlar əlavə ediləcək.</p>
            <p class="mt-4 mb-8 dark:text-gray-600">Müvəqqəti narahatçılığa görə üzür istəyirik.</p>
			<a onclick="printCards()" rel="noopener noreferrer" href="#" class="px-8 py-3 font-semibold rounded dark: bg-red-700 dark:text-gray-50">Geri qayıt</a>
		</div>
	</div>
</section>`;
}
function printMotors() {
  cards.innerHTML = "";
  cards.innerHTML = `<section class="flex items-center h-full p-16  dark:text-gray-800">
	<div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div class="max-w-md text-center">
			<h2 class="mb-8 font-extrabold text-9xl dark:text-gray-400">
				Tezliklə
			</h2>
			<p class="text-2xl font-semibold md:text-3xl">Tezliklər Motorlar əlavə ediləcək.</p>
            <p class="mt-4 mb-8 dark:text-gray-600">Müvəqqəti narahatçılığa görə üzür istəyirik.</p>
			<a onclick="printCards()" rel="noopener noreferrer" href="#" class="m-10 px-8 py-3 font-semibold rounded dark: bg-red-700 dark:text-gray-50">Geri qayıt</a>
		</div>
	</div>
</section>`;
}
function printDetals() {
  cards.innerHTML = "";
  cards.innerHTML = `<section class="flex items-center h-full p-16  dark:text-gray-800">
	<div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div class="max-w-md text-center">
			<h2 class="mb-8 font-extrabold text-9xl dark:text-gray-400">
				Tezliklə
			</h2>
			<p class="text-2xl font-semibold md:text-3xl">Tezliklər ehtiyyat hissələri əlavə ediləcək.</p>
            <p class="mt-4 mb-8 dark:text-gray-600">Müvəqqəti narahatçılığa görə üzür istəyirik.</p>
			<a onclick="printCards()" rel="noopener noreferrer" href="#" class="px-8 py-3 font-semibold rounded dark: bg-red-700 dark:text-gray-50">Geri qayıt</a>
		</div>
	</div>
</section>`;
}

function showMore() {
  cardsNum += 4;
  showBtn.style.display = cardsNum > arr.length ? "none" : "block";
  printCards();
}

function showBasket(status) {
  sidebar.style.right = status ? "0" : "-30vw";
}
let basketArr = [];
function addBasket(id) {
  const obj = arr.find((item) => item.id == id);
  const product = basketArr.find((item) => item.id == id);
  if (!product) {
    basketArr.push({ ...obj, count: 1 });
  } else product.count++;
  reflesBasket();
}

function reflesBasket() {
  const total = basketArr.reduce((acc, item) => {
    return acc + item.price * item.count;
  }, 0);
  totalSec.innerHTML = total;

  shoppingList.innerHTML = "";
  basketArr.forEach(
    (item) =>
      (shoppingList.innerHTML += `<li class="flex flex-col py-6 sm:flex-row sm:justify-between">
                                                                    <div class="flex w-full space-x-2 sm:space-x-4">
                                                                        <img class="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src="${
                                                                          item.img
                                                                        }" alt="Polaroid camera">
                                                                        <div class="flex flex-col justify-between w-full pb-4">
                                                                            <div class="flex justify-between w-full pb-2 space-x-2">
                                                                                <div class="space-y-1">
                                                                                    <h3 class="text-lg font-semibold leadi sm:pr-8">${
                                                                                      item.model
                                                                                    }</h3>
                                                                                    <p class="text-sm dark:text-gray-400">${
                                                                                      item.marka
                                                                                    }</p>
                                                                                    <div class="flex items-center gap-[10px]">
                                                                                        <button onclick="basketCount(-1, ${
                                                                                          item.id
                                                                                        })" class="p-[5px] bg-black text-white rounded-[5px]">-</button>
                                                                                            <span>${
                                                                                              item.count
                                                                                            }</span>
                                                                                        <button onclick="basketCount(1, ${
                                                                                          item.id
                                                                                        })" class="px-[10px]  bg-black text-white rounded-[5px]">+</button>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="text-right">
                                                                                    <p class="text-lg font-semibold">${
                                                                                      item.qiymet
                                                                                    } ₼ </p>
                                                                                    <p class="text-md dark:text-gray-600">total: ${
                                                                                      +parseFloat(
                                                                                        item.qiymet
                                                                                      ) *
                                                                                      item.count
                                                                                    } ₼</p>
                                                                                </div>
                                                                            </div>
                                                                            <div class="flex text-sm divide-x">
                                                                                <button onclick="remove(${
                                                                                  item.id
                                                                                })" type="button" class="flex items-center px-2 py-1 pl-0 space-x-1">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current">
                                                                                        <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                                                                        <rect width="32" height="200" x="168" y="216"></rect>
                                                                                        <rect width="32" height="200" x="240" y="216"></rect>
                                                                                        <rect width="32" height="200" x="312" y="216"></rect>
                                                                                        <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                                                                    </svg>
                                                                                    <span>Remove</span>
                                                                                </button>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>`)
  );
}
function cleanBasket() {
  shoppingList.innerHTML = "";
  basketArr = [];
}
function remove(id) {
  const index = basketArr.findIndex((item) => item.id == id);
  basketArr.splice(index, 1);
  reflesBasket();
}
function basketCount(x, id) {
  const product = basketArr.find((item) => item.id == id);
  if ((product.count > 1 && x == -1) || x == 1) product.count += x;
  reflesBasket();
}

function newElan(status = false) {
  yeniElan.style.display = !status ? "none" : "flex";
}
function createNewCar() {
  if (
    marka.value == "" ||
    model.value == "" ||
    reng.value == "" ||
    sekil.value == "" ||
    il.value == "" ||
    mator.value == "" ||
    qiymet.value == ""
  ) {
    alert("Zəhmət olmasa bütün xanaları doldurun");
  } else {
    const item = {
      id: arr.length + 1,
      marka: marka.value,
      qiymet: qiymet.value,
      model: model.value,
      mator: mator.value,
      il: il.value,
      reng: reng.value,
      img: sekil.value,
    };
    arr.push(item);
    marka.value = "";
    model.value = "";
    reng.value = "";
    sekil.value = "";
    il.value = "";
    mator.value = "";
    qiymet.value = "";
  }
  printModels();
  printCards();
}
