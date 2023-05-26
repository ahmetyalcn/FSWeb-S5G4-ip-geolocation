//axios import buraya gelecek
import axios from 'axios';
var benimIP;


// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl(){
	await axios({
		method: 'get',
		url: 'https://apis.ergineer.com/ipadresim',
	})
	.then(function (response) {
		return response.data
	})
	.then(function (a) {
		benimIP=a
	});
}				
// ------------ değiştirmeyin --------------


/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/
ipAdresimiAl().then(()=>{
var url = "https://apis.ergineer.com/ipgeoapi/"+ benimIP;
const getData = axios.get(url);
getData.then((e)=>{
	console.log(e.data) 
	createCard(e.data)
})

})

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/
const createCard =(obj)=>{
	let cards = document.querySelector(".cards");
	let card = document.createElement("div");
	card.classList.add("card");

	let image = document.createElement("img");
	image.setAttribute("src",obj["ülkebayrağı"]);

	let cardInfo = document.createElement("div");
	cardInfo.classList.add("card-info");

	let ipAdd = document.createElement("h3");
	ipAdd.classList.add("ip");
	ipAdd.textContent = obj["sorgu"]

	let ulke = document.createElement("p");
	ulke.classList.add("ulke");
	ulke.textContent = obj["ülke"] + `(${obj["ülkeKodu"]})`;
	

	let p1 = document.createElement("p")
	p1.textContent = `Enlem: ${obj["enlem"]} Boylam: ${obj["boylam"]}`;
	let p2 = document.createElement("p")
	p2.textContent = `Şehir: ${obj["şehir"]}`
	let p3 = document.createElement("p")
	p3.textContent = `Saat Dilimi: ${obj["saatdilimi"]}`
	let p4 = document.createElement("p")
	p4.textContent = `Para Birimi: ${obj["parabirimi"]}`
	let p5 = document.createElement("p")
	p5.textContent = `ISP: ${obj["isp"]}`
	

	cards.append(card)
	card.append(image,cardInfo)
	cardInfo.append(ipAdd, ulke, p1,p2,p3,p4,p5)

	return cards

}

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/



//kodlar buraya gelecek