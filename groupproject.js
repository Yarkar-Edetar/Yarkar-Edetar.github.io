var monies = 0
var clickvalue = 1
var shopitem1 = 0 
var shopitem2 = 0 
var shopitem3 = 0 
var shopitem4 = 0 
var shopitem5 = 0
var shopitem6 = 0
var shopitem7 = 0
var shopitem8 = 0
var taxesPossible = 0
var iknklm = 0
var date = new Date();


let img = document.getElementById("clickyThing")

function clickie(){
	monies += clickvalue
}

var currUpgradeProd = 0;
var currUpgradeMult = 0;
var production = 0;
var baseProd = 0;
var multiplierProdBase = 1;
var multiplierProd = 0;
const shopitem1value = 1;
const shopitem2value = 2;
const shopitem3value = 10;
const shopitem4value = 100;
const shopitem5value = 1000;
var knightMight = 1;
const shopitem7value = 10000;
const shopitem8value = 25000;

function prod() {
    multiplierProd = multiplierProdBase;
    if(fear > 0) {
    multiplierProd = multiplierProdBase + .25 * fear
    }
    production = baseProd * multiplierProd;
}


var monies = 0;
var display = document.getElementById("stats")

function updateMoney(){
    rebelCheck();
    power();
    prod();
	display.innerHTML = "Total gold:" + monies + "<br>" + "Production:" + production + "<br>" + "Happiness:" + happiness + "<br>" + "Miltary Might:" + militaryMight;
}

var taxesran = 0
var warlordran = 0
var ecoAdviser = 0
var ecoAdviserJoin = 0
var rebelDemands = 0
var tradeDeal = 0
var loan = 0

function run() {
    monies += production
    if(monies>=10000 && taxesran == 0) {
        if(warlordRunning == 0 && tradeDealRunning == 0 && ecoAdviserRunning == 0 && peasantRevoltRunning == 0 && loanRunning == 0 && ecoFireRunning == 0) {
            setTimeout(chooseChoice("taxes"), 1000)
            taxesran = 1
            taxesRunning = 1
        }
    }
    if(happiness < 0 && warlordran == 0) {
        if(taxesRunning == 0 && tradeDealRunning == 0 && ecoAdviserRunning == 0 && peasantRevoltRunning == 0 && loanRunning == 0 && ecoFireRunning == 0) {
            setTimeout(chooseChoice("warlord"), 1000)
            warlordran = 1
            warlordRunning = 1
        }
    }
    if(production >= 5000 && ecoAdviser == 0 && ecoAdviserJoin == 0) {
        if(taxesRunning == 0 && tradeDealRunning == 0 && warlordRunning == 0 && peasantRevoltRunning == 0 && loanRunning == 0 && ecoFireRunning == 0) {
            setTimeout(chooseChoice("ecoAdiviser"), 1000)
            ecoAdviser = 1
            ecoAdviserRunning = 1
        }
    }
    if(monies>=100000 && production >= 1000 && tradeDeal == 0) {
        if(taxesRunning == 0 && ecoAdviserRunning == 0 && warlordRunning == 0 && peasantRevoltRunning == 0 && loanRunning == 0 && ecoFireRunning == 0) {    
            setTimeout(chooseChoice("tradeDeal"), 1000)
            tradeDeal = 1
            tradeDealRunning = 1
        }
    }
    if(time2-time >= 300000 && loan == 0) {
        if(taxesRunning == 0 && ecoAdviserRunning == 0 && warlordRunning == 0 && peasantRevoltRunning == 0 && tradeDealRunning == 0 && ecoFireRunning == 0) {    
            setTimeout(chooseChoice("loan"), 1000)
            loan = 1
            loanRunning = 1
        }
    }
    if(production >= 5000 && ecoAdviser == 0 && fireable == 1) {
        if(taxesRunning == 0 && ecoAdviserRunning == 0 && warlordRunning == 0 && peasantRevoltRunning == 0 && tradeDealRunning == 0 && loanRunning == 0) {    
            setTimeout(chooseChoice("ecoFire"), 1000)
            ecoFireRunning = 1
        }
    }
}
/* Set the width of the side navigation to 250px */
function opencloseNav() {
	iknklm+=1
	if(iknklm%2==1){
	document.getElementById("mySidenav").style.width = "250px";
	document.getElementById("bar").innerHTML = "Close the shop"
	} else{
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("bar").innerHTML = "Open the shop"
	}
}

