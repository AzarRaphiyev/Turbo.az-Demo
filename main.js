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

let cardsNum = 8;
const arr = [
  {
    id: 1,
    marka: "Mercedes",
    qiymet: "10 500",
    model: "w202",
    mator: "2.0",
    il: "1998",
    reng: "silver",
    img: "https://turbo.azstatic.com/uploads/full/2022%2F02%2F07%2F16%2F20%2F36%2F05ae3ec7-b845-4458-8033-99eec8aec1a2%2F83217_ryHX2Q7AONB3-jC_sEJ3mQ.jpg",
  },
  {
    id: 2,
    marka: "Kia",
    qiymet: "21 000",
    model: "Rio",
    mator: "1.4",
    il: "2014",
    reng: "silver",
    img: "https://turbo.azstatic.com/uploads/full/2021%2F09%2F10%2F11%2F40%2F18%2Fbe262b8b-13ff-40ee-9664-4c7c4ea93e4b%2F94552_bf7HpneCobaNn8ooAalBwg.jpg",
  },
  {
    id: 3,
    marka: "Hyundai",
    qiymet: "12 000",
    model: "Tucson",
    mator: "2.0",
    il: "2014",
    reng: "black",
    img: "https://turbo.azstatic.com/uploads/f660x496/2020%2F02%2F08%2F12%2F31%2F23%2Fdfd4bcdd-5279-4807-85cb-58aa153c900f%2F44290_Il5UqH7nhzVTrAAfdt5BuQ.jpg",
  },
  {
    id: 4,
    marka: "LADA (VAZ)",
    qiymet: "35 000",
    model: "2107",
    mator: "1.6",
    il: "2010",
    reng: "black",
    img: "https://turbo.azstatic.com/uploads/full/2022%2F09%2F29%2F04%2F48%2F26%2Ff85c3fb0-4f77-4157-8b15-a3122bbaf36d%2F15612_S_xRbeuG6jQhZhkc_JM3wg.jpg",
  },
  {
    id: 5,
    marka: "BMW",
    qiymet: "28 700",
    model: "M5 e39",
    mator: "4.4",
    il: "1998",
    reng: "blue",
    img: "https://turbo.azstatic.com/uploads/full/2020%2F08%2F15%2F17%2F42%2F55%2F5e61d0d8-ac41-42d4-8a34-33f9c563bba8%2F4747_ZOpsrcdSRl_mByG6tDsiqQ.jpg",
  },
  {
    id: 6,
    marka: "Mercedes",
    qiymet: "86 500",
    model: "CLS",
    mator: "5.5",
    il: "2013",
    reng: "gray",
    img: "https://turbo.azstatic.com/uploads/full/2021%2F12%2F09%2F01%2F51%2F22%2F2e3d6e19-baa7-4625-89e0-d358238808ce%2F21872_z_Z4BhoRifgwGf0Fz_hvJw.jpg",
  },
  {
    id: 7,
    marka: "Toyota",
    qiymet: "54 000",
    model: "Camry",
    mator: "3.0",
    il: "2021",
    reng: "white",
    img: "https://turbo.azstatic.com/uploads/full/2021%2F06%2F18%2F16%2F16%2F02%2Fd4a556f8-adc6-4ff8-897b-2079ea777987%2F24971_KEan9mcELSSmUAPbxG1KEw.jpg",
  },
  {
    id: 8,
    marka: "Porche",
    qiymet: "118 400",
    model: "911 Carrera",
    mator: "4.4",
    il: "2023",
    reng: "cyan",
    img: "https://turbo.azstatic.com/uploads/full/2020%2F08%2F13%2F13%2F32%2F55%2F012a26df-efae-4cf0-b763-a4c3de17ae23%2F46349_cqQK5HyMFGcJOEMh1pCm1A.jpg",
  },
  {
    id: 9,
    marka: "Dodge",
    qiymet: "38 500",
    model: "Challenger",
    mator: "7.2",
    il: "2018",
    reng: "black",
    img: "https://turbo.azstatic.com/uploads/full/2021%2F04%2F09%2F10%2F02%2F28%2F9a6bf393-9f08-476b-abc0-d6278f1d6668%2F37456_34ZTVBn26COoCWhsqBx3vw.jpg",
  },
  {
    id: 10,
    marka: "Nissan",
    qiymet: "86 000",
    model: "GTR R-35",
    mator: "3.0",
    il: "2014",
    reng: "black",
    img: "https://turbo.azstatic.com/uploads/full/2017%2F02%2F16%2F00%2F02%2F00%2F573%2F54000_4wUHTVdrb_-kLx6BJMuF8Q.jpg",
  },
  {
    id: 11,
    marka: "Audi",
    qiymet: "124 100",
    model: "RS7",
    mator: "4.0",
    il: "2015",
    reng: "dimgrey",
    img: "https://turbo.azstatic.com/uploads/full/2021%2F05%2F29%2F15%2F33%2F07%2Fc9bec2ac-97eb-4e07-bc8a-509f1898dd7d%2F82001_MmzL0_nnwbSnJI6rtabq7Q.jpg",
  },
  {
    id: 12,
    marka: "Toyota",
    qiymet: "15 800",
    model: "Corolla",
    mator: "1.6",
    il: "2016",
    reng: "white",
    img: "https://turbo.azstatic.com/uploads/full/2020%2F09%2F24%2F08%2F21%2F40%2Facdc9e7e-d243-46fd-b2ce-dc51a85c8343%2F66667_OxPaAqSg8MzGM7diar5WlQ.jpg",
  },
  {
    id: 13,
    marka: "Honda",
    qiymet: "18 500",
    model: "Civic",
    mator: "1.8",
    il: "2017",
    reng: "cyan",
    img: "https://turbo.azstatic.com/uploads/full/2023%2F03%2F29%2F18%2F06%2F09%2F1dc0eed8-15d4-46f9-abf5-0b772be61d2d%2F98117_r2JD4f3tCYHUBNquO-VTdQ.jpg",
  },
  {
    id: 14,
    marka: "Volkswagen",
    qiymet: "23 200",
    model: "Golf",
    mator: "2.0",
    il: "2019",
    reng: "white",
    img: "https://turbo.azstatic.com/uploads/full/2023%2F02%2F17%2F15%2F03%2F28%2F97566bce-3bcb-43ff-8c96-5274fdf59360%2F74622_ZZd9ojx9ZyTk5EOyx7D3wA.jpg",
  },
  {
    id: 15,
    marka: "Mazda",
    qiymet: "22 500",
    model: "CX-5",
    mator: "2.5",
    il: "2019",
    reng: "red",
    img: "https://a.d-cd.net/DIAAAgOX_uA-1920.jpg",
  },
  {
    id: 16,
    marka: "Ford",
    qiymet: "28 000",
    model: "Focus",
    mator: "1.6",
    il: "2020",
    reng: "blue",
    img: "https://a.d-cd.net/EgSiFzfh0wSm9YEoAcwXgOPs24o-960.jpg",
  },
  {
    id: 17,
    marka: "Chevrolet",
    qiymet: "17 800",
    model: "Malibu",
    mator: "1.5",
    il: "2018",
    reng: "gray",
    img: "https://images.drive.ru/i/0/5847b686ec05c42a16000004.jpg",
  },
  {
    id: 18,
    marka: "Honda",
    qiymet: "18 300",
    model: "Accord",
    mator: "2.4",
    il: "2017",
    reng: "white",
    img: "https://a.d-cd.net/QCAAAgH7tOA-1920.jpg",
  },
  {
    id: 19,
    marka: "Nissan",
    qiymet: "23 000",
    model: "Altima",
    mator: "2.5",
    il: "2021",
    reng: "black",
    img: "https://auto.vercity.ru/gallery/img/automobiles/Nissan/2013%20Nissan%20Altima%20(BR)/900x/2013%20Nissan%20Altima%20(BR)%20001.jpg",
  },
  {
    id: 20,
    marka: "Volkswagen",
    qiymet: "26 500",
    model: "Passat",
    mator: "2.0",
    il: "2020",
    reng: "silver",
    img: "https://i.pinimg.com/originals/5b/08/e8/5b08e870012507a1c3330d7045acf850.jpg",
  },
  {
    id: 21,
    marka: "BMW",
    qiymet: "50 000",
    model: "X5",
    mator: "3.0",
    il: "2022",
    reng: "blue",
    img: "https://s.yimg.com/ny/api/res/1.2/P9GZ9XgSdalCPaTqAHezGg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2019-09/f6d5a1a0-cdd3-11e9-8e6f-43e9fd58969d",
  },
  {
    id: 22,
    marka: "Audi",
    qiymet: "60 000",
    model: "A6",
    mator: "2.0",
    il: "2021",
    reng: "gray",
    img: "https://goroshina.ru/img_content/auto/audi_a6_2015.webp",
  },
  {
    id: 23,
    marka: "Mercedes",
    qiymet: "85 000",
    model: "E-Class",
    mator: "3.5",
    il: "2021",
    reng: "black",
    img: "https://avatars.mds.yandex.net/get-autoru-vos/5497741/9f305cae173e8c0d42637f90cbc16252/1200x900",
  },
  {
    id: 24,
    marka: "Toyota",
    qiymet: "22 000",
    model: "Camry",
    mator: "2.5",
    il: "2018",
    reng: "silver",
    img: "https://avatars.mds.yandex.net/i?id=a4e8289904c11d07898d28e35baef6c2_l-4546582-images-thumbs&n=13",
  },
  {
    id: 25,
    marka: "Subaru",
    qiymet: "23 500",
    model: "Outback",
    mator: "2.5",
    il: "2020",
    reng: "red",
    img: "https://www.vladtime.ru/uploads/posts/2018-04/1524741720_2018-subaru-outback-red-photos-2048x1360.jpg",
  },
  {
    id: 26,
    marka: "Kia",
    qiymet: "19 000",
    model: "Seltos",
    mator: "1.6",
    il: "2021",
    reng: "yellow",
    img: "https://kia-seltos.ru/photo/files/1/kia-seltos-press-5_820748.jpg",
  },
  {
    id: 27,
    marka: "Hyundai",
    qiymet: "21 000",
    model: "Santa Fe",
    mator: "2.4",
    il: "2020",
    reng: "green",
    img: "https://avatars.mds.yandex.net/get-altay/787110/2a00000161def05c10eab4c30a00dc56088b/XXL",
  },
  {
    id: 28,
    marka: "Mazda",
    qiymet: "27 500",
    model: "6",
    mator: "2.5",
    il: "2021",
    reng: "blue",
    img: "https://a.d-cd.net/nAAAAgOZteA-960.jpg",
  },
  {
    id: 29,
    marka: "Ford",
    qiymet: "35 000",
    model: "Explorer",
    mator: "3.5",
    il: "2022",
    reng: "orange",
    img: "https://avatars.mds.yandex.net/get-autoru-vos/2170182/8b3ba28f569b2cc90a7c4e1684e4371c/1200x900n",
  },
  {
    id: 30,
    marka: "Chevrolet",
    qiymet: "25 000",
    model: "Tahoe",
    mator: "5.3",
    il: "2020",
    reng: "black",
    img: "https://images.carid.com/inspiration/chevy/tahoe/13/5.jpg",
  },
];
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
  cards.innerHTML = "";
  arr.find((item) =>
    item.id == id
      ? (cards.innerHTML = `<section class="">
                <div class="flex   items-center">
                <h2 onclick="printCards()" class="text-orange-500 text-2xl font-bold ">❮❮</h2>
                <h2 class="px-8 py-3 text-black text-2xl font-bold">${item.marka} ${item.model}, ${item.il}, ${item.mator}, ${item.reng}</h2>
                </div>
                <div class="container max-w-6xl  mx-auto space-y-6 sm:space-y-12">
                    <a rel="noopener noreferrer" href="#" class="block max-w-sm gap-5  mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12">
                        <img src="${item.img}" alt="" class="object-cover w-full h-64  sm:h-96 lg:col-span-7 dark:bg-gray-500 rounded-[8px]">
                        <div class=" p-3 space-y-2 lg:col-span-5 border-[1px] border-blue-500 rounded-[8px] ">
                            <h3 class="text-2xl font-bold sm:text-2xl ">Qiymət: ${item.qiymet} AZN</h3>
                            <div class="flex gap-2">
                                <img class="w-[70px] h-16 rounded-[12px]" src="${item.img}">
                                <div class="flex flex-col justify-center ">
                                    <h3 class="font-semibold">Autolux Azerbaijan - ${item.marka}</h3>
                                    <p class=" text-gray-400">Rəsmi nümayəndə</p>
                                </div>
                            </div>
                            <button class="m-auto rounded-[10px] py-4 lg:w-[320px] w-[230px] bg-green-500 text-white flex gap-1 justify-center items-center" ><i class="fa-solid fa-phone"></i>Zeng et</button>
                            <p class="font-medium">There's Only One. </p>
                            <p class="text-gray-500" >${item.marka} avtomobilərinin Azərbaycanda rəsmi distribütoru Avtolüks Azərbaycan MMC-dir. 
                            20% ilkin ödəniş, 10% illik bank faizi, 5 illik</p>
                            <button class="m-auto rounded-[10px] py-4 lg:w-[320px] w-[230px]  bg-blue-500  text-white flex gap-1 justify-center items-center" >Salona Keç</button>

                        </div>
                    </a>
                </div>
            </section>`)
      : ""
  );
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
                                                                                      item.qiymet *
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
