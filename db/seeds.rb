# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Color.delete_all
Gender.delete_all
Brand.delete_all
Item.delete_all

user_0 = User.create!( username: 'demo', password: '123456')
user_1 = User.create!( username: 'admin', password: '123456')
user_2 = User.create!( username: 'guest', password: '123456')
user_3 = User.create!( username: 'John Updike', password: '123456')
user_4 = User.create!( username: 'John Ernst Steinbeck', password: '123456')
user_5 = User.create!( username: 'Mary Flannery O’Connor', password: '123456')
user_6 = User.create!( username: 'Vladimir Vladimirovich Nabokov', password: '123456')
user_7 = User.create!( username: 'Toni Morrison', password: '123456')
user_8 = User.create!( username: 'Raymond Chandler', password: '123456')
user_9 = User.create!( username: 'Ernest Hemingway', password: '123456')
user_10 = User.create!( username: 'Joseph Heller', password: '123456')
user_11 = User.create!( username: 'Arthur Miller', password: '123456')
user_12 = User.create!( username: 'Thomas Lanier Williams III', password: '123456')
user_13 = User.create!( username: 'William Cuthbert Faulkner', password: '123456')
user_14 = User.create!( username: 'Francis Scott Fitzgerald', password: '123456')
user_15 = User.create!( username: 'Thomas Stearns Eliot', password: '123456')
user_16 = User.create!( username: 'Henry James', password: '123456')
user_17 = User.create!( username: 'Samuel Langhorne Clemens', password: '123456')
user_18 = User.create!( username: 'Emily Dickinson', password: '123456')
user_19 = User.create!( username: 'Walt Whitman', password: '123456')
user_20 = User.create!( username: 'Herman Melville', password: '123456')
user_21 = User.create!( username: 'Edgar Allan', password: '123456')
user_22 = User.create!( username: 'Nathaniel Hawthorne', password: '123456')

col_beige = Color.create!(name: 'Beige');
col_blue = Color.create!(name: 'Blue');
col_brown = Color.create!(name: 'Brown');
col_gold_tone = Color.create!(name: 'Gold Tone');
col_gunmetal = Color.create!(name: 'Gunmetal');
col_mother_of_pearl = Color.create!(name: 'Mother Of Pearl');
col7_pink = Color.create!(name: 'Pink');
col_red = Color.create!(name: 'Red');
col1_rose_gold_tone = Color.create!(name: 'Rose Gold Tone');
col_silver_tone = Color.create!(name: 'Silver Tone');
col_two_tone = Color.create!(name: 'Two Tone');
col_yellow = Color.create!(name: 'Yellow');
col_black = Color.create!(name: 'Black');
col_white = Color.create!(name: "White")
col_steel_green = Color.create!(name: "Steel Green")

gender_men = Gender.create!(name: 'Men')
gender_women = Gender.create!(name: 'Women')
gender_unisex = Gender.create!(name: 'Unisex')