/* Set the width of the side navigation to 0 */

function updateBuildings(){
	baseProd = shopitem1*shopitem1value+shopitem3*shopitem3value+shopitem5value*shopitem5+shopitem8*shopitem8value
	clickvalue = 1+shopitem2*shopitem2value+shopitem4*shopitem4value+shopitem7value*shopitem7
	prod()
    
    shopitemonedescription =  "Serfs<br><span class='shopitem1'>"+"You own "+shopitem1+" serfs" + "<br>" + "cost " + serfCost + " gold"+"<br>Adds "+shopitem1value+" gold per second"+"</span>";
    shopItemOne.innerHTML = shopitemonedescription
    shopitemtwodescription = "Farms<br><span class='shopitem2'>" +"You own "+shopitem2+" farms" + "<br>" + "cost " + farmCost + " gold"+"<br>Adds "+shopitem2value+" gold per click"+"</span>";
    shopItemTwo.innerHTML = shopitemtwodescription
    shopitemthreedescription = "Blacksmith<br><span class='shopitem3'>" +"You own "+shopitem3+" blacksmiths" + "<br>" + "cost " + blacksmithcost + " gold"+"<br>Adds "+shopitem3value+" gold per second"+"</span>";
    shopItemThree.innerHTML = shopitemthreedescription
    shopitemfourdescription = "Potato Farm<br><span class='shopitem4'>" +"You own "+shopitem4+" potato farms" + "<br>" + "cost " + pfarmcost + " gold"+"<br>Adds "+shopitem4value+" gold per click"+"</span>";
    shopItemFour.innerHTML = shopitemfourdescription
    shopitemfivedescription = "Merchant<br><span class='shopitem5'>"+"You own "+shopitem5+" merchants"+"<br>" + "cost " + merchantcost + " gold"+"<br>Adds "+shopitem5value+" gold per second"+"</span>";
    shopItemFive.innerHTML = shopitemfivedescription
    shopitemsixdescription = "Knights<br><span class='shopitem6'>"+"You own "+shopitem6+" knights"+"<br>" + "cost " + militaryCost + " gold"+"<br>Adds "+knightMight+" military might per soldier"+"</span>";
    shopItemSix.innerHTML = shopitemsixdescription
    shopitemsevendescription = "Melon Farm<br><span class='shopitem7'>" +"You own "+shopitem7+" Melon farms" + "<br>" + "cost " + mfarmcost + " gold"+"<br>Adds "+shopitem7value+" gold per click"+"</span>";
    shopItemseven.innerHTML = shopitemsevendescription
    shopitemeightdescription = "Lords<br><span class='shopitem8'>" +"You own "+shopitem8+" Lords" + "<br>" + "cost " + lordcost + " gold"+"<br>Adds "+shopitem8value+" gold per second"+"</span>";
    shopItemeight.innerHTML = shopitemeightdescription
}

var producing = setInterval(run, 1000)

setInterval(updateMoney, 50)

var serfCost = 10+(shopitem1**2)
var farmCost = 100+(shopitem2**3)
var blacksmithcost = 1000+(shopitem3**4)
var pfarmcost = 10000+(shopitem4**5)
var merchantcost = 100000+(shopitem5**6)
var militaryCost = 1000000+(shopitem6**7)
var mfarmcost = 1000000+(shopitem7**8)
var lordcost = 10000000+(shopitem8**9)

var shopItemOne = document.getElementById("shopitem1")
var shopItemTwo = document.getElementById("shopitem2")
var shopItemThree = document.getElementById("shopitem3")
var shopItemFour = document.getElementById("shopitem4")
var shopItemFive = document.getElementById("shopitem5")
var shopItemSix = document.getElementById("shopitem6")
var shopItemseven = document.getElementById("shopitem7")
var shopItemeight = document.getElementById("shopitem8")

