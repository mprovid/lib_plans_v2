// Find callnumbers in maps, JSON 
// M. Providenti, June 2018
// finds first and second letter of callnumber including split shelves

$(document).ready(function () {
    $("#loc1").change(function () {
        var val = $(this).val();
        if (val == "A") {
            $("#loc2").html("<option data-classification=' ' value='_'>- All -</option><option data-classification=': Collections, Series, Collected Works' value='C'>C</option><option data-classification=': Encyclopedias' value='E'>E</option><option data-classification=': Dictionaries and General Reference' value='G'>G</option><option data-classification=': Indexes' value='I'>I</option><option data-classification=': Museums, Collectors and Collecting' value='M'>M</option><option data-classification=': Periodicals' value='P'>P</option><option data-classification=': Academies and Learned Societies' value='S'>S</option><option data-classification=': Yearbooks, Almanacs, Directories' value='Y'>Y</option><option data-classification=': History of Scholarship and Learning' value='Z'>Z</option>");
        } else if (val == "B") {
            $("#loc2").html("<option data-classification=' ' value='_'>- All -</option><option data-classification=' ' value=''> </option><option data-classification=': Logic' value='C'>C</option><option data-classification=': Speculative Philosophy' value='D'>D</option><option data-classification=': Psychology' value='F'>F</option><option data-classification=': Aesthetics' value='H'>H</option><option data-classification=': Ethics' value='J'>J</option><option data-classification=': Religions, Mythology, Rationalism' value='L'>L</option><option data-classification=': Judaism' value='M'>M</option><option data-classification=': Islam, Bahaism, Theosophy' value='P'>P</option><option data-classification=': Buddhism' value='Q'>Q</option><option data-classification=': Christianity' value='R'>R</option><option data-classification=': The Bible' value='S'>S</option><option data-classification=': Doctrinal Theology' value='T'>T</option><option data-classification=': Practical Theology' value='V'>V</option><option data-classification=': Christian Denominations' value='X'>X</option>");
        } else if (val == "C") {
            $("#loc2").html("<option data-classification=' ' value='_'>- All -</option><option data-classification='' value=''> </option><option data-classification=': History of Civilization' value='B'>B</option><option data-classification=': Archaeology' value='C'>C</option><option data-classification=': Diplomatics. Archives. Seals' value='D'>D</option><option data-classification=': Technical Chronology. Calendar' value='E'>E</option><option data-classification=': Numismatics' value='J'>J</option><option data-classification=': Inscriptions. Epigraphy' value='N'>N</option><option data-classification=': Heraldry' value='R'>R</option><option data-classification=': Genealogy' value='S'>S</option><option data-classification=': Biography' value='T'>T</option>");
        } else if (val == "D") {
            $("#loc2").html("<option data-classification=' ' value='_'>- All -</option><option data-classification='' value=''> </option><option data-classification=': Great Britain' value='A'>A</option><option data-classification=': Central Europe' value='AW'>AW</option><option data-classification=': Austria – Liechtenstein – Hungary – Czechoslovakia' value='B'>B</option><option data-classification=': France – Andorra – Monaco' value='C'>C</option><option data-classification=': Germany' value='D'>D</option><option data-classification=': Greco-Roman World' value='E'>E</option><option data-classification=': Greece' value='F'>F</option><option data-classification=': Italy – Malta' value='G'>G</option><option data-classification=': Low Countries – Benelux Countries' value='H'>H</option><option data-classification=': Netherlands (Holland)' value='J'>J</option><option data-classification=': Eastern Europe (General)' value='JK'>JK</option><option data-classification=': Russia. Soviet Union. Former Soviet Republics – Poland' value='K'>K</option><option data-classification=': Northern Europe. Scandinavia' value='L'>L</option><option data-classification=': Spain – Portugal' value='P'>P</option><option data-classification=': Switzerland' value='Q'>Q</option><option data-classification=': Balkan Peninsula' value='R'>R</option><option data-classification=': Asia' value='S'>S</option><option data-classification=': Africa' value='T'>T</option><option data-classification=': Oceania (South Seas)' value='U'>U</option><option data-classification=': History of the Romani people' value='X'>X</option>");
        } else if (val == "E") {
            $("#loc2").html("<option data-classification='' value=''>- All -</option>");
        } else if (val == "F") {
            $("#loc2").html("<option data-classification='' value=''>- All -</option>");
        } else if (val == "G") {
            $("#loc2").html("<option data-classification=' ' value='_'>- All -</option><option data-classification=': Geography (General). Atlases. Maps' value=''> </option><option data-classification=': Mathematical geography. Cartography' value='A'>A</option><option data-classification=': Physical geography' value='B'>B</option><option data-classification=': Oceanography' value='C'>C</option><option data-classification=': Environmental Sciences' value='E'>E</option><option data-classification=': Human ecology. Anthropogeography' value='F'>F</option><option data-classification=': Anthropology' value='N'>N</option><option data-classification=': Folklore' value='R'>R</option><option data-classification=': Manners and customs (General)' value='T'>T</option><option data-classification=': Recreation. Leisure' value='V'>V</option>");
        } else if (val == "H") {
            $("#loc2").html("<option data-classification=' ' value='_'>- All -</option><option data-classification=': Social sciences (General)' value=''> </option><option data-classification=': Statistics' value='A'>A</option><option data-classification=': Economic theory. Demography' value='B'>B</option><option data-classification=': Economic history and conditions' value='C'>C</option><option data-classification=': Industries. Land use. Labor' value='D'>D</option><option data-classification=': Transportation and communications' value='E'>E</option><option data-classification=': Commerce' value='F'>F</option><option data-classification=': Finance' value='G'>G</option><option data-classification=': Public finance' value='J'>J</option><option data-classification=': Sociology (General)' value='M'>M</option><option data-classification=': Social history and conditions. Social problems. Social reform' value='N'>N</option><option data-classification=': The family. Marriage, Women and Sexuality' value='Q'>Q</option><option data-classification=': Societies: secret, benevolent, etc.' value='S'>S</option><option data-classification=': Communities. Classes. Races' value='T'>T</option><option data-classification=': Social pathology. Social and public welfare. Criminology' value='V'>V</option><option data-classification=': Socialism. Communism. Anarchism' value='X'>X</option>");
        } else if (val == "J") {
            $("#loc2").html("<option data-classification=': ' value='_'>- All -</option><option data-classification=': General legislative and executive papers' value=''> </option><option data-classification=': Political science (General)' value='A'>A</option><option data-classification=': Political theory' value='C'>C</option><option data-classification=': Political institutions and public administration' value='F'>F</option><!-- option data-classification=': Political institutions and public administration (North America)' value='J'>J</option --><option data-classification=': Political institutions and public administration (United States)' value='K'>K</option><option data-classification=': Political institutions and public administration (Canada, Latin America, etc.)' value='L'>L</option><option data-classification=': Political institutions and public administration (Europe)' value='N'>N</option><option data-classification=': Political institutions and public administration (Asia, Africa, Australia, Pacific Area, etc.)' value='Q'>Q</option><option data-classification=': Local government. Municipal government' value='S'>S</option><option data-classification=': Colonies and colonization. Emigration and immigration. International migration' value='V'>V</option><option data-classification=': International law, see JZ and KZ (obsolete)' value='X'>X</option><option data-classification=': International relations' value='Z'>Z</option>");
        } else if (val == "K") {
            $("#loc2").html("<option data-classification=' ' value='_'>- All -</option><option data-classification=': Law in general. Comparative and uniform law. Jurisprudence' value=''> </option><option data-classification=': Religious law in general. Comparative religious law. Jurisprudence' value='B'>B</option><option data-classification=': United Kingdom and Ireland' value='D'>D</option><option data-classification=': America. North America' value='D'>DZ</option><option data-classification=': Canada' value='E'>E</option><option data-classification=': United States' value='F'>F</option><option data-classification=': Latin America – Mexico and Central America – West Indies. Caribbean area' value='G'>G</option><option data-classification=': KH – South America' value='H'>H</option><option data-classification=': Europe' value='J'>J</option><option data-classification=': Europe' value='K'>K</option><option data-classification=': Asia and Eurasia, Africa, Pacific Area, and Antarctica' value='L'>L</option><option data-classification=': Asia and Eurasia, Africa, Pacific Area, and Antarctica' value='M'>M</option><option data-classification=': Asia and Eurasia, Africa, Pacific Area, and Antarctica' value='N'>N</option><option data-classification=': Asia and Eurasia, Africa, Pacific Area, and Antarctica' value='P'>P</option><option data-classification=': Asia and Eurasia, Africa, Pacific Area, and Antarctica' value='Q'>Q</option><option data-classification=': Asia and Eurasia, Africa, Pacific Area, and Antarctica' value='R'>R</option><option data-classification=': Asia and Eurasia, Africa, Pacific Area, and Antarctica' value='S'>S</option><option data-classification=': Asia and Eurasia, Africa, Pacific Area, and Antarctica' value='T'>T</option><option data-classification=': Law of Australia and New Zealand' value='U'>U</option><option data-classification=': Law of nations' value='Z'>Z</option>");
        } else if (val == "L") {
            $("#loc2").html("<option data-classification=' ' value='_'>- All -</option><option data-classification=': Education (General)' value=''> </option><option data-classification=': History of education' value='A'>A</option><option data-classification=': Theory and practice of education' value='B'>B</option><option data-classification=': Special aspects of education' value='C'>C</option><option data-classification=': Individual institutions – United States' value='D'>D</option><option data-classification=': Individual institutions – America (except United States)' value='E'>E</option><option data-classification=': Individual institutions – Europe' value='F'>F</option><option data-classification=': Individual institutions – Asia, Africa, Indian Ocean islands, Australia, New Zealand, Pacific islands' value='G'>G</option><option data-classification=': College and school magazines and papers' value='H'>H</option><option data-classification=': Student fraternities and societies, United States' value='J'>J</option><option data-classification=': Textbooks' value='T'>T</option>");
        } else if (val == "M") {
            $("#loc2").html("<option data-classification=' ' value='_'>- All -</option><option data-classification=': Music' value=''> </option><option data-classification=': Literature on music' value='L'>L</option><option data-classification=': Instruction and study' value='T'>T</option>");
        } else if (val == "N") {
            $("#loc2").html("<option data-classification=' ' value='_'>- All -</option><option data-classification=': Visual arts' value=''> </option><option data-classification=': Architecture' value='A'>A</option><option data-classification=': Sculpture' value='B'>B</option><option data-classification=': Drawing. Design. Illustration' value='C'>C</option><option data-classification=': Painting' value='D'>D</option><option data-classification=': Print media' value='E'>E</option><option data-classification=': Decorative arts' value='K'>K</option><option data-classification=': Arts in general' value='X'>X</option>");
        } else if (val == "P") {
            $("#loc2").html("<option data-classification=' ' value='_'>- All -</option><option data-classification=': Philology. Linguistics' value=''> </option><option data-classification=': Greek language and literature. Latin language and literature' value='A'>A</option><option data-classification=': Modern languages. Celtic languages and literature' value='B'>B</option><option data-classification=': Romanic languages' value='C'>C</option><option data-classification=': Germanic languages. Scandinavian languages' value='D'>D</option><option data-classification=': English language' value='E'>E</option><option data-classification=': West Germanic languages' value='F'>F</option><option data-classification=': Slavic languages and literatures. Baltic languages. Albanian language' value='G'>G</option><option data-classification=': Uralic languages. Basque language' value='H'>H</option><option data-classification=': Oriental languages and literatures' value='J'>J</option><option data-classification=': Indo-Iranian languages and literatures' value='K'>K</option><option data-classification=': Languages and literatures of Eastern Asia, Africa, Oceania' value='L'>L</option><option data-classification=': Hyperborean, Native American, and artificial languages' value='M'>M</option><option data-classification=': Literature (General)' value='N'>N</option><option data-classification=': French literature – Italian literature – Spanish literature – Portuguese literature' value='Q'>Q</option><option data-classification=': English literature' value='R'>R</option><option data-classification=': American literature' value='S'>S</option><option data-classification=': German literature – Dutch literature – Flemish literature since 1830 – Afrikaans literature -Scandinavian literature – Old Norse literature: Old Icelandic and Old Norwegian – Modern Icelandic literature – Faroese literature – Danish literature – Norwegian literature – Swedish literature' value='T'>T</option><option data-classification=': Fiction and juvenile belles lettres' value='Z'>Z</option>");
        } else if (val == "Q") {
            $("#loc2").html("<option data-classification=' ' value='_'>- All -</option><option data-classification=': Science (General)' value=''> </option><option data-classification=': Mathematics' value='A'>A</option><option data-classification=': Astronomy' value='B'>B</option><option data-classification=': Physics' value='C'>C</option><option data-classification=': Chemistry' value='D'>D</option><option data-classification=': Geology' value='E'>E</option><option data-classification=': Natural history – Biology' value='H'>H</option><option data-classification=': Botany' value='K'>K</option><option data-classification=': Zoology' value='L'>L</option><option data-classification=': Human anatomy' value='M'>M</option><option data-classification=': Physiology' value='P'>P</option><option data-classification=': Microbiology' value='R'>R</option>");
        } else if (val == "R") {
            $("#loc2").html("<option data-classification=' ' value='_'>- All -</option><option data-classification=': Medicine (General)' value=''> </option><option data-classification=': Public aspects of medicine' value='A'>A</option><option data-classification=': Pathology' value='B'>B</option><option data-classification=': Internal medicine' value='C'>C</option><option data-classification=': Surgery' value='D'>D</option><option data-classification=': Ophthalmology' value='E'>E</option><option data-classification=': Otorhinolaryngology' value='F'>F</option><option data-classification=': Gynecology and Obstetrics' value='G'>G</option><option data-classification=': Pediatrics' value='J'>J</option><option data-classification=': Dentistry' value='K'>K</option><option data-classification=': Dermatology' value='L'>L</option><option data-classification=': Therapeutics. Pharmacology' value='M'>M</option><option data-classification=': Pharmacy and materia medica' value='S'>S</option><option data-classification=': Nursing' value='T'>T</option><option data-classification=': Botanic, Thomsonian, and Eclectic medicine' value='V'>V</option><option data-classification=': Homeopathy' value='X'>X</option><option data-classification=': Other systems of medicine' value='Z'>Z</option>");
        } else if (val == "S") {
            $("#loc2").html("<option data-classification=' ' value='_'>- All -</option><option data-classification=': Agriculture (General)' value=' '> </option><option data-classification=': Horticulture. Plant propagation. Plant breeding' value='B'>B</option><option data-classification=': Forestry. Arboriculture. Silviculture' value='D'>D</option><option data-classification=': Animal husbandry. Animal science' value='F'>F</option><option data-classification=': Aquaculture. Fisheries. Angling' value='H'>H</option><option data-classification=': Hunting' value='K'>K</option>");
        } else if (val == "T") {
            $("#loc2").html("<option data-classification=' ' value='_'>- All -</option><option data-classification=': Technology (General)' value=''> </option><option data-classification=': Engineering Civil engineering (General)' value='A'>A</option><option data-classification=': Hydraulic engineering. Ocean engineering' value='C'>C</option><option data-classification=': Environmental technology. Sanitary engineering' value='D'>D</option><option data-classification=': Highway engineering. Roads and pavements' value='E'>E</option><option data-classification=': Railroad engineering and operation' value='F'>F</option><option data-classification=': Bridges' value='G'>G</option><option data-classification=': Building construction' value='H'>H</option><option data-classification=': Mechanical engineering and machinery' value='J'>J</option><option data-classification=': Electrical engineering. Electronics. Nuclear engineering' value='K'>K</option><option data-classification=': Motor vehicles. Aeronautics. Astronautics' value='L'>L</option><option data-classification=': Mining engineering. Metallurgy' value='N'>N</option><option data-classification=': Chemical technology' value='P'>P</option><option data-classification=': Photography' value='R'>R</option><option data-classification=': Manufacturing engineering. Mass production' value='S'>S</option><option data-classification=': Handicrafts. Arts and crafts' value='T'>T</option><option data-classification=': Home economics' value='X'>X</option>");
        } else if (val == "U") {
            $("#loc2").html("<option data-classification='' value='_'>- All -</option><option data-classification=': Military science (General)' value=''> </option><option data-classification=': Armies: Organization, distribution, military situation' value='A'>A</option><option data-classification=': Military administration' value='B'>B</option><option data-classification=': Military maintenance and transportation' value='C'>C</option><option data-classification=': Infantry' value='D'>D</option><option data-classification=': Cavalry. Armor' value='E'>E</option><option data-classification=': Artillery' value='F'>F</option><option data-classification=': Military engineering. Air forces' value='G'>G</option><option data-classification=': Other military services' value='H'>H</option>");
        } else if (val == "V") {
            $("#loc2").html("<option data-classification=' ' value='_'>- All -</option><option data-classification=': Naval science (General)' value=''> </option><option data-classification=': Navies: Organization, distribution, naval situation' value='A'>A</option><option data-classification=': Naval administration' value='B'>B</option><option data-classification=': Naval maintenance' value='C'>C</option><option data-classification=': Naval seamen' value='D'>D</option><option data-classification=': Marines' value='E'>E</option><option data-classification=': Naval ordnance' value='F'>F</option><option data-classification=': Minor services of navies' value='G'>G</option><option data-classification=': Navigation. Merchant marine' value='K'>K</option><option data-classification=': Naval architecture. Shipbuilding. Marine engineering' value='M'>M</option>");
		} else if (val == "Z") {
            $("#loc2").html("<option data-classification=' ' value='_'>- All -</option><option data-classification=': Books (General). Writing. Paleography. Book industries and trade. Libraries. Bibliography' value=''> </option><option data-classification=': Information resources/materials' value='A'>A</option>");
        } else if (val == "Media") {
            $("#loc2").html("<option data-classification='Media' value='_'>- All -</option>");
		} else if (val == "KY") {
            $("#loc2").html("<option data-classification=' Kentucky Documents ' value='_'>- All -</option>");
		} else if (val == "SUDOC") {
            $("#loc2").html("<option data-classification=' ' value='_'>- All -</option><option data-classification=': Agriculture Department' value='-A'>A</option><option data-classification=': ACTION' value='-AA'>AA</option><option data-classification=': Arms Control and Disarmament Agency' value='-AC'>AC</option><option data-classification=':  National Archives and Records Administration' value='-AE'>AE</option><option data-classification=': Commerce Department' value='-C'>C</option><option data-classification=': Commerce Department, Census Bureau' value='-C3'>C 3</option><option data-classification=': Federal Communications Commission' value='-CC'>CC</option><option data-classification=':  Civil Rights Commission ' value='-CR'>CR</option><option data-classification=': Civil Service Commission' value='-CS'>CS</option><option data-classification=': Defense Department' value='-D'>D</option><option data-classification=': Energy Department' value='-E'>E</option><option data-classification=': Education Department' value='-ED'>ED</option><option data-classification=': Environmental Protection Agency' value='-EP'>EP</option><option data-classification=': Fine Arts Commission' value='-FA'>FA</option><option data-classification=': Farm Credit Administration' value='-FCA'>FCA</option><option data-classification=': Federal Emergency Management Agency' value='-FEM'>FEM</option><option data-classification=': Federal Home Loan Bank Board' value='-FHL'>FHL</option><option data-classification=': Federal Mediation and Conciliation Service' value='-FM'>FM</option><option data-classification=': Federal Maritime Commission' value='-FMC'>FMC</option><option data-classification=': Federal Reserve System Board of Governors' value='-FR'>FR</option><option data-classification=':  Foreign-Trade Zones Board' value='-FTZ'>FTZ</option><option data-classification=': Federal Trade Commission' value='-FT'>FT</option><option data-classification=': General Accounting Office' value='-GA'>GA</option><option data-classification=': Government Printing Office' value='-GP'>GP</option><option data-classification=':  General Services Administration' value='-GS'>GS</option><option data-classification=': Health and Human Services Department' value='-HE'>HE</option><option data-classification=': Housing and Urban Development Department' value='-HH'>HH</option><option data-classification=': Homeland Security Department' value='-HS'>HS</option><option data-classification=': Interior Department' value='-I'>I</option><option data-classification=': Interior Department, US Geological Survey' value='-I19'>I 19</option><option data-classification=': US Information Agency'  value='-IA'>IA</option><option data-classification=': Interstate Commerce Commission' value='-IC'>IC</option><option data-classification=': US Agency for International Development' value='-ID'>ID</option><option data-classification=': International Trade Commission' value='-ITC'>ITC</option><option data-classification=': Justice Department' value='-J'>J</option><option data-classification=': Judiciary' value='-JU'>JU</option><option data-classification=': Labor Department' value='-L'>L</option><option data-classification=': Library of Congress' value='-LC'>LC</option><option data-classification=': Merit Systems Protection Board' value='-MS'>MS</option><option data-classification=': National Labor Relations Board' value='-LR'>LR</option><option data-classification=': National Academy of Sciences' value='-NA'>NA</option><option data-classification=': National Aeronautics and Space Administration'  value='-NAS'>NAS</option><option data-classification=': National Capital Planning Commission' value='-NC'>NC</option><option data-classification=': National Credit Union Administration' value='-NCU'>NCU</option><option data-classification=': National Foundation on the Arts and the Humanities' value='-NF'>NF</option><option data-classification=': National Mediation Board' value='-NMB'>NMB</option><option data-classification=': National Science Foundation' value='-NS'>NS</option><option data-classification=': Overseas Private Investment Corporation' value='-OP'>OP</option><option data-classification=': US Postal Service' value='-P'>P</option><option data-classification=': Peace Corps' value='-PE'>PE</option><option data-classification=': Personnel Management Office' value='-PM'>PM</option><option data-classification=': President of the United States' value='-PR'>PR</option><option data-classification=': Executive Office of the President' value='-PrEx'>PrEx</option><option data-classification=': Vice President of the United States' value='-PrVP'>PrVP</option><option data-classification=': Railroad Retirement Board' value='-RR'>RR</option><option data-classification=': State Department ' value='-S'>S</option><option data-classification=': Small Business Administration' value='-SBA'>SBA</option><option data-classification=': Securities and Exchange Commission' value='-SE'>SE</option><option data-classification=': Smithsonian Institution' value='-SI'>SI</option><option data-classification=': Social Security Administration' value='-SSA'>SSA</option><option data-classification=': Treasury Department' value='-T'>T</option><option data-classification=': Treasury Department, Internal Revenue Service' value='-T22'>T 22</option><option data-classification=': Transportation Department' value='-TD'>TD</option><option data-classification=': Veterans Affairs Department' value='-VA'>VA</option><option data-classification=': War Department (SEE D)' value='-W'>W</option><option data-classification=': Congressional Debates' value='-X'>X</option><option data-classification=': Congress' value='-Y'>Y</option><option data-classification=': Congress, Congressional Reports' value='-Y1'>Y 1</option><option data-classification=': Congress, Independent Agencies' value='-Y3'>Y 3</option><option data-classification=': Congress, Congressional Committees' value='-Y4'>Y 4</option><option data-classification=': Congress, Memorial Addresses in Congress' value='-Y7'>Y 7</option><option data-classification=': Congress, Congressional Budget Studies' value='-Y10'>Y 10</option><option data-classification=': Colonial History' value='-Z'>Z</option>");
        } else if (val == "Ref") {
            $("#loc2").html("<option data-classification=' Reference ' value='_'>- All -</option><option data-classification=': General Works' value='-A'>A</option><option data-classification=': Philosophy, Psychology, Religion' value='-B'>B</option><option data-classification=': Auxiliary Sciences of History (General)' value='-C'>C</option><option data-classification=': World History (except American History)' value='-D'>D</option><option data-classification=': American History' value='-E'>E</option><option data-classification=': Local History of the United States and British, Dutch, French, and Latin America' value='-F'>F</option><option data-classification=': Geography, Anthropology, Recreation' value='-G'>G</option><option data-classification=': Social Sciences' value='-H'>H</option><option data-classification=': Political Science' value='-J'>J</option><option data-classification=': Law' value='-K'>K</option><option data-classification=': Political Science' value='-L'>L</option><option data-classification=': Music' value='-M'>M</option><option data-classification=': Fine Arts' value='-N'>N</option><option data-classification=': Language and Literature' value='-P'>P</option><option data-classification=': Science' value='-Q'>Q</option><option data-classification=': Medicine' value='-R'>R</option><option data-classification=': Agriculture' value='-S'>S</option><option data-classification=': Technology' value='-T'>T</option><option data-classification=': Bibliography, Library Science' value='-Z'>Z</option>");
		} else if (val == "loc-1") {
            $("#loc2").html("<option value=''> Range </option>");
			$('#lc-classification1').html("");
			$('#lc-classification2').html("");
			$('#lc-location').html("");
			$('#lc-location2').html("");
			$('#lc-location3').html("");
			$('#lc-location4').html("");
		} else if (val == "loc-1-lc") {
            $("#loc2").html("<option value=''> LC Subclass </option>");
			$('#lc-classification1').html("");
			$('#lc-classification2').html("");
			$('#lc-location').html("");
			$('#lc-location2').html("");
			$('#lc-location3').html("");
			$('#lc-location4').html("");
		}
    });
});





