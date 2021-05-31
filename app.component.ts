import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { ServiceService } from './service.service';
import { AppModule } from './app.module';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [ServiceService]
})

export class AppComponent implements OnInit {
	result = [];
	today = Date.now();
	showMe: boolean = false
	myimage: String = "https://i.assetzen.net/i/WtDxrFn3pWrg/w:1165/h:480/q:70.jpg";
	constructor(private title: Title, private service: ServiceService) {
	}
	ngOnInit() {
		this.title.setTitle('City Temperature');

	}
	toggleTag() {
		this.showMe = !this.showMe

	}
	selectedCountry: String = "--Choose Country--";

	Countries: Array<any> = [
		{ name: 'Afghanistan', states: [{ name: 'Badakhshan', cities: ['Argo', 'Fayzabad', 'Ishkashim', 'Khwahan', 'Kishim', 'Ragh', 'Shighnan,', 'Wakhan'] }, { name: 'Baghlan', cities: ['Andarab', 'Burka', 'Dushi', 'Darrang', 'Guzargahi Nur ', 'Khinjan', 'Khost wa Fereng', 'Nahrin'] }, { name: 'Kunduz ', cities: ['Ali Abad', 'Chardara', 'Imam Sahib', 'Khan Abad', 'Kunduz', 'Qalay-I-Zal'] }, { name: 'Balkh', cities: ['Chahar Bolak', 'Dawlatabad', 'Kaldar', 'Kishindih', 'Marmul', 'Mazar-e Sharif', 'Sholgara', 'Shortepa'] }, { name: 'Samangan', cities: ['Aybak', 'Dara-I-Sufi Payan', 'Hazrati Sultan', 'Khuram Wa Sarbagh', 'Ruyi Du Ab'] }, { name: 'Kabul', cities: ['Bagrami', 'Chahar Asyab', 'Kabul', 'Mussahi', 'Qarabagh'] }, { name: 'Laghman', cities: ['Alingar', 'Alishing', 'Dawlat Shah', 'Mihtarlam', 'Qarghayi'] }] },
		{ name: 'Australia', states: [{ name: 'New South Wales', cities: ['Albury-Wodonga', 'Armidale', 'Balranald', 'Bathurst', 'Bowral', 'Cobar', 'Forbes', 'Gundagai', 'Kempsey', 'Maitland', 'Penrith'] }, { name: 'Northern Territory', cities: ['Alice Springs', 'Anthony Lagoon', 'Darwin', 'Katherine'] }, { name: 'Queensland', cities: ['Beaudesert', 'Brisbane', 'Cairns', 'Dalby', 'Gladstone', 'Kingaroy', 'Maroochydore', 'Roma', 'Townsville', 'Weipa', 'Winton'] }, { name: 'Tasmania', cities: ['Beaconsfield', 'Devonport', 'Kingston', 'New Norfolk', 'Queenstown', 'Richmond', 'Smithton', 'Ulverstone'] }, { name: 'Victoria', cities: ['Ararat', 'Bairnsdale', 'Beechworth', 'Castlemaine', 'Colac', 'Hamilton', 'Portland', 'Wangaratta'] }] },
		{ name: 'Brazil', states: [{ name: 'Acre', cities: ['Rio Branco'] }, { name: 'Bahia', cities: ['Alagoinhas', 'Itabuna', 'Juazeiro', 'Paulo Afonso', 'Salvador'] }, { name: 'Ceará', cities: ['Aracati', 'Crato', 'Fortaleza', 'Juazeiro do Norte', 'Sobral'] }, { name: 'Goiás', cities: ['Anápolis', 'Catalão', 'Goiânia', 'JIpameri', 'Jatai'] }, { name: 'Minas Gerais', cities: ['Araguari', 'Belo Horizonte', 'Diamantina', 'Divinópolis', 'Mariana', 'Passos'] }, { name: 'Santa Catarina', cities: ['Criciúma', 'Blumenau', 'Florianópolis', 'Itajaí', 'Lajes'] }] },
		{ name: 'China', states: [{ name: 'Anhui ', cities: ['Anqing', 'Bengbu', 'Hefei', 'Huainan', 'Shexian', 'Tongcheng', 'Wuhu'] }, { name: 'Fujian  ', cities: ['Fuzhou', 'Longyan', 'Quanzhou', 'Sanming', 'Xiamen', 'Yong’an'] }, { name: 'Gansu', cities: ['Dunhuang', 'Dunhuang', 'Lanzhou', 'Pingliang', 'Tianshui', 'Wuwei', 'Yumen'] }, { name: 'Guangdong', cities: ['Chaozhou', 'Guangzhou', 'Maoming', 'Meizhou', 'Shaoguan', 'Shenzhen', 'Zhanjiang', 'Zhaoqing'] }] },
		{ name: 'Denmark', states: [{ name: 'Hovedstaden', cities: ['Copenhagen', 'Frederiksberg', 'Gentofte', 'Helsingør'] }, { name: 'Midtjylland', cities: ['Herning', 'Holstebro', 'Horsens', 'Silkeborg', 'Skive', 'Viborg'] }, { name: 'Nordjylland', cities: ['Frederikshavn', 'Hjørring', 'Nørresundby', 'Skagen', 'Ålborg', 'Thisted'] }, { name: 'Syddanmark', cities: ['Esbjerg', 'Fredericia', 'Haderslev', 'Kolding', 'Odense', 'Svendborg', 'Vejle'] }] },
		{ name: 'Egypt', states: [{ name: 'Aswān', cities: ['Aswān', 'Idfū', 'Kawm Umbū'] }, { name: 'Al-Buḥayrah', cities: ['Damanhūr', 'Idkū', 'Rosetta'] }, { name: 'Al-Buḥayrah', cities: ['Cairo', 'Ḥulwān', 'Madīnat Khāmastāshar Māyo'] }, { name: 'Qinā', cities: ['Dandarah', 'Najʿ Ḥammādī', 'Naqādah', 'Qifṭ'] }] },
		{ name: 'France', states: [{ name: 'Aquitaine ', cities: ['Agen', 'Bayonne', 'Biarritz', 'Dax', 'Libourne', 'Pessac'] }, { name: 'Auvergne ', cities: ['Aurillac', 'Clermont-Ferrand', 'Moulins', 'Riom', 'Vichy'] }, { name: 'Brittany ', cities: ['Auray', 'Carnac', 'Dinan', 'Dinard', 'Lorient', 'Morlaix', 'Rennes'] }] },
		{ name: 'Germany', states: [{ name: 'Bavaria', cities: ['Amberg', 'Aschaffenburg', 'Bamberg', 'Coburg', 'Deggendorf', 'Erlangen', 'Kempten', 'Munich'] }, { name: 'Brandenburg', cities: ['Cottbus', 'Eberswalde', 'Frankfurt an der Oder', 'Potsdam'] }, { name: 'Hessen', cities: ['Bad Homburg', 'Fulda', 'Giessen', 'Kassel', 'Lorsch', 'Offenbach', 'Rüdesheim'] }, { name: 'Saxony', cities: ['Altenburg', 'Chemnitz', 'Freiberg', 'Hoyerswerda', 'Leipzig', 'Meissen'] }] },
		{ name: 'India', states: [{ name: 'Andhra Pradesh', cities: ['Anantapur', 'Chittoor', 'Guntur', 'Krishna', 'Prakasam', 'Srikakulam', 'Nellore', 'Visakhapatnam', 'Vizianagaram', 'West Godavari', 'YSR District,', 'Kurnool'] }, { name: 'Assam', cities: ['Baksa', 'Barpeta', 'Cachar', 'Darrang', 'Dhemaji', 'Dhubri', 'Dibrugarh', 'Goalpara', 'Hailakandi', 'Hojai', 'Jorhat', 'Karimganj', 'Nalbari', 'Sivasagar', 'Tinsukia', 'Udalguri'] }, { name: 'Bihar', cities: ['Araria', 'Aurangabad', 'Banka', 'Begusarai', 'Bhagalpur', 'Darbhanga', 'Gaya', 'Gopalganj', 'Jamui', 'Katihar', 'Patna,', 'Saharsa', 'Saran', 'Sheohar'] }, { name: 'Chhattisgarh', cities: ['Balod', 'Balrampur', 'Bilaspurr', 'Gariyaband', 'Jashpur', 'Kondagaon', 'Korba', 'Mungeli', 'Raigarh', 'Rajnandgaon', 'Sukma,', 'Surguja'] }, { name: 'Delhi', cities: ['Central Delhi', 'East Delhi', 'New Delhi', 'New Delhi', 'North East Delhi', 'North West Delhi', 'Shahdara', 'South Delhi', 'South West Delhi', 'South West Delhi', 'West Delhi',] }, { name: 'Goa', cities: ['North Goa', 'South Goa'] }, { name: 'Haryana', cities: ['Ambala', 'Charkhi Dadri', 'Faridabad', 'Fatehabad', 'Hisar', 'Jhajjar', 'Kaithal', 'Kurukshetra', 'Palwal', 'Panipat', 'Rohtak,', 'Sirsa', 'Yamunanagar'] }, { name: 'Himachal Pradesh', cities: ['Bilaspur', 'Chamba', 'Hamirpur', 'Kangra', 'Kinnaur', 'Kullu', 'Lahaul & Spiti', 'Mandi', 'Shimla', 'Sirmaur (Sirmour)', 'Solan', 'Una'] }, { name: 'Jammu And Kashmir', cities: ['Anantnag', 'Bandipore', 'Budgam', 'Doda', 'Ganderbal', 'Jammu', 'Kupwara', 'Pulwama', 'Rajouri', 'Reasi', 'Samba', 'Udhampur'] }, { name: 'Karnataka', cities: ['Bengaluru', 'Mysuru', 'Udupi', 'Kollegal', 'Bidar', 'Chikkamagaluru', 'Kodagu', 'Uttara Kannada', 'Vijayapura', 'Ballari', 'Haveri'] }, { name: 'Kerala', cities: ['Kollam', 'Kozhikode', 'Alappuzha', 'Ernakulam', 'Idukki', 'Kannur', 'Kottayam', 'Palakkad', 'Thiruvananthapuram', 'Wayanad'] }, { name: 'Maharashtra', cities: ['Ahmednagar', 'Akola', 'Bhandara', 'Chandrapur', 'Gadchiroli', 'Hingoli', 'Jalgaon', 'Kolhapur', 'Mumbai City', 'Nanded', 'Nashik', 'Osmanabad', 'Parbhani', 'Pune', 'Ratnagiri', 'Sangli', 'Thane', 'Wardha', 'Washim', 'Yavatmal'] }, { name: 'Odisha', cities: ['Angul', 'Balasore', 'Cuttack', 'Deogarh', 'Dhenkanal', 'Ganjam', 'Jajpur', 'Malkangiri', 'Nabarangpur', 'Nayagarh', 'Puri', 'Sundargarh'] }, { name: 'Himachal Pradesh', cities: ['Bilaspur', 'Chamba', 'Hamirpur', 'Kangra', 'Kinnaur', 'Kullu', 'Lahaul & Spiti', 'Mandi', 'Shimla', 'Sirmaur (Sirmour)', 'Solan', 'Una'] }, { name: 'Himachal Pradesh', cities: ['Bilaspur', 'Chamba', 'Hamirpur', 'Kangra', 'Kinnaur', 'Kullu', 'Lahaul & Spiti', 'Mandi', 'Shimla', 'Sirmaur (Sirmour)', 'Solan', 'Una'] }, { name: 'Tamil Nadu', cities: ['Erode', 'Chennai', 'coimbatore', 'Ariyalur', 'Dindigul', 'Cuddalore', 'Dharmapuri', 'Kanchipuram', 'Kanyakumari', 'Karur', 'Madurai', 'Namakkal', 'Pudukkottai', 'Vellore', 'Viluppuram', 'Thoothukudi'] }, { name: 'Puducherry', cities: ['Karaikal', 'Mahe', 'Puducherry', 'Yanam'] }, { name: 'Uttar Pradesh', cities: ['Agra', 'Allahabad', 'Banda', 'Faizabad', 'Ghazipur', 'Hamirpur', 'Kanpur Nagar', 'Lucknow', 'Pilibhit', 'Rampur', 'Shravasti', 'Sitapur', 'Sonbhadra', 'Sultanpur', 'Unnao', 'Varanasi'] }, { name: 'West Bengal', cities: ['Alipurduar', 'Birbhum', 'Howrah', 'Jalpaiguri', 'Kolkata', 'Malda', 'Nadia', 'Purba Burdwan', 'Purulia', 'South 24 Parganas', 'Uttar Dinajpur'] }] },
		{ name: 'Italy', states: [{ name: 'Campania', cities: ['Amalfi', 'Avellino', 'Benevento', 'Ercolano', 'Pozzuoli', 'Sorrento'] }, { name: 'Lazio', cities: ['Alatri', 'Anzio', 'Arpino', 'Cassino', 'Ferentino', 'Latina'] }, { name: 'Marche', cities: ['Ancona', 'Fano', 'Loreto', 'Macerata', 'Senigallia'] }, { name: 'Puglia', cities: ['Altamura', 'Bitonto', 'Cerignola', 'Corato', 'Grottaglie', 'Otranto'] }, { name: 'Sardinia', cities: ['Alghero', 'Carloforteo', 'Nuoro', 'Olbia', 'Oristano', 'Porto Torres'] }] },
		{ name: 'Japan', states: [{ name: 'Aomori', cities: ['Aomori', 'Hachinohe', 'Hirosaki'] }, { name: 'Chiba', cities: ['Funabashi', 'Ichikawa', 'Kashiwa', 'Narashino', 'Narita', 'Sawara'] }, { name: 'Ehime', cities: ['Imabari', 'Matsuyama', 'Niihama', 'Uwajima', 'Saijō'] }, { name: 'Fukui', cities: ['Sabae', 'Takefu', 'Tsuruga'] }, { name: 'Hiroshima', cities: ['Fukuyama', 'Hiroshima', 'Innoshima', 'Kure', 'Mihara'] }] },
		{ name: 'Mexico', states: [{ name: 'Colima', cities: ['Manzanillo', 'Colima', 'Durango'] }, { name: 'Jalisco', cities: ['Ameca', 'Arandas', 'La Barca', 'Tlaquepaque'] }, { name: 'México', cities: ['Nezahualcóyotl', 'Tlalnepantla', 'Toluca'] }] },
		{ name: 'Russia', states: [{ name: 'Altay', cities: ['Barnaul', 'Biysk', 'Gorno-Altaysk', 'Kamen-na-Obi'] }, { name: 'Ingushetiya', cities: ['Karabulakl', 'Magas', 'Malgobek'] }, { name: 'Kemerovo', cities: ['Belovo', 'Kemerovo', 'Novokuznetsk', 'Osinniki'] }, { name: 'Kurgan', cities: ['Kurgan', 'Shadrinsk'] }] },
		 { name: 'US', states: [ {name: 'California', cities: ['san francisco']} ] },
	
];

	states: Array<any> = [];
	cities: Array<any> = [];
	changeCountry(country: any) {

		this.states = this.Countries.find((cntry: any) => cntry.name == country.target.value).states;
	}

	changeState(state: any) {

		this.cities = this.Countries.find((cntry: any) => cntry.name == this.selectedCountry).states.find((stat: any) => stat.name == state.target.value).cities; //Angular 11
	}
	exampleForm = new FormGroup({
		Country: new FormControl(),
		State: new FormControl(),
		City: new FormControl()
	});
	City = new FormControl();
	updateName(data) {
		this.City.setValue(this.service.getTemperature(data.City).subscribe(
			(Response) => {
				console.log(Response)
				this.result = Response;

				console.log(this.result);
			}

		)
		)

	}
}