var shopitemonedescription =  "Serfs<br><span class='shopitem1'>"+"You own "+shopitem1+" serfs" + "<br>" + "cost " + serfCost + " gold"+"<br>Adds "+shopitem1value+" gold per second"+"</span>";
shopItemOne.innerHTML = shopitemonedescription
var shopitemtwodescription = "Farms<br><span class='shopitem2'>" +"You own "+shopitem2+" farms" + "<br>" + "cost " + farmCost + " gold"+"<br>Adds "+shopitem2value+" gold per click"+"</span>";
shopItemTwo.innerHTML = shopitemtwodescription
var shopitemthreedescription = "Blacksmith<br><span class='shopitem3'>" +"You own "+shopitem3+" blacksmiths" + "<br>" + "cost " + blacksmithcost + " gold"+"<br>Adds "+shopitem3value+" gold per second"+"</span>";
shopItemThree.innerHTML = shopitemthreedescription
var shopitemfourdescription = "Potato Farm<br><span class='shopitem4'>" +"You own "+shopitem4+" potato farms" + "<br>" + "cost " + pfarmcost + " gold"+"<br>Adds "+shopitem4value+" gold per click"+"</span>";
shopItemFour.innerHTML = shopitemfourdescription
var shopitemfivedescription = "Merchant<br><span class='shopitem5'>"+"You own "+shopitem5+" merchants"+"<br>" + "cost " + merchantcost + " gold"+"<br>Adds "+shopitem5value+" gold per second"+"</span>";
shopItemFive.innerHTML = shopitemfivedescription
var shopitemsixdescription = "Knights<br><span class='shopitem6'>"+"You own "+shopitem6+" knights"+"<br>" + "cost " + militaryCost + " gold"+"<br>Adds "+knightMight+" military might per soldier"+"</span>";
shopItemSix.innerHTML = shopitemsixdescription
var shopitemsevendescription = "Melon Farm<br><span class='shopitem7'>" +"You own "+shopitem7+" Melon farms" + "<br>" + "cost " + mfarmcost + " gold"+"<br>Adds "+shopitem7value+" gold per click"+"</span>";
shopItemseven.innerHTML = shopitemsevendescription
var shopitemeightdescription = "Lords<br><span class='shopitem8'>" +"You own "+shopitem8+" Lords" + "<br>" + "cost " + lordcost + " gold"+"<br>Adds "+shopitem8value+" gold per second"+"</span>";
shopItemeight.innerHTML = shopitemeightdescription
function shopitem(e){
	switch(e.target.id){
		case "shopitem1":
			if(monies>=10+(shopitem1**2)){
			monies -= 10+(shopitem1**2)
            shopitem1+=1
            serfCost = 10+(shopitem1**2)
			shopitemonedescription =  "Serfs<br><span class='shopitem1'>"+"You own "+shopitem1+" serfs" + "<br>" + "cost " + serfCost + " gold"+"<br>Adds "+shopitem1value+" gold per second"+"</span>";
            shopItemOne.innerHTML = shopitemonedescription//"Serfs " + "cost " + serfCost + " gold";}
	}else{
				console.log("Not enough money")
	}
			
            updateBuildings()
			break;
		case "shopitem2":
			if(monies>=farmCost){
			monies -= farmCost
            shopitem2+=1
            farmCost = 100+(shopitem2**3)
			shopitemtwodescription = "Farms<br><span class='shopitem2'>" +"You own "+shopitem2+" farms" + "<br>" + "cost " + farmCost + " gold"+"<br>Adds "+shopitem2value+" gold per click"+"</span>";
            shopItemTwo.innerHTML = shopitemtwodescription//"Farms " + "cost " + farmCost + " gold";}
}else{
				console.log("Not enough money")
			}
			break;
		case "shopitem3":
			if(monies>=blacksmithcost){
			monies -= blacksmithcost
            shopitem3+=1
            blacksmithcost = 1000+(shopitem3**4)
			shopitemthreedescription = "Blacksmith<br><span class='shopitem3'>" +"You own "+shopitem3+" blacksmiths" + "<br>" + "cost " + blacksmithcost + " gold"+"<br>Adds "+shopitem3value+" gold per second"+"</span>";
            shopItemThree.innerHTML = shopitemthreedescription//"Item3 " + "cost " + blacksmithcost + " gold";}
			}else{
				console.log("Not enough money")
			}
			
            updateBuildings()
			break;
		case "shopitem4":
			if(monies>=pfarmcost){
			monies -= pfarmcost
            shopitem4+=1
            pfarmcost = 10000+(shopitem4**5)
			shopitemfourdescription = "Potato Farm<br><span class='shopitem4'>" +"You own "+shopitem4+" potato farms" + "<br>" + "cost " + pfarmcost + " gold"+"<br>Adds "+shopitem4value+" gold per click"+"</span>";
            shopItemFour.innerHTML = shopitemfourdescription//"Item4 " + "cost " + pfarmcost + " gold";}
			}else{
				console.log("Not enough money")
			}
			break;
        case "shopitem5":
			if(monies>=merchantcost){
			monies -= merchantcost
            shopitem5+=1
            merchantcost = 100000+(shopitem5**5)
			shopitemfivedescription = "Merchant<br><span class='shopitem5'>"+"You own "+shopitem5+" merchants"+" <br>" + "cost " + merchantcost + " gold"+"<br>Adds "+shopitem5value+" gold per second"+"</span>";
            shopItemFive.innerHTML = shopitemfivedescription
			}else{
				console.log("Not enough money")
			}
			break;
        case "shopitem6":
            if(monies>=militaryCost) {
                monies -= militaryCost
                shopitem6+=1
                militaryCost = 1000000+(shopitem6**7)
                shopitemsixdescription = "Knights<br><span class='shopitem6'>"+"You own "+shopitem6+" knights"+"<br>" + "cost " + militaryCost + " gold"+"<br>Adds "+knightMight+" military might per soldier"+"</span>";
                shopItemSix.innerHTML = shopitemsixdescription
            }else{
                console.log("Not enough money")
            }
            break;
		case "shopitem7":
			if(monies>=mfarmcost){
			monies -= mfarmcost
            shopitem7+=1
            mfarmcost = 100000+(shopitem7**8)
			shopitemsevendescription = "Melon Farm<br><span class='shopitem7'>" +"You own "+shopitem7+" Melon farms" + "<br>" + "cost " + mfarmcost + " gold"+"<br>Adds "+shopitem7value+" gold per click"+"</span>";
            shopItemseven.innerHTML = shopitemsevendescription//"Item4 " + "cost " + mfarmcost + " gold";}
			}else{
				console.log("Not enough money")
			}
			break;
		case "shopitem8":
			if(monies>=lordcost){
			monies -= lordcost
            shopitem8+=1
            lordcost = 100000+(shopitem8**9)
			shopitemeightdescription = "Lord<br><span class='shopitem8'>" +"You own "+shopitem8+" Lords" + "<br>" + "cost " + lordcost + " gold"+"<br>Adds "+shopitem8value+" gold per click"+"</span>";
            shopItemeight.innerHTML = shopitemeightdescription//"Item4 " + "cost " + lordcost + " gold";}
			}else{
				console.log("Not enough money")
			}
		default:
			console.log("Invalid shop item")
			break;
			
		
	}
	updateBuildings()
}