brand1 = Brand.create!(name: '88 Rue Du Rhone')
brand_A_Lange_Sohne = Brand.create!(name: 'A. Lange & Sohne')
brand_A_Line = Brand.create!(name: 'A_Line')
brand_Abercrombie = Brand.create!(name: 'Abercrombie')
brand_Acqua_Di_Parma = Brand.create!(name: 'Acqua Di Parma')
brand_Adee_Kaye = Brand.create!(name: 'Adee Kaye')
brand_Adidas = Brand.create!(name: 'Adidas')
brand_Adidas_Yeezy = Brand.create!(name: 'Adidas Yeezy')
brand_Adolfo = Brand.create!(name: 'Adolfo')
brand_Adrienne_Vittadini = Brand.create!(name: 'Adrienne Vittadini')
brand_Aerowatch = Brand.create!(name: 'Aerowatch')
brand_Akribos_XXIV = Brand.create!(name: 'Akribos XXIV')
brand_Alexander_Mcqueen = Brand.create!(name: 'Alexander Mcqueen')
brand_Alford_Hoff = Brand.create!(name: 'Alford & Hoff')
brand_Alfred_Dunhill = Brand.create!(name: 'Alfred Dunhill')
brand_Alfred_Sung = Brand.create!(name: 'Alfred Sung')
brand_Alpina = Brand.create!(name: 'Alpina')
brand_Alyssa_Ashley = Brand.create!(name: 'Alyssa Ashley')
brand_Amouage = Brand.create!(name: 'Amouage')
brand_Amour = Brand.create!(name: 'Amour')
brand_Anastasia_Beverly_Hills = Brand.create!(name: 'Anastasia Beverly Hills')
brand_Anne_Klein = Brand.create!(name: 'Anne Klein')
brand_Aquage = Brand.create!(name: 'Aquage')
brand_Aquazzura = Brand.create!(name: 'Aquazzura')
brand_Aquolina = Brand.create!(name: 'Aquolina')
brand_Araldi = Brand.create!(name: 'Araldi')
brand_Aramis = Brand.create!(name: 'Aramis')
brand_Armand_Nicolet = Brand.create!(name: 'Armand Nicolet')
brand_Armani_Exchange = Brand.create!(name: 'Armani Exchange')
brand_Arnold_and_Son = Brand.create!(name: 'Arnold and Son')
brand_Ash = Brand.create!(name: 'Ash')
brand_Assorted_Fragrances = Brand.create!(name: 'Assorted Fragrances')
brand_Aubusson = Brand.create!(name: 'Aubusson')
brand_Audemars_Piguet = Brand.create!(name: 'Audemars Piguet')
brand_August_Steiner = Brand.create!(name: 'August Steiner')
brand_Azzaro = Brand.create!(name: 'Azzaro')
brand_B_D = Brand.create!(name: 'B+D')
brand_Bain_De_Terre = Brand.create!(name: 'Bain De Terre')
brand_Balenciaga = Brand.create!(name: 'Balenciaga')
brand_Ball = Brand.create!(name: 'Ball')
brand_Balmain = Brand.create!(name: 'Balmain')
brand_Banana_Republic = Brand.create!(name: 'Banana Republic')
brand_Bang_and_Olufsen = Brand.create!(name: 'Bang and Olufsen')
brand_Bareminerals = Brand.create!(name: 'Bareminerals')
brand_Baume_et_Mercier = Brand.create!(name: 'Baume et Mercier')
brand_Bcbg_Max_Azria = Brand.create!(name: 'Bcbg Max Azria')
brand_Becca = Brand.create!(name: 'Becca')
brand_Bedat = Brand.create!(name: 'Bedat')
brand_Bell_and_Ross = Brand.create!(name: 'Bell and Ross')
brand_Bella_Pearl = Brand.create!(name: 'Bella Pearl')
brand_Bellegance = Brand.create!(name: 'Bellegance')
brand_Ben_Sons = Brand.create!(name: 'Ben & Sons')
brand_Benefit = Brand.create!(name: 'Benefit')
brand_Benetton = Brand.create!(name: 'Benetton')
brand_Bentley_Fragrances = Brand.create!(name: 'Bentley Fragrances')
brand_Bertha = Brand.create!(name: 'Bertha')
brand_Beyonce_Knowles = Brand.create!(name: 'Beyonce Knowles')
brand_Bijan = Brand.create!(name: 'Bijan')
brand_Bill_Blass = Brand.create!(name: 'Bill Blass')
brand_Biotherm = Brand.create!(name: 'Biotherm')
brand_Biotherm_Homme = Brand.create!(name: 'Biotherm Homme')
brand_Black_Score = Brand.create!(name: 'Black Score')
brand_Blancpain = Brand.create!(name: 'Blancpain')
brand_Bliss = Brand.create!(name: 'Bliss')
brand_Blumarine = Brand.create!(name: 'Blumarine')
brand_Bob_Mackie = Brand.create!(name: 'Bob Mackie')
brand_Bolon = Brand.create!(name: 'Bolon')
brand_Bond_No_9 = Brand.create!(name: 'Bond No.9')
brand_Boscia = Brand.create!(name: 'Boscia')
brand_Bottega_Veneta = Brand.create!(name: 'Bottega Veneta')
brand_Boucheron = Brand.create!(name: 'Boucheron')
brand_Boum = Brand.create!(name: 'Boum')
brand_Bourjois_Paris = Brand.create!(name: 'Bourjois Paris')
brand_Bovet = Brand.create!(name: 'Bovet')
brand_Boy_London = Brand.create!(name: 'Boy London')
brand_Breed = Brand.create!(name: 'Breed')
brand_Breguet = Brand.create!(name: 'Breguet')
brand_Breitling = Brand.create!(name: 'Breitling')
brand_Britney_Spears = Brand.create!(name: 'Britney Spears')
brand_Brooklyn_Watch_Co = Brand.create!(name: 'Brooklyn Watch Co.')
brand_Brosseau = Brand.create!(name: 'Brosseau')
brand_Bruno_Magli = Brand.create!(name: 'Bruno Magli')
brand_Bulgari = Brand.create!(name: 'Bulgari')
brand_Bull_Titanium = Brand.create!(name: 'Bull Titanium')
brand_Bulova = Brand.create!(name: 'Bulova')
brand_Burberry = Brand.create!(name: 'Burberry')
brand_Burgi = Brand.create!(name: 'Burgi')
brand_Burt_s_Bees = Brand.create!(name: "Burt's Bees")
brand_Buscemi = Brand.create!(name: 'Buscemi')
brand_Buxom = Brand.create!(name: 'Buxom')
brand_Bvlgari = Brand.create!(name: 'Bvlgari')
brand_By_Terry = Brand.create!(name: 'By Terry')
brand_Byblos = Brand.create!(name: 'Byblos')
brand_Cabochon = Brand.create!(name: 'Cabochon')
brand_Cacharel = Brand.create!(name: 'Cacharel')
brand_Calvin_Klein = Brand.create!(name: 'Calvin Klein')
brand_Caribbean_Joe = Brand.create!(name: 'Caribbean Joe')
brand_Carl_Bucherer = Brand.create!(name: 'Carl F. Bucherer')
brand_Carolina_Herrera = Brand.create!(name: 'Carolina Herrera')
brand_Caron = Brand.create!(name: 'Caron')
brand_Carrera = Brand.create!(name: 'Carrera')
brand_Cartier = Brand.create!(name: 'Cartier')
brand_Casio = Brand.create!(name: 'Casio')
brand_Catherine_Malandrino = Brand.create!(name: 'Catherine Malandrino')
brand_cbdMD = Brand.create!(name: 'cbdMD')
brand_Celine = Brand.create!(name: 'Celine')
brand_Certina = Brand.create!(name: 'Certina')
brand_Chanel = Brand.create!(name: 'Chanel')
brand_Charmex = Brand.create!(name: 'Charmex')
brand_Charriol = Brand.create!(name: 'Charriol')
brand_Chiara_Ferragni = Brand.create!(name: 'Chiara Ferragni')
brand_Chloe = Brand.create!(name: 'Chloe')
brand_Chopard = Brand.create!(name: 'Chopard')
brand_Christian_Audigier = Brand.create!(name: 'Christian Audigier')
brand_Christian_Dior = Brand.create!(name: 'Christian Dior')
brand_Christian_Siriano = Brand.create!(name: 'Christian Siriano')
brand_Christopher_Raeburn = Brand.create!(name: 'Christopher Raeburn')
brand_Chronoswiss = Brand.create!(name: 'Chronoswiss')
brand_Citizen = Brand.create!(name: 'Citizen')
brand_Clairol = Brand.create!(name: 'Clairol')
brand_Clarins = Brand.create!(name: 'Clarins')
brand_Cle_De_Peau_Beaute = Brand.create!(name: 'Cle De Peau Beaute')
brand_Clinique = Brand.create!(name: 'Clinique')
brand_Cluse = Brand.create!(name: 'Cluse')
brand_Coach = Brand.create!(name: 'Coach')
brand_Cofci = Brand.create!(name: 'Cofci')
brand_Cole_Haan = Brand.create!(name: 'Cole Haan')
brand_Complet = Brand.create!(name: 'Complet')
brand_Concord = Brand.create!(name: 'Concord')
brand_Converse = Brand.create!(name: 'Converse')
brand_Corum = Brand.create!(name: 'Corum')
brand_Costa_Del_Mar = Brand.create!(name: 'Costa Del Mar')
brand_Coty = Brand.create!(name: 'Coty')
brand_Cover_Fx = Brand.create!(name: 'Cover Fx')
brand_Crayo = Brand.create!(name: 'Crayo')
brand_Creed = Brand.create!(name: 'Creed')
brand_Cubano = Brand.create!(name: 'Cubano')
brand_D1_Milano = Brand.create!(name: 'D1 Milano')
brand_Dana = Brand.create!(name: 'Dana')
brand_Daniel_Wellington = Brand.create!(name: 'Daniel Wellington')
brand_David_Beckham = Brand.create!(name: 'David Beckham')
brand_Davidoff = Brand.create!(name: 'Davidoff')
brand_De_Grisogono = Brand.create!(name: 'De Grisogono')
brand_Dedicated_Brand = Brand.create!(name: 'Dedicated Brand')
brand_Deep_Blue = Brand.create!(name: 'Deep Blue')
brand_DeWitt = Brand.create!(name: 'DeWitt')
brand_Diesel = Brand.create!(name: 'Diesel')
brand_Dior = Brand.create!(name: 'Dior')
brand_DKNY = Brand.create!(name: 'DKNY')
brand_Dolce_and_Gabbana = Brand.create!(name: 'Dolce and Gabbana')
brand_Donna_Karan = Brand.create!(name: 'Donna Karan')
brand_Doucal = Brand.create!(name: "Doucal's")
brand_Dr_Brandt = Brand.create!(name: 'Dr. Brandt')
brand_Dsquared2 = Brand.create!(name: 'Dsquared2')
brand_Earth = Brand.create!(name: 'Earth')
brand_Earth_Cork = Brand.create!(name: 'Earth Cork')
brand_Ebel = Brand.create!(name: 'Ebel')
brand_Eberhard_and_Co = Brand.create!(name: 'Eberhard and Co')
brand_Edox = Brand.create!(name: 'Edox')
brand_Eleven_Paris = Brand.create!(name: 'Eleven Paris')
brand_Elevon = Brand.create!(name: 'Elevon')
brand_Elie_Saab = Brand.create!(name: 'Elie Saab')
brand_Elini_Barokas = Brand.create!(name: 'Elini Barokas')
brand_Elizabeth_Arden = Brand.create!(name: 'Elizabeth Arden')
brand_Elizabeth_Taylor = Brand.create!(name: 'Elizabeth Taylor')
brand_Ellen_Tracy = Brand.create!(name: 'Ellen Tracy')
brand_Elysee = Brand.create!(name: 'Elysee')
brand_Emilio_Pucci = Brand.create!(name: 'Emilio Pucci')
brand_Emporio_Armani = Brand.create!(name: 'Emporio Armani')
brand_Empress = Brand.create!(name: 'Empress')
brand_Enicar = Brand.create!(name: 'Enicar')
brand_Envie = Brand.create!(name: 'Envie')
brand_Equipe = Brand.create!(name: 'Equipe')
brand_Equipe_Tritium = Brand.create!(name: 'Equipe Tritium')
brand_Ermenegildo_Zegna = Brand.create!(name: 'Ermenegildo Zegna')
brand_Escada = Brand.create!(name: 'Escada')
brand_Essentiel = Brand.create!(name: 'Essentiel')
brand_Estee_Lauder = Brand.create!(name: 'Estee Lauder')
brand_Eterna = Brand.create!(name: 'Eterna')
brand_Eva_Longoria = Brand.create!(name: 'Eva Longoria')
brand_F_A_M_T = Brand.create!(name: 'F.A.M.T.')
brand_Faberge = Brand.create!(name: 'Faberge')
brand_Faconnable = Brand.create!(name: 'Faconnable')
brand_Falke = Brand.create!(name: 'Falke')
brand_Fendi = Brand.create!(name: 'Fendi')
brand_Ferragamo = Brand.create!(name: 'Ferragamo')
brand_Ferrari = Brand.create!(name: 'Ferrari')
brand_Ferre_Milano = Brand.create!(name: 'Ferre Milano')
brand_Filles_Papa = Brand.create!(name: 'Filles A Papa')
brand_Fiyta = Brand.create!(name: 'Fiyta')
brand_Fjallraven = Brand.create!(name: 'Fjallraven')
brand_Flower_Beauty = Brand.create!(name: 'Flower Beauty')
brand_Formula_10_0_6 = Brand.create!(name: 'Formula 10.0.6')
brand_Fortis = Brand.create!(name: 'Fortis')
brand_Fossil = Brand.create!(name: 'Fossil')
brand_Franck_Muller = Brand.create!(name: 'Franck Muller')
brand_Franck_Olivier = Brand.create!(name: 'Franck Olivier')
brand_Fred_Hayman = Brand.create!(name: 'Fred Hayman')
brand_Frederic_Fekkai = Brand.create!(name: 'Frederic Fekkai')
brand_Frederique_Constant = Brand.create!(name: 'Frederique Constant')
brand_Furla = Brand.create!(name: 'Furla')
brand_Gale_Hayman = Brand.create!(name: 'Gale Hayman')
brand_GCDS = Brand.create!(name: 'GCDS')
brand_Geoffrey_Beene = Brand.create!(name: 'Geoffrey Beene')
brand_Georg_Jensen = Brand.create!(name: 'Georg Jensen')
brand_Geox = Brand.create!(name: 'Geox')
brand_Gevril = Brand.create!(name: 'Gevril')
brand_GEYM = Brand.create!(name: 'GEYM')
brand_Gianfranco_Ferre = Brand.create!(name: 'Gianfranco Ferre')
brand_Giorgio_Armani = Brand.create!(name: 'Giorgio Armani')
brand_Giorgio_B_Hills = Brand.create!(name: 'Giorgio B. Hills')
brand_Giorgio_Valenti = Brand.create!(name: 'Giorgio Valenti')
brand_Girard_Perregaux = Brand.create!(name: 'Girard Perregaux')
brand_Giuseppe_Zanotti = Brand.create!(name: 'Giuseppe Zanotti')
brand_Givenchy = Brand.create!(name: 'Givenchy')
brand_Glamglow = Brand.create!(name: 'Glamglow')
brand_Glashutte = Brand.create!(name: 'Glashutte')
brand_Graff = Brand.create!(name: 'Graff')
brand_Gres = Brand.create!(name: 'Gres')
brand_Grovana = Brand.create!(name: 'Grovana')
brand_Gucci = Brand.create!(name: 'Gucci')
brand_Guerlain = Brand.create!(name: 'Guerlain')
brand_Guess = Brand.create!(name: 'Guess')
brand_Guy_Laroche = Brand.create!(name: 'Guy Laroche')
brand_GV2_by_Gevril = Brand.create!(name: 'GV2 by Gevril')
brand_Hadley_Roma = Brand.create!(name: 'Hadley Roma')
brand_Haemmer = Brand.create!(name: 'Haemmer')
brand_Halston = Brand.create!(name: 'Halston')
brand_Hamilton = Brand.create!(name: 'Hamilton')
brand_Hanae_Mori = Brand.create!(name: 'Hanae Mori')
brand_Harry_Winston = Brand.create!(name: 'Harry Winston')
brand_Hautlence = Brand.create!(name: 'Hautlence')
brand_Havaianas = Brand.create!(name: 'Havaianas')
brand_Henry_London = Brand.create!(name: 'Henry London')
brand_Heritor = Brand.create!(name: 'Heritor')
brand_Hermes = Brand.create!(name: 'Hermes')
brand_Hero = Brand.create!(name: 'Hero')
brand_Herschel_Supply_Co = Brand.create!(name: 'Herschel Supply Co.')
brand_Hetal_Diamonds = Brand.create!(name: 'Hetal Diamonds')
brand_Houbigant = Brand.create!(name: 'Houbigant')
brand_Hublot = Brand.create!(name: 'Hublot')
brand_Hugo_Boss = Brand.create!(name: 'Hugo Boss')
brand_Hummer = Brand.create!(name: 'Hummer')
brand_Ice_Watch = Brand.create!(name: 'Ice-Watch')
brand_Iceberg = Brand.create!(name: 'Iceberg')
brand_Invicta = Brand.create!(name: 'Invicta')
brand_Issey_Miyake = Brand.create!(name: 'Issey Miyake')
brand_Ivanka_Trump = Brand.create!(name: 'Ivanka Trump')
brand_IWC = Brand.create!(name: 'IWC')
brand_J_Del_Pozo = Brand.create!(name: 'J.Del Pozo')
brand_J_M_Weston = Brand.create!(name: 'J.M. Weston')
brand_J_mcclintock = Brand.create!(name: 'J.mcclintock')
brand_J_p_g = Brand.create!(name: 'J.p.g.')
brand_Jacob_Co = Brand.create!(name: 'Jacob & Co.')
brand_Jacques_Bogart = Brand.create!(name: 'Jacques Bogart')
brand_Jacques_Evard = Brand.create!(name: 'Jacques Evard')
brand_Jacques_Lemans = Brand.create!(name: 'Jacques Lemans')
brand_Jaeger_LeCoultre = Brand.create!(name: 'Jaeger LeCoultre')
brand_Jaermann_and_Stubi = Brand.create!(name: 'Jaermann and Stubi')
brand_Jaguar = Brand.create!(name: 'Jaguar')
brand_JBW = Brand.create!(name: 'JBW')
brand_Jean_Patou = Brand.create!(name: 'Jean Patou')
brand_Jennifer_Aniston = Brand.create!(name: 'Jennifer Aniston')
brand_Jennifer_Lopez = Brand.create!(name: 'Jennifer Lopez')
brand_Jessica_Simpson = Brand.create!(name: 'Jessica Simpson')
brand_Jimmy_Choo = Brand.create!(name: 'Jimmy Choo')
brand_Jo_Malone = Brand.create!(name: 'Jo Malone')
brand_John_Varvatos = Brand.create!(name: 'John Varvatos')
brand_Joico = Brand.create!(name: 'Joico')
brand_Joop = Brand.create!(name: 'Joop')
brand_Joshua_and_Sons = Brand.create!(name: 'Joshua and Sons')
brand_Joshua_Sanders = Brand.create!(name: 'Joshua Sanders')
brand_Jovan = Brand.create!(name: 'Jovan')
brand_Juicy_Couture = Brand.create!(name: 'Juicy Couture')
brand_Julep = Brand.create!(name: 'Julep')
brand_Julianna_B = Brand.create!(name: 'Julianna B')
brand_Juliette_Has_A_Gun = Brand.create!(name: 'Juliette Has A Gun')
brand_Junghans = Brand.create!(name: 'Junghans')
brand_Just_Cavalli = Brand.create!(name: 'Just Cavalli')
brand_Justin_Bieber = Brand.create!(name: 'Justin Bieber')
brand_Kanon = Brand.create!(name: 'Kanon')
brand_Kate_Spade = Brand.create!(name: 'Kate Spade')
brand_Katy_Perry = Brand.create!(name: 'Katy Perry')
brand_Kenneth_Cole = Brand.create!(name: 'Kenneth Cole')
brand_Kenzo = Brand.create!(name: 'Kenzo')
brand_Kerastase = Brand.create!(name: 'Kerastase')
brand_Kiehl = Brand.create!(name: "Kiehl's")
brand_La_Perla = Brand.create!(name: 'La Perla')
brand_La_Prairie = Brand.create!(name: 'La Prairie')
brand_Lacoste = Brand.create!(name: 'Lacoste')
brand_Lagerfeld = Brand.create!(name: 'Lagerfeld')
brand_Lalique = Brand.create!(name: 'Lalique')
brand_Lamborghini = Brand.create!(name: 'Lamborghini')
brand_Lamy = Brand.create!(name: 'Lamy')
brand_Lancome = Brand.create!(name: 'Lancome')
brand_Lanvin = Brand.create!(name: 'Lanvin')
brand_Larose = Brand.create!(name: 'Larose')
brand_Laura_Ashley = Brand.create!(name: 'Laura Ashley')
brand_Laura_Mercier = Brand.create!(name: 'Laura Mercier')
brand_Linda_Farrow = Brand.create!(name: 'Linda Farrow')
brand_Liz_Claiborne = Brand.create!(name: 'Liz Claiborne')
brand_Loccitane = Brand.create!(name: 'Loccitane')
brand_Loewe = Brand.create!(name: 'Loewe')
brand_Lolita_Lempicka = Brand.create!(name: 'Lolita Lempicka')
brand_Lomani = Brand.create!(name: 'Lomani')
brand_Longchamp = Brand.create!(name: 'Longchamp')
brand_Longines = Brand.create!(name: 'Longines')
brand_Lucien_Piccard = Brand.create!(name: 'Lucien Piccard')
brand_Lucky_Brand = Brand.create!(name: 'Lucky Brand')
brand_Lulu_Guinness = Brand.create!(name: 'Lulu Guinness')
brand_Mac_Cosmetics = Brand.create!(name: 'Mac Cosmetics')
brand_Madison = Brand.create!(name: 'Madison')
brand_Maison_Kitsune = Brand.create!(name: 'Maison Kitsune')
brand_Maja = Brand.create!(name: 'Maja')
brand_Make_Up_Forever = Brand.create!(name: 'Make Up Forever')
brand_Mally = Brand.create!(name: 'Mally')
brand_Marc_by_Marc_Jacobs = Brand.create!(name: 'Marc by Marc Jacobs')
brand_Marc_Ecko = Brand.create!(name: 'Marc Ecko')
brand_Marc_Jacobs = Brand.create!(name: 'Marc Jacobs')
brand_Marco_De_Vincenzo = Brand.create!(name: 'Marco De Vincenzo')
brand_Mariah_Carey = Brand.create!(name: 'Mariah Carey')
brand_Marina_De_Bourbon = Brand.create!(name: 'Marina De Bourbon')
brand_Masaki_Matsushima = Brand.create!(name: 'Masaki Matsushima')
brand_Maserati = Brand.create!(name: 'Maserati')
brand_Mathey_Tissot = Brand.create!(name: 'Mathey-Tissot')
brand_Matrix = Brand.create!(name: 'Matrix')
brand_Matthew_Williamson = Brand.create!(name: 'Matthew Williamson')
brand_Maulijewels = Brand.create!(name: 'Maulijewels')
brand_Maurice_Lacroix = Brand.create!(name: 'Maurice Lacroix')
brand_Maybelline = Brand.create!(name: 'Maybelline')
brand_MCM = Brand.create!(name: 'MCM')
brand_Megan_Walford = Brand.create!(name: 'Megan Walford')
brand_Melissa = Brand.create!(name: 'Melissa')
brand_Miansai = Brand.create!(name: 'Miansai')
brand_Michael_Jordan = Brand.create!(name: 'Michael Jordan')
brand_Michael_Kors = Brand.create!(name: 'Michael Kors')
brand_Michaela_Buerger = Brand.create!(name: 'Michaela Buerger')
brand_Michele = Brand.create!(name: 'Michele')
brand_Mido = Brand.create!(name: 'Mido')
brand_Milus = Brand.create!(name: 'Milus')
brand_Mingo_Rad = Brand.create!(name: 'Mingo Rad')
brand_Miu_Miu = Brand.create!(name: 'Miu Miu')
brand_Miuccia_Prada = Brand.create!(name: 'Miuccia Prada')
brand_Momo_Design = Brand.create!(name: 'Momo Design')
brand_Moncler = Brand.create!(name: 'Moncler')
brand_Montale = Brand.create!(name: 'Montale')
brand_MontBlanc = Brand.create!(name: 'MontBlanc')
brand_Morgan_Paige = Brand.create!(name: 'Morgan & Paige')
brand_Moroccanoil = Brand.create!(name: 'Moroccanoil')
brand_Morphic = Brand.create!(name: 'Morphic')
brand_Moschino = Brand.create!(name: 'Moschino')
brand_Mostly_Heard_Rarely_Seen = Brand.create!(name: 'Mostly Heard Rarely Seen')
brand_Movado = Brand.create!(name: 'Movado')
brand_Mr_Monkies = Brand.create!(name: 'Mr Monkies')
brand_Mr_Jones = Brand.create!(name: 'Mr. Jones')
brand_MVMT = Brand.create!(name: 'MVMT')
brand_Narciso_Rodriguez = Brand.create!(name: 'Narciso Rodriguez')
brand_NARS = Brand.create!(name: 'NARS')
brand_Nautica = Brand.create!(name: 'Nautica')
brand_New_Balance = Brand.create!(name: 'New Balance')
brand_Nicholas_Kirkwood = Brand.create!(name: 'Nicholas Kirkwood')
brand_Nicki_Minaj = Brand.create!(name: 'Nicki Minaj')
brand_Nike = Brand.create!(name: 'Nike')
brand_Nikos_Parfums = Brand.create!(name: 'Nikos Parfums')
brand_Nina_Ricci = Brand.create!(name: 'Nina Ricci')
brand_Nixon = Brand.create!(name: 'Nixon')
brand_Nomos = Brand.create!(name: 'Nomos')
brand_Nyx = Brand.create!(name: 'Nyx')
brand_Oakley = Brand.create!(name: 'Oakley')
brand_Obaku = Brand.create!(name: 'Obaku')
brand_Oceanaut = Brand.create!(name: 'Oceanaut')
brand_Oliver_Peoples = Brand.create!(name: 'Oliver Peoples')
brand_Olivia_Burton = Brand.create!(name: 'Olivia Burton')
brand_Omega = Brand.create!(name: 'Omega')
brand_One_Direction = Brand.create!(name: 'One Direction')
brand_Oniss = Brand.create!(name: 'Oniss')
brand_Orient = Brand.create!(name: 'Orient')
brand_Oris = Brand.create!(name: 'Oris')
brand_Orlane = Brand.create!(name: 'Orlane')
brand_Oscar_De_La_Renta = Brand.create!(name: 'Oscar De La Renta')
brand_P_Mitchell = Brand.create!(name: 'P. Mitchell')
brand_Paco_Rabanne = Brand.create!(name: 'Paco Rabanne')
brand_Paloma_Picasso = Brand.create!(name: 'Paloma Picasso')
brand_Pamela_Anderson = Brand.create!(name: 'Pamela Anderson')
brand_Pandora = Brand.create!(name: 'Pandora')
brand_Panerai = Brand.create!(name: 'Panerai')
brand_Parfums_Gres = Brand.create!(name: 'Parfums Gres')
brand_Parfums_Watt = Brand.create!(name: 'Parfums Watt')
brand_Paris_Bleu = Brand.create!(name: 'Paris Bleu')
brand_Paris_Hilton = Brand.create!(name: 'Paris Hilton')
brand_Parmigiani_Fleurier = Brand.create!(name: 'Parmigiani Fleurier')
brand_Pascal_Morabito = Brand.create!(name: 'Pascal Morabito')
brand_Patek_Philippe = Brand.create!(name: 'Patek Philippe')
brand_Paul_Mitchell = Brand.create!(name: 'Paul Mitchell')
brand_Paul_Picot = Brand.create!(name: 'Paul Picot')
brand_Paul_Sebastian = Brand.create!(name: 'Paul Sebastian')
brand_Paul_Smith = Brand.create!(name: 'Paul Smith')
brand_Paw_Cbd = Brand.create!(name: 'Paw Cbd')
brand_Penhaligons = Brand.create!(name: 'Penhaligons')
brand_Perrelet = Brand.create!(name: 'Perrelet')
brand_Perry_Ellis = Brand.create!(name: 'Perry Ellis')
brand_Persol = Brand.create!(name: 'Persol')
brand_Philip_Stein = Brand.create!(name: 'Philip Stein')
brand_Phyto = Brand.create!(name: 'Phyto')
brand_Piaget = Brand.create!(name: 'Piaget')
brand_Picasso_and_Co = Brand.create!(name: 'Picasso and Co')
brand_Pierre_Cardin = Brand.create!(name: 'Pierre Cardin')
brand_Pierre_Corthay = Brand.create!(name: 'Pierre Corthay')
brand_Pierre_Dinan = Brand.create!(name: 'Pierre Dinan')
brand_Pierre_Hardy = Brand.create!(name: 'Pierre Hardy')
brand_Pitbull = Brand.create!(name: 'Pitbull')
brand_Polaroid = Brand.create!(name: 'Polaroid')
brand_Porsche_Design = Brand.create!(name: 'Porsche Design')
brand_Prada = Brand.create!(name: 'Prada')
brand_Prescriptives = Brand.create!(name: 'Prescriptives')
brand_Pretty_Ballerinas = Brand.create!(name: 'Pretty Ballerinas')
brand_Puig = Brand.create!(name: 'Puig')
brand_Pulsar = Brand.create!(name: 'Pulsar')
brand_Puma = Brand.create!(name: 'Puma')
brand_Pur = Brand.create!(name: 'Pur')
brand_Pureology = Brand.create!(name: 'Pureology')
brand_Quantum = Brand.create!(name: 'Quantum')
brand_R_Copenhagen = Brand.create!(name: 'R.Copenhagen')
brand_Rado = Brand.create!(name: 'Rado')
brand_Ralph_Lauren = Brand.create!(name: 'Ralph Lauren')
brand_Rapport_London = Brand.create!(name: 'Rapport London')
brand_Ray_ban = Brand.create!(name: 'Ray-ban')
brand_Raymond_Weil = Brand.create!(name: 'Raymond Weil')
brand_Rebecca_Minkoff = Brand.create!(name: 'Rebecca Minkoff')
brand_Rebel = Brand.create!(name: 'Rebel')
brand_Red_line = Brand.create!(name: 'Red line')
brand_Reebok = Brand.create!(name: 'Reebok')
brand_Reign = Brand.create!(name: 'Reign')
brand_Remy_Latour = Brand.create!(name: 'Remy Latour')
brand_Rene_Caovilla = Brand.create!(name: 'Rene Caovilla')
brand_Revlon = Brand.create!(name: 'Revlon')
brand_Revue_Thommen = Brand.create!(name: 'Revue Thommen')
brand_Riccova = Brand.create!(name: 'Riccova')
brand_Richard_Mille = Brand.create!(name: 'Richard Mille')
brand_Rihanna = Brand.create!(name: 'Rihanna')
brand_Rimmel_London = Brand.create!(name: 'Rimmel London')
brand_Roamer = Brand.create!(name: 'Roamer')
brand_Roberto_Cavalli = Brand.create!(name: 'Roberto Cavalli')
brand_Rochas = Brand.create!(name: 'Rochas')
brand_Roger_Dubuis = Brand.create!(name: 'Roger Dubuis')
brand_Rolex = Brand.create!(name: 'Rolex')
brand_Romain_Jerome = Brand.create!(name: 'Romain Jerome')
brand_Ron_Marone = Brand.create!(name: 'Ron Marone')
brand_Ruifier = Brand.create!(name: 'Ruifier')
brand_Rupert_Sanderson = Brand.create!(name: 'Rupert Sanderson')
brand_S_Coifman = Brand.create!(name: 'S Coifman')
brand_S_T_Dupont = Brand.create!(name: 'S.T. Dupont')
brand_Saint_Honore = Brand.create!(name: 'Saint Honore')
brand_Saint_Laurent = Brand.create!(name: 'Saint Laurent')
brand_Salvador_Dali = Brand.create!(name: 'Salvador Dali')
brand_Salvatore_Ferragamo = Brand.create!(name: 'Salvatore Ferragamo')
brand_Sam_Edelman = Brand.create!(name: 'Sam Edelman')
brand_Santoni = Brand.create!(name: 'Santoni')
brand_Sapphire_Tungsten = Brand.create!(name: 'Sapphire Tungsten')
brand_Sarah_B = Brand.create!(name: 'Sarah B.')
brand_Sarah_Jessica_Parker = Brand.create!(name: 'Sarah Jessica Parker')
brand_Scalpmaster = Brand.create!(name: 'Scalpmaster')
brand_Schutz = Brand.create!(name: 'Schutz')
brand_Sean_John = Brand.create!(name: 'Sean John')
brand_Sebastian = Brand.create!(name: 'Sebastian')
brand_Seiko = Brand.create!(name: 'Seiko')
brand_Senscience = Brand.create!(name: 'Senscience')
brand_Sergio_Rossi = Brand.create!(name: 'Sergio Rossi')
brand_Sevenfriday = Brand.create!(name: 'Sevenfriday')
brand_Shakira = Brand.create!(name: 'Shakira')
brand_Shield = Brand.create!(name: 'Shield')
brand_Shiseido = Brand.create!(name: 'Shiseido')
brand_Simplify = Brand.create!(name: 'Simplify')
brand_Sixty_One = Brand.create!(name: 'Sixty One')
brand_Skagen = Brand.create!(name: 'Skagen')
brand_Smashbox = Brand.create!(name: 'Smashbox')
brand_Smythson = Brand.create!(name: 'Smythson')
brand_So = Brand.create!(name: 'So...?')
brand_Sophia_Webster = Brand.create!(name: 'Sophia Webster')
brand_Sophie_and_Freda = Brand.create!(name: 'Sophie and Freda')
brand_Spectrum = Brand.create!(name: 'Spectrum')
brand_St_Dupont = Brand.create!(name: 'St Dupont')
brand_StarFive = Brand.create!(name: 'StarFive')
brand_Steinhausen = Brand.create!(name: 'Steinhausen')
brand_Stella_Luna = Brand.create!(name: 'Stella Luna')
brand_Stella_McCartney = Brand.create!(name: 'Stella McCartney')
brand_Stetson = Brand.create!(name: 'Stetson')
brand_Stila = Brand.create!(name: 'Stila')
brand_Strivectin = Brand.create!(name: 'Strivectin')
brand_Stuart_Weitzman = Brand.create!(name: 'Stuart Weitzman')
brand_Suecomma_Bonnie = Brand.create!(name: 'Suecomma Bonnie')
brand_Suunto = Brand.create!(name: 'Suunto')
brand_Swarovski = Brand.create!(name: 'Swarovski')
brand_Swatch = Brand.create!(name: 'Swatch')
brand_Swiss_Legend = Brand.create!(name: 'Swiss Legend')
brand_Swiss_Military = Brand.create!(name: 'Swiss Military')
brand_TAG_Heuer = Brand.create!(name: 'TAG Heuer')
brand_Tarte = Brand.create!(name: 'Tarte')
brand_Taxi = Brand.create!(name: 'Taxi')
brand_TechnoMarine = Brand.create!(name: 'TechnoMarine')
brand_The_Art_of_Scribble = Brand.create!(name: 'The Art of Scribble')
brand_The_Balm = Brand.create!(name: 'The Balm')
brand_The_Color_Institute = Brand.create!(name: 'The Color Institute')
brand_The_Very_Warm = Brand.create!(name: 'The Very Warm')
brand_Thierry_Mugler = Brand.create!(name: 'Thierry Mugler')
brand_Thomas_Earnshaw = Brand.create!(name: 'Thomas Earnshaw')
brand_Tiffany = Brand.create!(name: 'Tiffany')
brand_Tigi = Brand.create!(name: 'Tigi')
brand_Timex = Brand.create!(name: 'Timex')
brand_Tissot = Brand.create!(name: 'Tissot')
brand_Tods = Brand.create!(name: 'Tods')
brand_Tom_Ford = Brand.create!(name: 'Tom Ford')
brand_Tommy_Bahama = Brand.create!(name: 'Tommy Bahama')
brand_Tommy_Hilfiger = Brand.create!(name: 'Tommy Hilfiger')
brand_Toms = Brand.create!(name: 'Toms')
brand_Too_Faced = Brand.create!(name: 'Too Faced')
brand_Tool_Kit = Brand.create!(name: 'Tool Kit')
brand_Tory_Burch = Brand.create!(name: 'Tory Burch')
brand_Tous = Brand.create!(name: 'Tous')
brand_TreEsse = Brand.create!(name: 'TreEsse')
brand_Tudor = Brand.create!(name: 'Tudor')
brand_Tumi = Brand.create!(name: 'Tumi')
brand_Tuscan_Hills = Brand.create!(name: 'Tuscan Hills')
brand_TW_Steel = Brand.create!(name: 'TW Steel')
brand_UGG = Brand.create!(name: 'UGG')
brand_Ulysse_Nardin = Brand.create!(name: 'Ulysse Nardin')
brand_Ungaro = Brand.create!(name: 'Ungaro')
brand_Urban_Decay = Brand.create!(name: 'Urban Decay')
brand_Usher_Raymond = Brand.create!(name: 'Usher Raymond')
brand_Vacheron_Constantin = Brand.create!(name: 'Vacheron Constantin')
brand_Valentino = Brand.create!(name: 'Valentino')
brand_Van_Cleef = Brand.create!(name: 'Van Cleef')
brand_Vans = Brand.create!(name: 'Vans')
brand_Vedi_Vero = Brand.create!(name: 'Vedi Vero')
brand_Ventura = Brand.create!(name: 'Ventura')
brand_Vera_Wang = Brand.create!(name: 'Vera Wang')
brand_Versace = Brand.create!(name: 'Versace')
brand_Versus = Brand.create!(name: 'Versus')
brand_Vicky_Tiel = Brand.create!(name: 'Vicky Tiel')
brand_Victoria_Beckham = Brand.create!(name: 'Victoria Beckham')
brand_Victorinox_Swiss_Army= Brand.create!(name: 'Victorinox Swiss Army')
brand_Vidal_Sassoon = Brand.create!(name: 'Vidal Sassoon')
brand_Vince_Camuto = Brand.create!(name: 'Vince Camuto')
brand_Vito_Ballare = Brand.create!(name: 'Vito Ballare')
brand_Vulcain = Brand.create!(name: 'Vulcain')
brand_Waldhoff = Brand.create!(name: 'Waldhoff')
brand_Wella = Brand.create!(name: 'Wella')
brand_White_Shoulders= Brand.create!(name: 'White Shoulders')
brand_William_L_1985= Brand.create!(name: 'William L 1985')
brand_Wirtz = Brand.create!(name: 'Wirtz')
brand_Wolf = Brand.create!(name: 'Wolf')
brand_World_Of_Watches = Brand.create!(name: 'World Of Watches')
brand_Xoxo = Brand.create!(name: 'Xoxo')
brand_Yazbukey = Brand.create!(name: 'Yazbukey')
brand_Yves_De_Sistelle = Brand.create!(name: 'Yves De Sistelle')
brand_Zegna = Brand.create!(name: 'Zegna')
brand_Zenith = Brand.create!(name: 'Zenith')
brand_Zippo = Brand.create!(name: 'Zippo')