// write subject after call number is selected
$(document).ready(function () {
$('#loc1').on('change', function(){
   var writeLcSubject = $(this).find('option:selected').attr('data-classification');
   $('#lc-classification1').html("<b>SUBJECT:</b> " + writeLcSubject );
   $('#lc-classification2').html("");
   if ( writeLcSubject == " ") {$('#lc-classification1').html("");}

 });
 $('#loc2').on('change', function(){
   var writeLcSubject = $(this).find('option:selected').attr('data-classification');
   $('#lc-classification2').html( writeLcSubject );
 });
});

// finds first and second letter of callnumber including split shelves
$(document).ready(function() {
	var steelyRange = $('#loc1, #loc2').on('change', function(){
		
		var first = $( "#loc1" ).val();
		var second = $( "#loc2" ).val();
		
		var steelyRange2 = first + second;
		var jsonLayer = $(this).attr("data-floorplan");
		$.getJSON('json/floor' + jsonLayer + '.json', function(jd) {
			
			// create arrays to log first value
			var dataIdArr = new Array();
			var dataAisleArr = new Array();
			var dataBinArr = new Array();
			var dataFacingArr = new Array();
			var dataSectionArr = new Array();
			var dataRangeWrapArr = new Array();
			
			for (var i = 0; i < jd.collection.length ; i++) {
				var iC = i + 1; 
				for (var iR = 0; iR < jd.collection[i].shelfRow.length ; iR++) {
					for (var iU = 0; iU < jd.collection[i].shelfRow[iR].shelfUnits.length ; iU++) {
						var iuC = iU + 1; 
						
						// convert all data-layer attributes = nothere
						$("#shelves" + iC + " " + ".shelf" + iuC).attr("data-layer", "nothere" );
						for (var iN = 0; iN < jd.collection[i].shelfRow[iR].shelfUnits[iU].callNumber.length ; iN++) {
							var inC = iN + 1; 
								if (jd.collection[i].shelfRow[iR].shelfUnits[iU].callNumber[iN].lcClass == steelyRange2) {
									// matches get a data-layer attribute = here
									$("#shelves" + iC + " " + ".shelf" + iuC).attr("data-layer", "here" );
									
									// create variables for last location -- variable overwritten, last reported
									var dataAisle = jd.collection[i].shelfRow[iR].aisle ; // aisles per floor 
									var dataId = jd.collection[i].shelfRow[iR].id ; // total sequentially numbered shelf sections per floor
									var dataBin = jd.collection[i].shelfRow[iR].shelfUnits[iU].bin ; // shelves per shelf sections
									var dataFacing = jd.collection[i].shelfRow[iR].facing ;
									var dataSection = jd.collection[i].shelfRow[iR].section ;
									var dataRangeWrap = jd.collection[i].shelfRow[iR].rangewrap ;
									
									// push locations to an array to find location in array
									dataAisleArr.push(dataAisle); 
									dataIdArr.push(dataId); 
									dataBinArr.push(dataBin); 
									dataFacingArr.push(dataFacing);
									dataSectionArr.push(dataSection);
									dataRangeWrapArr.push(dataRangeWrap);
									
									// clip underscore that marks general subjects in data file
									var lcGeneral = jd.collection[i].shelfRow[iR].shelfUnits[iU].callNumber[iN].lcClass ;
									var lcGeneral2 = lcGeneral.slice(0, -1); 
									
									// show location range
									$('#lc-location').html("<b>LOCATION:</b> Browse <b style='color:red;'>" + lcGeneral2 + "</b> callnumbers between <span style='border:1px solid silver; background:#efefef;'>&nbsp;aisle <b>" + dataAisleArr[0] + "</b>, section <b>" + dataIdArr[0] + "</b>, bin <b>" + dataBinArr[0] + "</b> </span>&nbsp;and ending at <span style='border:1px solid silver; background:#efefef;'>&nbsp;aisle <b>" + dataAisle + "</b>, section <b>" + dataId + "</b>, bin <b>" + dataBin + "</b> </span>.");
									
									// alternative show location range
									$('#lc-location3').html("<b> ALT LOCATION:</b> Browse <b style='color:red;'>" + lcGeneral2 + "</b> callnumbers between <span style='border:1px solid silver; background:#efefef;'>&nbsp;section <b>" + dataIdArr[0] + "</b> (aisle <b>" + dataAisleArr[0] + "</b>, range <b>" + dataRangeWrapArr[0] + "</b>, bin <b>" + dataBinArr[0] + "</b> " + dataFacingArr[0] + ") </span>&nbsp;and ending at <span style='border:1px solid silver; background:#efefef;'>&nbsp;section <b>" + dataId + "</b> (aisle <b>" + dataAisle + "</b>, range <b>" + dataRangeWrap + "</b>, bin <b>" + dataBin + "</b> " + dataFacing + ") </span>.");
									break;
								}
								for (var iSc = 0; iSc < jd.collection[i].shelfRow[iR].shelfUnits[iU].callNumber[iN].lcSubClass.length ; iSc++) {
									if (jd.collection[i].shelfRow[iR].shelfUnits[iU].callNumber[iN].lcSubClass[iSc].subClass == steelyRange2) {
									$("#shelves" + iC + " " + ".shelf" + iuC).attr("data-layer", "here" );
									
									// create variables for last location -- variable overwritten, last reported
									dataAisle = jd.collection[i].shelfRow[iR].aisle ; // aisles per floor 
									dataId = jd.collection[i].shelfRow[iR].id ; // total sequentially numbered shelf sections per floor
									dataBin = jd.collection[i].shelfRow[iR].shelfUnits[iU].bin ; // shelves per shelf sections
									dataFacing = jd.collection[i].shelfRow[iR].facing ;
									dataSection = jd.collection[i].shelfRow[iR].section ;
									dataRangeWrap = jd.collection[i].shelfRow[iR].rangewrap ;
									
									// push locations to an array to find location in array
									dataAisleArr.push(dataAisle); 
									dataIdArr.push(dataId); 
									dataBinArr.push(dataBin); 
									dataFacingArr.push(dataFacing);
									dataSectionArr.push(dataSection);
									dataRangeWrapArr.push(dataRangeWrap);
									
									// show location range
									$('#lc-location').html("<b>LOCATION:</b> Browse <b style='color:red;'>" + jd.collection[i].shelfRow[iR].shelfUnits[iU].callNumber[iN].lcSubClass[iSc].subClass + "</b> callnumbers between <span style='border:1px solid silver; background:#efefef;'>&nbsp;aisle <b>" + dataAisleArr[0] + "</b>, section <b>" + dataIdArr[0] + "</b>, bin <b>" + dataBinArr[0] + "</b> </span>&nbsp;and ending at <span style='border:1px solid silver; background:#efefef;'>&nbsp;aisle <b>" + dataAisle + "</b>, section <b>" + dataId + "</b>, bin <b>" + dataBin + "</b> </span>.");
									
									// alternative show location range
									$('#lc-location3').html("<b>ALT LOCATION:</b> Browse <b style='color:red;'>" + jd.collection[i].shelfRow[iR].shelfUnits[iU].callNumber[iN].lcSubClass[iSc].subClass + "</b> callnumbers between <span style='border:1px solid silver; background:#efefef;'>&nbsp;section <b>" + dataIdArr[0] + "</b> (aisle <b>" + dataAisleArr[0] + "</b>, range <b>" + dataRangeWrapArr[0] + "</b>, bin <b>" + dataBinArr[0] + "</b> " + dataFacingArr[0] + ") </span>&nbsp;and ending at <span style='border:1px solid silver; background:#efefef;'>&nbsp;section <b>" + dataId + "</b> (aisle <b>" + dataAisle + "</b>, range <b>" + dataRangeWrap + "</b>, bin <b>" + dataBin + "</b> " + dataFacing + ") </span>.");
									
									break;
								}
							}
						}
					}
				}
			}
			
		});
	});
});