var happiness = 0


let decisions = document.getElementById("decisioninfo");
let choice = document.getElementById("choices");
let choice2 = document.getElementById("choices2");
var raised = 0
var lowered = 0
var cruelty = 0
var trades = 0
var refusal = 0
var bartered = 0
var taxesRunning = 0
var warlordRunning = 0
var tradeDealRunning = 0
var ecoAdviserRunning = 0
var peasantRevoltRunning = 0
var loanRunning = 0
var ecoFireRunning = 0
let winscreen = document.body
var time = date.getTime();
var time2 = date.getTime();
chooseChoice();

function chosen(e){
	switch(e.target.className){
        case "taxes":
			if(e.target.id == "raise") {
                alert("The people are unhappy, but they won't pull a stunt like this again.")
                multiplierProdBase += .25
                happiness -= 2
                raised = 1
                rebelCheck();
			 } else if(e.target.id == "lower") {
                alert("The people rejoice your honorable decision!")
                multiplierProdBase -= .25
                happiness += 2
                lowered = 1
            }
            taxesRunning = 0
            chooseChoice();
            break;
        case "warlord":
            if(e.target.id == "attack") {
                if(militaryMight > 10) {
                    alert("We won the battle! Our soldiers have gained battle experience.")
                    happiness += 3
                    knightMight += 1
                } else {
                    alert("We lost, half of our treasury was stolen in the raid.")
                    shopitem6 -= parseInt(.75*shopitem6)
                    militaryCost = 1000000+(shopitem6**7)
                    shopitemsixdescription = "Knights<br><span class='shopitem6'>"+"You own "+shopitem6+" knights"+"<br>" + "cost " + militaryCost + " gold"+"<br>Adds "+knightMight+" military might per soldier"+"</span>";
                    shopItemSix.innerHTML = shopitemsixdescription
                    monies *= .5
                }
            } else if(e.target.id == "surrender") {
                alert("The warlord only demanded a quarter of out treasury!")
                monies = monies*.75
            }
            warlordRunning = 0
            chooseChoice();
            break;
        case "ecoAdiviser":
            if(e.target.id == "agree") {
                alert("The economist joins you!")
                multiplierProdBase -= .1
                ecoAdviserJoin = 1
            } else if(e.target.id == "refuse") {
                alert("The economist leaves.")
            }
            ecoAdviserRunning = 0
            chooseChoice();
            break;
        case "peasantDemand":
            if(e.target.id == "Reverse") {
                alert("The peasants have left the castle.")
            } else if(e.target.id == "Lose") {
                alert("The peasants have torn your kingdom to the ground.")
                monies = 0;
                shopitem2 = 0;
                shopitem4 = 0;
                shopitem7 = 0;
                shopitem6 *= .5;
                updateBuildings();
            }
            peasantRevoltRunning = 0
            chooseChoice();
            break;
        case "tradeDeal":
            if(e.target.id == "trade") {
                alert("The trader leaves, and the people are pleased with the goods.");
                multiplierProdBase -= .1
                time = date.getTime();
                happiness += 3;
                trades = 1
            } else if(e.target.id == "no") {
                alert("The trader is disappointed, but your people more so.");
                happiness -= 3;
                refusal = 1
            } else if(e.target.id == "barter") {
                alert("Turns out, the economist is quite good at haggling.");
                happiness += 3;
                time = date.getTime();
                monies *= .95;
                bartered = 1
            }
            tradeDealRunning = 0
            chooseChoice();
            break;
        case "loan":
            if(e.target.id == "give") {
                alert("You give the trader the money, and he thanks you for your generosity.")
                monies -= 1000000000;
            } else if(e.target.id == "dontHelp") {
                alert("The trader leaves, and he stops sending luxuries to your city.")
                happiness -= 3
                cruelty = 1
            }
            loanRunning = 0
            chooseChoice();
            break;
        case "ecoFire":
            if(e.target.id == "fire") {
                alert("The adviser leaves, displeased.")
                ecoAdviserJoin = 0
            } else if (e.target.id == "keep") {
                alert("The adviser never heard of the decision.")
            }
            ecoFireRunning = 0
            chooseChoice();
            break;
    }
}