# :description, :photos, :price, :gender_id, :brand_id, :color_id, :seller_id
item_1 = Item.new
item_1.description = "Men's Pro Diver Master of The Oceans Stainless Steel Gold-tone Dial"
item_1.price = 62.98
item_1.gender = gender_men
item_1.brand = brand_Invicta
item_1.color = col_gold_tone
item_1.seller = user_1
item_1.photos = ["https://www.worldofwatches.com/media/catalog/product/cache/cd4ffe7bf38b59f96d8178d3c42277fa/m/e/mens-the-minimalist-leather-white-dial-fs5371_5.jpg",
                  "https://www.worldofwatches.com/media/catalog/product/cache/cd4ffe7bf38b59f96d8178d3c42277fa/m/e/mens-classic-sandstone-leather-gunmetal-dial-mm01gml_1.jpg",
                  "https://www.worldofwatches.com/media/catalog/product/cache/cd4ffe7bf38b59f96d8178d3c42277fa/m/e/mens-s1-rally-stainless-steel-green-dial-28869_1.jpg",
                "https://www.worldofwatches.com/media/catalog/product/cache/cd4ffe7bf38b59f96d8178d3c42277fa/m/e/mens-pro-diver-master-of-the-oceans-stainless-steel-goldtone-dial-30485_3.jpg"]