var issue = ""
var peasant = ""
var thing = 0

function issues() {
    peasant = parseInt(Math.floor(Math.random() * 3 + 1));
    console.log(peasant)
    while(thing == 0) {
        if(peasant == 1) {
            if(raised == 1) {
                issue = "raising taxes."
                raised = 0
                multiplierProdBase -= .25
                happiness += 2
                thing = 1
            } else {
                peasant = parseInt(Math.floor(Math.random * 3 + 1));
                continue;
            }
        } else if (peasant == 2) {
            if(refusal == 1) {
                issue = "refusing the merchant."
                tradeDeal = 0
                refusal = 0
                happiness += 3
                thing = 1
            } else {
                peasant = parseInt(Math.floor(Math.random * 3 + 1));
                continue;
            }
        } else {
            if(cruelty == 1) {
                issue = "refusing to help the merchant."
                loan = 0
                cruelty = 0
                thing = 1
            } else {
                peasant = parseInt(Math.floor(Math.random * 3 + 1));
                continue;
            }
        }
    }
}

function chooseChoice(recent) {
    switch(recent) {
        case "taxes":
            choice.innerHTML = "The peasants want a lower tax rate, should we listen to them, or raise them? <br> We cannot just ignore them!"
            choice2.innerHTML = "<br><button class='taxes' id='raise'>Raise taxes</button><button class='taxes' id = 'lower'>Lower Taxes</button>"
            if(ecoAdviserJoin == 1) {
                decisions.innerHTML = "This decision is tricky, it depends on what you need. More money, or a happier populace."
            }
            let taxR = document.getElementById("raise")
            let taxL = document.getElementById("lower")
            
            console.log(taxR)
            console.log(taxL)
            
            taxR.addEventListener("click", chosen);
            taxL.addEventListener("click", chosen);
			break;
        case "warlord" :
            choice.innerHTML = "A warlord has noticed the unhappiness of your people, and is attacking! <br> What are your commands?";
            choice2.innerHTML = "<br><button class='warlord' id='attack'>Attack the warlord</button><button class='warlord' id = 'surrender'>Surrender</button>"
            decisions.innerHTML = ""
            
            let battle = document.getElementById("attack")
            let surrender = document.getElementById("surrender")
            
            console.log(battle)
            console.log(surrender)
            
            battle.addEventListener("click", chosen);
            surrender.addEventListener("click", chosen);
            break;
        case "ecoAdiviser":
            choice.innerHTML = "Hello, I am someone well versed in economics, and I'd be willing to help you. <br> For a small fee of course..."
            choice2.innerHTML = "<br><button class='ecoAdiviser' id='agree'>Pay the economist</button><button class='ecoAdiviser' id = 'refuse'>Refuse the help</button>"
            decisions.innerHTML = ""
            
            let agree = document.getElementById("agree");
            let refuse = document.getElementById("refuse");
            
            console.log(agree);
            console.log(refuse);
            
            agree.addEventListener("click", chosen);
            refuse.addEventListener("click", chosen);
            break;
        case "peasantDemand":
            issues();
            choice.innerHTML = "The peasantry has risen up, they demand you take back your decision on " + issue
            choice2.innerHTML = "<br><button class='peasantDemand' id='Reverse'>Reverse your decision</button><button class='peasantDemand' id = 'Lose'>Stand you ground</button>"
            decisions.innerHTML = ""
            
            let reverse = document.getElementById("Reverse");
            let lose = document.getElementById("Lose");
            
            console.log(reverse);
            console.log(lose);
            
            reverse.addEventListener("click", chosen);
            lose.addEventListener("click", chosen);
            break;
        case "tradeDeal":
            choice.innerHTML = "A trader from afar has arrived, he offers to trade you luxuries, for part of your riches in return."
            choice2.innerHTML = "<br><button class='tradeDeal' id='trade'>Make the trade</button><button class='tradeDeal' id = 'no'>Refuse his help</button>"
            if(ecoAdviserJoin == 1) {
                choice2.innerHTML += "<button class='tradeDeal' id='barter'>Renegotiate</button>"
                decisions.innerHTML = "Neither of these are good choices, let me negotiate a more favorable deal."
                
                let barter = document.getElementById("barter");
                
                console.log(barter)
                
                barter.addEventListener("click", chosen);
            }
            
            let trade = document.getElementById("trade");
            let no = document.getElementById("no");
            
            trade.addEventListener("click", chosen);
            no.addEventListener("click", chosen);
            break;
        case "loan":
            choice.innerHTML = "The trader has fallen into debt, and is asking for you to help him out."
            choice2.innerHTML = "<br><button class='loan' id='give'>Give him the money</button><button class='loan' id = 'dontHelp'>Don't help him</button>"
            if(ecoAdviserJoin == 1) {
                decisions.innerHTML = "Pay attention to the consequences of this. It's more than he's making it seem like."
            }
            
            let loans = document.getElementById("give");
            let cruelty = document.getElementById("dontHelp");
            
            loans.addEventListener("click", chosen);
            cruelty.addEventListener("click", chosen);
            break;
        case "ecoFire":
            choice.innerHTML = "Perhaps it's time to fire the economist...."
            choice2.innerHTML = "<br><button class='ecoFire' id='fire'>Yes. I'm tired of him.</button><button class='ecoFire' id = 'keep'>No, he is necessary.</button>"
            decisions.innerHTML = ""
            
            let ecoFired = document.getElementById("fire");
            let ecoKeep = document.getElementById("keep");
            fireable = 0
            
            ecoFired.addEventListener("click", chosen);
            ecoKeep.addEventListener("click", chosen);
            break;
        default:
            choice.innerHTML = "No choices are available at this time."
			choice2.innerHTML = ""
            decisions.innerHTML = ""
            console.log("ran")
            break;
    }
}

var militaryMight = 0;

function power() {
    militaryMight = knightMight*shopitem6
}

var rebellion = 0;
var productionStalled = 0;
var fear = 0;

function rebelCheck() {
    if(happiness <= -10) {
        rebellion++
        if(rebellion == 1) {
            alert("A rebellion has begun!")
        }
    }
    if(rebellion > 0) {
        clearInterval(producing)
        productionStalled = 1;
        happiness += militaryMight-fear;
        fear += militaryMight-fear;
        if(rebelDemands < 1) {
            if(warlordRunning == 0 && tradeDealRunning == 0 && ecoAdviserRunning == 0 && peasantRevoltRunning == 0 && loanRunning == 0 && ecoFireRunning == 0)
                setTimeout(chooseChoice("peasantDemand"), 1000)
                rebelDemands = 1
                peasantRevoltRunning = 1
        }
    }
    if(productionStalled == 1 && happiness >= 0) {
        rebellion = 0;
        producing = setInterval(run, 1000)
        productionStalled = 0
    }
}

var fireable = 0

function crusade() {
    if(militaryMight >= 6.2*10**63) {
        alert("You won the crusade!");
        monies = Infinity;
        happiness = Infinity;
        shopitem8 = Infinity;
        shopitem6 = Infinity;
        winscreen.style.backgroundImage = "url('http://media3.giphy.com/media/M7gtacN7aPNsc/giphy.gif')";
    } else if (shopitem6 < 10){
        alert("You can't crusade with so few soldiers!")
    } else {
        alert("Your crusade has failed!")
        monies -= monies*.75
        if(taxesran == 1) {
            taxesran = 0
            if(raised == 1){
                multiplierProdBase -= .25
                raised = 0
                shopitem6 -= parseInt(.75*shopitem6)
                militaryCost = 1000000+(shopitem6**7)
                shopitemsixdescription = "Knights<br><span class='shopitem6'>"+"You own "+shopitem6+" knights"+"<br>" + "cost " + militaryCost + " gold"+"<br>Adds "+knightMight+" military might per soldier"+"</span>";
                shopItemSix.innerHTML = shopitemsixdescription
            } else {
                multiplierProdBase += .25
                lowered = 0
                shopitem6 -= parseInt(.75*shopitem6)
                militaryCost = 1000000+(shopitem6**7)
                shopitemsixdescription = "Knights<br><span class='shopitem6'>"+"You own "+shopitem6+" knights"+"<br>" + "cost " + militaryCost + " gold"+"<br>Adds "+knightMight+" military might per soldier"+"</span>";
                shopItemSix.innerHTML = shopitemsixdescription
            }
        }
        if(warlordran == 1) {
            warlordran = 0
        }
        if(ecoAdviser == 1) {
            ecoAdviser = 0
            if(ecoAdviserJoin == 1){
                fireable = 1
            }
        }
        if(loan == 1) {
            loan = 0
            if(cruelty == 1) {
                happiness += 3
            }
        }
        if(tradeDeal == 1) {
            tradeDeal = 0
            if(trades == 1) {
                multiplierProdBase += .1
            } else if(refusal == 1) {
                happiness += 3
            } else {
                happiness -= 3
            }
        }
    }
}

function shrink() {
    img.style.width = "460px"
    img.style.height = "300px"
}

function normal() {
    img.style.width = "480px"
    img.style.height = "320px"
}

$("#clickyThing").click(clickie)
$("#clickyThing").mousedown(shrink)
$("#clickyThing").mouseup(normal)
$(".shopitem1").click(shopitem)
$(".shopitem2").click(shopitem)
$(".shopitem3").click(shopitem)
$(".shopitem4").click(shopitem)
$(".shopitem5").click(shopitem)
$(".shopitem6").click(shopitem)
$(".shopitem7").click(shopitem)
$(".shopitem8").click(shopitem)
$("#Crusade").click(crusade)