item_1.save!


item_2 = Item.new
item_2.description = "Men's The Minimalist Leather White Dial"
item_2.price = 70.98
item_2.gender = gender_men
item_2.brand = brand_Fossil
item_2.color = col_white
item_2.seller = user_1
item_2.photos = ["https://www.worldofwatches.com/media/catalog/product/cache/cd4ffe7bf38b59f96d8178d3c42277fa/m/e/mens-the-minimalist-leather-white-dial-fs5371_5.jpg",
                  "https://www.worldofwatches.com/media/catalog/product/cache/cd4ffe7bf38b59f96d8178d3c42277fa/m/e/mens-classic-sandstone-leather-gunmetal-dial-mm01gml_1.jpg",
                  "https://www.worldofwatches.com/media/catalog/product/cache/cd4ffe7bf38b59f96d8178d3c42277fa/m/e/mens-s1-rally-stainless-steel-green-dial-28869_1.jpg",
                "https://www.worldofwatches.com/media/catalog/product/cache/cd4ffe7bf38b59f96d8178d3c42277fa/m/e/mens-pro-diver-master-of-the-oceans-stainless-steel-goldtone-dial-30485_3.jpg"]
item_2.save!


item_3 = Item.new
item_3.description = "Men's Classic Sandstone Leather Gunmetal Dial"
item_3.price = 73.98
item_3.gender = gender_men
item_3.brand = brand_MVMT
item_3.color = col_gunmetal
item_3.seller = user_1
item_3.photos = ["https://www.worldofwatches.com/media/catalog/product/cache/cd4ffe7bf38b59f96d8178d3c42277fa/m/e/mens-the-minimalist-leather-white-dial-fs5371_5.jpg",
                  "https://www.worldofwatches.com/media/catalog/product/cache/cd4ffe7bf38b59f96d8178d3c42277fa/m/e/mens-classic-sandstone-leather-gunmetal-dial-mm01gml_1.jpg",
                  "https://www.worldofwatches.com/media/catalog/product/cache/cd4ffe7bf38b59f96d8178d3c42277fa/m/e/mens-s1-rally-stainless-steel-green-dial-28869_1.jpg",
                "https://www.worldofwatches.com/media/catalog/product/cache/cd4ffe7bf38b59f96d8178d3c42277fa/m/e/mens-pro-diver-master-of-the-oceans-stainless-steel-goldtone-dial-30485_3.jpg"]

item_3.save!

item_4 = Item.new
item_4.description = "Men's S1 Rally Stainless Steel Green Dial"
item_4.price = 152.98
item_4.gender = gender_men
item_4.brand = brand_Invicta
item_4.color = col_steel_green
item_4.seller = user_1
item_4.photos = ["https://www.worldofwatches.com/media/catalog/product/cache/cd4ffe7bf38b59f96d8178d3c42277fa/m/e/mens-the-minimalist-leather-white-dial-fs5371_5.jpg",
                  "https://www.worldofwatches.com/media/catalog/product/cache/cd4ffe7bf38b59f96d8178d3c42277fa/m/e/mens-classic-sandstone-leather-gunmetal-dial-mm01gml_1.jpg",
                  "https://www.worldofwatches.com/media/catalog/product/cache/cd4ffe7bf38b59f96d8178d3c42277fa/m/e/mens-s1-rally-stainless-steel-green-dial-28869_1.jpg",
                "https://www.worldofwatches.com/media/catalog/product/cache/cd4ffe7bf38b59f96d8178d3c42277fa/m/e/mens-pro-diver-master-of-the-oceans-stainless-steel-goldtone-dial-30485_3.jpg"]

item_4.save!



# ITEM 1 REVIEWS

review_item_1_1 = Review.new
review_item_1_1.body = "I bought this for my husband. He was absolutely thrilled! He loved the fact that it had the date. The band is adjustable. I like the fact that the watch appears durable and is water resistant. The price is very reasonable too. I am a prime member and this watch was delivered in two days and was packaged in a nice square box. I had no problems with the order or delivery. I highly recommend this watch."
review_item_1_1.rank = 4
review_item_1_1.author_id = user_11.id
review_item_1_1.item_id = item_1.id
review_item_1_1.save!

review_item_1_2 = Review.new
review_item_1_2.body = "I immediately started wearing the watch shortly after receiving it. I love how weightless it feels on my wrist. I love the color combination I've picked. The leather feels really good. Looking forward to a illuminated watch."
review_item_1_2.rank = 5
review_item_1_2.author_id = user_10.id
review_item_1_2.item_id = item_1.id
review_item_1_2.save!

review_item_1_3 = Review.new
review_item_1_3.body = "I am a large bone woman with a 8.5” circumference wrist. I also react to nickel so need a leather band. Most women’s watches fit up to 7.5” wrist. This watch has long enough band (nearly 10”) and rose gold is very attractive. I wish there was black band option. Please consider offering either a rectangle and/or oval shape face too. I realize watch is advertised as a man’s watch but it easily is unisex. Watch has kept accurate time. For cost, this is an exceptional quality watch. Highly recommend & would definitely buy again."
review_item_1_3.rank = 5
review_item_1_3.author_id = user_13.id
review_item_1_3.item_id = item_1.id
review_item_1_3.save!


# ITEM 2 REVIEWS
review_item_2_1 = Review.new
review_item_2_1.body = "I normally don't leave reviews but the value for the price cannot be beaten. I was a little hesitant at first after seeing only a few reviews and almost all of them 5 star but I'm adding mine too that list. The watch looks and functions exactly as described. Seems to be made of solid materials. The band really is genuine leather. Just one bit of advice when setting the date be sure to read the instructions."
review_item_2_1.rank = 4
review_item_2_1.author_id = user_14.id
review_item_2_1.item_id = item_2.id
review_item_2_1.save!

review_item_2_2 = Review.new
review_item_2_2.body = "The delivery: Prompt and well packaged. The watch: An inexpensive watch that is large faced but slim. I really like that it is not bulky and that I can read the analog time at a glance. However, the calendar date window is extremely small and even with my bifocals, I have a hard time reading it. The watch band: Just a plain black leather band. Nothing to write home about but does what it's designed to do and that is - hold the watch on the wrist. I'm not use to a wrist watch so there is some getting use to. However, as with most products made of leather, it takes awhile to break in but are usually the most comfortable in the long run. In retrospect: I would have preferred a self-winding watch with luminescent numbers/hands but, a quartz watch with a big face will do quiet nicely particularly at the price I paid."
review_item_2_2.rank = 4
review_item_2_2.author_id = user_9.id
review_item_2_2.item_id = item_2.id
review_item_2_2.save!

review_item_2_3 = Review.new
review_item_2_3.body = "Love the blue hue, but the date! You need X-ray vision to see it! Even my children, with far better eyes than mine, can barely see it (or not see it at all). Otherwise, it works well and looks lovely!"
review_item_2_3.rank = 5
review_item_2_3.author_id = user_2.id
review_item_2_3.item_id = item_2.id
review_item_2_3.save!



# REVIEWS ON ITEM 3

review_item_3_1 = Review.new
review_item_3_1.body = "I normally don't leave reviews but the value for the price cannot be beaten. I was a little hesitant at first after seeing only a few reviews and almost all of them 5 star but I'm adding mine too that list. The watch looks and functions exactly as described. Seems to be made of solid materials. The band really is genuine leather. Just one bit of advice when setting the date be sure to read the instructions."
review_item_3_1.rank = 4
review_item_3_1.author_id = user_6.id
review_item_3_1.item_id = item_3.id
review_item_3_1.save!

review_item_3_2 = Review.new
review_item_3_2.body = "It's actually elegant in it's simplicity. It makes a great dress watch. Not flashy, but clean. I personally love the slim profile, my dress shirt cuffs don't get hung which is what really prompted me to purchase this watch. It appears to keep time very well. I've had it for a week and worn it daily, so far so good. I bought it because in my middle age I refuse to blow hundreds on an accessory. It just bugs me. I have had some decent watches in the past; Bulova, Seiko, Citizen, ect... and other than the shimmer of new when first purchased, after the new wears off they all go in the same drawer with the cheap watches I have purchased. For the price, I am very happy with my purchase."
review_item_3_2.rank = 4
review_item_3_2.author_id = user_8.id
review_item_3_2.item_id = item_3.id
review_item_3_2.save!

review_item_3_3 = Review.new
review_item_3_3.body = "Just the right size and its even nicer than the pic"
review_item_3_3.rank = 5
review_item_3_3.author_id = user_7.id
review_item_3_3.item_id = item_3.id
review_item_3_3.save!

# REVIEWS ON ITEM 4

review_item_4_1 = Review.new
review_item_4_1.body = "In terms of features, it is a basic analog watch with no lights (not even glow in the dark) with an accurate seconds counter section. The overall watch feels balanced thanks to the metal material and very slim design. The style is very sleek and if you are a fan of matte black you will love this. However, it can get a bit hard to read at night because the watch face itself is so dark. Use the included wrench tool to OPEN and CLOSE the strap lock. I tried pushing the lock down with my fingers and it is almost impossible, use the included tool! The packaging was very good as the entire watch was well wrapped to avoid damage. Overall, highly recommended for a basic professional"
review_item_4_1.rank = 4
review_item_4_1.author_id = user_11.id
review_item_4_1.item_id = item_4.id
review_item_4_1.save!

review_item_4_2 = Review.new
review_item_4_2.body = "I've been eyeballing this watch for about a month and my fiance surprised me with it this past week as an engagement gift. I loved the sleek, flat-like design of it which is what originally attracted me to it. I liked both the black watch with blue hands and the silver watch with silver hands, my fiance purchased the black one. It's professional, yet modern looking. The minute hands are easy to read and there is a smaller seconds hand which I didn't notice when I was looking at them online, but glad it has one. The watch is adjustable to many wrist sizes and I've gotten a few compliments on it already at work and have only worn it for three days. I would definitely purchase this watch again in the silver (in fact.. I might right now haha)."
review_item_4_2.rank = 4
review_item_4_2.author_id = user_14.id
review_item_4_2.item_id = item_4.id
review_item_4_2.save!

review_item_4_3 = Review.new
review_item_4_3.body = "It is gorgeous. There is is something formal and rich about its design, yet minimalistic. The package it came in is fancy; a leather like case, with a note asking, simply, Happy? Yes. Very. Thank you."
review_item_4_3.rank = 5
review_item_4_3.author_id = user_16.id
review_item_4_3.item_id = item_4.id
review_item_4_3.save!